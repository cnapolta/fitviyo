import { WaitlistForm } from "@/components/WaitlistForm";

export function FinalCTA() {
  return (
    <section className="hairline relative overflow-hidden" aria-labelledby="final-cta-heading">
      <div
        className="coral-glow pointer-events-none absolute inset-x-0 bottom-0 h-[500px]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-3xl px-5 py-24 text-center md:py-32">
        <h2
          id="final-cta-heading"
          className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl"
        >
          Be first.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-bone-60">
          Join the waitlist for early access and lifetime founder pricing. No
          spam — just a heads-up when we launch.
        </p>
        <div className="mx-auto mt-8 max-w-xl">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
