import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Fitviyo handles your data. Privacy-forward: your training data stays yours, no ads, no data selling.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="July 29, 2026">
      <p>
        Fitviyo is built privacy-first. Fitviyo and fitviyo.com are operated by
        Muharremcan Polat (&ldquo;Fitviyo&rdquo;, &ldquo;we&rdquo;). This policy
        explains what we collect on this website and in the Fitviyo app, how we
        use it, who we share it with, and the choices you have. If you have any
        questions, email us at <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>The short version</h2>
      <ul>
        <li>
          <strong>No sign-up required.</strong> Fitviyo works from first launch
          with a private anonymous account, so your data syncs securely from day
          one without you telling us anything about yourself.
        </li>
        <li>
          <strong>Signing in is optional.</strong> You only sign in (with Apple
          or Google) if you want to keep your data across devices, publish to the
          community, or save community workouts.
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
        When you join the waitlist, we collect your email address. We use it only
        to tell you about early access and launch. We store it with our
        infrastructure provider (Supabase) and send email through Resend. We use
        Cloudflare Turnstile to block bots, which may process limited technical
        data such as your IP address to verify that you are human.
      </p>

      <h3>Your account</h3>
      <p>
        The app creates an anonymous account (a random identifier) on first
        launch so your data can sync. If you choose to sign in, we use Sign in
        with Apple or Google. We receive a unique identifier and, depending on
        the provider and your choices, an email address. Apple&apos;s &ldquo;Hide
        My Email&rdquo; is fully supported. We do not use email and password
        sign-in.
      </p>

      <h3>Profile and fitness data</h3>
      <p>
        To make the app work, you may provide profile details (such as display
        name, goal, experience level, training days, equipment, units, birth
        year, sex, height, starting weight, and activity level) and the data you
        log: workouts and sets, food entries, water, steps, and weight. Some of
        this is health and fitness information, which we treat with extra care.
        It is stored under your account (anonymous or signed-in) with row-level
        security, so only you can access it.
      </p>

      <h3>Apple Health</h3>
      <p>
        If you grant permission, Fitviyo reads step data from Apple Health to
        show it alongside your training. We only access what you allow, and you
        can revoke this at any time in your device settings. Data obtained from
        Apple Health is never sold, never shared with third parties for
        advertising, marketing, or data-mining purposes, and is used only to show
        your own activity in the app.
      </p>

      <h3>Health Connect (Android)</h3>
      <p>
        If you connect Fitviyo to Health Connect, we read the following data,
        read-only. Fitviyo never writes any data back to Health Connect.
      </p>
      <p>
        <strong>What we read</strong>
      </p>
      <ul>
        <li>Steps: your daily step count.</li>
        <li>Distance: walking and running distance.</li>
        <li>Exercise: duration of exercise sessions.</li>
      </ul>
      <p>
        <strong>Why we read it</strong>
      </p>
      <p>
        Solely to show your daily movement toward your step goal on the Today
        screen and to calculate your step streak. Nothing else.
      </p>
      <p>
        <strong>What leaves your device</strong>
      </p>
      <ul>
        <li>
          Your daily step total is stored on our servers (Supabase) so your
          progress syncs across your devices and survives reinstalling the app.
        </li>
        <li>
          Distance and exercise duration are displayed on your device only; they
          are never sent to our servers.
        </li>
        <li>
          Your step history is read on the device to calculate your streak and is
          not stored by us.
        </li>
      </ul>
      <p>
        <strong>What we never do</strong>
      </p>
      <ul>
        <li>We never use Health Connect data for advertising or marketing.</li>
        <li>
          We never sell it, and we never share or transfer it to data brokers,
          information resellers, or any third party.
        </li>
        <li>
          We never use it for any purpose other than the features described
          above.
        </li>
      </ul>
      <p>
        <strong>Your control</strong>
      </p>
      <ul>
        <li>
          You can revoke Fitviyo&apos;s access at any time in Health Connect
          &rarr; App permissions. Revoking access stops all reading immediately;
          step totals already saved to your account remain until you delete them.
        </li>
        <li>
          Deleting your Fitviyo account (Settings &rarr; Delete account, or by
          emailing <a href={`mailto:${site.email}`}>{site.email}</a>) permanently
          deletes all stored step data along with the rest of your account.
        </li>
      </ul>

      <h3>Subscriptions</h3>
      <p>
        If you subscribe to Fitviyo Pro, purchases are handled by the App Store
        and managed through RevenueCat. We receive your subscription status (for
        example, whether Pro is active and when it renews), not your full payment
        details, which stay with Apple.
      </p>

      <h3>Push notifications</h3>
      <p>
        If you opt in, we use OneSignal to send reminders and updates. This
        involves a device push token and your account identifier, used only to
        deliver the notifications you asked for. You can turn notifications off at
        any time in your device settings.
      </p>

      <h3>Analytics and diagnostics</h3>
      <p>
        We use privacy-friendly, anonymous analytics (Aptabase for the app and
        Vercel Analytics for the website) to understand aggregate usage, such as
        which features are used and whether the waitlist form was submitted. These
        measurements are not linked to your account, contain no personal
        identifiers, and are not used to profile you. We use no advertising or
        cross-app tracking SDKs.
      </p>

      <h2>How we use information</h2>
      <ul>
        <li>To provide the app: logging, sync, community, and progress views.</li>
        <li>To look up foods you search (see Food data below).</li>
        <li>To manage your Fitviyo Pro subscription and unlock Pro features.</li>
        <li>
          To power optional AI features (workout import and weekly insight) when
          you use them.
        </li>
        <li>To send notifications you have opted into.</li>
        <li>To keep the service secure and to fix and improve it.</li>
        <li>To tell waitlist members about early access and launch.</li>
      </ul>

      <h2>Food data</h2>
      <p>
        Food search and barcode lookups are powered by the FatSecret Platform
        API. Your searches are sent through our secure server to FatSecret to
        return nutrition results; your identity is not. Fitviyo displays a
        &ldquo;Powered by fatsecret&rdquo; attribution where required.
      </p>

      <h2>AI features</h2>
      <p>
        Fitviyo Pro includes optional AI features: turning a training program
        you paste or describe into structured workouts, and a weekly insight
        that summarizes your own activity. When you use these, the text you
        provide or a compact summary of your recent training, nutrition, water,
        and steps is sent through our secure server to Google&apos;s Gemini API
        to generate the result, and is returned to you in the app. This data is
        sent only to produce your result and is handled under Google&apos;s API
        terms; we do not use it to build a profile of you or to serve ads. AI
        features run only when you choose to use them.
      </p>

      <h2>Legal bases (GDPR)</h2>
      <p>
        Where the GDPR applies, we rely on: your consent (for waitlist email,
        push notifications, Apple Health and Health Connect access, and AI
        features); performance
        of a contract
        (to provide your account and subscription); and our legitimate interests
        (to keep the service secure and to improve it using anonymous analytics).
      </p>

      <h2>Who we share data with</h2>
      <p>
        We share data only with the service providers that make Fitviyo work, and
        only as needed to provide the service:
      </p>
      <ul>
        <li>Supabase: database, authentication, and storage.</li>
        <li>RevenueCat and the App Store: subscription management and billing.</li>
        <li>OneSignal: push notification delivery.</li>
        <li>FatSecret: food and nutrition lookups.</li>
        <li>Apple and Google: sign-in.</li>
        <li>
          Google (Gemini API): generating results for the optional AI features,
          only when you use them.
        </li>
        <li>Aptabase and Vercel: anonymous analytics and website hosting.</li>
        <li>Resend and Cloudflare: email delivery and bot protection for the website.</li>
      </ul>
      <p>
        We do not sell your personal information, and we do not share it for
        advertising. When you publish a workout to the community, we show only
        safe details: the workout name, its exercises, your first name, and
        counts. We never expose your email to other users.
      </p>

      <h2>Data retention</h2>
      <p>
        We keep your waitlist email until launch and for a reasonable period
        after, or until you ask us to remove it. Account and fitness data is kept
        until you delete your account, after which it is removed from our systems.
        Stale anonymous accounts that were never signed in are periodically
        deleted automatically.
      </p>

      <h2>Security</h2>
      <p>
        Every user table is protected by row-level security so that only the
        owner can read or write their rows. Data is encrypted in transit,
        authentication tokens are stored in the iOS Keychain, and privileged keys
        are held only on our servers, never in the app. No system is perfectly
        secure, but we work to protect your data using industry practices.
      </p>

      <h2>Your rights and choices</h2>
      <ul>
        <li>
          <strong>Access and export:</strong> use &ldquo;Export my data&rdquo; in
          the app settings for an instant copy of everything (JSON), or email us.
        </li>
        <li>
          <strong>Delete:</strong> delete your account in the app (You → Settings
          → Delete account) to permanently erase your account and data, or email
          us and we will do it.
        </li>
        <li>
          <strong>Unsubscribe:</strong> opt out of waitlist email at any time.
        </li>
        <li>
          <strong>Withdraw consent:</strong> turn off notifications, or revoke
          Apple Health or Health Connect access in your device settings.
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
