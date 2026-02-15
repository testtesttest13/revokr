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
      url: `https://getrekovr.com/blog/tag/${params.tag}`,
      siteName: "Rekovr",
      locale: "fr_FR",
      type: "website",
    },
    alternates: {
      canonical: `https://getrekovr.com/blog/tag/${params.tag}`,
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
      <section className="relative bg-[#FAFAFA] pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-[#1a1a1a]/40 mb-8">
            <Link href="/" className="hover:text-whatsapp transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-whatsapp transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-[#1a1a1a]/60">{displayTag}</span>
          </nav>

          <p className="text-whatsapp/40 text-xs font-mono uppercase tracking-widest mb-4">
            {"// Tag"}
          </p>
          <h1 className="font-syne font-bold text-hero text-[#1a1a1a] leading-[1.08] mb-6">
            Articles sur{" "}
            <span className="text-whatsapp">{displayTag}</span>
          </h1>
          <p className="text-[#1a1a1a]/50 text-lg leading-relaxed max-w-2xl mx-auto">
            {posts.length > 0
              ? `${posts.length} article${posts.length > 1 ? "s" : ""} trouv\u00e9${posts.length > 1 ? "s" : ""} sur ce th\u00e8me.`
              : "Aucun article trouv\u00e9 pour ce tag."}
          </p>
        </div>
      </section>

      {/* Tags filter */}
      {allTags.length > 0 && (
        <section className="bg-[#FAFAFA] pb-8">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/blog"
                className="inline-block text-sm font-bold px-4 py-2 rounded-lg border-2 border-[#1a1a1a] bg-black/5 text-[#1a1a1a]/60 shadow-[2px_2px_0_#1a1a1a] hover:shadow-[4px_4px_0_#1a1a1a] hover:text-whatsapp transition-all"
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
                    className="inline-block text-sm font-bold px-4 py-2 rounded-lg border-2 border-[#1a1a1a] bg-whatsapp text-white shadow-[2px_2px_0_#1a1a1a]"
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
        <section className="bg-[#FAFAFA] pb-24">
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
        <section className="bg-[#FAFAFA] py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="brutal-card rounded-2xl p-12 border-2 border-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a]">
              <p className="text-[#1a1a1a]/40 text-lg mb-4">
                Aucun article pour ce tag.
              </p>
              <Link
                href="/blog"
                className="inline-block text-whatsapp hover:text-whatsapp-dark text-sm font-bold transition-colors"
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
