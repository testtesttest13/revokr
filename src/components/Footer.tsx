"use client";

export default function Footer() {
  return (
    <footer className="relative bg-[#060606] py-16 md:py-20 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="font-syne font-bold text-xl text-white">Rekovr</span>
              <span className="w-2 h-2 rounded-full bg-whatsapp inline-block" />
            </div>
            <p className="text-white/40 text-sm">Vendez plus sur WhatsApp.</p>
          </div>
          <div>
            <h4 className="font-syne font-bold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/40 hover:text-whatsapp text-sm transition-colors">Setup</a></li>
              <li><a href="#services" className="text-white/40 hover:text-whatsapp text-sm transition-colors">Management</a></li>
              <li><a href="https://apps.shopify.com/kanal-marketing-ai" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-whatsapp text-sm transition-colors">Installer Kanal</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-syne font-bold text-white mb-4">Ressources</h4>
            <ul className="space-y-3">
              <li><a href="#stats" className="text-white/40 hover:text-whatsapp text-sm transition-colors">Calculateur ROI</a></li>
              <li><a href="#faq" className="text-white/40 hover:text-whatsapp text-sm transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-syne font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li><a href="https://cal.com/jules-shopify/30min" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-whatsapp text-sm transition-colors">Audit gratuit</a></li>
              <li><a href="mailto:julestambon13@gmail.com" className="text-white/40 hover:text-whatsapp text-sm transition-colors">julestambon13@gmail.com</a></li>
              <li><a href="https://x.com/julesshopify" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-whatsapp text-sm transition-colors">@julesshopify</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-sm">&copy; 2026 Rekovr. Expert certifié Kanal.</p>
          <div className="flex items-center gap-2 text-white/25 text-sm">
            <span>Propulsé par</span>
            <a href="https://apps.shopify.com/kanal-marketing-ai" target="_blank" rel="noopener noreferrer" className="font-syne font-bold text-whatsapp hover:text-whatsapp-dark transition-colors">Kanal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
