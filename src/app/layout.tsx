import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rekovr — Expert WhatsApp Marketing pour Shopify | Vendez plus avec WhatsApp",
  description:
    "On configure et optimise WhatsApp pour votre boutique Shopify. Paniers abandonnés, campagnes, upsells. +96% de taux d'ouverture. Audit gratuit.",
  keywords: [
    "WhatsApp Marketing",
    "Shopify",
    "paniers abandonnés",
    "Kanal",
    "e-commerce",
    "WhatsApp Business",
    "récupération paniers",
    "campagnes WhatsApp",
  ],
  authors: [{ name: "Rekovr" }],
  openGraph: {
    title: "Rekovr — Expert WhatsApp Marketing pour Shopify",
    description:
      "On configure et optimise WhatsApp pour votre boutique Shopify. Paniers abandonnés, campagnes, upsells. +96% de taux d'ouverture.",
    url: "https://getrekovr.com",
    siteName: "Rekovr",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rekovr — Expert WhatsApp Marketing pour Shopify",
    description:
      "On configure et optimise WhatsApp pour votre boutique Shopify. +96% de taux d'ouverture. Audit gratuit.",
    creator: "@julesshopify",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://getrekovr.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rekovr",
    url: "https://getrekovr.com",
    description:
      "Expert WhatsApp Marketing pour e-commerçants Shopify, propulsé par Kanal.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "julestambon13@gmail.com",
      contactType: "customer service",
    },
    sameAs: ["https://x.com/julesshopify"],
  };

  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Rekovr",
    url: "https://getrekovr.com",
    description:
      "Agence d'experts WhatsApp Marketing pour e-commerçants Shopify. Configuration Kanal, récupération de paniers abandonnés, campagnes WhatsApp.",
    priceRange: "€€",
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Est-ce que WhatsApp marche pour mon type de boutique ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si vous vendez sur Shopify, oui. Mode, beauté, alimentaire, déco — WhatsApp est universel, vos clients l'utilisent déjà tous les jours.",
        },
      },
      {
        "@type": "Question",
        name: "Combien coûte un message WhatsApp ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Meta facture environ 0.12€ par conversation marketing. Avec un ROI moyen de 12-26×, chaque euro investi en rapporte entre 12 et 26.",
        },
      },
      {
        "@type": "Question",
        name: "C'est quoi Kanal ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La plateforme n°1 de WhatsApp Marketing pour Shopify. C'est l'outil qu'on utilise pour automatiser vos flows et campagnes. Le Klaviyo de WhatsApp.",
        },
      },
      {
        "@type": "Question",
        name: "Quelle différence avec Klaviyo / email ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L'email a ~20% d'ouverture, WhatsApp dépasse 96%. C'est un canal complémentaire qui atteint vos clients là où ils sont actifs.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps pour voir des résultats ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "48h après le setup. Dès que les flows de récupération sont actifs, vous récupérez des ventes.",
        },
      },
      {
        "@type": "Question",
        name: "Pourquoi passer par Rekovr plutôt que seul ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vous pouvez installer Kanal seul et on vous y encourage. Mais les bons flows, messages et timing demandent de l'expertise. C'est notre métier.",
        },
      },
    ],
  };

  return (
    <html lang="fr" className={`${syne.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdLocalBusiness),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdFAQ),
          }}
        />
      </head>
      <body className="font-manrope antialiased">
        {children}
        <Script
          id="cal-embed"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
              Cal("init", "30min", {origin:"https://app.cal.com"});
              Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
            `,
          }}
        />
      </body>
    </html>
  );
}
