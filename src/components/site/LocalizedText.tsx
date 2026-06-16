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

const categoryLabels: Record<string, Record<SiteLanguage, string>> = {
  "Learning Guides": {
    es: "Guías de aprendizaje",
    pt: "Guias de aprendizagem",
    en: "Learning Guides",
  },
};

export function LocalizedCategory({ category }: { category: string }) {
  const { language } = useSiteLanguage(defaultLanguage);

  return <>{categoryLabels[category]?.[language] ?? category}</>;
}

export function BlogLanguageNote({ postLanguage }: { postLanguage: string }) {
  const { language } = useSiteLanguage(defaultLanguage);
  const isEnglishPost = postLanguage.toLowerCase() === "en" || postLanguage.toLowerCase() === "english";

  if (!isEnglishPost || language === "en") {
    return null;
  }

  return (
    <p className="mt-5 rounded-2xl border border-[#D8E6F4] bg-[#F3F7FB] px-4 py-3 text-sm font-semibold text-[#42526A]">
      {language === "es"
        ? "Este artículo está disponible en inglés por ahora."
        : "Este artigo está disponível em inglês por enquanto."}
    </p>
  );
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
