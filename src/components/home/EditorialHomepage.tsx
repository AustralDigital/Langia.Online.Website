"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode, type RefObject } from "react";

import { LocalizedLink as Link } from "@/components/site/LocalizedLink";
import {
  ArrowIcon,
  MarketingButton,
} from "@/components/site/MarketingPrimitives";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LearnerStories } from "@/components/home/LearnerStories";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import {
  defaultLanguage,
  homepageContent,
  isHomepageLanguage,
  type HomepageCopy,
  type HomepageLanguage,
} from "@/content/homepage";
import { languageStorageKey, notifyLanguageChange } from "@/lib/language";

export type HomepageArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  coverImage?: string;
  coverImageExists: boolean;
  readingTime: number;
};

const images = {
  program: "/images/marketing-2026/programs/langia-online-journey-option2.png",
  family: "/images/marketing-2026/home/family-travel-independence.webp",
  ai: "/images/marketing-2026/editorial/ai-assisted-human-outcome.webp",
  corporate: "/images/marketing-2026/corporate/global-team-presentation.webp",
  finalCta: "/images/marketing-2026/home/final-cta-vision.webp",
} as const;

const heroImage = "/images/marketing-2026/home/hero-international-city-option2.png";

const methodVideoSrc = process.env.NEXT_PUBLIC_LANGIA_METHOD_VIDEO_URL?.trim() || null;
const editorialEase = [0.22, 1, 0.36, 1] as const;

function subscribeToReducedMotion(onChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getReducedMotionPreference() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function subscribeToCompactViewport(onChange: () => void) {
  const query = window.matchMedia("(max-width: 767px)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getCompactViewport() {
  return window.matchMedia("(max-width: 767px)").matches;
}

function useSafeReducedMotion() {
  return useSyncExternalStore(subscribeToReducedMotion, getReducedMotionPreference, () => false);
}

function useCompactMotionViewport() {
  return useSyncExternalStore(subscribeToCompactViewport, getCompactViewport, () => false);
}

function useNativeScrollProgress(ref: RefObject<HTMLElement | null>, mode: "sticky" | "viewport" = "sticky") {
  const progress = useMotionValue(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const element = ref.current;
        if (!element) return;

        const bounds = element.getBoundingClientRect();
        const elementTop = bounds.top + window.scrollY;
        const start = mode === "viewport" ? elementTop - window.innerHeight : elementTop;
        const distance = mode === "viewport"
          ? element.offsetHeight + window.innerHeight
          : Math.max(1, element.offsetHeight - window.innerHeight);
        const next = Math.min(1, Math.max(0, (window.scrollY - start) / distance));
        progress.set(next);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [mode, progress, ref]);

  return progress;
}

function detectBrowserLanguage(): HomepageLanguage {
  const browserLanguage = navigator.languages?.[0] ?? navigator.language ?? "";
  const normalized = browserLanguage.toLowerCase();
  if (normalized.startsWith("es")) return "es";
  if (normalized.startsWith("pt")) return "pt";
  return "en";
}

function BrandLogo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Image
      src="/images/logo-lockup.svg"
      alt="Langia"
      width={4160}
      height={1908}
      className={`h-12 w-28 shrink-0 object-contain ${inverse ? "brightness-0 invert" : ""}`}
    />
  );
}

function Eyebrow({ children, inverse = false }: { children: ReactNode; inverse?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] ${inverse ? "text-white/75" : "text-[var(--langia-blue-ink)]"}`}>
      <span className={`h-2 w-2 rounded-full ${inverse ? "bg-[var(--langia-gold)]" : "bg-[var(--langia-brand-signal)]"}`} />
      {children}
    </p>
  );
}

function MediaReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduceMotion = useSafeReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.18, once: true }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.6, ease: editorialEase }}
    >
      {children}
    </motion.div>
  );
}

function HeroHeadline({ copy, wordIndex }: { copy: HomepageCopy["hero"]; wordIndex: number }) {
  const reduceMotion = useSafeReducedMotion();

  return (
    <h1 className="max-w-[13ch] font-heading text-[clamp(2.75rem,4.15vw,4.95rem)] font-medium leading-[0.94] tracking-[-0.06em] text-white">
      <span className="sr-only">{copy.rotating.join(", ")} {copy.line2} {copy.line3}</span>
      <span aria-hidden="true">
        <span className="relative grid w-fit overflow-visible pb-[0.06em]">
          <AnimatePresence initial={false} mode="sync">
            <motion.span
              key={copy.rotating[wordIndex]}
              className="col-start-1 row-start-1 inline-block whitespace-nowrap"
              initial={reduceMotion ? false : { filter: "blur(5px)", opacity: 0.18, y: 18 }}
              animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { filter: "blur(5px)", opacity: 0.12, y: -16 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.58, ease: editorialEase }}
            >
              {copy.rotating[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </span>
        <span className="block">{copy.line2}</span>
        <span className="block">{copy.line3}</span>
      </span>
    </h1>
  );
}

function HeroPhotograph({ imageAlt }: { imageAlt: string }) {
  return <Image src={heroImage} alt={imageAlt} fill priority quality={90} sizes="(max-width: 767px) 1800px, 100vw" className="object-cover object-[64%_center]" />;
}

function Hero({ copy }: { copy: HomepageCopy }) {
  const ref = useRef<HTMLElement>(null);
  const foregroundRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);
  const [minimumHeight, setMinimumHeight] = useState(740);
  const reduceMotion = useSafeReducedMotion();
  const compactMotion = useCompactMotionViewport();
  const [activeLanguage, setActiveLanguage] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [foregroundHidden, setForegroundHidden] = useState(false);
  const [supportHidden, setSupportHidden] = useState(false);
  const progress = useNativeScrollProgress(ref);
  const inset = useTransform(progress, [0, 0.2, 0.42], compactMotion ? ["8px", "8px", "0px"] : ["20px", "20px", "0px"]);
  const radius = useTransform(progress, [0, 0.2, 0.42], ["30px", "30px", "0px"]);
  const scale = useTransform(progress, [0, 0.42, 0.64, 1], [1, 1, 1.06, 1.06]);
  const filter = useTransform(progress, [0, 0.42, 0.6, 1], ["blur(0px) brightness(1.05)", "blur(0px) brightness(1.05)", "blur(6px) brightness(1.03)", "blur(6px) brightness(1.03)"]);
  const foregroundOpacity = useTransform(progress, [0, 0.08, 0.19], [1, 1, 0]);
  const foregroundY = useTransform(progress, [0, 0.22], [0, -390]);
  const supportOpacity = useTransform(progress, [0.16, 0.3, 0.39], [1, 1, 0]);
  const supportY = useTransform(progress, [0.13, 0.42], [0, -560]);
  const pauseLabel = copy === homepageContent.es ? "Pausar rotación de idiomas" : copy === homepageContent.pt ? "Pausar rotação de idiomas" : "Pause language rotation";
  const resumeLabel = copy === homepageContent.es ? "Reanudar rotación de idiomas" : copy === homepageContent.pt ? "Retomar rotação de idiomas" : "Resume language rotation";

  useEffect(() => {
    const foreground = foregroundRef.current;
    const support = supportRef.current;
    if (!foreground || !support) return;
    // Reserve room for wrapped translations and text scaling without shrinking the type.
    const observer = new ResizeObserver(() => {
      setMinimumHeight(Math.max(740, Math.ceil(foreground.offsetHeight + support.offsetHeight + 48)));
    });
    observer.observe(foreground);
    observer.observe(support);
    return () => observer.disconnect();
  }, []);

  useMotionValueEvent(progress, "change", (value) => {
    setForegroundHidden(value >= 0.19);
    setSupportHidden(value >= 0.39);
  });

  useEffect(() => {
    if (reduceMotion || paused || interacting || foregroundHidden) return;
    const interval = window.setInterval(() => setActiveLanguage(current => (current + 1) % copy.hero.rotating.length), 7200);
    return () => window.clearInterval(interval);
  }, [reduceMotion, paused, interacting, foregroundHidden, copy.hero.rotating.length]);

  return (
    <>
    <section id="top" ref={ref} className={reduceMotion ? "relative" : "relative h-[230svh] lg:h-[250svh]"}>
      <div className={reduceMotion ? "relative h-[max(800px,100svh)] overflow-hidden" : "sticky top-0 h-svh min-h-[740px] overflow-hidden lg:min-h-0"} style={compactMotion ? { minHeight: minimumHeight } : undefined}>
        <motion.div className="absolute overflow-hidden bg-[var(--langia-mist)]" style={reduceMotion ? { inset: compactMotion ? "8px" : "20px", borderRadius: "30px" } : { inset, borderRadius: radius }}>
          <motion.div className="absolute inset-0" style={reduceMotion ? undefined : { scale, filter }}>
            <HeroPhotograph imageAlt={copy.hero.imageAlt} />
          </motion.div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,22,43,.49)_0%,rgba(5,22,43,.18)_40%,transparent_72%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[36%] bg-gradient-to-t from-[#081b30]/65 to-transparent" />
          <motion.div ref={foregroundRef} data-hero-foreground inert={!reduceMotion && foregroundHidden} aria-hidden={!reduceMotion && foregroundHidden ? true : undefined} className="absolute left-0 top-0 z-10 max-w-full px-7 pt-28 sm:px-12 sm:pt-32 lg:px-[60px]" style={reduceMotion ? undefined : { opacity: foregroundOpacity, y: foregroundY }}>
            <Eyebrow inverse>{copy.hero.badge}</Eyebrow>
            <div className="mt-6"><HeroHeadline copy={copy.hero} wordIndex={activeLanguage} /></div>
            <p className="mt-6 max-w-[29rem] text-sm font-medium leading-6 text-white sm:text-base sm:leading-7">{copy.hero.body}</p>
            <div className="mt-7 flex flex-wrap items-center gap-4 sm:gap-6">
              <MarketingButton href="/contact" className="shadow-none">{copy.hero.primary}</MarketingButton>
              <Link href="#programs" className="home-text-action !text-white">{copy.hero.secondary}<ArrowIcon /></Link>
            </div>
            <div className="mt-4 flex items-center gap-1" role="group" aria-label={copy.hero.badge} onPointerEnter={() => setInteracting(true)} onPointerLeave={event => { if (!event.currentTarget.contains(document.activeElement)) setInteracting(false); }} onFocus={() => setInteracting(true)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false); }}>
              {copy.hero.rotating.map((language, index) => <button key={language} type="button" aria-label={language} aria-pressed={activeLanguage === index} onClick={() => { setActiveLanguage(index); setPaused(true); }} className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><span aria-hidden="true" className={`h-1.5 rounded-full bg-white transition-[width,opacity] duration-300 ${activeLanguage === index ? "w-7" : "w-1.5 opacity-60"}`} /></button>)}
              {!reduceMotion && <button type="button" aria-label={paused ? resumeLabel : pauseLabel} aria-pressed={paused} onClick={() => setPaused(value => !value)} className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="currentColor">{paused ? <path d="M4 2.5 13 8l-9 5.5z" /> : <path d="M4 3h3v10H4zM10 3h3v10h-3z" />}</svg></button>}
            </div>
          </motion.div>
          <motion.div ref={supportRef} data-hero-support inert={!reduceMotion && supportHidden} aria-hidden={!reduceMotion && supportHidden ? true : undefined} className="absolute inset-x-0 bottom-0 z-10 px-7 pb-5 sm:px-12 sm:pb-8 lg:px-[60px]" style={reduceMotion ? undefined : { opacity: supportOpacity, y: supportY }}>
            <div className="max-w-[1000px] border-t border-white/35 pt-4">
              <p className="text-xs font-semibold leading-5 text-white">{copy.support.title}</p>
              <div data-workplace-logos className="mt-4 grid max-w-[940px] grid-cols-4 items-center gap-x-5 gap-y-4 sm:grid-cols-8 sm:gap-x-8">
                {copy.support.logos.map(logo => <span key={logo.name} className="relative block h-5 opacity-90 brightness-0 invert sm:h-6">{logo.src ? <Image src={logo.src} alt={logo.name} fill sizes="110px" className="object-contain object-left" /> : logo.name}</span>)}
              </div>
              <p className="mt-4 max-w-[90ch] text-[9px] leading-4 text-white/85 sm:text-[10px]">{copy.support.body}</p>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
    <HumanMotivation intro={copy.intro} overlap={!reduceMotion} />
    </>
  );
}

function HumanMotivation({ intro, overlap }: { intro: HomepageCopy["intro"]; overlap: boolean }) {
  return (
    <section id="transformation" className={`relative z-20 flex min-h-svh items-center bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12 ${overlap ? "-mt-[60svh]" : ""}`}>
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[1.25fr_.75fr] lg:items-end lg:gap-24">
        <div><Eyebrow>{intro.eyebrow}</Eyebrow><h2 className="mt-8 max-w-[14ch] font-heading text-[clamp(3.1rem,5.8vw,6.4rem)] font-medium leading-[.98] tracking-[-.065em]">{intro.title}</h2></div>
        <div><p className="max-w-md text-base leading-8 text-[var(--langia-muted)] sm:text-lg">{intro.body}</p><ol className="mt-8 grid gap-y-3 border-t border-[var(--langia-border)] pt-6">{intro.reasons.map((reason, index) => <li key={reason} className="flex items-center gap-4 text-base font-medium"><span className="text-xs tabular-nums text-[var(--langia-blue-ink)]">{String(index + 1).padStart(2, "0")}</span>{reason}</li>)}</ol></div>
      </div>
    </section>
  );
}

type ProgramCard = HomepageCopy["solutions"]["cards"][number];

function ProgramStory({ card, index }: { card: ProgramCard; index: number }) {
  const image = index === 0 ? images.program : (card.image ?? images.family);
  return (
    <article
      data-program-card
      className="relative mb-8 grid min-h-[680px] overflow-hidden rounded-[1.8rem] bg-[var(--langia-mist)] p-2 shadow-[0_22px_70px_rgba(11,31,58,.08)] sm:min-h-[720px] lg:sticky lg:top-[118px] lg:mb-[10svh] lg:h-[min(73svh,690px)] lg:min-h-[620px] lg:grid-cols-2"
      style={{ zIndex: index + 1 }}
    >
      <div className="flex min-h-[360px] flex-col rounded-[1.35rem] bg-white p-7 sm:p-10 lg:min-h-0 lg:p-12 xl:p-14">
        <div className="flex items-center justify-between text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--langia-muted)]"><span>{String(index + 1).padStart(2, "0")} / {copyProgramLabel(index)}</span><BrandLogo /></div>
        <div className="mt-10"><h3 className="max-w-[16ch] font-heading text-[clamp(2.2rem,2.35vw,2.8rem)] font-medium leading-[0.98] tracking-[-0.05em]">{card.title}</h3><p className="mt-5 max-w-md text-base leading-7 text-[var(--langia-muted)]">{card.body}</p></div>
        <Link href={card.href ?? "/programs"} className="home-text-action mt-auto w-full justify-between border-t border-[var(--langia-border)] pt-5 !text-[var(--langia-blue-ink)]">{card.linkLabel ?? card.title}<ArrowIcon className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" /></Link>
      </div>
      <MediaReveal className="relative min-h-[420px] overflow-hidden rounded-[1.35rem] lg:min-h-0">
        <Link href={card.href ?? "/programs"} className="group absolute inset-0 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[var(--langia-brand-signal)]"><Image src={image} alt={card.imageAlt ?? card.title} fill sizes="(min-width: 1024px) 39vw, 100vw" className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.035]" /><span className="absolute bottom-7 right-7 flex h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-white/78 text-[var(--langia-navy)] backdrop-blur-md sm:bottom-9 sm:right-9"><ArrowIcon /></span></Link>
      </MediaReveal>
    </article>
  );
}

function copyProgramLabel(index: number) {
  return ["Online", "Talkin' Club", "Test Prep", "Kids n Teens", "Corporate"][index] ?? "Program";
}

function Programs({ copy }: { copy: HomepageCopy["solutions"] }) {
  const cards = copy.cards;
  return (
    <section id="programs" className="scroll-mt-28 bg-white px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12 lg:pb-40">
      <div className="mx-auto flex min-h-[620px] w-full max-w-[1480px] flex-col pb-16 pt-28 sm:pt-36 lg:pb-20 lg:pt-40">
        <Eyebrow>{copy.eyebrow}</Eyebrow>
        <h2 className="mt-8 max-w-[10ch] font-heading text-[clamp(3.35rem,5.15vw,6.15rem)] font-medium leading-[0.9] tracking-[-0.07em] sm:text-[clamp(4rem,5.15vw,6.15rem)]">{copy.eyebrow}.</h2>
        <p className="mt-8 max-w-[21ch] font-heading text-[clamp(1.8rem,2.4vw,2.85rem)] font-medium leading-[1.08] tracking-[-0.04em]">{copy.title}</p>
        <p className="mt-5 max-w-xl text-base leading-8 text-[var(--langia-muted)]">{copy.body}</p>
        <div className="mt-auto grid grid-cols-2 gap-3 border-b border-[var(--langia-navy)]/16 pt-16 sm:grid-cols-4">
          {cards.map((card, index) => <span key={card.title} className="border-t border-[var(--langia-navy)]/16 py-3 text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-[var(--langia-muted)]">{String(index + 1).padStart(2, "0")} {copyProgramLabel(index)}</span>)}
        </div>
      </div>
      <div className="mx-auto w-full max-w-[1480px]">{cards.map((card, index) => <ProgramStory key={card.title} card={card} index={index} />)}</div>
      <div className="mx-auto flex w-full max-w-[1480px] justify-end"><Link href={copy.ctaHref} className="group inline-flex min-h-12 items-center gap-3 border-b border-[var(--langia-navy)]/25 text-sm font-semibold transition-colors hover:border-[var(--langia-brand-signal)] hover:text-[var(--langia-blue-ink)]">{copy.cta}<ArrowIcon className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" /></Link></div>
    </section>
  );
}

function ProcessPanels({ copy }: { copy: HomepageCopy["how"] }) {
  const steps = copy.steps;
  const [activeStep, setActiveStep] = useState(0);
  const reduceMotion = useSafeReducedMotion();
  return (
    <>
      <div data-process-rail className="mt-14 hidden gap-3 lg:flex">
        {steps.map((step, index) => {
          const active = activeStep === index;
          const panelId = `process-panel-${index}`;
          return (
            <motion.article data-process-panel key={step.title} className={`relative flex min-h-[390px] min-w-0 flex-col overflow-hidden rounded-[1.6rem] border p-7 text-[var(--langia-navy)] transition-colors duration-200 ${active ? "border-[#b8d8f0] bg-[var(--langia-mist)]" : "border-[var(--langia-border)] bg-white"}`} style={{ flexBasis: 0 }} initial={false} animate={{ flexGrow: active ? 2.2 : 1 }} transition={reduceMotion ? { duration: 0 } : { duration: 0.3, ease: editorialEase }} onPointerEnter={event => { if (event.pointerType === "mouse" && window.matchMedia("(hover: hover) and (pointer: fine)").matches) setActiveStep(index); }} onFocusCapture={() => setActiveStep(index)}>
              <button type="button" aria-expanded={active} aria-controls={panelId} aria-label={`${step.step}: ${step.title}`} onClick={() => setActiveStep(index)} className="flex min-h-11 w-full items-center justify-between text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--langia-blue-ink)]">
                <span className="text-xs font-semibold uppercase tracking-[.12em] text-[var(--langia-blue-ink)]">{step.step}</span><span className={`flex h-8 w-8 items-center justify-center rounded-full border border-[var(--langia-border)] bg-white transition-transform duration-200 ${active ? "rotate-90" : ""}`}><ArrowIcon /></span>
              </button>
              <h3 className={`mt-10 max-w-[14ch] font-heading font-medium leading-[1.08] tracking-[-.045em] ${active ? "text-[clamp(2rem,2.8vw,3rem)]" : "text-2xl"}`}>{step.title}</h3>
              <div id={panelId} hidden={!active} className="mt-auto pt-8">
                <p className="max-w-md text-sm leading-7 text-[var(--langia-muted)]">{step.body}</p>
                <Link href={step.href ?? "/contact"} className="home-text-action mt-4 !text-[var(--langia-blue-ink)]">{step.linkLabel ?? copy.stepLinkLabel}<ArrowIcon /></Link>
              </div>
            </motion.article>
          );
        })}
      </div>
      <div className="mt-12 grid gap-3 lg:hidden">
        {steps.map((step, index) => {
          const active = activeStep === index;
          const panelId = `process-mobile-panel-${index}`;
          return <article key={step.title} className={`rounded-[1.5rem] border ${active ? "border-[#b8d8f0] bg-[var(--langia-mist)]" : "border-[var(--langia-border)] bg-white"}`}><h3><button type="button" aria-expanded={active} aria-controls={panelId} onClick={() => setActiveStep(index)} className="flex min-h-24 w-full items-center justify-between gap-5 rounded-[1.5rem] px-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--langia-blue-ink)]"><span><span className="block text-xs font-semibold text-[var(--langia-blue-ink)]">{step.step}</span><span className="mt-2 block font-heading text-xl font-medium leading-snug tracking-[-.035em]">{step.title}</span></span><span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--langia-border)] bg-white transition-transform duration-200 ${active ? "rotate-90" : ""}`}><ArrowIcon /></span></button></h3><div id={panelId} hidden={!active} className="px-6 pb-6"><p className="text-sm leading-7 text-[var(--langia-muted)]">{step.body}</p><Link href={step.href ?? "/contact"} className="home-text-action mt-4 !text-[var(--langia-blue-ink)]">{step.linkLabel ?? copy.stepLinkLabel}<ArrowIcon /></Link></div></article>;
        })}
      </div>
    </>
  );
}

function Process({ copy }: { copy: HomepageCopy["how"] }) {
  return <section id="process" className="bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12"><div className="mx-auto max-w-[1480px]"><div className="grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-end lg:gap-24"><div><Eyebrow>{copy.eyebrow}</Eyebrow><h2 className="mt-8 max-w-[18ch] font-heading text-[clamp(2.8rem,4.2vw,5rem)] font-medium leading-[1.02] tracking-[-.06em]">{copy.title}</h2></div><p className="max-w-md text-base leading-8 text-[var(--langia-muted)]">{copy.body}</p></div><ProcessPanels copy={copy} /></div></section>;
}

function Tailored({ signature, reveal }: { signature: HomepageCopy["signature"]; reveal: HomepageCopy["reveal"] }) {
  return (
    <section id="tailored" className="bg-white px-5 pb-24 pt-12 sm:px-8 sm:pb-32 lg:px-12">
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_.7fr] lg:items-end lg:gap-20"><div><Eyebrow>{signature.titlePrefix.replace(/:\s*$/, "")}</Eyebrow><h2 className="mt-8 max-w-[18ch] font-heading text-[clamp(2.8rem,4.3vw,5.1rem)] font-medium leading-[1.02] tracking-[-.06em]">{signature.title}</h2></div><p className="max-w-md text-base leading-8 text-[var(--langia-muted)]">{signature.body}</p></div>
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.3fr_.7fr] lg:gap-16">
          <div data-method-media className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] bg-[var(--langia-mist)] sm:min-h-[480px] lg:min-h-[560px]">
            {methodVideoSrc ? <video className="absolute inset-0 h-full w-full object-cover" controls playsInline preload="metadata" poster={signature.image} aria-label={signature.eyebrow}><source src={methodVideoSrc} /></video> : <Image src={signature.image} alt={signature.imageAlt} fill sizes="(max-width: 767px) 900px, (min-width: 1024px) 65vw, 100vw" className="object-cover" />}
          </div>
          <div className="grid content-center divide-y divide-[var(--langia-border)]">{signature.benefits.map((benefit, index) => <div key={benefit.title} className="py-7 first:pt-0 last:pb-0"><span className="text-xs font-semibold text-[var(--langia-blue-ink)]">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-4 font-heading text-2xl font-medium tracking-[-.035em]">{benefit.title}</h3><p className="mt-3 max-w-md text-sm leading-7 text-[var(--langia-muted)]">{benefit.body}</p></div>)}</div>
        </div>
        <div className="mt-16 rounded-[1.75rem] bg-[var(--langia-mist)] px-6 py-9 sm:p-10 lg:p-12">
          <div className="grid gap-5 lg:grid-cols-[1fr_1fr] lg:gap-16"><h3 className="max-w-[30ch] font-heading text-[clamp(1.7rem,2.4vw,2.5rem)] font-medium leading-[1.15] tracking-[-.04em]">{reveal.title} {reveal.titleAccent}</h3><p className="text-sm leading-7 text-[var(--langia-muted)]">{reveal.body}</p></div>
          <ol className="mt-9 grid gap-6 border-t border-[var(--langia-border)] pt-8 sm:grid-cols-2 lg:grid-cols-5">{reveal.signals.map((signal, index) => <li key={signal.label}><span className="text-xs font-semibold text-[var(--langia-blue-ink)]">{String(index + 1).padStart(2, "0")}</span><h4 className="mt-3 text-sm font-semibold">{signal.label}</h4><p className="mt-2 text-xs leading-6 text-[var(--langia-muted)]">{signal.detail}</p></li>)}</ol>
        </div>
      </div>
    </section>
  );
}


function Corporate({ copy }: { copy: HomepageCopy["editorial"]["corporate"] }) {
  return <section id="corporate-home" className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="mx-auto grid max-w-[1480px] overflow-hidden rounded-[2rem] bg-[var(--langia-mist)] lg:grid-cols-2"><div className="flex flex-col items-start p-8 sm:p-12 lg:p-14"><Eyebrow>{copy.eyebrow}</Eyebrow><h2 className="mt-8 max-w-[13ch] font-heading text-[clamp(2.8rem,4vw,4.8rem)] font-medium leading-[1] tracking-[-.06em]">{copy.title}</h2><p className="mt-7 max-w-lg text-base leading-8 text-[var(--langia-muted)]">{copy.body}</p><Link href="/corporate" className="home-text-action mt-8 !text-[var(--langia-blue-ink)]">{copy.cta}<ArrowIcon /></Link></div><div className="relative min-h-[400px] sm:min-h-[480px] lg:min-h-[580px]"><Image src={images.corporate} alt={copy.imageAlt} fill sizes="(max-width: 767px) 900px, (min-width: 1024px) 50vw, 100vw" className="object-cover" /></div></div></section>;
}

function ResourceCard({ article, image, copy }: { article: HomepageArticle; image: string; copy: HomepageCopy["editorial"]["resources"] }) {
  return <Link href={`/blog/${article.slug}`} className="group block rounded-[1.5rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--langia-blue-ink)]"><div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[var(--langia-mist)]"><Image src={article.coverImageExists && article.coverImage ? article.coverImage : image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" /></div><p className="mt-6 text-xs font-semibold text-[var(--langia-blue-ink)]">{article.category}</p><h3 className="mt-3 font-heading text-[clamp(1.6rem,2vw,2.25rem)] font-medium leading-[1.15] tracking-[-.04em]">{article.title}</h3><span className="home-text-action mt-4 text-[var(--langia-muted)]">{article.readingTime} min · {copy.readLabel}<ArrowIcon /></span></Link>;
}

function Resources({ copy, articles }: { copy: HomepageCopy["editorial"]["resources"]; articles: HomepageArticle[] }) {
  if (!articles.length) return null;
  return <section id="resources-home" className="bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12"><div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[1.05fr_1fr_1fr] lg:gap-8"><div className="lg:pr-8"><Eyebrow>{copy.eyebrow}</Eyebrow><h2 className="mt-8 max-w-[14ch] font-heading text-[clamp(2.8rem,3.8vw,4.5rem)] font-medium leading-[1.02] tracking-[-.06em]">{copy.title}</h2><p className="mt-7 max-w-md text-base leading-8 text-[var(--langia-muted)]">{copy.body}</p><Link href="/blog" className="home-text-action mt-6 !text-[var(--langia-blue-ink)]">{copy.cta}<ArrowIcon /></Link></div>{articles.slice(0, 2).map((article, index) => <ResourceCard key={article.slug} article={article} image={index ? images.ai : images.family} copy={copy} />)}</div></section>;
}

function FAQ({ copy, contactLabel }: { copy: HomepageCopy["faq"]; contactLabel: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-white px-5 py-28 sm:px-8 sm:py-28 lg:px-12 lg:py-32"><div className="mx-auto w-full max-w-[680px] text-center">
      <Eyebrow>{copy.eyebrow}</Eyebrow>
      <h2 className="mt-8 font-heading text-[clamp(5rem,7vw,8.4rem)] font-medium leading-[0.86] tracking-[-0.075em]">FAQ</h2>
      <p className="mx-auto mt-7 max-w-sm text-base leading-8 text-[var(--langia-muted)]">{copy.body}</p>
      <div className="mt-14 grid gap-2 rounded-[2rem] bg-[var(--langia-mist)] p-2 text-left">
        {copy.items.map((item, index) => { const open = openIndex === index; const id = `home-faq-panel-${index}`; return <div key={item.title} className="overflow-hidden rounded-[1.45rem] bg-white"><button type="button" className="flex min-h-20 w-full items-start justify-between gap-7 px-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--langia-brand-signal)] sm:px-7" aria-expanded={open} aria-controls={id} onClick={() => setOpenIndex(open ? null : index)}><span className="font-heading text-lg font-semibold leading-snug tracking-[-0.03em] sm:text-xl">{item.title}</span><span className={`relative mt-1 h-6 w-6 shrink-0 transition-transform duration-500 ${open ? "rotate-45" : ""}`} aria-hidden="true"><span className="absolute left-0 top-1/2 h-px w-6 bg-[var(--langia-navy)]" /><span className="absolute left-1/2 top-0 h-6 w-px bg-[var(--langia-navy)]" /></span></button><div id={id} aria-hidden={!open} className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}><div className="overflow-hidden"><p className="px-6 pb-7 pr-10 text-sm leading-7 text-[var(--langia-muted)] sm:px-7 sm:text-base">{item.body}</p></div></div></div>; })}
      </div>
      <div className="mt-4 flex flex-col items-start justify-between gap-4 rounded-[1.5rem] bg-[var(--langia-mist)] p-6 text-left sm:flex-row sm:items-center"><p className="font-heading text-lg font-semibold tracking-[-0.03em]">{copy.title}</p><Link href="/contact" className="home-text-action !text-[var(--langia-blue-ink)]">{contactLabel}<ArrowIcon /></Link></div>
    </div></section>
  );
}

function Conversion({ copy }: { copy: HomepageCopy["conversion"] }) {
  return <section id="conversion" className="bg-white px-2.5 pb-5 pt-12 sm:px-5 sm:pb-8 sm:pt-20"><div className="relative mx-auto max-w-[1880px] overflow-hidden rounded-[2rem] bg-[var(--langia-mist)]"><Image src={images.finalCta} alt={copy.imageAlt} fill sizes="(max-width: 767px) 1600px, 100vw" className="object-cover object-[58%_center]" /><div className="home-conversion-shade absolute inset-0" /><div className="relative z-10 grid min-h-[860px] content-end gap-14 p-7 sm:p-10 lg:min-h-[max(760px,90svh)] lg:grid-cols-2 lg:items-end lg:p-14 xl:p-16"><div className="pt-14 lg:self-center lg:pt-0"><h2 className="max-w-[10ch] font-heading text-[clamp(3.3rem,4.5vw,5.2rem)] font-medium leading-[.98] tracking-[-.065em] text-white">{copy.title}</h2><ul className="mt-10 hidden max-w-xl grid-cols-3 gap-5 border-t border-white/40 pt-6 text-white lg:grid">{copy.details.map((detail, index) => <li key={detail} className="text-sm font-semibold leading-6"><span className="mb-3 block text-xs text-white/90">{String(index + 1).padStart(2, "0")}</span>{detail}</li>)}</ul></div><div className="w-full max-w-[580px] rounded-[1.75rem] border border-white/70 bg-white/90 p-7 text-[var(--langia-navy)] backdrop-blur-md sm:p-10 lg:justify-self-end"><BrandLogo /><p className="mt-7 font-heading text-[clamp(1.65rem,2.2vw,2.4rem)] font-medium leading-[1.18] tracking-[-.04em]">{copy.body}</p><div className="mt-8 grid gap-3 border-t border-[var(--langia-border)] pt-7 sm:grid-cols-2"><MarketingButton href="/contact" className="shadow-none">{copy.primary}</MarketingButton><MarketingButton href="/corporate" variant="secondary">{copy.secondary}</MarketingButton></div></div></div></div></section>;
}

export function EditorialHomepage({ language: languageProp, articles = [] }: { language?: HomepageLanguage; articles?: HomepageArticle[] } = {}) {
  const [storedLanguage, setLanguageState] = useState<HomepageLanguage>(languageProp ?? defaultLanguage);
  const language = languageProp ?? storedLanguage;
  const copy = homepageContent[language];

  useEffect(() => {
    if (languageProp) { document.documentElement.lang = languageProp === "pt" ? "pt-BR" : languageProp; return; }
    const frame = window.requestAnimationFrame(() => {
      try {
        const stored = window.localStorage.getItem(languageStorageKey);
        const next = stored && isHomepageLanguage(stored) ? stored : detectBrowserLanguage();
        setLanguageState(next); document.documentElement.lang = next === "pt" ? "pt-BR" : next; window.localStorage.setItem(languageStorageKey, next);
      } catch {
        const next = detectBrowserLanguage(); setLanguageState(next); document.documentElement.lang = next === "pt" ? "pt-BR" : next;
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [languageProp]);

  function setLanguage(next: HomepageLanguage) {
    setLanguageState(next); document.documentElement.lang = next === "pt" ? "pt-BR" : next;
    try { window.localStorage.setItem(languageStorageKey, next); } catch {}
    notifyLanguageChange(next);
  }

  return (
    <main className="langia-home overflow-x-clip bg-white text-[var(--langia-navy)]">
      <SiteNavbar variant="overlay" language={language} />
      <Hero copy={copy} />
      <Programs copy={copy.solutions} />
      <Process copy={copy.how} />
      <Tailored signature={copy.signature} reveal={copy.reveal} />
      <LearnerStories language={language} />
      <Corporate copy={copy.editorial.corporate} />
      <Resources copy={copy.editorial.resources} articles={articles} />
      <FAQ copy={copy.faq} contactLabel={copy.nav.contact} />
      <Conversion copy={copy.conversion} />
      <SiteFooter language={language} onLanguageChange={setLanguage} />
    </main>
  );
}
