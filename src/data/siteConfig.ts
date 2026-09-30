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
  primaryStatement: 'WE BUILD DIGITAL EXPERIENCES THAT MOVE BUSINESSES FORWARD.',
  supportingCopy:
    'We combine strategy, design, technology and motion to build digital experiences that feel as strong as the businesses behind them.',
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
    { label: 'ABOUT', href: '#about' },
  ] as NavItem[],

  marqueeItems: [
    'WEB DESIGN',
    'DEVELOPMENT',
    'MOTION',
    'DIGITAL EXPERIENCES',
    'WEB DESIGN',
    'DEVELOPMENT',
  ],

  // 3 Core Services (Design, Technology, Growth)
  servicePillars: [
    {
      number: '01',
      title: 'DESIGN',
      category: 'VISUAL DIRECTION & INTERFACE',
      shortDesc: 'Brand Websites, UI/UX, Creative Direction, Motion Design, Responsive Design.',
      fullDesc:
        'We design digital flagships that command immediate attention. Every typography choice, spacing rhythm, and interactive micro-gesture is art-directed to elevate brand prestige and convert passive interest into high-value customer loyalty.',
      subDisciplines: [
        'Brand Websites',
        'UI/UX',
        'Creative Direction',
        'Motion Design',
        'Responsive Design',
      ],
      techPills: ['Figma', 'Art Direction', 'Design Systems', 'Micro-Interactions'],
      deliverables: [
        'Bespoke Visual Design Systems',
        'High-Fidelity Interactive Prototypes',
        'Responsive Mobile-First Architecture',
        'Editorial Typography & Layouts',
        'Custom Micro-Interactions & Motion',
      ],
      iconName: 'Layout',
      featuredQuote: 'Design without purpose is decoration. Design with purpose moves businesses.',
    },
    {
      number: '02',
      title: 'TECHNOLOGY',
      category: 'ENGINEERING & SYSTEMS',
      shortDesc: 'Web Development, CMS, Booking Systems, API Integrations, Performance Optimization.',
      fullDesc:
        'We engineer robust codebases using Next.js, React, TypeScript, and fine-tuned edge architecture. No brittle site-builders, no bloated plugins — just raw execution speed, security, and effortless scalability.',
      subDisciplines: [
        'Web Development',
        'CMS',
        'Booking Systems',
        'API Integrations',
        'Performance Optimization',
      ],
      techPills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Edge Runtime'],
      deliverables: [
        'Production Next.js App Router Architecture',
        'Sub-Second Global Edge Loading Speeds',
        'Frictionless WhatsApp & Direct Checkout Engines',
        'Custom Reservation & Intake Systems',
        'Headless CMS & Scalable API Integrations',
      ],
      iconName: 'Code2',
      featuredQuote: 'Code is our craft. Clean architecture guarantees your website grows with you.',
    },
    {
      number: '03',
      title: 'GROWTH',
      category: 'VISIBILITY & CONVERSION',
      shortDesc: 'SEO, Analytics, Conversion Optimization, Technical SEO, Ongoing Support.',
      fullDesc:
        'Launching a website is only step one. We optimize your digital presence for structured search discoverability, Core Web Vitals, and conversion funnels that turn daily traffic into quantifiable customer inquiries.',
      subDisciplines: [
        'SEO',
        'Analytics',
        'Conversion Optimization',
        'Technical SEO',
        'Ongoing Support',
      ],
      techPills: ['Technical SEO', 'Core Web Vitals', 'Analytics', 'Conversion UX'],
      deliverables: [
        'Google Lighthouse 90+ Score Standards',
        'Schema.org Structured Data & Rich Snippets',
        'Privacy-Conscious Analytics & Funnel Tracking',
        'Local Search Discoverability Tuning',
        'Continuous Maintenance & Technical Sprints',
      ],
      iconName: 'TrendingUp',
      featuredQuote: 'Visibility brings visitors. Conversion brings customers. Growth sustains both.',
    },
  ] as ServicePillar[],

  // 3 Verified Real Client Projects
  realProjects: [
    {
      id: 'cargo-pizzeria',
      slug: 'cargo-pizzeria',
      title: 'CARGO PIZZERIA',
      client: 'Cargo Pizzeria',
      category: 'Food & Hospitality',
      projectType: 'Website Design / Development / UX',
      industry: 'Woodfired Pizza & Hospitality',
      tagline: 'A modern restaurant website designed around menu discovery, mobile experience and customer conversion.',
      badge: '01 / PRODUCTION',
      isReal: true,
      liveUrl: 'https://cargopizzeria.online/',
      description:
        'A modern restaurant website designed around menu discovery, mobile experience and customer conversion.',
      overview:
        'Cargo Pizzeria is a handcrafted woodfired pizza destination in Sri Lanka, celebrated for stone-fired baking and generous offerings. The website provides an interactive menu exploration experience, showcase of artisanal varieties, and direct mobile customer ordering.',
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
      technologies: ['HTML5 & Modern JavaScript', 'CSS3 Responsive Grid', 'WhatsApp Business Routing', 'Local Business Schema'],
      services: ['Website Design', 'Web Development', 'UX Architecture', 'Local SEO'],
      accentColor: '#f59e0b',
      year: '2026',
      heroImage: '/images/projects/cargo-pizzeria-screenshot.jpg',
      galleryImages: ['/images/projects/cargo-pizzeria-screenshot.jpg', '/images/projects/cargo-pizzeria-real.png'],
    },
    {
      id: '69-studio',
      slug: '69-studio',
      title: '69 STUDIO',
      client: '69 Studio by Subhash Ketagoda',
      category: 'Creative Studio',
      projectType: 'Creative Direction / Web Design / Development / Motion',
      industry: 'Creative Technology & POS Solutions',
      tagline: 'A cinematic digital experience created for a modern creative studio.',
      badge: '02 / PRODUCTION',
      isReal: true,
      liveUrl: 'https://69studiobysubash.online/',
      description:
        'A cinematic digital experience created for a modern creative studio.',
      overview:
        '69 Studio is a digital creative technology practice founded by Subhash Ketagoda. The studio engineers bespoke high-performance websites, custom Point of Sale (POS) and billing software, spatial UI/UX, and branding.',
      challenge:
        '69 Studio required an avant-garde digital showcase that immediately communicated high technical sophistication, artistic daring, and their dual capabilities across creative digital design and software engineering.',
      designApproach:
        'Obsidian cybernetic canvas accented by subtle neon wireframe visuals, cutting-edge typography pairing (Syne, Space Grotesk, Outfit), and dynamic micro-animations that communicate technical capability.',
      solution:
        'Built a fluid, motion-driven studio portfolio highlighting their bespoke software solutions and web engineering capabilities with seamless multi-channel enquiry channels.',
      features: [
        'Immersive Dark-Theme Creative Studio Interface',
        'Custom POS & Inventory Software Solutions Showcase',
        'Interactive Motion Design & Fluid UI Micro-interactions',
        'Multi-Channel Direct Inquiry Routing (WhatsApp & Social)',
        'Full Responsive Layout with High-Fidelity Desktop Depth',
      ],
      technologies: ['Next.js / Modern Web Stack', 'CSS3 Animations & Motion', 'Google Web Fonts (Syne, Space Grotesk)', 'Structured Schema'],
      services: ['Creative Direction', 'Web Design', 'Development', 'Motion'],
      accentColor: '#00f0ff',
      year: '2026',
      heroImage: '/images/projects/69-studio-screenshot.png',
      galleryImages: ['/images/projects/69-studio-screenshot.png', '/images/projects/69-studio-real.png'],
    },
    {
      id: 'dinepro-advisors',
      slug: 'dinepro-advisors',
      title: 'DINEPRO ADVISORS',
      client: 'DinePro Advisors',
      category: 'Hospitality Consulting',
      projectType: 'Web Design / Development / Conversion Experience',
      industry: 'Hospitality Strategy & Advisory',
      tagline: 'A premium hospitality consulting website focused on presenting services and driving consultation enquiries.',
      badge: '03 / PRODUCTION',
      isReal: true,
      liveUrl: 'https://dineproadvisors.online/',
      description:
        'A premium hospitality consulting website focused on presenting services and driving consultation enquiries.',
      overview:
        'DinePro Advisors is a restaurant and hospitality advisory practice providing strategic restaurant consulting, concept development, operational reviews, staff training, and menu engineering to help hospitality businesses maximize profitability.',
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
      technologies: ['Modern Web Architecture', 'Responsive Layouts', 'WhatsApp Conversion Funnel', 'SEO Optimization'],
      services: ['Web Design', 'Development', 'Conversion Experience'],
      accentColor: '#d4af37',
      year: '2026',
      heroImage: '/images/projects/dinepro-advisors-screenshot.png',
      galleryImages: ['/images/projects/dinepro-advisors-screenshot.png', '/images/projects/dinepro-advisors-real.png'],
    },
  ] as ProjectCaseStudy[],

  // Export projects array (consisting of the real verified projects)
  projects: [] as ProjectCaseStudy[],

  // Large interactive typography industries
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
      id: 'salons-beauty',
      name: 'SALONS & BEAUTY',
      category: 'Salons, Spas & Wellness',
      icon: 'Scissors',
      headline: 'Editorial digital sanctuaries for aesthetic and beauty brands.',
      description: 'Sophisticated web experiences that reflect artistry, showcase treatment menus, and streamline appointments.',
      keyServices: ['Treatment Price Lists', 'Visual Lookbooks', 'Appointment Booking Routing'],
      typicalOutcomes: ['Higher ticket bookings', 'Enhanced brand prestige'],
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
    {
      id: 'startups',
      name: 'STARTUPS',
      category: 'Technology & Ventures',
      icon: 'Zap',
      headline: 'Next-generation web presence for ambitious new ventures.',
      description: 'Fast, bold product websites built with Next.js that communicate value propositions with precision.',
      keyServices: ['Product Storytelling', 'High-Converting CTAs', 'Sub-Second Edge Speeds'],
      typicalOutcomes: ['Investor & customer confidence', 'Rapid launch timelines'],
      accentColor: '#f4f4f6',
    },
    {
      id: 'local-brands',
      name: 'LOCAL BRANDS',
      category: 'Commerce & Flagships',
      icon: 'ShoppingBag',
      headline: 'Elevating regional champions to world-class digital standards.',
      description: 'Websites that transform respected local businesses into iconic digital brands with modern conversion funnels.',
      keyServices: ['Local SEO & Maps Schema', 'Mobile Conversion UX', 'Direct WhatsApp Commerce'],
      typicalOutcomes: ['Dominant local search rankings', 'Increased direct customer contact'],
      accentColor: '#f4f4f6',
    },
  ] as IndustryItem[],

  // 5 Process Steps
  processSteps: [
    {
      number: '01',
      title: 'DISCOVER',
      duration: 'Phase 01',
      description: 'Understand the business.',
      deliverables: ['Brand & commercial goals alignment', 'Audience and competitive analysis', 'Project scope roadmap'],
    },
    {
      number: '02',
      title: 'STRATEGY',
      duration: 'Phase 02',
      description: 'Define structure, content and experience.',
      deliverables: ['Information architecture', 'Content wireframes', 'Conversion touchpoint strategy'],
    },
    {
      number: '03',
      title: 'DESIGN',
      duration: 'Phase 03',
      description: 'Create the visual direction and interface.',
      deliverables: ['Editorial visual language', 'Mobile & desktop responsive UI', 'Interactive micro-gestures & motion prototype'],
    },
    {
      number: '04',
      title: 'BUILD',
      duration: 'Phase 04',
      description: 'Develop the production-ready website.',
      deliverables: ['Production Next.js codebase', 'Clean component architecture', 'Cross-browser & device testing'],
    },
    {
      number: '05',
      title: 'LAUNCH',
      duration: 'Phase 05',
      description: 'Optimize, test and launch.',
      deliverables: ['Lighthouse performance optimization', 'Structured data & SEO deployment', 'Domain verification & live launch'],
    },
  ] as ProcessStep[],

  // Editorial Why ApexGen
  whyReasons: [
    {
      number: '01',
      title: 'CUSTOM DESIGN',
      description: 'Every layout is tailored to your brand identity. Zero off-the-shelf templates.',
      highlight: 'Tailored Aesthetic',
    },
    {
      number: '02',
      title: 'NO TEMPLATES',
      description: 'Handcrafted architecture built from first principles for your specific market position.',
      highlight: '100% Bespoke',
    },
    {
      number: '03',
      title: 'MOBILE-FIRST',
      description: 'Over 80% of your audience visits via mobile. We engineer touch experiences first.',
      highlight: 'Touch Optimized',
    },
    {
      number: '04',
      title: 'PERFORMANCE',
      description: 'Sub-second loading times powered by Next.js edge delivery for maximum conversion.',
      highlight: 'Sub-Second Speed',
    },
    {
      number: '05',
      title: 'SEO READY',
      description: 'Clean semantic HTML, Open Graph cards, and structured JSON-LD schemas out of the box.',
      highlight: 'Search Dominance',
    },
    {
      number: '06',
      title: 'CONVERSION FOCUSED',
      description: 'Engineered user flows, clear calls to action, and direct WhatsApp routing that converts.',
      highlight: 'Direct Inquiries',
    },
  ] as WhyReason[],

  // Verified Pricing
  pricingPlans: [
    {
      id: 'starter',
      name: 'STARTER',
      price: 'LKR 49,900+',
      description: 'For businesses seeking a clean, custom digital presence that builds immediate credibility.',
      idealFor: 'Emerging businesses, independent practices & single-location flagships.',
      timeline: '5–7 Business Days',
      revisions: '1 Revision',
      supportDuration: '7 Days Support',
      ctaText: 'START A PROJECT →',
      features: [
        '1–3 Pages',
        'Custom UI/UX',
        'Responsive Design',
        'Basic Animations',
        'WhatsApp Integration',
        'Contact Form',
        'Google Maps',
        'Basic SEO',
        'Performance Optimization',
        '1 Revision',
        '7 Days Support',
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
      ctaText: 'START A PROJECT →',
      features: [
        '5–8 Pages',
        'Advanced UI/UX',
        'Responsive Design',
        'Advanced Animations',
        'WhatsApp Integration',
        'Contact Form',
        'Google Maps',
        'Advanced SEO',
        'Analytics',
        'CMS Optional',
        'Booking Optional',
        'Performance Optimization',
        '2 Revisions',
        '30 Days Support',
      ],
    },
    {
      id: 'premium',
      name: 'PREMIUM',
      price: 'LKR 149,900+',
      description: 'The pinnacle of bespoke digital craft. Bespoke motion, full CMS, and friction-free booking.',
      idealFor: 'High-end hospitality, luxury studios, multi-service companies & ambitious leaders.',
      timeline: '2–3 Weeks',
      revisions: '3 Revisions',
      supportDuration: '60 Days Support',
      ctaText: 'START A PROJECT →',
      features: [
        '8–15+ Pages',
        'Premium UI/UX',
        'Advanced Responsive Experience',
        'Premium Animations',
        'WhatsApp Integration',
        'Contact Form',
        'Google Maps',
        'Advanced SEO',
        'Analytics',
        'CMS',
        'Booking',
        'Advanced Performance Optimization',
        '3 Revisions',
        '60 Days Support',
      ],
    },
    {
      id: 'custom',
      name: 'CUSTOM PROJECTS',
      price: '250,000+ LKR',
      badge: 'BESPOKE PRODUCT',
      description: 'Dedicated engineering for high-complexity digital platforms, web applications, and custom tools.',
      idealFor: 'E-commerce flagships, web applications, dashboards & custom digital products.',
      timeline: 'Bespoke Roadmap',
      revisions: 'Milestone-Based',
      supportDuration: 'Ongoing Partnership',
      ctaText: 'DISCUSS YOUR PROJECT →',
      features: [
        'E-commerce',
        'Advanced Booking',
        'Web Applications',
        'Dashboards',
        'Custom Integrations',
        'Complex Digital Products',
      ],
    },
  ] as PricingPlan[],

  pricingDisclaimer: 'Prices are starting prices. Final pricing depends on project scope.',

  // Editorial Insights
  insightsArticles: [
    {
      slug: 'why-cheap-websites-cost-more',
      title: 'Why a Cheap Website Costs More Than You Think',
      excerpt:
        'A slow, template-driven website is not an asset — it is a silent leak in your marketing budget.',
      category: 'COMMERCIAL STRATEGY',
      readTime: '3 min read',
      date: '2026',
      keyTakeaway:
        'A website should pay for itself through pre-qualified leads, brand credibility, and frictionless conversions.',
      content: [
        'When business owners look at web design, they frequently compare prices instead of comparing commercial outcomes.',
        'A generic website template looks like every other competitor. It fails to convey why your offering commands premium prices.',
        'High-performing websites pay for themselves within months by removing friction at the exact moment a prospect is ready to take action.',
      ],
    },
    {
      slug: 'the-death-of-generic-templates',
      title: 'The Death of the Generic Template',
      excerpt:
        'Consumers instantly sense when a brand cut corners on its digital presence. Distinctiveness is the new prerequisite.',
      category: 'DESIGN ARCHITECTURE',
      readTime: '4 min read',
      date: '2026',
      keyTakeaway:
        'In a crowded market, generic aesthetics make you invisible. Bespoke art direction creates instant prestige.',
      content: [
        'Modern audiences make subconscious evaluations of your business within 50 milliseconds of landing on your website.',
        'When you use an off-the-shelf template, you inherit the same generic grid, typography, and stock feel as thousands of others.',
        'Bespoke digital architecture signals craftsmanship, seriousness, and undeniable brand authority.',
      ],
    },
  ] as InsightArticle[],
  insights: [] as InsightArticle[],
};

// Initialize projects and insights aliases
siteConfig.projects = siteConfig.realProjects;
siteConfig.insights = siteConfig.insightsArticles;
