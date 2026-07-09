import { BoltIcon, TagIcon, CompassIcon } from "@/components/icons";

const reasons = [
  {
    icon: BoltIcon,
    title: "Early access",
    body: "Be first through the door. Waitlist members get in before the public launch.",
  },
  {
    icon: TagIcon,
    title: "Founding-member perks",
    body: "A few extras for the people who join before we launch.",
  },
  {
    icon: CompassIcon,
    title: "Shape the app",
    body: "Founding members get a real say in what we build next. Tell us what you need.",
  },
];

export function WhyJoin() {
  return (
    <section className="hairline" aria-labelledby="why-heading">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="mb-12 max-w-2xl">
          <h2
            id="why-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Why join now
          </h2>
          <p className="mt-4 text-lg text-bone-60">
            Founding members get early access, founding-member perks, and a say
            in what we build next.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-brand border border-line bg-ink-1 p-7"
            >
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-coral-grad text-ink-0">
                <r.icon width={24} height={24} strokeWidth={1.8} />
              </span>
              <h3 className="font-display text-xl font-semibold text-bone">
                {r.title}
              </h3>
              <p className="mt-2 text-bone-60">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
