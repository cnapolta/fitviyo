import Image from "next/image";

// Brand lockup: the coral "F" tile (founder's logo.png) + the Fitviyo wordmark.
// The visible text supplies the accessible name, so the image is decorative.
export function Logo({
  className = "",
  textClassName = "text-2xl",
  priority = false,
}: {
  className?: string;
  textClassName?: string;
  priority?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo.png"
        alt=""
        width={72}
        height={72}
        priority={priority}
        className="h-9 w-9 rounded-[10px]"
      />
      <span
        className={`font-display font-extrabold tracking-tight text-bone ${textClassName}`}
      >
        Fitviyo
      </span>
    </span>
  );
}
