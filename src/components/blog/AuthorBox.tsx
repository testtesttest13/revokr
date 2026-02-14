import Link from "next/link";

export default function AuthorBox() {
  return (
    <div className="glass-card rounded-2xl p-8">
      <div className="flex items-start gap-5">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full bg-whatsapp/20 flex items-center justify-center flex-shrink-0">
          <span className="text-whatsapp font-syne font-bold text-xl">J</span>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-syne font-bold text-white text-lg">Jules</h3>
          <p className="text-whatsapp text-sm font-medium mb-3">
            Fondateur Rekovr
          </p>
          <p className="text-white/50 text-sm leading-relaxed mb-4">
            Expert e-commerce Shopify depuis 2019. Premier expert certifi&eacute; Kanal en France. J&apos;aide les marques Shopify &agrave; transformer WhatsApp en canal de vente performant.
          </p>

          {/* X link */}
          <Link
            href="https://x.com/julesshopify"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white/30 hover:text-white/60 text-sm transition-colors"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            @julesshopify
          </Link>
        </div>
      </div>
    </div>
  );
}
