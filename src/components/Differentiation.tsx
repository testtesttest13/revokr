"use client";

import { motion } from "framer-motion";

const alone = [
  { text: "Installation de base", ok: true },
  { text: "Pas de stratégie de flows", ok: false },
  { text: "Messages génériques", ok: false },
  { text: "Pas de suivi ni d'optimisation", ok: false },
];

const withRekovr = [
  { text: "Installation complète et configurée" },
  { text: "Flows pensés pour convertir" },
  { text: "Messages testés et optimisés" },
  { text: "Stratégie adaptée à votre boutique" },
  { text: "Optimisation continue des performances" },
];

export default function Differentiation() {
  return (
    <section className="relative bg-[#FAFAFA] py-20 md:py-28">
      <div className="absolute inset-0 hero-grid-bg" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-14">
          <div>
            <h2 className="font-syne font-bold text-section text-text">
              Le faire seul vs. faire appel à un expert.
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-muted text-lg">
              Installer une app WhatsApp, tout le monde peut le faire.
              Mais transformer WhatsApp en vrai canal de vente, ça demande
              de l&apos;expertise.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="brutal-card rounded-2xl p-8"
          >
            <h3 className="text-text/50 font-syne font-bold text-lg mb-6">
              Le faire seul
            </h3>
            <ul className="space-y-4">
              {alone.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-text/50 text-[15px]">
                  {item.ok ? (
                    <span className="text-whatsapp font-bold">&#10003;</span>
                  ) : (
                    <span className="text-red-500 font-bold">&#10007;</span>
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
            className="relative brutal-card-accent rounded-2xl p-8"
          >
            <span className="absolute -top-3 right-6 bg-whatsapp text-white text-xs font-semibold px-3 py-1 rounded-full">
              Recommandé
            </span>
            <h3 className="text-text font-syne font-bold text-lg mb-6">
              Avec Rekovr
            </h3>
            <ul className="space-y-4">
              {withRekovr.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-text text-[15px]">
                  <span className="text-whatsapp font-bold">&#10003;</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <p className="text-text/30 text-sm mt-8">
          On maîtrise les meilleurs outils WhatsApp du marché — c&apos;est notre spécialité.
        </p>
      </div>
    </section>
  );
}
