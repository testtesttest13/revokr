"use client";

import { motion } from "framer-motion";
import { useBooking } from "./BookingProvider";

export default function Process() {
  const { openBooking } = useBooking();

  return (
    <section id="process" className="relative bg-[#0a0a0a] py-20 md:py-28">
      <div className="absolute inset-0 hero-grid-bg" />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-whatsapp/40 text-xs font-mono uppercase tracking-widest mb-3">
            {"// Le process"}
          </p>
          <h2 className="font-syne font-bold text-section text-white">
            Opérationnel en 48h.{" "}
            <span className="text-white/20 line-through decoration-red-400">Pas en 3 mois.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-whatsapp/40 via-whatsapp/20 to-transparent" />

          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex gap-6 md:gap-8 mb-12"
          >
            <div className="relative z-10 flex-shrink-0">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-whatsapp/10 border border-whatsapp/30 flex items-center justify-center">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-whatsapp" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
            </div>
            <div className="pt-2 md:pt-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-whatsapp font-mono text-xs">15 min</span>
                <span className="w-8 h-px bg-white/10" />
              </div>
              <h3 className="font-syne font-bold text-xl md:text-2xl text-white mb-2">
                Audit gratuit
              </h3>
              <p className="text-white/40 text-sm leading-relaxed max-w-md">
                On analyse votre boutique et on calcule combien WhatsApp peut vous rapporter. Sans engagement.
              </p>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative flex gap-6 md:gap-8 mb-12"
          >
            <div className="relative z-10 flex-shrink-0">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-whatsapp/10 border border-whatsapp/30 flex items-center justify-center">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-whatsapp" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.648-3.014a1.125 1.125 0 01-.002-1.99l10.628-5.63a1.5 1.5 0 012.1 1.667l-2.4 9.613a1.125 1.125 0 01-1.79.614l-2.29-1.86zM11.42 15.17l2.496-4.025" />
                </svg>
              </div>
            </div>
            <div className="pt-2 md:pt-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-whatsapp font-mono text-xs">48h</span>
                <span className="w-8 h-px bg-white/10" />
              </div>
              <h3 className="font-syne font-bold text-xl md:text-2xl text-white mb-2">
                Setup complet
              </h3>
              <p className="text-white/40 text-sm leading-relaxed max-w-md">
                Installation Kanal, configuration des flows, intégration Shopify. Vous n&apos;avez rien à faire.
              </p>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative flex gap-6 md:gap-8"
          >
            <div className="relative z-10 flex-shrink-0">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-whatsapp/20 border border-whatsapp/40 flex items-center justify-center">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-whatsapp" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
              </div>
            </div>
            <div className="pt-2 md:pt-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-whatsapp font-mono text-xs">J+3</span>
                <span className="w-8 h-px bg-white/10" />
              </div>
              <h3 className="font-syne font-bold text-xl md:text-2xl text-white mb-2">
                Résultats
              </h3>
              <p className="text-white/40 text-sm leading-relaxed max-w-md">
                Vos paniers se récupèrent. Vos clients répondent. Votre CA augmente.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 pl-[72px] md:pl-[88px]"
        >
          <button
            onClick={openBooking}
            className="bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all hover:scale-105"
          >
            Commencer l&apos;audit &rarr;
          </button>
        </motion.div>
      </div>
    </section>
  );
}
