import type { Metadata } from "next";
import { LocalizedLink as Link } from "@/components/site/LocalizedLink";

import {
  ArrowIcon,
  EditorialHeading,
  FinalCTA,
  MarketingButton,
  MarketingSection,
  MediaFrame,
  PageHero,
  SectionEyebrow,
  SiteContainer,
} from "@/components/site/MarketingPrimitives";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { CommonLabel, LocalizedDate, LocalizedText } from "@/components/site/LocalizedText";
import { blogCategories, getPublishedPosts, type BlogPost } from "@/lib/blog";

import { BlogCategoryLabel } from "./BlogLocalized";

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
  topics: {
    es: "Temas",
    pt: "Temas",
    en: "Topics",
  },
  latest: {
    es: "Más lecturas",
    pt: "Mais leituras",
    en: "More reads",
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

function PostMedia({ large = false, post }: { large?: boolean; post: BlogPost }) {
  if (!post.coverImageExists || !post.coverImage) {
    return null;
  }

  return (
    <MediaFrame
      src={post.coverImage}
      alt=""
      aspectClassName={large ? "aspect-[4/3] lg:aspect-[16/11]" : "aspect-[4/3]"}
      sizes={large ? "(min-width: 1024px) 48vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
    />
  );
}

function PostMeta({ post }: { post: BlogPost }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#52657A]">
      <span className="text-[#0B1F3A]"><BlogCategoryLabel category={post.category} /></span>
      <span aria-hidden="true">/</span>
      <time dateTime={post.date}><LocalizedDate date={post.date} /></time>
      <span aria-hidden="true">/</span>
      <span>{post.readingTime} <CommonLabel label="minRead" /></span>
    </div>
  );
}

function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <article className="border-t border-[#0B1F3A]/18 pt-6">
      <Link
        href={`/blog/${post.slug}`}
        className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#048EFF] focus-visible:ring-offset-4"
      >
        <PostMedia post={post} />
        <div className={post.coverImageExists ? "mt-7" : ""}>
          <PostMeta post={post} />
          <div lang={post.language}>
            <EditorialHeading as="h2" className="mt-5 max-w-[19ch]" size="card">
              {post.title}
            </EditorialHeading>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#52657A]">{post.description}</p>
            <p className="mt-5 text-sm font-semibold text-[#0B1F3A]">{post.authorName}</p>
          </div>
          <span className="mt-7 inline-flex items-center gap-3 border-b border-[#0B1F3A]/35 pb-1 text-sm font-semibold text-[#0B1F3A] transition-colors group-hover:border-[#048EFF] group-hover:text-[#048EFF]">
            <CommonLabel label="readArticle" />
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </article>
  );
}

export default function BlogIndexPage() {
  const posts = getPublishedPosts();
  const featuredPost = posts.find((post) => post.featured) ?? posts[0];
  const gridPosts = featuredPost
    ? posts.filter((post) => post.slug !== featuredPost.slug)
    : posts;
  const featuredHasMedia = Boolean(featuredPost?.coverImageExists && featuredPost.coverImage);

  return (
    <>
      <SiteNavbar variant="light" />
      <main className="min-h-screen bg-white text-[#0B1F3A]">
        <PageHero
          tone="white"
          eyebrow={<LocalizedText content={pageCopy.eyebrow} />}
          title={<LocalizedText content={pageCopy.title} />}
          body={<LocalizedText content={pageCopy.body} />}
        />

        {featuredPost ? (
          <MarketingSection tone="mist">
            <SiteContainer>
              <article className={featuredHasMedia ? "grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:gap-20" : "max-w-5xl"}>
                {featuredHasMedia ? <PostMedia post={featuredPost} large /> : null}
                <div>
                  <SectionEyebrow><CommonLabel label="featured" /></SectionEyebrow>
                  <div className="mt-7"><PostMeta post={featuredPost} /></div>
                  <div lang={featuredPost.language}>
                    <EditorialHeading as="h2" className="mt-6 max-w-[17ch]" size="secondary">
                      {featuredPost.title}
                    </EditorialHeading>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-[#52657A]">{featuredPost.description}</p>
                    <p className="mt-5 text-sm font-semibold text-[#0B1F3A]">{featuredPost.authorName}</p>
                  </div>
                  <MarketingButton href={`/blog/${featuredPost.slug}`} className="mt-9">
                    <CommonLabel label="readArticle" />
                  </MarketingButton>
                </div>
              </article>
            </SiteContainer>
          </MarketingSection>
        ) : null}

        <MarketingSection tone="white">
          <SiteContainer>
            <SectionEyebrow><LocalizedText content={pageCopy.topics} /></SectionEyebrow>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              {blogCategories.map((category) => (
                <li key={category} className="border-b border-[#0B1F3A]/22 pb-1 text-sm font-semibold text-[#52657A]">
                  <BlogCategoryLabel category={category} />
                </li>
              ))}
            </ul>

            {gridPosts.length > 0 ? (
              <div className="mt-16">
                <SectionEyebrow><LocalizedText content={pageCopy.latest} /></SectionEyebrow>
                <div className="mt-9 grid gap-x-12 gap-y-16 md:grid-cols-2 lg:gap-x-20">
                  {gridPosts.map((post) => (
                    <ArticleCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>
            ) : null}
          </SiteContainer>
        </MarketingSection>

        <FinalCTA
          title={<LocalizedText content={pageCopy.ctaTitle} />}
          body={<LocalizedText content={pageCopy.ctaBody} />}
          primary={{ href: "/contact", label: <LocalizedText content={pageCopy.cta} /> }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
