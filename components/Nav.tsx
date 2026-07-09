import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/25 bg-ink-0/70 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center px-5"
        aria-label="Primary"
      >
        <Link href="/" className="flex items-center" aria-label="Fitviyo home">
          <Logo priority />
        </Link>
      </nav>
    </header>
  );
}
