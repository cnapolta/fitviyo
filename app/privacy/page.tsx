import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Fitviyo handles your data. Local-first, privacy-forward: your training data stays yours. No ads, no data selling.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="July 6, 2026">
      <p>
        Fitviyo is built privacy-first. This policy explains what we collect on
        this website and in the Fitviyo app, why, and the choices you have. If
        you have any questions, email us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>The short version</h2>
      <ul>
        <li>
          <strong>The app is local-first.</strong> Your workouts, food, runs,
          and body data live on your device. You can use Fitviyo fully without
          an account.
        </li>
        <li>
          <strong>We don&apos;t sell your data</strong> and we don&apos;t run ads
          or ad-tracking SDKs.
        </li>
        <li>
          <strong>Analytics are anonymous</strong> and contain no personal
          identifiers.
        </li>
      </ul>

      <h2>Information we collect</h2>
      <h3>Waitlist (this website)</h3>
      <p>
        When you join the waitlist, we collect your <strong>email address</strong>{" "}
        and, if you arrived through a referral link, an anonymous referral code.
        We use this only to notify you about early access, launch, and founder
        pricing. We store it securely with our infrastructure provider
        (Supabase) and send email through Resend. We use Cloudflare Turnstile to
        block bots; it may process limited technical data (such as your IP
        address) to verify you&apos;re human.
      </p>
      <h3>The Fitviyo app</h3>
      <p>
        Training and nutrition data you enter is stored locally on your device.
        If you choose to create an account (optional, via Apple or Google) to
        sync across devices or use community features, that data is stored under
        your account with row-level security so only you can access it. We never
        expose your email to the community.
      </p>
      <h3>Analytics</h3>
      <p>
        We use privacy-friendly, cookie-less analytics to understand aggregate
        usage (for example, page views and whether the waitlist form was
        submitted). These measurements are anonymous and are not used to
        profile you.
      </p>

      <h2>How we use information</h2>
      <ul>
        <li>To let you know when Fitviyo launches and to deliver early access.</li>
        <li>To give waitlist members early access before the public launch.</li>
        <li>To operate, secure, and improve our website and app.</li>
      </ul>

      <h2>Sharing</h2>
      <p>
        We share data only with the service providers that make Fitviyo work:
        Supabase (storage), Resend (email), Cloudflare (bot protection), and
        Vercel (hosting and anonymous analytics), and only as needed to provide
        the service. We do not sell your personal information.
      </p>

      <h2>Your rights</h2>
      <p>
        You can unsubscribe from waitlist emails at any time, and you can ask us
        to delete your waitlist email or any account data by emailing{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>. Depending on where you
        live, you may have additional rights under GDPR or CCPA, including access,
        correction, and deletion.
      </p>

      <h2>Data retention</h2>
      <p>
        We keep your waitlist email until launch and for a reasonable period
        after, or until you ask us to delete it. In-app account data is kept
        until you delete your account.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy as Fitviyo evolves. We&apos;ll revise the
        &ldquo;last updated&rdquo; date above when we do.
      </p>
    </LegalLayout>
  );
}
