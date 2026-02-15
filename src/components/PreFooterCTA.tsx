"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useBooking } from "./BookingProvider";

export default function PreFooterCTA() {
  const { openBooking } = useBooking();

  return (
    <section className="relative bg-[#FAFAFA] py-24 md:py-32">
      <div className="absolute inset-0 hero-grid-bg" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-syne font-bold text-section text-text italic mb-10"
        >
          Le futur du e-commerce est conversationnel.
          <br />
          Passez à WhatsApp.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={openBooking}
            className="bg-[#25D366] text-white font-bold px-8 py-4 border-2 border-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] rounded-xl hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_#1a1a1a] transition-all"
          >
            Réserver un audit gratuit
          </button>
          <Link
            href="/blog"
            className="bg-white text-text font-bold px-8 py-4 border-2 border-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] rounded-xl hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_#1a1a1a] transition-all"
          >
            Découvrir nos guides &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
