import type { MetadataRoute } from "next";

const fallbackSiteUrl = "https://langia.online";

function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL?.trim() || fallbackSiteUrl).replace(
    /\/+$/u,
    "",
  );
}

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
