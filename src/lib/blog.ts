import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";

import matter from "gray-matter";

const BLOG_CONTENT_DIR = path.join(process.cwd(), "src/content/blog");
const PUBLIC_DIR = path.join(process.cwd(), "public");
const DEFAULT_AUTHOR_NAME = "Langia Editorial Team";
const DEFAULT_CTA_LABEL = "Talk to Langia";
const DEFAULT_CTA_HREF = "/contact";

export const blogCategories = [
  "Learning Guides",
  "Test Prep",
  "Kids & Teens",
  "Corporate",
  "Languages",
  "Immigration / Study Abroad",
  "Langia News",
] as const;

export type BlogLanguage = "es" | "pt" | "en";
export type BlogCategory = (typeof blogCategories)[number];

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  language: BlogLanguage;
  category: BlogCategory;
  coverImage?: string;
  coverImageExists: boolean;
  authorName: string;
  authorRole?: string;
  authorImage?: string;
  authorImageExists: boolean;
  published: boolean;
  featured?: boolean;
  ctaLabel: string;
  ctaHref: string;
  readingTime: number;
  content: string;
};

type BlogFrontmatter = {
  title?: unknown;
  description?: unknown;
  date?: unknown;
  language?: unknown;
  category?: unknown;
  coverImage?: unknown;
  authorName?: unknown;
  authorRole?: unknown;
  authorImage?: unknown;
  published?: unknown;
  featured?: unknown;
  ctaLabel?: unknown;
  ctaHref?: unknown;
};

function isBlogLanguage(value: unknown): value is BlogLanguage {
  return value === "es" || value === "pt" || value === "en";
}

function isBlogCategory(value: unknown): value is BlogCategory {
  return typeof value === "string" && blogCategories.includes(value as BlogCategory);
}

function requireString(value: unknown, key: string, slug: string): string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Blog post "${slug}" is missing a valid "${key}" field.`);
  }

  return value.trim();
}

function optionalString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : undefined;
}

function requireBoolean(value: unknown, key: string, slug: string): boolean {
  if (typeof value !== "boolean") {
    throw new Error(`Blog post "${slug}" is missing a valid "${key}" field.`);
  }

  return value;
}

function optionalBoolean(value: unknown): boolean | undefined {
  return typeof value === "boolean" ? value : undefined;
}

function publicFileExists(publicPath?: string): boolean {
  if (!publicPath?.startsWith("/")) {
    return false;
  }

  return existsSync(path.join(PUBLIC_DIR, publicPath));
}

export function calculateReadingTime(content: string): number {
  const words = content
    .replace(/[`*_>#\-[\]()]/gu, " ")
    .split(/\s+/u)
    .filter(Boolean);

  return Math.max(1, Math.ceil(words.length / 200));
}

function parseBlogFile(fileName: string): BlogPost {
  const slug = fileName.replace(/\.md$/u, "");
  const filePath = path.join(BLOG_CONTENT_DIR, fileName);
  const fileContent = readFileSync(filePath, "utf8");
  const parsed = matter(fileContent);
  const frontmatter = parsed.data as BlogFrontmatter;
  const language = frontmatter.language;
  const category = frontmatter.category;

  if (!isBlogLanguage(language)) {
    throw new Error(`Blog post "${slug}" is missing a valid "language" field.`);
  }

  if (!isBlogCategory(category)) {
    throw new Error(`Blog post "${slug}" is missing a supported "category" field.`);
  }

  const coverImage = optionalString(frontmatter.coverImage);
  const authorImage = optionalString(frontmatter.authorImage);
  const content = parsed.content.trim();

  return {
    slug,
    title: requireString(frontmatter.title, "title", slug),
    description: requireString(frontmatter.description, "description", slug),
    date: requireString(frontmatter.date, "date", slug),
    language,
    category,
    coverImage,
    coverImageExists: publicFileExists(coverImage),
    authorName: optionalString(frontmatter.authorName) ?? DEFAULT_AUTHOR_NAME,
    authorRole: optionalString(frontmatter.authorRole),
    authorImage,
    authorImageExists: publicFileExists(authorImage),
    published: requireBoolean(frontmatter.published, "published", slug),
    featured: optionalBoolean(frontmatter.featured),
    ctaLabel: optionalString(frontmatter.ctaLabel) ?? DEFAULT_CTA_LABEL,
    ctaHref: optionalString(frontmatter.ctaHref) ?? DEFAULT_CTA_HREF,
    readingTime: calculateReadingTime(content),
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  return readdirSync(BLOG_CONTENT_DIR)
    .filter((fileName) => fileName.endsWith(".md"))
    .map(parseBlogFile)
    .sort((firstPost, secondPost) => secondPost.date.localeCompare(firstPost.date));
}

export function getPublishedPosts(): BlogPost[] {
  return getAllPosts().filter((post) => post.published);
}

export function getPostBySlug(slug: string): BlogPost | null {
  return getPublishedPosts().find((post) => post.slug === slug) ?? null;
}

export function getLatestPosts(limit: number): BlogPost[] {
  return getPublishedPosts().slice(0, limit);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return getPublishedPosts().filter((post) => post.category === category);
}

export const getPublishedBlogPosts = getPublishedPosts;
export const getPublishedBlogPost = getPostBySlug;
export const getLatestPublishedBlogPosts = getLatestPosts;
