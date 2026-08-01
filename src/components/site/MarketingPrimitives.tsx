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
    <div className={`mx-auto w-full ${reading ? "max-w-[72ch]" : "max-w-[1360px]"} ${className}`}>
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
      className={`scroll-mt-28 px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36 ${tones[tone]} ${className}`}
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
      className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] ${
        inverse ? "text-white/72" : "text-[var(--langia-muted)]"
      } ${className}`}
    >
      <span className={`h-px w-8 ${inverse ? "bg-white/70" : "bg-[var(--langia-signal)]"}`} />
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
    major: "text-[clamp(2.4rem,4.4vw,4.5rem)] leading-[1] tracking-[-0.055em]",
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
    <div className={className}>
      <SectionEyebrow inverse={inverse}>{eyebrow}</SectionEyebrow>
      <EditorialHeading className="mt-7 max-w-[14ch]" inverse={inverse}>
        {title}
      </EditorialHeading>
      {body ? (
        <div className={`mt-7 max-w-2xl text-lg leading-8 ${inverse ? "text-white/76" : "text-[var(--langia-muted)]"}`}>
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
  media,
  title,
  tone = "mist",
}: {
  actions?: ReactNode;
  body: ReactNode;
  className?: string;
  eyebrow: ReactNode;
  media?: ReactNode;
  title: ReactNode;
  tone?: MarketingTone;
}) {
  const inverse = tone === "signal";
  const tones: Record<MarketingTone, string> = {
    white: "bg-[var(--langia-white)]",
    mist: "bg-[var(--langia-mist)]",
    signal: "langia-signal-surface",
  };

  return (
    <section className={`px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:px-12 lg:pb-28 lg:pt-40 ${tones[tone]} ${className}`}>
      <SiteContainer>
        <div className={`grid gap-12 ${media ? "lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:gap-20" : ""}`}>
          <div className="min-w-0">
            <SectionEyebrow inverse={inverse}>{eyebrow}</SectionEyebrow>
            <EditorialHeading as="h1" className="mt-7 max-w-[12ch]" inverse={inverse} size="hero">
              {title}
            </EditorialHeading>
            <div className={`mt-7 max-w-2xl text-lg leading-8 ${inverse ? "text-white/76" : "text-[var(--langia-muted)]"}`}>
              {body}
            </div>
            {actions ? <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{actions}</div> : null}
          </div>
          {media ? <div className="min-w-0">{media}</div> : null}
        </div>
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
    <ol className={`border-t ${inverse ? "border-white/24" : "border-[var(--langia-navy)]/18"}`}>
      {items.map((item, index) => (
        <li
          key={`${item.title}-${index}`}
          className={`grid gap-4 border-b py-8 sm:grid-cols-[4rem_1fr] ${
            inverse ? "border-white/24" : "border-[var(--langia-navy)]/18"
          }`}
        >
          <span
            className={`text-sm tabular-nums ${
              inverse ? "text-[var(--langia-luminous)]" : "text-[var(--langia-blue-ink)]"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3
              className={`font-heading text-2xl font-medium tracking-[-0.03em] ${
                inverse ? "text-white" : "text-[var(--langia-navy)]"
              }`}
            >
              {item.title}
            </h3>
            <p
              className={`mt-3 max-w-xl text-base leading-7 ${
                inverse ? "text-white/76" : "text-[var(--langia-muted)]"
              }`}
            >
              {item.body}
            </p>
          </div>
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
  const actions = (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <MarketingButton href={primary.href}>{primary.label}</MarketingButton>
      {secondary ? (
        <MarketingButton href={secondary.href} variant="secondary">
          {secondary.label}
        </MarketingButton>
      ) : null}
    </div>
  );

  return (
    <MarketingSection className={`!pb-6 sm:!pb-8 lg:!pb-10 ${className}`} tone="white">
      <SiteContainer>
        <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,var(--langia-signal)_0%,var(--langia-legacy)_62%,var(--langia-bright-sky)_100%)] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border-[4.5rem] border-white/22" />
          <div className="pointer-events-none absolute bottom-10 right-[22%] h-5 w-5 rounded-full bg-[var(--langia-gold)] shadow-[0_12px_30px_rgba(11,31,58,0.14)]" />
          <div
            className={`relative grid gap-10 ${
              image
                ? "lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,.92fr)] lg:items-stretch lg:gap-12"
                : "lg:grid-cols-[1fr_auto] lg:items-end"
            }`}
          >
            <div className={image ? "flex flex-col justify-center" : ""}>
              {eyebrow ? (
                <SectionEyebrow inverse>{eyebrow}</SectionEyebrow>
              ) : null}
              <EditorialHeading className={eyebrow ? "mt-7 max-w-[13ch]" : "max-w-[13ch]"} inverse>
                {title}
              </EditorialHeading>
              <div className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/82">
                {body}
              </div>
              {image ? <div className="mt-9">{actions}</div> : null}
            </div>
            {image ? (
              <div className="relative min-h-72 overflow-hidden rounded-[1.5rem] border border-white/24 bg-white/12 shadow-[0_24px_70px_rgba(11,31,58,.18)] sm:min-h-96 lg:min-h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(4,142,255,.14),transparent_30%)]" />
              </div>
            ) : (
              actions
            )}
          </div>
        </div>
      </SiteContainer>
    </MarketingSection>
  );
}
