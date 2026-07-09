import { WaitlistForm } from "@/components/WaitlistForm";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="final-cta-heading">
      <div className="mx-auto max-w-3xl px-5 py-24 text-center md:py-32">
        <h2
          id="final-cta-heading"
          className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl"
        >
          Be <span className="text-coral-grad">first.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-bone-60">
          Join the waitlist for early access. No spam, just a heads-up when we
          launch.
        </p>
        <div className="mx-auto mt-8 max-w-xl">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
