"use client";

import { motion } from "framer-motion";
import { useBooking } from "./BookingProvider";

const beforeItems = [
  { icon: "📉", text: "Paniers abandonnés perdus à jamais", detail: "7% récupérés max" },
  { icon: "📧", text: "Emails ignorés dans les spams", detail: "~20% d'ouverture" },
  { icon: "🔇", text: "Clients silencieux après l'achat", detail: "0 upsell, 0 fidélisation" },
];

const afterItems = [
  { icon: "🛒", text: "Paniers récupérés automatiquement", detail: "35% récupérés" },
  { icon: "💬", text: "Messages lus en 3 minutes", detail: "96% d'ouverture" },
  { icon: "🔄", text: "Clients qui rachètent via WhatsApp", detail: "LTV ×3" },
];

export default function Differentiation() {
  const { openBooking } = useBooking();

  return (
    <section className="relative bg-[#FAFAFA] py-20 md:py-28">
      <div className="absolute inset-0 hero-grid-bg" />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-whatsapp/40 text-xs font-mono uppercase tracking-widest mb-3">
            {"// Avant / Après"}
          </p>
          <h2 className="font-syne font-bold text-section text-text">
            Ce qui change avec Rekovr.
          </h2>
        </motion.div>

        {/* Before / After cards */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-0 relative">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl md:rounded-r-none border-2 border-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] md:shadow-none md:border-r-0 p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-10 h-10 rounded-xl bg-red-500/10 border-2 border-red-500/30 flex items-center justify-center text-lg">
                😐
              </span>
              <div>
                <h3 className="font-syne font-bold text-lg text-text">Aujourd&apos;hui</h3>
                <p className="text-text/30 text-xs font-mono">Sans stratégie WhatsApp</p>
              </div>
            </div>

            <div className="space-y-5">
              {beforeItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-text/50 text-[15px] line-through decoration-red-400/50">{item.text}</p>
                    <p className="text-red-400 text-xs font-mono mt-1">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Center arrow divider */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-14 h-14 rounded-full bg-whatsapp border-2 border-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a] flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl md:rounded-l-none border-2 border-whatsapp shadow-[4px_4px_0_#25D366] md:shadow-none p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-10 h-10 rounded-xl bg-whatsapp/10 border-2 border-whatsapp/30 flex items-center justify-center text-lg">
                🚀
              </span>
              <div>
                <h3 className="font-syne font-bold text-lg text-text">Avec Rekovr</h3>
                <p className="text-whatsapp/50 text-xs font-mono">WhatsApp activé en 48h</p>
              </div>
            </div>

            <div className="space-y-5">
              {afterItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.15 }}
                  className="flex items-start gap-4"
                >
                  <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-text text-[15px] font-medium">{item.text}</p>
                    <p className="text-whatsapp text-xs font-mono font-semibold mt-1">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <button
            onClick={openBooking}
            className="bg-[#25D366] text-white font-bold px-8 py-3.5 rounded-xl text-sm border-2 border-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_#1a1a1a] transition-all"
          >
            Passer du côté gauche au côté droit &rarr;
          </button>
        </motion.div>
      </div>
    </section>
  );
}
