interface CTABannerProps {
  affiliateLink: string;
}

export default function CTABanner({ affiliateLink }: CTABannerProps) {
  return (
    <div className="glass-card-accent rounded-2xl p-8 my-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        {/* Icon + text */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            {/* WhatsApp icon */}
            <div className="w-10 h-10 rounded-full bg-whatsapp/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-whatsapp" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
            </div>
            <h3 className="font-syne font-bold text-white text-lg">
              Essayez Kanal gratuitement
            </h3>
          </div>
          <p className="text-white/50 text-sm leading-relaxed">
            La plateforme n&deg;1 de WhatsApp Marketing pour Shopify. Lancez vos premi&egrave;res campagnes en quelques minutes.
          </p>
        </div>

        {/* CTA button */}
        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold px-6 py-3 rounded-full transition-all hover:scale-[1.03] text-sm whitespace-nowrap shadow-[0_0_30px_rgba(37,211,102,0.2)]"
        >
          D&eacute;marrer gratuitement
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
