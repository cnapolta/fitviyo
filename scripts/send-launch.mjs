// One-off: email everyone on the waitlist that Fitviyo is live on iPhone.
//
// These people opted in expecting a launch email, so this is a legitimate
// announcement (each message includes an unsubscribe header).
//
// Run locally (NEVER commit keys). Get the service-role key from
// Supabase -> Project Settings -> API -> service_role (secret):
//
//   SUPABASE_URL="https://xxxx.supabase.co" \
//   SUPABASE_SERVICE_ROLE_KEY="..." \
//   RESEND_API_KEY="re_..." \
//   node scripts/send-launch.mjs --dry-run     # preview count, sends nothing
//
// Drop --dry-run to actually send. Safe to re-run only if you accept
// duplicates (there is no send-tracking here).

import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const DRY = process.argv.includes("--dry-run");

const {
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
  RESEND_API_KEY,
} = process.env;

const APP_STORE_URL =
  "https://apps.apple.com/us/app/fitviyo-ai-workout-food/id6788548658";
const FROM = "Fitviyo <hello@fitviyo.com>";
const SUBJECT = "Fitviyo is live on iPhone";
const LOGO = "https://fitviyo.com/logo.png";

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}
if (!DRY && !RESEND_API_KEY) {
  console.error("Missing RESEND_API_KEY (required unless --dry-run)");
  process.exit(1);
}

// ── Fetch every waitlist email (paginated, service role bypasses RLS) ──
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const all = [];
const PAGE = 1000;
for (let from = 0; ; from += PAGE) {
  const { data, error } = await supabase
    .from("waitlist")
    .select("email")
    .order("created_at", { ascending: true })
    .range(from, from + PAGE - 1);
  if (error) {
    console.error("Supabase read error:", error.message);
    process.exit(1);
  }
  all.push(...data.map((r) => (r.email || "").trim().toLowerCase()));
  if (data.length < PAGE) break;
}
const emails = [...new Set(all.filter((e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)))];

console.log(`${emails.length} unique recipient(s) on the waitlist.`);
if (DRY) {
  console.log("Dry run: no emails sent. Sample:", emails.slice(0, 5));
  process.exit(0);
}

// ── Send via Resend batch API (max 100 messages per call) ──
const resend = new Resend(RESEND_API_KEY);
const unsub = "<mailto:hello@fitviyo.com?subject=unsubscribe>";

function chunk(arr, n) {
  const out = [];
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
  return out;
}

let sent = 0;
for (const group of chunk(emails, 100)) {
  const messages = group.map((to) => ({
    from: FROM,
    to,
    subject: SUBJECT,
    text: launchText(),
    html: launchHtml(),
    headers: { "List-Unsubscribe": unsub },
  }));
  const { error } = await resend.batch.send(messages);
  if (error) {
    console.error("Resend batch error:", error);
    process.exit(1);
  }
  sent += group.length;
  console.log(`sent ${sent}/${emails.length}`);
}
console.log("Done.");

// ── Templates ────────────────────────────────────────────────────────
function launchText() {
  return [
    "It's here.",
    "",
    "Fitviyo is now live on the App Store, the private, beautiful workout and nutrition tracker for people who actually lift. Thanks for joining the waitlist.",
    "",
    "Download it on iPhone:",
    APP_STORE_URL,
    "",
    "Android is coming soon.",
    "",
    "Train on your terms,",
    "The Fitviyo team",
    "",
    "fitviyo.com",
  ].join("\n");
}

function launchHtml() {
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
            <td><img src="${LOGO}" alt="Fitviyo" width="40" height="40" style="display:block;border-radius:10px"></td>
            <td class="fv-strong" style="padding-left:10px;font-size:20px;font-weight:700;color:#14171C">Fitviyo</td>
          </tr></table>
          <h1 class="fv-strong" style="margin:22px 0 10px;font-size:26px;font-weight:800;color:#14171C">It&rsquo;s here.</h1>
          <p class="fv-muted" style="margin:0 0 22px;font-size:15px;line-height:1.6;color:#5b6470">
            Fitviyo is now live on the App Store, the private, beautiful workout and nutrition tracker for people who actually lift. Thanks for joining the waitlist.
          </p>
          <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 18px"><tr>
            <td style="border-radius:12px;background:#FF6044">
              <a href="${APP_STORE_URL}" style="display:inline-block;padding:13px 22px;font-size:15px;font-weight:700;color:#0C0E11;text-decoration:none;font-family:-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">Download on the App Store</a>
            </td>
          </tr></table>
          <p class="fv-muted" style="margin:0 0 26px;font-size:14px;line-height:1.6;color:#8a929c">Android is coming soon.</p>
          <p class="fv-muted" style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#5b6470">Train on your terms,<br/>The Fitviyo team</p>
          <p class="fv-muted" style="margin:0;font-size:12px;color:#8a929c">© 2026 Fitviyo · <a href="https://fitviyo.com" style="color:#FF6044;text-decoration:none">fitviyo.com</a></p>
        </td></tr>
      </table>
    </td></tr>
  </table>
  </body></html>`;
}
