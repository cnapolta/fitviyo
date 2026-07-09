"use client";

import type { HTMLProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

// Soft, streaky aurora backdrop (CSS-only) in the brand coral palette.
// The heavy blur + low opacity + corner mask keep it from overpowering the
// content on top. Styles live in globals.css (.aurora-lights).
export function AuroraBackground({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden bg-ink-0",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="aurora-lights"
          style={showRadialGradient ? undefined : { maskImage: "none", WebkitMaskImage: "none" }}
        />
      </div>
      {children}
    </div>
  );
}

export default AuroraBackground;
