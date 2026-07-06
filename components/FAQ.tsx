import { faqs } from "@/lib/content";

export function FAQ() {
  return (
    <section className="hairline bg-ink-1" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-5 py-20 md:py-28">
        <h2
          id="faq-heading"
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Questions, answered.
        </h2>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-bone marker:hidden">
                {f.q}
                <span
                  className="shrink-0 text-coral transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-bone-60">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
