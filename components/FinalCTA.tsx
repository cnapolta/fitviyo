import { StoreButtons } from "@/components/StoreButtons";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="final-cta-heading">
      <div className="mx-auto max-w-3xl px-5 py-24 text-center md:py-32">
        <h2
          id="final-cta-heading"
          className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl"
        >
          Start training <span className="text-coral-grad">today.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-bone-60">
          Fitviyo is out now on iPhone. Free to start, private by default, and
          no ads.
        </p>
        <StoreButtons className="mt-8" />
      </div>
    </section>
  );
}
