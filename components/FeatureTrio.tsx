import Image from "next/image";
import { features } from "@/lib/content";
import { featureIcons } from "@/components/icons";

export function FeatureTrio() {
  return (
    <section className="hairline" aria-labelledby="features-heading">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <h2 id="features-heading" className="sr-only">
          What Fitviyo does
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((f) => {
            const Icon = featureIcons[f.icon];
            return (
              <article
                key={f.title}
                className="flex flex-col overflow-hidden rounded-brand border border-line bg-ink-1"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-ink-2">
                  <Image
                    src={f.img.src}
                    alt={f.img.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 90vw, 360px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-4 inline-flex h-13 w-13 items-center justify-center rounded-xl bg-coral/12 text-coral">
                    <Icon width={28} height={28} strokeWidth={1.7} />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-bone">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-bone-60">{f.body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
