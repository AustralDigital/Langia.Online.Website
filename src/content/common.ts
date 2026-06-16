import type { SiteLanguage } from "@/lib/language";

export const commonContent: Record<
  SiteLanguage,
  {
    backToResources: string;
    featured: string;
    format: string;
    industries: string;
    level: string;
    minRead: string;
    readArticle: string;
    smallGroup: string;
    useCases: string;
  }
> = {
  es: {
    backToResources: "Volver a recursos",
    featured: "Destacado",
    format: "Formato",
    industries: "Industrias",
    level: "Nivel",
    minRead: "min de lectura",
    readArticle: "Leer artículo",
    smallGroup: "Grupo pequeño",
    useCases: "Casos de uso",
  },
  pt: {
    backToResources: "Voltar aos recursos",
    featured: "Destaque",
    format: "Formato",
    industries: "Setores",
    level: "Nível",
    minRead: "min de leitura",
    readArticle: "Ler artigo",
    smallGroup: "Grupo pequeno",
    useCases: "Casos de uso",
  },
  en: {
    backToResources: "Back to resources",
    featured: "Featured",
    format: "Format",
    industries: "Industries",
    level: "Level",
    minRead: "min read",
    readArticle: "Read article",
    smallGroup: "Small group",
    useCases: "Use cases",
  },
};
