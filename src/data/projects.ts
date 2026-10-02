// ApexGen Studio — Project Portfolio Data
// Verified client projects with actual production URLs and assets

export interface ProjectItem {
  id: string;
  slug: string;
  aliases?: string[];
  title: string;
  client: string;
  category: string;
  industry: string;
  tagline: string;
  description: string;
  year: string;
  thumbnail: string;
  heroImage: string;
  gallery: string[];
  technologies: string[];
  liveUrl: string;
  domain: string;
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
  // Detailed Case Study Breakdown
  overview: string;
  challenge: string;
  creativeDirection: string;
  designApproach: string;
  solution: string;
  deliveredFeatures: string[];
  mobileHighlights: string[];
  nextProjectSlug: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 'cargo-pizza',
    slug: 'cargo-pizza',
    aliases: ['cargo-pizzeria'],
    title: 'CARGO PIZZA',
    client: 'Cargo Pizzeria',
    category: 'Restaurant / Digital Experience',
    industry: 'Hospitality & Food E-Commerce',
    tagline: 'An appetite-inducing digital dining flagship with direct WhatsApp order fulfillment.',
    description:
      'A high-conversion restaurant website and ordering system designed for an authentic wood-fired pizzeria, combining editorial food presentation with frictionless mobile ordering.',
    year: '2026',
    thumbnail: '/images/projects/cargo-pizzeria-screenshot.jpg',
    heroImage: '/images/projects/cargo-pizzeria-hero.jpg',
    gallery: [
      '/images/projects/cargo-pizzeria-hero.jpg',
      '/images/projects/cargo-pizzeria-screenshot.jpg',
      '/images/projects/cargo-pizzeria-real.png',
    ],
    technologies: ['Next.js Architecture', 'Tailwind CSS', 'WhatsApp Checkout', 'Framer Motion', 'Sub-Second Edge CDN'],
    liveUrl: 'https://cargopizzeria.online/',
    domain: 'cargopizzeria.online',
    featured: true,
    seoTitle: 'Cargo Pizza — Restaurant Web Design & E-Commerce Case Study | ApexGen',
    seoDescription:
      'Case study on how ApexGen designed and engineered Cargo Pizza’s online dining experience with visual menu architecture and zero-commission WhatsApp checkout.',
    overview:
      'Cargo Pizzeria is an artisan wood-fired pizza kitchen known for authentic culinary technique and handcrafted recipes. They required a modern digital flagship that captured the warmth and craft of their kitchen while allowing customers to explore their menu and place orders effortlessly.',
    challenge:
      'The client previously relied on third-party food delivery aggregators that levied high commissions (25–30%) and severed direct customer relationships. They needed an owned direct channel that made mobile browsing mouth-watering and converted visitors into immediate orders without requiring complex app installations.',
    creativeDirection:
      'Warm artisanal dark aesthetic with rich terracotta, warm parchment tones, high-resolution food photography, and bold rustic typography evoking traditional Italian pizzerias modernized for contemporary mobile culture.',
    designApproach:
      'We designed an appetite-first interface where imagery commands attention. Menu categories are arranged like a culinary editorial spread, with tactile card interactions, dietary filter pills, and a floating order tray optimized for one-thumb mobile checkout.',
    solution:
      'Engineered a custom Next.js web application with a live visual menu, dynamic pricing, and an automated WhatsApp ordering engine that formats selected items, customization notes, and delivery addresses into structured chat payloads.',
    deliveredFeatures: [
      'Interactive visual menu catalog with crust and topping selectors',
      'Zero-commission direct WhatsApp order routing engine',
      'Live opening hours beacon with automated order scheduling',
      'Integrated Google Maps location and directions module',
      'Sub-second mobile loading speed for low-latency smartphone users',
    ],
    mobileHighlights: [
      'Thumb-friendly sticky order trigger bar',
      'Rapid swipe-through pizza category gallery',
      'Instant WhatsApp order cart generation without account registration',
    ],
    nextProjectSlug: '69-studio',
  },
  {
    id: '69-studio',
    slug: '69-studio',
    title: '69 STUDIO',
    client: '69 Studio by Subash',
    category: 'Beauty & Lifestyle / Digital Flagship',
    industry: 'Luxury Hair, Beauty & Creative Studio',
    tagline: 'An editorial luxury portfolio with friction-free appointment scheduling.',
    description:
      'A sleek, high-fashion web experience engineered for an upscale hair salon and beauty studio, showcasing artistic transformations and streamlining appointment inquiries.',
    year: '2026',
    thumbnail: '/images/projects/69-studio-screenshot.png',
    heroImage: '/images/projects/69-studio-hero.jpg',
    gallery: [
      '/images/projects/69-studio-hero.jpg',
      '/images/projects/69-studio-screenshot.png',
      '/images/projects/69-studio-real.png',
    ],
    technologies: ['Next.js Architecture', 'Framer Motion', 'Tailwind CSS', 'Online Reservation Engine', 'Mobile Touch UX'],
    liveUrl: 'https://69studiobysubash.online/',
    domain: '69studiobysubash.online',
    featured: true,
    seoTitle: '69 Studio — Luxury Salon Web Design & Booking Experience | ApexGen',
    seoDescription:
      'Explore how ApexGen crafted an editorial beauty studio website for 69 Studio, featuring high-fashion visual craft and frictionless online appointment booking.',
    overview:
      '69 Studio by Subash is a premier salon and creative aesthetics space known for bespoke bridal styling, precision hair design, and fashion-forward aesthetics. The studio needed a digital home that matched the luxury ambiance of their physical studio in Colombo.',
    challenge:
      'The studio previously relied exclusively on Instagram DMs to manage inquiries, resulting in missed messages, scheduling double-bookings, and hours spent replying to basic price questions. They needed an authoritative platform that presented their service tiers clearly and automated booking intake.',
    creativeDirection:
      'High-contrast monochrome palette with champagne accents, expansive whitespace, refined serif and grotesque typography, and cinematic portrait photography that mirrors contemporary high-fashion lookbooks.',
    designApproach:
      'We crafted an editorial gallery layout that positions hair and beauty services as artistic craft. Micro-interactions reward cursor movements, while service listings reveal clear pricing and duration expectations before prompting booking.',
    solution:
      'Developed a modern Next.js web platform integrated with an intuitive appointment booking workflow, verified customer reviews, categorized hairstyle lookbooks, and direct WhatsApp VIP stylist concierge.',
    deliveredFeatures: [
      'Comprehensive hair, beauty, and bridal service catalog with duration indicators',
      'Frictionless appointment booking flow linked directly to staff calendars',
      'Editorial lookbook gallery showcasing real client transformations',
      'One-tap Google Maps directions and salon opening hours',
      'Direct WhatsApp VIP consultation link for bespoke bridal packages',
    ],
    mobileHighlights: [
      'Editorial lookbook swipe gestures matching Instagram ergonomics',
      'Touch-friendly booking step wizard',
      'Instant tap-to-call and WhatsApp receptionist access',
    ],
    nextProjectSlug: 'dinepro-advisors',
  },
  {
    id: 'dinepro-advisors',
    slug: 'dinepro-advisors',
    title: 'DINEPRO ADVISORS',
    client: 'DinePro Advisers',
    category: 'Consulting / Advisory Platform',
    industry: 'Hospitality Strategy & Restaurant Operations',
    tagline: 'An authoritative advisory platform engineered to establish credibility and capture high-value consulting briefs.',
    description:
      'A sophisticated digital advisory platform for a hospitality consultancy firm, presenting practice areas, operational diagnostics, and consultation booking for restaurant operators.',
    year: '2026',
    thumbnail: '/images/projects/dinepro-advisors-screenshot.png',
    heroImage: '/images/projects/dinepro-advisors-hero.jpg',
    gallery: [
      '/images/projects/dinepro-advisors-hero.jpg',
      '/images/projects/dinepro-advisors-screenshot.png',
      '/images/projects/dinepro-advisors-real.png',
    ],
    technologies: ['Next.js Architecture', 'Consultation Funnel', 'Framer Motion', 'Tailwind CSS', 'SEO Optimization'],
    liveUrl: 'https://dineproadvisors.online/',
    domain: 'dineproadvisors.online',
    featured: true,
    seoTitle: 'DinePro Advisors — Hospitality Consulting Web Platform | ApexGen',
    seoDescription:
      'Discover how ApexGen designed and engineered the digital presence for DinePro Advisors, presenting advisory disciplines and driving high-value restaurant consulting inquiries.',
    overview:
      'DinePro Advisers is a strategic restaurant and hospitality consulting practice delivering operational turnarounds, concept development, menu engineering, and profitability reviews for restaurant owners and hotel groups.',
    challenge:
      'Consulting engagements require immediate trust and intellectual credibility. The firm needed an authoritative digital headquarters that conveyed analytical depth, outlined specific advisory disciplines, and made requesting strategic consultation effortless.',
    creativeDirection:
      'Understated architectural elegance: deep charcoal backgrounds, warm metallic gold accents, structured typography hierarchy, and clean tabular layouts that communicate boardroom-level professionalism.',
    designApproach:
      'We designed an advisory-focused layout that walks restaurant executives through specific operational challenges (food cost variance, labor inefficiency, concept stagnation) and presents DinePro’s structured advisory solutions.',
    solution:
      'Engineered an authoritative, search-optimized web platform with structured practice area dossiers, diagnostic consultation questionnaires, and rapid inquiry routing.',
    deliveredFeatures: [
      'Comprehensive practice area breakdowns (Concept, Operations, Menu Engineering)',
      'Strategic diagnostic intake questionnaire for hospitality operators',
      'Direct WhatsApp confidential consultation linkage for senior directors',
      'Downloadable hospitality case briefs and methodology guides',
      'Search engine optimized for corporate hospitality advisory queries',
    ],
    mobileHighlights: [
      'Clean executive readability across smartphone screens',
      'Rapid consultation request form with tap-to-complete inputs',
      'Confidential direct WhatsApp connection to senior partner',
    ],
    nextProjectSlug: 'cargo-pizza',
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  const normalized = slug.toLowerCase();
  return projectsData.find(
    (p) => p.slug === normalized || (p.aliases && p.aliases.includes(normalized))
  );
}
