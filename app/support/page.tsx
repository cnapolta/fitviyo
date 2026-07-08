import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with Fitviyo. Contact us and find answers on subscriptions, account deletion, data export, and privacy.",
  alternates: { canonical: "/support" },
  robots: { index: true, follow: true },
};

export default function SupportPage() {
  return (
    <LegalLayout title="Support">
      <p>
        Need a hand with Fitviyo? We&apos;re happy to help. Email us and
        we&apos;ll get back to you, usually within a couple of days.
      </p>
      <p>
        <strong>Contact:</strong>{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>

      <h2>Frequently asked</h2>

      <h3>When does Fitviyo launch, and on what platforms?</h3>
      <p>
        Fitviyo is in development, iOS first. Join the waitlist on{" "}
        <a href="/">fitviyo.com</a> and you&apos;ll be the first to know when
        early access opens.
      </p>

      <h3>How do I manage or cancel Fitviyo Pro?</h3>
      <p>
        Subscriptions are billed by Apple. Manage or cancel anytime in iOS
        Settings → Apple Account → Subscriptions. Refund requests are handled by
        Apple at reportaproblem.apple.com.
      </p>

      <h3>How do I delete my account or export my data?</h3>
      <p>
        In the app: You → Settings → &ldquo;Delete account&rdquo; removes your
        account and all associated data permanently, and &ldquo;Export my
        data&rdquo; gives you a copy (JSON). If you need help, email us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h3>Is my data private?</h3>
      <p>
        Yes. Fitviyo is local-first and private by default: we don&apos;t sell
        your data, run ads, or track you across other apps. See our{" "}
        <a href="/privacy">Privacy Policy</a> for the details.
      </p>

      <h2>Legal</h2>
      <p>
        <a href="/privacy">Privacy Policy</a> ·{" "}
        <a href="/terms">Terms of Use</a>
      </p>
    </LegalLayout>
  );
}
