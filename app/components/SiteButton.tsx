"use client";

import { SITE_DISPLAY, SITE_URL, trackSiteClick } from "../lib/tracking";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg" | "xl";

type SiteButtonProps = {
  location: string;
  label?: string;
  subLabel?: string;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  showUrl?: boolean;
  pulse?: boolean;
  className?: string;
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-5 py-3 text-base",
  lg: "px-6 py-4 text-base",
  xl: "px-7 py-5 text-lg",
};

const variantClasses: Record<Variant, string> = {
  primary:
    "gold-gradient text-[#0a1330] cta-shadow font-bold tracking-wide hover:brightness-105 active:brightness-95",
  secondary:
    "bg-white text-[#0a1330] cta-shadow-white font-semibold hover:bg-white/95 active:bg-white/90",
  ghost:
    "border border-gold/60 text-gold-light bg-white/[0.03] backdrop-blur-sm hover:bg-gold/10 active:bg-gold/15",
};

export default function SiteButton({
  location,
  label = "Visitar nuestro sitio",
  subLabel,
  variant = "primary",
  size = "lg",
  fullWidth = true,
  showUrl = false,
  pulse = false,
  className = "",
}: SiteButtonProps) {
  return (
    <a
      href={SITE_URL}
      onClick={() => trackSiteClick(location)}
      data-tracking-location={location}
      aria-label={`${label}: ${SITE_DISPLAY}`}
      className={[
        "relative inline-flex items-center justify-center gap-3 rounded-full",
        "transition-transform duration-150 will-change-transform",
        "active:scale-[0.98] select-none touch-manipulation",
        sizeClasses[size],
        variantClasses[variant],
        fullWidth ? "w-full" : "",
        pulse ? "pulse-ring" : "",
        className,
      ].join(" ")}
    >
      <span
        className={[
          "inline-flex h-9 w-9 items-center justify-center rounded-full",
          variant === "ghost"
            ? "bg-gold-light/15 text-gold-light border border-gold/40"
            : "bg-[#0a1330] text-gold-light",
        ].join(" ")}
        aria-hidden="true"
      >
        <GlobeIcon />
      </span>

      <span className="flex flex-col items-start leading-tight">
        <span className="font-semibold">{label}</span>
        {subLabel && (
          <span className="text-[11px] uppercase tracking-[0.18em] opacity-80">
            {subLabel}
          </span>
        )}
        {showUrl && (
          <span className="text-[13px] font-medium tracking-wide opacity-90">
            {SITE_DISPLAY}
          </span>
        )}
      </span>
    </a>
  );
}

function GlobeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
    </svg>
  );
}
