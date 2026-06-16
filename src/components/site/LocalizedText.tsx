"use client";

import { commonContent } from "@/content/common";
import { useSiteLanguage } from "@/hooks/useSiteLanguage";
import { defaultLanguage, type SiteLanguage } from "@/lib/language";

export function LocalizedText({
  content,
}: {
  content: Record<SiteLanguage, string>;
}) {
  const { language } = useSiteLanguage(defaultLanguage);

  return <>{content[language]}</>;
}

export function CommonLabel({ label }: { label: keyof (typeof commonContent)["en"] }) {
  const { language } = useSiteLanguage(defaultLanguage);

  return <>{commonContent[language][label]}</>;
}

export function LocalizedDate({ date }: { date: string }) {
  const { language } = useSiteLanguage(defaultLanguage);
  const locale = language === "pt" ? "pt-BR" : language === "es" ? "es" : "en";

  return (
    <>
      {new Intl.DateTimeFormat(locale, {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
      }).format(new Date(`${date}T00:00:00.000Z`))}
    </>
  );
}
