import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { CommonLabel, LocalizedCategory, LocalizedDate, LocalizedText } from "@/components/site/LocalizedText";
import { siteButtonClass } from "@/components/site/buttonStyles";
import { blogCategories, getPublishedPosts, type BlogPost } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Resources | Langia",
  description:
    "Guides, ideas, and resources for clearer language learning, test preparation, corporate communication, and language growth.",
};

const pageCopy = {
  eyebrow: {
    es: "Recursos",
    pt: "Recursos",
    en: "Resources",
  },
  title: {
    es: "Lecturas breves para tomar mejores decisiones.",
    pt: "Leituras breves para tomar melhores decisões.",
    en: "Short reads to make better decisions.",
  },
  body: {
    es: "Guías, ideas y recursos para aprender idiomas con más claridad.",
    pt: "Guias, ideias e recursos para aprender idiomas com mais clareza.",
    en: "Guides, ideas, and resources for clearer language learning.",
  },
  ctaTitle: {
    es: "¿Necesitas ayuda para elegir tu ruta?",
    pt: "Precisa de ajuda para escolher sua rota?",
    en: "Need help choosing your path?",
  },
  ctaBody: {
    es: "Habla con Langia y te ayudaremos a encontrar el programa que se ajusta a tus metas.",
    pt: "Fale com a Langia e ajudaremos você a encontrar o programa que combina com seus objetivos.",
    en: "Talk to Langia and we'll help you find the program that fits your goals.",
  },
  cta: {
    es: "Hablar con Langia",
    pt: "Falar com a Langia",
    en: "Talk to Langia",
  },
};

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-[#048EFF]">
      {children}
    </p>
  );
}

function CoverPreview({ post, large = false }: { post: BlogPost; large?: boolean }) {
  const height = large ? "min-h-[340px]" : "h-56";

  if (post.coverImageExists && post.coverImage) {
    return (
      <div
        className={`${height} rounded-[1.5rem] border border-[#E4EDF7] bg-cover bg-center`}
        style={{ backgroundImage: `url(${post.coverImage})` }}
      />
    );
  }

  return (
    <div className={`relative ${height} overflow-hidden rounded-[1.5rem] border border-[#E4EDF7] bg-[#F3F7FB]`}>
      <div className="absolute left-6 top-6 h-28 w-40 rounded-[1.25rem] border border-[#D8E6F4] bg-white" />
      <div className="absolute bottom-6 right-6 h-32 w-48 rounded-[1.5rem] border border-[#CFE5FA] bg-[#EAF6FF]" />
      <div className="absolute bottom-12 left-8 h-3 w-28 rounded-full bg-[#048EFF]/35" />
      <div className="absolute bottom-7 left-8 h-3 w-44 rounded-full bg-[#D8E6F4]" />
      <div className="absolute right-14 top-14 h-10 w-10 rounded-full bg-[#F3B737]" />
    </div>
  );
}

function PostMeta({ post }: { post: BlogPost }) {
  return (
    <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#048EFF]">
      <span><LocalizedCategory category={post.category} /></span>
      <span>/</span>
      <time dateTime={post.date}><LocalizedDate date={post.date} /></time>
      <span>/</span>
      <span>{post.readingTime} <CommonLabel label="minRead" /></span>
    </div>
  );
}

function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group rounded-[1.75rem] border border-[#E4EDF7] bg-white p-5 shadow-[0_16px_42px_rgba(11,31,58,0.055)] transition hover:-translate-y-1 hover:border-[#048EFF]/45"
    >
      <CoverPreview post={post} />
      <div className="mt-6">
        <PostMeta post={post} />
        <h2 className="mt-4 font-heading text-2xl font-semibold leading-tight text-[#0B1F3A]">
          {post.title}
        </h2>
        <p className="mt-4 text-base leading-7 text-[#42526A]">{post.description}</p>
        <p className="mt-5 text-sm font-semibold text-[#0B1F3A]">{post.authorName}</p>
        <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#048EFF]">
          <CommonLabel label="readArticle" />
          <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export default function BlogIndexPage() {
  const posts = getPublishedPosts();
  const featuredPost = posts.find((post) => post.featured) ?? posts[0];
  const gridPosts = featuredPost
    ? posts.filter((post) => post.slug !== featuredPost.slug)
    : posts;

  return (
    <main className="min-h-screen bg-white text-[#0B1F3A]">
      <SiteNavbar variant="light" />

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <Eyebrow><LocalizedText content={pageCopy.eyebrow} /></Eyebrow>
          <h1 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            <LocalizedText content={pageCopy.title} />
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#42526A] sm:text-lg">
            <LocalizedText content={pageCopy.body} />
          </p>
        </div>
      </section>

      {featuredPost ? (
        <section className="bg-[#F3F7FB] px-4 py-16 sm:px-6 lg:px-10">
          <div className="mx-auto grid max-w-[1180px] gap-8 rounded-[2rem] border border-[#E4EDF7] bg-white p-5 shadow-[0_18px_60px_rgba(11,31,58,0.055)] lg:grid-cols-[0.95fr_1.05fr] lg:items-center sm:p-7">
            <CoverPreview post={featuredPost} large />
            <div className="p-2 sm:p-4">
              <Eyebrow><CommonLabel label="featured" /></Eyebrow>
              <PostMeta post={featuredPost} />
              <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight text-[#0B1F3A] sm:text-4xl">
                {featuredPost.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-[#42526A]">{featuredPost.description}</p>
              <p className="mt-5 text-sm font-semibold text-[#0B1F3A]">{featuredPost.authorName}</p>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className={siteButtonClass({ className: "mt-8" })}
              >
                <CommonLabel label="readArticle" />
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-white px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1180px]">
          <div className="flex flex-wrap gap-3">
            {blogCategories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-[#D8E6F4] bg-[#F3F7FB] px-4 py-2 text-sm font-semibold text-[#0B1F3A]"
              >
                <LocalizedCategory category={category} />
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1180px] gap-5 md:grid-cols-2 xl:grid-cols-3">
          {gridPosts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1180px] gap-8 overflow-hidden rounded-[2rem] bg-[#0B1F3A] p-8 text-white shadow-[0_28px_90px_rgba(11,31,58,0.2)] md:grid-cols-[1fr_auto] md:items-center sm:p-10">
          <div>
            <h2 className="font-heading text-3xl font-semibold leading-tight sm:text-4xl">
              <LocalizedText content={pageCopy.ctaTitle} />
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/70"><LocalizedText content={pageCopy.ctaBody} /></p>
          </div>
          <Link
            href="/contact"
            className={siteButtonClass({ variant: "dark" })}
          >
            <LocalizedText content={pageCopy.cta} />
            <ArrowIcon />
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
