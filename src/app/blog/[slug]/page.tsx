import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import {
  ArrowIcon,
  EditorialHeading,
  FinalCTA,
  MarketingSection,
  MediaFrame,
  SectionEyebrow,
  SiteContainer,
} from "@/components/site/MarketingPrimitives";
import { LocalizedLink as Link } from "@/components/site/LocalizedLink";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { BlogLanguageNote, CommonLabel, LocalizedDate, LocalizedText } from "@/components/site/LocalizedText";
import { siteButtonClass } from "@/components/site/buttonStyles";
import { getPostBySlug, getPublishedPosts, type BlogPost } from "@/lib/blog";

import { BlogCategoryLabel, BlogLanguageLabel } from "../BlogLocalized";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const ctaCopy = {
  en: {
    title: "Ready to take the next step?",
    body: "Talk to Langia and we'll help you choose the path that fits your goals.",
    button: "Talk to Langia",
  },
  es: {
    title: "¿Listo para dar el siguiente paso?",
    body: "Habla con Langia y te ayudaremos a elegir la ruta que se ajusta a tus metas.",
    button: "Hablar con Langia",
  },
  pt: {
    title: "Pronto para dar o próximo passo?",
    body: "Fale com a Langia e ajudaremos você a escolher a rota que combina com seus objetivos.",
    button: "Falar com a Langia",
  },
};

const relatedCopy = {
  eyebrow: {
    es: "Más recursos",
    pt: "Mais recursos",
    en: "More resources",
  },
  title: {
    es: "Continúa explorando.",
    pt: "Continue explorando.",
    en: "Continue exploring.",
  },
};

function AuthorAvatar({ post }: { post: BlogPost }) {
  if (post.authorImageExists && post.authorImage) {
    return (
      <span className="relative h-12 w-12 overflow-hidden rounded-xl border border-[#CFE5FA] bg-[#EAF6FF]">
        <Image src={post.authorImage} alt="" fill sizes="48px" className="object-contain p-2" />
      </span>
    );
  }

  const initials = post.authorName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <span
      aria-hidden="true"
      className="grid h-12 w-12 place-items-center rounded-xl border border-[#CFE5FA] bg-[#EAF6FF] font-heading text-sm font-semibold text-[#0B1F3A]"
    >
      {initials}
    </span>
  );
}

function ArticleMeta({ post }: { post: BlogPost }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#52657A]">
      <span className="text-[#0B1F3A]"><BlogCategoryLabel category={post.category} /></span>
      <span aria-hidden="true">/</span>
      <span><BlogLanguageLabel postLanguage={post.language} /></span>
      <span aria-hidden="true">/</span>
      <time dateTime={post.date}><LocalizedDate date={post.date} /></time>
      <span aria-hidden="true">/</span>
      <span>{post.readingTime} <CommonLabel label="minRead" /></span>
    </div>
  );
}

function renderInlineMarkdown(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /(\*\*([^*]+)\*\*|\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[^)\s]+)\))/gu;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[2]) {
      nodes.push(
        <strong key={`${match.index}-strong`} className="font-semibold text-[#0B1F3A]">
          {match[2]}
        </strong>,
      );
    } else if (match[3] && match[4]) {
      nodes.push(
        <Link
          key={`${match.index}-link`}
          href={match[4]}
          className="font-semibold text-[#0B1F3A] underline decoration-[#048EFF] decoration-2 underline-offset-4 transition-colors hover:text-[#048EFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#048EFF]"
        >
          {match[3]}
        </Link>,
      );
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function MarkdownBody({ content }: { content: string }) {
  const blocks = content.split(/\n{2,}/u);

  return (
    <>
      {blocks.map((block, index) => {
        const trimmed = block.trim();
        const key = `${index}-${trimmed.slice(0, 36)}`;

        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={key} className="mt-14 font-heading text-[clamp(1.8rem,3vw,2.35rem)] font-medium leading-[1.12] tracking-[-0.04em] text-[#0B1F3A]">
              {renderInlineMarkdown(trimmed.replace(/^## /u, ""))}
            </h2>
          );
        }

        if (trimmed.startsWith("# ")) {
          return (
            <h2 key={key} className="mt-14 font-heading text-[clamp(1.8rem,3vw,2.35rem)] font-medium leading-[1.12] tracking-[-0.04em] text-[#0B1F3A]">
              {renderInlineMarkdown(trimmed.replace(/^# /u, ""))}
            </h2>
          );
        }

        if (trimmed.startsWith("> ")) {
          return (
            <blockquote key={key} className="mt-10 border-l-2 border-[#048EFF] pl-6 font-heading text-xl leading-9 text-[#0B1F3A] sm:pl-8 sm:text-2xl">
              {renderInlineMarkdown(trimmed.replace(/^>\s?/u, ""))}
            </blockquote>
          );
        }

        if (/^- /mu.test(trimmed)) {
          const items = trimmed
            .split("\n")
            .map((item) => item.replace(/^- /u, "").trim())
            .filter(Boolean);

          return (
            <ul key={key} className="mt-7 list-disc space-y-3 pl-6 text-[1.0625rem] leading-8 text-[#52657A] marker:text-[#048EFF] sm:text-lg">
              {items.map((item, itemIndex) => (
                <li key={`${itemIndex}-${item}`}>{renderInlineMarkdown(item)}</li>
              ))}
            </ul>
          );
        }

        return (
          <p key={key} className="mt-7 text-[1.0625rem] leading-[1.8] text-[#52657A] sm:text-lg sm:leading-[1.75]">
            {renderInlineMarkdown(trimmed)}
          </p>
        );
      })}
    </>
  );
}

export function generateStaticParams(): Array<{ slug: string }> {
  return getPublishedPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog post not found | Langia",
    };
  }

  const images = post.coverImageExists && post.coverImage
    ? [
        {
          url: post.coverImage,
          alt: post.title,
        },
      ]
    : undefined;

  return {
    title: `${post.title} | Langia`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const localizedCta = ctaCopy[post.language];
  const relatedPosts = getPublishedPosts()
    .filter((candidate) => candidate.slug !== post.slug)
    .sort((first, second) => Number(second.category === post.category) - Number(first.category === post.category))
    .slice(0, 2);

  return (
    <>
      <SiteNavbar variant="light" />
      <main className="min-h-screen bg-white text-[#0B1F3A]">
        <section className="bg-white px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:px-12 lg:pb-28 lg:pt-40">
          <SiteContainer>
            <Link
              href="/blog"
              className={siteButtonClass({ className: "min-h-11", size: "sm", variant: "secondary" })}
            >
              <ArrowIcon className="h-4 w-4 rotate-180" />
              <CommonLabel label="backToResources" />
            </Link>

            <div className="mt-12 max-w-5xl">
              <ArticleMeta post={post} />
              <div lang={post.language}>
                <EditorialHeading as="h1" className="mt-7 max-w-[16ch]" size="hero">
                  {post.title}
                </EditorialHeading>
                <p className="mt-7 max-w-3xl text-lg leading-8 text-[#52657A]">{post.description}</p>
              </div>
            </div>

            <BlogLanguageNote postLanguage={post.language} />
            <div className="mt-8 flex items-center gap-4">
              <AuthorAvatar post={post} />
              <div lang={post.language}>
                <p className="font-heading text-sm font-semibold text-[#0B1F3A]">{post.authorName}</p>
                {post.authorRole ? <p className="mt-1 text-sm text-[#52657A]">{post.authorRole}</p> : null}
              </div>
            </div>
          </SiteContainer>
        </section>

        <MarketingSection tone="mist">
          <SiteContainer>
            {post.coverImageExists && post.coverImage ? (
              <MediaFrame
                src={post.coverImage}
                alt=""
                aspectClassName="aspect-[4/3] sm:aspect-[16/9]"
                className="mb-16 lg:mb-24"
                sizes="(min-width: 1360px) 1360px, 100vw"
              />
            ) : null}
            <article lang={post.language} className="mx-auto max-w-[70ch]">
              <MarkdownBody content={post.content} />
            </article>
          </SiteContainer>
        </MarketingSection>

        {relatedPosts.length > 0 ? (
          <MarketingSection tone="white">
            <SiteContainer>
              <SectionEyebrow><LocalizedText content={relatedCopy.eyebrow} /></SectionEyebrow>
              <EditorialHeading as="h2" className="mt-7 max-w-[13ch]">
                <LocalizedText content={relatedCopy.title} />
              </EditorialHeading>
              <div className="mt-12 grid gap-x-16 gap-y-12 md:grid-cols-2">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.slug} className="border-t border-[#0B1F3A]/18 pt-7">
                    <ArticleMeta post={relatedPost} />
                    <div lang={relatedPost.language}>
                      <EditorialHeading as="h3" className="mt-5 max-w-[19ch]" size="card">
                        {relatedPost.title}
                      </EditorialHeading>
                      <p className="mt-5 max-w-xl text-base leading-8 text-[#52657A]">{relatedPost.description}</p>
                    </div>
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="mt-7 inline-flex min-h-11 items-center gap-3 border-b border-[#0B1F3A]/35 text-sm font-semibold text-[#0B1F3A] transition-colors hover:border-[#048EFF] hover:text-[#048EFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#048EFF]"
                    >
                      <CommonLabel label="readArticle" />
                      <ArrowIcon />
                    </Link>
                  </article>
                ))}
              </div>
            </SiteContainer>
          </MarketingSection>
        ) : null}

        <FinalCTA
          title={<span lang={post.language}>{localizedCta.title}</span>}
          body={<span lang={post.language}>{localizedCta.body}</span>}
          primary={{
            href: post.ctaHref,
            label: <LocalizedText content={{ es: ctaCopy.es.button, pt: ctaCopy.pt.button, en: post.ctaLabel || localizedCta.button }} />,
          }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
