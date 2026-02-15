"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Est-ce que WhatsApp marche pour mon type de boutique ?",
    answer:
      "Si vous vendez sur Shopify, oui. Mode, beauté, alimentaire, déco — WhatsApp est universel, vos clients l'utilisent déjà tous les jours.",
  },
  {
    question: "Combien coûte un message WhatsApp ?",
    answer:
      "Meta facture environ 0.12€ par conversation marketing. Avec un ROI moyen de 12-26×, chaque euro investi en rapporte entre 12 et 26.",
  },
  {
    question: "Quels outils utilisez-vous ?",
    answer:
      "On utilise les meilleures plateformes WhatsApp Business du marché. On sélectionne et configure l'outil le plus adapté à votre boutique et votre volume.",
  },
  {
    question: "Quelle différence avec Klaviyo / email ?",
    answer:
      "L'email a ~20% d'ouverture, WhatsApp dépasse 96%. C'est un canal complémentaire qui atteint vos clients là où ils sont actifs.",
  },
  {
    question: "Combien de temps pour voir des résultats ?",
    answer:
      "48h après le setup. Dès que les flows de récupération sont actifs, vous récupérez des ventes.",
  },
  {
    question: "Pourquoi passer par Rekovr plutôt que seul ?",
    answer:
      "Configurer WhatsApp Marketing soi-même est possible. Mais les bons flows, messages et timing demandent de l'expertise. On vous fait gagner du temps et maximise vos résultats.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative bg-[#FAFAFA] py-24 md:py-32">
      <div className="absolute inset-0 hero-grid-bg" />
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-syne font-bold text-section text-text text-center mb-16"
        >
          Questions fréquentes
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="brutal-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-black/5 transition-colors"
              >
                <span className="font-syne font-semibold text-text pr-4">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  className="text-whatsapp text-2xl flex-shrink-0"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-text/60 leading-relaxed font-manrope">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
