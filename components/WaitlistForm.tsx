"use client";

import { useId, useState } from "react";
import Script from "next/script";
import { trackWaitlistSubmit } from "@/lib/analytics";
import { CheckIcon, ArrowRightIcon } from "@/components/icons";

type Status = "idle" | "loading" | "success" | "error";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function WaitlistForm({
  id,
}: {
  id?: string;
}) {
  const emailId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — real users never fill this.
    if ((data.get("company") as string)?.trim()) {
      setStatus("success"); // silently pretend success for bots
      return;
    }

    const turnstileToken = (data.get("cf-turnstile-response") as string) || "";
    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      setStatus("error");
      setMessage("Please complete the verification and try again.");
      return;
    }

    const rowId =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: rowId,
          email,
          company: "", // honeypot placeholder
          turnstileToken,
        }),
      });

      const body = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setMessage(
          body.error || "Something went wrong. Please try again in a moment.",
        );
        window.turnstile?.reset?.();
        return;
      }

      trackWaitlistSubmit();
      setStatus("success");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
      window.turnstile?.reset?.();
    }
  }

  if (status === "success") {
    return (
      <div
        className="w-full rounded-brand border border-line bg-ink-1 p-5 text-left"
        role="status"
        aria-live="polite"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-coral text-ink-0">
            <CheckIcon width={20} height={20} strokeWidth={2.2} />
          </span>
          <p className="text-bone">
            <span className="font-display font-semibold">
              You&apos;re on the list. 🎉
            </span>{" "}
            <span className="text-bone-60">
              We just sent you a confirmation email.
            </span>
          </p>
        </div>
        <p className="mt-3 rounded-xl border border-coral/40 bg-coral/10 px-3 py-2.5 text-sm text-bone">
          <strong className="text-coral">Don&apos;t see it?</strong> Check your{" "}
          <strong>spam</strong> or <strong>promotions</strong> folder and mark it
          &ldquo;Not spam&rdquo; so you don&apos;t miss our launch email.
        </p>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      noValidate
      className="w-full"
      aria-describedby={`${emailId}-hint`}
    >
      {TURNSTILE_SITE_KEY && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="lazyOnload"
        />
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label htmlFor={emailId} className="sr-only">
            Email address
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            className="h-13 w-full rounded-xl border border-line bg-ink-1 px-4 py-3 text-bone placeholder:text-bone-60 focus:border-coral focus:outline-none disabled:opacity-60"
          />
        </div>

        {/* Honeypot: visually hidden, off the a11y tree, not tab-focusable. */}
        <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px]">
          <label htmlFor={`${emailId}-company`}>Company</label>
          <input
            id={`${emailId}-company`}
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="group inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-xl bg-coral px-6 py-3 font-semibold text-ink-0 transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "loading" ? "Joining…" : "Join the waitlist"}
          {status !== "loading" && (
            <ArrowRightIcon
              width={18}
              height={18}
              className="transition-transform group-hover:translate-x-0.5"
            />
          )}
        </button>
      </div>

      {TURNSTILE_SITE_KEY && (
        <div
          className="cf-turnstile mt-3"
          data-sitekey={TURNSTILE_SITE_KEY}
          data-theme="dark"
        />
      )}

      <p
        id={`${emailId}-hint`}
        className={`mt-3 text-sm ${status === "error" ? "text-coral" : "text-bone-60"}`}
        role={status === "error" ? "alert" : undefined}
      >
        {status === "error"
          ? message
          : "No spam. Just a heads-up when we launch."}
      </p>
    </form>
  );
}
