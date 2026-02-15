"use client";

import { motion } from "framer-motion";
import { useBooking } from "./BookingProvider";

export default function Hero() {
  const { openBooking } = useBooking();

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#FAFAFA]">
      {/* Grid background */}
      <div className="absolute inset-0 hero-grid-bg" />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-36 pb-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-white border-2 border-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a] rounded-xl px-5 py-2.5">
            <span className="w-2 h-2 rounded-full bg-whatsapp animate-pulse" />
            <span className="text-text/60 text-sm font-manrope font-medium">
              WhatsApp Marketing pour Shopify
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-syne font-bold text-hero text-text leading-[1.08] mb-6"
        >
          Transformez{" "}
          <span className="text-whatsapp">WhatsApp</span>
          {" "}en machine à ventes
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-text/50 text-lg md:text-xl font-manrope leading-relaxed max-w-2xl mx-auto mb-10"
        >
          On configure votre stratégie WhatsApp de A à Z. Récupération de paniers,
          campagnes ciblées, upsells automatiques. Vos clients répondent, votre CA décolle.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <button
            onClick={openBooking}
            className="bg-whatsapp text-white font-bold text-lg px-10 py-4 rounded-xl border-2 border-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_#1a1a1a] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
          >
            Réserver un audit gratuit
          </button>
          <a
            href="#services"
            className="inline-flex items-center gap-2 bg-white text-text font-bold px-8 py-4 rounded-xl border-2 border-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_#1a1a1a] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none text-lg"
          >
            Voir comment ça marche
          </a>
        </motion.div>
      </div>

      {/* Dashboard mockup */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 max-w-5xl mx-auto px-6 pb-20"
      >
        <div className="relative rounded-xl bg-white border-2 border-[#1a1a1a] shadow-[6px_6px_0_#1a1a1a] p-2">
          {/* Fake browser bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b-2 border-[#e5e5e5]">
            <span className="w-3 h-3 rounded-full bg-red-400 border border-[#1a1a1a]" />
            <span className="w-3 h-3 rounded-full bg-yellow-400 border border-[#1a1a1a]" />
            <span className="w-3 h-3 rounded-full bg-green-400 border border-[#1a1a1a]" />
            <div className="ml-4 flex-1 h-6 rounded-lg bg-[#f5f5f5] border border-[#e5e5e5] max-w-sm" />
          </div>
          {/* Mockup content */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: "CONVERSATIONS", value: "69,028" },
                { label: "ORDERS", value: "150" },
                { label: "REVENUE", value: "18,002.82 €" },
                { label: "ROAS", value: "x16.87" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white border-2 border-[#1a1a1a] rounded-xl p-4"
                >
                  <p className="text-xs font-semibold text-text/50 mb-2 tracking-wider font-manrope">
                    {stat.label}
                  </p>
                  <p className="text-text text-xl md:text-2xl font-bold font-syne">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              {[
                { name: "Panier abandonné J+1", sent: "1,204", open: "96.2%", rev: "4,320 €" },
                { name: "Campagne VIP Soldes", sent: "3,410", open: "93.5%", rev: "8,192 €" },
                { name: "Upsell post-achat", sent: "892", open: "94.8%", rev: "2,740 €" },
              ].map((row) => (
                <div
                  key={row.name}
                  className="flex items-center justify-between bg-white border-2 border-[#e5e5e5] rounded-xl px-4 py-3 text-sm transition-all hover:border-[#1a1a1a] hover:shadow-[2px_2px_0_#1a1a1a] hover:translate-x-[-1px] hover:translate-y-[-1px]"
                >
                  <span className="text-text/70 font-medium font-manrope flex-1">{row.name}</span>
                  <span className="text-text/40 w-20 text-center hidden sm:block font-manrope">{row.sent}</span>
                  <span className="text-whatsapp w-20 text-center font-bold font-manrope">{row.open}</span>
                  <span className="text-text/60 w-24 text-right font-medium font-manrope">{row.rev}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
