import { AppleIcon, GooglePlayIcon } from "@/components/icons";
import { site } from "@/lib/site";

// App Store (live) + Google Play (coming soon) download buttons.
export function StoreButtons({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 sm:flex-row ${className}`}
    >
      <a
        href={site.appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Fitviyo on the App Store"
        className="btn-glow inline-flex items-center gap-3 rounded-2xl bg-bone px-5 py-3 text-ink-0"
      >
        <AppleIcon width={26} height={26} className="-mt-0.5" />
        <span className="flex flex-col text-left leading-none">
          <span className="text-[11px] font-medium opacity-70">
            Download on the
          </span>
          <span className="text-lg font-bold">App Store</span>
        </span>
      </a>

      <span
        aria-label="Fitviyo for Android is coming soon"
        className="glass inline-flex cursor-default items-center gap-3 rounded-2xl px-5 py-3"
      >
        <GooglePlayIcon width={22} height={22} className="text-bone-60" />
        <span className="flex flex-col text-left leading-none">
          <span className="text-[11px] font-medium text-bone-60">
            Coming soon on
          </span>
          <span className="text-lg font-bold text-bone">Google Play</span>
        </span>
      </span>
    </div>
  );
}
