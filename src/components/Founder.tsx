"use client";

import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section className="relative bg-[#FAFAFA] py-20 md:py-28">
      <div className="absolute inset-0 hero-grid-bg" />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-whatsapp/40 text-xs font-mono uppercase tracking-widest mb-3">
            {"// L'expert"}
          </p>
          <h2 className="font-syne font-bold text-section text-text">
            Pas une agence. Un e-commerçant.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="brutal-card rounded-2xl p-8 md:p-10"
        >
          {/* Credibility stats row */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="text-center">
              <p className="font-syne font-bold text-2xl md:text-3xl text-text">5+</p>
              <p className="text-text/40 text-xs mt-1">ans sur Shopify</p>
            </div>
            <div className="text-center border-l-2 border-black/10">
              <p className="font-syne font-bold text-2xl md:text-3xl text-whatsapp">N°1</p>
              <p className="text-text/40 text-xs mt-1">Expert WhatsApp France</p>
            </div>
          </div>

          {/* Quote */}
          <div className="border-t-2 border-black/10 pt-8 mb-8">
            <p className="text-text/60 text-lg leading-relaxed text-center max-w-2xl mx-auto font-manrope">
              5 ans dans l&apos;e-commerce Shopify. Quand j&apos;ai découvert le potentiel de WhatsApp, j&apos;ai tout testé avant d&apos;en faire un service. Tout ce que je recommande, je l&apos;utilise moi-même.
            </p>
          </div>

          {/* Social */}
          <div className="flex justify-center border-t-2 border-black/10 pt-6">
            <a
              href="https://x.com/julesshopify"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text/40 hover:text-text text-sm transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              @julesshopify
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
