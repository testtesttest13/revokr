interface CTABannerProps {
  affiliateLink: string;
}

export default function CTABanner({ affiliateLink }: CTABannerProps) {
  return (
    <div className="bg-whatsapp/5 rounded-xl border-2 border-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] p-8 my-10">
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
            <h3 className="font-syne font-bold text-[#1a1a1a] text-lg">
              Boostez vos ventes WhatsApp
            </h3>
          </div>
          <p className="text-[#1a1a1a]/50 text-sm leading-relaxed">
            R&eacute;cup&eacute;rez vos paniers abandonn&eacute;s, lancez des campagnes cibl&eacute;es et augmentez votre CA avec WhatsApp.
          </p>
        </div>

        {/* CTA button */}
        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-xl border-2 border-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a] transition-all hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#1a1a1a] active:translate-y-0 active:shadow-[2px_2px_0_#1a1a1a] text-sm whitespace-nowrap"
        >
          R&eacute;server un audit gratuit
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
