import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { CommonLabel, LocalizedDate, LocalizedText } from "@/components/site/LocalizedText";
import { siteButtonClass } from "@/components/site/buttonStyles";
import { getPostBySlug, getPublishedPosts, type BlogPost } from "@/lib/blog";

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

function CoverHero({ post }: { post: BlogPost }) {
  if (post.coverImageExists && post.coverImage) {
    return (
      <div
        className="min-h-[420px] rounded-[2rem] border border-[#E4EDF7] bg-cover bg-center shadow-[0_20px_70px_rgba(11,31,58,0.08)]"
        style={{ backgroundImage: `url(${post.coverImage})` }}
      />
    );
  }

  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[#E4EDF7] bg-[#F3F7FB] shadow-[0_20px_70px_rgba(11,31,58,0.08)]">
      <div className="absolute left-8 top-8 h-56 w-[42%] rounded-[1.75rem] border border-[#D8E6F4] bg-white" />
      <div className="absolute bottom-8 left-[18%] h-44 w-[46%] rounded-[1.75rem] border border-[#CFE5FA] bg-[#EAF6FF]" />
      <div className="absolute right-8 top-16 h-64 w-[34%] rounded-[2rem] border border-[#D8E6F4] bg-white" />
      <div className="absolute bottom-12 right-16 h-3 w-40 rounded-full bg-[#048EFF]/35" />
      <div className="absolute bottom-7 right-16 h-3 w-56 rounded-full bg-[#D8E6F4]" />
      <div className="absolute right-20 top-28 h-10 w-10 rounded-full bg-[#F3B737]" />
    </div>
  );
}

function AuthorAvatar({ post }: { post: BlogPost }) {
  if (post.authorImageExists && post.authorImage) {
    return (
      <span
        className="h-12 w-12 rounded-full border border-[#D8E6F4] bg-cover bg-center"
        style={{ backgroundImage: `url(${post.authorImage})` }}
        aria-hidden="true"
      />
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
    <span className="grid h-12 w-12 place-items-center rounded-full border border-[#CFE5FA] bg-[#EAF6FF] font-heading text-sm font-semibold text-[#048EFF]">
      {initials}
    </span>
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
        <Link key={`${match.index}-link`} href={match[4]} className="font-semibold text-[#048EFF] hover:text-[#0B1F3A]">
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
    <div className="mx-auto max-w-3xl">
      {blocks.map((block) => {
        const trimmed = block.trim();

        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={trimmed} className="mt-12 font-heading text-3xl font-semibold leading-tight text-[#0B1F3A]">
              {renderInlineMarkdown(trimmed.replace(/^## /u, ""))}
            </h2>
          );
        }

        if (trimmed.startsWith("# ")) {
          return (
            <h2 key={trimmed} className="mt-12 font-heading text-3xl font-semibold leading-tight text-[#0B1F3A]">
              {renderInlineMarkdown(trimmed.replace(/^# /u, ""))}
            </h2>
          );
        }

        if (trimmed.startsWith("> ")) {
          return (
            <blockquote key={trimmed} className="mt-8 rounded-[1.5rem] border border-[#E4EDF7] bg-[#F3F7FB] p-6 text-lg leading-8 text-[#0B1F3A]">
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
            <ul key={trimmed} className="mt-6 grid gap-3 text-lg leading-8 text-[#42526A]">
              {items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#048EFF]" />
                  <span>{renderInlineMarkdown(item)}</span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={trimmed} className="mt-6 text-lg leading-9 text-[#42526A]">
            {renderInlineMarkdown(trimmed)}
          </p>
        );
      })}
    </div>
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

  const images = post.coverImage
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

  return (
    <main className="min-h-screen bg-[#F3F7FB] text-[#0B1F3A]">
      <SiteNavbar variant="light" />
      <section className="bg-[#F3F7FB] px-4 py-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1100px] rounded-[2rem] border border-[#E4EDF7] bg-white px-6 py-12 shadow-[0_18px_60px_rgba(11,31,58,0.055)] sm:px-10 lg:px-14">
          <Link
            href="/blog"
            className={siteButtonClass({ size: "sm", variant: "secondary" })}
          >
            <CommonLabel label="backToResources" />
          </Link>
          <div className="mt-14 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#048EFF]">
            <span>{post.category}</span>
            <span>/</span>
            <span>{post.language}</span>
            <span>/</span>
            <time dateTime={post.date}><LocalizedDate date={post.date} /></time>
            <span>/</span>
            <span>{post.readingTime} <CommonLabel label="minRead" /></span>
          </div>
          <h1 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-tight text-[#0B1F3A] sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#42526A] sm:text-lg">
            {post.description}
          </p>
          <div className="mt-8 flex items-center gap-4">
            <AuthorAvatar post={post} />
            <div>
              <p className="font-heading text-sm font-semibold text-[#0B1F3A]">{post.authorName}</p>
              {post.authorRole ? <p className="mt-1 text-sm text-[#6B7A90]">{post.authorRole}</p> : null}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1100px]">
          <CoverHero post={post} />
          <article className="py-12">
            <MarkdownBody content={post.content} />
          </article>
        </div>
      </section>

      <section className="bg-white px-4 pb-20 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[980px] gap-8 overflow-hidden rounded-[2rem] bg-[#0B1F3A] p-8 text-white shadow-[0_28px_90px_rgba(11,31,58,0.2)] md:grid-cols-[1fr_auto] md:items-center sm:p-10">
          <div>
            <h2 className="font-heading text-3xl font-semibold leading-tight sm:text-4xl">
              {localizedCta.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/70">{localizedCta.body}</p>
          </div>
          <Link
            href={post.ctaHref}
            className={siteButtonClass({ variant: "dark" })}
          >
            <LocalizedText content={{ es: ctaCopy.es.button, pt: ctaCopy.pt.button, en: post.ctaLabel || localizedCta.button }} />
            <ArrowIcon />
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
