"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BlogIcon from "./blog/BlogIcon";

interface BlogPreview {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  publishedAt: string;
  readingTime: number;
}

const featuredPosts: BlogPreview[] = [
  {
    slug: "kanal-avis",
    title: "Kanal Avis 2026 : Mon Test Complet de l'App WhatsApp Shopify",
    description:
      "Test complet de Kanal, l'app WhatsApp Marketing #1 sur Shopify. Fonctionnalités, prix, résultats réels et avis honnête.",
    tags: ["kanal", "avis"],
    publishedAt: "2026-02-15",
    readingTime: 14,
  },
  {
    slug: "whatsapp-marketing-ecommerce-guide",
    title: "WhatsApp Marketing E-commerce : Le Guide Ultime 2026",
    description:
      "Le guide complet du WhatsApp Marketing pour e-commerçants. Stratégies, flows, templates, ROI et outils.",
    tags: ["guide", "whatsapp-marketing"],
    publishedAt: "2026-02-17",
    readingTime: 22,
  },
  {
    slug: "recuperer-paniers-abandonnes-whatsapp",
    title: "Récupérer ses Paniers Abandonnés par WhatsApp",
    description:
      "Comment récupérer 15-35% de vos paniers abandonnés grâce à WhatsApp. Stratégie, timing et templates.",
    tags: ["panier-abandonne", "shopify"],
    publishedAt: "2026-02-19",
    readingTime: 12,
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogSection() {
  return (
    <section className="relative bg-[#FAFAFA] py-24 md:py-32">
      <div className="absolute inset-0 hero-grid-bg" />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-whatsapp/40 text-xs font-mono uppercase tracking-widest mb-3">
            {"// Le Blog"}
          </p>
          <h2 className="font-syne font-bold text-section text-text mb-4">
            Guides et stratégies WhatsApp Marketing.
          </h2>
          <p className="text-text/40 text-lg max-w-2xl mx-auto font-manrope">
            Par Jules, expert WhatsApp Marketing et e-commerçant Shopify.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {featuredPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="block brutal-card rounded-xl overflow-hidden transition-all hover:-translate-y-1 group h-full"
              >
                {/* Blog icon with brand logos */}
                <BlogIcon tags={post.tags} slug={post.slug} />

                <div className="p-5">
                  {/* Tags */}
                  <div className="flex gap-2 mb-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="bg-whatsapp/10 text-whatsapp text-[11px] px-2.5 py-0.5 border border-whatsapp/30 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-syne font-bold text-lg text-text group-hover:text-whatsapp transition-colors line-clamp-2 mb-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-text/40 text-sm line-clamp-3 mb-4 font-manrope">
                    {post.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center gap-2 text-text/30 text-xs font-manrope">
                    <span>Jules</span>
                    <span>·</span>
                    <span>{formatDate(post.publishedAt)}</span>
                    <span>·</span>
                    <span>{post.readingTime} min</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border-2 border-whatsapp text-whatsapp hover:bg-whatsapp/10 font-bold px-8 py-3 rounded-xl text-sm transition-all"
          >
            Voir tous les articles &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
