"use client";

import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_TEL, trackCallClick } from "../lib/tracking";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg" | "xl";

type CallButtonProps = {
  location: string;
  label?: string;
  subLabel?: string;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  showNumber?: boolean;
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

export default function CallButton({
  location,
  label = "Llamar ahora",
  subLabel,
  variant = "primary",
  size = "lg",
  fullWidth = true,
  showNumber = false,
  pulse = false,
  className = "",
}: CallButtonProps) {
  const handleClick = () => {
    trackCallClick(location);
  };

  return (
    <a
      href={`tel:${PHONE_NUMBER_TEL}`}
      onClick={handleClick}
      data-tracking-location={location}
      data-tracking-event="call_click"
      aria-label={`Llamar al ${PHONE_NUMBER_DISPLAY}`}
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
          variant === "primary"
            ? "bg-[#0a1330] text-gold-light"
            : variant === "secondary"
            ? "bg-[#0a1330] text-gold-light"
            : "bg-gold-light/15 text-gold-light border border-gold/40",
        ].join(" ")}
        aria-hidden="true"
      >
        <PhoneIcon />
      </span>

      <span className="flex flex-col items-start leading-tight">
        <span className="font-semibold">{label}</span>
        {subLabel && (
          <span className="text-[11px] uppercase tracking-[0.18em] opacity-80">
            {subLabel}
          </span>
        )}
        {showNumber && (
          <span className="text-[13px] font-medium tracking-wide opacity-90">
            {PHONE_NUMBER_DISPLAY}
          </span>
        )}
      </span>
    </a>
  );
}

function PhoneIcon() {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.94.37 1.86.72 2.73a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.35-1.35a2 2 0 0 1 2.11-.45c.87.35 1.79.59 2.73.72A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}
