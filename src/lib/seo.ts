import type { Metadata } from "next";

import { localizedPath, type SiteLanguage } from "@/lib/language";

export const publicPagePaths = [
  "/",
  "/about",
  "/blog",
  "/contact",
  "/corporate",
  "/legal",
  "/programs",
  "/programs/langia-4-kids-n-teens",
  "/programs/langia-online",
  "/programs/talkin-club",
  "/programs/test-prep",
  "/test-your-english-level",
  "/work-with-us",
] as const;

export type PublicPagePath = (typeof publicPagePaths)[number];

type SeoCopy = Record<SiteLanguage, { title: string; description: string }>;

const seoCopy: Record<PublicPagePath, SeoCopy> = {
  "/": {
    es: { title: "Langia Online | Formación de idiomas en vivo", description: "Formación de idiomas online con profesores en vivo, rutas personalizadas y apoyo tecnológico para adultos, jóvenes y empresas." },
    pt: { title: "Langia Online | Formação de idiomas ao vivo", description: "Formação de idiomas online com professores ao vivo, percursos personalizados e apoio tecnológico para adultos, jovens e empresas." },
    en: { title: "Langia Online | Live Language Training", description: "Online language training with live teachers, personalized learning paths, and useful technology for adults, young learners, and companies." },
  },
  "/about": {
    es: { title: "Sobre Langia | Aprendizaje humano con apoyo de IA", description: "Conoce cómo Langia combina enseñanza en vivo, orientación humana y tecnología útil para aprender idiomas con claridad." },
    pt: { title: "Sobre a Langia | Aprendizagem humana com apoio de IA", description: "Conheça como a Langia combina ensino ao vivo, orientação humana e tecnologia útil para aprender idiomas com clareza." },
    en: { title: "About Langia | Human-Led, AI-Assisted Learning", description: "Learn how Langia combines live teaching, human guidance, and useful technology for clearer language learning." },
  },
  "/blog": {
    es: { title: "Recursos para aprender idiomas | Langia", description: "Guías e ideas para aprender idiomas, preparar exámenes y mejorar la comunicación profesional." },
    pt: { title: "Recursos para aprender idiomas | Langia", description: "Guias e ideias para aprender idiomas, preparar exames e melhorar a comunicação profissional." },
    en: { title: "Language Learning Resources | Langia", description: "Guides and ideas for language learning, test preparation, and clearer professional communication." },
  },
  "/contact": {
    es: { title: "Contacta a Langia | Empieza tu próximo capítulo", description: "Habla con Langia sobre programas de idiomas, preparación de exámenes, soluciones corporativas y servicios lingüísticos." },
    pt: { title: "Fale com a Langia | Comece seu próximo capítulo", description: "Fale com a Langia sobre programas de idiomas, preparação para exames, soluções corporativas e serviços linguísticos." },
    en: { title: "Contact Langia | Start Your Next Chapter", description: "Contact Langia about language programs, test preparation, corporate solutions, and language services." },
  },
  "/corporate": {
    es: { title: "Langia Corporate | Soluciones de idiomas para empresas", description: "Formación, traducción, localización e interpretación diseñadas para las necesidades de comunicación de tu empresa." },
    pt: { title: "Langia Corporate | Soluções de idiomas para empresas", description: "Treinamento, tradução, localização e interpretação pensados para as necessidades de comunicação da sua empresa." },
    en: { title: "Langia Corporate | Language Solutions for Teams", description: "Training, translation, localization, and interpretation designed around your company's communication needs." },
  },
  "/legal": {
    es: { title: "Información legal | Langia Language Solutions LLC", description: "Consulta los términos, la privacidad y las políticas de servicio, pago y reprogramación de Langia." },
    pt: { title: "Informações legais | Langia Language Solutions LLC", description: "Consulte os termos, a privacidade e as políticas de serviço, pagamento e reagendamento da Langia." },
    en: { title: "Legal Information | Langia Language Solutions LLC", description: "Review Langia's terms, privacy, service, payment, and rescheduling policies." },
  },
  "/programs": {
    es: { title: "Programas de idiomas | Elige tu ruta con Langia", description: "Compara programas de formación estructurada, conversación, preparación de exámenes, jóvenes y empresas." },
    pt: { title: "Programas de idiomas | Escolha sua rota com a Langia", description: "Compare programas de formação estruturada, conversação, preparação para exames, jovens e empresas." },
    en: { title: "Language Programs | Choose Your Path with Langia", description: "Compare structured training, conversation, test preparation, young learner, and corporate programs." },
  },
  "/programs/langia-4-kids-n-teens": {
    es: { title: "Langia 4 Kids n Teens | Idiomas para niños y jóvenes", description: "Clases de idiomas en vivo para niños y adolescentes con estructura clara, reportes y orientación docente." },
    pt: { title: "Langia 4 Kids n Teens | Idiomas para crianças e jovens", description: "Aulas de idiomas ao vivo para crianças e adolescentes com estrutura clara, relatórios e orientação docente." },
    en: { title: "Langia 4 Kids n Teens | Languages for Young Learners", description: "Live language learning for children and teens with clear structure, progress reports, and teacher guidance." },
  },
  "/programs/langia-online": {
    es: { title: "Langia Online | Formación de idiomas estructurada", description: "Clases privadas de idiomas en vivo con progreso por niveles, retroalimentación docente y formatos flexibles." },
    pt: { title: "Langia Online | Formação estruturada de idiomas", description: "Aulas particulares de idiomas ao vivo com progresso por níveis, feedback docente e formatos flexíveis." },
    en: { title: "Langia Online | Structured Live Language Training", description: "Private live language training with level-based progress, teacher feedback, and flexible formats." },
  },
  "/programs/talkin-club": {
    es: { title: "Talkin' Club | Práctica privada de conversación", description: "Práctica privada para desarrollar fluidez, confianza y una conversación más natural." },
    pt: { title: "Talkin' Club | Prática particular de conversação", description: "Prática particular para desenvolver fluência, confiança e uma conversação mais natural." },
    en: { title: "Talkin' Club | Private Conversation Practice", description: "Private practice for learners who want greater fluency, confidence, and more natural conversation." },
  },
  "/programs/test-prep": {
    es: { title: "Langia Test Prep | Preparación para exámenes", description: "Preparación privada para exámenes de idiomas, certificaciones, simulacros y objetivos académicos." },
    pt: { title: "Langia Test Prep | Preparação para exames", description: "Preparação particular para exames de idiomas, certificações, simulados e objetivos acadêmicos." },
    en: { title: "Langia Test Prep | Language Exam Preparation", description: "Private preparation for language exams, certifications, mock tests, and academic goals." },
  },
  "/test-your-english-level": {
    es: { title: "Orientación de nivel de idiomas | Langia", description: "Aclara tu punto de partida y conecta tus objetivos con la ruta de aprendizaje adecuada." },
    pt: { title: "Orientação de nível de idiomas | Langia", description: "Entenda seu ponto de partida e conecte seus objetivos à rota de aprendizagem adequada." },
    en: { title: "Language Level Guidance | Langia", description: "Clarify your starting point and connect your goals with the right language-learning path." },
  },
  "/work-with-us": {
    es: { title: "Trabaja con Langia | Colaboración docente", description: "Expresa tu interés en futuras oportunidades remotas de enseñanza freelance con Langia." },
    pt: { title: "Trabalhe com a Langia | Colaboração docente", description: "Demonstre seu interesse em futuras oportunidades remotas de ensino freelance com a Langia." },
    en: { title: "Work with Langia | Teacher Collaboration", description: "Express interest in future remote freelance teaching opportunities with Langia." },
  },
};

const openGraphLocales: Record<SiteLanguage, string> = { es: "es_ES", pt: "pt_BR", en: "en_US" };
export const defaultSocialImage = {
  url: "/images/marketing-2026/home/hero-airport-professional-desktop-v2.png",
  width: 1831,
  height: 859,
  alt: "Langia Online language learning",
};

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://langia.online").replace(/\/+$/u, "");
}

export function languageAlternates(path: PublicPagePath) {
  return {
    es: localizedPath("es", path),
    "pt-BR": localizedPath("pt", path),
    en: localizedPath("en", path),
    "x-default": path === "/" ? "/" : localizedPath("es", path),
  };
}

export function localizedMetadata(language: SiteLanguage, path: PublicPagePath): Metadata {
  const copy = seoCopy[path][language];
  const locale = openGraphLocales[language];
  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical: localizedPath(language, path), languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      siteName: "Langia Online",
      title: copy.title,
      description: copy.description,
      url: localizedPath(language, path),
      locale,
      alternateLocale: Object.values(openGraphLocales).filter((item) => item !== locale),
      images: [defaultSocialImage],
    },
    twitter: { card: "summary_large_image", title: copy.title, description: copy.description, images: [defaultSocialImage.url] },
  };
}

export function pageSeoCopy(language: SiteLanguage, path: PublicPagePath) {
  return seoCopy[path][language];
}
