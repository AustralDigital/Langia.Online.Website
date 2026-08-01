"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image, { getImageProps } from "next/image";
import { useEffect, useState, type ReactNode } from "react";

import {
  ArrowIcon,
  FinalCTA,
  MarketingButton,
  SectionEyebrow,
  SiteContainer,
} from "@/components/site/MarketingPrimitives";
import { LocalizedLink as Link } from "@/components/site/LocalizedLink";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import {
  defaultLanguage,
  homepageContent,
  isHomepageLanguage,
  type HomepageCopy,
  type HomepageLanguage,
} from "@/content/homepage";
import { languageStorageKey, notifyLanguageChange } from "@/lib/language";

const campaignImages = {
  heroDesktop:
    "/images/marketing-2026/home/hero-airport-professional-desktop-v2.png",
  heroMobile:
    "/images/marketing-2026/home/hero-airport-professional-mobile-v2.png",
  professionalOutcome:
    "/images/marketing-2026/programs/langia-online-global-presentation.webp",
  familyOutcome: "/images/marketing-2026/home/family-travel-independence.webp",
  tailoredOutcome: "/images/marketing-2026/editorial/ai-assisted-human-outcome.webp",
  finalCta: "/images/marketing-2026/home/final-cta-vision.webp",
} as const;

function detectBrowserLanguage(): HomepageLanguage {
  const browserLanguage = navigator.languages?.[0] ?? navigator.language ?? "";
  const normalized = browserLanguage.toLowerCase();

  if (normalized.startsWith("es")) return "es";
  if (normalized.startsWith("pt")) return "pt";
  return "en";
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.18, once: true }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { delay, duration: 0.72, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </motion.div>
  );
}

function HeroHeadline({ copy }: { copy: HomepageCopy["hero"] }) {
  const [wordIndex, setWordIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const longestRotatingWord = copy.rotating.reduce((longest, word) =>
    word.length > longest.length ? word : longest,
  );
  const compactHeadline = copy.line3.length > 15;

  useEffect(() => {
    if (reduceMotion) return;

    const interval = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % copy.rotating.length);
    }, 3400);

    return () => window.clearInterval(interval);
  }, [copy.rotating.length, reduceMotion]);

  return (
    <h1
      className={`max-w-[780px] font-heading font-medium tracking-[-0.068em] text-[var(--langia-navy)] ${
        compactHeadline
          ? "text-[clamp(2.625rem,10.7vw,3.45rem)] md:text-[clamp(4rem,6.8vw,5rem)] lg:text-[clamp(4.5rem,6.15vw,5.6rem)]"
          : "text-[clamp(2.625rem,11vw,3.5rem)] md:text-[clamp(4rem,7vw,5.2rem)] lg:text-[clamp(4.5rem,6.55vw,7rem)]"
      }`}
    >
      <span className="sr-only">
        {copy.rotating[0]} {copy.line2} {copy.line3}
      </span>
      <span aria-hidden="true" className="flex flex-col">
        <span
          data-hero-language
          className="relative block h-[1.28em] shrink-0 overflow-hidden whitespace-nowrap text-[var(--langia-signal)]"
        >
          <span className="invisible inline-block pb-[0.08em] leading-[1.1]">
            {longestRotatingWord}
          </span>
          <AnimatePresence initial={false}>
            <motion.span
              key={wordIndex}
              className="absolute inset-x-0 top-[0.01em] inline-block pb-[0.08em] leading-[1.1]"
              initial={{ opacity: 0, y: reduceMotion ? 0 : "55%" }}
              animate={{ opacity: 1, y: "0%" }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : "-55%" }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.68, ease: [0.22, 1, 0.36, 1] }
              }
            >
              {copy.rotating[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </span>
        <span className="block leading-[0.94]">{copy.line2}</span>
        <span className="block leading-[0.94]">{copy.line3}</span>
      </span>
    </h1>
  );
}

function HeroCampaignImage({ alt }: { alt: string }) {
  const commonImageProps = {
    alt,
    className: "langia-hero-image",
    loading: "eager" as const,
    quality: 90,
    sizes: "(min-width: 1024px) calc(100vw - 48px), (min-width: 640px) calc(100vw - 32px), calc(100vw - 16px)",
    style: {
      height: "100%",
      inset: 0,
      objectFit: "cover" as const,
      position: "absolute" as const,
      width: "100%",
    },
  };
  const {
    props: { srcSet: mobileSrcSet },
  } = getImageProps({
    ...commonImageProps,
    src: campaignImages.heroMobile,
    width: 864,
    height: 1821,
  });
  const { props: desktopImageProps } = getImageProps({
    ...commonImageProps,
    src: campaignImages.heroDesktop,
    width: 1831,
    height: 859,
  });

  return (
    <picture>
      <source media="(max-width: 639px)" srcSet={mobileSrcSet} />
      <img {...desktopImageProps} alt={alt} fetchPriority="high" />
    </picture>
  );
}

function Hero({ copy, language }: { copy: HomepageCopy; language: HomepageLanguage }) {
  return (
    <section className="relative isolate mx-2 mt-2 min-h-[860px] overflow-hidden rounded-[1.75rem] border border-[var(--langia-border)] bg-[var(--langia-mist)] sm:mx-4 sm:mt-4 sm:min-h-[900px] sm:rounded-[2rem] md:min-h-[820px] lg:mx-6 lg:mt-6 lg:h-[clamp(760px,calc(100svh-48px),860px)] lg:min-h-0 lg:rounded-[2.25rem]">
      <HeroCampaignImage alt={copy.hero.imageAlt} />
      <div className="langia-hero-wash pointer-events-none absolute inset-0 z-[1]" />
      <SiteNavbar variant="overlay" language={language} />

      <div className="relative z-10 mx-auto flex min-h-[860px] w-full max-w-[1440px] flex-col justify-start px-5 pb-10 pt-32 sm:min-h-[900px] sm:px-8 sm:pb-12 sm:pt-36 md:min-h-[820px] md:justify-center md:px-10 md:pb-16 md:pt-32 lg:h-full lg:min-h-0 lg:px-12 lg:pb-16 lg:pt-32 xl:px-16">
        <div className="max-w-[780px] md:max-w-[26.25rem] lg:max-w-[36rem] xl:max-w-[45rem] 2xl:max-w-[780px]">
          <HeroHeadline copy={copy.hero} />
          <p className="mt-6 max-w-[15rem] text-base font-medium leading-7 text-[var(--langia-navy)]/78 sm:mt-7 sm:max-w-[34rem] sm:text-lg sm:leading-8 lg:mt-8 lg:text-[1.22rem]">
            {copy.hero.body}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap lg:mt-9">
            <MarketingButton
              href="/contact"
              className="min-h-[3.25rem] px-6 shadow-[0_16px_34px_rgba(124,85,7,0.2)] sm:px-7"
            >
              {copy.hero.primary}
            </MarketingButton>
            <MarketingButton
              href="#programs"
              variant="secondary"
              className="min-h-[3.25rem] border-white/80 bg-white/82 px-6 shadow-[0_12px_30px_rgba(11,31,58,0.08)] backdrop-blur-xl hover:bg-white sm:px-7"
            >
              {copy.hero.secondary}
            </MarketingButton>
          </div>
          <ul className="mt-7 grid max-w-[42rem] gap-2.5 border-t border-[var(--langia-navy)]/14 pt-5 text-sm font-semibold leading-5 text-[var(--langia-navy)]/86 min-[520px]:grid-cols-3 sm:mt-8 lg:mt-10 lg:gap-5 lg:pt-6">
            {copy.hero.bullets.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--langia-signal)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function OutcomeStory({ copy }: { copy: HomepageCopy }) {
  return (
    <section id="journey" className="scroll-mt-28 bg-white px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <SiteContainer>
        <Reveal className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <SectionEyebrow>{copy.intro.eyebrow}</SectionEyebrow>
          <div>
            <h2 className="max-w-[12ch] font-heading text-[clamp(2.6rem,5vw,5.2rem)] font-medium leading-[0.96] tracking-[-0.06em] text-[var(--langia-navy)]">
              {copy.intro.title}
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--langia-muted)]">
              {copy.intro.body}
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-6 md:grid-cols-[0.82fr_1.18fr] md:items-end lg:mt-28 lg:gap-10">
          <Reveal>
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-[var(--langia-mist)]">
                <Image
                  src={campaignImages.professionalOutcome}
                  alt={copy.solutions.cards[0].imageAlt ?? ""}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="mt-5 flex items-center gap-3 text-sm font-semibold text-[var(--langia-navy)]">
                <span className="text-[var(--langia-blue-ink)]">01</span>
                {copy.intro.reasons[1] ?? copy.intro.reasons[0]}
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.1}>
            <figure>
              <div className="relative aspect-[16/11] overflow-hidden rounded-[1.75rem] bg-[var(--langia-mist)]">
                <Image
                  src={campaignImages.familyOutcome}
                  alt={copy.solutions.cards[3].imageAlt ?? ""}
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="mt-5 flex items-center gap-3 text-sm font-semibold text-[var(--langia-navy)]">
                <span className="text-[var(--langia-blue-ink)]">02</span>
                {copy.intro.reasons[0]}
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal className="mt-16 border-y border-[var(--langia-navy)]/14 py-8 sm:mt-20">
          <ul className="grid gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {copy.intro.reasons.map((reason, index) => (
              <li key={reason} className="flex items-start gap-3">
                <span className="pt-1 text-xs tabular-nums text-[var(--langia-blue-ink)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-heading text-lg font-medium leading-snug text-[var(--langia-navy)]">
                  {reason}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </SiteContainer>
    </section>
  );
}

const companyLogoSizing: Record<string, string> = {
  Cummins: "h-14 max-w-24",
  FMC: "h-9 max-w-32",
  "Hospital Angeles": "h-9 max-w-36",
  Microsoft: "h-9 max-w-36",
  Pepsico: "h-12 max-w-36",
};

function Credibility({ copy }: { copy: HomepageCopy["support"] }) {
  return (
    <section id="credibility" className="scroll-mt-28 bg-[var(--langia-mist)] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      <SiteContainer>
        <Reveal className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
          <SectionEyebrow>{copy.eyebrow}</SectionEyebrow>
          <div>
            <h2 className="max-w-[18ch] font-heading text-[clamp(2.2rem,3.8vw,4rem)] font-medium leading-[1] tracking-[-0.05em] text-[var(--langia-navy)]">
              {copy.title}
            </h2>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-[var(--langia-muted)]">
              {copy.body}
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 border-l border-t border-[var(--langia-navy)]/10 sm:grid-cols-4">
          {copy.logos.map((logo) => (
            <div
              key={logo.name}
              className="flex min-h-28 items-center justify-center border-b border-r border-[var(--langia-navy)]/10 bg-white/60 px-5 py-7"
            >
              {logo.src ? (
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={190}
                  height={70}
                  className={`w-full object-contain opacity-55 grayscale transition duration-300 hover:opacity-85 ${companyLogoSizing[logo.name] ?? "h-10 max-w-40"}`}
                />
              ) : (
                <span className="font-heading text-base font-semibold text-[var(--langia-navy)]/60">
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}

type ProgramCard = HomepageCopy["solutions"]["cards"][number];

function ProgramCaption({
  card,
  index,
}: {
  card: ProgramCard;
  index: number;
}) {
  return (
    <div className="flex flex-1 flex-col justify-between bg-white p-6 sm:p-8 lg:p-10">
      <div className="flex items-center justify-between text-xs text-[var(--langia-muted)]">
        <span className="tabular-nums">{String(index + 1).padStart(2, "0")}</span>
        <ArrowIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
      <div className="mt-12">
        <h3 className="max-w-[14ch] font-heading text-[clamp(2rem,3.4vw,3.65rem)] font-medium leading-[0.98] tracking-[-0.05em] text-[var(--langia-navy)]">
          {card.title}
        </h3>
        <p className="mt-5 max-w-lg text-base leading-7 text-[var(--langia-muted)]">
          {card.body}
        </p>
      </div>
    </div>
  );
}

function FeaturedProgram({
  card,
  index,
  reverse = false,
}: {
  card: ProgramCard;
  index: number;
  reverse?: boolean;
}) {
  return (
    <Link
      href={card.href ?? "/programs"}
      className="group grid overflow-hidden rounded-[1.75rem] border border-[var(--langia-navy)]/12 bg-white transition-shadow hover:shadow-[0_24px_70px_rgba(11,31,58,.09)] lg:grid-cols-[1.35fr_.65fr]"
    >
      <div className={`relative aspect-[4/3] overflow-hidden bg-[var(--langia-mist)] lg:aspect-auto lg:min-h-[520px] ${reverse ? "lg:order-2" : ""}`}>
        {card.image ? (
          <Image
            src={card.image}
            alt={card.imageAlt ?? card.title}
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
          />
        ) : null}
      </div>
      <ProgramCaption card={card} index={index} />
    </Link>
  );
}

function StandardProgram({ card, index }: { card: ProgramCard; index: number }) {
  return (
    <Link
      href={card.href ?? "/programs"}
      className="group flex min-h-full flex-col overflow-hidden rounded-[1.75rem] border border-[var(--langia-navy)]/12 bg-white transition-shadow hover:shadow-[0_24px_70px_rgba(11,31,58,.09)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--langia-mist)]">
        {card.image ? (
          <Image
            src={card.image}
            alt={card.imageAlt ?? card.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
          />
        ) : null}
      </div>
      <ProgramCaption card={card} index={index} />
    </Link>
  );
}

function Programs({ copy }: { copy: HomepageCopy["solutions"] }) {
  return (
    <section id="programs" className="scroll-mt-28 bg-white px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <SiteContainer>
        <Reveal className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <SectionEyebrow>02 / {copy.eyebrow}</SectionEyebrow>
            <h2 className="mt-8 max-w-[12ch] font-heading text-[clamp(2.6rem,5vw,5rem)] font-medium leading-[0.98] tracking-[-0.06em] text-[var(--langia-navy)]">
              {copy.title}
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-lg text-lg leading-8 text-[var(--langia-muted)]">{copy.body}</p>
            <Link
              href={copy.ctaHref}
              className="mt-7 inline-flex min-h-11 items-center gap-3 border-b border-[var(--langia-navy)]/30 pb-1 text-sm font-semibold text-[var(--langia-navy)] transition hover:border-[var(--langia-signal)] hover:text-[var(--langia-blue-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--langia-signal)]/40"
            >
              {copy.cta}
              <ArrowIcon />
            </Link>
          </div>
        </Reveal>

        <div className="mt-20 space-y-6">
          <FeaturedProgram card={copy.cards[0]} index={0} />
          <div className="grid gap-6 md:grid-cols-2">
            <StandardProgram card={copy.cards[1]} index={1} />
            <StandardProgram card={copy.cards[2]} index={2} />
          </div>
          <FeaturedProgram card={copy.cards[3]} index={3} reverse />
        </div>
      </SiteContainer>
    </section>
  );
}

function Tailored({
  reveal,
  signature,
}: {
  reveal: HomepageCopy["reveal"];
  signature: HomepageCopy["signature"];
}) {
  return (
    <section
      id="tailored"
      className="scroll-mt-28 bg-[var(--langia-mist)] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <SiteContainer>
        <Reveal className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:items-end">
          <SectionEyebrow>03 / {signature.eyebrow}</SectionEyebrow>
          <div>
            <h2 className="max-w-[13ch] font-heading text-[clamp(2.6rem,5vw,5rem)] font-medium leading-[0.98] tracking-[-0.06em] text-[var(--langia-navy)]">
              {signature.title}
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--langia-muted)]">
              {signature.body}
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-8 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:gap-10 xl:gap-12">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-white">
              <Image
                src={campaignImages.tailoredOutcome}
                alt={signature.imageAlt}
                fill
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[1.75rem] border border-[var(--langia-border)] bg-white p-6 shadow-[0_28px_80px_rgba(11,31,58,.09)] sm:p-8">
              <div className="flex items-center justify-between gap-4 border-b border-[var(--langia-navy)]/12 pb-5">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--langia-gold)]" />
                  <span className="font-heading text-sm font-semibold text-[var(--langia-navy)]">
                    Langia TailorED
                  </span>
                </div>
                <span className="text-right text-[11px] uppercase tracking-[0.14em] text-[var(--langia-muted)]">
                  {reveal.interfaceTitle}
                </span>
              </div>
              <div className="py-7">
                <p className="max-w-[18ch] font-heading text-2xl font-medium leading-tight tracking-[-0.04em] text-[var(--langia-navy)] sm:text-3xl">
                  {reveal.title}
                </p>
                <p className="mt-3 font-heading text-xl font-medium text-[var(--langia-blue-ink)]">
                  {reveal.titleAccent}
                </p>
              </div>
              <div className="grid gap-x-5 sm:grid-cols-2">
                {reveal.signals.map((signal, index) => (
                  <div
                    key={signal.label}
                    className="border-t border-[var(--langia-navy)]/12 py-4"
                  >
                    <span className="text-xs tabular-nums text-[var(--langia-blue-ink)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-sm font-semibold text-[var(--langia-navy)]">
                      {signal.label}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[var(--langia-muted)]">
                      {signal.detail}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-[1.25rem] bg-[linear-gradient(135deg,var(--langia-signal),var(--langia-legacy))] p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
                  {reveal.directionLabel}
                </p>
                <p className="mt-3 max-w-[22ch] font-heading text-lg font-semibold leading-snug">
                  {reveal.directionValue}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 grid gap-x-8 gap-y-8 border-t border-[var(--langia-navy)]/14 pt-10 md:grid-cols-3">
          {signature.benefits.map((benefit, index) => (
            <article key={benefit.title}>
              <span className="text-xs tabular-nums text-[var(--langia-blue-ink)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-heading text-xl font-medium tracking-[-0.03em] text-[var(--langia-navy)]">
                {benefit.title}
              </h3>
              <p className="mt-3 max-w-md text-base leading-7 text-[var(--langia-muted)]">
                {benefit.body}
              </p>
            </article>
          ))}
        </Reveal>
      </SiteContainer>
    </section>
  );
}

function Process({ copy }: { copy: HomepageCopy["how"] }) {
  return (
    <section id="process" className="scroll-mt-28 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <SiteContainer>
        <Reveal className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <SectionEyebrow>04 / {copy.eyebrow}</SectionEyebrow>
            <h2 className="mt-8 max-w-[11ch] font-heading text-[clamp(2.4rem,4.2vw,4.35rem)] font-medium leading-[1] tracking-[-0.055em] text-[var(--langia-navy)]">
              {copy.title}
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-[var(--langia-muted)] lg:justify-self-end">
            {copy.body}
          </p>
        </Reveal>
        <ol className="mt-14 grid border-t border-[var(--langia-navy)]/16 md:grid-cols-3">
          {copy.steps.map((step, index) => (
            <li
              key={step.title}
              className="border-b border-[var(--langia-navy)]/16 py-8 md:border-r md:px-7 md:last:border-r-0"
            >
              <span className="text-sm tabular-nums text-[var(--langia-blue-ink)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 max-w-[13ch] font-heading text-2xl font-medium leading-tight tracking-[-0.035em] text-[var(--langia-navy)]">
                {step.title}
              </h3>
              <p className="mt-4 max-w-md text-base leading-7 text-[var(--langia-muted)]">
                {step.body}
              </p>
              <Link
                href={step.href ?? "/contact"}
                className="mt-7 inline-flex min-h-11 items-center gap-3 border-b border-[var(--langia-navy)]/30 pb-1 text-sm font-semibold text-[var(--langia-navy)] transition hover:border-[var(--langia-signal)] hover:text-[var(--langia-blue-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--langia-signal)]/40"
              >
                {step.linkLabel ?? copy.stepLinkLabel}
                <ArrowIcon />
              </Link>
            </li>
          ))}
        </ol>
      </SiteContainer>
    </section>
  );
}

function FAQ({ copy }: { copy: HomepageCopy["faq"] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-28 bg-[var(--langia-mist)] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <SiteContainer className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
        <Reveal>
          <SectionEyebrow>05 / {copy.eyebrow}</SectionEyebrow>
          <h2 className="mt-8 max-w-[10ch] font-heading text-[clamp(2.5rem,4.4vw,4.5rem)] font-medium leading-[1] tracking-[-0.055em] text-[var(--langia-navy)]">
            {copy.title}
          </h2>
          <p className="mt-7 max-w-sm text-base leading-8 text-[var(--langia-muted)]">
            {copy.body}
          </p>
        </Reveal>

        <div className="border-t border-[var(--langia-navy)]/18">
          {copy.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `home-faq-panel-${index}`;

            return (
              <div key={item.title} className="border-b border-[var(--langia-navy)]/18">
                <button
                  type="button"
                  className="flex min-h-20 w-full items-start justify-between gap-8 py-7 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--langia-signal)]"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-heading text-xl font-medium tracking-[-0.03em] text-[var(--langia-navy)] sm:text-2xl">
                    {item.title}
                  </span>
                  <span
                    className={`relative mt-1 h-6 w-6 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden="true"
                  >
                    <span className="absolute left-0 top-1/2 h-px w-6 bg-[var(--langia-navy)]" />
                    <span className="absolute left-1/2 top-0 h-6 w-px bg-[var(--langia-navy)]" />
                  </span>
                </button>
                <div
                  id={panelId}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-8 pr-10 text-base leading-8 text-[var(--langia-muted)]">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </SiteContainer>
    </section>
  );
}

export function EditorialHomepage({ language: languageProp }: { language?: HomepageLanguage } = {}) {
  const [storedLanguage, setLanguageState] = useState<HomepageLanguage>(languageProp ?? defaultLanguage);
  const language = languageProp ?? storedLanguage;
  const copy = homepageContent[language];

  useEffect(() => {
    if (languageProp) {
      document.documentElement.lang = languageProp === "pt" ? "pt-BR" : languageProp;
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      try {
        const stored = window.localStorage.getItem(languageStorageKey);
        const nextLanguage =
          stored && isHomepageLanguage(stored) ? stored : detectBrowserLanguage();
        setLanguageState(nextLanguage);
        document.documentElement.lang = nextLanguage === "pt" ? "pt-BR" : nextLanguage;
        window.localStorage.setItem(languageStorageKey, nextLanguage);
      } catch {
        const nextLanguage = detectBrowserLanguage();
        setLanguageState(nextLanguage);
        document.documentElement.lang = nextLanguage === "pt" ? "pt-BR" : nextLanguage;
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [languageProp]);

  function setLanguage(nextLanguage: HomepageLanguage) {
    setLanguageState(nextLanguage);
    document.documentElement.lang = nextLanguage === "pt" ? "pt-BR" : nextLanguage;
    try {
      window.localStorage.setItem(languageStorageKey, nextLanguage);
    } catch {
      // Language switching still works when storage is unavailable.
    }
    notifyLanguageChange(nextLanguage);
  }

  return (
    <main className="overflow-x-clip bg-white text-[var(--langia-navy)]">
      <Hero copy={copy} language={language} />
      <OutcomeStory copy={copy} />
      <Credibility copy={copy.support} />
      <Programs copy={copy.solutions} />
      <Tailored reveal={copy.reveal} signature={copy.signature} />
      <Process copy={copy.how} />
      <FAQ copy={copy.faq} />
      <FinalCTA
        eyebrow="06 / Langia"
        body={copy.conversion.body}
        image={{ alt: copy.conversion.imageAlt, src: campaignImages.finalCta }}
        primary={{ href: "/contact", label: copy.conversion.primary }}
        title={copy.conversion.title}
      />
      <SiteFooter language={language} onLanguageChange={setLanguage} />
    </main>
  );
}
