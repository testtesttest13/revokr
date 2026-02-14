"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useBooking } from "./BookingProvider";

const logos = [
  "Decathlon",
  "ATNT Paris",
  "Wanimo",
  "Bliss",
];

export default function Hero() {
  const { openBooking } = useBooking();

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Grid background */}
      <div className="absolute inset-0 hero-grid-bg" />
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,211,102,0.08)_0%,transparent_70%)]" />

      {/* Main content — centered like Kanal */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-36 pb-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2.5">
            <span className="w-2 h-2 rounded-full bg-whatsapp animate-pulse" />
            <span className="text-white/60 text-sm font-medium">
              Expert certifié Kanal &middot; WhatsApp &times; Shopify
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-syne font-bold text-hero text-white leading-[1.08] mb-6"
        >
          Vendez plus sur{" "}
          <span className="relative inline-flex items-center">
            <span className="text-whatsapp">WhatsApp</span>
            <Image
              src="/whatsapp-logo.webp"
              alt="WhatsApp"
              width={48}
              height={48}
              className="w-[1.1em] h-[1.1em] ml-3 -mt-1 inline-block"
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Le moyen le plus simple d&apos;augmenter vos ventes sur WhatsApp.
          <br className="hidden sm:block" />
          Récupérez vos paniers abandonnés, envoyez des campagnes ciblées et
          augmentez la LTV de vos clients.
        </motion.p>

        {/* CTAs — stacked like Kanal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-3 mb-8"
        >
          <button
            onClick={openBooking}
            className="bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold text-center px-10 py-4 rounded-full transition-all hover:scale-[1.03] text-lg shadow-[0_0_40px_rgba(37,211,102,0.25)]"
          >
            Réserver un audit gratuit
          </button>
          <a
            href="https://apps.shopify.com/kanal-marketing-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass-card rounded-full px-8 py-3.5 text-white/80 hover:text-white font-medium transition-all"
          >
            Installer Kanal sur Shopify
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-white/35 text-sm"
        >
          <span className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</span>{" "}
          Powering <span className="text-white/60 font-semibold">5,000+</span>{" "}
          sales conversations daily.
        </motion.p>
      </div>

      {/* Logo strip */}
      <div className="relative z-10 border-t border-white/[0.06] py-8 overflow-hidden">
        <div className="flex overflow-hidden">
          <div className="marquee-track flex animate-marquee gap-16 items-center whitespace-nowrap">
            {[...logos, ...logos].map((logo, i) => (
              <span
                key={i}
                className="text-white/20 font-syne font-semibold text-lg px-4 tracking-wide"
              >
                {logo}
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
        className="relative z-10 max-w-5xl mx-auto px-6 pb-20"
      >
        <div className="relative rounded-2xl glass-card p-2 shadow-2xl">
          {/* Fake browser bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-green-500/60" />
            <div className="ml-4 flex-1 h-6 rounded-md bg-white/[0.05] max-w-sm" />
          </div>
          {/* Mockup content */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: "CONVERSATIONS", value: "69,028", color: "text-whatsapp" },
                { label: "ORDERS", value: "150", color: "text-whatsapp" },
                { label: "REVENUE", value: "18,002.82 €", color: "text-whatsapp" },
                { label: "ROAS", value: "x16.87", color: "text-whatsapp" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl p-4"
                >
                  <p className={`text-xs font-semibold ${stat.color} mb-2 tracking-wider`}>
                    {stat.label}
                  </p>
                  <p className="text-white text-xl md:text-2xl font-bold">
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
                  className="flex items-center justify-between bg-white/[0.02] border border-white/[0.04] rounded-lg px-4 py-3 text-sm"
                >
                  <span className="text-white/70 font-medium flex-1">{row.name}</span>
                  <span className="text-white/40 w-20 text-center hidden sm:block">{row.sent}</span>
                  <span className="text-whatsapp w-20 text-center font-semibold">{row.open}</span>
                  <span className="text-white/60 w-24 text-right font-medium">{row.rev}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
