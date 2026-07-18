import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms for using the Fitviyo app and website, including accounts, subscriptions, community, and health disclaimers.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="July 18, 2026">
      <p>
        These terms govern your use of the Fitviyo app and the website at
        fitviyo.com, including the waitlist. Fitviyo is operated by Muharremcan
        Polat (&ldquo;Fitviyo&rdquo;, &ldquo;we&rdquo;). By using Fitviyo, you
        agree to these terms. If you do not agree, please do not use Fitviyo.
        Questions? Email <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>Eligibility</h2>
      <p>
        You must be at least 13 years old (or the minimum age required in your
        country) to use Fitviyo. By using it, you confirm that you meet this
        requirement and can enter into these terms.
      </p>

      <h2>Your account</h2>
      <p>
        Fitviyo works without signing in: the app creates a private anonymous
        account so you can start immediately. If you choose to sign in, you do so
        with Apple or Google. You are responsible for keeping access to your
        sign-in method secure and for activity under your account. Tell us
        promptly if you suspect unauthorized use.
      </p>

      <h2>The waitlist</h2>
      <p>
        Joining the waitlist reserves your spot for early access when Fitviyo
        launches. It is not a purchase and creates no obligation on your part.
        Early-access timing and features are described in good faith but may
        change before launch.
      </p>

      <h2>License to use Fitviyo</h2>
      <p>
        We grant you a personal, non-exclusive, non-transferable, revocable
        license to use the app for your own, non-commercial use, subject to these
        terms. You may not copy, modify, reverse-engineer, resell, or
        redistribute the app or its content except as allowed by law.
      </p>

      <h2>Acceptable use</h2>
      <ul>
        <li>Provide accurate information and an email address you are allowed to use.</li>
        <li>
          Do not disrupt, overload, scrape, or attempt to gain unauthorized
          access to Fitviyo or its systems.
        </li>
        <li>Do not submit other people&apos;s information without permission.</li>
        <li>
          Do not upload unlawful, infringing, or harmful content to the
          community.
        </li>
      </ul>

      <h2>Community content</h2>
      <p>
        Workouts you create are yours. Community workouts are private by default;
        if you choose to publish one, you grant Fitviyo and other users a license
        to view and copy it within the app. We show only safe details: the
        workout name, its exercises, your first name, and counts. We never
        display your email. You are responsible for what you publish, and we may
        remove content or limit access to keep the community safe.
      </p>

      <h2>Subscriptions (Fitviyo Pro)</h2>
      <p>
        Fitviyo offers a free tier and an optional Fitviyo Pro subscription that
        unlocks additional features. Pro is an auto-renewing subscription sold
        and billed through the App Store (and Google Play if Fitviyo comes to
        Android). Current pricing and any introductory offer are shown in the app
        at the point of purchase. Your subscription renews automatically unless
        you cancel it at least 24 hours before the end of the current period. You
        manage or cancel your subscription in your App Store account settings;
        deleting your Fitviyo account does not cancel a subscription. Payments are
        handled by the app store, and refunds are subject to the app store&apos;s
        policies.
      </p>

      <h2>Health and fitness disclaimer</h2>
      <p>
        Fitviyo is a tracking tool, not a medical device or a provider of medical
        advice. It does not diagnose, treat, or prevent any condition, and it does
        not guarantee any result. Calorie and calorie-burn figures are estimates.
        Consult a qualified professional before starting or changing any exercise
        or nutrition program, especially if you have a health condition. You use
        Fitviyo and act on the information in it at your own risk. Nutrition data
        provided through third parties may be incomplete or inaccurate.
        AI-generated workouts and insights are suggestions produced from the
        input you provide and can be wrong or incomplete, so always review them
        and use your own judgment.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The Fitviyo name, logo, copy, design, and images are owned by Fitviyo. You
        may share links to Fitviyo, but you may not copy or repurpose our content
        without permission. You keep all rights to the data you enter.
      </p>

      <h2>Third-party services and app stores</h2>
      <p>
        Fitviyo relies on third-party services, including Apple, Google
        (including the Gemini API that powers the optional AI features),
        FatSecret, Supabase, RevenueCat, OneSignal, and Aptabase. Your use of the
        app through the App Store is also subject to Apple&apos;s terms. Where you
        download the app from the Apple App Store, Apple is not responsible for the
        app, and Apple is a third-party beneficiary of these terms and may enforce
        them against you.
      </p>

      <h2>Disclaimers</h2>
      <p>
        Fitviyo is provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; We
        work hard to keep it reliable and accurate, but we do not guarantee that it
        will be uninterrupted, error-free, or that data will always be preserved.
        To the fullest extent permitted by law, we disclaim all warranties not
        expressly stated here.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Fitviyo and its team are not liable
        for any indirect, incidental, special, or consequential damages, or for any
        loss of data, arising from your use of Fitviyo.
      </p>

      <h2>Termination</h2>
      <p>
        You may stop using Fitviyo at any time, and you can delete your account in
        the app (You → Settings → Delete account). We may suspend or end access if
        you violate these terms or misuse the service. Sections that by their
        nature should survive termination will continue to apply.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws applicable where Fitviyo operates,
        without regard to conflict-of-laws rules. Nothing here limits any rights you
        have that cannot be waived under your local law.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms as Fitviyo evolves. Continued use after changes
        means you accept the updated terms. See also our{" "}
        <a href="/privacy">Privacy Policy</a> for how we handle your data.
      </p>
    </LegalLayout>
  );
}
