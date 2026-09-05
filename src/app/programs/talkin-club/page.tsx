"use client";

import { SiteFooter } from "@/components/site/SiteFooter";
import {
  FeatureList,
  FinalCTA,
  MarketingButton,
  MarketingSection,
  PageHero,
  ProcessSteps,
  SectionHeader,
  SiteContainer,
} from "@/components/site/MarketingPrimitives";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { pagesContent, type TalkinClubPageContent } from "@/content/pages";
import { useSiteLanguage } from "@/hooks/useSiteLanguage";
import { defaultLanguage, type SiteLanguage } from "@/lib/language";
import {
  EditorialBlockGrid,
  FAQSection,
  LabelGrid,
  PricingCard,
  PROGRAM_IMAGE_PATHS,
  TailoredFeatureSection,
} from "../ProgramRoutePrimitives";

function getContent(language: SiteLanguage): TalkinClubPageContent {
  const content = pagesContent[language].talkinClub.talkinClubPage;

  if (!content) {
    throw new Error("Talkin' Club page content is missing.");
  }

  return content;
}

export default function TalkinClubPage() {
  const { language } = useSiteLanguage(defaultLanguage);
  const page = getContent(language);

  return (
    <main className="langia-page min-h-screen bg-white text-[#0B1F3A]">
      <SiteNavbar variant="overlay" language={language} />

      <PageHero
        className="overflow-hidden"
        actions={
          <>
            <MarketingButton href="/contact">{page.hero.primaryCta}</MarketingButton>
            <MarketingButton href="#pricing" variant="inverse">
              {page.hero.secondaryCta}
            </MarketingButton>
          </>
        }
        body={page.hero.body}
        eyebrow={page.hero.eyebrow}
        image={{ src: PROGRAM_IMAGE_PATHS.talkinClub, alt: page.hero.title }}
        facts={page.hero.quickFacts}
        title={page.hero.title}
        tone="white"
      />

      <MarketingSection tone="white">
        <SiteContainer>
          <div className="grid gap-14 xl:grid-cols-[1.18fr_0.82fr] xl:items-start xl:gap-24">
            <SectionHeader
              body={page.who.body}
              className="xl:order-2"
              eyebrow={page.who.eyebrow}
              title={page.who.title}
            />
            <div className="xl:order-1">
              <EditorialBlockGrid items={page.who.cards} />
            </div>
          </div>
        </SiteContainer>
      </MarketingSection>

      <MarketingSection className="!py-16 sm:!py-20 lg:!py-24" tone="mist">
        <SiteContainer>
          <div className="grid gap-12 xl:grid-cols-[0.82fr_1.18fr] xl:gap-20">
            <SectionHeader
              body={page.howItWorks.body}
              eyebrow={page.howItWorks.eyebrow}
              title={page.howItWorks.title}
            />
            <div className="[&_ol_span]:text-[#0068B8]">
              <ProcessSteps items={page.howItWorks.steps} />
            </div>
          </div>
        </SiteContainer>
      </MarketingSection>

      <MarketingSection tone="white">
        <SiteContainer>
          <div className="grid gap-14 xl:grid-cols-[0.72fr_1.28fr] xl:gap-24">
            <SectionHeader body={page.topics.body} eyebrow={page.topics.eyebrow} title={page.topics.title} />
            <LabelGrid items={page.topics.items} />
          </div>
        </SiteContainer>
      </MarketingSection>

      <TailoredFeatureSection
        features={page.includes.features}
        includesEyebrow={page.includes.eyebrow}
        includesTitle={page.includes.title}
        tailored={page.tailored}
      />

      <MarketingSection id="pricing" tone="mist">
        <SiteContainer>
          <SectionHeader body={page.pricing.body} eyebrow={page.pricing.eyebrow} title={page.pricing.title} />
          <div className="mt-14 grid gap-5 lg:grid-cols-2 [&>article]:border-[#35B7E9]/25 [&>article]:shadow-[0_18px_50px_rgba(53,183,233,0.08)]">
            {page.pricing.cards.map((card) => (
              <PricingCard badge={card.badge} key={card.title} title={card.title}>
                <div className="mt-8 flex flex-wrap items-end gap-x-3 gap-y-1 border-b border-[#0B1F3A]/14 pb-7">
                  <span className="font-heading text-5xl font-medium tracking-[-0.055em] text-[#0B1F3A] sm:text-6xl">
                    {card.price}
                  </span>
                  <span className="pb-2 text-base font-semibold text-[#52657A]">{card.unit}</span>
                </div>
                <div className="mt-3">
                  <FeatureList items={card.details} />
                </div>
                <div className="mt-auto pt-8">
                  <MarketingButton className="w-full sm:w-auto" href="/contact">
                    {card.cta}
                  </MarketingButton>
                </div>
              </PricingCard>
            ))}
          </div>
        </SiteContainer>
      </MarketingSection>

      <FAQSection eyebrow={page.faq.eyebrow} items={page.faq.items} title={page.faq.title} />

      <FinalCTA
        body={page.finalCta.body}
        primary={{ href: "/contact", label: page.finalCta.primaryCta }}
        secondary={{ href: "/programs", label: page.finalCta.secondaryCta }}
        title={page.finalCta.title}
      />

      <SiteFooter />
    </main>
  );
}
