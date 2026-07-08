import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms for using Fitviyo: accounts, Fitviyo Pro subscriptions, community content, and health disclaimers.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Use" updated="July 8, 2026">
      <p>
        These terms govern your use of the Fitviyo iOS app, operated by
        Muharremcan Polat (&ldquo;we&rdquo;, &ldquo;us&rdquo;). By using Fitviyo
        you agree to them. If you don&apos;t agree, don&apos;t use the app.
      </p>
      <p>
        Contact: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>

      <h2>1. The service</h2>
      <p>
        Fitviyo is a workout and nutrition tracker: you can build and log
        workouts, track food, water, weight and steps, share workout cards, and
        browse community workouts. We license the app to you for personal,
        non-commercial use on Apple devices you own or control, per Apple&apos;s
        standard App Store license terms (EULA).
      </p>

      <h2>2. Not medical advice</h2>
      <p>
        Fitviyo provides fitness and nutrition <strong>tracking</strong>, not
        medical advice. Calorie targets, calorie-burn figures, and similar
        numbers are <strong>estimates</strong>. Consult a qualified professional
        before starting any exercise or diet program, especially if you have a
        medical condition. You exercise at your own risk; stop and seek help if
        you feel pain, dizziness, or discomfort.
      </p>

      <h2>3. Accounts</h2>
      <p>
        The app creates an anonymous account on first launch; you may upgrade it
        by signing in with Apple or Google. You are responsible for activity on
        your account. You can sign out, export your data, or delete your account
        at any time in You → Settings.
      </p>

      <h2>4. Fitviyo Pro (subscriptions)</h2>
      <ul>
        <li>
          Fitviyo Pro is an optional <strong>auto-renewing subscription</strong>:
          annual (with a 7-day free trial) or monthly. Prices are shown in the
          app before purchase in your local currency.
        </li>
        <li>
          Payment is charged to your <strong>Apple Account</strong> at
          confirmation of purchase. For the annual plan, the trial converts to a
          paid subscription unless cancelled at least 24 hours before the trial
          ends.
        </li>
        <li>
          Subscriptions <strong>renew automatically</strong> unless auto-renew is
          turned off at least 24 hours before the end of the current period.
          Manage or cancel anytime in iOS Settings → Apple Account →
          Subscriptions (or via Manage subscription in the app).
        </li>
        <li>
          Refunds are handled by Apple under App Store policies
          (reportaproblem.apple.com).
        </li>
        <li>
          Unused trial time is forfeited when you purchase a subscription
          mid-trial.
        </li>
      </ul>

      <h2>5. Community content</h2>
      <ul>
        <li>
          Workouts you create are private by default. Publishing one makes its
          name and exercise list visible to all users, attributed to your first
          name.
        </li>
        <li>
          By publishing, you grant us a non-exclusive, worldwide license to
          display and distribute that workout within the app (including letting
          other users save a copy). You can unpublish at any time; copies other
          users already saved remain theirs.
        </li>
        <li>
          Don&apos;t publish content that is unlawful, misleading, infringing, or
          abusive. We may remove content or restrict accounts that violate these
          terms.
        </li>
      </ul>

      <h2>6. Acceptable use</h2>
      <p>
        You agree not to: reverse-engineer, scrape, or disrupt the service;
        access other users&apos; data; use the app for any unlawful purpose; or
        misrepresent workouts/nutrition data to other users in ways intended to
        harm them.
      </p>

      <h2>7. Third-party services</h2>
      <p>
        The app relies on third-party services (Apple, Supabase, RevenueCat,
        OneSignal, Aptabase, FatSecret for food data). Food database content is
        provided by FatSecret (&ldquo;Powered by fatsecret&rdquo;) and we
        don&apos;t guarantee its accuracy.
      </p>

      <h2>8. Intellectual property</h2>
      <p>
        The app, its design, and its content (excluding your data and content)
        are ours or our licensors&apos;. You keep all rights to the data you
        enter.
      </p>

      <h2>9. Disclaimers and liability</h2>
      <p>
        The app is provided <strong>&ldquo;as is&rdquo;</strong>. To the maximum
        extent permitted by law, we disclaim all warranties and are not liable
        for indirect, incidental, or consequential damages, including injury
        arising from exercise decisions, data loss, or service interruptions. Our
        total liability is limited to the amount you paid us in the 12 months
        before the claim. Nothing in these terms limits liability that cannot be
        limited by law.
      </p>

      <h2>10. Termination</h2>
      <p>
        You can stop using the app or delete your account at any time. We may
        suspend or terminate accounts that violate these terms. Sections that by
        nature survive termination (5, 8, 9, 11) survive.
      </p>

      <h2>11. Governing law</h2>
      <p>
        These terms are governed by the laws of the Republic of Türkiye, without
        prejudice to mandatory consumer protections in your country of residence.
      </p>

      <h2>12. Changes</h2>
      <p>
        We may update these terms; material changes will be reflected by the
        effective date above and, where appropriate, announced in the app.
        Continued use after changes means acceptance. See also our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>
    </LegalLayout>
  );
}
