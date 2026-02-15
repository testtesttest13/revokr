"use client";

import { motion } from "framer-motion";
import { useBooking } from "./BookingProvider";

export default function Offers() {
  const { openBooking } = useBooking();

  return (
    <section className="relative bg-[#FAFAFA] py-20 md:py-28">
      <div className="absolute inset-0 hero-grid-bg" />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-[#25D366]/40 text-xs font-mono uppercase tracking-widest mb-3">
            {"// Deux options"}
          </p>
          <h2 className="font-syne font-bold text-section text-[#1a1a1a]">
            Choisissez votre approche.
          </h2>
        </motion.div>

        {/* Option 1 — DIY — Simple compact row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="brutal-card rounded-2xl p-6 md:p-8 mb-5"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#1a1a1a]/30 font-mono text-xs">01</span>
                <h3 className="font-syne font-bold text-xl text-[#1a1a1a]">
                  Lancez-vous en autonomie
                </h3>
              </div>
              <p className="text-[#666] text-sm md:pl-8">
                On vous partage nos guides et templates pour démarrer seul. Gratuit, sans engagement.
              </p>
            </div>
            <a
              href="/blog"
              className="flex-shrink-0 text-center bg-white text-[#1a1a1a] font-bold border-2 border-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a] rounded-xl px-6 py-3 text-sm transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_#1a1a1a]"
            >
              Accéder aux ressources &rarr;
            </a>
          </div>
        </motion.div>

        {/* Option 2 — Expert — Highlighted card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative brutal-card-accent rounded-2xl p-8 md:p-10"
        >
          <span className="absolute -top-4 right-6 bg-whatsapp text-white font-bold text-xs px-4 py-1.5 rounded-lg border-2 border-[#1a1a1a] shadow-[2px_2px_0_#1a1a1a]">
            Recommandé
          </span>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Left - Description */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#25D366]/50 font-mono text-xs">02</span>
                <h3 className="font-syne font-bold text-2xl text-[#1a1a1a]">
                  On s&apos;occupe de tout
                </h3>
              </div>
              <p className="text-[#666] leading-relaxed mb-6 md:pl-8">
                Stratégie WhatsApp sur-mesure, configuration complète, flows de récupération, campagnes, upsells. Résultats en 48h.
              </p>
              <button
                onClick={openBooking}
                className="bg-[#25D366] text-white font-bold px-8 py-3.5 rounded-xl text-sm border-2 border-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_#1a1a1a] transition-all md:ml-8"
              >
                Réserver un audit gratuit &rarr;
              </button>
            </div>

            {/* Right - What's included */}
            <div className="flex-1 md:border-l-2 md:border-whatsapp/30 md:pl-10">
              <p className="text-[#25D366]/50 text-xs font-mono uppercase tracking-widest mb-4">Ce qui est inclus</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {[
                  "Stratégie personnalisée",
                  "Setup complet en 48h",
                  "Flows paniers abandonnés",
                  "Flows post-achat & upsell",
                  "Campagnes WhatsApp",
                  "Segments VIP",
                  "Messages A/B testés",
                  "Optimisation continue",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[#666] text-sm">
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
