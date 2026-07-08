# Fitviyo — Landing Copy (for review)

All user-facing text in the Fitviyo landing project, in page order. Use this to
review and improve the wording, then hand the edits back.

**Voice:** confident, clean, a little exclusive. Short sentences. Curiosity over
hype. Never guilt.
**Hard rules:** no em dashes ("—") anywhere; no public pricing (no amounts, no
"founder pricing" numbers, no trial length); don't imply the app is already
downloadable; don't promise a launch date; no medical/guaranteed-results claims.
Product is **pre-launch, iOS-first, US market**.

---

## SEO / metadata (not visible on the page, but indexed & shown in search/social)

- **Page title:** Fitviyo: Train on your terms | Workout & nutrition tracker
- **Meta description:** The private, beautiful workout & nutrition tracker built for people who actually lift. No clutter, no guilt, no ads. Join the waitlist for early access.
- **OpenGraph image alt:** Fitviyo: Train on your terms. Workout & nutrition tracker for people who lift.
- **Web app manifest name:** Fitviyo: Workout & nutrition tracker

**Social share image (og-image) text:**
- Fitviyo
- Train on your terms.
- The private workout & nutrition tracker for people who lift.

---

## Nav
- Logo lockup wordmark: **Fitviyo**

---

## Hero
- **Headline (H1):** Train on your terms.
- **Subhead:** Fitviyo is the private, beautiful workout and nutrition tracker built for people who actually lift. No clutter, no guilt, no ads. Join the waitlist for early access.
- **Email input placeholder:** you@email.com
- **Submit button:** Join the waitlist  *(loading state: "Joining…")*
- **Microcopy under form:** No spam. Just a heads-up when we launch.
- **Social-proof line (0 signups):** Be one of the first to join.
- **Social-proof line (with signups):** `{N}+` people already joined the waitlist  *(counts up from 0 on load)*

---

## Hook / problem
- **Heading (H2):** Most fitness apps get in your way.
- **Body:** They drown you in features you'll never touch, then guilt-trip you for missing a Monday. Fitviyo is different: build your own workouts, track food and runs in seconds, and share your training with a community that gets it.

---

## Feature trio (icon + title + body, each with a photo)
1. **Your workouts, your way.** — Build routines in seconds and run them with a clean, set-by-set player.
2. **Track everything, effortlessly.** — Calories, water, steps, and runs, logged in a tap, on a real US food database.
3. **Where training becomes a movement.** — Share your workouts as beautiful cards and copy the best from the community.

---

## Visual showcase (bento gallery)
- **Heading (H2):** Built for the way you actually train.
- **Subhead:** Lifts, runs, meals, and a community that gets it, all in one dark, distraction-free app.
- **Tile labels:** Lifts · Runs · Nutrition · Community

---

## Why join now
- **Heading (H2):** Why join now
- **Intro:** Founding members get early access, founding-member perks, and a say in what we build next.
- **Card 1 — Early access:** Be first through the door. Waitlist members get in before the public launch.
- **Card 2 — Founding-member perks:** A few extras for the people who join before we launch.
- **Card 3 — Shape the app:** Founding members get a real say in what we build next. Tell us what you need.

---

## Contact
- **Heading (H2):** Got a question?
- **Body:** We'd love to hear from you. Drop us a line and we'll get back to you.
- **Button:** hello@fitviyo.com

---

## Final CTA
- **Heading (H2):** Be first.
- **Body:** Join the waitlist for early access. No spam, just a heads-up when we launch.
- *(repeats the email form)*

---

## Footer
- **Tagline:** The private, beautiful workout & nutrition tracker for people who actually lift.
- **Email:** hello@fitviyo.com
- **Company links:** Privacy · Terms
- **Follow:** Instagram
- **Copyright:** © 2026 Fitviyo. All rights reserved.

---

## Waitlist form — states & messages

**Success state:**
- You're on the list. 🎉 We just sent you a confirmation email.
- *(highlighted note)* **Don't see it?** Check your **spam** or **promotions** folder and mark it "Not spam" so you don't miss our launch email.

**Client-side error messages:**
- Please complete the verification and try again.
- Something went wrong. Please try again in a moment.
- Network error. Please try again.

**Server-side error messages:**
- Invalid request.
- Please enter a valid email address.
- Too many attempts. Please try again shortly.
- Verification failed. Please try again.
- Could not join right now. Please try again.
- Waitlist is temporarily unavailable. Please try again later.

---

## Confirmation email (sent from hello@fitviyo.com)
- **Subject:** You're on the Fitviyo waitlist
- **Heading:** You're on the list.
- **Body:** Thanks for joining the Fitviyo waitlist. We'll email you the moment early access opens.
- **Sign-off:** Train on your terms, / The Fitviyo team
- **Footer:** © 2026 Fitviyo · fitviyo.com

---

# Legal pages

> These are functional/legal docs (also used by the app). Review for clarity and
> tone, but note they're written to be accurate to the architecture — get a
> lawyer to check before launch. Meta descriptions included.

## Privacy Policy
*Meta description: How Fitviyo handles your data. Local-first and privacy-forward: your training data stays yours, no ads, no data selling.*
*(Last updated: July 7, 2026)*

Fitviyo is built privacy-first. This policy explains what we collect on this website and in the Fitviyo app, how we use it, who we share it with, and the choices you have. If you have any questions, email us at hello@fitviyo.com.

**The short version**
- **The app is local-first.** Your workouts, food, runs, and body data are stored on your device, and you can use Fitviyo fully without an account.
- **An account is optional.** You only sign in (with Apple or Google) if you want to sync across devices or use the community.
- **We do not sell your data**, we do not run ads, and we do not use ad-tracking SDKs.
- **Analytics are anonymous** and contain no personal identifiers.

**Information we collect**

*Website waitlist* — When you join the waitlist, we collect your email address. We use it only to tell you about early access and launch. We store it with our infrastructure provider (Supabase) and send email through Resend. We use Cloudflare Turnstile to block bots, which may process limited technical data such as your IP address to verify that you are human.

*Your account* — If you choose to create an account, we use Sign in with Apple or Google. We receive a unique identifier and, depending on the provider and your choices, an email address. We do not use email and password sign-in.

*Profile and fitness data* — To make the app work, you may provide profile details (such as display name, goal, experience level, training days, equipment, units, birth year, sex, height, starting weight, and activity level) and the data you log: workouts and sets, food entries, water, steps, and weight. Some of this is health and fitness information, which we treat with extra care. It stays on your device when you are signed out, and it is stored under your account with row-level security when you sync, so only you can access it.

*Apple Health* — If you grant permission, Fitviyo reads step data from Apple Health to show it alongside your training. We only access what you allow, and you can revoke this at any time in your device settings.

*Subscriptions* — If you subscribe to Fitviyo Pro, purchases are handled by the App Store or Google Play and managed through RevenueCat. We receive your subscription status (for example, whether Pro is active and when it renews), not your full payment details, which stay with the app store.

*Push notifications* — If you opt in, we use OneSignal to send reminders and updates. This involves a device push token and an anonymous identifier tied to your account. You can turn notifications off at any time in your device settings.

*Analytics and diagnostics* — We use privacy-friendly, anonymous analytics (Aptabase or PostHog for the app, and Vercel Analytics for the website) to understand aggregate usage, such as which features are used and whether the waitlist form was submitted. These measurements contain no personal identifiers and are not used to profile you. We use no advertising or cross-app tracking SDKs.

**How we use information**
- To provide the app: logging, sync, community, and progress views.
- To look up foods you search (see Food data below).
- To manage your Fitviyo Pro subscription and unlock Pro features.
- To send notifications you have opted into.
- To keep the service secure and to fix and improve it.
- To tell waitlist members about early access and launch.

**Food data** — Food search and barcode lookups are powered by the FatSecret Platform API. Your searches are sent through our secure server to FatSecret to return nutrition results. Fitviyo displays a "Powered by fatsecret" attribution where required.

**Legal bases (GDPR)** — Where the GDPR applies, we rely on: your consent (for waitlist email, push notifications, and Apple Health access); performance of a contract (to provide your account and subscription); and our legitimate interests (to keep the service secure and to improve it using anonymous analytics).

**Who we share data with** — We share data only with the service providers that make Fitviyo work, and only as needed to provide the service:
- Supabase: database, authentication, and storage.
- RevenueCat and the App Store / Google Play: subscription management and billing.
- OneSignal: push notification delivery.
- FatSecret: food and nutrition lookups.
- Apple and Google: sign-in.
- Aptabase / PostHog and Vercel: anonymous analytics and website hosting.
- Resend and Cloudflare: email delivery and bot protection for the website.

We do not sell your personal information, and we do not share it for advertising. When you publish a workout to the community, we show only safe details (such as the workout name, a first name or initial, and counts). We never expose your email to other users.

**Data retention** — We keep your waitlist email until launch and for a reasonable period after, or until you ask us to remove it. Account and fitness data is kept until you delete your account, after which it is removed from our systems.

**Security** — Every user table is protected by row-level security so that only the owner can read or write their rows. Data is encrypted in transit, and privileged keys are held only on our servers, never in the app. No system is perfectly secure, but we work to protect your data using industry practices.

**Your rights and choices**
- Access and export: request a copy of your data by emailing us.
- Delete: delete your account in the app to wipe your data, or email us and we will do it.
- Unsubscribe: opt out of waitlist email at any time.
- Withdraw consent: turn off notifications or Apple Health access in your device settings.

Depending on where you live, you may have additional rights under the GDPR, UK GDPR, or CCPA, including access, correction, deletion, and the right not to be discriminated against for exercising them. To make a request, email hello@fitviyo.com.

**Children** — Fitviyo is not directed to children under 13 (or the minimum age in your country), and we do not knowingly collect their data. If you believe a child has provided us information, contact us and we will remove it.

**International transfers** — Fitviyo serves a US audience, and your data may be processed in the United States and other countries where our providers operate. Where required, we use appropriate safeguards for these transfers.

**Changes** — We may update this policy as Fitviyo evolves. We will revise the "last updated" date above when we do, and we encourage you to review it periodically.

---

## Terms of Service
*Meta description: The terms for using the Fitviyo app and website, including accounts, subscriptions, community, and health disclaimers.*
*(Last updated: July 7, 2026)*

These terms govern your use of the Fitviyo app and the website at fitviyo.com, including the waitlist. By using Fitviyo, you agree to these terms. If you do not agree, please do not use Fitviyo. Questions? Email hello@fitviyo.com.

**Eligibility** — You must be at least 13 years old (or the minimum age required in your country) to use Fitviyo. By using it, you confirm that you meet this requirement and can enter into these terms.

**Your account** — Fitviyo works without an account. If you choose to create one, you sign in with Apple or Google. You are responsible for keeping access to your sign-in method secure and for activity under your account. Tell us promptly if you suspect unauthorized use.

**The waitlist** — Joining the waitlist reserves your spot for early access when Fitviyo launches. It is not a purchase and creates no obligation on your part. Early-access timing and features are described in good faith but may change before launch.

**License to use Fitviyo** — We grant you a personal, non-exclusive, non-transferable, revocable license to use the app for your own, non-commercial use, subject to these terms. You may not copy, modify, reverse-engineer, resell, or redistribute the app or its content except as allowed by law.

**Acceptable use**
- Provide accurate information and an email address you are allowed to use.
- Do not disrupt, overload, scrape, or attempt to gain unauthorized access to Fitviyo or its systems.
- Do not submit other people's information without permission.
- Do not upload unlawful, infringing, or harmful content to the community.

**Community content** — Workouts you create are yours. Community workouts are private by default; if you choose to publish one, you grant Fitviyo and other users a license to view and copy it within the app. We show only safe details and never display your email. You are responsible for what you publish, and we may remove content or limit access to keep the community safe.

**Subscriptions (Fitviyo Pro)** — Fitviyo offers a free tier and an optional Fitviyo Pro subscription that unlocks additional features. Pro is an auto-renewing subscription sold and billed through the App Store or Google Play. Current pricing and any introductory offer are shown in the app at the point of purchase. Your subscription renews automatically unless you cancel it at least 24 hours before the end of the current period. You manage or cancel your subscription in your App Store or Google Play account settings. Payments are handled by the app store, and refunds are subject to the app store's policies.

**Health and fitness disclaimer** — Fitviyo is a tracking tool, not a medical device or a provider of medical advice. It does not diagnose, treat, or prevent any condition, and it does not guarantee any result. Consult a qualified professional before starting or changing any exercise or nutrition program, especially if you have a health condition. You use Fitviyo and act on the information in it at your own risk. Nutrition data provided through third parties may be incomplete or inaccurate.

**Intellectual property** — The Fitviyo name, logo, copy, design, and images are owned by Fitviyo. You may share links to Fitviyo, but you may not copy or repurpose our content without permission.

**Third-party services and app stores** — Fitviyo relies on third-party services, including Apple, Google, FatSecret, Supabase, RevenueCat, and OneSignal. Your use of the app through the App Store or Google Play is also subject to their terms. Where you download the app from the Apple App Store, Apple is not responsible for the app, and Apple is a third-party beneficiary of these terms and may enforce them against you.

**Disclaimers** — Fitviyo is provided "as is" and "as available." We work hard to keep it reliable and accurate, but we do not guarantee that it will be uninterrupted, error-free, or that data will always be preserved. To the fullest extent permitted by law, we disclaim all warranties not expressly stated here.

**Limitation of liability** — To the fullest extent permitted by law, Fitviyo and its team are not liable for any indirect, incidental, special, or consequential damages, or for any loss of data, arising from your use of Fitviyo.

**Termination** — You may stop using Fitviyo and delete your account at any time. We may suspend or end access if you violate these terms or misuse the service. Sections that by their nature should survive termination will continue to apply.

**Governing law** — These terms are governed by the laws applicable where Fitviyo operates, without regard to conflict-of-laws rules. Nothing here limits any rights you have that cannot be waived under your local law.

**Changes** — We may update these terms as Fitviyo evolves. Continued use after changes means you accept the updated terms. See also our Privacy Policy for how we handle your data.
