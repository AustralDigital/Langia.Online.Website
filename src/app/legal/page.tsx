"use client";

import Link from "next/link";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { siteButtonClass } from "@/components/site/buttonStyles";
import { pagesContent, type LegalPageContent, type LegalSectionContent } from "@/content/pages";
import { useSiteLanguage } from "@/hooks/useSiteLanguage";
import { defaultLanguage, type SiteLanguage } from "@/lib/language";

function getContent(language: SiteLanguage): LegalPageContent {
  const content = pagesContent[language].legal.legalPage;

  if (!content) {
    throw new Error("Legal page content is missing.");
  }

  return content;
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

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-[#048EFF]">
      {children}
    </p>
  );
}

function Hero({ page }: { page: LegalPageContent }) {
  return (
    <section className="bg-[#FFFFFF] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-start">
          <div>
            <Eyebrow>{page.hero.eyebrow}</Eyebrow>
            <h1 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-tight text-[#0B1F3A] sm:text-5xl lg:text-6xl">
              {page.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#42526A] sm:text-lg">
              {page.hero.body}
            </p>
          </div>
          <aside className="rounded-[2rem] border border-[#E4EDF7] bg-[#F3F7FB] p-6">
            <p className="text-sm leading-7 text-[#42526A]">{page.hero.note}</p>
          </aside>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {page.hero.quickFacts.map((fact) => (
            <div
              key={fact}
              className="rounded-2xl border border-[#E4EDF7] bg-[#FFFFFF] px-4 py-3 text-sm font-semibold text-[#0B1F3A] shadow-[0_10px_28px_rgba(11,31,58,0.035)]"
            >
              {fact}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PolicyNav({ page }: { page: LegalPageContent }) {
  return (
    <section className="bg-[#F3F7FB] px-4 py-14 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {page.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-[1.25rem] border border-[#E4EDF7] bg-[#FFFFFF] p-4 text-sm font-semibold text-[#0B1F3A] shadow-[0_10px_26px_rgba(11,31,58,0.035)] transition hover:border-[#048EFF]/45 hover:text-[#048EFF]"
            >
              <span className="flex items-center justify-between gap-3">
                {item.label}
                <ArrowIcon className="h-4 w-4 shrink-0 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function LegalSection({ section, index }: { section: LegalSectionContent; index: number }) {
  return (
    <section id={section.id} className="scroll-mt-24">
      <article className="rounded-[1.75rem] border border-[#E4EDF7] bg-[#FFFFFF] p-6 shadow-[0_12px_34px_rgba(11,31,58,0.035)] sm:p-8">
        <div className="flex flex-col gap-4 border-b border-[#E4EDF7] pb-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-[#048EFF]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-3 font-heading text-2xl font-semibold leading-tight text-[#0B1F3A] sm:text-3xl">
              {section.title}
            </h2>
          </div>
          <Link href="#top" className="text-sm font-semibold text-[#048EFF] hover:text-[#0B1F3A]">
            Arriba
          </Link>
        </div>
        <div className="mt-6 grid gap-4 text-base leading-8 text-[#42526A]">
          {section.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </section>
  );
}

function Policies({ page }: { page: LegalPageContent }) {
  return (
    <section className="bg-[#FFFFFF] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-[980px] gap-6">
        {page.sections.map((section, index) => (
          <LegalSection key={section.id} section={section} index={index} />
        ))}
      </div>
    </section>
  );
}

function LegalContact({ page, eyebrow }: { page: LegalPageContent; eyebrow: string }) {
  const rows = [
    { label: page.contact.companyLabel, value: page.contact.company },
    { label: page.contact.addressLabel, value: page.contact.address },
    { label: page.contact.jurisdictionLabel, value: page.contact.jurisdiction },
  ];

  return (
    <section className="bg-[#F3F7FB] px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1180px] gap-8 rounded-[2rem] border border-[#E4EDF7] bg-[#FFFFFF] p-8 shadow-[0_16px_50px_rgba(11,31,58,0.045)] lg:grid-cols-[1fr_0.95fr] sm:p-10">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-[#0B1F3A] sm:text-4xl">
            {page.contact.title}
          </h2>
          <p className="mt-5 text-base leading-8 text-[#42526A]">{page.contact.body}</p>
          <Link
            href="/contact"
            className={siteButtonClass({ className: "mt-8" })}
          >
            {page.contact.cta}
            <ArrowIcon />
          </Link>
        </div>
        <div className="grid gap-3">
          {rows.map((row) => (
            <div key={row.label} className="rounded-[1.25rem] border border-[#E4EDF7] bg-[#F3F7FB] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#048EFF]">{row.label}</p>
              <p className="mt-2 font-heading text-lg font-semibold text-[#0B1F3A]">{row.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta({ page }: { page: LegalPageContent }) {
  return (
    <section className="bg-[#FFFFFF] px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1180px] gap-8 overflow-hidden rounded-[2rem] bg-[#0B1F3A] p-8 text-[#FFFFFF] shadow-[0_24px_80px_rgba(11,31,58,0.18)] md:grid-cols-[1fr_auto] md:items-center sm:p-10">
        <div>
          <h2 className="font-heading text-3xl font-semibold leading-tight sm:text-4xl">
            {page.finalCta.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/70">{page.finalCta.body}</p>
        </div>
        <Link
          href="/contact"
          className={siteButtonClass({ variant: "dark" })}
        >
          {page.finalCta.primaryCta}
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}

export default function LegalPage() {
  const { language } = useSiteLanguage(defaultLanguage);
  const content = getContent(language);

  return (
    <main id="top" className="min-h-screen bg-[#FFFFFF] text-[#0B1F3A]">
      <SiteNavbar variant="light" language={language} />
      <Hero page={content} />
      <PolicyNav page={content} />
      <Policies page={content} />
      <LegalContact page={content} eyebrow={content.hero.eyebrow} />
      <FinalCta page={content} />
      <SiteFooter />
    </main>
  );
}
