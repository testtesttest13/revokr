"use client";

import { motion } from "framer-motion";
import { useBooking } from "./BookingProvider";

export default function Offers() {
  const { openBooking } = useBooking();

  return (
    <section className="relative bg-[#0a0a0a] py-20 md:py-28">
      <div className="absolute inset-0 hero-grid-bg" />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-whatsapp/40 text-xs font-mono uppercase tracking-widest mb-3">
            {"// Deux options"}
          </p>
          <h2 className="font-syne font-bold text-section text-white">
            Choisissez votre approche.
          </h2>
        </motion.div>

        {/* Option 1 — DIY — Simple compact row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6 md:p-8 mb-5"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-white/30 font-mono text-xs">01</span>
                <h3 className="font-syne font-bold text-xl text-white">
                  Installez Kanal vous-même
                </h3>
              </div>
              <p className="text-white/40 text-sm md:pl-8">
                Gratuit. On vous donne nos guides, templates et notre lien partenaire pour démarrer seul.
              </p>
            </div>
            <a
              href="https://apps.shopify.com/kanal-marketing-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 text-center border border-white/15 text-white/70 hover:text-white hover:border-white/30 font-medium px-6 py-3 rounded-full text-sm transition-all"
            >
              Installer Kanal &rarr;
            </a>
          </div>
        </motion.div>

        {/* Option 2 — Expert — Highlighted card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative glass-card-accent rounded-2xl p-8 md:p-10"
        >
          <span className="absolute -top-3 left-6 bg-whatsapp text-white text-xs font-semibold px-3 py-1 rounded-full">
            Recommandé
          </span>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Left - Description */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-whatsapp/50 font-mono text-xs">02</span>
                <h3 className="font-syne font-bold text-2xl text-white">
                  On s&apos;occupe de tout
                </h3>
              </div>
              <p className="text-white/50 leading-relaxed mb-6 md:pl-8">
                Stratégie WhatsApp sur-mesure, configuration Kanal, flows de récupération, campagnes, upsells. Résultats en 48h.
              </p>
              <button
                onClick={openBooking}
                className="bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all hover:scale-105 md:ml-8"
              >
                Réserver un audit gratuit &rarr;
              </button>
            </div>

            {/* Right - What's included */}
            <div className="flex-1 md:border-l md:border-whatsapp/10 md:pl-10">
              <p className="text-whatsapp/50 text-xs font-mono uppercase tracking-widest mb-4">Ce qui est inclus</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {[
                  "Stratégie personnalisée",
                  "Setup complet en 48h",
                  "Flows paniers abandonnés",
                  "Flows post-achat",
                  "Campagnes WhatsApp",
                  "Segments VIP",
                  "Messages A/B testés",
                  "Optimisation continue",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-white/60 text-sm">
                    <svg className="w-3.5 h-3.5 text-whatsapp flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
