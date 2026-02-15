"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "./BookingProvider";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Résultats", href: "#stats" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-white border-b-2 border-[#1a1a1a]"
            : "bg-transparent border-b-2 border-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-1.5">
          <span className="font-syne font-bold text-xl text-text">
            Rekovr
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-whatsapp inline-block" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text/60 hover:text-text transition-colors text-sm font-manrope font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={openBooking}
          className="hidden md:inline-flex items-center gap-2 bg-whatsapp text-white font-bold text-sm pl-4 pr-5 py-2.5 rounded-xl border-2 border-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_#1a1a1a] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
        >
          <span className="relative flex h-6 w-6 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
            <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
            </span>
          </span>
          Audit gratuit
        </button>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span
            className={`w-5 h-0.5 bg-[#1a1a1a] transition-all ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-[#1a1a1a] transition-all ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-[#1a1a1a] transition-all ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-4 mt-2 rounded-xl bg-white border-2 border-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-text/80 hover:text-text text-lg font-manrope font-medium"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  openBooking();
                }}
                className="bg-whatsapp text-white font-bold text-center px-5 py-3 rounded-xl mt-2 border-2 border-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_#1a1a1a] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
              >
                Réserver un appel
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
