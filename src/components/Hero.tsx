"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useBooking } from "./BookingProvider";

const floatingLogos = [
  { src: "/logos/shopify.png", alt: "Shopify", size: 52, top: "12%", left: "6%", rotate: -8, delay: 0, duration: 5, border: "#96BF48", shadow: "#96BF48" },
  { src: "/logos/klaviyo.png", alt: "Klaviyo", size: 50, top: "18%", right: "7%", rotate: 10, delay: 0.5, duration: 4.5, border: "#BF2E7B", shadow: "#BF2E7B" },
  { src: "/logos/kanal.svg", alt: "Kanal", size: 48, top: "45%", left: "4%", rotate: 6, delay: 1, duration: 5.5, border: "#25D366", shadow: "#25D366" },
  { src: "/logos/meta.png", alt: "Meta", size: 50, top: "40%", right: "5%", rotate: -12, delay: 1.5, duration: 4, border: "#0081FB", shadow: "#0081FB" },
  { src: "/logos/woo.webp", alt: "WooCommerce", size: 46, top: "65%", left: "8%", rotate: 14, delay: 0.8, duration: 5.2, border: "#7F54B3", shadow: "#7F54B3" },
  { src: "/whatsapp-logo.webp", alt: "WhatsApp", size: 48, top: "62%", right: "6%", rotate: 8, delay: 1.2, duration: 4.8, border: "#25D366", shadow: "#25D366" },
];

export default function Hero() {
  const { openBooking } = useBooking();

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#FAFAFA]">
      {/* Grid background */}
      <div className="absolute inset-0 hero-grid-bg" />

      {/* Floating partner logos */}
      {floatingLogos.map((logo) => (
        <motion.div
          key={logo.alt}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -12, 0],
            rotate: [logo.rotate, logo.rotate + 4, logo.rotate],
          }}
          transition={{
            opacity: { duration: 0.6, delay: logo.delay + 0.3 },
            scale: { duration: 0.6, delay: logo.delay + 0.3 },
            y: { duration: logo.duration, repeat: Infinity, ease: "easeInOut", delay: logo.delay },
            rotate: { duration: logo.duration, repeat: Infinity, ease: "easeInOut", delay: logo.delay },
          }}
          className="absolute hidden lg:flex items-center justify-center z-20 bg-white rounded-2xl border-2 p-3"
          style={{
            top: logo.top,
            left: logo.left,
            right: logo.right,
            borderColor: logo.border,
            boxShadow: `3px 3px 0 ${logo.shadow}`,
          }}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.size}
            height={logo.size}
            className="object-contain"
          />
        </motion.div>
      ))}

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
            {[...Array(4)].map((_, i) => (
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
                <div key={stat.label} className="bg-white border-2 border-[#1a1a1a] rounded-xl p-2 sm:p-3 md:p-4">
                  <p className="text-[8px] sm:text-[10px] md:text-xs font-semibold text-[#1a1a1a]/50 mb-1 md:mb-2 tracking-wider truncate">
                    {stat.label}
                  </p>
                  <p className="text-[#1a1a1a] text-sm sm:text-lg md:text-2xl font-bold font-syne">
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
                <div key={row.name} className="flex items-center justify-between bg-white border-2 border-[#e5e5e5] rounded-xl px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 text-[10px] sm:text-xs md:text-sm transition-all hover:border-[#1a1a1a] hover:shadow-[2px_2px_0_#1a1a1a]">
                  <span className="text-[#1a1a1a]/70 font-medium flex-1 truncate mr-2">{row.name}</span>
                  <span className="text-[#1a1a1a]/40 w-12 sm:w-16 md:w-20 text-center hidden sm:block">{row.sent}</span>
                  <span className="text-[#25D366] w-12 sm:w-16 md:w-20 text-center font-bold">{row.open}</span>
                  <span className="text-[#1a1a1a]/60 w-16 sm:w-20 md:w-24 text-right font-medium">{row.rev}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
