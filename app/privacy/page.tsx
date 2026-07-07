import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Fitviyo handles your data. Local-first and privacy-forward: your training data stays yours, no ads, no data selling.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="July 7, 2026">
      <p>
        Fitviyo is built privacy-first. This policy explains what we collect on
        this website and in the Fitviyo app, how we use it, who we share it
        with, and the choices you have. If you have any questions, email us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>The short version</h2>
      <ul>
        <li>
          <strong>The app is local-first.</strong> Your workouts, food, runs,
          and body data are stored on your device, and you can use Fitviyo fully
          without an account.
        </li>
        <li>
          <strong>An account is optional.</strong> You only sign in (with Apple
          or Google) if you want to sync across devices or use the community.
        </li>
        <li>
          <strong>We do not sell your data</strong>, we do not run ads, and we do
          not use ad-tracking SDKs.
        </li>
        <li>
          <strong>Analytics are anonymous</strong> and contain no personal
          identifiers.
        </li>
      </ul>

      <h2>Information we collect</h2>

      <h3>Website waitlist</h3>
      <p>
        When you join the waitlist, we collect your <strong>email address</strong>.
        We use it only to tell you about early access and launch. We store it
        with our infrastructure provider (Supabase) and send email through
        Resend. We use Cloudflare Turnstile to block bots, which may process
        limited technical data such as your IP address to verify that you are
        human.
      </p>

      <h3>Your account</h3>
      <p>
        If you choose to create an account, we use <strong>Sign in with Apple</strong>{" "}
        or <strong>Google</strong>. We receive a unique identifier and, depending
        on the provider and your choices, an email address. We do not use email
        and password sign-in.
      </p>

      <h3>Profile and fitness data</h3>
      <p>
        To make the app work, you may provide profile details (such as display
        name, goal, experience level, training days, equipment, units, birth
        year, sex, height, starting weight, and activity level) and the data you
        log: workouts and sets, food entries, water, steps, and weight. Some of
        this is <strong>health and fitness information</strong>, which we treat
        with extra care. It stays on your device when you are signed out, and it
        is stored under your account with row-level security when you sync, so
        only you can access it.
      </p>

      <h3>Apple Health</h3>
      <p>
        If you grant permission, Fitviyo reads step data from Apple Health to
        show it alongside your training. We only access what you allow, and you
        can revoke this at any time in your device settings.
      </p>

      <h3>Subscriptions</h3>
      <p>
        If you subscribe to Fitviyo Pro, purchases are handled by the App Store
        or Google Play and managed through RevenueCat. We receive your
        subscription status (for example, whether Pro is active and when it
        renews), not your full payment details, which stay with the app store.
      </p>

      <h3>Push notifications</h3>
      <p>
        If you opt in, we use OneSignal to send reminders and updates. This
        involves a device push token and an anonymous identifier tied to your
        account. You can turn notifications off at any time in your device
        settings.
      </p>

      <h3>Analytics and diagnostics</h3>
      <p>
        We use privacy-friendly, anonymous analytics (Aptabase or PostHog for the
        app, and Vercel Analytics for the website) to understand aggregate usage,
        such as which features are used and whether the waitlist form was
        submitted. These measurements contain no personal identifiers and are not
        used to profile you. We use no advertising or cross-app tracking SDKs.
      </p>

      <h2>How we use information</h2>
      <ul>
        <li>To provide the app: logging, sync, community, and progress views.</li>
        <li>To look up foods you search (see Food data below).</li>
        <li>To manage your Fitviyo Pro subscription and unlock Pro features.</li>
        <li>To send notifications you have opted into.</li>
        <li>To keep the service secure and to fix and improve it.</li>
        <li>To tell waitlist members about early access and launch.</li>
      </ul>

      <h2>Food data</h2>
      <p>
        Food search and barcode lookups are powered by the FatSecret Platform
        API. Your searches are sent through our secure server to FatSecret to
        return nutrition results. Fitviyo displays a &ldquo;Powered by
        fatsecret&rdquo; attribution where required.
      </p>

      <h2>Legal bases (GDPR)</h2>
      <p>
        Where the GDPR applies, we rely on: your <strong>consent</strong> (for
        waitlist email, push notifications, and Apple Health access);{" "}
        <strong>performance of a contract</strong> (to provide your account and
        subscription); and our <strong>legitimate interests</strong> (to keep the
        service secure and to improve it using anonymous analytics).
      </p>

      <h2>Who we share data with</h2>
      <p>
        We share data only with the service providers that make Fitviyo work, and
        only as needed to provide the service:
      </p>
      <ul>
        <li>
          <strong>Supabase</strong>: database, authentication, and storage.
        </li>
        <li>
          <strong>RevenueCat</strong> and the <strong>App Store / Google Play</strong>:
          subscription management and billing.
        </li>
        <li>
          <strong>OneSignal</strong>: push notification delivery.
        </li>
        <li>
          <strong>FatSecret</strong>: food and nutrition lookups.
        </li>
        <li>
          <strong>Apple</strong> and <strong>Google</strong>: sign-in.
        </li>
        <li>
          <strong>Aptabase / PostHog</strong> and <strong>Vercel</strong>:
          anonymous analytics and website hosting.
        </li>
        <li>
          <strong>Resend</strong> and <strong>Cloudflare</strong>: email delivery
          and bot protection for the website.
        </li>
      </ul>
      <p>
        We do not sell your personal information, and we do not share it for
        advertising. When you publish a workout to the community, we show only
        safe details (such as the workout name, a first name or initial, and
        counts). We never expose your email to other users.
      </p>

      <h2>Data retention</h2>
      <p>
        We keep your waitlist email until launch and for a reasonable period
        after, or until you ask us to remove it. Account and fitness data is kept
        until you delete your account, after which it is removed from our systems.
      </p>

      <h2>Security</h2>
      <p>
        Every user table is protected by row-level security so that only the
        owner can read or write their rows. Data is encrypted in transit, and
        privileged keys are held only on our servers, never in the app. No system
        is perfectly secure, but we work to protect your data using industry
        practices.
      </p>

      <h2>Your rights and choices</h2>
      <ul>
        <li>
          <strong>Access and export:</strong> request a copy of your data by
          emailing us.
        </li>
        <li>
          <strong>Delete:</strong> delete your account in the app to wipe your
          data, or email us and we will do it.
        </li>
        <li>
          <strong>Unsubscribe:</strong> opt out of waitlist email at any time.
        </li>
        <li>
          <strong>Withdraw consent:</strong> turn off notifications or Apple
          Health access in your device settings.
        </li>
      </ul>
      <p>
        Depending on where you live, you may have additional rights under the
        GDPR, UK GDPR, or CCPA, including access, correction, deletion, and the
        right not to be discriminated against for exercising them. To make a
        request, email <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>Children</h2>
      <p>
        Fitviyo is not directed to children under 13 (or the minimum age in your
        country), and we do not knowingly collect their data. If you believe a
        child has provided us information, contact us and we will remove it.
      </p>

      <h2>International transfers</h2>
      <p>
        Fitviyo serves a US audience, and your data may be processed in the
        United States and other countries where our providers operate. Where
        required, we use appropriate safeguards for these transfers.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy as Fitviyo evolves. We will revise the
        &ldquo;last updated&rdquo; date above when we do, and we encourage you to
        review it periodically.
      </p>
    </LegalLayout>
  );
}
