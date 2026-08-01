import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";

import AboutPage from "@/app/about/page";
import BlogIndexPage from "@/app/blog/page";
import BlogPostPage from "@/app/blog/[slug]/page";
import ContactPageClient from "@/app/contact/ContactPageClient";
import CorporatePage from "@/app/corporate/page";
import LegalPage from "@/app/legal/page";
import { ProgramsOverviewClient } from "@/app/programs/ProgramsOverviewClient";
import KidsTeensPage from "@/app/programs/langia-4-kids-n-teens/page";
import LangiaOnlinePage from "@/app/programs/langia-online/page";
import TalkinClubPage from "@/app/programs/talkin-club/page";
import TestPrepPage from "@/app/programs/test-prep/page";
import LevelGuidancePage from "@/app/test-your-english-level/page";
import WorkWithUsClient from "@/app/work-with-us/WorkWithUsClient";
import { EditorialHomepage } from "@/components/home/EditorialHomepage";
import { StructuredData } from "@/components/seo/StructuredData";
import { SiteLanguageProvider } from "@/lib/language-context";
import { getPostBySlug, getPublishedPosts } from "@/lib/blog";
import { isSiteLanguage, supportedLanguages, type SiteLanguage } from "@/lib/language";
import { defaultSocialImage, localizedMetadata, publicPagePaths, type PublicPagePath } from "@/lib/seo";
import { articleSchema, pageSchema } from "@/lib/structured-data";

type LocalizedPageProps = {
  params: Promise<{ locale: string; slug?: string[] }>;
};

const pageComponents: Record<PublicPagePath, ComponentType> = {
  "/": EditorialHomepage,
  "/about": AboutPage,
  "/blog": BlogIndexPage,
  "/contact": ContactPageClient,
  "/corporate": CorporatePage,
  "/legal": LegalPage,
  "/programs": ProgramsOverviewClient,
  "/programs/langia-4-kids-n-teens": KidsTeensPage,
  "/programs/langia-online": LangiaOnlinePage,
  "/programs/talkin-club": TalkinClubPage,
  "/programs/test-prep": TestPrepPage,
  "/test-your-english-level": LevelGuidancePage,
  "/work-with-us": WorkWithUsClient,
};

function pathFromSlug(slug?: string[]) {
  return slug?.length ? `/${slug.join("/")}` : "/";
}

function isPublicPagePath(path: string): path is PublicPagePath {
  return publicPagePaths.includes(path as PublicPagePath);
}

function blogSlug(path: string) {
  const match = path.match(/^\/blog\/([^/]+)$/u);
  return match?.[1] ?? null;
}

export function generateStaticParams() {
  const pages = supportedLanguages.flatMap((locale) =>
    publicPagePaths.map((path) => ({
      locale,
      slug: path === "/" ? [] : path.slice(1).split("/"),
    })),
  );
  const articles = supportedLanguages.flatMap((locale) =>
    getPublishedPosts().map((post) => ({ locale, slug: ["blog", post.slug] })),
  );
  return [...pages, ...articles];
}

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isSiteLanguage(locale)) return {};

  const path = pathFromSlug(slug);
  if (isPublicPagePath(path)) return localizedMetadata(locale, path);

  const postSlug = blogSlug(path);
  const post = postSlug ? getPostBySlug(postSlug) : null;
  if (!post) return {};

  const canonical = `/en/blog/${post.slug}`;
  const images = post.coverImageExists && post.coverImage
    ? [{ url: post.coverImage, alt: post.title }]
    : [defaultSocialImage];
  return {
    title: `${post.title} | Langia`,
    description: post.description,
    alternates: { canonical, languages: { en: canonical, "x-default": canonical } },
    openGraph: {
      type: "article",
      siteName: "Langia Online",
      locale: "en_US",
      url: canonical,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      images,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, images: images.map((image) => image.url) },
  };
}

export default async function LocalizedPage({ params }: LocalizedPageProps) {
  const { locale, slug } = await params;
  if (!isSiteLanguage(locale)) notFound();

  const language = locale as SiteLanguage;
  const path = pathFromSlug(slug);

  if (isPublicPagePath(path)) {
    const Page = pageComponents[path];
    return (
      <SiteLanguageProvider language={language}>
        <StructuredData data={pageSchema(language, path)} />
        {path === "/" ? <EditorialHomepage language={language} /> : <Page />}
      </SiteLanguageProvider>
    );
  }

  const postSlug = blogSlug(path);
  const post = postSlug ? getPostBySlug(postSlug) : null;
  if (!post || !postSlug) notFound();

  return (
    <SiteLanguageProvider language={language}>
      <StructuredData data={articleSchema(post)} />
      <BlogPostPage params={Promise.resolve({ slug: postSlug })} />
    </SiteLanguageProvider>
  );
}
