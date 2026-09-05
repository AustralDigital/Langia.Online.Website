import Image from "next/image";
import { LocalizedLink as Link } from "@/components/site/LocalizedLink";
import type { ReactNode } from "react";

import { siteButtonClass, type SiteButtonVariant } from "@/components/site/buttonStyles";

type MarketingTone = "white" | "mist" | "signal";

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      <path d="M4 12h15" />
      <path d="m14 6 6 6-6 6" />
    </svg>
  );
}

export function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function SiteContainer({
  children,
  className = "",
  reading = false,
}: {
  children: ReactNode;
  className?: string;
  reading?: boolean;
}) {
  return (
    <div className={`mx-auto w-full ${reading ? "max-w-[72ch]" : "max-w-[1480px]"} ${className}`}>
      {children}
    </div>
  );
}

export function MarketingSection({
  children,
  className = "",
  id,
  tone = "white",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: MarketingTone;
}) {
  const tones: Record<MarketingTone, string> = {
    white: "bg-[var(--langia-white)] text-[var(--langia-navy)]",
    mist: "bg-[var(--langia-mist)] text-[var(--langia-navy)]",
    signal: "langia-signal-surface",
  };

  return (
    <section
      id={id}
      data-tone={tone}
      className={`marketing-section scroll-mt-28 px-5 py-24 sm:px-8 sm:py-32 lg:px-12 ${tones[tone]} ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionEyebrow({
  children,
  className = "",
  inverse = false,
}: {
  children: ReactNode;
  className?: string;
  inverse?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] ${
        inverse ? "text-white/72" : "text-[var(--langia-blue-ink)]"
      } ${className}`}
    >
      <span className={`h-2 w-2 shrink-0 rounded-full ${inverse ? "bg-[var(--langia-gold)]" : "bg-[var(--langia-brand-signal)]"}`} />
      {children}
    </p>
  );
}

export function EditorialHeading({
  as = "h2",
  children,
  className = "",
  inverse = false,
  size = "major",
}: {
  as?: "h1" | "h2" | "h3";
  children: ReactNode;
  className?: string;
  inverse?: boolean;
  size?: "hero" | "major" | "secondary" | "card";
}) {
  const Component = as;
  const sizes = {
    hero: "text-[clamp(2.75rem,5.6vw,5.75rem)] leading-[0.98] tracking-[-0.06em]",
    major: "text-[clamp(2.5rem,4.2vw,5rem)] leading-[1.02] tracking-[-0.06em]",
    secondary: "text-[clamp(2rem,3.2vw,3.25rem)] leading-[1.04] tracking-[-0.045em]",
    card: "text-[clamp(1.4rem,2vw,2rem)] leading-[1.08] tracking-[-0.035em]",
  };

  return (
    <Component
      className={`font-heading font-medium ${sizes[size]} ${inverse ? "text-white" : "text-[var(--langia-navy)]"} ${className}`}
    >
      {children}
    </Component>
  );
}

export function SectionHeader({
  body,
  className = "",
  eyebrow,
  inverse = false,
  title,
}: {
  body?: ReactNode;
  className?: string;
  eyebrow: ReactNode;
  inverse?: boolean;
  title: ReactNode;
}) {
  return (
    <div className={`section-header ${className}`}>
      <SectionEyebrow inverse={inverse}>{eyebrow}</SectionEyebrow>
      <EditorialHeading className="mt-8 max-w-[18ch]" inverse={inverse}>
        {title}
      </EditorialHeading>
      {body ? (
        <div className={`mt-7 max-w-2xl text-base leading-8 ${inverse ? "text-white/76" : "text-[var(--langia-muted)]"}`}>
          {body}
        </div>
      ) : null}
    </div>
  );
}

export function MarketingButton({
  children,
  className = "",
  href,
  variant = "primary",
}: {
  children: ReactNode;
  className?: string;
  href: string;
  variant?: SiteButtonVariant;
}) {
  return (
    <Link href={href} className={siteButtonClass({ className, size: "md", variant })}>
      {children}
      <ArrowIcon />
    </Link>
  );
}

export function PageHero({
  actions,
  body,
  className = "",
  eyebrow,
  facts,
  image,
  title,
  tone = "mist",
}: {
  actions?: ReactNode;
  body: ReactNode;
  className?: string;
  eyebrow: ReactNode;
  facts?: readonly string[];
  image?: { src: string; alt: string; position?: string; mobileSrc?: string };
  title: ReactNode;
  tone?: MarketingTone;
}) {
  const inverse = Boolean(image) || tone === "signal";

  return (
    <section className={`page-hero ${image ? "page-hero-photo" : "page-hero-editorial"} ${inverse ? "bg-[var(--langia-navy)] text-white" : "bg-[var(--langia-mist)] text-[var(--langia-navy)]"} ${className}`}>
      {image ? (
        <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
          <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className={`object-cover ${image.mobileSrc ? "hidden sm:block" : ""}`} style={{ objectPosition: image.position ?? "65% center" }} />
          {image.mobileSrc ? <Image src={image.mobileSrc} alt="" fill priority sizes="100vw" className="object-cover sm:hidden" /> : null}
          <div className="page-hero-shade absolute inset-0" />
        </div>
      ) : null}
      <SiteContainer className="relative flex flex-1 flex-col">
        <div className="page-hero-copy">
          <SectionEyebrow inverse={inverse}>{eyebrow}</SectionEyebrow>
          <EditorialHeading as="h1" className="page-hero-title mt-8" inverse={inverse} size="hero">{title}</EditorialHeading>
          <div className={`page-hero-body mt-7 max-w-[34rem] text-base leading-8 ${inverse ? "text-white/85" : "text-[var(--langia-muted)]"}`}>{body}</div>
          {actions ? <div className="page-hero-actions mt-8 flex flex-wrap items-center gap-4 sm:gap-6">{actions}</div> : null}
        </div>
        {facts?.length ? (
          <ul className={`page-hero-facts mt-auto grid gap-x-8 pt-12 sm:grid-cols-2 lg:grid-cols-4 ${inverse ? "text-white" : "text-[var(--langia-navy)]"}`}>
            {facts.map((fact, index) => (
              <li key={fact} className={`border-t py-5 text-sm font-medium leading-6 ${inverse ? "border-white/30" : "border-[var(--langia-border)]"}`}>
                <span className={`mb-3 block text-xs tabular-nums ${inverse ? "text-white/60" : "text-[var(--langia-blue-ink)]"}`}>{String(index + 1).padStart(2, "0")}</span>
                {fact}
              </li>
            ))}
          </ul>
        ) : null}
      </SiteContainer>
    </section>
  );
}

export function MediaFrame({
  alt,
  aspectClassName = "aspect-[4/3]",
  children,
  className = "",
  imageClassName = "object-cover",
  priority = false,
  sizes = "(min-width: 1024px) 52vw, 100vw",
  src,
}: {
  alt: string;
  aspectClassName?: string;
  children?: ReactNode;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  src: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] bg-[var(--langia-mist)] ${aspectClassName} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={imageClassName}
      />
      {children}
    </div>
  );
}

export function FeatureList({
  inverse = false,
  items,
}: {
  inverse?: boolean;
  items: readonly string[];
}) {
  return (
    <ul className={`border-t ${inverse ? "border-white/24" : "border-[var(--langia-navy)]/16"}`}>
      {items.map((item) => (
        <li
          key={item}
          className={`flex min-h-14 items-center gap-4 border-b py-4 text-base font-semibold ${
            inverse
              ? "border-white/24 text-white"
              : "border-[var(--langia-navy)]/16 text-[var(--langia-navy)]"
          }`}
        >
          <CheckIcon
            className={`h-5 w-5 shrink-0 ${
              inverse ? "text-[var(--langia-luminous)]" : "text-[var(--langia-signal)]"
            }`}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ProcessSteps({
  inverse = false,
  items,
}: {
  inverse?: boolean;
  items: readonly { title: string; body: string }[];
}) {
  return (
    <ol className="process-steps grid gap-3 sm:grid-cols-2">
      {items.map((item, index) => (
        <li key={`${item.title}-${index}`} className={`rounded-[1.75rem] p-6 sm:p-8 ${inverse ? "bg-white/10 text-white" : "bg-[var(--langia-mist)] text-[var(--langia-navy)]"}`}>
          <span className={`text-xs font-semibold tabular-nums ${inverse ? "text-white/65" : "text-[var(--langia-blue-ink)]"}`}>{String(index + 1).padStart(2, "0")}</span>
          <h3 className="mt-10 font-heading text-2xl font-medium leading-tight tracking-[-0.035em]">{item.title}</h3>
          <p className={`mt-4 max-w-xl text-sm leading-7 ${inverse ? "text-white/76" : "text-[var(--langia-muted)]"}`}>{item.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function FAQList({
  items,
}: {
  items: readonly { title: string; body: string }[];
}) {
  return (
    <div className="border-t border-[var(--langia-navy)]/18">
      {items.map((item, index) => (
        <details
          key={`${item.title}-${index}`}
          className="group border-b border-[var(--langia-navy)]/18"
        >
          <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-heading text-xl font-medium tracking-[-0.025em] text-[var(--langia-navy)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--langia-signal)] sm:text-2xl [&::-webkit-details-marker]:hidden">
            {item.title}
            <span className="relative h-6 w-6 shrink-0" aria-hidden="true">
              <span className="absolute left-0 top-1/2 h-px w-6 bg-[var(--langia-navy)]" />
              <span className="absolute left-1/2 top-0 h-6 w-px bg-[var(--langia-navy)] transition-transform group-open:rotate-90 group-open:opacity-0" />
            </span>
          </summary>
          <p className="max-w-2xl pb-7 pr-10 text-base leading-8 text-[var(--langia-muted)]">
            {item.body}
          </p>
        </details>
      ))}
    </div>
  );
}

export function FinalCTA({
  body,
  className = "",
  eyebrow,
  image,
  primary,
  secondary,
  title,
}: {
  body: ReactNode;
  className?: string;
  eyebrow?: ReactNode;
  image?: { alt: string; src: string };
  primary: { href: string; label: ReactNode };
  secondary?: { href: string; label: ReactNode };
  title: ReactNode;
}) {
  const photograph = image ?? { src: "/images/marketing-2026/home/final-cta-vision.webp", alt: "" };

  return (
    <section className={`page-conversion ${className}`}>
      <div className="relative overflow-hidden rounded-[2rem] bg-[var(--langia-navy)]">
        <Image src={photograph.src} alt={photograph.alt} fill sizes="100vw" className="object-cover object-[65%_20%]" />
        <div className="page-hero-shade absolute inset-0" />
        <div className="relative px-7 py-20 sm:px-12 sm:py-24 lg:px-[60px] lg:py-28">
          {eyebrow ? <SectionEyebrow inverse>{eyebrow}</SectionEyebrow> : null}
          <EditorialHeading className={`${eyebrow ? "mt-8" : ""} max-w-[16ch]`} inverse>{title}</EditorialHeading>
          <div className="mt-7 max-w-lg text-base leading-8 text-white/85">{body}</div>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <MarketingButton href={primary.href} className="shadow-none">{primary.label}</MarketingButton>
            {secondary ? <Link href={secondary.href} className="home-text-action !text-white">{secondary.label}<ArrowIcon /></Link> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
