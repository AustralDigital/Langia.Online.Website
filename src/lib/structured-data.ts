import type { BlogPost } from "@/lib/blog";
import type { SiteLanguage } from "@/lib/language";
import { getSiteUrl, pageSeoCopy, type PublicPagePath } from "@/lib/seo";

const organizationId = `${getSiteUrl()}/#organization`;

function absolute(path: string) {
  return `${getSiteUrl()}${path}`;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": organizationId,
    name: "Langia Language Solutions LLC",
    alternateName: "Langia Online",
    url: getSiteUrl(),
    logo: absolute("/images/logo-original.svg"),
    areaServed: "Worldwide",
  };
}

export function pageSchema(language: SiteLanguage, path: PublicPagePath) {
  const copy = pageSeoCopy(language, path);
  const url = absolute(`/${language}${path === "/" ? "" : path}`);
  const isProgram = path.startsWith("/programs/");
  const schemas: Array<Record<string, unknown>> = [
    {
      "@context": "https://schema.org",
      "@type": path === "/blog" ? "CollectionPage" : "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: copy.title,
      description: copy.description,
      inLanguage: language === "pt" ? "pt-BR" : language,
      isPartOf: { "@id": `${getSiteUrl()}/#website` },
      about: { "@id": organizationId },
    },
  ];

  if (path === "/") {
    schemas.unshift(organizationSchema(), {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${getSiteUrl()}/#website`,
      url: getSiteUrl(),
      name: "Langia Online",
      publisher: { "@id": organizationId },
      inLanguage: ["es", "pt-BR", "en"],
    });
  }

  if (isProgram) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Course",
      name: copy.title.replace(/ \| .*$/u, ""),
      description: copy.description,
      url,
      provider: { "@id": organizationId },
      inLanguage: language === "pt" ? "pt-BR" : language,
      educationalLevel: "Beginner to advanced",
    });
  }

  return schemas;
}

export function articleSchema(post: BlogPost) {
  const url = absolute(`/en/blog/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: post.language,
    mainEntityOfPage: url,
    url,
    author: { "@type": "Organization", name: post.authorName },
    publisher: { "@id": organizationId },
    ...(post.coverImageExists && post.coverImage ? { image: absolute(post.coverImage) } : {}),
  };
}
