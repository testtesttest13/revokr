"use client";

import { motion } from "framer-motion";

const alone = [
  { text: "App installée", ok: true },
  { text: "Flows non optimisés", ok: false },
  { text: "Messages génériques", ok: false },
  { text: "Pas de stratégie", ok: false },
];

const withRekovr = [
  { text: "App installée" },
  { text: "Flows configurés par un expert" },
  { text: "Messages testés et optimisés" },
  { text: "Stratégie adaptée à votre boutique" },
  { text: "Optimisation continue" },
];

export default function Differentiation() {
  return (
    <section className="relative bg-[#0a0a0a] py-20 md:py-28">
      <div className="absolute inset-0 hero-grid-bg" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-14">
          <div>
            <h2 className="font-syne font-bold text-section text-white">
              Kanal est l&apos;outil. On est les experts qui le déploient.
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-white/40 text-lg">
              Vous pouvez installer Kanal vous-même — c&apos;est un super outil.
              Mais pour maximiser vos résultats, il faut les bons flows, le bon
              timing, les bons messages.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="text-white/40 font-syne font-bold text-lg mb-6">
              Kanal seul
            </h3>
            <ul className="space-y-4">
              {alone.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/40 text-[15px]">
                  {item.ok ? (
                    <span className="text-whatsapp">&#10003;</span>
                  ) : (
                    <span className="text-red-400">&#10007;</span>
                  )}
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative glass-card-accent rounded-2xl p-8"
          >
            <span className="absolute -top-3 right-6 bg-whatsapp text-white text-xs font-semibold px-3 py-1 rounded-full">
              Recommandé
            </span>
            <h3 className="text-white font-syne font-bold text-lg mb-6">
              Kanal + Rekovr
            </h3>
            <ul className="space-y-4">
              {withRekovr.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white text-[15px]">
                  <span className="text-whatsapp">&#10003;</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <p className="text-white/25 text-sm mt-8">
          On utilise Kanal au quotidien — c&apos;est notre outil de travail.
        </p>
      </div>
    </section>
  );
}
