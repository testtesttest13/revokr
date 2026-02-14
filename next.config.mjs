/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/blog/kanal", destination: "/blog/kanal-avis", permanent: true },
      { source: "/blog/avis-kanal", destination: "/blog/kanal-avis", permanent: true },
      { source: "/blog/promo-kanal", destination: "/blog/code-promo-kanal", permanent: true },
      { source: "/blog/prix-kanal", destination: "/blog/kanal-prix-tarif", permanent: true },
      { source: "/blog/guide-whatsapp", destination: "/blog/whatsapp-marketing-ecommerce-guide", permanent: true },
      { source: "/blog/whatsapp-web", destination: "/blog/whatsapp-web-guide-complet", permanent: true },
      { source: "/blog/templates", destination: "/blog/templates-messages-whatsapp-ecommerce", permanent: true },
      { source: "/blog/roi", destination: "/blog/roi-whatsapp-marketing-ecommerce", permanent: true },
    ];
  },
};

export default nextConfig;
