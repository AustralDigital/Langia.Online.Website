import { EditorialHomepage } from "@/components/home/EditorialHomepage";
import { getLatestPublishedBlogPosts } from "@/lib/blog";

export default function HomePage() {
  const articles = getLatestPublishedBlogPosts(3).map((post) => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    category: post.category,
    coverImage: post.coverImage,
    coverImageExists: post.coverImageExists,
    readingTime: post.readingTime,
  }));

  return <EditorialHomepage articles={articles} />;
}
