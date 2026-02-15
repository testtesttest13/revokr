"use client";

export default function Footer() {
  return (
    <footer className="relative bg-white py-16 md:py-20 border-t-2 border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="font-syne font-bold text-xl text-text">Rekovr</span>
              <span className="w-2 h-2 rounded-full bg-whatsapp inline-block" />
            </div>
            <p className="text-text/40 text-sm font-manrope">Vendez plus sur WhatsApp.</p>
          </div>
          <div>
            <h4 className="font-syne font-bold text-text mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-text/40 hover:text-whatsapp text-sm transition-colors font-manrope">Setup</a></li>
              <li><a href="#services" className="text-text/40 hover:text-whatsapp text-sm transition-colors font-manrope">Management</a></li>
              <li><a href="/blog" className="text-text/40 hover:text-whatsapp text-sm transition-colors font-manrope">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-syne font-bold text-text mb-4">Ressources</h4>
            <ul className="space-y-3">
              <li><a href="#stats" className="text-text/40 hover:text-whatsapp text-sm transition-colors font-manrope">Calculateur ROI</a></li>
              <li><a href="#faq" className="text-text/40 hover:text-whatsapp text-sm transition-colors font-manrope">FAQ</a></li>
              <li><a href="/blog" className="text-text/40 hover:text-whatsapp text-sm transition-colors font-manrope">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-syne font-bold text-text mb-4">Contact</h4>
            <ul className="space-y-3">
              <li><a href="https://cal.com/jules-shopify/30min" target="_blank" rel="noopener noreferrer" className="text-text/40 hover:text-whatsapp text-sm transition-colors font-manrope">Audit gratuit</a></li>
              <li><a href="mailto:julestambon13@gmail.com" className="text-text/40 hover:text-whatsapp text-sm transition-colors font-manrope">julestambon13@gmail.com</a></li>
              <li><a href="https://x.com/julesshopify" target="_blank" rel="noopener noreferrer" className="text-text/40 hover:text-whatsapp text-sm transition-colors font-manrope">@julesshopify</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t-2 border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text/30 text-sm font-manrope">&copy; 2026 Rekovr. Expert WhatsApp Marketing.</p>
        </div>
      </div>
    </footer>
  );
}
