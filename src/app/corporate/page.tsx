"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { siteButtonClass } from "@/components/site/buttonStyles";
import { commonContent } from "@/content/common";
import { pagesContent, type CorporatePageContent } from "@/content/pages";
import { useSiteLanguage } from "@/hooks/useSiteLanguage";
import { defaultLanguage, type SiteLanguage } from "@/lib/language";

const imageCandidates = ["/images/programs/corporate.webp", "/images/corporate.webp"] as const;
const imagePath = imageCandidates[0];

const hasProgramImage = false;

function getContent(language: SiteLanguage): CorporatePageContent {
  const content = pagesContent[language].corporate.corporatePage;
  if (!content) {
    throw new Error("Corporate page content is missing.");
  }

  return content;
}

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function Button({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "dark" }) {
  return (
    <Link href={href} className={siteButtonClass({ variant: variant === "dark" ? "darkSecondary" : variant })}>
      {children}
      <ArrowIcon />
    </Link>
  );
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`font-heading text-xs font-semibold uppercase tracking-[0.18em] ${light ? "text-[#7EC7FF]" : "text-[#048EFF]"}`}>
      {children}
    </p>
  );
}

function HeroVisual() {
  return (
    <div className="relative min-h-[400px] overflow-hidden rounded-[2rem] border border-[#173B66] bg-[#0B1F3A] shadow-[0_30px_90px_rgba(11,31,58,0.24)] lg:min-h-[520px]">
      {hasProgramImage ? (
        <Image src={imagePath} alt="" fill className="object-cover" sizes="(min-width: 1024px) 46vw, 100vw" priority />
      ) : (
        <div className="absolute inset-0 overflow-hidden bg-[linear-gradient(135deg,#0B1F3A_0%,#12345C_58%,#048EFF_100%)]">
          <div className="absolute left-8 top-8 h-24 w-40 rounded-[1.5rem] border border-white/15 bg-white/12 shadow-[0_14px_40px_rgba(0,0,0,0.12)] backdrop-blur-md" />
          <div className="absolute right-8 top-16 h-44 w-[58%] rounded-[1.75rem] border border-white/15 bg-white/12 shadow-[0_18px_48px_rgba(0,0,0,0.15)] backdrop-blur-md" />
          <div className="absolute bottom-8 left-8 h-48 w-[68%] rounded-[1.75rem] border border-white/18 bg-white/14 shadow-[0_22px_58px_rgba(0,0,0,0.18)] backdrop-blur-md" />
          <div className="absolute bottom-31 left-14 h-3 w-32 rounded-full bg-[#7EC7FF]/55" />
          <div className="absolute bottom-22 left-14 h-3 w-52 max-w-[58%] rounded-full bg-white/25" />
          <div className="absolute bottom-14 left-14 h-3 w-40 rounded-full bg-white/25" />
          <div className="absolute right-14 top-12 h-12 w-12 rounded-full bg-[#F3B737]" />
        </div>
      )}
      <div className="absolute inset-x-5 bottom-5 rounded-[1.5rem] border border-white/18 bg-white/12 p-5 text-white shadow-[0_18px_46px_rgba(0,0,0,0.18)] backdrop-blur-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7EC7FF]">Corporate operating layer</p>
        <p className="mt-2 max-w-md font-heading text-xl font-semibold leading-snug">
          Training, services, tracking, and reporting designed around company goals.
        </p>
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, body, light = false }: { eyebrow: string; title: string; body?: string; light?: boolean }) {
  return (
    <div className="max-w-3xl">
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2 className={`mt-4 font-heading text-3xl font-semibold leading-tight sm:text-4xl ${light ? "text-white" : "text-[#0B1F3A]"}`}>{title}</h2>
      {body ? <p className={`mt-4 text-base leading-8 ${light ? "text-white/72" : "text-[#42526A]"}`}>{body}</p> : null}
    </div>
  );
}

function CardGrid({ cards, columns = "md:grid-cols-4" }: { cards: readonly { title: string; body: string }[]; columns?: string }) {
  return (
    <div className={`mt-10 grid gap-5 ${columns}`}>
      {cards.map((card) => (
        <article key={card.title} className="rounded-[1.5rem] border border-[#E4EDF7] bg-white p-6 shadow-[0_16px_44px_rgba(11,31,58,0.055)]">
          <h3 className="font-heading text-xl font-semibold text-[#0B1F3A]">{card.title}</h3>
          <p className="mt-4 text-sm leading-7 text-[#42526A]">{card.body}</p>
        </article>
      ))}
    </div>
  );
}

export default function CorporatePage() {
  const { language } = useSiteLanguage(defaultLanguage);
  const page = getContent(language);
  const common = commonContent[language];

  return (
    <main className="min-h-screen bg-[#F3F7FB] text-[#0B1F3A]">
      <SiteNavbar variant="light" language={language} />

      <section className="bg-[#F3F7FB] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Eyebrow>{page.hero.eyebrow}</Eyebrow>
            <h1 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-tight text-[#0B1F3A] sm:text-5xl lg:text-6xl">{page.hero.title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#42526A] sm:text-lg">{page.hero.body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">{page.hero.primaryCta}</Button>
              <Button href="#services" variant="secondary">{page.hero.secondaryCta}</Button>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {page.hero.quickFacts.map((fact) => (
                <div key={fact} className="flex items-center gap-3 rounded-2xl border border-[#D8E6F4] bg-white px-4 py-3 text-sm font-semibold text-[#0B1F3A]">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#EAF6FF] text-[#048EFF]"><CheckIcon /></span>
                  {fact}
                </div>
              ))}
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader {...page.overview} />
          <CardGrid cards={page.overview.cards} />
        </div>
      </section>

      <section className="bg-[#F3F7FB] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader {...page.who} />
          <CardGrid cards={page.who.cards} />
        </div>
      </section>

      <section id="services" className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader {...page.services} />
          <CardGrid cards={page.services.cards} />
        </div>
      </section>

      <section className="bg-[#F3F7FB] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader {...page.training} />
          <CardGrid cards={page.training.cards} />
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1180px] gap-10 rounded-[2rem] bg-[#0B1F3A] p-8 text-white shadow-[0_28px_90px_rgba(11,31,58,0.2)] md:grid-cols-[1fr_0.85fr] md:items-center sm:p-10 lg:p-12">
          <div>
            <SectionHeader eyebrow={page.tailored.eyebrow} title={page.tailored.title} body={page.tailored.body} light />
            <div className="mt-8 flex flex-wrap gap-3">
              {page.tailored.bullets.map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-2 text-sm font-medium text-white/82">
                  <CheckIcon />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-white/15 bg-white/8 p-5">
            <div className="rounded-[1.25rem] bg-white p-5">
              <div className="flex items-center justify-between"><span className="h-3 w-28 rounded-full bg-[#048EFF]/35" /><span className="h-9 w-9 rounded-full bg-[#F3B737]" /></div>
              <div className="mt-7 grid gap-3"><span className="h-3 w-full rounded-full bg-[#D8E6F4]" /><span className="h-3 w-9/12 rounded-full bg-[#D8E6F4]" /><span className="h-3 w-7/12 rounded-full bg-[#D8E6F4]" /></div>
              <div className="mt-8 grid grid-cols-3 gap-3"><span className="h-16 rounded-2xl bg-[#F3F7FB]" /><span className="h-16 rounded-2xl bg-[#EAF6FF]" /><span className="h-16 rounded-2xl bg-[#F3F7FB]" /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader {...page.tracking} />
          <CardGrid cards={page.tracking.cards} />
        </div>
      </section>

      <section className="bg-[#F3F7FB] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader {...page.process} />
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {page.process.steps.map((step, index) => (
              <article key={step.title} className="rounded-[1.5rem] border border-[#D8E6F4] bg-white p-6 shadow-[0_16px_44px_rgba(11,31,58,0.055)]">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0B1F3A] font-heading text-sm font-semibold text-white">{index + 1}</span>
                <h3 className="mt-5 font-heading text-xl font-semibold text-[#0B1F3A]">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#42526A]">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader {...page.useCases} />
          <div className="grid gap-6">
            <div>
              <h3 className="font-heading text-xl font-semibold text-[#0B1F3A]">{common.useCases}</h3>
              <div className="mt-4 flex flex-wrap gap-2">{page.useCases.useCases.map((item) => <span key={item} className="rounded-full bg-[#F3F7FB] px-3 py-2 text-xs font-semibold text-[#0B1F3A]">{item}</span>)}</div>
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-[#0B1F3A]">{common.industries}</h3>
              <div className="mt-4 flex flex-wrap gap-2">{page.useCases.industries.map((item) => <span key={item} className="rounded-full bg-[#EAF6FF] px-3 py-2 text-xs font-semibold text-[#0B1F3A]">{item}</span>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F7FB] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader {...page.formats} />
          <CardGrid cards={page.formats.cards} />
          <div className="mt-8 flex flex-wrap gap-3">{page.formats.delivery.map((item) => <span key={item} className="rounded-full border border-[#D8E6F4] bg-white px-4 py-2 text-sm font-semibold text-[#0B1F3A]">{item}</span>)}</div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1180px] gap-8 rounded-[2rem] bg-[#0B1F3A] p-8 text-white shadow-[0_28px_90px_rgba(11,31,58,0.22)] md:grid-cols-[1fr_auto] md:items-center sm:p-10 lg:p-12">
          <SectionHeader {...page.proposal} light />
          <Button href="/contact" variant="dark">{page.proposal.cta}</Button>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow={page.faq.eyebrow} title={page.faq.title} />
          <div className="grid gap-3">
            {page.faq.items.map((item) => (
              <details key={item.title} className="group rounded-[1.25rem] border border-[#E4EDF7] bg-white p-5 shadow-[0_12px_34px_rgba(11,31,58,0.045)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-lg font-semibold text-[#0B1F3A]">{item.title}<span className="text-[#048EFF] transition group-open:rotate-90"><ArrowIcon /></span></summary>
                <p className="mt-4 text-sm leading-7 text-[#42526A]">{item.body}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3F7FB] px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1180px] gap-8 rounded-[2rem] bg-[#0B1F3A] p-8 text-white shadow-[0_28px_90px_rgba(11,31,58,0.22)] md:grid-cols-[1fr_auto] md:items-center sm:p-10 lg:p-12">
          <div><h2 className="font-heading text-3xl font-semibold leading-tight sm:text-4xl">{page.finalCta.title}</h2><p className="mt-4 max-w-2xl text-base leading-8 text-white/70">{page.finalCta.body}</p></div>
          <div className="flex flex-col gap-3 sm:flex-row"><Button href="/contact">{page.finalCta.primaryCta}</Button><Button href="/contact" variant="dark">{page.finalCta.secondaryCta}</Button></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
