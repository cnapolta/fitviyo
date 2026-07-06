"use client";

import { useId, useRef, useState } from "react";
import Script from "next/script";
import { trackShareClick, trackWaitlistSubmit } from "@/lib/analytics";
import { CheckIcon, ArrowRightIcon } from "@/components/icons";

type Status = "idle" | "loading" | "success" | "error";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

function shortCode(uuid: string) {
  return uuid.replace(/-/g, "").slice(0, 8);
}

export function WaitlistForm({
  id,
  variant = "default",
}: {
  id?: string;
  variant?: "default" | "compact";
}) {
  const emailId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [shareUrl, setShareUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — real users never fill this.
    if ((data.get("company") as string)?.trim()) {
      // Silently pretend success for bots.
      setStatus("success");
      return;
    }

    const turnstileToken = (data.get("cf-turnstile-response") as string) || "";
    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      setStatus("error");
      setMessage("Please complete the verification and try again.");
      return;
    }

    const id =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const refCode = shortCode(id);
    const referrer =
      new URLSearchParams(window.location.search).get("ref") || null;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          email,
          refCode,
          referrer,
          company: "", // honeypot placeholder
          turnstileToken,
        }),
      });

      const body = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        setStatus("error");
        setMessage(
          body.error || "Something went wrong. Please try again in a moment.",
        );
        // Reset Turnstile so the user can retry.
        window.turnstile?.reset?.();
        return;
      }

      trackWaitlistSubmit();
      const url = `${window.location.origin}/?ref=${refCode}`;
      setShareUrl(url);
      setStatus("success");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
      window.turnstile?.reset?.();
    }
  }

  async function copyShare() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      trackShareClick("copy");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — ignore */
    }
  }

  if (status === "success") {
    const shareText = encodeURIComponent(
      "I just joined the Fitviyo waitlist — the private, beautiful workout & nutrition tracker for people who lift.",
    );
    return (
      <div
        className="w-full rounded-brand border border-line bg-ink-1 p-6 text-left"
        role="status"
        aria-live="polite"
      >
        <div className="mb-3 flex items-center gap-2 text-coral">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-coral text-ink-0">
            <CheckIcon width={18} height={18} strokeWidth={2.2} />
          </span>
          <span className="font-display text-lg font-semibold text-bone">
            You&apos;re on the list 🎉
          </span>
        </div>
        <p className="text-bone-60">
          Check your inbox — we&apos;ll be in touch. Want to move up? Share your
          link:
        </p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <input
            readOnly
            value={shareUrl}
            aria-label="Your referral link"
            className="min-w-0 flex-1 truncate rounded-lg border border-line bg-ink-2 px-3 py-2 text-sm text-bone-60"
            onFocus={(e) => e.currentTarget.select()}
          />
          <button
            type="button"
            onClick={copyShare}
            className="shrink-0 rounded-lg bg-coral px-4 py-2 text-sm font-semibold text-ink-0 transition-opacity hover:opacity-90"
          >
            {copied ? "Copied!" : "Copy link"}
          </button>
        </div>
        <div className="mt-3 flex gap-4 text-sm text-bone-60">
          <a
            className="underline decoration-line underline-offset-4 hover:text-bone"
            href={`https://x.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackShareClick("x")}
          >
            Share on X
          </a>
          <a
            className="underline decoration-line underline-offset-4 hover:text-bone"
            href={`https://wa.me/?text=${shareText}%20${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackShareClick("whatsapp")}
          >
            Share on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
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

        {/* Honeypot — visually hidden, off the a11y tree, not tab-focusable. */}
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
