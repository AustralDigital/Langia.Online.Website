"use client";

import type { BlogCategory } from "@/lib/blog";
import { useSiteLanguage } from "@/hooks/useSiteLanguage";
import { defaultLanguage, type SiteLanguage } from "@/lib/language";

const categoryLabels: Record<BlogCategory, Record<SiteLanguage, string>> = {
  "Learning Guides": {
    es: "Guías de aprendizaje",
    pt: "Guias de aprendizagem",
    en: "Learning Guides",
  },
  "Test Prep": {
    es: "Preparación de exámenes",
    pt: "Preparação para exames",
    en: "Test Prep",
  },
  "Kids & Teens": {
    es: "Niños y adolescentes",
    pt: "Crianças e adolescentes",
    en: "Kids & Teens",
  },
  Corporate: {
    es: "Empresas",
    pt: "Empresas",
    en: "Corporate",
  },
  Languages: {
    es: "Idiomas",
    pt: "Idiomas",
    en: "Languages",
  },
  "Immigration / Study Abroad": {
    es: "Inmigración / Estudios en el exterior",
    pt: "Imigração / Estudos no exterior",
    en: "Immigration / Study Abroad",
  },
  "Langia News": {
    es: "Noticias de Langia",
    pt: "Notícias da Langia",
    en: "Langia News",
  },
};

export function BlogCategoryLabel({ category }: { category: BlogCategory }) {
  const { language } = useSiteLanguage(defaultLanguage);
  return <>{categoryLabels[category][language]}</>;
}

export function BlogLanguageLabel({ postLanguage }: { postLanguage: SiteLanguage }) {
  const { language } = useSiteLanguage(defaultLanguage);
  const labels: Record<SiteLanguage, Record<SiteLanguage, string>> = {
    es: { es: "Español", pt: "Portugués", en: "Inglés" },
    pt: { es: "Espanhol", pt: "Português", en: "Inglês" },
    en: { es: "Spanish", pt: "Portuguese", en: "English" },
  };

  return <>{labels[language][postLanguage]}</>;
}
