import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import ReadingProgress from "@/components/blog/ReadingProgress";
import BlogHeader from "@/components/blog/BlogHeader";
import TableOfContents from "@/components/blog/TableOfContents";
import CTABanner from "@/components/blog/CTABanner";
import AuthorBox from "@/components/blog/AuthorBox";
import RelatedPosts from "@/components/blog/RelatedPosts";

/* ---------- Static params ---------- */

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

/* ---------- Metadata ---------- */

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Article introuvable | Rekovr" };

  return {
    title: post.seoTitle || post.title,
    description: post.description,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.description,
      url: `https://getrekovr.com/blog/${post.slug}`,
      siteName: "Rekovr",
      locale: "fr_FR",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: post.ogImage ? [{ url: post.ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle || post.title,
      description: post.description,
      images: post.ogImage ? [post.ogImage] : undefined,
    },
    alternates: {
      canonical: post.canonical,
    },
  };
}

/* ---------- Helpers ---------- */

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

interface Heading {
  id: string;
  text: string;
  level: number;
}

function extractHeadings(content: string): Heading[] {
  const headings: Heading[] = [];
  const regex = /^(#{2,3})\s+(.+)$/gm;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    headings.push({
      id: slugify(text),
      text,
      level,
    });
  }
  return headings;
}

/* ---------- MDX components ---------- */

function createMdxComponents() {
  return {
    h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
      const text = typeof children === "string" ? children : String(children);
      const id = slugify(text);
      return (
        <h2
          id={id}
          className="font-syne font-bold text-2xl md:text-3xl text-white mt-12 mb-4 scroll-mt-24"
          {...props}
        >
          {children}
        </h2>
      );
    },
    h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
      const text = typeof children === "string" ? children : String(children);
      const id = slugify(text);
      return (
        <h3
          id={id}
          className="font-syne font-bold text-xl md:text-2xl text-white mt-8 mb-3 scroll-mt-24"
          {...props}
        >
          {children}
        </h3>
      );
    },
    p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p className="text-white/60 leading-relaxed mb-6" {...props}>
        {children}
      </p>
    ),
    a: ({
      children,
      href,
      ...props
    }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a
        href={href}
        className="text-whatsapp hover:text-whatsapp-dark underline underline-offset-2 transition-colors"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    ),
    ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
      <ul
        className="text-white/60 space-y-2 mb-6 ml-6 list-disc marker:text-whatsapp/50"
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
      <ol
        className="text-white/60 space-y-2 mb-6 ml-6 list-decimal marker:text-whatsapp/50"
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
      <li className="leading-relaxed" {...props}>
        {children}
      </li>
    ),
    blockquote: ({
      children,
      ...props
    }: React.HTMLAttributes<HTMLQuoteElement>) => (
      <blockquote
        className="border-l-2 border-whatsapp/40 pl-6 py-2 my-6 text-white/50 italic"
        {...props}
      >
        {children}
      </blockquote>
    ),
    code: ({
      children,
      className,
      ...props
    }: React.HTMLAttributes<HTMLElement>) => {
      const isBlock = className?.includes("language-");
      if (isBlock) {
        return (
          <code className={`${className} block`} {...props}>
            {children}
          </code>
        );
      }
      return (
        <code
          className="bg-white/[0.06] text-whatsapp px-1.5 py-0.5 rounded text-sm"
          {...props}
        >
          {children}
        </code>
      );
    },
    pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
      <pre
        className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-4 overflow-x-auto mb-6 text-sm"
        {...props}
      >
        {children}
      </pre>
    ),
    hr: () => <hr className="border-white/[0.06] my-10" />,
    strong: ({
      children,
      ...props
    }: React.HTMLAttributes<HTMLElement>) => (
      <strong className="text-white font-semibold" {...props}>
        {children}
      </strong>
    ),
    table: ({
      children,
      ...props
    }: React.HTMLAttributes<HTMLTableElement>) => (
      <div className="overflow-x-auto mb-6">
        <table
          className="w-full text-sm text-white/60 border-collapse"
          {...props}
        >
          {children}
        </table>
      </div>
    ),
    th: ({
      children,
      ...props
    }: React.HTMLAttributes<HTMLTableCellElement>) => (
      <th
        className="text-left text-white font-syne font-semibold px-4 py-3 border-b border-white/[0.08] bg-white/[0.02]"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({
      children,
      ...props
    }: React.HTMLAttributes<HTMLTableCellElement>) => (
      <td
        className="px-4 py-3 border-b border-white/[0.06]"
        {...props}
      >
        {children}
      </td>
    ),
    img: ({
      src,
      alt,
      ...props
    }: React.ImgHTMLAttributes<HTMLImageElement>) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt || ""}
        className="rounded-xl my-6 w-full"
        loading="lazy"
        {...props}
      />
    ),
  };
}

/* ---------- Page ---------- */

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const headings = extractHeadings(post.content);
  const related = getRelatedPosts(post.slug, post.tags, 3);
  const mdxComponents = createMdxComponents();

  /* --- JSON-LD: Article --- */
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.ogImage
      ? `https://getrekovr.com${post.ogImage}`
      : undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
      url: "https://x.com/julesshopify",
    },
    publisher: {
      "@type": "Organization",
      name: "Rekovr",
      url: "https://getrekovr.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://getrekovr.com/blog/${post.slug}`,
    },
  };

  /* --- JSON-LD: BreadcrumbList --- */
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://getrekovr.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://getrekovr.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://getrekovr.com/blog/${post.slug}`,
      },
    ],
  };

  /* --- JSON-LD: FAQPage (optional) --- */
  const jsonLdFAQ = post.faqSchema
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [],
      }
    : null;

  return (
    <>
      {/* Reading progress bar */}
      <ReadingProgress />

      {/* JSON-LD schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdArticle),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdBreadcrumb),
        }}
      />
      {jsonLdFAQ && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdFAQ),
          }}
        />
      )}

      {/* Header */}
      <BlogHeader
        title={post.title}
        slug={post.slug}
        tags={post.tags}
        publishedAt={post.publishedAt}
        readingTime={`${post.readingTime} min`}
        image={post.image}
        imageAlt={post.imageAlt}
      />

      {/* Main layout: TOC sidebar + Article content */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12">
          {/* Sidebar TOC - hidden on mobile */}
          <aside className="hidden lg:block">
            <TableOfContents headings={headings} />
          </aside>

          {/* Article content */}
          <article className="max-w-3xl">
            {/* MDX prose */}
            <div className="prose-custom">
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>

            {/* CTA Banner */}
            <CTABanner affiliateLink={post.affiliateLink} />

            {/* Author box */}
            <AuthorBox />

            {/* Related posts */}
            {related.length > 0 && (
              <RelatedPosts
                posts={related.map((r) => ({
                  slug: r.slug,
                  title: r.title,
                  description: r.description,
                  image: r.image,
                  imageAlt: r.imageAlt,
                  tags: r.tags,
                  publishedAt: r.publishedAt,
                  readingTime: `${r.readingTime} min`,
                }))}
              />
            )}
          </article>
        </div>
      </div>
    </>
  );
}
