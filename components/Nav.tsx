import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink-0/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"
        aria-label="Primary"
      >
        <Link href="/" className="flex items-center" aria-label="Fitviyo home">
          <Logo priority />
        </Link>
        <a
          href="#join"
          className="rounded-lg bg-coral px-4 py-2 text-sm font-semibold text-ink-0 transition-opacity hover:opacity-90"
        >
          Join waitlist
        </a>
      </nav>
    </header>
  );
}
