// ApexGen Studio — Pricing Packages Data
// Value-driven investment packages with verified deliverables

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  badge?: string;
  isPopular?: boolean;
  valueProposition: string;
  description: string;
  idealFor: string;
  timeline: string;
  deliverables: string[];
  ctaLabel: string;
  ctaHref: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'STARTER',
    price: 'LKR 49,900+',
    valueProposition: 'Fast, high-credibility digital foundation for emerging businesses.',
    description: 'Clean, bespoke digital presence engineered to establish immediate authority.',
    idealFor: 'Independent professionals, single-location practices & emerging brands.',
    timeline: '5–7 Business Days',
    deliverables: [
      'Bespoke 1–3 Page Editorial Architecture',
      'Custom UI/UX Designed from Scratch in Figma',
      'Responsive Mobile & Tablet Optimization',
      'Sub-Second Next.js Performance',
      'Direct WhatsApp Contact & Inquiry Actions',
      'Google Maps & Location Verification',
      'Foundational On-Page SEO & Metadata',
    ],
    ctaLabel: 'Choose Starter',
    ctaHref: '/start-a-project?tier=STARTER',
  },
  {
    id: 'business',
    name: 'BUSINESS',
    price: 'LKR 89,900+',
    badge: 'STUDIO RECOMMENDED',
    isPopular: true,
    valueProposition: 'Complete digital flagship engineered to present complex services and capture leads daily.',
    description: 'Comprehensive digital flagship engineered to present complex services and drive daily inquiries.',
    idealFor: 'Restaurants, clinics, consulting firms, creative studios & growing companies.',
    timeline: '10–14 Business Days',
    deliverables: [
      '5–8 Custom Editorial Page Templates',
      'Fluid Micro-Interactions & Framer Motion',
      'Online Booking Flow or WhatsApp Ordering Engine',
      'Multi-Step Client Inquiry Brief Funnel',
      'Comprehensive Schema.org JSON-LD Structured Data',
      'Google Core Web Vitals 95+ Speed Audit',
      'Google Analytics 4 & Conversion Telemetry',
      '30 Days Dedicated Post-Launch Support',
    ],
    ctaLabel: 'Choose Business',
    ctaHref: '/start-a-project?tier=BUSINESS',
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    price: 'LKR 149,900+',
    badge: 'FLAGSHIP CRAFT',
    valueProposition: 'The pinnacle of bespoke digital craft. Bespoke motion, full CMS, and frictionless booking.',
    description: 'Custom creative direction, advanced interactive animation, and automated workflows.',
    idealFor: 'Luxury studios, hospitality groups, multi-service companies & ambitious industry leaders.',
    timeline: '2–3 Weeks',
    deliverables: [
      'Comprehensive Multi-Page Flagship Platform',
      'Bespoke 3D / Interactive Motion & Custom Cursor System',
      'Complete Online Reservation Engine or E-Commerce Store',
      'Automated Lead Routing to WhatsApp / CRM / Database',
      'Advanced Technical SEO & Competitor Gap Analysis',
      'High-Resolution Mobile Ergonomics & Asset Optimization',
      'Priority Sprint SLA with Dedicated Creative Director',
      '60 Days Ongoing Engineering Support & Maintenance',
    ],
    ctaLabel: 'Choose Premium',
    ctaHref: '/start-a-project?tier=PREMIUM',
  },
];

export const customProjectDetails = {
  title: 'CUSTOM PROJECT',
  tagline: 'Need something truly unique or multi-phase?',
  description:
    'For complex digital products, multi-vendor portals, bespoke web applications, or custom SaaS interfaces, we architect a tailored sprint roadmap.',
  deliverables: [
    'Technical Discovery & Architectural Blueprint',
    'Custom Database & API Integration',
    'Dedicated Sprint Cadence & Staging Previews',
    'Enterprise SLA & Continuous Maintenance',
  ],
  ctaLabel: 'Start a Conversation',
  ctaHref: '/contact',
};
