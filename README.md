# Fitviyo — Landing Page & Waitlist

Pre-launch landing page + email waitlist for **Fitviyo**. Next.js (App Router) +
TypeScript + Tailwind v4, deployed on Vercel at **fitviyo.com**.

Built to LANDING.md (page/copy/SEO) and TECH.md §4 (Supabase waitlist).

- **Perfect Lighthouse:** Performance 100 / Accessibility 100 / Best Practices 100 / SEO 100 (desktop); 98/100/100/100 (mobile).
- **Static-first (SSG):** `/`, `/privacy`, `/terms` prerendered; only `POST /api/waitlist` is dynamic.
- **Waitlist:** Turnstile + honeypot + IP rate-limit → Supabase insert (anon, RLS insert-only) → Resend confirmation email. Client-generated UUIDs, insert stays server-side.

---

## 1. Local setup

```bash
npm install
npm run gen:placeholders   # generates /public/images/*.webp + og-image + icons
cp .env.example .env.local # then fill in the values below
npm run dev                # http://localhost:3000
```

`gen:placeholders` only needs to run once (committed assets are fine too).

---

## 2. Environment variables

Set these in `.env.local` (local) **and** in Vercel → Project → Settings →
Environment Variables (Production + Preview).

| Variable | Where to get it | Public? |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Project Settings → API → Project URL | public |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase → Project Settings → API → `anon` `public` key | public (safe by design) |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare → Turnstile → your widget → Site Key | public |
| `TURNSTILE_SECRET` | Cloudflare → Turnstile → your widget → Secret Key | **secret** |
| `RESEND_API_KEY` | Resend → API Keys | **secret** |
| `NEXT_PUBLIC_SITE_URL` | `https://fitviyo.com` (used for canonical/sitemap/share links) | public |

Only the two `_SECRET`/`_KEY` server values are private. The `NEXT_PUBLIC_*`
values are exposed to the browser by design — the anon key is safe because RLS
allows anon **INSERT only, no SELECT** (see `supabase/waitlist.sql`). No
service-role key is used anywhere in this project.

> Dev convenience: if `TURNSTILE_SECRET` is unset the API skips Turnstile
> verification, and if `RESEND_API_KEY` is unset it skips the email — so the
> form works locally before you have keys. Set both before going live.

---

## 3. Supabase (waitlist table + RLS)

1. Create a Supabase project.
2. Open **SQL Editor** → paste and run **`supabase/waitlist.sql`**.
   - Creates `waitlist` (client-UUID PK, `citext` unique email, `ref_code`, etc.).
   - Enables RLS with a single **anon INSERT** policy (no SELECT/UPDATE/DELETE).
   - Adds a `waitlist_count()` RPC that returns **COUNT only** (no rows/emails),
     executable by `anon`.
3. Verify: `select public.waitlist_count();` works; `select * from public.waitlist;`
   is denied for the anon role.

The exact SQL is in [`supabase/waitlist.sql`](supabase/waitlist.sql).

---

## 4. Resend (confirmation email from hello@fitviyo.com)

1. Resend → **Domains → Add Domain** → `fitviyo.com`.
2. Add the DNS records Resend gives you (SPF, DKIM, and a DMARC record) at your
   DNS host — see the GoDaddy table below.
3. Wait for verification (green check).
4. Create an **API key** → set `RESEND_API_KEY`.

The API route sends from `Fitviyo <hello@fitviyo.com>` with the subject
"You're on the Fitviyo waitlist."

---

## 5. Cloudflare Turnstile (bot protection, free)

1. Cloudflare dash → **Turnstile → Add site** → domain `fitviyo.com` (add
   `localhost` for local testing).
2. Copy **Site Key** → `NEXT_PUBLIC_TURNSTILE_SITE_KEY`.
3. Copy **Secret Key** → `TURNSTILE_SECRET`.

The widget renders under the form (dark theme); the token is verified
server-side in `/api/waitlist`.

---

## 6. Deploy to Vercel

1. Push this repo to GitHub/GitLab.
2. Vercel → **New Project** → import the repo. Framework auto-detects **Next.js**.
   Build `next build`, output auto — no config needed.
3. Add all env vars from §2 (Production + Preview).
4. **Deploy.**
5. Project → **Settings → Domains** → add `fitviyo.com` **and** `www.fitviyo.com`.
   Vercel will show the exact DNS records and, for `www`, set the apex/`www`
   redirect (configure `www` → redirect to `fitviyo.com`).

`@vercel/analytics` is enabled automatically on Vercel (page views +
`waitlist_submit` + `share_click`). It's intentionally not loaded off-Vercel.

---

## 7. GoDaddy DNS → point fitviyo.com to Vercel

In **GoDaddy → Domain → DNS → Manage DNS**. Use the values Vercel shows in
Settings → Domains (they're the standard Vercel targets below). Delete any
conflicting parked A/CNAME records GoDaddy added by default.

| Type | Name | Value | TTL |
|---|---|---|---|
| `A` | `@` | `76.76.21.21` | 600 |
| `CNAME` | `www` | `cname.vercel-dns.com` | 600 |

> Always trust the exact target Vercel prints for your project over the generic
> values above if they differ.

**Email deliverability (Resend) — add the records Resend generates for you:**

| Type | Name (host) | Value | Purpose |
|---|---|---|---|
| `TXT` | `@` (or `send`) | `v=spf1 include:...resend... ~all` | SPF |
| `CNAME` / `TXT` | `resend._domainkey` (as Resend shows) | Resend's DKIM value | DKIM |
| `TXT` | `_dmarc` | `v=DMARC1; p=none; rua=mailto:hello@fitviyo.com` | DMARC |

Use the **exact** SPF/DKIM values from the Resend dashboard — the above are the
shape, not literal values. After DNS propagates (minutes–hours), verify in
Resend and in Vercel.

---

## 8. Swapping the placeholder imagery

Placeholders live in `/public/images/` (and `/public/og-image.png`). Drop the
finished Higgsfield/app assets over the **same filenames** — no code change:

| File | LANDING.md §7 asset |
|---|---|
| `hero-athlete-dark-studio.webp` | Hero: athlete mid-set, dark studio, coral rim |
| `feature-build-workouts.webp` | App screen — build workouts |
| `feature-track-nutrition.webp` | App screen — track food/water/steps/runs |
| `feature-share-discover.webp` | App screen — share/discover cards |
| `showcase-running-dawn.webp` | Lone runner at dawn, coral sunrise |
| `showcase-food-highprotein.webp` | High-protein meal, dark stone, coral prop |
| `showcase-community-training.webp` | Group training in low light |
| `og-image.png` (1200×630) | Social share card |

Alt text already carries the prompt for each. Keep the same aspect ratios (or
adjust `width`/`height` / `aspect-*` in the components) to preserve zero layout
shift. Export as `.webp` (Vercel also serves AVIF automatically).

The **logo** is a placeholder wordmark (Bricolage 700, coral dot on the first
"i"). Replace `components/Wordmark.tsx` and `app/icon.svg` with the founder's
real logo when ready.

---

## 8b. Waitlist count (live)

The hero count is **live**: `components/WaitlistCount.tsx` shows
`site.waitlistBaseCount` (edit in `lib/site.ts`) immediately — no layout shift —
then fetches `GET /api/waitlist/count`, which calls the `waitlist_count()` RPC
server-side (COUNT only, never rows/emails) and is CDN-cached for 5 minutes.
Displayed number = baseline + real signups. If the RPC/config is missing it
silently keeps the baseline.

---

## 9. Scripts

| Command | Does |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Production build (SSG) |
| `npm run start` | Serve the production build |
| `npm run gen:placeholders` | Regenerate placeholder images/OG/icons |

---

## 10. Tech notes

- **Fonts:** `next/font/google` self-hosts Bricolage Grotesque (display) +
  Instrument Sans (body) → zero layout shift, no external font requests.
- **Brand tokens:** defined once in `app/globals.css` `@theme` (Tailwind v4) —
  coral `#FF6044`, ink 0–2, line, bone. Text on coral is always ink-0.
- **SEO:** metadata + OpenGraph + Twitter card, JSON-LD (SoftwareApplication +
  Organization + FAQPage), `sitemap.xml`, `robots.txt`, one `h1`, per-page
  canonicals, `manifest.webmanifest`, `theme-color #0C0E11`.
