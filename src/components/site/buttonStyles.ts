export type SiteButtonVariant = "primary" | "secondary" | "ghost" | "navigation" | "inverse";
export type SiteButtonSize = "sm" | "md" | "lg";

const baseButtonClass =
  "inline-flex min-w-0 cursor-pointer items-center justify-center gap-2 rounded-full text-center font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--langia-signal)] focus-visible:ring-offset-2 motion-reduce:transition-none [&_svg]:shrink-0";

const sizeClasses: Record<SiteButtonSize, string> = {
  sm: "min-h-11 px-4 text-sm",
  md: "min-h-12 px-5 text-sm",
  lg: "min-h-14 px-6 text-base",
};

const variantClasses: Record<SiteButtonVariant, string> = {
  primary:
    "border border-[var(--langia-gold)] bg-[var(--langia-gold)] !text-[var(--langia-navy)] shadow-[0_14px_30px_rgba(243,183,55,0.2)] hover:border-[var(--langia-gold-hover)] hover:bg-[var(--langia-gold-hover)] hover:!text-[var(--langia-navy)]",
  navigation:
    "border border-[var(--langia-gold)] bg-[var(--langia-gold)] !text-[var(--langia-navy)] shadow-[0_14px_30px_rgba(243,183,55,0.2)] hover:border-[var(--langia-gold-hover)] hover:bg-[var(--langia-gold-hover)] hover:!text-[var(--langia-navy)]",
  secondary:
    "border border-[var(--langia-navy)]/18 bg-[var(--langia-white)] !text-[var(--langia-navy)] hover:border-[var(--langia-navy)]/35 hover:bg-[var(--langia-mist)] hover:!text-[var(--langia-navy)]",
  inverse:
    "border border-transparent bg-transparent !text-white hover:bg-white/10 hover:!text-white",
  ghost:
    "border border-transparent bg-transparent !text-[var(--langia-navy)] hover:bg-[var(--langia-mist)] hover:!text-[var(--langia-navy)]",
};

export function siteButtonClass({
  className = "",
  size = "md",
  variant = "primary",
}: {
  className?: string;
  size?: SiteButtonSize;
  variant?: SiteButtonVariant;
} = {}) {
  return [baseButtonClass, sizeClasses[size], variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");
}

export const iconButtonClass =
  "inline-flex min-h-11 min-w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[var(--langia-navy)]/18 bg-white !text-[var(--langia-navy)] transition-colors duration-200 hover:border-[var(--langia-navy)]/35 hover:bg-[var(--langia-mist)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--langia-signal)] focus-visible:ring-offset-2 motion-reduce:transition-none";
