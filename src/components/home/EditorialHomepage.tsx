"use client";

import { SiteNavbar } from "@/components/site/SiteNavbar";
import { premiumHomepageContent } from "@/content/premium-homepage";
import { useSiteLanguage } from "@/hooks/useSiteLanguage";
import { defaultLanguage, type SiteLanguage } from "@/lib/language";
import { HomeFooter } from "./HomeFooter";
import {
  CareerStatement,
  Discovery,
  GlobalEnglish,
  HomeQuestions,
  LearningCapabilities,
  LearningJourney,
  LearningOutcomes,
  ProgramCollection,
} from "./LearningSections";
import { PremiumHero, ProfessionalWorld } from "./PremiumHero";
import { TailoredShowcase } from "./TailoredShowcase";

// Preserves the existing route's published article data contract.
export type HomepageArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  coverImage?: string;
  coverImageExists: boolean;
  readingTime: number;
};

export function EditorialHomepage({
  language: languageProp,
}: { language?: SiteLanguage; articles?: HomepageArticle[] } = {}) {
  const { language: storedLanguage, setLanguage } = useSiteLanguage(
    languageProp ?? defaultLanguage,
  );
  const language = languageProp ?? storedLanguage;
  const copy = premiumHomepageContent[language];
  return (
    <div className="langia-premium">
      <a href="#main-content" className="premium-skip">
        {copy.skip}
      </a>
      <SiteNavbar
        variant="editorial"
        language={language}
        primaryCta={copy.hero.primary}
      />
      <main id="main-content" tabIndex={-1}>
        <PremiumHero copy={copy.hero} />
        <ProfessionalWorld copy={copy.trust} />
        <TailoredShowcase copy={copy.tailored} />
        <ProgramCollection copy={copy.programs} />
        <LearningJourney copy={copy.journey} />
        <LearningCapabilities copy={copy.capabilities} />
        <GlobalEnglish copy={copy.listening} />
        <CareerStatement copy={copy.statement} />
        <LearningOutcomes copy={copy.outcomes} />
        <Discovery copy={copy.resources} />
        <HomeQuestions copy={copy.faq} />
      </main>
      <HomeFooter
        copy={copy.footer}
        language={language}
        onLanguageChange={setLanguage}
      />
    </div>
  );
}
