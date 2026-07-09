import {
  CompassIcon,
  DumbbellIcon,
  TimerIcon,
  FlameIcon,
  ChartIcon,
  ShieldIcon,
} from "@/components/icons";

const features = [
  {
    Icon: CompassIcon,
    title: "A plan for your level",
    body: "Answer a few questions and get a workout plan matched to your goal. No spreadsheets.",
  },
  {
    Icon: DumbbellIcon,
    title: "Custom routines",
    body: "Build your own workouts with supersets, circuits, and rest timers.",
  },
  {
    Icon: TimerIcon,
    title: "Set-by-set player",
    body: "Run every session with last-time weights, a rest timer, and automatic PR detection.",
  },
  {
    Icon: FlameIcon,
    title: "Food & water tracking",
    body: "Log calories, macros, water, and body weight in a tap, with barcode scanning on a real US food database.",
  },
  {
    Icon: ChartIcon,
    title: "Progress you can see",
    body: "Steps sync from Apple Health. Watch weight, streaks, and personal records trend over time.",
  },
  {
    Icon: ShieldIcon,
    title: "Private, with no ads",
    body: "No ads, no ad tracking. Your training is private by default; publish to the community only when you choose.",
  },
];

export function AppFeatures() {
  return (
    <section className="relative" aria-labelledby="appfeatures-heading">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2
            id="appfeatures-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Built for <span className="text-coral-grad">real</span> training.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-bone-60">
            No gimmicks. Just the features you actually need to get stronger.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass rounded-brand p-6"
            >
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-coral-grad text-ink-0">
                <f.Icon width={24} height={24} />
              </span>
              <h3 className="font-display text-lg font-semibold text-bone">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-bone-60">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
