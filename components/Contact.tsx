import { site } from "@/lib/site";

export function Contact() {
  return (
    <section className="hairline bg-ink-1" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-2xl px-5 py-20 text-center md:py-28">
        <h2
          id="contact-heading"
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Got a question?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-bone-60">
          We&apos;d love to hear from you. Drop us a line and we&apos;ll get
          back to you.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="btn-glow mt-8 inline-flex items-center gap-2 rounded-xl bg-coral-grad px-6 py-3 font-semibold text-ink-0 hover:opacity-95"
        >
          {site.email}
        </a>
      </div>
    </section>
  );
}
