import type { MetadataRoute } from "next";

import { getPublishedPosts } from "@/lib/blog";
import { supportedLanguages } from "@/lib/language";
import { getSiteUrl, languageAlternates, publicPagePaths } from "@/lib/seo";

const routeSettings = {
  "/": { changeFrequency: "weekly", priority: 1 },
  "/about": { changeFrequency: "monthly", priority: 0.6 },
  "/blog": { changeFrequency: "weekly", priority: 0.7 },
  "/contact": { changeFrequency: "monthly", priority: 0.7 },
  "/corporate": { changeFrequency: "monthly", priority: 0.8 },
  "/legal": { changeFrequency: "yearly", priority: 0.3 },
  "/programs": { changeFrequency: "weekly", priority: 0.9 },
  "/programs/langia-4-kids-n-teens": { changeFrequency: "monthly", priority: 0.8 },
  "/programs/langia-online": { changeFrequency: "monthly", priority: 0.8 },
  "/programs/talkin-club": { changeFrequency: "monthly", priority: 0.8 },
  "/programs/test-prep": { changeFrequency: "monthly", priority: 0.8 },
  "/test-your-english-level": { changeFrequency: "monthly", priority: 0.7 },
  "/work-with-us": { changeFrequency: "monthly", priority: 0.5 },
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const staticEntries: MetadataRoute.Sitemap = publicPagePaths.flatMap((path) =>
    supportedLanguages.map((language) => ({
      url: `${siteUrl}/${language}${path === "/" ? "" : path}`,
      changeFrequency: routeSettings[path].changeFrequency,
      priority: routeSettings[path].priority,
      alternates: {
        languages: Object.fromEntries(
          Object.entries(languageAlternates(path)).map(([key, value]) => [key, `${siteUrl}${value}`]),
        ),
      },
    })),
  );
  const blogEntries: MetadataRoute.Sitemap = getPublishedPosts().map((post) => ({
    url: `${siteUrl}/en/blog/${post.slug}`,
    lastModified: new Date(`${post.date}T00:00:00.000Z`),
    changeFrequency: "monthly",
    priority: post.featured ? 0.7 : 0.6,
    alternates: { languages: { en: `${siteUrl}/en/blog/${post.slug}`, "x-default": `${siteUrl}/en/blog/${post.slug}` } },
  }));

  return [...staticEntries, ...blogEntries];
}
