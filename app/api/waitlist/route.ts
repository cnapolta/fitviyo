import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";
import { rateLimit, sweepRateLimit } from "@/lib/rate-limit";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "0.0.0.0";
}

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET;
  // No secret configured (e.g. local dev) → skip verification.
  if (!secret) return true;
  if (!token) return false;

  try {
    const form = new URLSearchParams();
    form.append("secret", secret);
    form.append("response", token);
    form.append("remoteip", ip);

    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body: form },
    );
    const data = (await res.json()) as { success: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

async function sendConfirmation(email: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[waitlist] RESEND_API_KEY not set, skipping confirmation email");
    return;
  }

  // Lazy import so the SDK isn't bundled when unused.
  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);

  await resend.emails.send({
    from: `Fitviyo <${site.email}>`,
    to: email,
    subject: "You're on the Fitviyo waitlist",
    text: [
      "You're on the list.",
      "",
      "Thanks for joining the Fitviyo waitlist. We'll email you the moment early access opens.",
      "",
      "Train on your terms,",
      "The Fitviyo team",
      "",
      "fitviyo.com",
    ].join("\n"),
    html: confirmationHtml(),
  });
}

function confirmationHtml() {
  return `<!doctype html><html><body style="margin:0;background:#0C0E11;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#EDE9E0">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0C0E11;padding:32px 16px">
    <tr><td align="center">
      <table role="presentation" width="100%" style="max-width:480px;background:#14171C;border:1px solid #262B33;border-radius:16px;padding:32px">
        <tr><td>
          <table role="presentation" cellpadding="0" cellspacing="0"><tr>
            <td style="width:40px;height:40px;background:#FF6044;border-radius:10px;text-align:center;font-size:24px;font-weight:800;color:#0C0E11;font-family:Arial,sans-serif">F</td>
            <td style="padding-left:10px;font-size:20px;font-weight:700;color:#EDE9E0">Fitviyo</td>
          </tr></table>
          <h1 style="margin:22px 0 10px;font-size:26px;color:#EDE9E0">You&rsquo;re on the list.</h1>
          <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:#A6A199">
            Thanks for joining the Fitviyo waitlist. We&rsquo;ll email you the moment early access opens.
          </p>
          <p style="margin:0;font-size:15px;color:#A6A199">Train on your terms,<br/>The Fitviyo team</p>
        </td></tr>
      </table>
      <p style="margin:16px 0 0;font-size:12px;color:#A6A199">© 2026 Fitviyo · <a href="https://fitviyo.com" style="color:#FF6044;text-decoration:none">fitviyo.com</a></p>
    </td></tr>
  </table>
  </body></html>`;
}

export async function POST(req: Request) {
  let payload: {
    id?: string;
    email?: string;
    company?: string;
    turnstileToken?: string;
  };

  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { id, email, company, turnstileToken } = payload;

  // 1. Honeypot — bots fill this hidden field.
  if (company && company.trim() !== "") {
    return NextResponse.json({ ok: true }); // pretend success
  }

  // 2. Validate email.
  const cleanEmail = (email || "").trim().toLowerCase();
  if (!EMAIL_RE.test(cleanEmail) || cleanEmail.length > 254) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  // 3. Rate-limit by IP.
  const ip = getIp(req);
  sweepRateLimit();
  const rl = rateLimit(ip);
  if (!rl.ok) {
    return NextResponse.json(
      { error: "Too many attempts. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(rl.retryAfter) } },
    );
  }

  // 4. Verify Cloudflare Turnstile.
  const human = await verifyTurnstile(turnstileToken || "", ip);
  if (!human) {
    return NextResponse.json(
      { error: "Verification failed. Please try again." },
      { status: 403 },
    );
  }

  // 5. Insert via anon key (RLS: anon INSERT only, no SELECT).
  let supabase;
  try {
    supabase = getSupabaseClient();
  } catch (e) {
    console.error("[waitlist] config error:", (e as Error).message);
    return NextResponse.json(
      { error: "Waitlist is temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }

  const row = {
    id:
      id && /^[0-9a-f-]{36}$/i.test(id)
        ? id
        : crypto.randomUUID(), // client UUID, fall back server-side
    email: cleanEmail,
    confirmed: false,
  };

  const { error } = await supabase.from("waitlist").insert(row);

  if (error) {
    // Duplicate email (unique violation) → treat as already-joined success.
    if (error.code === "23505") {
      return NextResponse.json({ ok: true, duplicate: true });
    }
    console.error("[waitlist] insert error:", error.message);
    return NextResponse.json(
      { error: "Could not join right now. Please try again." },
      { status: 500 },
    );
  }

  // 6. Fire-and-await confirmation email (don't fail the signup if it errors).
  try {
    await sendConfirmation(cleanEmail);
  } catch (e) {
    console.error("[waitlist] email error:", (e as Error).message);
  }

  return NextResponse.json({ ok: true });
}
