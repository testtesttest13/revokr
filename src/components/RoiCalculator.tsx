"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useBooking } from "./BookingProvider";

export default function RoiCalculator() {
  const [abandonedCarts, setAbandonedCarts] = useState(500);
  const [avgCart, setAvgCart] = useState(80);
  const { openBooking } = useBooking();

  const withoutStrategy = Math.round(abandonedCarts * 0.07 * avgCart);
  const withRekovr = Math.round(abandonedCarts * 0.20 * avgCart);
  const difference = withRekovr - withoutStrategy;

  const formatNumber = (n: number) =>
    new Intl.NumberFormat("fr-FR").format(n);

  return (
    <section className="relative bg-[#FAFAFA] py-24 md:py-32">
      <div className="absolute inset-0 hero-grid-bg" />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#25D366]/40 text-xs font-mono uppercase tracking-widest mb-3">
            {"// Calculateur"}
          </p>
          <h2 className="font-syne font-bold text-section text-[#1a1a1a]">
            Combien vous perdez chaque mois ?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="brutal-card rounded-2xl p-8 md:p-12"
        >
          {/* Sliders */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <label className="text-[#1a1a1a]/50 text-sm block mb-2 font-manrope">
                Paniers abandonnés / mois
              </label>
              <div className="text-[#1a1a1a] font-syne font-bold text-2xl mb-3">
                {formatNumber(abandonedCarts)}
              </div>
              <input
                type="range"
                min={50}
                max={5000}
                step={50}
                value={abandonedCarts}
                onChange={(e) => setAbandonedCarts(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-[#1a1a1a]/25 text-xs mt-1">
                <span>50</span>
                <span>5,000</span>
              </div>
            </div>
            <div>
              <label className="text-[#1a1a1a]/50 text-sm block mb-2 font-manrope">
                Panier moyen
              </label>
              <div className="text-[#1a1a1a] font-syne font-bold text-2xl mb-3">
                {avgCart}&euro;
              </div>
              <input
                type="range"
                min={20}
                max={500}
                step={5}
                value={avgCart}
                onChange={(e) => setAvgCart(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-[#1a1a1a]/25 text-xs mt-1">
                <span>20&euro;</span>
                <span>500&euro;</span>
              </div>
            </div>
          </div>

          {/* Comparison */}
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {/* Sans stratégie WhatsApp */}
            <div className="brutal-card rounded-xl p-6 text-center">
              <p className="text-[#1a1a1a]/30 text-xs font-mono uppercase tracking-widest mb-1">
                Sans stratégie WhatsApp
              </p>
              <p className="text-[#1a1a1a]/40 text-sm mb-4">7% de paniers récupérés</p>
              <motion.p
                key={`without-${withoutStrategy}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="font-syne font-bold text-3xl md:text-4xl text-[#1a1a1a]/40"
              >
                {formatNumber(withoutStrategy)}&euro;
              </motion.p>
              <p className="text-[#1a1a1a]/20 text-xs mt-2">/ mois récupérés</p>
            </div>

            {/* Avec Rekovr */}
            <div className="brutal-card-accent rounded-xl p-6 text-center">
              <p className="text-[#25D366]/60 text-xs font-mono uppercase tracking-widest mb-1">
                Avec Rekovr
              </p>
              <p className="text-[#25D366]/40 text-sm mb-4">20% de paniers récupérés</p>
              <motion.p
                key={`with-${withRekovr}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="font-syne font-bold text-3xl md:text-4xl text-whatsapp"
              >
                {formatNumber(withRekovr)}&euro;
              </motion.p>
              <p className="text-[#25D366]/40 text-xs mt-2">/ mois récupérés</p>
            </div>
          </div>

          {/* Difference */}
          <div className="text-center border-t-2 border-black/10 pt-8">
            <p className="text-[#1a1a1a]/50 text-sm mb-2 font-manrope">
              Vous laissez sur la table chaque mois
            </p>
            <motion.p
              key={difference}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="font-syne font-bold text-4xl md:text-5xl text-whatsapp"
            >
              +{formatNumber(difference)}&euro;
            </motion.p>
            <p className="text-[#666] text-xs mt-4">
              *Basé sur les moyennes observées : 7% sans outil dédié, 20% avec une stratégie WhatsApp optimisée.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button
              onClick={openBooking}
              className="bg-[#25D366] text-white font-bold text-center px-8 py-4 rounded-xl border-2 border-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_#1a1a1a] transition-all"
            >
              Récupérer ces ventes &rarr;
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
