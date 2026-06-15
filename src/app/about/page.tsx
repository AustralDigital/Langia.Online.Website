import { existsSync } from "node:fs";
import path from "node:path";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { pagesContent, type AboutPageContent, type PageBlock } from "@/content/pages";

const content = pagesContent.es.about.aboutPage;
const aboutImagePath = "/images/about/about-langia.webp";
const hasAboutImage = existsSync(path.join(process.cwd(), "public", aboutImagePath));

export const metadata: Metadata = {
  title: "About Langia | Human-Led, AI-Assisted Language Learning",
  description:
    "Learn about Langia, an international language education company founded in 2020 to provide human-led, AI-assisted language learning for learners, families, and teams.",
};

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
      strokeWidth="1.9"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function Eyebrow({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <p className={`font-heading text-xs font-semibold uppercase tracking-[0.18em] ${dark ? "text-[#7EC7FF]" : "text-[#048EFF]"}`}>
      {children}
    </p>
  );
}

function CtaLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: string;
  variant?: "primary" | "secondary" | "darkSecondary";
}) {
  const classes = {
    primary:
      "bg-[#048EFF] text-[#FFFFFF] shadow-[0_16px_34px_rgba(4,142,255,0.22)] hover:bg-[#F3B737]",
    secondary:
      "border border-[#D8E6F4] bg-[#FFFFFF] text-[#0B1F3A] hover:border-[#048EFF] hover:text-[#048EFF]",
    darkSecondary:
      "border border-white/20 text-[#FFFFFF] hover:border-[#048EFF] hover:text-[#7EC7FF]",
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

function HeroVisual() {
  if (hasAboutImage) {
    return (
      <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[#E4EDF7] bg-[#F3F7FB] shadow-[0_26px_90px_rgba(11,31,58,0.1)]">
        <Image
          src={aboutImagePath}
          alt="Langia learning experience"
          fill
          sizes="(min-width: 1024px) 520px, 100vw"
          className="object-cover"
          priority
        />
      </div>
    );
  }

  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[#E4EDF7] bg-[#F3F7FB] p-6 shadow-[0_26px_90px_rgba(11,31,58,0.1)]">
      <div className="absolute right-6 top-6 h-24 w-36 rounded-[1.35rem] border border-[#D8E6F4] bg-[#FFFFFF]" />
      <div className="absolute left-8 top-20 h-48 w-[62%] rounded-[1.75rem] border border-[#D8E6F4] bg-[#FFFFFF] shadow-[0_16px_44px_rgba(11,31,58,0.06)]" />
      <div className="absolute bottom-8 right-8 h-44 w-[68%] rounded-[1.75rem] border border-[#CFE5FA] bg-[#EAF6FF]" />
      <div className="absolute bottom-24 left-14 h-3 w-28 rounded-full bg-[#048EFF]/40" />
      <div className="absolute bottom-16 left-14 h-3 w-48 rounded-full bg-[#D8E6F4]" />
      <div className="absolute bottom-36 right-20 h-11 w-11 rounded-full bg-[#F3B737]" />
      <div className="absolute left-16 top-28 h-12 w-12 rounded-2xl border border-[#CFE5FA] bg-[#EAF6FF]" />
    </div>
  );
}

function CardGrid({ cards }: { cards: readonly PageBlock[] }) {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <article
          key={card.title}
          className="rounded-[1.75rem] border border-[#E4EDF7] bg-[#FFFFFF] p-6 shadow-[0_16px_42px_rgba(11,31,58,0.055)]"
        >
          <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#CFE5FA] bg-[#EAF6FF] text-[#048EFF]">
            <CheckIcon />
          </div>
          <h3 className="font-heading text-xl font-semibold text-[#0B1F3A]">{card.title}</h3>
          <p className="mt-4 text-sm leading-7 text-[#42526A]">{card.body}</p>
        </article>
      ))}
    </div>
  );
}

function Hero({ page: { hero } }: { page: AboutPageContent }) {
  return (
    <section className="bg-[#FFFFFF] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-tight text-[#0B1F3A] sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#42526A] sm:text-lg">
            {hero.body}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink href="/contact">{hero.primaryCta}</CtaLink>
            <CtaLink href="/programs" variant="secondary">
              {hero.secondaryCta}
            </CtaLink>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {hero.quickFacts.map((fact) => (
              <div
                key={fact}
                className="rounded-2xl border border-[#E4EDF7] bg-[#FFFFFF] px-4 py-3 text-sm font-semibold text-[#0B1F3A] shadow-[0_10px_28px_rgba(11,31,58,0.04)]"
              >
                {fact}
              </div>
            ))}
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function Origin({ page: { origin } }: { page: AboutPageContent }) {
  return (
    <section className="bg-[#F3F7FB] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-start">
        <div className="rounded-[2rem] border border-[#E4EDF7] bg-[#FFFFFF] p-8 shadow-[0_20px_70px_rgba(11,31,58,0.07)] sm:p-10">
          <Eyebrow>{origin.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold leading-tight text-[#0B1F3A] sm:text-4xl">
            {origin.title}
          </h2>
          <p className="mt-5 text-base leading-8 text-[#42526A]">{origin.body}</p>
        </div>
        <div className="rounded-[2rem] border border-[#E4EDF7] bg-[#FFFFFF] p-6 shadow-[0_20px_70px_rgba(11,31,58,0.07)]">
          <div className="grid gap-4">
            {origin.timeline.map((item) => (
              <div key={item.year} className="rounded-[1.5rem] border border-[#E4EDF7] bg-[#F3F7FB] p-5">
                <p className="font-heading text-3xl font-semibold text-[#048EFF]">{item.year}</p>
                <p className="mt-2 text-sm font-semibold text-[#0B1F3A]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EditorialSection({
  eyebrow,
  title,
  body,
  cards,
}: {
  eyebrow: string;
  title: string;
  body: string;
  cards: readonly PageBlock[];
}) {
  return (
    <section className="bg-[#FFFFFF] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-[#0B1F3A] sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-base leading-8 text-[#42526A]">{body}</p>
        </div>
        <CardGrid cards={cards} />
      </div>
    </section>
  );
}

function AiSection({ page: { ai } }: { page: AboutPageContent }) {
  return (
    <section className="bg-[#FFFFFF] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-[1180px] gap-10 overflow-hidden rounded-[2rem] bg-[#0B1F3A] p-8 text-[#FFFFFF] shadow-[0_30px_100px_rgba(11,31,58,0.24)] lg:grid-cols-[1fr_0.9fr] lg:p-12">
        <div>
          <Eyebrow dark>{ai.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            {ai.title}
          </h2>
          <p className="mt-5 text-base leading-8 text-white/72">{ai.body}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {ai.bullets.map((bullet) => (
              <div key={bullet} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm font-semibold text-white/86">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#048EFF] text-[#FFFFFF]">
                  <CheckIcon />
                </span>
                {bullet}
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/6 p-5">
          <div className="absolute left-6 top-8 h-28 w-[72%] rounded-[1.5rem] border border-white/10 bg-white/10" />
          <div className="absolute bottom-8 right-6 h-40 w-[72%] rounded-[1.5rem] border border-[#048EFF]/35 bg-[#048EFF]/12" />
          <div className="absolute left-12 top-48 h-3 w-36 rounded-full bg-[#7EC7FF]/60" />
          <div className="absolute left-12 top-56 h-3 w-52 rounded-full bg-white/16" />
          <div className="absolute right-16 top-24 h-10 w-10 rounded-full bg-[#F3B737]" />
        </div>
      </div>
    </section>
  );
}

function Values({ page: { values } }: { page: AboutPageContent }) {
  return (
    <section className="bg-[#F3F7FB] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="max-w-3xl">
          <Eyebrow>{values.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-[#0B1F3A] sm:text-4xl lg:text-5xl">
            {values.title}
          </h2>
        </div>
        <CardGrid cards={values.items} />
      </div>
    </section>
  );
}

function Presence({ page: { presence } }: { page: AboutPageContent }) {
  return (
    <section className="bg-[#FFFFFF] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <Eyebrow>{presence.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-[#0B1F3A] sm:text-4xl lg:text-5xl">
            {presence.title}
          </h2>
          <p className="mt-5 text-base leading-8 text-[#42526A]">{presence.body}</p>
          <p className="mt-6 inline-flex rounded-full border border-[#D8E6F4] bg-[#F3F7FB] px-4 py-2 text-sm font-semibold text-[#0B1F3A]">
            {presence.locationNote}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {presence.languages.map((language) => (
            <div
              key={language}
              className="rounded-[1.75rem] border border-[#E4EDF7] bg-[#FFFFFF] p-6 shadow-[0_16px_42px_rgba(11,31,58,0.055)]"
            >
              <div className="mb-8 h-12 w-12 rounded-2xl border border-[#CFE5FA] bg-[#EAF6FF]" />
              <h3 className="font-heading text-2xl font-semibold text-[#0B1F3A]">{language}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NotSection({ page: { not } }: { page: AboutPageContent }) {
  return (
    <section className="bg-[#F3F7FB] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="max-w-3xl">
          <Eyebrow>{not.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-[#0B1F3A] sm:text-4xl lg:text-5xl">
            {not.title}
          </h2>
          <p className="mt-5 text-base leading-8 text-[#42526A]">{not.body}</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {not.items.map((item) => (
            <div
              key={item}
              className="rounded-[1.5rem] border border-[#E4EDF7] bg-[#FFFFFF] p-5 text-sm font-semibold text-[#0B1F3A] shadow-[0_12px_34px_rgba(11,31,58,0.045)]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta({ page: { finalCta } }: { page: AboutPageContent }) {
  return (
    <section className="bg-[#FFFFFF] px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1180px] gap-8 overflow-hidden rounded-[2rem] bg-[#0B1F3A] p-8 text-[#FFFFFF] shadow-[0_28px_90px_rgba(11,31,58,0.22)] md:grid-cols-[1fr_auto] md:items-center sm:p-10 lg:p-12">
        <div>
          <h2 className="font-heading text-3xl font-semibold leading-tight sm:text-4xl">
            {finalCta.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/70">{finalCta.body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaLink href="/contact">{finalCta.primaryCta}</CtaLink>
          <CtaLink href="/programs" variant="darkSecondary">
            {finalCta.secondaryCta}
          </CtaLink>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  if (!content) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#0B1F3A]">
      <SiteNavbar variant="light" />
      <Hero page={content} />
      <Origin page={content} />
      <EditorialSection
        eyebrow={content.why.eyebrow}
        title={content.why.title}
        body={content.why.body}
        cards={content.why.cards}
      />
      <EditorialSection
        eyebrow={content.difference.eyebrow}
        title={content.difference.title}
        body={content.difference.body}
        cards={content.difference.cards}
      />
      <AiSection page={content} />
      <Values page={content} />
      <Presence page={content} />
      <NotSection page={content} />
      <FinalCta page={content} />
      <SiteFooter />
    </main>
  );
}
