import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const BLOG_CONTENT_DIR = path.join(process.cwd(), "src/content/blog");
const PUBLIC_DIR = path.join(process.cwd(), "public");

export type BlogLanguage = "es" | "pt" | "en";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  language: BlogLanguage;
  coverImage: string;
  coverImageExists: boolean;
  category: string;
  published: boolean;
  body: string;
};

type BlogFrontmatter = Omit<BlogPost, "slug" | "body" | "coverImageExists">;

function parseFrontmatterValue(value: string): string | boolean {
  const trimmed = value.trim();

  if (trimmed === "true") {
    return true;
  }

  if (trimmed === "false") {
    return false;
  }

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }

  return trimmed;
}

function isBlogLanguage(value: unknown): value is BlogLanguage {
  return value === "es" || value === "pt" || value === "en";
}

function requireString(
  frontmatter: Record<string, string | boolean>,
  key: keyof BlogFrontmatter,
  slug: string,
): string {
  const value = frontmatter[key];

  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`Blog post "${slug}" is missing a valid "${key}" field.`);
  }

  return value;
}

function requireBoolean(
  frontmatter: Record<string, string | boolean>,
  key: keyof BlogFrontmatter,
  slug: string,
): boolean {
  const value = frontmatter[key];

  if (typeof value !== "boolean") {
    throw new Error(`Blog post "${slug}" is missing a valid "${key}" field.`);
  }

  return value;
}

function parseBlogFile(fileName: string): BlogPost {
  const slug = fileName.replace(/\.md$/, "");
  const filePath = path.join(BLOG_CONTENT_DIR, fileName);
  const fileContent = readFileSync(filePath, "utf8");
  const match = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/u.exec(fileContent);

  if (!match) {
    throw new Error(`Blog post "${slug}" must start with frontmatter.`);
  }

  const frontmatter = match[1].split("\n").reduce<Record<string, string | boolean>>(
    (fields, line) => {
      const separatorIndex = line.indexOf(":");

      if (separatorIndex === -1) {
        return fields;
      }

      const key = line.slice(0, separatorIndex).trim();
      const value = line.slice(separatorIndex + 1);

      return {
        ...fields,
        [key]: parseFrontmatterValue(value),
      };
    },
    {},
  );

  const language = frontmatter.language;

  if (!isBlogLanguage(language)) {
    throw new Error(`Blog post "${slug}" is missing a valid "language" field.`);
  }

  const coverImage = requireString(frontmatter, "coverImage", slug);
  const publicImagePath = coverImage.startsWith("/")
    ? path.join(PUBLIC_DIR, coverImage)
    : "";

  return {
    slug,
    title: requireString(frontmatter, "title", slug),
    description: requireString(frontmatter, "description", slug),
    date: requireString(frontmatter, "date", slug),
    language,
    coverImage,
    coverImageExists: publicImagePath.length > 0 && existsSync(publicImagePath),
    category: requireString(frontmatter, "category", slug),
    published: requireBoolean(frontmatter, "published", slug),
    body: match[2].trim(),
  };
}

export function getAllBlogPosts(): BlogPost[] {
  return readdirSync(BLOG_CONTENT_DIR)
    .filter((fileName) => fileName.endsWith(".md"))
    .map(parseBlogFile)
    .sort((firstPost, secondPost) =>
      secondPost.date.localeCompare(firstPost.date),
    );
}

export function getPublishedBlogPosts(): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.published);
}

export function getLatestPublishedBlogPosts(limit: number): BlogPost[] {
  return getPublishedBlogPosts().slice(0, limit);
}

export function getPublishedBlogPost(slug: string): BlogPost | null {
  return getPublishedBlogPosts().find((post) => post.slug === slug) ?? null;
}
