// Placeholder wordmark until the founder drops in the real logo.
// Bricolage Grotesque 700; the dot of the FIRST "i" in "Fitviyo" is coral
// (matches the app logo — LANDING.md §11).
export function Wordmark({
  className = "",
  as: Tag = "span",
}: {
  className?: string;
  as?: "span" | "div";
}) {
  return (
    <Tag
      role="img"
      className={`font-display font-bold tracking-tight text-bone select-none ${className}`}
      aria-label="Fitviyo"
    >
      <span aria-hidden="true">
        F
        <span className="relative inline-block">
          i
          <span
            className="absolute left-1/2 -translate-x-1/2 rounded-full bg-coral"
            style={{ width: "0.17em", height: "0.17em", top: "0.055em" }}
          />
        </span>
        tviyo
      </span>
    </Tag>
  );
}
