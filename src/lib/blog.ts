import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDir = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  author: string;
  authorRole: string;
  authorBio: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  category: string;
  tags: string[];
  image: string;
  imageAlt: string;
  ogImage: string;
  featured: boolean;
  draft: boolean;
  canonical: string;
  affiliateLink: string;
  faqSchema: boolean;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(contentDir)) return [];
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));
  const posts = files
    .map((file) => getPostBySlug(file.replace(".mdx", "")))
    .filter((p): p is BlogPost => p !== null && !p.draft)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title || "",
    seoTitle: data.seoTitle || data.title || "",
    description: data.description || "",
    author: data.author || "Jules",
    authorRole: data.authorRole || "Fondateur Rekovr · Expert Certifié Kanal",
    authorBio:
      data.authorBio ||
      "Expert e-commerce Shopify depuis 2019. Premier expert certifié Kanal en France.",
    publishedAt: data.publishedAt || "",
    updatedAt: data.updatedAt || data.publishedAt || "",
    readingTime: data.readingTime || Math.ceil(stats.minutes),
    category: data.category || "whatsapp-marketing",
    tags: data.tags || [],
    image: data.image || "/images/blog/default-hero.webp",
    imageAlt: data.imageAlt || data.title || "",
    ogImage: data.ogImage || data.image || "/images/blog/default-hero.webp",
    featured: data.featured || false,
    draft: data.draft || false,
    canonical:
      data.canonical || `https://getrevokr.com/blog/${slug}`,
    affiliateLink:
      data.affiliateLink ||
      "https://apps.shopify.com/kanal-marketing-ai?ref=rekovr",
    faqSchema: data.faqSchema || false,
    content,
  };
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter((p) => p.tags.includes(tag));
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter((p) => p.featured).slice(0, 3);
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();
  posts.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}

export function getRelatedPosts(currentSlug: string, tags: string[], limit = 3): BlogPost[] {
  const all = getAllPosts().filter((p) => p.slug !== currentSlug);
  const scored = all.map((post) => ({
    post,
    score: post.tags.filter((t) => tags.includes(t)).length,
  }));
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.post);
}
