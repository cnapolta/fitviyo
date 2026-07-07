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
    replyTo: site.email,
    headers: {
      // Signals legitimacy to inbox providers and gives an easy opt-out.
      "List-Unsubscribe": `<mailto:${site.email}?subject=unsubscribe>`,
    },
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
  const logo = `${site.url}/logo.png`;
  // No background: the email inherits the client's own light/dark surface.
  // Text colors adapt via prefers-color-scheme; inline colors are the
  // light-mode fallback for clients that drop the <style> block. The logo is
  // the real brand image so its colors always render correctly.
  return `<!doctype html><html><head>
  <meta charset="utf-8">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <style>
    body { margin:0; padding:0; background:transparent; }
    @media (prefers-color-scheme: dark) {
      .fv-strong { color:#EDE9E0 !important; }
      .fv-muted { color:#A6A199 !important; }
    }
  </style>
  </head>
  <body>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:transparent">
    <tr><td align="center" style="padding:28px 20px">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:460px">
        <tr><td style="font-family:-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">
          <table role="presentation" cellpadding="0" cellspacing="0"><tr>
            <td><img src="${logo}" alt="Fitviyo" width="40" height="40" style="display:block;border-radius:10px"></td>
            <td class="fv-strong" style="padding-left:10px;font-size:20px;font-weight:700;color:#14171C">Fitviyo</td>
          </tr></table>
          <h1 class="fv-strong" style="margin:22px 0 10px;font-size:26px;font-weight:800;color:#14171C">You&rsquo;re on the list.</h1>
          <p class="fv-muted" style="margin:0 0 22px;font-size:15px;line-height:1.6;color:#5b6470">
            Thanks for joining the Fitviyo waitlist. We&rsquo;ll email you the moment early access opens.
          </p>
          <p class="fv-muted" style="margin:0 0 26px;font-size:15px;line-height:1.6;color:#5b6470">Train on your terms,<br/>The Fitviyo team</p>
          <p class="fv-muted" style="margin:0;font-size:12px;color:#8a929c">© 2026 Fitviyo · <a href="https://fitviyo.com" style="color:#FF6044;text-decoration:none">fitviyo.com</a></p>
        </td></tr>
      </table>
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
