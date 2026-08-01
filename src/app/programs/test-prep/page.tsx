"use client";

import { SiteFooter } from "@/components/site/SiteFooter";
import {
  FinalCTA,
  MarketingButton,
  MarketingSection,
  PageHero,
  ProcessSteps,
  SectionHeader,
  SiteContainer,
} from "@/components/site/MarketingPrimitives";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { pagesContent, type TestPrepPageContent } from "@/content/pages";
import { useSiteLanguage } from "@/hooks/useSiteLanguage";
import { defaultLanguage, type SiteLanguage } from "@/lib/language";
import {
  EditorialBlockGrid,
  FAQSection,
  HeroFactList,
  PricingCard,
  PROGRAM_IMAGE_PATHS,
  ProgramHeroImage,
  TailoredFeatureSection,
} from "../ProgramRoutePrimitives";

function getContent(language: SiteLanguage): TestPrepPageContent {
  const content = pagesContent[language].testPrep.testPrepPage;

  if (!content) {
    throw new Error("Test Prep page content is missing.");
  }

  return content;
}

export default function TestPrepPage() {
  const { language } = useSiteLanguage(defaultLanguage);
  const page = getContent(language);

  return (
    <main className="min-h-screen bg-white text-[#0B1F3A]">
      <SiteNavbar variant="light" language={language} />

      <PageHero
        className="overflow-hidden bg-[radial-gradient(circle_at_88%_12%,rgba(243,183,55,0.20),transparent_30%),linear-gradient(180deg,#FFFFFF_0%,#FFF9EC_100%)]"
        actions={
          <>
            <MarketingButton href="/contact">{page.hero.primaryCta}</MarketingButton>
            <MarketingButton href="#pricing" variant="secondary">
              {page.hero.secondaryCta}
            </MarketingButton>
          </>
        }
        body={
          <>
            <p>{page.hero.body}</p>
            <HeroFactList items={page.hero.quickFacts} />
          </>
        }
        eyebrow={page.hero.eyebrow}
        media={
          <ProgramHeroImage
            accent="gold"
            alt={page.hero.title}
            imageClassName="object-cover object-center"
            src={PROGRAM_IMAGE_PATHS.testPrep}
          />
        }
        title={page.hero.title}
        tone="white"
      />

      <MarketingSection className="bg-[linear-gradient(180deg,#FFFFFF_0%,#FFFCF5_100%)]" tone="white">
        <SiteContainer>
          <SectionHeader body={page.exams.body} eyebrow={page.exams.eyebrow} title={page.exams.title} />
          <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
            {page.exams.groups.map((group, index) => (
              <article key={group.title} className="border-t border-[#0B1F3A]/18 pt-6">
                <span className="text-sm tabular-nums text-[#0068B8]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 font-heading text-2xl font-medium tracking-[-0.03em] text-[#0B1F3A]">
                  {group.title}
                </h3>
                <ul className="mt-5 border-t border-[#0B1F3A]/12">
                  {group.items.map((item) => (
                    <li key={item} className="border-b border-[#0B1F3A]/12 py-3 text-base leading-7 text-[#52657A]">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </SiteContainer>
      </MarketingSection>

      <MarketingSection tone="mist">
        <SiteContainer>
          <div className="grid gap-14 xl:grid-cols-[0.72fr_1.28fr] xl:gap-24">
            <SectionHeader body={page.who.body} eyebrow={page.who.eyebrow} title={page.who.title} />
            <EditorialBlockGrid items={page.who.cards} />
          </div>
        </SiteContainer>
      </MarketingSection>

      <MarketingSection className="!py-16 sm:!py-20 lg:!py-24" tone="white">
        <SiteContainer>
          <div className="grid gap-12 xl:grid-cols-[0.86fr_1.14fr] xl:gap-20">
            <SectionHeader body={page.process.body} eyebrow={page.process.eyebrow} title={page.process.title} />
            <div className="[&_ol_span]:text-[#0068B8]">
              <ProcessSteps items={page.process.steps} />
            </div>
          </div>
        </SiteContainer>
      </MarketingSection>

      <MarketingSection tone="mist">
        <SiteContainer>
          <SectionHeader body={page.skills.body} eyebrow={page.skills.eyebrow} title={page.skills.title} />
          <div className="mt-14">
            <EditorialBlockGrid columns={4} items={page.skills.cards} />
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
          <SectionHeader body={page.mocks.body} eyebrow={page.mocks.eyebrow} title={page.mocks.title} />
          <div className="mt-14">
            <EditorialBlockGrid items={page.mocks.cards} />
          </div>
          <p className="mt-12 max-w-3xl border-l-2 border-[#048EFF] pl-6 text-base leading-8 text-[#52657A]">
            {page.mocks.note}
          </p>
        </SiteContainer>
      </MarketingSection>

      <MarketingSection id="pricing" tone="mist">
        <SiteContainer>
          <SectionHeader body={page.pricing.body} eyebrow={page.pricing.eyebrow} title={page.pricing.title} />
          <div className="mt-14 grid gap-5 lg:grid-cols-2 [&>article]:border-[#F3B737]/30 [&>article]:shadow-[0_18px_50px_rgba(243,183,55,0.08)]">
            {page.pricing.cards.map((card) => (
              <PricingCard key={card.title} title={card.title}>
                <div className="mt-8 flex flex-wrap items-end gap-x-3 gap-y-1">
                  <span className="font-heading text-5xl font-medium tracking-[-0.055em] text-[#0B1F3A] sm:text-6xl">
                    {card.price}
                  </span>
                  <span className="pb-2 text-base font-semibold text-[#52657A]">{card.unit}</span>
                </div>
                <p className="mt-7 border-y border-[#0B1F3A]/14 py-5 font-heading text-xl font-semibold text-[#0B1F3A]">
                  {card.total}
                </p>
                <p className="mt-6 text-base leading-8 text-[#52657A]">{card.body}</p>
                <div className="mt-auto pt-8">
                  <MarketingButton className="w-full sm:w-auto" href="/contact">
                    {page.pricing.cta}
                  </MarketingButton>
                </div>
              </PricingCard>
            ))}
          </div>
          <p className="mt-10 max-w-3xl border-l-2 border-[#F3B737] pl-6 text-base font-semibold leading-8 text-[#0B1F3A]">
            {page.pricing.note}
          </p>
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
