import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Delete your account & data",
  description:
    "How to permanently delete your Fitviyo account and data, in the app or by email, and what is deleted vs. kept.",
  alternates: { canonical: "/support" },
  robots: { index: true, follow: true },
};

export default function SupportPage() {
  return (
    <LegalLayout title="Delete your account & data">
      <p>
        Fitviyo lets you permanently delete your account and everything tied to
        it, at any time. You can do it yourself inside the app, or email us and
        we&apos;ll do it for you.
      </p>

      <h2>Option 1: Delete it yourself in the app (instant)</h2>
      <ol>
        <li>
          Open <strong>Fitviyo</strong> and go to the <strong>You</strong> tab.
        </li>
        <li>
          Find <strong>Settings</strong>.
        </li>
        <li>
          Tap <strong>Delete account</strong> (&ldquo;Permanently erase your
          account and data&rdquo;).
        </li>
        <li>
          Confirm with <strong>Delete everything</strong>.
        </li>
      </ol>
      <p>
        Your account and all of its data are erased immediately. This cannot be
        undone.
      </p>

      <h2>Option 2: Ask us to delete it</h2>
      <p>
        If you can&apos;t open the app, email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> from the email address
        on your account (or tell us which email or sign-in method you used) and
        ask us to delete your account. We&apos;ll confirm it&apos;s you and
        delete everything within <strong>30 days</strong> (usually much sooner),
        and email you once it&apos;s done.
      </p>

      <h2>What gets deleted</h2>
      <p>When your account is deleted, we permanently remove:</p>
      <ul>
        <li>
          Your profile: your <strong>name</strong> and{" "}
          <strong>email address</strong>
        </li>
        <li>
          Your <strong>account identifier</strong> (user ID)
        </li>
        <li>
          All <strong>workouts</strong> and training history
        </li>
        <li>
          All <strong>food, nutrition, and weight</strong> logs
        </li>
        <li>
          Anything you <strong>published to the community</strong>
        </li>
        <li>Personalization and app settings tied to your account</li>
      </ul>

      <h2>What may be kept, and why</h2>
      <ul>
        <li>
          <strong>Purchase records.</strong> Fitviyo Pro subscriptions are
          processed by <strong>Apple (App Store)</strong> and{" "}
          <strong>Google (Google Play)</strong>, not by us. Deleting your Fitviyo
          account does <strong>not</strong> cancel an active subscription, so
          cancel it in the App Store or in Google Play. Apple and Google may
          retain transaction records to meet their own legal, tax, and accounting
          obligations.
        </li>
        <li>
          <strong>Anonymous analytics.</strong> We use privacy-focused analytics
          that are aggregated and not linked to your identity, so there&apos;s
          nothing personal to remove.
        </li>
        <li>
          <strong>Records we&apos;re legally required to keep</strong> may be
          retained for the minimum period the law requires, and are then deleted.
        </li>
      </ul>

      <h2>Used Fitviyo without an account?</h2>
      <p>
        If you never signed in (you used Fitviyo as a guest), your data lives
        only on your device, so <strong>uninstalling the app removes it</strong>,
        and there&apos;s nothing stored on our servers to delete.
      </p>

      <h2>More help</h2>
      <p>
        Questions about your data? Email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>. See also our{" "}
        <a href="/privacy">Privacy Policy</a> and{" "}
        <a href="/terms">Terms of Use</a>.
      </p>
    </LegalLayout>
  );
}
