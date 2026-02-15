import Image from "next/image";

interface IconConfig {
  logos: { src: string; size: number }[];
  bg: string;
  accent: string;
  label: string;
}

const iconMap: Record<string, IconConfig> = {
  "kanal-avis": {
    logos: [{ src: "/logos/kanal.svg", size: 56 }],
    bg: "bg-[#25D366]/5",
    accent: "#25D366",
    label: "AVIS",
  },
  "code-promo-kanal": {
    logos: [{ src: "/logos/kanal.svg", size: 52 }],
    bg: "bg-amber-500/5",
    accent: "#F59E0B",
    label: "PROMO",
  },
  "kanal-prix-tarif": {
    logos: [{ src: "/logos/kanal.svg", size: 52 }],
    bg: "bg-blue-500/5",
    accent: "#3B82F6",
    label: "PRIX",
  },
  "installer-kanal-shopify-tuto": {
    logos: [{ src: "/logos/kanal.svg", size: 44 }, { src: "/logos/shopify.png", size: 44 }],
    bg: "bg-purple-500/5",
    accent: "#8B5CF6",
    label: "TUTO",
  },
  "kanal-vs-wax-comparatif": {
    logos: [{ src: "/logos/kanal.svg", size: 52 }],
    bg: "bg-rose-500/5",
    accent: "#F43F5E",
    label: "VS",
  },
  "alternatives-kanal-whatsapp-shopify": {
    logos: [{ src: "/logos/kanal.svg", size: 40 }, { src: "/logos/shopify.png", size: 40 }, { src: "/whatsapp-logo.webp", size: 40 }],
    bg: "bg-cyan-500/5",
    accent: "#06B6D4",
    label: "ALTERNATIVES",
  },
  "whatsapp-marketing-ecommerce-guide": {
    logos: [{ src: "/whatsapp-logo.webp", size: 60 }],
    bg: "bg-[#25D366]/5",
    accent: "#25D366",
    label: "GUIDE",
  },
  "recuperer-paniers-abandonnes-whatsapp": {
    logos: [{ src: "/whatsapp-logo.webp", size: 48 }, { src: "/logos/shopify.png", size: 48 }],
    bg: "bg-orange-500/5",
    accent: "#F97316",
    label: "PANIERS",
  },
  "whatsapp-vs-email-marketing-ecommerce": {
    logos: [{ src: "/whatsapp-logo.webp", size: 48 }, { src: "/logos/klaviyo.png", size: 48 }],
    bg: "bg-indigo-500/5",
    accent: "#6366F1",
    label: "VS",
  },
  "automatiser-whatsapp-shopify": {
    logos: [{ src: "/whatsapp-logo.webp", size: 48 }, { src: "/logos/shopify.png", size: 48 }],
    bg: "bg-yellow-500/5",
    accent: "#EAB308",
    label: "AUTO",
  },
  "whatsapp-shopify-integration-guide": {
    logos: [{ src: "/whatsapp-logo.webp", size: 48 }, { src: "/logos/shopify.png", size: 48 }],
    bg: "bg-teal-500/5",
    accent: "#14B8A6",
    label: "INTÉGRATION",
  },
  "whatsapp-web-guide-complet": {
    logos: [{ src: "/whatsapp-logo.webp", size: 52 }, { src: "/logos/meta.png", size: 44 }],
    bg: "bg-slate-500/5",
    accent: "#64748B",
    label: "WEB",
  },
  "templates-messages-whatsapp-ecommerce": {
    logos: [{ src: "/whatsapp-logo.webp", size: 56 }],
    bg: "bg-pink-500/5",
    accent: "#EC4899",
    label: "TEMPLATES",
  },
  "roi-whatsapp-marketing-ecommerce": {
    logos: [{ src: "/whatsapp-logo.webp", size: 56 }],
    bg: "bg-emerald-500/5",
    accent: "#10B981",
    label: "ROI",
  },
  "commerce-conversationnel-guide": {
    logos: [{ src: "/whatsapp-logo.webp", size: 52 }, { src: "/logos/meta.png", size: 44 }],
    bg: "bg-[#25D366]/5",
    accent: "#25D366",
    label: "GUIDE",
  },
  "envoyer-messages-whatsapp-en-masse": {
    logos: [{ src: "/whatsapp-logo.webp", size: 52 }, { src: "/logos/meta.png", size: 44 }],
    bg: "bg-blue-500/5",
    accent: "#3B82F6",
    label: "MASSE",
  },
  "whatsapp-business-guide-ecommerce": {
    logos: [{ src: "/whatsapp-logo.webp", size: 56 }],
    bg: "bg-[#25D366]/5",
    accent: "#25D366",
    label: "BUSINESS",
  },
  "chatbot-whatsapp-shopify": {
    logos: [{ src: "/whatsapp-logo.webp", size: 48 }, { src: "/logos/shopify.png", size: 48 }],
    bg: "bg-violet-500/5",
    accent: "#8B5CF6",
    label: "CHATBOT",
  },
  "statistiques-whatsapp-marketing-2026": {
    logos: [{ src: "/whatsapp-logo.webp", size: 56 }],
    bg: "bg-sky-500/5",
    accent: "#0EA5E9",
    label: "STATS 2026",
  },
  "rgpd-whatsapp-marketing": {
    logos: [{ src: "/whatsapp-logo.webp", size: 52 }, { src: "/logos/meta.png", size: 44 }],
    bg: "bg-red-500/5",
    accent: "#EF4444",
    label: "RGPD",
  },
};

const defaultConfig: IconConfig = {
  logos: [{ src: "/whatsapp-logo.webp", size: 56 }],
  bg: "bg-[#25D366]/5",
  accent: "#25D366",
  label: "ARTICLE",
};

export default function BlogIcon({ slug }: { tags?: string[]; slug: string }) {
  const config = iconMap[slug] || defaultConfig;

  return (
    <div className={`aspect-video ${config.bg} flex items-center justify-center relative overflow-hidden`}>
      {/* Grid pattern */}
      <div className="absolute inset-0 hero-grid-bg opacity-30" />

      {/* Accent corner badge */}
      <span
        className="absolute top-3 right-3 text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-lg border-2 bg-white"
        style={{ borderColor: config.accent, color: config.accent, boxShadow: `2px 2px 0 ${config.accent}` }}
      >
        {config.label}
      </span>

      {/* Logo cards */}
      <div className="relative flex items-center gap-3">
        {config.logos.map((logo, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border-2 p-3 flex items-center justify-center"
            style={{
              borderColor: config.accent,
              boxShadow: `3px 3px 0 ${config.accent}`,
              transform: config.logos.length > 1
                ? `rotate(${i === 0 ? -4 : i === 2 ? 4 : 3}deg)`
                : undefined,
            }}
          >
            <Image
              src={logo.src}
              alt=""
              width={logo.size}
              height={logo.size}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
