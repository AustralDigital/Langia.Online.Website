"use client";

import { MarketingPageShell } from "@/components/MarketingPageShell";
import { pagesContent } from "@/content/pages";
import { useSiteLanguage } from "@/hooks/useSiteLanguage";
import { defaultLanguage } from "@/lib/language";

export default function TestYourEnglishLevelPage() {
  const { language } = useSiteLanguage(defaultLanguage);
  const content = pagesContent[language].levelTest;

  return <MarketingPageShell content={content} />;
}
