"use client";

import {
  EditorialHeading,
  FAQList,
  FeatureList,
  FinalCTA,
  MarketingButton,
  MarketingSection,
  PageHero,
  ProcessSteps,
  SectionHeader,
  SiteContainer,
} from "@/components/site/MarketingPrimitives";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { commonContent } from "@/content/common";
import { pagesContent, type CorporatePageContent, type PageBlock } from "@/content/pages";
import { useSiteLanguage } from "@/hooks/useSiteLanguage";
import { defaultLanguage, type SiteLanguage } from "@/lib/language";

const corporateImageAlt: Record<SiteLanguage, string> = {
  es: "Profesional presentando con confianza ante un equipo internacional",
  pt: "Profissional apresentando com confiança para uma equipe internacional",
  en: "A professional presenting confidently to an international team",
};

function getContent(language: SiteLanguage): CorporatePageContent {
  const content = pagesContent[language].corporate.corporatePage;

  if (!content) {
    throw new Error("Corporate page content is missing.");
  }

  return content;
}

function EditorialList({ items }: { items: readonly PageBlock[] }) {
  return (
    <div className="editorial-panels border-t border-[#0B1F3A]/18">
      {items.map((item, index) => (
        <article
          key={item.title}
          className={`grid gap-5 border-b border-[#0B1F3A]/18 py-8 sm:grid-cols-[3.5rem_1fr] sm:gap-7 ${
            index % 2 === 1 ? "lg:ml-14" : "lg:mr-14"
          }`}
        >
          <span className="pt-1 text-sm font-semibold tabular-nums text-[#0068B8]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <EditorialHeading as="h3" size="card">
              {item.title}
            </EditorialHeading>
            <p className="mt-4 max-w-xl text-base leading-8 text-[#42566E]">{item.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function Hero({ language, page }: { language: SiteLanguage; page: CorporatePageContent }) {
  return (
    <PageHero
      tone="mist"
      eyebrow={page.hero.eyebrow}
      title={page.hero.title}
      body={page.hero.body}
      actions={
        <>
          <MarketingButton href="/contact">{page.hero.primaryCta}</MarketingButton>
          <MarketingButton href="#services" variant="inverse">
            {page.hero.secondaryCta}
          </MarketingButton>
        </>
      }
      image={{ src: "/images/marketing-2026/corporate/global-team-presentation.webp", alt: corporateImageAlt[language] }}
      facts={page.hero.quickFacts}
    />
  );
}

function Overview({ page }: { page: CorporatePageContent }) {
  return (
    <MarketingSection tone="white">
      <SiteContainer>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <SectionHeader eyebrow={page.overview.eyebrow} title={page.overview.title} body={page.overview.body} />
          <EditorialList items={page.overview.cards} />
        </div>
      </SiteContainer>
    </MarketingSection>
  );
}

function SplitContentSection({
  body,
  eyebrow,
  items,
  title,
  tone,
}: {
  body: string;
  eyebrow: string;
  items: readonly PageBlock[];
  title: string;
  tone: "white" | "mist";
}) {
  return (
    <MarketingSection tone={tone}>
      <SiteContainer>
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
          <SectionHeader eyebrow={eyebrow} title={title} body={body} />
          <EditorialList items={items} />
        </div>
      </SiteContainer>
    </MarketingSection>
  );
}

function Tailored({ page }: { page: CorporatePageContent }) {
  return (
    <MarketingSection
      tone="mist"

    >
      <SiteContainer>
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-24">
          <SectionHeader eyebrow={page.tailored.eyebrow} title={page.tailored.title} body={page.tailored.body} />
          <FeatureList items={page.tailored.bullets} />
        </div>
      </SiteContainer>
    </MarketingSection>
  );
}

function Process({ page }: { page: CorporatePageContent }) {
  return (
    <MarketingSection tone="mist">
      <SiteContainer>
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
          <SectionHeader eyebrow={page.process.eyebrow} title={page.process.title} body={page.process.body} />
          <ProcessSteps items={page.process.steps} />
        </div>
      </SiteContainer>
    </MarketingSection>
  );
}

function UseCases({ page, language }: { page: CorporatePageContent; language: SiteLanguage }) {
  const common = commonContent[language];

  return (
    <MarketingSection tone="white">
      <SiteContainer>
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
          <SectionHeader eyebrow={page.useCases.eyebrow} title={page.useCases.title} body={page.useCases.body} />
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <EditorialHeading as="h3" size="card">
                {common.useCases}
              </EditorialHeading>
              <ul className="mt-6 border-t border-[#0B1F3A]/16">
                {page.useCases.useCases.map((item) => (
                  <li key={item} className="border-b border-[#0B1F3A]/16 py-4 text-base font-semibold leading-7 text-[#0B1F3A]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <EditorialHeading as="h3" size="card">
                {common.industries}
              </EditorialHeading>
              <ul className="mt-6 border-t border-[#0B1F3A]/16">
                {page.useCases.industries.map((item) => (
                  <li key={item} className="border-b border-[#0B1F3A]/16 py-4 text-base font-semibold leading-7 text-[#0B1F3A]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SiteContainer>
    </MarketingSection>
  );
}

function Formats({ page }: { page: CorporatePageContent }) {
  return (
    <MarketingSection tone="mist">
      <SiteContainer>
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
          <SectionHeader eyebrow={page.formats.eyebrow} title={page.formats.title} body={page.formats.body} />
          <div>
            <EditorialList items={page.formats.cards} />
            <ul className="mt-10 flex flex-wrap border-y border-[#0B1F3A]/16">
              {page.formats.delivery.map((item, index) => (
                <li
                  key={item}
                  className={`py-5 pr-8 text-base font-semibold text-[#0B1F3A] ${index > 0 ? "border-l border-[#0B1F3A]/16 pl-8" : ""}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SiteContainer>
    </MarketingSection>
  );
}

function Proposal({ page }: { page: CorporatePageContent }) {
  return (
    <MarketingSection
      tone="white"

    >
      <SiteContainer>
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
          <SectionHeader eyebrow={page.proposal.eyebrow} title={page.proposal.title} body={page.proposal.body} />
          <MarketingButton href="/contact">{page.proposal.cta}</MarketingButton>
        </div>
      </SiteContainer>
    </MarketingSection>
  );
}

function Faq({ page }: { page: CorporatePageContent }) {
  return (
    <MarketingSection tone="white">
      <SiteContainer>
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <SectionHeader eyebrow={page.faq.eyebrow} title={page.faq.title} />
          <FAQList items={page.faq.items} />
        </div>
      </SiteContainer>
    </MarketingSection>
  );
}

export default function CorporatePage() {
  const { language } = useSiteLanguage(defaultLanguage);
  const page = getContent(language);

  return (
    <main className="langia-page min-h-screen bg-white text-[#0B1F3A]">
      <SiteNavbar variant="overlay" language={language} />
      <Hero language={language} page={page} />
      <Overview page={page} />
      <SplitContentSection
        eyebrow={page.who.eyebrow}
        title={page.who.title}
        body={page.who.body}
        items={page.who.cards}
        tone="mist"
      />
      <MarketingSection
        id="services"
        tone="white"

      >
        <SiteContainer>
          <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
            <SectionHeader eyebrow={page.services.eyebrow} title={page.services.title} body={page.services.body} />
            <EditorialList items={page.services.cards} />
          </div>
        </SiteContainer>
      </MarketingSection>
      <SplitContentSection
        eyebrow={page.training.eyebrow}
        title={page.training.title}
        body={page.training.body}
        items={page.training.cards}
        tone="white"
      />
      <Tailored page={page} />
      <SplitContentSection
        eyebrow={page.tracking.eyebrow}
        title={page.tracking.title}
        body={page.tracking.body}
        items={page.tracking.cards}
        tone="white"
      />
      <Process page={page} />
      <UseCases page={page} language={language} />
      <Formats page={page} />
      <Proposal page={page} />
      <Faq page={page} />
      <FinalCTA
        title={page.finalCta.title}
        body={page.finalCta.body}
        primary={{ href: "/contact", label: page.finalCta.primaryCta }}
      />
      <SiteFooter />
    </main>
  );
}
