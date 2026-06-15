import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { existsSync } from "node:fs";
import path from "node:path";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { pagesContent, type LangiaOnlinePageContent } from "@/content/pages";

const content = pagesContent.es.langiaOnline.langiaOnlinePage;
const imagePath = "/images/programs/langia-online.webp";
const hasProgramImage = existsSync(path.join(process.cwd(), "public", imagePath));

export const metadata: Metadata = {
  title: "Langia Online | Premium Live Language Training",
  description:
    "Structured live language training for adults and older teens, available in Private, Duo, and Trio formats.",
};

function getContent(): LangiaOnlinePageContent {
  if (!content) {
    throw new Error("Langia Online page content is missing.");
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

function HeroVisual() {
  return (
    <div className="relative min-h-[390px] overflow-hidden rounded-[2rem] border border-[#D8E6F4] bg-[#F3F7FB] shadow-[0_24px_80px_rgba(11,31,58,0.08)] lg:min-h-[520px]">
      {hasProgramImage ? (
        <Image
          src={imagePath}
          alt=""
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 46vw, 100vw"
          priority
        />
      ) : (
        <div className="absolute inset-0 overflow-hidden bg-[linear-gradient(135deg,#F3F7FB_0%,#EAF6FF_45%,#FFFFFF_100%)]">
          <div className="absolute left-7 top-7 h-24 w-32 rounded-[1.5rem] border border-white/60 bg-white/70 shadow-[0_14px_40px_rgba(11,31,58,0.08)] backdrop-blur-md" />
          <div className="absolute right-8 top-16 h-48 w-[54%] rounded-[1.75rem] border border-white/60 bg-white/60 shadow-[0_18px_48px_rgba(11,31,58,0.09)] backdrop-blur-md" />
          <div className="absolute bottom-8 left-8 h-44 w-[66%] rounded-[1.75rem] border border-white/70 bg-white/72 shadow-[0_22px_58px_rgba(11,31,58,0.1)] backdrop-blur-md" />
          <div className="absolute bottom-24 left-14 h-3 w-32 rounded-full bg-[#048EFF]/35" />
          <div className="absolute bottom-16 left-14 h-3 w-48 max-w-[58%] rounded-full bg-[#D8E6F4]" />
          <div className="absolute bottom-10 left-14 h-3 w-36 rounded-full bg-[#D8E6F4]" />
          <div className="absolute right-14 top-14 h-12 w-12 rounded-full bg-[#F3B737]" />
        </div>
      )}
      <div className="absolute inset-x-5 bottom-5 rounded-[1.5rem] border border-white/60 bg-white/86 p-5 shadow-[0_18px_46px_rgba(11,31,58,0.1)] backdrop-blur-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#048EFF]">60 live lessons</p>
        <p className="mt-2 max-w-md font-heading text-xl font-semibold leading-snug text-[#0B1F3A]">
          Private, Duo, or Trio routes from beginner to advanced.
        </p>
      </div>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  body,
  light = false,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-4 font-heading text-3xl font-semibold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-[#0B1F3A]"
        }`}
      >
        {title}
      </h2>
      {body ? (
        <p className={`mt-4 text-base leading-8 ${light ? "text-white/72" : "text-[#42526A]"}`}>
          {body}
        </p>
      ) : null}
    </div>
  );
}

export default function LangiaOnlinePage() {
  const page = getContent();

  return (
    <main className="min-h-screen bg-white text-[#0B1F3A]">
      <SiteNavbar variant="light" />

      <section className="bg-[#F3F7FB] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Eyebrow>{page.hero.eyebrow}</Eyebrow>
            <h1 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-tight text-[#0B1F3A] sm:text-5xl lg:text-6xl">
              {page.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#42526A] sm:text-lg">
              {page.hero.body}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">{page.hero.primaryCta}</Button>
              <Button href="#pricing" variant="secondary">
                {page.hero.secondaryCta}
              </Button>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {page.hero.quickFacts.map((fact) => (
                <div key={fact} className="flex items-center gap-3 rounded-2xl border border-[#D8E6F4] bg-white px-4 py-3 text-sm font-semibold text-[#0B1F3A]">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#EAF6FF] text-[#048EFF]">
                    <CheckIcon />
                  </span>
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
          <SectionHeader {...page.who} />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {page.who.cards.map((card) => (
              <article key={card.title} className="rounded-[1.5rem] border border-[#E4EDF7] bg-white p-6 shadow-[0_16px_44px_rgba(11,31,58,0.055)]">
                <h3 className="font-heading text-xl font-semibold text-[#0B1F3A]">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#42526A]">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3F7FB] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader {...page.formats} />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {page.formats.cards.map((card) => (
              <article key={card.title} className="rounded-[1.5rem] border border-[#D8E6F4] bg-white p-6 shadow-[0_16px_44px_rgba(11,31,58,0.055)]">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#048EFF]">Format</p>
                <h3 className="mt-3 font-heading text-3xl font-semibold text-[#0B1F3A]">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#42526A]">{card.body}</p>
                <p className="mt-5 rounded-2xl bg-[#F3F7FB] p-4 text-sm leading-7 text-[#0B1F3A]">
                  {card.bestFor}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader eyebrow={page.includes.eyebrow} title={page.includes.title} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {page.includes.features.map((feature) => (
              <article key={feature.title} className="rounded-[1.35rem] border border-[#E4EDF7] bg-white p-5 shadow-[0_14px_38px_rgba(11,31,58,0.05)]">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#EAF6FF] text-[#048EFF]">
                  <CheckIcon />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold leading-tight text-[#0B1F3A]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#42526A]">{feature.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1180px] gap-10 rounded-[2rem] bg-[#0B1F3A] p-8 text-white shadow-[0_28px_90px_rgba(11,31,58,0.2)] md:grid-cols-[1fr_0.85fr] md:items-center sm:p-10 lg:p-12">
          <SectionHeader {...page.tailored} light />
          <div className="rounded-[1.5rem] border border-white/15 bg-white/8 p-5">
            <div className="rounded-[1.25rem] bg-white p-5">
              <div className="flex items-center justify-between gap-4">
                <span className="h-3 w-28 rounded-full bg-[#048EFF]/35" />
                <span className="h-9 w-9 rounded-full bg-[#F3B737]" />
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

      <section className="bg-[#F3F7FB] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader {...page.levels} />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {page.levels.items.map((level, index) => (
              <div key={level} className="rounded-[1.25rem] border border-[#D8E6F4] bg-white p-5 shadow-[0_12px_34px_rgba(11,31,58,0.045)]">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#048EFF]">
                  Level {index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-semibold leading-tight text-[#0B1F3A]">
                  {level}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader {...page.schedule} />
          <div className="grid gap-3">
            {page.schedule.bullets.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#E4EDF7] bg-white p-4 shadow-[0_12px_34px_rgba(11,31,58,0.045)]">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#EAF6FF] text-[#048EFF]">
                  <CheckIcon />
                </span>
                <span className="text-sm font-semibold text-[#0B1F3A]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-[#F3F7FB] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader eyebrow={page.pricing.eyebrow} title={page.pricing.title} body={page.pricing.body} />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-[#D8E6F4] bg-white p-6">
              <h3 className="font-heading text-xl font-semibold text-[#0B1F3A]">
                {page.pricing.studentCreditTitle}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#42526A]">{page.pricing.studentCreditBody}</p>
            </div>
            <div className="rounded-[1.5rem] border border-[#D8E6F4] bg-white p-6">
              <h3 className="font-heading text-xl font-semibold text-[#0B1F3A]">{page.pricing.payFullTitle}</h3>
              <p className="mt-3 text-sm leading-7 text-[#42526A]">{page.pricing.payFullBody}</p>
            </div>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {page.pricing.cards.map((card, index) => (
              <article key={card.title} className="relative rounded-[1.75rem] border border-[#D8E6F4] bg-white p-6 shadow-[0_18px_50px_rgba(11,31,58,0.06)]">
                {index === 0 ? (
                  <span className="absolute right-5 top-5 rounded-full bg-[#F3B737]/18 px-3 py-1 text-xs font-semibold text-[#8A6200]">
                    {page.pricing.labels.highlight}
                  </span>
                ) : null}
                <h3 className="font-heading text-3xl font-semibold text-[#0B1F3A]">{card.title}</h3>
                <dl className="mt-7 grid gap-4 text-sm">
                  {[
                    [page.pricing.labels.base, card.studentCreditPerLesson],
                    [page.pricing.labels.total, card.studentCreditTotal],
                    [page.pricing.labels.installments, card.installments],
                    [page.pricing.labels.payFull, card.payFull],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl bg-[#F3F7FB] p-4">
                      <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[#42526A]">{label}</dt>
                      <dd className="mt-2 font-heading text-lg font-semibold text-[#0B1F3A]">{value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-7">
                  <Button href="/contact">{page.pricing.cta}</Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow={page.faq.eyebrow} title={page.faq.title} />
          <div className="grid gap-3">
            {page.faq.items.map((item) => (
              <details key={item.title} className="group rounded-[1.25rem] border border-[#E4EDF7] bg-white p-5 shadow-[0_12px_34px_rgba(11,31,58,0.045)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-lg font-semibold text-[#0B1F3A]">
                  {item.title}
                  <span className="text-[#048EFF] transition group-open:rotate-90">
                    <ArrowIcon />
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-[#42526A]">{item.body}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3F7FB] px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1180px] gap-8 rounded-[2rem] bg-[#0B1F3A] p-8 text-white shadow-[0_28px_90px_rgba(11,31,58,0.22)] md:grid-cols-[1fr_auto] md:items-center sm:p-10 lg:p-12">
          <div>
            <h2 className="font-heading text-3xl font-semibold leading-tight sm:text-4xl">
              {page.finalCta.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/70">{page.finalCta.body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="primary">
              {page.finalCta.primaryCta}
            </Button>
            <Button href="/programs" variant="dark">
              {page.finalCta.secondaryCta}
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
