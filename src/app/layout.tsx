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
  title: "Rekovr — Expert WhatsApp Marketing pour Shopify | Boostez votre e-commerce",
  description:
    "On configure et optimise WhatsApp pour votre boutique Shopify. Paniers abandonnés, campagnes, upsells. +80% de taux d'ouverture. Audit gratuit.",
  keywords: [
    "WhatsApp Marketing",
    "Shopify",
    "paniers abandonnés",
    "e-commerce",
    "WhatsApp Business",
    "récupération paniers",
    "campagnes WhatsApp",
  ],
  authors: [{ name: "Rekovr" }],
  openGraph: {
    title: "Rekovr — Expert WhatsApp Marketing pour Shopify",
    description:
      "On configure et optimise WhatsApp pour votre boutique Shopify. Paniers abandonnés, campagnes, upsells. +80% de taux d'ouverture.",
    url: "https://getrekovr.com",
    siteName: "Rekovr",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rekovr — Expert WhatsApp Marketing pour Shopify",
    description:
      "On configure et optimise WhatsApp pour votre boutique Shopify. +80% de taux d'ouverture. Audit gratuit.",
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
      "Agence experte en WhatsApp Marketing pour e-commerçants Shopify.",
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
      "Agence d'experts WhatsApp Marketing pour e-commerçants Shopify. Récupération de paniers abandonnés, campagnes WhatsApp, automatisation.",
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
        name: "Quels outils utilisez-vous ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "On utilise les meilleures plateformes WhatsApp du marché pour automatiser vos flows et campagnes. On sélectionne l'outil adapté à votre boutique.",
        },
      },
      {
        "@type": "Question",
        name: "Quelle différence avec Klaviyo / email ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L'email reste un pilier du e-commerce (~20% d'ouverture). WhatsApp le complète avec ~80% d'ouverture. Les deux ensemble, c'est la meilleure combinaison.",
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
          text: "Configurer WhatsApp Marketing soi-même est possible. Mais les bons flows, messages et timing demandent de l'expertise. On vous fait gagner du temps et maximise vos résultats.",
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
