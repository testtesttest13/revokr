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

const stats = [
  {
    value: 80,
    suffix: "%",
    label: "Taux d'ouverture",
    detail: "4× plus que l'email",
    color: "#25D366",
  },
  {
    value: 35,
    suffix: "%",
    label: "Paniers récupérés",
    detail: "vs 7% sans WhatsApp",
    color: "#F97316",
  },
  {
    value: 26,
    suffix: "×",
    special: "12-26",
    label: "ROI moyen",
    detail: "Retour sur investissement",
    color: "#8B5CF6",
  },
  {
    value: 48,
    suffix: "h",
    special: "48",
    label: "Opérationnel",
    detail: "Setup complet inclus",
    color: "#0EA5E9",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="relative bg-[#FAFAFA] py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 hero-grid-bg" />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-whatsapp/40 text-xs font-mono uppercase tracking-widest mb-3">
            {"// Les chiffres"}
          </p>
          <h2 className="font-syne font-bold text-section text-text">
            WhatsApp explose les compteurs.
          </h2>
        </motion.div>

        {/* Horizontal scrolling stat ticker on mobile, grid on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
              className="bg-white rounded-2xl border-2 p-5 md:p-6 text-center group hover:-translate-y-1 transition-transform"
              style={{
                borderColor: stat.color,
                boxShadow: `4px 4px 0 ${stat.color}`,
              }}
            >
              {/* Big number */}
              <div
                className="text-4xl sm:text-5xl md:text-[3.5rem] leading-none mb-3"
                style={{ color: stat.color }}
              >
                <Counter
                  target={stat.value}
                  suffix={stat.suffix}
                  special={stat.special}
                />
              </div>

              {/* Label */}
              <p className="font-syne font-bold text-text text-sm mb-1">
                {stat.label}
              </p>

              {/* Detail */}
              <p className="text-text/35 text-xs font-mono">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp vs Email bar comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 bg-white rounded-2xl border-2 border-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] p-6 md:p-8"
        >
          <div className="flex items-center justify-between mb-4">
            <p className="font-syne font-bold text-text text-sm">WhatsApp vs Email</p>
            <p className="text-text/30 text-xs font-mono">Taux d&apos;ouverture moyen</p>
          </div>

          {/* WhatsApp bar */}
          <div className="mb-3">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-whatsapp flex items-center justify-center">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  </svg>
                </span>
                <span className="text-text text-sm font-medium">WhatsApp</span>
              </div>
              <span className="text-whatsapp font-syne font-bold text-lg">80%</span>
            </div>
            <div className="h-4 rounded-full bg-black/5 overflow-hidden border border-black/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                className="h-full rounded-full bg-whatsapp"
              />
            </div>
          </div>

          {/* Email bar */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-text/10 flex items-center justify-center">
                  <svg className="w-3 h-3 text-text/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                <span className="text-text/40 text-sm font-medium">Email</span>
              </div>
              <span className="text-text/30 font-syne font-bold text-lg">20%</span>
            </div>
            <div className="h-4 rounded-full bg-black/5 overflow-hidden border border-black/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "20%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                className="h-full rounded-full bg-text/20"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
