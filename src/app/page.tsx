"use client";

import Link from "next/link";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  type MotionStyle,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { SiteNavbar } from "@/components/site/SiteNavbar";
import { navigationContent } from "@/content/navigation";
import {
  defaultLanguage,
  homepageContent,
  homepageLanguageOptions,
  isHomepageLanguage,
  type HomepageCopy,
  type HomepageIconName,
  type HomepageLanguage,
} from "@/content/homepage";
import { languageStorageKey, notifyLanguageChange } from "@/lib/language";

const eyebrowClasses =
  "font-heading text-xs font-semibold uppercase tracking-[0.18em] text-[#048EFF]";
const cardClasses =
  "border border-[#E4EDF7] bg-[#FFFFFF] shadow-[0_16px_44px_rgba(11,31,58,0.06)]";

function Icon({
  name,
  className = "",
}: {
  name: HomepageIconName;
  className?: string;
}) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  const icons: Record<HomepageIconName, ReactNode> = {
    arrow: (
      <svg {...common}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    ),
    briefcase: (
      <svg {...common}>
        <path d="M9 7V5.8A1.8 1.8 0 0 1 10.8 4h2.4A1.8 1.8 0 0 1 15 5.8V7" />
        <path d="M5.5 7h13A1.5 1.5 0 0 1 20 8.5v9A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-9A1.5 1.5 0 0 1 5.5 7Z" />
        <path d="M4 12.5a20 20 0 0 0 16 0" />
      </svg>
    ),
    check: (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    ),
    chevron: (
      <svg {...common}>
        <path d="m6 9 6 6 6-6" />
      </svg>
    ),
    close: (
      <svg {...common}>
        <path d="M6 6l12 12" />
        <path d="M18 6 6 18" />
      </svg>
    ),
    globe: (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 0 1 0 18" />
        <path d="M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
    menu: (
      <svg {...common}>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </svg>
    ),
    message: (
      <svg {...common}>
        <path d="M5 6.8A3.8 3.8 0 0 1 8.8 3h6.4A3.8 3.8 0 0 1 19 6.8v4.4a3.8 3.8 0 0 1-3.8 3.8H10l-5 5v-5.8A3.8 3.8 0 0 1 5 11.2Z" />
      </svg>
    ),
    spark: (
      <svg {...common}>
        <path d="M12 3 9.8 9.8 3 12l6.8 2.2L12 21l2.2-6.8L21 12l-6.8-2.2Z" />
      </svg>
    ),
    target: (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 12h.01" />
      </svg>
    ),
    users: (
      <svg {...common}>
        <path d="M16 19a4 4 0 0 0-8 0" />
        <circle cx="12" cy="9" r="3" />
        <path d="M21 18a3.5 3.5 0 0 0-4-3.4" />
        <path d="M3 18a3.5 3.5 0 0 1 4-3.4" />
      </svg>
    ),
  };

  return icons[name];
}

function detectBrowserLanguage(): HomepageLanguage {
  const browserLanguage =
    typeof navigator !== "undefined"
      ? navigator.languages?.[0] ?? navigator.language
      : "";
  const normalized = browserLanguage.toLowerCase();

  if (normalized.startsWith("es")) {
    return "es";
  }

  if (normalized.startsWith("pt")) {
    return "pt";
  }

  return "en";
}

function Button({
  children,
  href,
  variant = "primary",
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "dark";
}) {
  const classes = {
    primary:
      "bg-[#048EFF] !text-[#FFFFFF] shadow-[0_16px_34px_rgba(4,142,255,0.24)] hover:bg-[#F3B737] hover:!text-[#FFFFFF]",
    secondary:
      "border border-[#D8E6F4] bg-[#FFFFFF] text-[#0B1F3A] hover:border-[#048EFF] hover:text-[#048EFF]",
    dark:
      "bg-[#048EFF] !text-[#FFFFFF] shadow-[0_16px_34px_rgba(4,142,255,0.26)] hover:bg-[#F3B737] hover:!text-[#FFFFFF]",
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition ${classes[variant]}`}
    >
      <span>{children}</span>
      <Icon name="arrow" className="h-4 w-4" />
    </Link>
  );
}

function LanguageToggle({
  language,
  onChange,
}: {
  language: HomepageLanguage;
  onChange: (language: HomepageLanguage) => void;
}) {
  return (
    <div className="inline-flex rounded-full border border-white/15 bg-white/10 p-1 backdrop-blur-xl">
      {homepageLanguageOptions.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={() => onChange(item.value)}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
            language === item.value
              ? "bg-[#FFFFFF] text-[#0B1F3A]"
              : "text-white/65 hover:text-[#FFFFFF]"
          }`}
          aria-pressed={language === item.value}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

function LogoMark({
  dark = false,
  imageClassName = "h-20 w-auto",
  logo,
}: {
  dark?: boolean;
  imageClassName?: string;
  logo: HomepageCopy["logo"];
}) {
  if (dark) {
    return (
      <Link href="/" className="flex items-center" aria-label={logo.homeLabel}>
        <Image
          src="/images/logo-white.svg"
          alt={logo.name}
          width={272}
          height={104}
          className={imageClassName}
          priority
        />
      </Link>
    );
  }

  return (
    <Link href="/" className="flex items-center gap-3" aria-label={logo.homeLabel}>
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-bold ${
          dark
            ? "border-white/15 bg-white/10 text-[#FFFFFF]"
            : "border-[#D8E6F4] bg-[#FFFFFF] text-[#048EFF]"
        }`}
      >
        {logo.mark}
      </span>
      <span className={`font-heading text-lg font-semibold ${dark ? "text-[#FFFFFF]" : "text-[#0B1F3A]"}`}>
        {logo.name}
      </span>
    </Link>
  );
}

function PlaceholderIcon({ icon = "spark" }: { icon?: HomepageIconName }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#D8E6F4] bg-[#EAF6FF] text-[#048EFF]">
      <Icon name={icon} className="h-5 w-5" />
    </span>
  );
}

function HeroHeadline({ copy }: { copy: HomepageCopy["hero"] }) {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setWordIndex((currentIndex) => (currentIndex + 1) % copy.rotating.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, [copy.rotating.length]);

  return (
    <span className="block max-w-[9ch] sm:max-w-[10ch]">
      <AnimatePresence mode="wait">
        <motion.span
          key={copy.rotating[wordIndex]}
          initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="inline-block text-white"
        >
          {copy.rotating[wordIndex]}
        </motion.span>
      </AnimatePresence>
      <span className="block">{copy.line2}</span>
      <span className="block">{copy.line3}</span>
    </span>
  );
}

function Hero({ copy, language }: { copy: HomepageCopy; language: HomepageLanguage }) {
  return (
    <section className="bg-[#FFFFFF] px-4 pb-8 pt-4 sm:px-6 lg:px-10">
      <div
        className="relative mx-auto min-h-[720px] max-w-[1180px] overflow-hidden rounded-[2.5rem] border border-white/20 bg-[#0B1F3A] bg-cover shadow-[0_30px_100px_rgba(11,31,58,0.2)]"
        style={{
          backgroundImage: "url('/images/langia-hero-aurora-human.webp')",
          backgroundPosition: "right 28% center",
        }}
      >
        <SiteNavbar variant="dark" language={language} />
        <div className="grid min-h-[720px] gap-10 px-8 pb-12 pt-40 sm:px-12 sm:pb-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-16 lg:pb-16 lg:pt-36 xl:px-20">
          <div className="relative z-10 max-w-xl">
            <h1 className="font-heading text-4xl font-semibold leading-[1.05] text-[#FFFFFF] text-balance sm:text-5xl xl:text-[4rem]">
              <HeroHeadline copy={copy.hero} />
            </h1>
            <p className="mt-10 max-w-lg text-base leading-8 text-white/85">
              {copy.hero.body}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="dark">{copy.hero.primary}</Button>
              <Link
                href="#solutions"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 text-sm font-semibold !text-[#FFFFFF] backdrop-blur-xl transition hover:bg-white/20 hover:!text-[#FFFFFF]"
              >
                {copy.hero.secondary}
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <span className="inline-flex min-w-40 items-center justify-center rounded-full border border-[#E4EDF7] bg-[#FFFFFF] px-8 py-4 font-heading text-lg font-semibold tracking-[-0.01em] text-[#0B1F3A]/75 opacity-80 grayscale transition hover:opacity-100">
      {name}
    </span>
  );
}

function SupportStrip({ copy }: { copy: HomepageCopy["support"] }) {
  const marqueeLogos = [...copy.logos, ...copy.logos];

  return (
    <section className="bg-[#FFFFFF] px-4 py-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1180px] text-center">
        <p className={eyebrowClasses}>{copy.eyebrow}</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-heading text-3xl font-semibold leading-tight text-[#0B1F3A] sm:text-4xl">
          {copy.title}
        </h2>

        <div className="group relative mt-8 overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="langia-logo-marquee-track flex w-max animate-[langia-logo-marquee_34s_linear_infinite] items-center gap-5 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {marqueeLogos.map((logo, index) => (
              <div key={`${logo.name}-${index}`} className="shrink-0">
                {logo.src ? (
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={160}
                    height={56}
                    className="h-10 w-auto opacity-80 grayscale transition hover:opacity-100"
                  />
                ) : (
                  <LogoPlaceholder name={logo.name} />
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-5 max-w-3xl text-xs leading-6 text-[#6B7A90]">
          {copy.body}
        </p>
      </div>
    </section>
  );
}

function SignatureFeature({ copy }: { copy: HomepageCopy["signature"] }) {
  return (
    <section className="bg-[#FFFFFF] px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#0B1F3A] via-[#081A2F] to-[#06243F] p-8 text-[#FFFFFF] shadow-[0_30px_100px_rgba(11,31,58,0.22)] sm:p-10 lg:p-14">
          <div className="absolute -right-28 top-0 h-80 w-80 rounded-full bg-[#048EFF]/20 blur-3xl" />
          <div className="absolute left-10 top-10 h-2 w-2 rounded-full bg-[#F3B737]" />
          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-[#7EC7FF]">
              {copy.eyebrow}
            </p>
            <h2 className="mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight text-[#FFFFFF] sm:text-5xl">
              <span className="block text-[#7EC7FF]">{copy.titlePrefix}</span>
              <span className="block">{copy.title}</span>
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/75 lg:justify-self-end">
            {copy.body}
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[3rem] border border-white/10 bg-white/8 p-4 sm:p-5 lg:p-6">
          <div className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10">
            <Image
              src={copy.image}
              alt={copy.title}
              fill
              sizes="(min-width: 1024px) 980px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {copy.benefits.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-white/8 p-6"
            >
              <PlaceholderIcon icon={item.icon} />
              <h3 className="mt-6 font-heading text-xl font-semibold text-[#FFFFFF]">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-white/70">
                {item.body}
              </p>
            </article>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

function SolutionsGrid({ copy }: { copy: HomepageCopy["solutions"] }) {
  return (
    <section id="solutions" className="bg-[#FFFFFF] px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className={eyebrowClasses}>
              {copy.eyebrow}
            </p>
            <h2 className="mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight text-[#0B1F3A] sm:text-5xl">
              {copy.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#42526A]">
              {copy.body}
            </p>
          </div>
          <Button href={copy.ctaHref} variant="secondary">
            {copy.cta}
          </Button>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {copy.cards.map((card) => (
            <Link
              key={card.title}
              href={card.href ?? "#"}
              className={`group rounded-[2.25rem] p-7 transition hover:-translate-y-1 hover:border-[#048EFF]/45 ${cardClasses}`}
            >
              <div className="mb-10 flex items-center justify-between">
                <PlaceholderIcon icon={card.icon} />
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8E6F4] bg-[#EAF6FF] text-[#048EFF]">
                  <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-[#0B1F3A]">
                {card.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[#42526A]">{card.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStepCard({
  index,
  linkLabel,
  motionStyle,
  step,
}: {
  index: number;
  linkLabel: string;
  motionStyle: MotionStyle;
  step: HomepageCopy["how"]["steps"][number];
}) {
  return (
    <motion.div
      style={motionStyle}
      className="group min-h-[340px] rounded-[1.75rem] border border-[#E4EDF7] bg-[#FFFFFF] p-5 shadow-[0_16px_38px_rgba(11,31,58,0.055)] max-lg:!translate-y-0"
    >
      <div className="relative mb-6 h-40 overflow-hidden rounded-[1.5rem] border border-[#E4EDF7] bg-[#F3F7FB] lg:h-44">
        {step.image ? (
          <Image
            src={step.image}
            alt={step.title}
            fill
            sizes="(min-width: 1024px) 360px, 100vw"
            className="object-cover"
          />
        ) : null}
      </div>
      <span className="inline-flex rounded-full border border-[#CFE5FA] bg-[#EAF6FF] px-3 py-1 text-xs font-semibold text-[#048EFF]">
        {step.step ?? `Step ${index + 1}`}
      </span>
      <h3 className="mt-5 font-heading text-xl font-semibold text-[#0B1F3A]">
        {step.title}
      </h3>
      <p className="mt-3 text-base leading-7 text-[#42526A]">{step.body}</p>
      <Link
        href={step.href ?? "#"}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#048EFF]"
      >
        {step.linkLabel ?? linkLabel}
        <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}

function HowItWorks({ copy }: { copy: HomepageCopy["how"] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const card1Y = useTransform(scrollYProgress, [0.18, 0.42], [620, 0]);
  const card1Opacity = useTransform(scrollYProgress, [0.18, 0.28], [0, 1]);
  const card2Y = useTransform(scrollYProgress, [0.34, 0.58], [620, 0]);
  const card2Opacity = useTransform(scrollYProgress, [0.34, 0.44], [0, 1]);
  const card3Y = useTransform(scrollYProgress, [0.5, 0.74], [620, 0]);
  const card3Opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);

  const cardMotionStyles: MotionStyle[] = shouldReduceMotion
    ? [
        { opacity: 1, y: 0 },
        { opacity: 1, y: 0 },
        { opacity: 1, y: 0 },
      ]
    : [
        { opacity: card1Opacity, y: card1Y },
        { opacity: card2Opacity, y: card2Y },
        { opacity: card3Opacity, y: card3Y },
      ];

  return (
    <section className="bg-[#F3F7FB] px-5 py-24 lg:px-8">
      <div ref={sectionRef} className="relative mx-auto max-w-[1240px] lg:h-[190vh]">
        <div className="lg:sticky lg:top-10">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#E4EDF7] bg-[#FFFFFF] p-6 shadow-[0_28px_90px_rgba(11,31,58,0.07)] sm:p-8 md:rounded-[3.5rem] md:p-12 lg:min-h-[900px] lg:p-16">
            <div className="pointer-events-none absolute -left-24 top-[42%] hidden h-72 w-72 rounded-full bg-[#048EFF]/[0.035] blur-3xl lg:block" />
            <div className="pointer-events-none absolute inset-x-16 bottom-[31rem] hidden h-px bg-[#E4EDF7]/70 lg:block" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
              <div className="max-w-xl">
                <p className={eyebrowClasses}>{copy.eyebrow}</p>
                <h2 className="mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight text-[#0B1F3A] sm:text-5xl">
                  {copy.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[#42526A]">
                  {copy.body}
                </p>
              </div>
              <div className="lg:justify-self-end lg:pt-2">
                <Link
                  href="/test-your-english-level"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#048EFF] px-5 text-sm font-semibold !text-[#FFFFFF] shadow-[0_14px_30px_rgba(4,142,255,0.2)] transition hover:bg-[#F3B737] hover:!text-[#FFFFFF]"
                >
                  <span>{copy.cta}</span>
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative z-10 mt-12 lg:pointer-events-none lg:absolute lg:bottom-16 lg:left-16 lg:right-16 lg:mt-0">
              <div className="pointer-events-auto grid gap-5 lg:grid-cols-3">
                {copy.steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    style={cardMotionStyles[index]}
                    className="max-lg:!translate-y-0 max-lg:!opacity-100"
                  >
                    <ProcessStepCard
                      index={index}
                      linkLabel={copy.stepLinkLabel}
                      motionStyle={{}}
                      step={step}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Capabilities({ copy }: { copy: HomepageCopy["capabilities"] }) {
  return (
    <section className="bg-[#FFFFFF] px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className={eyebrowClasses}>
            {copy.eyebrow}
          </p>
          <h2 className="mt-5 font-heading text-4xl font-semibold leading-tight text-[#0B1F3A] sm:text-5xl">
            {copy.title}
          </h2>
          <p className="mt-5 text-base leading-8 text-[#42526A]">{copy.body}</p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.15fr_0.9fr] lg:items-center">
          {copy.cards.map((card, index) => (
            <article
              key={card.title}
              className={`rounded-[2.5rem] border p-7 ${
                index === 1
                  ? "min-h-[420px] border-[#0B1F3A] bg-[#0B1F3A] text-[#FFFFFF] shadow-[0_24px_80px_rgba(11,31,58,0.2)]"
                  : "min-h-[340px] border-[#E4EDF7] bg-[#FFFFFF] text-[#0B1F3A] shadow-[0_14px_34px_rgba(11,31,58,0.04)]"
              }`}
            >
              <div className={`relative mb-10 h-40 overflow-hidden rounded-[2rem] border ${index === 1 ? "border-white/10 bg-[#048EFF]/15" : "border-[#D8E6F4] bg-[#F3F7FB]"}`}>
                {card.image ? (
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(min-width: 1024px) 360px, 100vw"
                    className="object-cover"
                  />
                ) : null}
              </div>
              <PlaceholderIcon icon={card.icon} />
              <h3 className="mt-6 font-heading text-2xl font-semibold">{card.title}</h3>
              <p className={`mt-4 text-base leading-8 ${index === 1 ? "text-white/75" : "text-[#42526A]"}`}>
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DarkCTA({ copy }: { copy: HomepageCopy["conversion"] }) {
  return (
    <section className="bg-[#FFFFFF] px-4 py-20 sm:px-6 lg:px-10">
      <div className="relative mx-auto grid max-w-[1100px] gap-10 overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#0B1F3A] via-[#081A2F] to-[#06243F] p-8 text-[#FFFFFF] shadow-[0_30px_100px_rgba(11,31,58,0.24)] sm:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:p-14">
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#048EFF]/20 blur-3xl" />
        <div className="relative">
          <h2 className="max-w-2xl font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            {copy.title}
          </h2>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="dark">
              {copy.primary}
            </Button>
            <Link
              href="/corporate"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-5 text-sm font-semibold text-[#FFFFFF] transition hover:border-[#048EFF] hover:text-[#7EC7FF]"
            >
              {copy.secondary}
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="relative rounded-[2.25rem] border border-white/10 bg-white/8 p-6">
          <p className="text-base leading-8 text-white/75">{copy.body}</p>
          <div className="mt-7 grid gap-3">
            {copy.details.map((detail) => (
              <div
                key={detail}
                className="flex items-center justify-between border-t border-white/10 pt-4 text-sm font-semibold text-white/85 first:border-t-0 first:pt-0"
              >
                {detail}
                <Icon name="arrow" className="h-4 w-4 text-[#7EC7FF]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function testimonialInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function TestimonialCard({
  item,
}: {
  item: HomepageCopy["testimonials"]["items"][number];
}) {
  const meta = [item.role, item.location].filter(Boolean).join(" / ");

  return (
    <article className="min-h-[170px] rounded-[2rem] border border-[#E4EDF7] bg-[#F8FBFF] p-6 shadow-[0_16px_38px_rgba(11,31,58,0.045)]">
      <p className="text-base leading-8 text-[#42526A]">&ldquo;{item.quote}&rdquo;</p>
      <div className="mt-6 flex items-center gap-3">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full border border-[#E4EDF7] object-cover"
          />
        ) : (
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#CFE5FA] bg-[#EAF6FF] font-heading text-sm font-semibold text-[#048EFF]">
            {testimonialInitials(item.name)}
          </span>
        )}
        <span className="min-w-0">
          <span className="block font-heading text-sm font-semibold text-[#0B1F3A]">
            {item.name}
          </span>
          {meta ? (
            <span className="mt-1 block text-xs leading-5 text-[#6B7A90]">
              {meta}
            </span>
          ) : null}
        </span>
      </div>
    </article>
  );
}

function Testimonials({ copy }: { copy: HomepageCopy["testimonials"] }) {
  const leftItems = copy.items.filter((_, index) => index % 2 === 0);
  const rightItems = copy.items.filter((_, index) => index % 2 === 1);
  const mobileItems = copy.items.slice(0, 4);

  return (
    <section className="bg-[#F3F7FB] px-5 py-24 lg:px-8 lg:py-28">
      <style>
        {`
          @keyframes testimonial-marquee-up {
            from { transform: translateY(0); }
            to { transform: translateY(-50%); }
          }

          @keyframes testimonial-marquee-down {
            from { transform: translateY(-50%); }
            to { transform: translateY(0); }
          }

          .testimonial-column-up {
            animation: testimonial-marquee-up 34s linear infinite;
          }

          .testimonial-column-down {
            animation: testimonial-marquee-down 38s linear infinite;
          }

          .testimonial-stream:hover .testimonial-column {
            animation-play-state: paused;
          }

          @media (prefers-reduced-motion: reduce) {
            .testimonial-column {
              animation: none !important;
              transform: none !important;
            }
          }
        `}
      </style>

      <div className="mx-auto max-w-[1240px] overflow-hidden rounded-[3.5rem] border border-[#E4EDF7] bg-[#FFFFFF] p-8 shadow-[0_28px_90px_rgba(11,31,58,0.07)] md:p-12 lg:min-h-[720px] lg:p-16">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="testimonial-stream relative hidden h-[600px] overflow-hidden lg:block">
              <div className="grid h-full grid-cols-2 gap-5">
                <div className="-mt-10">
                  <div className="testimonial-column testimonial-column-up grid gap-5">
                    {[...leftItems, ...leftItems].map((item, index) => (
                      <TestimonialCard
                        key={`${item.name}-left-${index}`}
                        item={item}
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-12">
                  <div className="testimonial-column testimonial-column-down grid gap-5">
                    {[...rightItems, ...rightItems].map((item, index) => (
                      <TestimonialCard
                        key={`${item.name}-right-${index}`}
                        item={item}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#FFFFFF] to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#FFFFFF] to-transparent" />
            </div>

            <div className="grid gap-5 lg:hidden">
              {mobileItems.map((item) => (
                <TestimonialCard key={item.name} item={item} />
              ))}
            </div>
          </div>

          <div className="order-1 flex flex-col justify-center lg:order-2">
            <p className={eyebrowClasses}>
              {copy.eyebrow}
            </p>
            <h2 className="mt-5 font-heading text-4xl font-semibold leading-tight text-[#0B1F3A] sm:text-5xl">
              {copy.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#42526A]">{copy.body}</p>
            <div className="mt-8">
              <Button href="/contact">
                {copy.cta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Resources({ copy }: { copy: HomepageCopy["resources"] }) {
  return (
    <section className="bg-[#FFFFFF] px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1100px] gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className={eyebrowClasses}>
            {copy.eyebrow}
          </p>
          <h2 className="mt-5 max-w-2xl font-heading text-4xl font-semibold leading-tight text-[#0B1F3A] sm:text-5xl">
            {copy.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#42526A]">{copy.body}</p>
          <div className="mt-8 grid gap-4">
            {copy.articles.map((article) => (
              <Link
                key={article.title}
                href={article.href ?? "#"}
                className="rounded-[2.25rem] border border-[#E4EDF7] bg-[#FFFFFF] p-6 shadow-[0_12px_30px_rgba(11,31,58,0.04)] transition hover:border-[#048EFF]/45"
              >
                <h3 className="font-heading text-xl font-semibold text-[#0B1F3A]">{article.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#42526A]">{article.body}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="rounded-[3rem] bg-[#0B1F3A] p-8 text-[#FFFFFF] shadow-[0_24px_80px_rgba(11,31,58,0.18)] sm:p-10">
          <div className="mb-16 h-40 rounded-[2rem] border border-white/10 bg-[#048EFF]/12" />
          <h3 className="font-heading text-3xl font-semibold leading-tight">{copy.newsletterTitle}</h3>
          <p className="mt-4 text-base leading-8 text-white/75">{copy.newsletterBody}</p>
          <div className="mt-8 flex rounded-full border border-white/15 bg-[#FFFFFF] p-1">
            <input
              aria-label={copy.newsletterTitle}
              placeholder={copy.placeholder}
              className="min-w-0 flex-1 bg-transparent px-4 text-sm text-[#0B1F3A] outline-none placeholder:text-[#6B7A90]"
            />
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#048EFF] text-[#FFFFFF] transition hover:bg-[#F3B737]">
              <Icon name="arrow" className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({
  copy,
  language,
  setLanguage,
}: {
  copy: HomepageCopy;
  language: HomepageLanguage;
  setLanguage: (language: HomepageLanguage) => void;
}) {
  const navigation = navigationContent[language];

  return (
    <footer className="bg-[#FFFFFF] px-4 pb-4 pt-20 sm:px-6 lg:px-10">
      <div className="mx-auto rounded-[3rem] bg-gradient-to-br from-[#0B1F3A] via-[#081A2F] to-[#06243F] p-8 text-[#FFFFFF] shadow-[0_30px_100px_rgba(11,31,58,0.22)] sm:p-10 lg:p-14">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1.35fr_0.8fr]">
          <div>
            <LogoMark dark logo={copy.logo} />
            <p className="mt-6 max-w-sm text-base leading-8 text-white/70">
              {navigation.footer.brandLine}
            </p>
            <div className="mt-8 flex gap-3">
              {[1, 2, 3].map((item) => (
                <span
                  key={item}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5"
                />
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {navigation.footer.columns.map((column) => (
              <div key={column.title}>
                <h3 className="font-heading text-sm font-semibold text-[#FFFFFF]">{column.title}</h3>
                <div className="mt-5 grid gap-3 text-sm text-white/60">
                  {column.links.map((link) => (
                    <Link key={link.href + link.label} href={link.href} className="hover:text-[#FFFFFF]">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-[#FFFFFF]">
              {navigation.updates}
            </h3>
            <div className="mt-5 flex rounded-full border border-white/15 bg-white/10 p-1">
              <input
                aria-label={navigation.updates}
                placeholder={navigation.emailPlaceholder}
                className="min-w-0 flex-1 bg-transparent px-4 text-sm text-[#FFFFFF] outline-none placeholder:text-white/45"
              />
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#048EFF] text-[#FFFFFF] transition hover:bg-[#F3B737]">
                <Icon name="arrow" className="h-4 w-4" />
              </span>
            </div>
            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold text-[#FFFFFF]">{navigation.footer.languageLabel}</p>
              <LanguageToggle language={language} onChange={setLanguage} />
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50">
          Langia Language Solutions LLC. {navigation.footer.copyright}
        </div>
      </div>
    </footer>
  );
}

export default function LangiaMarketingHomepage() {
  const [language, setLanguage] = useState<HomepageLanguage>(defaultLanguage);
  const copy = homepageContent[language];

  function handleLanguageChange(nextLanguage: HomepageLanguage) {
    setLanguage(nextLanguage);

    try {
      window.localStorage.setItem(languageStorageKey, nextLanguage);
    } catch {
      // The selected language still updates when storage is unavailable.
    }

    notifyLanguageChange(nextLanguage);
  }

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const storedLanguage = window.localStorage.getItem(languageStorageKey);

        if (storedLanguage && isHomepageLanguage(storedLanguage)) {
          setLanguage(storedLanguage);
          return;
        }

        const detectedLanguage = detectBrowserLanguage();
        setLanguage(detectedLanguage);
        window.localStorage.setItem(languageStorageKey, detectedLanguage);
      } catch {
        setLanguage(detectBrowserLanguage());
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#0B1F3A]">
      <Hero copy={copy} language={language} />
      <SupportStrip copy={copy.support} />
      <SignatureFeature copy={copy.signature} />
      <SolutionsGrid copy={copy.solutions} />
      <HowItWorks copy={copy.how} />
      <Capabilities copy={copy.capabilities} />
      <DarkCTA copy={copy.conversion} />
      <Testimonials copy={copy.testimonials} />
      <Resources copy={copy.resources} />
      <Footer
        copy={copy}
        language={language}
        setLanguage={handleLanguageChange}
      />
    </main>
  );
}
