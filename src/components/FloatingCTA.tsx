"use client";

import { motion } from "framer-motion";

export default function FloatingCTA({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3, duration: 0.5 }}
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative flex items-center gap-2 bg-white/[0.08] hover:bg-white/[0.12] backdrop-blur-xl border border-white/[0.1] hover:border-white/[0.2] pl-3 pr-4 py-2.5 rounded-full transition-all hover:scale-105 shadow-lg">
        <span className="w-5 h-5 rounded-full bg-whatsapp flex items-center justify-center flex-shrink-0">
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          </svg>
        </span>
        <span className="text-white/70 group-hover:text-white text-xs font-medium transition-colors">
          On en parle ?
        </span>
      </div>
    </motion.button>
  );
}
