# PROMPT CLAUDE CODE — SYSTÈME BLOG SEO REKOVR

> Ce fichier contient TOUTES les informations nécessaires pour implémenter le système blog complet de getrekovr.com. Architecture, design, 20 articles avec contenu, SEO technique, maillage interne, et section blog sur la landing page.

---

## TABLE DES MATIÈRES

1. [CONTEXTE PROJET](#1-contexte-projet)
2. [ARCHITECTURE TECHNIQUE DU BLOG](#2-architecture-technique-du-blog)
3. [DESIGN SYSTEM BLOG](#3-design-system-blog)
4. [STRUCTURE SEO DE CHAQUE ARTICLE](#4-structure-seo-de-chaque-article)
5. [LES 20 ARTICLES — CONTENU COMPLET](#5-les-20-articles)
6. [MAILLAGE INTERNE](#6-maillage-interne)
7. [LIENS EXTERNES & BACKLINKS](#7-liens-externes)
8. [IMAGES PAR ARTICLE](#8-images-par-article)
9. [SECTION BLOG SUR LA LANDING PAGE](#9-section-blog-landing)
10. [SCHEMA & META SEO](#10-schema-meta-seo)
11. [DONNÉES & STATISTIQUES CLÉS](#11-donnees-statistiques)
12. [REDIRECTIONS & SITEMAP](#12-redirections-sitemap)

---

## 1. CONTEXTE PROJET

### L'entreprise
- **Nom** : Rekovr
- **URL** : getrekovr.com
- **Activité** : Agence WhatsApp Marketing pour e-commerçants Shopify, propulsée par Kanal
- **Fondateur** : Jules — entrepreneur e-commerce (Maison Novara, Graine de Lascars, SAURAE), premier expert certifié Kanal en France
- **Localisation** : Aix-en-Provence, France
- **Positionnement** : "On transforme WhatsApp en machine à ventes pour votre boutique Shopify"
- **Modèle économique** : Commissions affiliation Kanal + services expert (audit, setup, management)

### Stack technique
- Next.js 14+ (App Router)
- Tailwind CSS
- Framer Motion
- MDX ou Contentlayer pour le blog
- Vercel (hosting)
- Design : neo-brutalist inspiré Gumroad, palette dark avec accents verts (#00D47E)

### Objectif SEO
- Dominer page 1 FR sur toutes les requêtes "Kanal" (avis, prix, code promo, tuto, alternative)
- Se positionner comme LA référence FR du WhatsApp marketing e-commerce
- Générer 5K-15K visites organiques/mois en 3-6 mois
- Convertir via lien affilié Kanal + leads audit Calendly

---

## 2. ARCHITECTURE TECHNIQUE DU BLOG

### Structure des fichiers
```
/app
  /blog
    /page.tsx                    → Page listing blog (grille articles)
    /[slug]
      /page.tsx                  → Template article individuel
    /tag
      /[tag]/page.tsx            → Page tag (filtre par tag)
    /sitemap.ts                  → Sitemap dynamique blog
/content
  /blog
    /kanal-avis.mdx
    /code-promo-kanal.mdx
    /kanal-prix-tarif.mdx
    ... (20 fichiers MDX)
/lib
  /blog.ts                       → Utilitaires blog (getPost, getAllPosts, getPostsByTag)
/components
  /blog
    /BlogCard.tsx                → Carte article dans la grille
    /BlogHeader.tsx              → Header article (titre, auteur, date, tags, temps lecture)
    /TableOfContents.tsx         → Table des matières sticky sidebar
    /AuthorBox.tsx               → Encart auteur en bas d'article
    /RelatedPosts.tsx            → Articles connexes
    /ShareButtons.tsx            → Boutons partage (X, LinkedIn, WhatsApp, copier lien)
    /CTABanner.tsx               → Bannière CTA (audit gratuit / lien affilié)
    /BlogNewsletter.tsx          → Formulaire newsletter intégré
    /TagPill.tsx                 → Pill tag cliquable
    /ReadingProgress.tsx         → Barre de progression lecture en haut
    /BlogImage.tsx               → Composant image optimisé avec légende
    /Breadcrumbs.tsx             → Fil d'Ariane
```

### Frontmatter MDX (chaque article)
```yaml
---
title: "Titre H1 optimisé SEO"
slug: "url-slug"
description: "Meta description 150-160 caractères"
author: "Jules"
authorRole: "Fondateur Rekovr · Expert Certifié Kanal"
authorImage: "/images/authors/jules.webp"
authorBio: "Entrepreneur e-commerce depuis 2019. Gère 3 boutiques Shopify et a généré +500K€ via WhatsApp marketing avec Kanal."
publishedAt: "2026-02-15"
updatedAt: "2026-02-15"
readingTime: 12
category: "whatsapp-marketing"
tags: ["kanal", "shopify", "whatsapp-marketing", "avis"]
image: "/images/blog/kanal-avis-hero.webp"
imageAlt: "Interface Kanal WhatsApp Marketing sur Shopify — Dashboard analytics"
ogImage: "/images/blog/og/kanal-avis.webp"
featured: true
draft: false
seoTitle: "Kanal Avis 2026 : Mon Test Complet de l'App WhatsApp Shopify"
canonical: "https://getrekovr.com/blog/kanal-avis"
schema: "Article"
faqSchema: true
affiliateLink: "https://apps.shopify.com/kanal-marketing-ai?ref=rekovr"
---
```

### Tags système (taxonomie)
```
Tags principaux :
- kanal                    → Tout ce qui concerne Kanal
- shopify                  → Spécifique Shopify
- whatsapp-marketing       → Marketing WhatsApp général
- ecommerce                → E-commerce général
- automatisation           → Flows, chatbots, auto
- comparatif               → Articles vs/comparaison
- guide                    → Guides complets
- tutoriel                 → Tutos pas à pas
- avis                     → Tests et reviews
- strategie                → Stratégie marketing
- panier-abandonne         → Récupération paniers
- roi                      → ROI et performance
- templates                → Modèles et templates
- whatsapp-business        → WhatsApp Business App/API
- prix                     → Pricing et coûts
```

---

## 3. DESIGN SYSTEM BLOG

### Page listing blog (/blog)

Design neo-brutalist dark :
- Background : #0A0A1B
- Cards : fond #1A1A2E, border 2px solid #2A2A4A, border-radius 12px
- Hover cards : border-color #00D47E, translateY(-4px), shadow glow vert subtil
- Image card : aspect-ratio 16/9, object-cover, border-radius top 12px
- Tag pill : fond rgba(0,212,126,0.15), texte #00D47E, font-size 12px, border-radius 20px, padding 4px 12px
- Titre card : font-size 20px, font-weight 700, blanc #FFFFFF, line-clamp 2
- Excerpt : font-size 14px, couleur #9CA3AF, line-clamp 3
- Footer card : flex row, avatar auteur 28px rond, "Jules" 13px, point séparateur, "15 fév 2026" 13px, point, "12 min" 13px
- Layout : hero featured en haut (full width), puis grille 3 colonnes desktop / 1 colonne mobile
- Filtres tags en haut : pills horizontales scrollables, actif = fond #00D47E texte noir
- CTA newsletter entre les rangées 2 et 3
- Bouton "Voir tous les articles" : ghost button border vert

### Page article individuel (/blog/[slug])

Layout 2 colonnes desktop :
- Sidebar gauche : Table des matières sticky (top 100px), width 250px
- Contenu principal : max-width 720px, centré
- Reading progress bar : sticky top 0, height 3px, background #00D47E, z-index 50

Header article :
- Breadcrumbs : Accueil > Blog > {Titre} (liens, couleur #6B7280, séparateur ">")
- Tags : pills horizontales sous les breadcrumbs
- H1 : font-size 40px desktop / 28px mobile, font-weight 800, color blanc, line-height 1.2
- Meta auteur : flex row, avatar 40px, "Par Jules", "Fondateur Rekovr · Expert Certifié Kanal"
- Meta date : "15 février 2026 · Mis à jour le 15 fév 2026 · 12 min de lecture"
- Share buttons : icônes X, LinkedIn, WhatsApp, Copier lien — style ghost, hover vert
- Hero image : full-width, max-height 500px, border-radius 16px, margin-top 32px

Prose article :
```css
max-width: 720px
color: #E5E7EB
font-size: 17px
line-height: 1.8
font-family: 'Inter', system-ui

h2: font-size 28px, font-weight 800, color #FFFFFF, margin-top 48px, margin-bottom 16px, scroll-margin-top 80px
h3: font-size 22px, font-weight 700, color #FFFFFF, margin-top 32px, margin-bottom 12px
p: margin-bottom 20px
a: color #00D47E, text-decoration underline, hover: brightness 1.2
img: border-radius 12px, margin 32px 0, width 100%
blockquote: border-left 4px solid #00D47E, padding-left 20px, font-style italic, color #9CA3AF, background rgba(0,212,126,0.05), padding 16px 20px, border-radius 0 8px 8px 0
table: width 100%, border-collapse collapse
th: background rgba(0,212,126,0.1), color #00D47E, padding 12px, text-align left, font-weight 600
td: border 1px solid #2A2A4A, padding 12px, color #E5E7EB
code inline: background #1A1A2E, padding 2px 6px, border-radius 4px, font-size 15px, color #00D47E
ul/ol: padding-left 24px, margin-bottom 20px
li: margin-bottom 8px
```

CTA Banner inline (milieu d'article) :
- Background : gradient #1A2A3E → #0D1A2E
- Border : 1px solid #00D47E/30
- Border-radius : 16px
- Padding : 32px
- Icône : emoji ou Lucide icon
- Titre : "Essayez Kanal gratuitement" — 20px bold blanc
- Texte : "Notre lien partenaire vous donne accès à un essai gratuit." — 15px #9CA3AF
- Bouton : fond #00D47E, texte noir, font-weight 700, border-radius 8px, padding 12px 24px
- Hover : scale 1.02, shadow glow vert

Author box (bas d'article) :
- Background : #1A1A2E, border-radius 16px, padding 32px
- Avatar : 64px rond, border 2px solid #00D47E
- Nom : "Jules" — 18px bold blanc
- Rôle : "Fondateur Rekovr · Expert Certifié Kanal" — 14px #00D47E
- Bio : 2-3 lignes — 15px #9CA3AF
- Liens sociaux : icônes X et LinkedIn

Related posts (3 cards) :
- Titre section : "Articles connexes" — 24px bold
- 3 BlogCard en row, même design que /blog

CTA final (avant related posts) :
- Full-width, background gradient dark→vert subtil
- "Prêt à booster vos ventes sur WhatsApp ?"
- "On configure Kanal pour vous en 48h."
- 2 boutons : [Audit Gratuit →] primary vert + [Essayer Kanal →] ghost

FAQ section :
- Accordéon : cliquer sur question → ouvre réponse
- Icône chevron qui rotate
- Question : 16px bold blanc
- Réponse : 15px #9CA3AF
- Border-bottom entre chaque question
- Schema FAQPage JSON-LD

---

## 4. STRUCTURE SEO DE CHAQUE ARTICLE

### Head / Meta (Next.js generateMetadata)
```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug)
  return {
    title: `${post.seoTitle} — Rekovr`,
    description: post.description,
    authors: [{ name: 'Jules' }],
    openGraph: {
      title: post.seoTitle,
      description: post.description,
      url: `https://getrekovr.com/blog/${post.slug}`,
      siteName: 'Rekovr',
      images: [{ url: `https://getrekovr.com${post.ogImage}`, width: 1200, height: 630 }],
      locale: 'fr_FR',
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: ['Jules'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle,
      description: post.description,
      images: [`https://getrekovr.com${post.ogImage}`],
    },
    alternates: {
      canonical: `https://getrekovr.com/blog/${post.slug}`,
    },
  }
}
```

### Schema JSON-LD (injecté par article)
Chaque article inclut :
1. Schema Article (ou BlogPosting)
2. Schema BreadcrumbList
3. Schema FAQPage (si faqSchema: true)

```json
[
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "{title}",
    "description": "{description}",
    "image": "https://getrekovr.com{image}",
    "author": {
      "@type": "Person",
      "name": "Jules",
      "url": "https://getrekovr.com",
      "jobTitle": "Fondateur Rekovr · Expert Certifié Kanal"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Rekovr",
      "url": "https://getrekovr.com",
      "logo": { "@type": "ImageObject", "url": "https://getrekovr.com/images/logo.webp" }
    },
    "datePublished": "{publishedAt}",
    "dateModified": "{updatedAt}",
    "mainEntityOfPage": "https://getrekovr.com/blog/{slug}",
    "wordCount": "{wordCount}",
    "articleSection": "{category}"
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://getrekovr.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://getrekovr.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "{title}" }
    ]
  }
]
```

---

## 5. LES 20 ARTICLES — PLAN COMPLET

### Vue d'ensemble avec priorités et calendrier

| # | Slug | Titre SEO | Volume | KD | Priorité | Semaine |
|---|------|-----------|--------|-----|----------|---------|
| 1 | kanal-avis | Kanal Avis 2026 : Mon Test Complet | 400-600 | 10-15 | URGENTE | S1 |
| 2 | code-promo-kanal | Code Promo Kanal 2026 : Offre Exclusive | 50-150 | 0-5 | URGENTE | S1 |
| 3 | kanal-prix-tarif | Kanal Prix & Tarifs 2026 : Le Vrai Coût | 100-200 | 5-10 | HAUTE | S1 |
| 4 | installer-kanal-shopify-tuto | Installer Kanal sur Shopify : Tuto | 50-100 | 5-8 | HAUTE | S2 |
| 5 | kanal-vs-wax-comparatif | Kanal vs WAX 2026 : Comparatif | 100-200 | 5-10 | HAUTE | S2 |
| 6 | alternatives-kanal-whatsapp-shopify | Top 7 Alternatives Kanal | 80-150 | 8 | MOYENNE | S3 |
| 7 | whatsapp-marketing-ecommerce-guide | Guide Ultime WhatsApp E-commerce | 1000-3000 | 15-25 | HAUTE | S2 |
| 8 | recuperer-paniers-abandonnes-whatsapp | Récupérer Paniers WhatsApp | 200-500 | 10-15 | HAUTE | S3 |
| 9 | whatsapp-vs-email-marketing-ecommerce | WhatsApp vs Email Marketing | 300-500 | 15-20 | MOYENNE | S3 |
| 10 | automatiser-whatsapp-shopify | Automatiser WhatsApp Shopify | 500-1000 | 15-20 | HAUTE | S3 |
| 11 | whatsapp-shopify-integration-guide | WhatsApp + Shopify Integration | 500-1500 | 15-20 | MOYENNE | S4 |
| 12 | whatsapp-web-guide-complet | WhatsApp Web Guide Complet | 1.2M | 56 | MOYENNE | S4 |
| 13 | templates-messages-whatsapp-ecommerce | 15 Templates WhatsApp E-commerce | 200-500 | 5-10 | MOYENNE | S4 |
| 14 | roi-whatsapp-marketing-ecommerce | ROI WhatsApp Marketing | 100-300 | 5-10 | MOYENNE | S4 |
| 15 | commerce-conversationnel-guide | Commerce Conversationnel Guide | 300-500 | 10-15 | BASSE | S5 |
| 16 | envoyer-messages-whatsapp-en-masse | Messages WhatsApp en Masse | 5000+ | 20-25 | MOYENNE | S5 |
| 17 | whatsapp-business-guide-ecommerce | WhatsApp Business Guide | 200K+ | 50 | BASSE | S5 |
| 18 | chatbot-whatsapp-shopify | Chatbot WhatsApp Shopify | 200-500 | 10-15 | BASSE | S5 |
| 19 | statistiques-whatsapp-marketing-2026 | 50+ Stats WhatsApp Marketing 2026 | 200-500 | 10-15 | MOYENNE | S6 |
| 20 | rgpd-whatsapp-marketing | RGPD WhatsApp Marketing Guide | 100-300 | 10 | BASSE | S6 |

### Détails complets par article

(Voir le fichier STRATEGIE-SEO-REKOVR-EXPERT.md pour les plans de contenu détaillés des articles 1-10. Ci-dessous les articles 11-20.)

#### ARTICLE 11 — WhatsApp + Shopify : Guide Intégration
- Tags: [shopify, whatsapp-marketing, guide, tutoriel]
- Contenu : Les 3 façons d'intégrer WhatsApp à Shopify (app officielle Meta gratuite mais limitée, apps tierces comme Kanal/WAX, intégration custom API). Comparatif des options. Guide étape par étape avec Kanal. Widget chat, notifications, automations.
- Images : 5 (screenshots intégration)
- Liens internes : → /blog/kanal-avis, → /blog/automatiser-whatsapp-shopify, → /blog/installer-kanal-shopify-tuto

#### ARTICLE 12 — WhatsApp Web Guide Complet
- Tags: [whatsapp-business, guide]
- Contenu : WhatsApp Web vs Desktop App, comment se connecter, multi-appareils (jusqu'à 4), raccourcis clavier, mode sombre, sécurité/déconnexion à distance, notifications navigateur, limitations, WhatsApp Web pour les pros (trucs pro). 2000+ mots pour écraser l'article Kanal de 500 mots.
- Images : 4 (interface web, raccourcis, paramètres)
- Lien interne clé : → /blog/whatsapp-business-guide-ecommerce (pont vers contenu business)

#### ARTICLE 13 — 15 Templates Messages WhatsApp E-commerce
- Tags: [templates, whatsapp-marketing, ecommerce]
- Contenu : 15 messages complets en français, copier-coller, avec emojis. Pour chaque : le contexte (quand envoyer), le message, les variantes, le taux de performance attendu. Catégories : relance panier (3), post-achat (3), promotionnel (3), fidélisation (3), support (3).
- Images : 3 (mockups WhatsApp messages)
- Stratégie : contenu linkbait — les gens partagent et citent des templates

#### ARTICLE 14 — ROI WhatsApp Marketing
- Tags: [roi, whatsapp-marketing, ecommerce, strategie]
- Contenu : Comment calculer le ROI, benchmarks par vertical (beauty, fashion, food), données Chatarmin (30+ marques, corridor ROAS 15-60x), cas Kanal (x120), simulateur de calcul, comment optimiser le ROI. Lien vers calculateur homepage.
- Images : 3 (graphiques ROI, benchmarks)

#### ARTICLE 15 — Commerce Conversationnel
- Tags: [whatsapp-marketing, ecommerce, strategie, guide]
- Contenu : Définition du commerce conversationnel, pourquoi c'est l'avenir (45 milliards $ de ventes WhatsApp en 2026), les 4 piliers (marketing, vente, support, fidélisation), comment l'implémenter sur Shopify avec Kanal, cas d'usage par industrie.
- Images : 4

#### ARTICLE 16 — Messages WhatsApp en Masse
- Tags: [whatsapp-marketing, guide, automatisation]
- Traffic grabber — volume 5000+/mois. Contenu : La différence entre spam (interdit, bannissement) et broadcast légal (API + opt-in). Comment envoyer légalement : WhatsApp Business API via un BSP (Kanal, WAX, etc.), template approuvé par Meta, opt-in RGPD. Étapes sur Kanal. Risques si mal fait.
- Images : 4

#### ARTICLE 17 — WhatsApp Business Guide
- Tags: [whatsapp-business, guide, ecommerce]
- Traffic grabber — volume 200K+. Contenu : WhatsApp Business App (gratuit, petit business, 5 appareils max) vs WhatsApp Business API (entreprises, illimité, via BSP). Comment créer un compte, fonctionnalités (catalogue, réponses rapides, labels, stats), passage à l'API, quel BSP choisir.
- Images : 5

#### ARTICLE 18 — Chatbot WhatsApp Shopify
- Tags: [automatisation, shopify, whatsapp-marketing, tutoriel]
- Contenu : Pourquoi un chatbot WhatsApp (réponse 24/7, réduction tickets -50%, qualification leads). Types de chatbots (basé règles vs IA). Comment configurer avec Kanal (flow builder, connexion catalogue, FAQ automatique). Templates de flows chatbot. Mesurer la performance.
- Images : 4

#### ARTICLE 19 — 50+ Statistiques WhatsApp Marketing 2026
- Tags: [whatsapp-marketing, strategie]
- Contenu : Article de données pur. 50+ statistiques sourcées, organisées par thème : utilisateurs WhatsApp, WhatsApp Business adoption, taux d'ouverture/conversion, ROI par industrie, comparaison avec email/SMS, prévisions 2026-2027. Chaque stat sourcée.
- Images : 3-4 (infographies, charts)
- Stratégie linkbait : les articles de stats sont cités comme source = backlinks naturels

#### ARTICLE 20 — RGPD et WhatsApp Marketing
- Tags: [whatsapp-marketing, guide, ecommerce]
- Contenu : Les règles RGPD pour le WhatsApp marketing (opt-in explicite, droit de retrait, stockage données, base légale). Comment collecter les opt-ins (checkout Shopify, popup, QR code, click-to-WhatsApp ads). Ce que Kanal gère automatiquement. Checklist conformité. Template opt-in.
- Images : 2

---

## 6. MAILLAGE INTERNE — CARTE COMPLÈTE

### 3 clusters de contenu

**CLUSTER A : KANAL (monétisation directe)**
Hub = /blog/kanal-avis
Satellites : code-promo-kanal, kanal-prix-tarif, installer-kanal-shopify-tuto, kanal-vs-wax-comparatif, alternatives-kanal-whatsapp-shopify

**CLUSTER B : WHATSAPP E-COMMERCE (autorité + leads)**
Hub = /blog/whatsapp-marketing-ecommerce-guide (PILLAR)
Satellites : recuperer-paniers-abandonnes-whatsapp, whatsapp-vs-email-marketing-ecommerce, automatiser-whatsapp-shopify, whatsapp-shopify-integration-guide, templates-messages-whatsapp-ecommerce, roi-whatsapp-marketing-ecommerce, commerce-conversationnel-guide, chatbot-whatsapp-shopify, statistiques-whatsapp-marketing-2026, rgpd-whatsapp-marketing

**CLUSTER C : TRAFFIC GRABBERS (volume)**
whatsapp-web-guide-complet, envoyer-messages-whatsapp-en-masse, whatsapp-business-guide-ecommerce
→ Ces articles captent du trafic massif et redirigent vers les clusters A et B

### Règles de maillage obligatoires
- CHAQUE article = minimum 3 liens internes
- CHAQUE article = 1 lien vers la homepage (CTA audit)
- CHAQUE article = 1 lien affilié Kanal
- Articles cluster A linkent entre eux en priorité
- Articles cluster B linkent vers le pillar + 2-3 satellites
- Articles cluster C linkent vers les money pages (cluster A)
- Le pillar (article 7) linke vers TOUS les articles de son cluster

---

## 7. LIENS EXTERNES

### Liens sortants par article (2-5 par article)
| Source | URL | Usage |
|--------|-----|-------|
| Shopify App Store Kanal | apps.shopify.com/kanal-marketing-ai | Articles Kanal |
| Site Kanal | getkanal.com | Articles Kanal |
| WhatsApp Business | business.whatsapp.com | Articles WhatsApp |
| Meta Business Help | business.facebook.com/help | Tutos |
| Shopify Blog FR | shopify.com/fr/blog | Articles Shopify |
| Statista | statista.com | Stats |
| Baymard Institute | baymard.com | Stats paniers |
| Klaviyo Blog FR | klaviyo.com/fr/blog | Stats email |
| HubSpot Stats FR | hubspot.fr/statistiques-marketing | Stats |

### Backlinks à obtenir
1. getkanal.com/partners — PRIORITÉ #1
2. Shopify App Store — avis mentionnant Rekovr
3. Appvizer.fr — listing gratuit
4. LinkedIn articles — republication guides
5. YouTube — tutos avec lien description

---

## 8. IMAGES

### Convention
```
/public/images/blog/{slug}/
  hero.webp       (1200x630)
  og.webp         (1200x630)
  screenshot-N.webp (800x450)
  infographic.webp
```

### Specs
- Format : WebP, qualité 80%
- Alt text : TOUJOURS descriptif avec mot-clé principal
- Lazy loading sauf hero (priority)
- Next/Image component
- ~4 images par article = ~80 images total

### Style visuel
- Screenshots réels du dashboard Kanal quand possible
- Illustrations : style clean dark + vert #00D47E
- Mockups WhatsApp : réalistes (bulle verte, avatar, timestamp)
- Infographies : fond #1A1A2E, texte blanc, accents verts
- Cohérence avec le design neo-brutalist du site

---

## 9. SECTION BLOG SUR LA LANDING PAGE

### Position : avant le footer, après les sections principales

### Design
```
Background : #0D0D1A (plus sombre que body)
Padding : 120px vertical

Badge : "📚 Le Blog Rekovr" — même style pill que les autres sections
Titre : "Guides, stratégies et cas concrets pour maîtriser le WhatsApp marketing."
Sous-titre : "Par Jules, expert certifié Kanal et e-commerçant Shopify."

3 cards : les 3 articles featured ou les plus récents
Même BlogCard component que /blog

Bouton : "Voir tous les articles →" — ghost button border vert
Animation : stagger Framer Motion sur les cards
Responsive : 1 col mobile / 3 col desktop
```

---

## 10. SCHEMA & META SEO GLOBAL

### Homepage
```json
[
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rekovr",
    "url": "https://getrekovr.com",
    "logo": "https://getrekovr.com/images/logo.webp",
    "description": "Agence WhatsApp Marketing pour e-commerçants Shopify.",
    "founder": { "@type": "Person", "name": "Jules" },
    "areaServed": "FR",
    "sameAs": [
      "https://twitter.com/rekovr",
      "https://www.linkedin.com/company/rekovr",
      "https://www.instagram.com/rekovr"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Rekovr",
    "url": "https://getrekovr.com"
  }
]
```

---

## 11. DONNÉES & STATISTIQUES CLÉS

### WhatsApp Global (2026)
- 3.3 milliards MAU
- 100 milliards messages/jour
- 200M+ entreprises sur WhatsApp Business
- App messagerie #1 monde
- 17h06 min temps moyen/utilisateur/mois
- 180 pays

### WhatsApp Marketing Performance
- Taux d'ouverture : 98% (vs email 20-34%)
- Taux de conversion : 45-60% (vs email 2-5%)
- Taux de clic : 5-15% campagnes / 15-35% flows
- ROAS moyen : 15-60x (Chatarmin, 30+ marques)
- Récupération paniers : 15-35%
- 45 milliards $ ventes WhatsApp commerce (2026)

### Email FR (comparaison)
- Ouverture FR : 18.22% (Klaviyo 2025)
- Ouverture e-commerce FR : 28.96% (Brevo)
- Taux de clic : 4.32%
- Désabo e-commerce : 0.60%

### Kanal (données à utiliser dans les articles)
- 70+ avis 5.0/5 Shopify
- Built for Shopify badge
- Plans : Gratuit / Pro 59$/mois / Scale 149$/mois
- 5000+ conversations/jour
- Intégrations : Klaviyo, Gorgias, WhatsApp API
- Cas : ROAS x120, conversion 4%→17% vs Klaviyo, 9000€ avec 89€ abo, +15% ventes 6 mois, 92% ouverture, 8.5% conversion, support <15min, setup 30min

### WAX (concurrent)
- 62 avis 5.0/5
- 499$/mois
- France (ESSEC/Station F)
- 76.5% stores en France
- 34 stores actifs
- Zéro blog, zéro SEO

---

## 12. REDIRECTIONS & SITEMAP

### Sitemap dynamique
```typescript
// app/sitemap.ts
import { getAllPosts } from '@/lib/blog'

export default async function sitemap() {
  const posts = await getAllPosts()
  const blogEntries = posts.map(post => ({
    url: `https://getrekovr.com/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: post.featured ? 0.9 : 0.7,
  }))
  return [
    { url: 'https://getrekovr.com', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1.0 },
    { url: 'https://getrekovr.com/blog', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    ...blogEntries,
  ]
}
```

### robots.txt
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Sitemap: https://getrekovr.com/sitemap.xml
```

### 301 Redirections (next.config.js)
```javascript
async redirects() {
  return [
    { source: '/blog/kanal', destination: '/blog/kanal-avis', permanent: true },
    { source: '/blog/avis-kanal', destination: '/blog/kanal-avis', permanent: true },
    { source: '/blog/promo-kanal', destination: '/blog/code-promo-kanal', permanent: true },
    { source: '/blog/prix-kanal', destination: '/blog/kanal-prix-tarif', permanent: true },
    { source: '/blog/guide-whatsapp', destination: '/blog/whatsapp-marketing-ecommerce-guide', permanent: true },
    { source: '/blog/whatsapp-web', destination: '/blog/whatsapp-web-guide-complet', permanent: true },
    { source: '/blog/templates', destination: '/blog/templates-messages-whatsapp-ecommerce', permanent: true },
    { source: '/blog/roi', destination: '/blog/roi-whatsapp-marketing-ecommerce', permanent: true },
  ]
}
```

---

## CHECKLIST AVANT LANCEMENT

- [ ] Architecture fichiers blog créée
- [ ] Composants blog implémentés (BlogCard, BlogHeader, TOC, AuthorBox, etc.)
- [ ] Design system appliqué (dark + vert, neo-brutalist)
- [ ] 20 fichiers MDX créés avec frontmatter complet
- [ ] Contenu rédigé pour les 6 articles prioritaires minimum
- [ ] Images hero + OG pour chaque article
- [ ] Schema JSON-LD (Article, BreadcrumbList, FAQPage) sur chaque article
- [ ] Open Graph + Twitter Cards
- [ ] Sitemap.xml dynamique
- [ ] robots.txt
- [ ] Canonical URLs
- [ ] 301 redirections
- [ ] Liens internes vérifiés (3+ par article)
- [ ] Liens externes vérifiés
- [ ] CTA affilié Kanal dans chaque article
- [ ] CTA audit Rekovr dans chaque article
- [ ] Table des matières sticky fonctionnelle
- [ ] Barre de progression lecture
- [ ] Breadcrumbs
- [ ] Tags cliquables avec pages /blog/tag/{tag}
- [ ] Section blog sur la landing page (3 featured cards)
- [ ] Core Web Vitals : LCP < 2.5s
- [ ] Google Search Console + sitemap soumis
- [ ] GA4 + events tracking

---

## ORDRE D'IMPLÉMENTATION

1. **Semaine 1** : Architecture technique + composants blog + design
2. **Semaine 1** : Articles 1 (Kanal Avis), 2 (Code Promo), 3 (Prix)
3. **Semaine 2** : Articles 4 (Tuto), 5 (vs WAX), 7 (Guide Pilier)
4. **Semaine 3** : Articles 6, 8, 9, 10
5. **Semaine 4** : Articles 11-14
6. **Semaine 5** : Articles 15-18
7. **Semaine 6** : Articles 19-20 + SEO technique final
8. **Continu** : Mise à jour mensuelle des articles "code promo" et "prix"
