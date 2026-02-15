"use client";

import { motion } from "framer-motion";

export default function UseCases() {
  return (
    <section id="services" className="relative bg-[#FAFAFA] py-20 md:py-28">
      <div className="absolute inset-0 hero-grid-bg" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-whatsapp text-xs font-mono uppercase tracking-widest mb-3">
            {"// Use cases"}
          </p>
          <h2 className="font-syne font-bold text-section text-text">
            WhatsApp &times; Shopify, en action.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-5 mb-5">
          {/* Card 1 — Paniers abandonnés */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 brutal-card rounded-2xl p-6 md:p-8 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-red-500/10 border-2 border-red-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                </span>
                <h3 className="font-syne font-bold text-lg text-text">
                  Paniers abandonnés
                </h3>
              </div>
              <span className="font-syne font-bold text-2xl text-whatsapp">35%</span>
            </div>
            <p className="text-muted text-sm mb-5">
              de paniers récupérés automatiquement
            </p>

            {/* Shopify checkout → WhatsApp recovery visual */}
            <div className="flex gap-3 items-start">
              {/* Mini Shopify abandoned checkout */}
              <div className="flex-1 rounded-xl bg-white border-2 border-black/10 p-4 text-xs">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-[#96BF48]" viewBox="0 0 109.5 124.5" fill="currentColor">
                    <path d="M74.7 14.8c0-.1-.1-.2-.2-.2-.1 0-1.4-.1-1.4-.1s-1.1-1.1-1.2-1.2c0 0-.1 0-.1 0l-2.8 53.8L95.5 60c0 0-1-6.9-1-7.2C91.5 24.5 75.1 15 74.7 14.8zM62.1 26.6l-1.6 5c-1.5-.5-3.3-.9-5.3-1-.8 0-1.5 0-2.2.1 1.5-2.4 3.7-4.3 6.1-4.5C60.1 26.1 61.1 26.3 62.1 26.6zM56.3 18.3c.2 0 .5 0 .8.1-3.2 1.5-6.6 5.3-8.1 12.9-2 .6-3.9 1.2-5.6 1.7C45.5 25.4 50.1 18.3 56.3 18.3zM54.8 68.1l-2.1-1.1c-2.4-1.2-3.7-2.8-3.7-4.8 0-3.7 3.4-5.4 6.5-5.5 1.1 0 2.6.3 3.7.7L54.8 68.1zM57.3 74.4c5.5 0 8.5 2.4 8.5 2.4l-2.8 8.3c0 0-2.4-1.9-5.8-1.9-4.2 0-5.5 2.6-5.5 4.2 0 4.7 9.5 6.5 9.5 15.5 0 7.7-4.9 12.6-11.4 12.6-7.9 0-11.9-4.9-11.9-4.9l2.1-7c1.6 2.3 4.8 4.6 8.1 4.6 2.1 0 3.9-1.1 3.9-3.4 0-5.9-9.4-6.2-9.4-15 0-7.7 5.5-15.1 16.7-15.3z"/>
                  </svg>
                  <span className="text-text/50 font-semibold">Checkout abandonné</span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-100 to-purple-100 border-2 border-black/10 flex-shrink-0 flex items-center justify-center">
                    <span className="text-sm">🧴</span>
                  </div>
                  <div>
                    <p className="text-text/60 font-medium">Sérum Visage Bio</p>
                    <p className="text-text/40">49.90&euro;</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 border-2 border-black/10 flex-shrink-0 flex items-center justify-center">
                    <span className="text-sm">🧊</span>
                  </div>
                  <div>
                    <p className="text-text/60 font-medium">Crème Hydratante</p>
                    <p className="text-text/40">34.90&euro;</p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t-2 border-black/10 flex justify-between">
                  <span className="text-text/40">Total</span>
                  <span className="text-text/70 font-semibold">84.80&euro;</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center gap-1 pt-8 flex-shrink-0">
                <svg className="w-5 h-5 text-whatsapp" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* WhatsApp recovery message */}
              <div className="flex-1 rounded-xl bg-[#dcf8c6] border-2 border-whatsapp/30 p-4 text-xs">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded-full bg-whatsapp flex items-center justify-center">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    </svg>
                  </div>
                  <span className="text-whatsapp font-semibold">WhatsApp</span>
                  <span className="text-text/30 ml-auto">14:32</span>
                </div>
                {/* Product image in message */}
                <div className="bg-white/60 rounded-lg rounded-tl-none p-3 mb-2 border border-whatsapp/20">
                  <div className="flex items-center gap-2 mb-2 bg-white rounded-md p-2 border border-black/5">
                    <div className="w-8 h-8 rounded bg-gradient-to-br from-pink-100 to-purple-100 flex-shrink-0 flex items-center justify-center">
                      <span className="text-xs">🧴</span>
                    </div>
                    <div className="text-[10px]">
                      <p className="text-text/60">Sérum Visage Bio</p>
                      <p className="text-text/40">49.90&euro;</p>
                    </div>
                  </div>
                  <p className="text-text/80 leading-relaxed">
                    Hey Marie ! Tu as oublié tes produits 👀
                  </p>
                  <p className="text-whatsapp font-semibold mt-1 underline">
                    Finaliser ma commande &rarr;
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-whatsapp/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-whatsapp/60 text-[10px]">Lu &middot; 14:33</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 — Campagnes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 brutal-card rounded-2xl p-6 md:p-8 flex flex-col"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-whatsapp/10 border-2 border-whatsapp/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-whatsapp" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.006zm2.116-2.127l-.006.005-.005-.005.005-.005.006.005zm-.005 2.127l-.006-.006.006-.005.005.005-.005.006z" />
                  </svg>
                </span>
                <h3 className="font-syne font-bold text-lg text-text">
                  Campagnes
                </h3>
              </div>
              <span className="font-syne font-bold text-2xl text-whatsapp">80%</span>
            </div>
            <p className="text-muted text-sm mb-5">
              taux d&apos;ouverture moyen
            </p>

            {/* Campaign broadcast visual */}
            <div className="flex-1 rounded-xl bg-white border-2 border-black/10 p-4 text-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <svg className="w-3 h-3 text-whatsapp" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                  <span className="text-text/50 font-mono uppercase tracking-wider text-[10px]">Vente Flash</span>
                </div>
                <span className="bg-whatsapp/10 text-whatsapp text-[10px] px-2 py-0.5 rounded-full font-semibold border border-whatsapp/20 flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-whatsapp" />
                  Envoyée
                </span>
              </div>

              {/* Broadcast recipients */}
              <div className="space-y-2.5 mb-4">
                {[
                  { name: "Marie L.", initials: "ML", color: "from-pink-200 to-rose-200", status: "Lu", time: "2min" },
                  { name: "Thomas B.", initials: "TB", color: "from-blue-200 to-indigo-200", status: "Lu", time: "4min" },
                  { name: "Sophie M.", initials: "SM", color: "from-amber-200 to-orange-200", status: "Lu", time: "5min" },
                  { name: "Lucas D.", initials: "LD", color: "from-emerald-200 to-teal-200", status: "Livré", time: "6min" },
                ].map((r) => (
                  <div key={r.name} className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${r.color} flex-shrink-0 flex items-center justify-center border border-black/10`}>
                      <span className="text-[8px] text-text/70 font-bold">{r.initials}</span>
                    </div>
                    <span className="text-text/60 flex-1">{r.name}</span>
                    <span className={`text-[10px] flex items-center gap-0.5 ${r.status === "Lu" ? "text-whatsapp" : "text-text/30"}`}>
                      {r.status === "Lu" && (
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      )}
                      {r.status}
                    </span>
                    <span className="text-text/25 w-8 text-right">{r.time}</span>
                  </div>
                ))}
              </div>

              <div className="border-t-2 border-black/10 pt-3 flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                  <svg className="w-3 h-3 text-text/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                  <span className="text-text/40">3,410 envoyés</span>
                </div>
                <span className="text-whatsapp font-semibold">80% ouverts</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-5 gap-5">
          {/* Card 3 — Upsell post-achat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="md:col-span-2 brutal-card rounded-2xl p-6 md:p-8 flex flex-col"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-purple-500/10 border-2 border-purple-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                </span>
                <h3 className="font-syne font-bold text-lg text-text">
                  Upsell post-achat
                </h3>
              </div>
              <span className="font-syne font-bold text-2xl text-whatsapp">+20%</span>
            </div>
            <p className="text-muted text-sm mb-5">
              de panier moyen
            </p>

            {/* WhatsApp upsell conversation mockup */}
            <div className="flex-1 rounded-xl bg-[#e5ddd5] border-2 border-black/10 p-4 text-xs">
              {/* Store message with product card */}
              <div className="bg-[#dcf8c6] rounded-lg rounded-tl-none p-3 mb-3 border border-whatsapp/20">
                <p className="text-text/80 mb-2">
                  Merci pour ta commande ! Celles qui ont acheté le Sérum adorent aussi :
                </p>
                {/* Mini product card - Shopify style */}
                <div className="bg-white rounded-lg p-2.5 flex items-center gap-3 border border-black/10">
                  <div className="w-12 h-12 rounded-md bg-gradient-to-br from-amber-100 to-yellow-100 border-2 border-black/10 flex-shrink-0 flex items-center justify-center">
                    <span className="text-lg">🌙</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-text/70 font-medium truncate">Huile de Nuit</p>
                    <div className="flex items-center gap-2">
                      <p className="text-whatsapp font-semibold">29.90&euro;</p>
                      <span className="text-text/30 line-through text-[10px]">39.90&euro;</span>
                    </div>
                    <div className="flex items-center gap-0.5 mt-0.5">
                      {[1,2,3,4,5].map(s => (
                        <svg key={s} className="w-2.5 h-2.5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-text/30 text-[8px] ml-0.5">(127)</span>
                    </div>
                  </div>
                </div>
                <p className="text-whatsapp font-semibold mt-2 underline">
                  Ajouter &agrave; ma commande &rarr;
                </p>
              </div>

              {/* Client reply */}
              <div className="flex justify-end">
                <div className="bg-black/5 rounded-lg rounded-tr-none p-3 max-w-[80%] border-2 border-black/10">
                  <p className="text-text/70">
                    Trop bien, je prends !
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4 — Programme VIP — with Shopify customer segments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="md:col-span-3 brutal-card rounded-2xl p-6 md:p-8 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-yellow-500/10 border-2 border-yellow-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </span>
                <h3 className="font-syne font-bold text-lg text-text">
                  Segments VIP
                </h3>
              </div>
              <span className="font-syne font-bold text-2xl text-whatsapp">3&times;</span>
            </div>
            <p className="text-muted text-sm mb-5">
              la LTV de vos meilleurs clients
            </p>

            {/* Shopify-style customer segment table */}
            <div className="rounded-xl bg-white border-2 border-black/10 overflow-hidden text-xs">
              {/* Header row */}
              <div className="flex items-center gap-4 px-4 py-2.5 border-b-2 border-black/10 bg-black/5 text-text/50 font-mono uppercase tracking-wider text-[10px]">
                <span className="flex-1">Client</span>
                <span className="w-20 text-center hidden sm:block">Commandes</span>
                <span className="w-20 text-center hidden sm:block">Total</span>
                <span className="w-24 text-right">Segment</span>
              </div>

              {[
                { name: "Marie Laurent", initials: "ML", color: "from-pink-200 to-rose-200", orders: "12", total: "1,420€", tag: "VIP Gold", tagColor: "bg-yellow-100 text-yellow-700 border border-yellow-300", tagIcon: "👑" },
                { name: "Thomas Bertrand", initials: "TB", color: "from-blue-200 to-indigo-200", orders: "8", total: "890€", tag: "VIP Silver", tagColor: "bg-gray-100 text-gray-600 border border-gray-300", tagIcon: "⭐" },
                { name: "Sophie Martin", initials: "SM", color: "from-amber-200 to-orange-200", orders: "15", total: "2,100€", tag: "VIP Gold", tagColor: "bg-yellow-100 text-yellow-700 border border-yellow-300", tagIcon: "👑" },
                { name: "Lucas Dubois", initials: "LD", color: "from-emerald-200 to-teal-200", orders: "5", total: "420€", tag: "Fidèle", tagColor: "bg-green-100 text-whatsapp border border-whatsapp/30", tagIcon: "💚" },
              ].map((c) => (
                <div key={c.name} className="flex items-center gap-4 px-4 py-3 border-b border-black/5 last:border-0 hover:bg-black/[0.02] transition-colors">
                  <div className="flex items-center gap-2.5 flex-1 min-w-0">
                    <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${c.color} flex-shrink-0 flex items-center justify-center border border-black/10`}>
                      <span className="text-[9px] text-text/70 font-bold">{c.initials}</span>
                    </div>
                    <span className="text-text/70 font-medium truncate">{c.name}</span>
                  </div>
                  <span className="w-20 text-center text-text/40 hidden sm:block">{c.orders}</span>
                  <span className="w-20 text-center text-text/60 font-medium hidden sm:block">{c.total}</span>
                  <span className={`w-24 text-[10px] px-2 py-1 rounded-full font-semibold ${c.tagColor} flex items-center justify-end gap-1`}>
                    <span className="text-[8px]">{c.tagIcon}</span>
                    {c.tag}
                  </span>
                </div>
              ))}
            </div>

            {/* Shopify-style segment actions */}
            <div className="flex items-center gap-3 mt-4">
              <div className="flex items-center gap-1.5 bg-whatsapp/10 border-2 border-whatsapp/30 rounded-full px-3 py-1.5 text-[10px] text-whatsapp font-semibold">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
                Envoyer offre VIP
              </div>
              <div className="flex items-center gap-1.5 bg-black/5 border-2 border-black/10 rounded-full px-3 py-1.5 text-[10px] text-text/50">
                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Accès anticipé
              </div>
              <div className="flex items-center gap-1.5 bg-black/5 border-2 border-black/10 rounded-full px-3 py-1.5 text-[10px] text-text/50">
                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                Vente privée
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
