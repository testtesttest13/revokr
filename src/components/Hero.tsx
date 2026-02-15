"use client";

import { motion } from "framer-motion";
import { useBooking } from "./BookingProvider";

export default function Hero() {
  const { openBooking } = useBooking();

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#FAFAFA]">
      {/* Grid background */}
      <div className="absolute inset-0 hero-grid-bg" />

      {/* Decorative floating stickers */}
      <motion.div
        animate={{ rotate: [12, 15, 12], y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-[10%] hidden lg:block bg-[#25D366] text-white font-syne font-bold text-sm px-4 py-2 rounded-xl border-2 border-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a] rotate-12 z-20"
      >
        96% open rate
      </motion.div>
      <motion.div
        animate={{ rotate: [-6, -9, -6], y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-48 left-[8%] hidden lg:block bg-white text-[#1a1a1a] font-syne font-bold text-sm px-4 py-2 rounded-xl border-2 border-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a] -rotate-6 z-20"
      >
        ROI 12-26×
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-36 pb-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-white border-2 border-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a] rounded-full px-5 py-2.5">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-[#1a1a1a]/60 text-sm font-medium">
              WhatsApp Marketing pour Shopify
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-syne font-bold text-hero text-[#1a1a1a] leading-[1.08] mb-6"
        >
          Transformez{" "}
          <span className="text-[#25D366] relative">
            WhatsApp
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
              <path d="M2 8C40 2 80 4 100 6C120 8 160 3 198 7" stroke="#25D366" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
          <br className="hidden sm:block" />
          en machine à ventes
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#1a1a1a]/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
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
            className="w-full sm:w-auto bg-[#25D366] text-white font-bold text-lg px-10 py-4 rounded-xl border-2 border-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_#1a1a1a] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
          >
            Réserver un audit gratuit
          </button>
          <a
            href="#services"
            className="w-full sm:w-auto text-center bg-white text-[#1a1a1a] font-bold text-lg px-8 py-4 rounded-xl border-2 border-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_#1a1a1a]"
          >
            Voir comment ça marche
          </a>
        </motion.div>
      </div>

      {/* Marquee text strip */}
      <div className="relative z-10 border-y-2 border-[#1a1a1a] bg-[#25D366] py-3 overflow-hidden">
        <div className="flex overflow-hidden">
          <div className="marquee-track flex animate-marquee gap-8 items-center whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <span key={i} className="flex items-center gap-8 text-white font-syne font-bold text-sm tracking-wide">
                <span>WHATSAPP MARKETING</span>
                <span className="text-white/60">·</span>
                <span>PANIERS ABANDONNÉS</span>
                <span className="text-white/60">·</span>
                <span>CAMPAGNES</span>
                <span className="text-white/60">·</span>
                <span>UPSELL</span>
                <span className="text-white/60">·</span>
                <span>ROI 12-26×</span>
                <span className="text-white/60">·</span>
                <span>SHOPIFY</span>
                <span className="text-white/60">·</span>
                <span>SEGMENTS VIP</span>
                <span className="text-white/60">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Dashboard mockup */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 max-w-5xl mx-auto px-6 py-16"
      >
        <div className="relative rounded-xl bg-white border-2 border-[#1a1a1a] shadow-[6px_6px_0_#1a1a1a] p-2 transition-transform duration-500 hover:rotate-0 -rotate-1">
          {/* Fake browser bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b-2 border-[#e5e5e5]">
            <span className="w-3 h-3 rounded-full bg-red-400 border border-[#1a1a1a]" />
            <span className="w-3 h-3 rounded-full bg-yellow-400 border border-[#1a1a1a]" />
            <span className="w-3 h-3 rounded-full bg-green-400 border border-[#1a1a1a]" />
            <div className="ml-4 flex-1 h-6 rounded-lg bg-[#f5f5f5] border border-[#e5e5e5] max-w-sm" />
          </div>
          {/* Mockup content */}
          <div className="p-4 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
              {[
                { label: "CONVERSATIONS", value: "69,028" },
                { label: "ORDERS", value: "150" },
                { label: "REVENUE", value: "18,002 €" },
                { label: "ROAS", value: "x16.87" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white border-2 border-[#1a1a1a] rounded-xl p-3 md:p-4">
                  <p className="text-[10px] md:text-xs font-semibold text-[#1a1a1a]/50 mb-1 md:mb-2 tracking-wider">
                    {stat.label}
                  </p>
                  <p className="text-[#1a1a1a] text-lg md:text-2xl font-bold font-syne">
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
                <div key={row.name} className="flex items-center justify-between bg-white border-2 border-[#e5e5e5] rounded-xl px-3 md:px-4 py-3 text-xs md:text-sm transition-all hover:border-[#1a1a1a] hover:shadow-[2px_2px_0_#1a1a1a]">
                  <span className="text-[#1a1a1a]/70 font-medium flex-1 truncate">{row.name}</span>
                  <span className="text-[#1a1a1a]/40 w-16 md:w-20 text-center hidden sm:block">{row.sent}</span>
                  <span className="text-[#25D366] w-16 md:w-20 text-center font-bold">{row.open}</span>
                  <span className="text-[#1a1a1a]/60 w-20 md:w-24 text-right font-medium">{row.rev}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
