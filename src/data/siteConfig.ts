import {
  NavItem,
  ProjectCaseStudy,
  ServicePillar,
  WhyReason,
  IndustryItem,
  ProcessStep,
  PricingPlan,
  InsightArticle,
} from '@/types';

export const siteConfig = {
  name: 'APEXGEN',
  legalName: 'ApexGen Digital Studio',
  domain: 'apexgen.website',
  siteUrl: 'https://www.apexgen.website',
  description:
    'ApexGen builds premium websites and digital experiences for ambitious businesses.',
  positioning: 'APEXGEN / DIGITAL STUDIO',
  primaryStatement: 'We Build Digital Experiences That Move Businesses.',
  supportingCopy:
    'Premium websites and digital experiences designed, engineered and optimized to help ambitious businesses grow.',
  serviceLine: 'WEB DESIGN • DEVELOPMENT • DIGITAL EXPERIENCES',
  tagline: 'BUILD DIGITAL EXPERIENCES THAT PEOPLE REMEMBER.',
  brandStatement: {
    headline: 'GOOD DESIGN GETS ATTENTION. GREAT DIGITAL EXPERIENCES MOVE PEOPLE.',
    lead:
      'We combine strategy, design, technology and motion to build digital experiences that help businesses look better, communicate better and grow online.',
  },
  partnershipNote: {
    headline: 'BUILDING FOR COMMERCIALLY AMBITIOUS BRANDS.',
    copy:
      'We partner with a selective roster of businesses each quarter to ensure focused creative direction, sub-second execution, and dedicated engineering support.',
    cta: 'READY TO DISCUSS YOUR VISION?',
  },

  contact: {
    email: 'contact@apexgen.website',
    phone: '+94 78 965 6969',
    phoneNumber: '+94789656969',
    phoneDisplay: '+94 78 965 6969',
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+94789656969',
    whatsappDisplay: '+94 78 965 6969',
    location: 'Colombo, Sri Lanka & Global Remote',
    hours: 'Mon — Sat / 9:00 AM — 8:00 PM IST',
  },

  socials: {
    instagram: 'https://instagram.com/apexgen.studio',
    linkedin: 'https://linkedin.com/company/apexgen-studio',
    github: 'https://github.com/apexgen-studio',
    facebook: 'https://facebook.com/apexgen.studio',
    x: 'https://x.com/apexgen_studio',
  },

  navItems: [
    { label: 'WORK', href: '#work' },
    { label: 'SERVICES', href: '#services' },
    { label: 'PROCESS', href: '#process' },
    { label: 'PRICING', href: '#pricing' },
    { label: 'CONTACT', href: '#contact' },
  ] as NavItem[],

  marqueeItems: [
    'WEB DESIGN',
    'WEB DEVELOPMENT',
    'E-COMMERCE',
    'BOOKING & BUSINESS SYSTEMS',
    'AUTOMATION',
    'SEO & PERFORMANCE',
  ],

  // 6 Specified Services
  servicesList: [
    {
      number: '01',
      title: 'WEB DESIGN',
      description: 'Modern UI/UX designed around the brand and customer journey.',
      icon: 'Layout',
      tags: ['Bespoke UI/UX', 'Art Direction', 'Design Systems', 'Micro-Interactions'],
    },
    {
      number: '02',
      title: 'WEB DEVELOPMENT',
      description: 'Fast, responsive and scalable websites.',
      icon: 'Code2',
      tags: ['Next.js Architecture', 'Clean TypeScript', 'Sub-Second Speed', 'Scalable Code'],
    },
    {
      number: '03',
      title: 'E-COMMERCE',
      description: 'Conversion-focused online stores.',
      icon: 'ShoppingBag',
      tags: ['Frictionless Checkout', 'Direct WhatsApp Commerce', 'Product Discovery', 'High Conversion'],
    },
    {
      number: '04',
      title: 'BOOKING & BUSINESS SYSTEMS',
      description: 'Custom booking and business workflows.',
      icon: 'Calendar',
      tags: ['Reservation Engines', 'Client Intake Forms', 'Custom Workflows', 'Scheduling Sync'],
    },
    {
      number: '05',
      title: 'AUTOMATION',
      description: 'Digital workflows that reduce repetitive work.',
      icon: 'Zap',
      tags: ['API Integrations', 'Lead Routing', 'Automated Notifications', 'Operational Efficiency'],
    },
    {
      number: '06',
      title: 'SEO & PERFORMANCE',
      description: 'Technical optimization for visibility and speed.',
      icon: 'TrendingUp',
      tags: ['Core Web Vitals 90+', 'Schema.org JSON-LD', 'Search Visibility', 'Edge CDN Caching'],
    },
  ],

  // Legacy alias for compatibility
  servicePillars: [
    {
      number: '01',
      title: 'DESIGN',
      category: 'VISUAL DIRECTION & INTERFACE',
      shortDesc: 'Modern UI/UX designed around the brand and customer journey.',
      fullDesc:
        'We design digital flagships that command immediate attention. Every typography choice, spacing rhythm, and interactive micro-gesture is art-directed to elevate brand prestige and convert passive interest into high-value customer loyalty.',
      subDisciplines: ['Brand Websites', 'UI/UX', 'Creative Direction', 'Motion Design', 'Responsive Design'],
      techPills: ['Figma', 'Art Direction', 'Design Systems', 'Micro-Interactions'],
      deliverables: ['Bespoke Visual Systems', 'Interactive Prototypes', 'Mobile-First Architecture'],
      iconName: 'Layout',
      featuredQuote: 'Design without purpose is decoration. Design with purpose moves businesses.',
    },
    {
      number: '02',
      title: 'TECHNOLOGY',
      category: 'ENGINEERING & SYSTEMS',
      shortDesc: 'Fast, responsive and scalable websites built with modern technologies.',
      fullDesc:
        'We engineer robust codebases using Next.js, React, TypeScript, and fine-tuned edge architecture. No brittle site-builders, no bloated plugins — just raw execution speed, security, and effortless scalability.',
      subDisciplines: ['Web Development', 'E-Commerce', 'Booking Systems', 'API Integrations', 'Performance Optimization'],
      techPills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Edge Runtime'],
      deliverables: ['Production Next.js App Router', 'Sub-Second Global Speeds', 'Custom Reservation Systems'],
      iconName: 'Code2',
      featuredQuote: 'Clean architecture guarantees your website grows with you.',
    },
    {
      number: '03',
      title: 'GROWTH',
      category: 'VISIBILITY & CONVERSION',
      shortDesc: 'Technical optimization for visibility, speed, and business conversions.',
      fullDesc:
        'Launching a website is only step one. We optimize your digital presence for structured search discoverability, Core Web Vitals, and conversion funnels that turn daily traffic into quantifiable customer inquiries.',
      subDisciplines: ['SEO', 'Analytics', 'Conversion Optimization', 'Technical SEO', 'Ongoing Support'],
      techPills: ['Technical SEO', 'Core Web Vitals', 'Analytics', 'Conversion UX'],
      deliverables: ['Lighthouse 90+ Standards', 'Schema.org Structured Data', 'Funnel Tracking'],
      iconName: 'TrendingUp',
      featuredQuote: 'Visibility brings visitors. Conversion brings customers. Growth sustains both.',
    },
  ] as ServicePillar[],

  // 3 Verified Real Client Projects
  realProjects: [
    {
      id: 'cargo-pizzeria',
      slug: 'cargo-pizzeria',
      title: 'CARGO PIZZA',
      client: 'Cargo Pizza',
      category: 'Food & Hospitality',
      projectType: 'Web Design & Development',
      industry: 'Woodfired Pizza & Hospitality',
      tagline: 'A modern restaurant website designed around menu discovery, mobile experience and customer conversion.',
      badge: '01 / PRODUCTION',
      isReal: true,
      liveUrl: 'https://cargopizzeria.online/',
      domain: 'cargopizzeria.online',
      description:
        'A modern restaurant website designed around menu discovery, mobile experience and customer conversion.',
      overview:
        'Cargo Pizza is a handcrafted woodfired pizza destination in Sri Lanka, celebrated for stone-fired baking and generous offerings. The website provides an interactive menu exploration experience, showcase of artisanal varieties, and direct mobile customer ordering.',
      challenge:
        'The restaurant needed a high-performance web experience to display their dynamic 20+ pizza varieties, communicate location and operating hours clearly, and channel mobile diners directly into takeaway and delivery ordering without third-party friction.',
      designApproach:
        'Warm, high-contrast dark aesthetic paired with tactile typography, category-based pizza filtering, and immediate click-to-order touchpoints designed for rapid customer decisions on mobile.',
      solution:
        'Engineered a fast, lightweight mobile-first web experience featuring real-time menu browsing, takeaway/delivery WhatsApp linkage, Google Maps integration, and local SEO schema.',
      features: [
        'Interactive Woodfired Pizza Menu with 20+ Varieties',
        'Special Offers & Seasonal Promotion Highlights',
        'Direct Phone & WhatsApp Takeaway / Delivery Ordering',
        'Location Map, Operating Hours & Dine-In Information',
        'Mobile-First Touch Architecture with Fast Edge Delivery',
      ],
      technologies: ['Next.js Architecture', 'Mobile-First UX', 'WhatsApp Commerce', 'Local SEO Schema'],
      services: ['Web Design', 'Web Development', 'Conversion UX', 'Performance'],
      accentColor: '#f59e0b',
      year: '2026',
      heroImage: '/images/projects/cargo-pizzeria-screenshot.jpg',
      galleryImages: ['/images/projects/cargo-pizzeria-screenshot.jpg', '/images/projects/cargo-pizzeria-real.png'],
    },
    {
      id: '69-studio',
      slug: '69-studio',
      title: '69 STUDIO BY SUBASH',
      client: '69 Studio by Subhash Ketagoda',
      category: 'Creative Studio',
      projectType: 'Creative Direction & Web Development',
      industry: 'Creative Technology & POS Solutions',
      tagline: 'A cinematic digital experience created for a modern creative studio.',
      badge: '02 / PRODUCTION',
      isReal: true,
      liveUrl: 'https://69studiobysubash.online/',
      domain: '69studiobysubash.online',
      description:
        'A cinematic digital experience created for a modern creative studio.',
      overview:
        '69 Studio is a digital creative technology practice founded by Subhash Ketagoda. The studio engineers bespoke high-performance websites, custom Point of Sale (POS) and billing software, spatial UI/UX, and branding.',
      challenge:
        '69 Studio required an avant-garde digital showcase that immediately communicated high technical sophistication, artistic daring, and their dual capabilities across creative digital design and software engineering.',
      designApproach:
        'Obsidian cybernetic canvas accented by subtle wireframe visuals, cutting-edge typography pairing, and dynamic micro-animations that communicate technical capability.',
      solution:
        'Built a fluid, motion-driven studio portfolio highlighting their bespoke software solutions and web engineering capabilities with seamless multi-channel enquiry channels.',
      features: [
        'Immersive Dark-Theme Creative Studio Interface',
        'Custom POS & Inventory Software Solutions Showcase',
        'Interactive Motion Design & Fluid UI Micro-interactions',
        'Multi-Channel Direct Inquiry Routing (WhatsApp & Social)',
        'Full Responsive Layout with High-Fidelity Desktop Depth',
      ],
      technologies: ['Next.js / TypeScript', 'Fluid Motion', 'Editorial Typography', 'Technical SEO'],
      services: ['Creative Direction', 'Web Design', 'Full-Stack Development', 'Motion'],
      accentColor: '#00f0ff',
      year: '2026',
      heroImage: '/images/projects/69-studio-screenshot.png',
      galleryImages: ['/images/projects/69-studio-screenshot.png', '/images/projects/69-studio-real.png'],
    },
    {
      id: 'dinepro-advisors',
      slug: 'dinepro-advisors',
      title: 'DINEPRO ADVISERS',
      client: 'DinePro Advisers',
      category: 'Hospitality Consulting',
      projectType: 'Advisory Web Platform & Conversion Funnel',
      industry: 'Hospitality Strategy & Advisory',
      tagline: 'A premium hospitality consulting website focused on presenting services and driving consultation enquiries.',
      badge: '03 / PRODUCTION',
      isReal: true,
      liveUrl: 'https://dineproadvisors.online/',
      domain: 'dineproadvisors.online',
      description:
        'A premium hospitality consulting website focused on presenting services and driving consultation enquiries.',
      overview:
        'DinePro Advisers is a restaurant and hospitality advisory practice providing strategic restaurant consulting, concept development, operational reviews, staff training, and menu engineering to help hospitality businesses maximize profitability.',
      challenge:
        'The firm needed an authoritative digital presence to communicate consultative depth, demonstrate expertise across hospitality disciplines, and streamline appointment booking for restaurant owners seeking strategy sessions.',
      designApproach:
        'Editorial architectural elegance reflecting luxury dining room interiors, warm charcoal and champagne tones, structured advisory offerings, and clear conversion paths for booking strategy sessions.',
      solution:
        'Developed a structured, high-credibility advisory web platform featuring detailed practice area breakdowns and direct WhatsApp consultation booking.',
      features: [
        'Comprehensive Restaurant Advisory Service Catalog',
        'Online Consultation Booking & Inquiry Architecture',
        'Detailed Practice Areas (Startup, Operations, Menu Engineering)',
        'Direct WhatsApp Strategy Session Linkage',
        'Location & Direct Contact Integration',
      ],
      technologies: ['Next.js Architecture', 'Booking Flow', 'Conversion UX', 'Speed Optimization'],
      services: ['Web Design', 'Development', 'Booking Systems', 'Conversion Optimization'],
      accentColor: '#d4af37',
      year: '2026',
      heroImage: '/images/projects/dinepro-advisors-screenshot.png',
      galleryImages: ['/images/projects/dinepro-advisors-screenshot.png', '/images/projects/dinepro-advisors-real.png'],
    },
  ] as ProjectCaseStudy[],

  projects: [] as ProjectCaseStudy[],

  // 5 Specified Process Steps
  processSteps: [
    {
      number: '01',
      title: 'DISCOVER',
      duration: 'Phase 01',
      description: 'Understand the business, audience and goals.',
      deliverables: ['Brand & commercial alignment', 'Audience & competitive research', 'Technical scope roadmap'],
    },
    {
      number: '02',
      title: 'DESIGN',
      duration: 'Phase 02',
      description: 'Create the visual direction and user experience.',
      deliverables: ['Editorial visual language', 'Mobile-first UX wireframes', 'Interactive micro-interactions prototype'],
    },
    {
      number: '03',
      title: 'BUILD',
      duration: 'Phase 03',
      description: 'Develop the website with modern technologies.',
      deliverables: ['Production Next.js codebase', 'Sub-second edge loading architecture', 'Responsive cross-device testing'],
    },
    {
      number: '04',
      title: 'LAUNCH',
      duration: 'Phase 04',
      description: 'Test, optimize and deploy.',
      deliverables: ['Lighthouse 90+ speed audit', 'SEO schema & metadata deployment', 'Domain verification & live launch'],
    },
    {
      number: '05',
      title: 'GROW',
      duration: 'Phase 05',
      description: 'Improve performance, SEO and conversions.',
      deliverables: ['Conversion funnel analysis', 'Search ranking optimization', 'Dedicated technical support'],
    },
  ] as ProcessStep[],

  // Specified Why ApexGen Highlights
  whyReasons: [
    {
      number: '01',
      title: 'CUSTOM DESIGN',
      description: 'Every layout is tailored to your brand identity. Zero off-the-shelf templates.',
      highlight: 'Tailored Aesthetic',
    },
    {
      number: '02',
      title: 'RESPONSIVE DEVELOPMENT',
      description: 'Over 80% of your audience visits via mobile. We engineer seamless touch experiences first.',
      highlight: 'Touch-Optimized',
    },
    {
      number: '03',
      title: 'FAST PERFORMANCE',
      description: 'Sub-second loading times powered by modern edge architecture for maximum conversion.',
      highlight: 'Sub-Second Speed',
    },
    {
      number: '04',
      title: 'SEO READY',
      description: 'Clean semantic HTML, Open Graph cards, and structured JSON-LD schemas out of the box.',
      highlight: 'Search Visibility',
    },
    {
      number: '05',
      title: 'CONVERSION FOCUSED',
      description: 'Engineered user flows, clear calls to action, and direct WhatsApp routing that converts.',
      highlight: 'Direct Inquiries',
    },
    {
      number: '06',
      title: 'ONGOING SUPPORT',
      description: 'Dedicated post-launch warranty, speed maintenance, and continuous technical advisory.',
      highlight: 'Dedicated Partnership',
    },
  ] as WhyReason[],

  // 3 Specified Pricing Tiers
  pricingPlans: [
    {
      id: 'starter',
      name: 'STARTER',
      price: 'LKR 49,900+',
      description: 'Clean, bespoke digital presence engineered to establish immediate credibility.',
      idealFor: 'Emerging businesses, independent practices & single-location flagships.',
      timeline: '5–7 Business Days',
      revisions: '1 Revision',
      supportDuration: '7 Days Support',
      ctaText: 'Start a Project →',
      features: [
        '1–3 pages',
        'Custom UI/UX',
        'Responsive design',
        'Basic animation',
        'WhatsApp/contact forms',
        'Google Maps',
        'Basic SEO',
      ],
    },
    {
      id: 'business',
      name: 'BUSINESS',
      price: 'LKR 89,900+',
      isPopular: true,
      badge: 'MOST POPULAR',
      description: 'Comprehensive digital flagship engineered to present complex services and drive daily inquiries.',
      idealFor: 'Established restaurants, clinics, consulting firms & growing brands.',
      timeline: '10–14 Business Days',
      revisions: '2 Revisions',
      supportDuration: '30 Days Support',
      ctaText: 'Start a Project →',
      features: [
        '5–8 pages',
        'Advanced animations',
        'Analytics',
        'CMS / booking options',
        'Advanced SEO',
        'Custom integrations',
      ],
    },
    {
      id: 'premium',
      name: 'PREMIUM',
      price: 'LKR 149,900+',
      badge: 'HIGH-END FLAGSHIP',
      description: 'The pinnacle of bespoke digital craft. Bespoke motion, full CMS, and frictionless booking.',
      idealFor: 'High-end hospitality, luxury studios, multi-service companies & ambitious leaders.',
      timeline: '2–3 Weeks',
      revisions: '3 Revisions',
      supportDuration: '60 Days Support',
      ctaText: 'Start a Project →',
      features: [
        '8–15+ pages',
        'Premium animations',
        'CMS + booking',
        'Advanced SEO',
        'Custom functionality',
        'Priority support',
      ],
    },
  ] as PricingPlan[],

  pricingDisclaimer: 'Prices are starting estimates. Final quote is customized to your exact project scope and features.',

  // Industries for interactive overview
  industries: [
    {
      id: 'hospitality',
      name: 'HOSPITALITY',
      category: 'Hotels, Resorts & Stays',
      icon: 'Building',
      headline: 'Digital experiences for luxury hospitality and destination stays.',
      description: 'Websites that evoke atmosphere, convey exceptional hospitality, and drive direct room or suite reservations.',
      keyServices: ['Atmospheric Photography Direction', 'Direct Booking Integrations', 'Concierge WhatsApp Routing'],
      typicalOutcomes: ['Higher direct bookings', 'Reduced OTA commission dependency'],
      accentColor: '#f4f4f6',
    },
    {
      id: 'restaurants',
      name: 'RESTAURANTS',
      category: 'Dining & Gastronomy',
      icon: 'Utensils',
      headline: 'Appetizing, mobile-first websites for culinary destinations.',
      description: 'Engaging digital menus, ambiance showcases, and instant WhatsApp or reservation linkages designed for dining on the go.',
      keyServices: ['Interactive Filterable Menus', 'Table Reservation Linkage', 'Mobile-First Ordering'],
      typicalOutcomes: ['Increased takeaway orders', 'Frictionless menu discovery'],
      accentColor: '#f4f4f6',
    },
    {
      id: 'creative-studios',
      name: 'CREATIVE STUDIOS',
      category: 'Agencies, Architecture & Media',
      icon: 'Camera',
      headline: 'Portfolio flagships for studios that produce exceptional work.',
      description: 'Monolithic typography, fluid motion, and asymmetric layouts that establish immediate creative authority.',
      keyServices: ['Custom Motion Design', 'Editorial Case Studies', 'High-Resolution Media Optimization'],
      typicalOutcomes: ['Attracting tier-one clients', 'Standout visual differentiation'],
      accentColor: '#f4f4f6',
    },
    {
      id: 'professional-services',
      name: 'PROFESSIONAL SERVICES',
      category: 'Advisory, Consulting & Law',
      icon: 'UserCheck',
      headline: 'High-credibility web platforms for strategic advisors.',
      description: 'Authoritative, clear digital architecture that highlights expertise, client outcomes, and consultation funnels.',
      keyServices: ['Practice Area Breakdowns', 'Lead Intake Architecture', 'Credibility Structuring'],
      typicalOutcomes: ['Pre-qualified inbound inquiries', 'Established institutional trust'],
      accentColor: '#f4f4f6',
    },
  ] as IndustryItem[],

  insightsArticles: [] as InsightArticle[],
  insights: [] as InsightArticle[],
};

// Aliases
siteConfig.projects = siteConfig.realProjects;
