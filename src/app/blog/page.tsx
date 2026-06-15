import type { Metadata } from "next";
import Link from "next/link";

import { MarketingPageShell } from "@/components/MarketingPageShell";
import { pagesContent } from "@/content/pages";
import { getPublishedBlogPosts, type BlogPost } from "@/lib/blog";

const content = pagesContent.es.blog;

export const metadata: Metadata = {
  title: `${content.title} | Langia Online`,
  description: content.subtitle,
};

function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00.000Z`));
}

function CoverPreview({ post }: { post: BlogPost }) {
  if (post.coverImageExists) {
    return (
      <div
        className="h-56 rounded-[1.5rem] border border-[#E4EDF7] bg-cover bg-center"
        style={{ backgroundImage: `url(${post.coverImage})` }}
      />
    );
  }

  return (
    <div className="relative h-56 overflow-hidden rounded-[1.5rem] border border-[#E4EDF7] bg-[#F3F7FB]">
      <div className="absolute left-6 top-6 h-28 w-40 rounded-[1.25rem] border border-[#D8E6F4] bg-[#FFFFFF]" />
      <div className="absolute bottom-6 right-6 h-32 w-48 rounded-[1.5rem] border border-[#CFE5FA] bg-[#EAF6FF]" />
      <div className="absolute bottom-10 left-8 h-3 w-28 rounded-full bg-[#048EFF]/35" />
      <div className="absolute bottom-6 left-8 h-3 w-40 rounded-full bg-[#D8E6F4]" />
    </div>
  );
}

export default function BlogIndexPage() {
  const posts = getPublishedBlogPosts();

  return (
    <MarketingPageShell content={content}>
      <section className="px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1100px] gap-5 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-[1.75rem] border border-[#E4EDF7] bg-[#FFFFFF] p-5 shadow-[0_16px_42px_rgba(11,31,58,0.055)] transition hover:-translate-y-1 hover:border-[#048EFF]/45"
            >
              <CoverPreview post={post} />
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#048EFF]">
                <span>{post.category}</span>
                <span>/</span>
                <span>{post.language}</span>
                <span>/</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <h2 className="mt-4 font-heading text-2xl font-semibold leading-tight text-[#0B1F3A]">
                {post.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-[#42526A]">
                {post.description}
              </p>
              <span className="mt-7 inline-flex text-sm font-semibold text-[#048EFF]">
                Read article
              </span>
            </Link>
          ))}
        </div>
      </section>
    </MarketingPageShell>
  );
}
