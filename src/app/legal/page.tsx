"use client";

import { LocalizedLink as Link } from "@/components/site/LocalizedLink";

import {
  EditorialHeading,
  FinalCTA,
  MarketingButton,
  MarketingSection,
  PageHero,
  SectionHeader,
  SiteContainer,
} from "@/components/site/MarketingPrimitives";
import { LocalizedText } from "@/components/site/LocalizedText";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNavbar } from "@/components/site/SiteNavbar";
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

function Hero({ page }: { page: LegalPageContent }) {
  return (
    <PageHero
      facts={page.hero.quickFacts}
      tone="mist"
      eyebrow={page.hero.eyebrow}
      title={page.hero.title}
      body={
        <div>
          <p>{page.hero.body}</p>
          <p className="mt-7 max-w-3xl border-l-2 border-[#048EFF] pl-5 text-base leading-8 text-[#52657A]">
            {page.hero.note}
          </p>

        </div>
      }
    />
  );
}

function PolicyNav({ page }: { page: LegalPageContent }) {
  const items = page.sections.map((section) => {
    const href = `#${section.id}`;
    return page.nav.find((item) => item.href === href) ?? { href, label: section.title };
  });

  return (
    <MarketingSection tone="white" className="!py-12 sm:!py-14 lg:!py-16">
      <SiteContainer>
        <nav aria-label={page.hero.eyebrow}>
          <ul className="grid border-l border-t border-[#0B1F3A]/16 sm:grid-cols-2 xl:grid-cols-5">
            {items.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex min-h-16 items-center justify-between gap-4 border-b border-r border-[#0B1F3A]/16 px-4 py-3 text-base font-semibold leading-6 text-[#0B1F3A] transition-colors hover:bg-white hover:text-[#048EFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#048EFF]"
                >
                  <span>{item.label}</span>
                  <span className="text-xs tabular-nums text-[var(--langia-blue-ink)]" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SiteContainer>
    </MarketingSection>
  );
}

function LegalSection({ section, index }: { section: LegalSectionContent; index: number }) {
  return (
    <section id={section.id} className="scroll-mt-28 border-t border-[#0B1F3A]/16 py-12 first:border-t-0 first:pt-0 sm:py-16">
      <div className="flex flex-col items-start gap-5 sm:flex-row sm:justify-between sm:gap-8">
        <div>
          <p className="text-sm font-semibold tabular-nums text-[var(--langia-blue-ink)]">{String(index + 1).padStart(2, "0")}</p>
          <EditorialHeading as="h2" className="mt-4 max-w-[20ch]" size="secondary">
            {section.title}
          </EditorialHeading>
        </div>
        <Link
          href="#top"
          className="shrink-0 border-b border-[var(--langia-blue-ink)] py-1 text-sm font-semibold text-[var(--langia-blue-ink)] transition-colors hover:border-[#0B1F3A] hover:text-[#0B1F3A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#048EFF]"
        >
          <LocalizedText content={{ es: "Arriba", pt: "Topo", en: "Top" }} />
        </Link>
      </div>
      <div className="mt-8 grid gap-6 text-base leading-8 text-[#42526A] sm:text-lg sm:leading-9">
        {section.body.map((paragraph, paragraphIndex) => (
          <p key={`${section.id}-${paragraphIndex}`}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function Policies({ page }: { page: LegalPageContent }) {
  return (
    <MarketingSection tone="white">
      <SiteContainer reading>
        {page.sections.map((section, index) => (
          <LegalSection key={section.id} section={section} index={index} />
        ))}
      </SiteContainer>
    </MarketingSection>
  );
}

function LegalContact({ page }: { page: LegalPageContent }) {
  const rows = [
    { label: page.contact.companyLabel, value: page.contact.company },
    { label: page.contact.addressLabel, value: page.contact.address },
    { label: page.contact.jurisdictionLabel, value: page.contact.jurisdiction },
  ];

  return (
    <MarketingSection tone="mist">
      <SiteContainer>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-24">
          <div>
            <SectionHeader eyebrow={page.hero.eyebrow} title={page.contact.title} body={page.contact.body} />
            <MarketingButton href="/contact" className="mt-9">
              {page.contact.cta}
            </MarketingButton>
          </div>
          <dl className="border-t border-[#0B1F3A]/16">
            {rows.map((row) => (
              <div key={row.label} className="grid gap-2 border-b border-[#0B1F3A]/16 py-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#52657A]">{row.label}</dt>
                <dd className="font-heading text-lg font-medium leading-7 tracking-[-0.02em] text-[#0B1F3A] sm:text-xl">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </SiteContainer>
    </MarketingSection>
  );
}

export default function LegalPage() {
  const { language } = useSiteLanguage(defaultLanguage);
  const content = getContent(language);

  return (
    <main id="top" className="langia-page min-h-screen bg-white text-[#0B1F3A]">
      <SiteNavbar variant="overlay" language={language} />
      <Hero page={content} />
      <PolicyNav page={content} />
      <Policies page={content} />
      <LegalContact page={content} />
      <FinalCTA
        title={content.finalCta.title}
        body={content.finalCta.body}
        primary={{ href: "/contact", label: content.finalCta.primaryCta }}
      />
      <SiteFooter />
    </main>
  );
}
