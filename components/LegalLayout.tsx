import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b border-line/70 bg-ink-0/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-3xl items-center justify-between px-5">
          <Link href="/" aria-label="Fitviyo home">
            <Logo />
          </Link>
          <Link
            href="/"
            className="text-sm text-bone-60 hover:text-bone"
          >
            ← Back home
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight">{title}</h1>
        {updated && (
          <p className="mt-3 text-sm text-bone-60">Last updated: {updated}</p>
        )}
        <div className="legal mt-10">{children}</div>
      </main>

      <Footer />
    </>
  );
}
