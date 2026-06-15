"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";

import {
  defaultPageLanguage,
  pagesContent,
  type PageLanguage,
  type ProgramCardContent,
  type ProgramsOverviewContent,
} from "@/content/pages";

const LANGUAGE_STORAGE_KEY = "langiaLanguage";
const languages: { value: PageLanguage; label: string }[] = [
  { value: "es", label: "ES" },
  { value: "pt", label: "PT" },
  { value: "en", label: "EN" },
];

type ImageAvailability = Record<string, boolean>;

function isPageLanguage(value: string | null): value is PageLanguage {
  return value === "es" || value === "pt" || value === "en";
}

function getProgramsOverview(language: PageLanguage): ProgramsOverviewContent {
  const content = pagesContent[language].programs.overview ?? pagesContent.es.programs.overview;

  if (!content) {
    throw new Error("Programs overview content is missing.");
  }

  return content;
}

function detectBrowserLanguage(): PageLanguage {
  const browserLanguage =
    typeof navigator !== "undefined"
      ? navigator.languages?.[0] ?? navigator.language
      : "";
  const normalized = browserLanguage.toLowerCase();

  if (normalized.startsWith("pt")) {
    return "pt";
  }

  if (normalized.startsWith("en")) {
    return "en";
  }

  return defaultPageLanguage;
}

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
}) {
  const classes = {
    primary:
      "bg-[#048EFF] text-white shadow-[0_16px_34px_rgba(4,142,255,0.24)] hover:bg-[#F3B737]",
    secondary:
      "border border-[#D8E6F4] bg-white text-[#0B1F3A] hover:border-[#048EFF] hover:text-[#048EFF]",
    dark: "bg-white text-[#0B1F3A] hover:bg-[#F3B737] hover:text-white",
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition ${classes[variant]}`}
    >
      {children}
      <ArrowIcon />
    </Link>
  );
}

function MarketingNav({
  language,
  onLanguageChange,
}: {
  language: PageLanguage;
  onLanguageChange: (language: PageLanguage) => void;
}) {
  return (
    <header className="border-b border-[#E4EDF7] bg-white/90 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-10">
      <nav className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4">
        <Link href="/" className="font-heading text-xl font-semibold text-[#0B1F3A]">
          Langia
        </Link>
        <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-[#42526A]">
          <Link className="rounded-full px-3 py-2 hover:bg-[#F3F7FB] hover:text-[#048EFF]" href="/programs">
            Programas
          </Link>
          <Link className="rounded-full px-3 py-2 hover:bg-[#F3F7FB] hover:text-[#048EFF]" href="/about">
            Sobre Langia
          </Link>
          <Link className="rounded-full px-3 py-2 hover:bg-[#F3F7FB] hover:text-[#048EFF]" href="/corporate">
            Corporativo
          </Link>
          <Link className="rounded-full px-3 py-2 hover:bg-[#F3F7FB] hover:text-[#048EFF]" href="/blog">
            Blog
          </Link>
          <Link className="rounded-full px-3 py-2 hover:bg-[#F3F7FB] hover:text-[#048EFF]" href="/contact">
            Contacto
          </Link>
          <div className="ml-1 inline-flex rounded-full border border-[#D8E6F4] bg-white p-1">
            {languages.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => onLanguageChange(item.value)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  language === item.value
                    ? "bg-[#0B1F3A] text-white"
                    : "text-[#42526A] hover:text-[#048EFF]"
                }`}
                aria-pressed={language === item.value}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`font-heading text-xs font-semibold uppercase tracking-[0.18em] ${
        light ? "text-[#7EC7FF]" : "text-[#048EFF]"
      }`}
    >
      {children}
    </p>
  );
}

function ImageSlot({
  item,
  imageAvailability,
  priority = false,
  dark = false,
}: {
  item: ProgramCardContent;
  imageAvailability: ImageAvailability;
  priority?: boolean;
  dark?: boolean;
}) {
  const hasImage = imageAvailability[item.imagePath];

  if (hasImage) {
    return (
      <Image
        src={item.imagePath}
        alt=""
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 42vw, 100vw"
        priority={priority}
      />
    );
  }

  return (
    <div
      className={`absolute inset-0 overflow-hidden ${
        dark
          ? "bg-[linear-gradient(135deg,#0B1F3A_0%,#12345C_52%,#048EFF_100%)]"
          : "bg-[linear-gradient(135deg,#F3F7FB_0%,#EAF6FF_48%,#FFFFFF_100%)]"
      }`}
    >
      <div className="absolute left-6 top-6 h-20 w-28 rounded-[1.25rem] border border-white/50 bg-white/55 backdrop-blur-md" />
      <div className="absolute bottom-6 right-6 h-28 w-[58%] rounded-[1.5rem] border border-white/50 bg-white/45 backdrop-blur-md" />
      <div className="absolute bottom-14 left-8 h-3 w-28 rounded-full bg-[#048EFF]/35" />
      <div className="absolute bottom-8 left-8 h-3 w-44 max-w-[54%] rounded-full bg-white/65" />
      <div className="absolute right-12 top-12 h-11 w-11 rounded-full bg-[#F3B737]" />
    </div>
  );
}

function HeroVisual({
  content,
  imageAvailability,
}: {
  content: ProgramsOverviewContent;
  imageAvailability: ImageAvailability;
}) {
  const heroImage = content.programCards[0];

  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-[#D8E6F4] bg-[#F3F7FB] shadow-[0_24px_80px_rgba(11,31,58,0.08)] lg:min-h-[460px]">
      <ImageSlot item={heroImage} imageAvailability={imageAvailability} priority />
      <div className="absolute inset-x-5 bottom-5 rounded-[1.5rem] border border-white/60 bg-white/82 p-5 shadow-[0_18px_46px_rgba(11,31,58,0.1)] backdrop-blur-xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#048EFF]">
              Langia Online
            </p>
            <p className="mt-2 max-w-xs font-heading text-xl font-semibold text-[#0B1F3A]">
              {heroImage.description}
            </p>
          </div>
          <div className="grid h-16 w-24 place-items-center rounded-2xl bg-[#0B1F3A] text-sm font-semibold text-white">
            A1-C2
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgramCard({
  item,
  ctaLabel,
  imageAvailability,
  featured = false,
}: {
  item: ProgramCardContent;
  ctaLabel: string;
  imageAvailability: ImageAvailability;
  featured?: boolean;
}) {
  if (featured) {
    return (
      <article className="grid overflow-hidden rounded-[2rem] bg-[#0B1F3A] text-white shadow-[0_28px_80px_rgba(11,31,58,0.18)] lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative min-h-[260px]">
          <ImageSlot item={item} imageAvailability={imageAvailability} dark />
        </div>
        <div className="p-7 sm:p-9 lg:p-10">
          <Eyebrow light>{item.audience}</Eyebrow>
          <h3 className="mt-4 font-heading text-3xl font-semibold leading-tight">{item.name}</h3>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">{item.description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {item.highlights.map((highlight) => (
              <span
                key={highlight}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-2 text-sm font-medium text-white/82"
              >
                <CheckIcon />
                {highlight}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <Button href={item.href} variant="dark">
              {ctaLabel}
            </Button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-[#E4EDF7] bg-white shadow-[0_16px_44px_rgba(11,31,58,0.06)]">
      <div className="relative min-h-[230px] border-b border-[#E4EDF7]">
        <ImageSlot item={item} imageAvailability={imageAvailability} />
      </div>
      <div className="p-6 sm:p-7">
        <Eyebrow>{item.audience}</Eyebrow>
        <h3 className="mt-4 font-heading text-2xl font-semibold leading-tight text-[#0B1F3A]">
          {item.name}
        </h3>
        <p className="mt-4 min-h-24 text-sm leading-7 text-[#42526A]">{item.description}</p>
        <div className="mt-6 grid gap-2">
          {item.highlights.map((highlight) => (
            <span key={highlight} className="flex items-center gap-2 text-sm font-medium text-[#0B1F3A]">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#EAF6FF] text-[#048EFF]">
                <CheckIcon />
              </span>
              {highlight}
            </span>
          ))}
        </div>
        <Link
          href={item.href}
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#048EFF] transition hover:text-[#C8921B]"
        >
          {ctaLabel}
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}

function ComparisonSection({ content }: { content: ProgramsOverviewContent }) {
  const headers = content.comparison.headers;

  return (
    <section id="comparison" className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="max-w-2xl">
          <Eyebrow>{content.comparison.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-[#0B1F3A] sm:text-4xl">
            {content.comparison.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-[#42526A]">{content.comparison.body}</p>
        </div>

        <div className="mt-10 hidden overflow-hidden rounded-[1.5rem] border border-[#E4EDF7] bg-white shadow-[0_18px_50px_rgba(11,31,58,0.06)] lg:block">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-[#F3F7FB] text-xs font-semibold uppercase tracking-[0.12em] text-[#42526A]">
              <tr>
                <th className="px-5 py-5 text-[#0B1F3A]">Program</th>
                <th className="px-5 py-5">{headers.bestFor}</th>
                <th className="px-5 py-5">{headers.format}</th>
                <th className="px-5 py-5">{headers.focus}</th>
                <th className="px-5 py-5">{headers.practice}</th>
                <th className="px-5 py-5">{headers.nextStep}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E4EDF7]">
              {content.comparison.rows.map((row) => (
                <tr key={row.program} className="align-top">
                  <th className="px-5 py-5 font-heading text-base font-semibold text-[#0B1F3A]">
                    {row.program}
                  </th>
                  <td className="px-5 py-5 leading-7 text-[#42526A]">{row.bestFor}</td>
                  <td className="px-5 py-5 leading-7 text-[#42526A]">{row.format}</td>
                  <td className="px-5 py-5 leading-7 text-[#42526A]">{row.focus}</td>
                  <td className="px-5 py-5 leading-7 text-[#42526A]">{row.practice}</td>
                  <td className="px-5 py-5">
                    <Link
                      href={row.href}
                      className="inline-flex items-center gap-2 font-semibold text-[#048EFF] hover:text-[#C8921B]"
                    >
                      {row.nextStep}
                      <ArrowIcon />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-4 lg:hidden">
          {content.comparison.rows.map((row) => (
            <article key={row.program} className="rounded-[1.25rem] border border-[#E4EDF7] bg-white p-5 shadow-[0_12px_36px_rgba(11,31,58,0.05)]">
              <h3 className="font-heading text-xl font-semibold text-[#0B1F3A]">{row.program}</h3>
              <dl className="mt-5 grid gap-4 text-sm">
                <div>
                  <dt className="font-semibold text-[#0B1F3A]">{headers.bestFor}</dt>
                  <dd className="mt-1 leading-7 text-[#42526A]">{row.bestFor}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#0B1F3A]">{headers.format}</dt>
                  <dd className="mt-1 leading-7 text-[#42526A]">{row.format}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#0B1F3A]">{headers.focus}</dt>
                  <dd className="mt-1 leading-7 text-[#42526A]">{row.focus}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#0B1F3A]">{headers.practice}</dt>
                  <dd className="mt-1 leading-7 text-[#42526A]">{row.practice}</dd>
                </div>
              </dl>
              <Link
                href={row.href}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#048EFF] hover:text-[#C8921B]"
              >
                {row.nextStep}
                <ArrowIcon />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinderSection({ content }: { content: ProgramsOverviewContent }) {
  return (
    <section className="bg-[#F3F7FB] px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1180px] gap-10 rounded-[2rem] bg-[#0B1F3A] p-7 text-white shadow-[0_28px_90px_rgba(11,31,58,0.18)] md:grid-cols-[1fr_0.8fr] md:items-center sm:p-10 lg:p-12">
        <div>
          <Eyebrow light>{content.finder.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight sm:text-4xl">
            {content.finder.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">{content.finder.body}</p>
          <div className="mt-8">
            <Button href={content.finder.href} variant="primary">
              {content.finder.cta}
            </Button>
          </div>
        </div>
        <div className="rounded-[1.5rem] border border-white/15 bg-white/8 p-5">
          <div className="rounded-[1.25rem] bg-white p-5 text-[#0B1F3A]">
            <div className="flex items-center justify-between gap-4">
              <span className="h-3 w-24 rounded-full bg-[#048EFF]/30" />
              <span className="h-9 w-9 rounded-full bg-[#EAF6FF]" />
            </div>
            <div className="mt-7 grid gap-3">
              <span className="h-3 w-full rounded-full bg-[#D8E6F4]" />
              <span className="h-3 w-10/12 rounded-full bg-[#D8E6F4]" />
              <span className="h-3 w-8/12 rounded-full bg-[#D8E6F4]" />
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              <span className="h-16 rounded-2xl bg-[#F3F7FB]" />
              <span className="h-16 rounded-2xl bg-[#EAF6FF]" />
              <span className="h-16 rounded-2xl bg-[#F3F7FB]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CorporateSection({
  content,
  imageAvailability,
}: {
  content: ProgramsOverviewContent;
  imageAvailability: ImageAvailability;
}) {
  const corporateCard = content.programCards[4];

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-[1180px] overflow-hidden rounded-[2rem] bg-[#0B1F3A] text-white shadow-[0_28px_90px_rgba(11,31,58,0.18)] lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[320px]">
          <ImageSlot item={corporateCard} imageAvailability={imageAvailability} dark />
        </div>
        <div className="p-8 sm:p-10 lg:p-12">
          <Eyebrow light>{content.corporate.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight sm:text-5xl">
            {content.corporate.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">{content.corporate.body}</p>
          <div className="mt-8">
            <Button href={content.corporate.href} variant="primary">
              {content.corporate.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="font-heading text-sm font-semibold text-white">{title}</h2>
      <div className="mt-5 grid gap-3 text-sm text-white/65">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-white">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MarketingFooter() {
  return (
    <footer className="bg-white px-4 pb-5 pt-10 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1180px] gap-10 rounded-[2rem] bg-[#0B1F3A] p-8 text-white shadow-[0_30px_90px_rgba(11,31,58,0.2)] md:grid-cols-[1.1fr_1.6fr] sm:p-10">
        <div>
          <Link href="/" className="font-heading text-2xl font-semibold">
            Langia
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">
            Idiomas con estructura para comunicación global.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <FooterColumn
            title="Programas"
            links={[
              { label: "Programas", href: "/programs" },
              { label: "Langia Online", href: "/programs/langia-online" },
              { label: "Talkin' Club", href: "/programs/talkin-club" },
              { label: "Test Prep", href: "/programs/test-prep" },
              { label: "Kids n Teens", href: "/programs/langia-4-kids-n-teens" },
            ]}
          />
          <FooterColumn
            title="Empresa"
            links={[
              { label: "Sobre Langia", href: "/about" },
              { label: "Corporativo", href: "/corporate" },
              { label: "Legal", href: "/legal" },
              { label: "Trabaja con nosotros", href: "/work-with-us" },
            ]}
          />
          <FooterColumn
            title="Recursos"
            links={[
              { label: "Blog", href: "/blog" },
              { label: "Prueba de nivel", href: "/test-your-english-level" },
              { label: "Contacto", href: "/contact" },
            ]}
          />
        </div>
      </div>
    </footer>
  );
}

export function ProgramsOverviewClient({
  imageAvailability,
}: {
  imageAvailability: ImageAvailability;
}) {
  const [language, setLanguage] = useState<PageLanguage>(() => {
    if (typeof window === "undefined") {
      return defaultPageLanguage;
    }

    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return isPageLanguage(storedLanguage) ? storedLanguage : detectBrowserLanguage();
  });

  function handleLanguageChange(nextLanguage: PageLanguage) {
    setLanguage(nextLanguage);
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
  }

  const content = getProgramsOverview(language);
  const individualPrograms = content.programCards.slice(0, 4);
  const corporateProgram = content.programCards[4];

  return (
    <main className="min-h-screen bg-white text-[#0B1F3A]">
      <MarketingNav language={language} onLanguageChange={handleLanguageChange} />

      <section className="bg-[#F3F7FB] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Eyebrow>{content.hero.eyebrow}</Eyebrow>
            <h1 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-tight text-[#0B1F3A] sm:text-5xl lg:text-6xl">
              {content.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#42526A] sm:text-lg">
              {content.hero.body}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#comparison">{content.hero.primaryCta}</Button>
              <Button href={content.hero.secondaryHref} variant="secondary">
                {content.hero.secondaryCta}
              </Button>
            </div>
          </div>
          <HeroVisual content={content} imageAvailability={imageAvailability} />
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-6 md:grid-cols-2">
            {individualPrograms.map((item) => (
              <ProgramCard
                key={item.href}
                item={item}
                ctaLabel={content.cardCtaLabel}
                imageAvailability={imageAvailability}
              />
            ))}
          </div>
          <div className="mt-6">
            <ProgramCard
              item={corporateProgram}
              ctaLabel={content.cardCtaLabel}
              imageAvailability={imageAvailability}
              featured
            />
          </div>
        </div>
      </section>

      <ComparisonSection content={content} />
      <FinderSection content={content} />
      <CorporateSection content={content} imageAvailability={imageAvailability} />

      <section className="bg-[#F3F7FB] px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1180px] gap-8 rounded-[2rem] bg-white p-8 shadow-[0_24px_80px_rgba(11,31,58,0.08)] md:grid-cols-[1fr_auto] md:items-center sm:p-10 lg:p-12">
          <div>
            <h2 className="font-heading text-3xl font-semibold leading-tight text-[#0B1F3A] sm:text-4xl">
              {content.finalCta.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#42526A]">{content.finalCta.body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={content.finalCta.primaryHref}>{content.finalCta.primaryCta}</Button>
            <Button href={content.finalCta.secondaryHref} variant="secondary">
              {content.finalCta.secondaryCta}
            </Button>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </main>
  );
}
