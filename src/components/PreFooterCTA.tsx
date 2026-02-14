"use client";

import { motion } from "framer-motion";
import { useBooking } from "./BookingProvider";

export default function PreFooterCTA() {
  const { openBooking } = useBooking();

  return (
    <section className="relative bg-[#0a0a0a] py-24 md:py-32">
      <div className="absolute inset-0 hero-grid-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,211,102,0.08)_0%,transparent_60%)]" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-syne font-bold text-section text-white italic mb-10"
        >
          Le futur du e-commerce est conversationnel.
          <br />
          Passez à WhatsApp.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <button
            onClick={openBooking}
            className="bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-[0_0_40px_rgba(37,211,102,0.2)]"
          >
            Réserver un audit gratuit
          </button>
          <a
            href="https://apps.shopify.com/kanal-marketing-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
          >
            Installer Kanal sur Shopify
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/30 text-sm"
        >
          <span className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</span>{" "}
          +5,000 conversations de vente générées chaque jour.
        </motion.p>
      </div>
    </section>
  );
}
