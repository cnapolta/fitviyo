import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

export function Footer() {
  const year = 2026; // build-time constant (Date.now() unavailable in this env)
  return (
    <footer className="hairline bg-ink-0">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-3 text-sm text-bone-60">
              The private, beautiful workout &amp; nutrition tracker for people
              who actually lift.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 inline-block text-sm text-bone-60 underline decoration-line underline-offset-4 hover:text-bone"
            >
              {site.email}
            </a>
          </div>

          <nav className="flex flex-col gap-3 text-sm" aria-label="Footer">
            <span className="font-semibold text-bone">Company</span>
            <Link
              href="/privacy"
              className="text-bone-60 hover:text-bone"
            >
              Privacy
            </Link>
            <Link href="/terms" className="text-bone-60 hover:text-bone">
              Terms
            </Link>
          </nav>

          <nav className="flex flex-col gap-3 text-sm" aria-label="Social">
            <span className="font-semibold text-bone">Follow</span>
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone-60 hover:text-bone"
            >
              Instagram
            </a>
            <a
              href={site.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone-60 hover:text-bone"
            >
              X
            </a>
            <a
              href={site.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone-60 hover:text-bone"
            >
              TikTok
            </a>
          </nav>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-sm text-bone-60">
          © {year} Fitviyo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
