import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Fitviyo handles your data. Your data runs your account and shows your progress. No selling, no ads, no cross-app tracking.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="July 8, 2026">
      <p>
        Fitviyo (&ldquo;the app&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a
        workout and nutrition tracker for iOS, operated by Muharremcan Polat.
        This policy explains what data the app collects, why, and what your
        choices are. The short version: your data exists to run your account and
        show you your own progress. We don&apos;t sell it, we don&apos;t use it
        for advertising, and we don&apos;t track you across other apps or
        websites.
      </p>
      <p>
        Contact: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>

      <h2>1. Data we collect</h2>

      <h3>Account</h3>
      <ul>
        <li>
          <strong>Anonymous account.</strong> When you first open Fitviyo, we
          create an anonymous account (a random user ID) so your data can sync.
          No personal information is involved.
        </li>
        <li>
          <strong>Sign-in (optional).</strong> If you sign in with Apple or
          Google, we receive your <strong>email address</strong> and, if you
          share it, your <strong>name</strong>. Apple&apos;s &ldquo;Hide My
          Email&rdquo; is fully supported. We use these only to identify your
          account and never for marketing.
        </li>
      </ul>

      <h3>Fitness and nutrition data you enter</h3>
      <p>
        Workouts, exercises, sets, weights and reps, workout history, body weight
        logs, water intake, and food logs (including foods you scan or search).
        This is the core content of the app; it is stored against your user ID so
        it can sync between your devices.
      </p>

      <h3>Apple Health (HealthKit)</h3>
      <p>
        With your explicit permission, Fitviyo <strong>reads your daily step
        count</strong> from Apple Health to show your movement toward your daily
        goal. We never write to Apple Health.
      </p>
      <p>
        Per Apple&apos;s HealthKit requirements:{" "}
        <strong>
          data obtained from HealthKit is never sold, never shared with third
          parties for advertising, marketing, or data-mining purposes, and is
          used solely to provide the app&apos;s fitness features.
        </strong>{" "}
        Step counts sync to your account (like your other fitness data) only so
        they display consistently across your devices. You can revoke Health
        access at any time in iOS Settings → Privacy → Health.
      </p>

      <h3>Purchases</h3>
      <p>
        If you subscribe to Fitviyo Pro, the purchase is processed by{" "}
        <strong>Apple</strong> and managed through <strong>RevenueCat</strong>{" "}
        (our subscription infrastructure). We receive your subscription status
        (active/expired, product, expiry date) tied to your user ID. We never see
        your payment details. Apple handles all billing.
      </p>

      <h3>Push notifications</h3>
      <p>
        If you enable workout reminders, <strong>OneSignal</strong> (our
        notification provider) stores a push token for your device and your user
        ID so we can deliver the reminders you asked for (training-day reminders,
        streak nudges, subscription notices). Declining notification permission
        disables this entirely.
      </p>

      <h3>Analytics</h3>
      <p>
        We use <strong>Aptabase</strong>, a privacy-first analytics service, to
        understand which features are used (e.g. &ldquo;a workout was
        completed&rdquo;, &ldquo;a food was logged&rdquo;). These events are{" "}
        <strong>anonymous</strong>: they are not linked to your user ID, contain
        no personal data and no content you&apos;ve entered, and Aptabase does
        not track devices across apps.
      </p>

      <h2>2. What we do NOT do</h2>
      <ul>
        <li>
          We do <strong>not</strong> sell your data to anyone.
        </li>
        <li>
          We do <strong>not</strong> use your data for advertising, and there are
          no third-party ad networks in the app.
        </li>
        <li>
          We do <strong>not</strong> track you across other companies&apos; apps
          or websites (no App Tracking Transparency prompt is shown because no
          tracking occurs).
        </li>
        <li>
          We do <strong>not</strong> use Apple Health data for anything other
          than showing you your own steps.
        </li>
      </ul>

      <h2>3. Who processes data on our behalf</h2>
      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Role</th>
              <th>Data involved</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Supabase</td>
              <td>Database &amp; authentication (backend)</td>
              <td>Account, fitness/nutrition data</td>
            </tr>
            <tr>
              <td>Apple / RevenueCat</td>
              <td>Subscription billing &amp; entitlement</td>
              <td>Purchase status, user ID</td>
            </tr>
            <tr>
              <td>OneSignal</td>
              <td>Push notification delivery</td>
              <td>Push token, user ID, reminder preferences</td>
            </tr>
            <tr>
              <td>Aptabase</td>
              <td>Anonymous product analytics</td>
              <td>Feature-usage events (not linked to you)</td>
            </tr>
            <tr>
              <td>FatSecret</td>
              <td>Food database search</td>
              <td>Your food search queries (not your identity)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Each processor receives only what it needs to perform its function.</p>

      <h2>4. Community content</h2>
      <p>
        Everything you create is <strong>private by default</strong>. If you
        choose to publish a workout to the Community, its name and exercise list
        become visible to other users along with your <strong>first name only</strong>,
        never your email or any other account detail. You can unpublish at any
        time in You → Privacy.
      </p>

      <h2>5. Data retention and deletion</h2>
      <ul>
        <li>Your data is retained while your account exists.</li>
        <li>
          Stale anonymous accounts (never signed in, inactive) are periodically
          deleted automatically.
        </li>
        <li>
          <strong>Export:</strong> You → Settings → &ldquo;Export my data&rdquo;
          gives you a copy of everything (JSON).
        </li>
        <li>
          <strong>Deletion:</strong> You can delete your account and all
          associated data from within the app (You → Settings → Delete account).
          Deletion is permanent and takes effect immediately on our systems.
        </li>
      </ul>

      <h2>6. Your rights</h2>
      <p>
        Depending on where you live (including under GDPR and Türkiye&apos;s
        KVKK), you have the right to access, correct, export, or delete your
        personal data, and to object to processing. The in-app export and
        deletion tools cover most of this instantly; for anything else, email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> and we will respond
        within 30 days.
      </p>

      <h2>7. Children</h2>
      <p>
        Fitviyo is not directed at children under 13 (or the minimum age in your
        jurisdiction), and we do not knowingly collect data from them.
      </p>

      <h2>8. Security</h2>
      <p>
        Data is transmitted over TLS and stored with row-level security so each
        account can only access its own records. Authentication tokens are stored
        in the iOS Keychain.
      </p>

      <h2>9. Changes</h2>
      <p>
        We may update this policy as the app evolves. Material changes will be
        reflected by the effective date above and, where appropriate, announced
        in the app.
      </p>
    </LegalLayout>
  );
}
