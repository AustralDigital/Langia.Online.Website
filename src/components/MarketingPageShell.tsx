import Link from "next/link";
import type { ReactNode } from "react";

import type { MarketingPageContent, PageLink } from "@/content/pages";

const navPrograms: PageLink[] = [
  { label: "Programas", href: "/programs" },
  { label: "Langia Online", href: "/programs/langia-online" },
  { label: "Talkin' Club", href: "/programs/talkin-club" },
  { label: "Test Prep", href: "/programs/test-prep" },
  { label: "Kids n Teens", href: "/programs/langia-4-kids-n-teens" },
];

const navCompany: PageLink[] = [
  { label: "Sobre Langia", href: "/about" },
  { label: "Corporativo", href: "/corporate" },
  { label: "Legal", href: "/legal" },
  { label: "Trabaja con nosotros", href: "/work-with-us" },
];

const navResources: PageLink[] = [
  { label: "Blog", href: "/blog" },
  { label: "Prueba de nivel", href: "/test-your-english-level" },
  { label: "Contacto", href: "/contact" },
];

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

function MarketingNav() {
  return (
    <header className="border-b border-[#E4EDF7] bg-[#FFFFFF]/90 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-10">
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
        </div>
      </nav>
    </header>
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

function FooterColumn({ title, links }: { title: string; links: PageLink[] }) {
  return (
    <div>
      <h2 className="font-heading text-sm font-semibold text-[#FFFFFF]">{title}</h2>
      <div className="mt-5 grid gap-3 text-sm text-white/65">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-[#FFFFFF]">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MarketingFooter() {
  return (
    <footer className="bg-[#FFFFFF] px-4 pb-5 pt-16 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1180px] gap-10 rounded-[2rem] bg-[#0B1F3A] p-8 text-[#FFFFFF] shadow-[0_30px_90px_rgba(11,31,58,0.2)] md:grid-cols-[1.1fr_1.6fr] sm:p-10">
        <div>
          <Link href="/" className="font-heading text-2xl font-semibold">
            Langia
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">
            Idiomas con estructura para comunicación global.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <FooterColumn title="Programas" links={navPrograms} />
          <FooterColumn title="Empresa" links={navCompany} />
          <FooterColumn title="Recursos" links={navResources} />
        </div>
      </div>
    </footer>
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
      <MarketingNav />

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
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#D8E6F4] bg-[#FFFFFF] px-4 text-sm font-semibold text-[#0B1F3A] transition hover:border-[#048EFF] hover:text-[#048EFF]"
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
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#048EFF] px-5 text-sm font-semibold text-[#FFFFFF] transition hover:bg-[#F3B737]"
            >
              {content.cta.primaryLabel}
              <ArrowIcon />
            </Link>
            {content.cta.secondaryHref && content.cta.secondaryLabel ? (
              <Link
                href={content.cta.secondaryHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-5 text-sm font-semibold text-[#FFFFFF] transition hover:border-[#048EFF] hover:text-[#7EC7FF]"
              >
                {content.cta.secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <MarketingFooter />
    </main>
  );
}
