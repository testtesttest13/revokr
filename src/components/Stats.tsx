"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

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

const barData = [
  { label: "Lun", value: 72 },
  { label: "Mar", value: 85 },
  { label: "Mer", value: 68 },
  { label: "Jeu", value: 91 },
  { label: "Ven", value: 78 },
  { label: "Sam", value: 95 },
  { label: "Dim", value: 82 },
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
          className="text-center mb-14"
        >
          <p className="text-whatsapp/40 text-xs font-mono uppercase tracking-widest mb-3">
            {"// Résultats"}
          </p>
          <h2 className="font-syne font-bold text-section text-text">
            Ce que voient nos clients.
          </h2>
        </motion.div>

        {/* Fake Shopify Admin Analytics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl bg-white border-2 border-[#1a1a1a] shadow-[6px_6px_0_#1a1a1a] overflow-hidden"
        >
          {/* Browser bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b-2 border-[#e5e5e5] bg-[#fafafa]">
            <span className="w-3 h-3 rounded-full bg-red-400 border border-[#1a1a1a]" />
            <span className="w-3 h-3 rounded-full bg-yellow-400 border border-[#1a1a1a]" />
            <span className="w-3 h-3 rounded-full bg-green-400 border border-[#1a1a1a]" />
            <div className="ml-4 flex-1 h-6 rounded-lg bg-white border border-[#e5e5e5] max-w-md flex items-center px-3 gap-2">
              <svg className="w-3 h-3 text-[#1a1a1a]/30 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" />
              </svg>
              <span className="text-[10px] text-[#1a1a1a]/30 font-mono truncate hidden sm:block">votre-boutique.myshopify.com/admin/analytics</span>
            </div>
          </div>

          <div className="flex">
            {/* Mini Shopify sidebar */}
            <div className="hidden md:flex flex-col items-center gap-3 py-4 px-3 bg-[#1a1a1a]">
              <Image src="/logos/shopify.png" alt="Shopify" width={20} height={20} className="object-contain mb-1" />
              <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center">
                <svg className="w-3 h-3 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center">
                <svg className="w-3 h-3 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <div className="w-5 h-5 rounded bg-[#25D366]/20 flex items-center justify-center">
                <svg className="w-3 h-3 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
              </div>
            </div>

            {/* Main dashboard content */}
            <div className="flex-1 p-4 md:p-6">
              {/* Page header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="flex items-center gap-2 text-[10px] text-text/30 font-mono mb-1">
                    <span>Analytics</span>
                    <span>&gt;</span>
                    <span className="text-text/50">Canal WhatsApp</span>
                  </div>
                  <h3 className="font-syne font-bold text-text text-base md:text-lg">Performance WhatsApp</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-text/30 font-mono hidden sm:block">30 derniers jours</span>
                  <div className="w-2 h-2 rounded-full bg-whatsapp animate-pulse" />
                </div>
              </div>

              {/* KPI cards row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-5">
                <div className="bg-[#fafafa] rounded-lg border border-black/10 p-3 md:p-4">
                  <p className="text-[9px] md:text-[10px] font-mono text-text/40 uppercase tracking-wider mb-1">Taux d&apos;ouverture</p>
                  <div className="text-xl md:text-2xl text-whatsapp">
                    <Counter target={80} suffix="%" />
                  </div>
                  <p className="text-[9px] text-whatsapp/60 font-mono mt-1 flex items-center gap-1">
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                    canal #1 e-commerce
                  </p>
                </div>
                <div className="bg-[#fafafa] rounded-lg border border-black/10 p-3 md:p-4">
                  <p className="text-[9px] md:text-[10px] font-mono text-text/40 uppercase tracking-wider mb-1">Paniers récupérés</p>
                  <div className="text-xl md:text-2xl text-[#F97316]">
                    <Counter target={35} suffix="%" />
                  </div>
                  <p className="text-[9px] text-[#F97316]/60 font-mono mt-1 flex items-center gap-1">
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                    +28% ce mois
                  </p>
                </div>
                <div className="bg-[#fafafa] rounded-lg border border-black/10 p-3 md:p-4">
                  <p className="text-[9px] md:text-[10px] font-mono text-text/40 uppercase tracking-wider mb-1">ROI moyen</p>
                  <div className="text-xl md:text-2xl text-[#8B5CF6]">
                    <Counter target={26} special="12-26" suffix="x" />
                  </div>
                  <p className="text-[9px] text-[#8B5CF6]/60 font-mono mt-1">par euro investi</p>
                </div>
                <div className="bg-[#fafafa] rounded-lg border border-black/10 p-3 md:p-4">
                  <p className="text-[9px] md:text-[10px] font-mono text-text/40 uppercase tracking-wider mb-1">Setup en</p>
                  <div className="text-xl md:text-2xl text-[#0EA5E9]">
                    <Counter target={48} special="48" suffix="h" />
                  </div>
                  <p className="text-[9px] text-[#0EA5E9]/60 font-mono mt-1">clé en main</p>
                </div>
              </div>

              {/* Chart area */}
              <div className="bg-[#fafafa] rounded-lg border border-black/10 p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <p className="text-xs font-medium text-text/60">Taux d&apos;ouverture / jour</p>
                    <span className="bg-whatsapp/10 text-whatsapp text-[9px] px-2 py-0.5 rounded-full font-mono border border-whatsapp/20">LIVE</span>
                  </div>
                  <div className="flex items-center gap-3 text-[9px] font-mono text-text/30">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-whatsapp" /> WhatsApp</span>
                  </div>
                </div>

                {/* Bar chart */}
                <div className="flex items-end gap-2 sm:gap-3 h-28 sm:h-36">
                  {barData.map((bar, i) => (
                    <div key={bar.label} className="flex-1 flex flex-col items-center gap-1.5">
                      <span className="text-[8px] sm:text-[9px] font-mono text-text/30 hidden sm:block">{bar.value}%</span>
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${bar.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
                        className="w-full rounded-t-md bg-whatsapp/80 hover:bg-whatsapp transition-colors relative group"
                      />
                      <span className="text-[8px] sm:text-[9px] font-mono text-text/30">{bar.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom row - recent flows */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { name: "Panier abandonné", status: "Actif", messages: "1,204", color: "bg-whatsapp" },
                  { name: "Upsell post-achat", status: "Actif", messages: "892", color: "bg-[#8B5CF6]" },
                  { name: "Campagne VIP", status: "Planifié", messages: "3,410", color: "bg-[#F97316]" },
                ].map((flow) => (
                  <div key={flow.name} className="flex items-center gap-3 bg-[#fafafa] rounded-lg border border-black/10 px-3 py-2.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${flow.color} flex-shrink-0`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] sm:text-xs text-text/60 font-medium truncate">{flow.name}</p>
                      <p className="text-[9px] text-text/30 font-mono">{flow.messages} envoyés</p>
                    </div>
                    <span className={`text-[8px] px-1.5 py-0.5 rounded font-mono ${flow.status === "Actif" ? "bg-whatsapp/10 text-whatsapp" : "bg-[#F97316]/10 text-[#F97316]"}`}>
                      {flow.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
