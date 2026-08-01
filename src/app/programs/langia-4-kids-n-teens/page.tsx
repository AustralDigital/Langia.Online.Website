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
import { pagesContent, type KidsTeensPageContent } from "@/content/pages";
import { useSiteLanguage } from "@/hooks/useSiteLanguage";
import { defaultLanguage, type SiteLanguage } from "@/lib/language";
import {
  ChoiceGrid,
  EditorialBlockGrid,
  FAQSection,
  KidsHeroComposition,
  LevelPath,
  PaymentNotes,
  PricingCard,
  PricingDefinitionList,
  TailoredFeatureSection,
} from "../ProgramRoutePrimitives";

function getContent(language: SiteLanguage): KidsTeensPageContent {
  const content = pagesContent[language].kidsTeens.kidsTeensPage;

  if (!content) {
    throw new Error("Kids n Teens page content is missing.");
  }

  return content;
}

export default function LangiaForKidsAndTeensPage() {
  const { language } = useSiteLanguage(defaultLanguage);
  const page = getContent(language);
  const common = commonContent[language];

  return (
    <main className="min-h-screen bg-white text-[#0B1F3A]">
      <SiteNavbar variant="light" language={language} />

      <PageHero
        className="overflow-hidden bg-[radial-gradient(circle_at_8%_18%,rgba(243,183,55,0.20),transparent_30%),radial-gradient(circle_at_94%_8%,rgba(4,142,255,0.13),transparent_32%),linear-gradient(180deg,#FFFFFF_0%,#FFF9EA_100%)]"
        actions={
          <>
            <MarketingButton href="/contact">{page.hero.primaryCta}</MarketingButton>
            <MarketingButton href="#pricing" variant="secondary">
              {page.hero.secondaryCta}
            </MarketingButton>
          </>
        }
        body={<p>{page.hero.body}</p>}
        eyebrow={page.hero.eyebrow}
        media={<KidsHeroComposition alt={page.hero.title} items={page.hero.quickFacts} />}
        title={page.hero.title}
        tone="white"
      />

      <MarketingSection className="bg-[linear-gradient(180deg,#FFFFFF_0%,#FFFDF8_100%)]" tone="white">
        <SiteContainer>
          <div className="grid gap-14 xl:grid-cols-[0.72fr_1.28fr] xl:gap-24">
            <SectionHeader body={page.who.body} eyebrow={page.who.eyebrow} title={page.who.title} />
            <EditorialBlockGrid items={page.who.cards} />
          </div>
        </SiteContainer>
      </MarketingSection>

      <MarketingSection className="bg-[linear-gradient(180deg,#F3F7FB_0%,#FFF9EA_100%)]" tone="mist">
        <SiteContainer>
          <SectionHeader body={page.formats.body} eyebrow={page.formats.eyebrow} title={page.formats.title} />
          <div className="mt-14">
            <ChoiceGrid cards={page.formats.cards} label={common.smallGroup} />
          </div>
        </SiteContainer>
      </MarketingSection>

      <MarketingSection tone="white">
        <SiteContainer>
          <SectionHeader body={page.classFeel.body} eyebrow={page.classFeel.eyebrow} title={page.classFeel.title} />
          <div className="mt-14">
            <EditorialBlockGrid items={page.classFeel.cards} />
          </div>
        </SiteContainer>
      </MarketingSection>

      <MarketingSection tone="mist">
        <SiteContainer>
          <SectionHeader
            body={page.parentSafety.body}
            eyebrow={page.parentSafety.eyebrow}
            title={page.parentSafety.title}
          />
          <div className="mt-14">
            <EditorialBlockGrid columns={4} items={page.parentSafety.cards} />
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
          <div className="mt-10 grid gap-5 lg:grid-cols-3 [&>article]:border-[#F3B737]/28 [&>article:first-child]:shadow-[0_18px_50px_rgba(243,183,55,0.09)]">
            {page.pricing.cards.map((card) => (
              <PricingCard
                badge={
                  card.badge
                    ? card.badge === "personalized"
                      ? page.pricing.labels.personalized
                      : page.pricing.labels.value
                    : undefined
                }
                key={card.title}
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

      <MarketingSection className="!py-20 sm:!py-24 lg:!py-28" tone="mist">
        <SiteContainer>
          <div className="grid gap-10 rounded-[2rem] border border-[#F3B737]/35 bg-[linear-gradient(125deg,#FFFFFF_0%,#FFF4D1_100%)] p-7 shadow-[0_18px_55px_rgba(11,31,58,0.06)] sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end lg:p-12">
            <SectionHeader body={page.schools.body} eyebrow={page.schools.eyebrow} title={page.schools.title} />
            <MarketingButton href="/contact" variant="secondary">
              {page.schools.cta}
            </MarketingButton>
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
