"use client";

import { SiteFooter } from "@/components/site/SiteFooter";
import {
  FeatureList,
  FinalCTA,
  MarketingButton,
  MarketingSection,
  PageHero,
  SectionHeader,
  SiteContainer,
} from "@/components/site/MarketingPrimitives";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { commonContent } from "@/content/common";
import { pagesContent, type LangiaOnlinePageContent } from "@/content/pages";
import { useSiteLanguage } from "@/hooks/useSiteLanguage";
import { defaultLanguage, type SiteLanguage } from "@/lib/language";
import {
  ChoiceGrid,
  EditorialBlockGrid,
  FAQSection,
  LevelPath,
  PaymentNotes,
  PricingCard,
  PricingDefinitionList,
  PROGRAM_IMAGE_PATHS,
  TailoredFeatureSection,
} from "../ProgramRoutePrimitives";

function getContent(language: SiteLanguage): LangiaOnlinePageContent {
  const content = pagesContent[language].langiaOnline.langiaOnlinePage;

  if (!content) {
    throw new Error("Langia Online page content is missing.");
  }

  return content;
}

export default function LangiaOnlinePage() {
  const { language } = useSiteLanguage(defaultLanguage);
  const page = getContent(language);
  const common = commonContent[language];

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
        image={{ src: PROGRAM_IMAGE_PATHS.langiaOnline, alt: page.hero.title }}
        facts={page.hero.quickFacts}
        title={page.hero.title}
        tone="white"
      />

      <MarketingSection tone="white">
        <SiteContainer>
          <div className="grid gap-14 xl:grid-cols-[0.88fr_1.12fr] xl:gap-24">
            <SectionHeader body={page.who.body} eyebrow={page.who.eyebrow} title={page.who.title} />
            <EditorialBlockGrid items={page.who.cards} />
          </div>
        </SiteContainer>
      </MarketingSection>

      <MarketingSection tone="mist">
        <SiteContainer>
          <SectionHeader body={page.formats.body} eyebrow={page.formats.eyebrow} title={page.formats.title} />
          <div className="mt-14">
            <ChoiceGrid cards={page.formats.cards} label={common.format} />
          </div>
        </SiteContainer>
      </MarketingSection>

      <TailoredFeatureSection
        features={page.includes.features}
        includesEyebrow={page.includes.eyebrow}
        includesTitle={page.includes.title}
        tailored={page.tailored}
      />

      <MarketingSection tone="white">
        <SiteContainer>
          <SectionHeader body={page.levels.body} eyebrow={page.levels.eyebrow} title={page.levels.title} />
          <div className="mt-14">
            <LevelPath items={page.levels.items} label={common.level} />
          </div>
        </SiteContainer>
      </MarketingSection>

      <MarketingSection tone="mist">
        <SiteContainer>
          <div className="grid gap-14 xl:grid-cols-[0.76fr_1.24fr] xl:items-start xl:gap-24">
            <SectionHeader body={page.schedule.body} eyebrow={page.schedule.eyebrow} title={page.schedule.title} />
            <FeatureList items={page.schedule.bullets} />
          </div>
        </SiteContainer>
      </MarketingSection>

      <MarketingSection id="pricing" tone="white">
        <SiteContainer>
          <SectionHeader body={page.pricing.body} eyebrow={page.pricing.eyebrow} title={page.pricing.title} />
          <div className="mt-14">
            <PaymentNotes
              items={[
                { title: page.pricing.studentCreditTitle, body: page.pricing.studentCreditBody },
                { title: page.pricing.payFullTitle, body: page.pricing.payFullBody },
              ]}
            />
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3 [&>article:first-child]:border-[#048EFF]/40 [&>article:first-child]:shadow-[0_20px_55px_rgba(4,142,255,0.10)]">
            {page.pricing.cards.map((card, index) => (
              <PricingCard
                key={card.title}
                badge={index === 0 ? page.pricing.labels.highlight : undefined}
                title={card.title}
              >
                <PricingDefinitionList
                  items={[
                    { label: page.pricing.labels.base, value: card.studentCreditPerLesson },
                    { label: page.pricing.labels.total, value: card.studentCreditTotal },
                    { label: page.pricing.labels.installments, value: card.installments },
                    { label: page.pricing.labels.payFull, value: card.payFull },
                  ]}
                />
                <div className="mt-auto pt-8">
                  <MarketingButton className="w-full" href="/contact">
                    {page.pricing.cta}
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
