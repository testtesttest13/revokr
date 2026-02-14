"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useBooking } from "./BookingProvider";

export default function RoiCalculator() {
  const [abandonedCarts, setAbandonedCarts] = useState(500);
  const [avgCart, setAvgCart] = useState(80);
  const { openBooking } = useBooking();

  const withoutKanal = Math.round(abandonedCarts * 0.07 * avgCart);
  const withKanal = Math.round(abandonedCarts * 0.20 * avgCart);
  const difference = withKanal - withoutKanal;

  const formatNumber = (n: number) =>
    new Intl.NumberFormat("fr-FR").format(n);

  return (
    <section className="relative bg-[#0a0a0a] py-24 md:py-32">
      <div className="absolute inset-0 hero-grid-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,211,102,0.06)_0%,transparent_60%)]" />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-whatsapp/40 text-xs font-mono uppercase tracking-widest mb-3">
            {"// Calculateur"}
          </p>
          <h2 className="font-syne font-bold text-section text-white">
            Combien vous perdez sans Kanal ?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 md:p-12"
        >
          {/* Sliders */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <label className="text-white/50 text-sm block mb-2">
                Paniers abandonnés / mois
              </label>
              <div className="text-white font-syne font-bold text-2xl mb-3">
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
              <div className="flex justify-between text-white/25 text-xs mt-1">
                <span>50</span>
                <span>5,000</span>
              </div>
            </div>
            <div>
              <label className="text-white/50 text-sm block mb-2">
                Panier moyen
              </label>
              <div className="text-white font-syne font-bold text-2xl mb-3">
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
              <div className="flex justify-between text-white/25 text-xs mt-1">
                <span>20&euro;</span>
                <span>500&euro;</span>
              </div>
            </div>
          </div>

          {/* Comparison */}
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {/* Sans Kanal */}
            <div className="glass-card rounded-xl p-6 text-center">
              <p className="text-white/30 text-xs font-mono uppercase tracking-widest mb-1">
                Sans Kanal
              </p>
              <p className="text-white/20 text-sm mb-4">7% de paniers récupérés</p>
              <motion.p
                key={`without-${withoutKanal}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="font-syne font-bold text-3xl md:text-4xl text-white/40"
              >
                {formatNumber(withoutKanal)}&euro;
              </motion.p>
              <p className="text-white/20 text-xs mt-2">/ mois récupérés</p>
            </div>

            {/* Avec Kanal */}
            <div className="glass-card-accent rounded-xl p-6 text-center">
              <p className="text-whatsapp/60 text-xs font-mono uppercase tracking-widest mb-1">
                Avec Kanal + Rekovr
              </p>
              <p className="text-whatsapp/40 text-sm mb-4">20% de paniers récupérés</p>
              <motion.p
                key={`with-${withKanal}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="font-syne font-bold text-3xl md:text-4xl text-whatsapp"
              >
                {formatNumber(withKanal)}&euro;
              </motion.p>
              <p className="text-whatsapp/40 text-xs mt-2">/ mois récupérés</p>
            </div>
          </div>

          {/* Difference */}
          <div className="text-center border-t border-white/[0.06] pt-8">
            <p className="text-white/40 text-sm mb-2">
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
            <p className="text-white/25 text-xs mt-4">
              *Basé sur les moyennes observées : 7% sans outil dédié, 20% avec Kanal configuré par un expert.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button
              onClick={openBooking}
              className="bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold text-center px-8 py-4 rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(37,211,102,0.2)]"
            >
              Récupérer ces ventes &rarr;
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
