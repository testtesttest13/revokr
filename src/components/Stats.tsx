"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({
  target,
  decimals = 0,
  prefix = "",
  suffix = "",
  special = "",
}: {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  special?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    if (special) {
      setCount(target);
      return;
    }
    let current = 0;
    const step = target / 50;
    const id = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(id);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(id);
  }, [inView, target, special]);

  return (
    <span ref={ref} className="font-syne font-bold tabular-nums">
      {special && inView ? special : `${prefix}${decimals > 0 ? count.toFixed(decimals) : Math.round(count)}`}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="relative bg-[#0a0a0a] py-20 md:py-28">
      <div className="absolute inset-0 hero-grid-bg" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {/* Big hero stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 md:p-10 flex flex-col justify-between md:row-span-2"
          >
            <div>
              <p className="text-whatsapp/40 text-xs font-mono uppercase tracking-widest mb-6">
                {"// Taux d'ouverture"}
              </p>
              <div className="text-7xl md:text-8xl text-white font-syne font-bold leading-none mb-4">
                <Counter target={80} suffix="%" />
              </div>
              <p className="text-white/40 text-lg max-w-sm">
                de taux d&apos;ouverture moyen sur WhatsApp.
                L&apos;email plafonne à 20%.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-8">
              <div className="flex-1 h-2 rounded-full bg-white/[0.06] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  className="h-full rounded-full bg-whatsapp"
                />
              </div>
              <span className="text-whatsapp text-sm font-semibold">WhatsApp</span>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex-1 h-2 rounded-full bg-white/[0.06] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "20%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="h-full rounded-full bg-white/30"
                />
              </div>
              <span className="text-white/30 text-sm font-semibold">Email</span>
            </div>
          </motion.div>

          {/* Right column — 3 smaller cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-end justify-between">
              <div>
                <p className="text-white/30 text-xs font-mono uppercase tracking-widest mb-2">Utilisateurs</p>
                <div className="text-4xl md:text-5xl text-white font-syne font-bold">
                  <Counter target={3.1} decimals={1} suffix=" Mds" />
                </div>
              </div>
              <span className="text-4xl opacity-30">🌍</span>
            </div>
            <p className="text-white/30 text-sm mt-3">de personnes utilisent WhatsApp chaque jour</p>
          </motion.div>

          <div className="grid grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card-accent rounded-2xl p-6"
            >
              <p className="text-whatsapp/50 text-xs font-mono uppercase tracking-widest mb-2">ROI moyen</p>
              <div className="text-3xl md:text-4xl text-whatsapp font-syne font-bold">
                <Counter target={26} special="12-26" suffix="×" />
              </div>
              <p className="text-white/30 text-sm mt-2">retour sur investissement</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-2xl p-6"
            >
              <p className="text-white/30 text-xs font-mono uppercase tracking-widest mb-2">Revenus</p>
              <div className="text-3xl md:text-4xl text-white font-syne font-bold">
                <Counter target={30} prefix="$" suffix="M+" />
              </div>
              <p className="text-white/30 text-sm mt-2">récupérés via Kanal</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
