import type { Metadata } from "next";
import Link from "next/link";
import { getAllTags, getPostsByTag } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";
import TagPill from "@/components/blog/TagPill";

/* ---------- Static params ---------- */

export function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    tag: tag
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-"),
  }));
}

/* ---------- Metadata ---------- */

export function generateMetadata({
  params,
}: {
  params: { tag: string };
}): Metadata {
  const tag = decodeURIComponent(params.tag);
  const displayTag = tag.replace(/-/g, " ");

  return {
    title: `Articles sur ${displayTag} | Blog Rekovr`,
    description: `Tous les articles Rekovr sur le theme ${displayTag}. Guides, tutoriels et strategies WhatsApp Marketing pour Shopify.`,
    openGraph: {
      title: `Articles sur ${displayTag} | Blog Rekovr`,
      description: `Tous les articles Rekovr sur le theme ${displayTag}.`,
      url: `https://getrevokr.com/blog/tag/${params.tag}`,
      siteName: "Rekovr",
      locale: "fr_FR",
      type: "website",
    },
    alternates: {
      canonical: `https://getrevokr.com/blog/tag/${params.tag}`,
    },
  };
}

/* ---------- Page ---------- */

export default function TagPage({
  params,
}: {
  params: { tag: string };
}) {
  const tagSlug = decodeURIComponent(params.tag);
  const allTags = getAllTags();

  // Find the original tag that matches the slug
  const matchedTag = allTags.find((t) => {
    const slug = t
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-");
    return slug === tagSlug;
  });

  const posts = matchedTag ? getPostsByTag(matchedTag) : getPostsByTag(tagSlug);
  const displayTag = matchedTag || tagSlug.replace(/-/g, " ");

  return (
    <>
      {/* Hero section */}
      <section className="relative bg-[#0a0a0a] pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,211,102,0.08)_0%,transparent_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-whatsapp transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-whatsapp transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-white/60">{displayTag}</span>
          </nav>

          <p className="text-whatsapp/40 text-xs font-mono uppercase tracking-widest mb-4">
            {"// Tag"}
          </p>
          <h1 className="font-syne font-bold text-hero text-white leading-[1.08] mb-6">
            Articles sur{" "}
            <span className="text-whatsapp">{displayTag}</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
            {posts.length > 0
              ? `${posts.length} article${posts.length > 1 ? "s" : ""} trouv\u00e9${posts.length > 1 ? "s" : ""} sur ce th\u00e8me.`
              : "Aucun article trouv\u00e9 pour ce tag."}
          </p>
        </div>
      </section>

      {/* Tags filter */}
      {allTags.length > 0 && (
        <section className="bg-[#0a0a0a] pb-8">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/blog"
                className="inline-block text-sm font-medium px-4 py-2 rounded-full border bg-white/[0.04] border-white/[0.08] text-white/60 hover:border-whatsapp/30 hover:text-whatsapp transition-all"
              >
                Tous
              </Link>
              {allTags.map((t) => {
                const tSlug = t
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .replace(/\s+/g, "-");
                const isActive = tSlug === tagSlug;
                return isActive ? (
                  <span
                    key={t}
                    className="inline-block text-sm font-medium px-4 py-2 rounded-full border bg-whatsapp/20 border-whatsapp/40 text-whatsapp"
                  >
                    {t}
                  </span>
                ) : (
                  <TagPill key={t} tag={t} />
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Posts grid */}
      {posts.length > 0 ? (
        <section className="bg-[#0a0a0a] pb-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  description={post.description}
                  image={post.image}
                  imageAlt={post.imageAlt}
                  tags={post.tags}
                  publishedAt={post.publishedAt}
                  readingTime={`${post.readingTime} min`}
                />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-[#0a0a0a] py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="glass-card rounded-2xl p-12">
              <p className="text-white/30 text-lg mb-4">
                Aucun article pour ce tag.
              </p>
              <Link
                href="/blog"
                className="inline-block text-whatsapp hover:text-whatsapp-dark text-sm font-medium transition-colors"
              >
                &larr; Retour au blog
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
