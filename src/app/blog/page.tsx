import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getFeaturedPosts, getAllTags } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";
import TagPill from "@/components/blog/TagPill";

export const metadata: Metadata = {
  title: "Le Blog Rekovr | WhatsApp Marketing, Shopify & E-commerce",
  description:
    "Guides, tutoriels et strategies pour booster vos ventes Shopify avec WhatsApp Marketing. Paniers abandonnes, campagnes, automatisation et plus.",
  openGraph: {
    title: "Le Blog Rekovr | WhatsApp Marketing, Shopify & E-commerce",
    description:
      "Guides, tutoriels et strategies pour booster vos ventes Shopify avec WhatsApp Marketing.",
    url: "https://getrekovr.com/blog",
    siteName: "Rekovr",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Blog Rekovr | WhatsApp Marketing & Shopify",
    description:
      "Guides et strategies pour booster vos ventes Shopify avec WhatsApp.",
  },
  alternates: {
    canonical: "https://getrekovr.com/blog",
  },
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const tags = getAllTags();

  const featuredPost = featuredPosts[0] ?? null;
  const remainingPosts = allPosts.filter(
    (p) => p.slug !== featuredPost?.slug
  );

  return (
    <>
      {/* Hero section */}
      <section className="relative bg-[#0a0a0a] pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,211,102,0.08)_0%,transparent_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-whatsapp/40 text-xs font-mono uppercase tracking-widest mb-4">
            {"// Blog"}
          </p>
          <h1 className="font-syne font-bold text-hero text-white leading-[1.08] mb-6">
            Le Blog{" "}
            <span className="text-whatsapp">Rekovr</span>
          </h1>
          <p className="text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Guides, strat&eacute;gies et retours d&apos;exp&eacute;rience pour
            transformer WhatsApp en machine &agrave; ventes pour votre boutique
            Shopify.
          </p>
        </div>
      </section>

      {/* Tags filter */}
      {tags.length > 0 && (
        <section className="bg-[#0a0a0a] pb-8">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/blog"
                className="inline-block text-sm font-medium px-4 py-2 rounded-full border bg-whatsapp/20 border-whatsapp/40 text-whatsapp transition-all"
              >
                Tous
              </Link>
              {tags.map((tag) => (
                <TagPill key={tag} tag={tag} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured article */}
      {featuredPost && (
        <section className="bg-[#0a0a0a] pb-12">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-whatsapp/40 text-xs font-mono uppercase tracking-widest mb-6">
              {"// Article mis en avant"}
            </p>
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <article className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:border-whatsapp/30 hover:shadow-[0_0_40px_rgba(37,211,102,0.08)] md:grid md:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[360px] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent md:bg-gradient-to-l" />
                  <span className="absolute top-4 left-4 bg-whatsapp/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-whatsapp text-xs font-semibold uppercase tracking-wider">
                      {featuredPost.category.replace(/-/g, " ")}
                    </span>
                    <span className="text-white/20">|</span>
                    <span className="text-white/40 text-xs">
                      {featuredPost.readingTime} min de lecture
                    </span>
                  </div>
                  <h2 className="font-syne font-bold text-2xl md:text-3xl text-white group-hover:text-whatsapp transition-colors leading-tight mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-white/50 leading-relaxed mb-6">
                    {featuredPost.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-white/30 text-xs bg-white/[0.04] border border-white/[0.06] rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-whatsapp/20 flex items-center justify-center">
                      <span className="text-whatsapp text-xs font-bold">
                        {featuredPost.author.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="text-white/70 text-xs font-medium">
                        {featuredPost.author}
                      </p>
                      <p className="text-white/30 text-xs">
                        {new Date(featuredPost.publishedAt).toLocaleDateString(
                          "fr-FR",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      {/* Posts grid */}
      {remainingPosts.length > 0 && (
        <section className="bg-[#0a0a0a] pb-24">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-whatsapp/40 text-xs font-mono uppercase tracking-widest mb-8">
              {"// Tous les articles"}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {remainingPosts.map((post) => (
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
      )}

      {/* Empty state */}
      {allPosts.length === 0 && (
        <section className="bg-[#0a0a0a] py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="glass-card rounded-2xl p-12">
              <p className="text-white/30 text-lg mb-4">
                Aucun article pour le moment.
              </p>
              <p className="text-white/20 text-sm">
                Revenez bient&ocirc;t pour d&eacute;couvrir nos premiers guides
                sur le WhatsApp Marketing.
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
