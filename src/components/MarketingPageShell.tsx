"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import type { MarketingPageContent } from "@/content/pages";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { siteButtonClass } from "@/components/site/buttonStyles";


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

function VisualPanel() {
  return (
    <div className="relative min-h-[330px] overflow-hidden rounded-[2rem] border border-[#E4EDF7] bg-[#F3F7FB] p-5 shadow-[0_24px_80px_rgba(11,31,58,0.08)]">
      <div className="absolute right-5 top-5 h-20 w-28 rounded-[1.25rem] border border-[#D8E6F4] bg-[#FFFFFF]" />
      <div className="absolute left-5 top-20 h-36 w-[58%] rounded-[1.5rem] border border-[#D8E6F4] bg-[#FFFFFF] shadow-[0_14px_34px_rgba(11,31,58,0.05)]" />
      <div className="absolute bottom-5 right-5 h-36 w-[62%] rounded-[1.5rem] border border-[#CFE5FA] bg-[#EAF6FF]" />
      <div className="absolute bottom-16 left-10 h-3 w-28 rounded-full bg-[#048EFF]/40" />
      <div className="absolute bottom-10 left-10 h-3 w-44 rounded-full bg-[#D8E6F4]" />
      <div className="absolute right-16 top-28 h-10 w-10 rounded-full bg-[#F3B737]" />
    </div>
  );
}

export function MarketingPageShell({
  content,
  children,
}: {
  content: MarketingPageContent;
  children?: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#0B1F3A]">
      <SiteNavbar variant="light" />

      <section className="bg-[#FFFFFF] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-[#048EFF]">
              {content.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-tight text-[#0B1F3A] sm:text-5xl lg:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#42526A] sm:text-lg">
              {content.subtitle}
            </p>
            {content.links ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {content.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={siteButtonClass({ size: "sm", variant: "secondary" })}
                  >
                    {link.label}
                    <ArrowIcon />
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          <VisualPanel />
        </div>
      </section>

      <section className="bg-[#F3F7FB] px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1180px] gap-5 md:grid-cols-2 xl:grid-cols-4">
          {content.blocks.map((block) => (
            <article
              key={block.title}
              className="rounded-[1.75rem] border border-[#E4EDF7] bg-[#FFFFFF] p-6 shadow-[0_16px_42px_rgba(11,31,58,0.055)]"
            >
              <div className="mb-8 h-12 w-12 rounded-2xl border border-[#CFE5FA] bg-[#EAF6FF]" />
              <h2 className="font-heading text-xl font-semibold text-[#0B1F3A]">{block.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[#42526A]">{block.body}</p>
            </article>
          ))}
        </div>
      </section>

      {children}

      <section className="bg-[#FFFFFF] px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1180px] gap-8 overflow-hidden rounded-[2rem] bg-[#0B1F3A] p-8 text-[#FFFFFF] shadow-[0_28px_90px_rgba(11,31,58,0.22)] md:grid-cols-[1fr_auto] md:items-center sm:p-10 lg:p-12">
          <div>
            <h2 className="font-heading text-3xl font-semibold leading-tight sm:text-4xl">
              {content.cta.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/70">{content.cta.body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={content.cta.primaryHref}
              className={siteButtonClass({ variant: "dark" })}
            >
              {content.cta.primaryLabel}
              <ArrowIcon />
            </Link>
            {content.cta.secondaryHref && content.cta.secondaryLabel ? (
              <Link
                href={content.cta.secondaryHref}
                className={siteButtonClass({ variant: "darkSecondary" })}
              >
                {content.cta.secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
