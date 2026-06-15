import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getPublishedBlogPost,
  getPublishedBlogPosts,
  type BlogPost,
} from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00.000Z`));
}

function CoverHero({ post }: { post: BlogPost }) {
  if (post.coverImageExists) {
    return (
      <div
        className="min-h-[360px] rounded-[2.5rem] border border-[#E8E8E8] bg-cover bg-center shadow-[0_24px_80px_rgba(0,0,0,0.1)]"
        style={{ backgroundImage: `url(${post.coverImage})` }}
      />
    );
  }

  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[2.5rem] border border-[#E8E8E8] bg-[#F2F2F2] shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
      <div className="absolute left-8 top-8 h-56 w-[42%] rounded-[2.25rem] border border-[#E8E8E8] bg-[#FFFFFF]" />
      <div className="absolute bottom-8 left-[18%] h-44 w-[46%] rounded-[2.25rem] border border-[#E8E8E8] bg-[#D4D4D4]" />
      <div className="absolute right-8 top-16 h-64 w-[34%] rounded-[2.5rem] border border-[#E8E8E8] bg-[#FFFFFF]" />
      <div className="absolute bottom-12 right-16 h-3 w-40 rounded-full bg-[#A3A3A3]" />
      <div className="absolute bottom-7 right-16 h-3 w-56 rounded-full bg-[#E8E8E8]" />
    </div>
  );
}

function renderInlineMarkdown(text: string): string {
  return text.replace(/\*\*(.*?)\*\*/gu, "$1").replace(/\*(.*?)\*/gu, "$1");
}

function MarkdownBody({ body }: { body: string }) {
  const blocks = body.split(/\n{2,}/u);

  return (
    <div className="mx-auto max-w-3xl">
      {blocks.map((block) => {
        const trimmed = block.trim();

        if (trimmed.startsWith("## ")) {
          return (
            <h2
              key={trimmed}
              className="mt-12 font-heading text-3xl font-semibold leading-tight text-[#111111]"
            >
              {renderInlineMarkdown(trimmed.replace(/^## /u, ""))}
            </h2>
          );
        }

        if (trimmed.startsWith("# ")) {
          return (
            <h2
              key={trimmed}
              className="mt-12 font-heading text-3xl font-semibold leading-tight text-[#111111]"
            >
              {renderInlineMarkdown(trimmed.replace(/^# /u, ""))}
            </h2>
          );
        }

        return (
          <p key={trimmed} className="mt-6 text-lg leading-9 text-[#262626]">
            {renderInlineMarkdown(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

export function generateStaticParams(): Array<{ slug: string }> {
  return getPublishedBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPublishedBlogPost(slug);

  if (!post) {
    return {
      title: "Blog post not found | Langia Online",
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
    title: `${post.title} | Langia Online`,
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
  const post = getPublishedBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#111111]">
      <section className="bg-[#F2F2F2] px-4 py-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1100px] rounded-[2.5rem] border border-[#262626] bg-[#111111] px-6 py-16 text-[#FFFFFF] shadow-[0_30px_100px_rgba(0,0,0,0.18)] sm:px-10 lg:px-14">
          <Link
            href="/blog"
            className="inline-flex rounded-full border border-[#262626] px-4 py-2 text-sm font-semibold text-[#D4D4D4] transition hover:bg-[#262626] hover:text-[#FFFFFF]"
          >
            Back to blog
          </Link>
          <div className="mt-14 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#A3A3A3]">
            <span>{post.category}</span>
            <span>/</span>
            <span>{post.language}</span>
            <span>/</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <h1 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-tight text-balance sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#D4D4D4] sm:text-lg">
            {post.description}
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1100px]">
          <CoverHero post={post} />
          <article className="py-12">
            <MarkdownBody body={post.body} />
          </article>
        </div>
      </section>
    </main>
  );
}
