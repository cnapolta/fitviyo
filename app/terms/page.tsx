import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms for using the Fitviyo website and joining the waitlist.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="July 6, 2026">
      <p>
        These terms govern your use of the Fitviyo website at fitviyo.com and the
        waitlist. By using this site or joining the waitlist, you agree to them.
        Questions? Email <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>The waitlist</h2>
      <p>
        Joining the waitlist reserves your spot for early access and founder
        pricing when Fitviyo launches. It is not a purchase and creates no
        obligation on your part. Founder pricing, early-access timing, and
        features are described in good faith but may change before launch.
      </p>

      <h2>Acceptable use</h2>
      <ul>
        <li>Provide an email address you own and are allowed to use.</li>
        <li>
          Don&apos;t attempt to disrupt, overload, scrape, or abuse the site or
          its forms.
        </li>
        <li>Don&apos;t submit others&apos; information without permission.</li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        The Fitviyo name, logo, copy, and design are owned by Fitviyo. You may
        share links to the site, but you may not copy or repurpose our content
        without permission.
      </p>

      <h2>No warranty</h2>
      <p>
        This website is provided &ldquo;as is&rdquo; during our pre-launch
        period. We work hard to keep it available and accurate, but we don&apos;t
        guarantee it will be uninterrupted or error-free, and product details may
        evolve before launch.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Fitviyo is not liable for any
        indirect or incidental damages arising from your use of this pre-launch
        website.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms as we get closer to launch. Continued use of
        the site after changes means you accept the updated terms.
      </p>

      <p>
        See also our{" "}
        <a href="/privacy">Privacy Policy</a> for how we handle your data.
      </p>
    </LegalLayout>
  );
}
