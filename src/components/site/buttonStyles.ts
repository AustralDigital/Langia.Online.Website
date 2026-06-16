export type SiteButtonVariant = "primary" | "secondary" | "ghost" | "dark" | "darkSecondary";
export type SiteButtonSize = "sm" | "md" | "lg";

const baseButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#048EFF]/40 focus-visible:ring-offset-2";

const sizeClasses: Record<SiteButtonSize, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-12 px-5 text-sm",
  lg: "min-h-14 px-6 text-base",
};

const variantClasses: Record<SiteButtonVariant, string> = {
  primary:
    "border border-[#048EFF] bg-[#048EFF] !text-[#FFFFFF] shadow-[0_16px_34px_rgba(4,142,255,0.22)] hover:border-[#F3B737] hover:bg-[#F3B737] hover:!text-[#FFFFFF]",
  secondary:
    "border border-[#D8E6F4] bg-[#FFFFFF] text-[#0B1F3A] shadow-[0_10px_28px_rgba(11,31,58,0.035)] hover:border-[#D7E6F5] hover:bg-[#F3F7FB] hover:text-[#0B1F3A]",
  ghost:
    "border border-transparent bg-transparent text-[#0B1F3A] hover:bg-[#F3F7FB] hover:text-[#0B1F3A]",
  dark:
    "border border-[#048EFF] bg-[#048EFF] !text-[#FFFFFF] shadow-[0_16px_34px_rgba(4,142,255,0.24)] hover:border-[#F3B737] hover:bg-[#F3B737] hover:!text-[#FFFFFF] focus-visible:ring-[#F3B737]/45 focus-visible:ring-offset-[#0B1F3A]",
  darkSecondary:
    "border border-white/22 bg-white/10 text-[#FFFFFF] backdrop-blur-xl hover:border-white/32 hover:bg-white/18 hover:text-[#FFFFFF] focus-visible:ring-[#F3B737]/45 focus-visible:ring-offset-[#0B1F3A]",
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
  "inline-flex shrink-0 items-center justify-center rounded-full border border-[#048EFF] bg-[#048EFF] !text-[#FFFFFF] transition-all duration-200 hover:border-[#F3B737] hover:bg-[#F3B737] hover:!text-[#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#048EFF]/40";
