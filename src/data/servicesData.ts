export interface ServiceDetail {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  targetKeywords: string[];
  tagline: string;
  category: string;
  leadParagraph: string;
  whyApexGen: string;
  deliverables: {
    title: string;
    description: string;
  }[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  technologies: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  recommendedPlan: {
    name: string;
    price: string;
    description: string;
  };
  relatedProjectSlug: string;
}

export const servicesData: Record<string, ServiceDetail> = {
  'web-design': {
    slug: 'web-design',
    name: 'Website Design',
    title: 'Bespoke Web Design & UI/UX Studio in Sri Lanka',
    metaTitle: 'Web Design Agency Sri Lanka | Premium UI/UX Studio | ApexGen',
    metaDescription:
      'ApexGen crafts custom, award-level web designs for ambitious businesses in Sri Lanka and globally. High-contrast dark luxury, editorial typography, and conversion-focused UI/UX.',
    targetKeywords: [
      'Web Design Agency Sri Lanka',
      'Website Designer Colombo',
      'Custom Website Design',
      'UI UX Designer Sri Lanka',
      'Luxury Website Design',
      'Corporate Website Design Sri Lanka',
    ],
    tagline: 'WE DESIGN DIGITAL EXPERIENCES THAT COMMAND ATTENTION AND ELEVATE BRAND VALUE.',
    category: 'VISUAL DIRECTION & INTERFACE CRAFT',
    leadParagraph:
      'In a digital market saturated with generic WordPress templates and commoditized themes, your website is often the sole differentiator between being chosen or forgotten. We design high-end digital flagships tailored to your exact brand character, customer journey, and commercial ambitions.',
    whyApexGen:
      'Every layout is art-directed from scratch in Figma before writing a single line of code. We balance editorial typography, micro-interactions, and mobile touch ergonomic standards to ensure your website performs as a genuine competitive asset.',
    deliverables: [
      {
        title: 'Bespoke UI/UX Art Direction',
        description: 'Original wireframes and high-fidelity interfaces crafted exclusively around your brand persona with zero recycled templates.',
      },
      {
        title: 'Mobile-First Touch Architecture',
        description: 'Over 80% of regional visits occur on mobile. We engineer thumb-zone navigation, tactile tap targets, and frictionless vertical flow.',
      },
      {
        title: 'Design System & Typography Tokens',
        description: 'Scalable typography hierarchies, color systems, and reusable interface components designed for long-term consistency.',
      },
      {
        title: 'Interactive Prototyping',
        description: 'High-fidelity clickable prototypes allowing stakeholders to experience micro-interactions and transitions before development.',
      },
    ],
    processSteps: [
      { step: '01', title: 'Brand Discovery', description: 'Auditing your market competitors, customer expectations, and unique value proposition.' },
      { step: '02', title: 'Wireframe Architecture', description: 'Structuring low-fidelity layouts focused purely on content hierarchy and conversion pathways.' },
      { step: '03', title: 'Editorial Interface Design', description: 'Applying luxury dark aesthetics, typography, color harmony, and custom imagery.' },
      { step: '04', title: 'Interactive Prototype Review', description: 'Refining micro-gestures, button dynamics, and client stakeholder feedback.' },
    ],
    technologies: ['Figma', 'Design Systems', 'Micro-Interactions', 'Editorial Typography', 'Vector Graphics'],
    faqs: [
      {
        question: 'Do you use pre-built WordPress themes or templates?',
        answer: 'No. ApexGen never uses pre-built themes, page builders (Elementor/Divi), or generic templates. Every single interface is custom-designed and engineered to create an original brand asset.',
      },
      {
        question: 'How long does a bespoke web design process take?',
        answer: 'Typically between 10 to 20 business days depending on page count, interactive depth, and feedback turnaround.',
      },
      {
        question: 'Can you redesign our existing corporate website without losing our SEO equity?',
        answer: 'Yes. Website redesigns at ApexGen include a technical SEO audit, 301 redirect mapping, and semantic heading preservation to protect and grow your search ranking.',
      },
      {
        question: 'Will we have complete ownership of the Figma source files?',
        answer: 'Yes. Upon final invoice settlement, full intellectual property and editable design system files are handed over to your organization.',
      },
    ],
    recommendedPlan: {
      name: 'BUSINESS',
      price: 'LKR 89,900+',
      description: 'Comprehensive 5–8 page digital flagship engineered for established brands and growing companies.',
    },
    relatedProjectSlug: '69-studio',
  },

  'web-development': {
    slug: 'web-development',
    name: 'Website Development',
    title: 'Fast Modern Next.js Website Development Sri Lanka',
    metaTitle: 'Website Development Sri Lanka | Modern Next.js Studio | ApexGen',
    metaDescription:
      'Sub-second website development using Next.js, React, TypeScript and Edge infrastructure. Engineered for speed, security, and effortless scalability across Sri Lanka and worldwide.',
    targetKeywords: [
      'Website Development Sri Lanka',
      'Next.js Developer Sri Lanka',
      'React Web Development Colombo',
      'Business Website Development',
      'Fast Modern Websites Sri Lanka',
      'Custom Web Application Development',
    ],
    tagline: 'ENGINEERED ON NEXT.JS AND EDGE INFRASTRUCTURE FOR SUB-SECOND LOADING GLOBALLY.',
    category: 'FULL-STACK ENGINEERING & SYSTEMS',
    leadParagraph:
      'Modern businesses cannot afford bloated, sluggish websites that take four seconds to load and crash under traffic surges. We build clean, production-grade Next.js platforms with TypeScript that deliver instantaneous page transitions and rank exceptionally on Google Core Web Vitals.',
    whyApexGen:
      'We write clean, strictly-typed modular code. Our edge-rendered applications load under 500ms globally, are inherently immune to conventional CMS database vulnerabilities, and provide effortless maintenance.',
    deliverables: [
      {
        title: 'Production Next.js App Router Architecture',
        description: 'Server components, static site generation (SSG), and incremental edge revalidation for blazing speed and zero server overhead.',
      },
      {
        title: 'Strict TypeScript Codebase',
        description: 'Bug-resistant, maintainable code engineered to enterprise standards with full codebase ownership and documentation.',
      },
      {
        title: 'Framer Motion & WebGL Micro-Interactions',
        description: 'Fluid spring physics, scroll-driven parallax, and smooth route transitions that respect accessibility and reduced-motion.',
      },
      {
        title: 'Global Edge CDN Deployment',
        description: 'Deployed across global edge points with automated SSL, HTTP/3, and sub-second asset delivery.',
      },
    ],
    processSteps: [
      { step: '01', title: 'Technical Architecture', description: 'Configuring Next.js routing, state management, and asset pipeline.' },
      { step: '02', title: 'Component Engineering', description: 'Translating Figma designs into pixel-perfect, accessible React components.' },
      { step: '03', title: 'Performance Optimization', description: 'Optimizing image compression, font subsets, bundle tree-shaking, and lazy loading.' },
      { step: '04', title: 'Edge Deployment', description: 'Automated CI/CD build pipelines with zero-downtime production rollouts.' },
    ],
    technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Edge Runtime'],
    faqs: [
      {
        question: 'Why choose Next.js over standard WordPress or PHP websites?',
        answer: 'Next.js delivers sub-second loading, superior security (no SQL injection or vulnerable plugins), automated image optimization, and unbeatable Google Core Web Vitals scores that directly boost SEO.',
      },
      {
        question: 'Do you provide website hosting support?',
        answer: 'Yes. We configure and deploy your website to premier global edge networks like Vercel or Cloudflare, connecting your official custom domain with automated SSL certificates.',
      },
      {
        question: 'Can we edit content on the website later?',
        answer: 'Yes. We can integrate lightweight headless CMS options or structured configuration files that allow your team to update text, projects, and pricing easily.',
      },
      {
        question: 'What is included in your post-launch support?',
        answer: 'Every project includes dedicated post-launch technical warranty (from 7 to 60 days depending on tier) covering speed monitoring, bug fixes, and operational assistance.',
      },
    ],
    recommendedPlan: {
      name: 'BUSINESS',
      price: 'LKR 89,900+',
      description: 'Production Next.js flagship with 5–8 pages, custom animations, analytics, and advanced SEO.',
    },
    relatedProjectSlug: 'cargo-pizzeria',
  },

  'ecommerce': {
    slug: 'ecommerce',
    name: 'E-commerce',
    title: 'High-Conversion E-Commerce & WhatsApp Commerce Sri Lanka',
    metaTitle: 'E-commerce Website Development Sri Lanka | ApexGen Digital Studio',
    metaDescription:
      'High-conversion e-commerce stores and frictionless WhatsApp commerce platforms built for Sri Lankan and international businesses. Fast checkout, zero bloat, maximum conversion.',
    targetKeywords: [
      'E-commerce Website Development Sri Lanka',
      'Online Store Development Colombo',
      'WhatsApp Commerce Sri Lanka',
      'Custom E-commerce Design',
      'Sri Lanka Payment Gateway Integration',
      'High Conversion Online Shop',
    ],
    tagline: 'FRICTIONLESS ONLINE STORES ENGINEERED TO TURN BROWSERS INTO DAILY TRANSACTIONS.',
    category: 'COMMERCE ARCHITECTURE & REVENUE SYSTEMS',
    leadParagraph:
      'A successful online store is not just a digital catalog — it is a conversion funnel. Regional consumers often abandon clunky checkouts or demand immediate WhatsApp communication before placing orders. We build lightning-fast stores with direct WhatsApp ordering and regional payment gateways.',
    whyApexGen:
      'By streamlining the purchase path and integrating instant WhatsApp cart routing alongside standard gateways, our e-commerce solutions typically double order completion rates compared to standard slow Shopify or WooCommerce stores.',
    deliverables: [
      {
        title: 'Instant WhatsApp Cart & One-Click Ordering',
        description: 'Customers can compile an order and send an itemized receipt directly to your business WhatsApp with a single tap.',
      },
      {
        title: 'Filterable Product & Menu Discovery',
        description: 'Instant client-side categorization, search, and variant selection with zero lag or page reloads.',
      },
      {
        title: 'Payment Gateway Integration',
        description: 'Secure integration with regional and international payment providers (PayHere, WebXPay, Stripe).',
      },
      {
        title: 'Automated Order Receipts & Invoicing',
        description: 'Clean structured digital summaries sent to the client and business management simultaneously.',
      },
    ],
    processSteps: [
      { step: '01', title: 'Catalog Architecture', description: 'Structuring product categories, pricing models, variations, and stock rules.' },
      { step: '02', title: 'Checkout Funnel UX', description: 'Minimizing checkout steps to remove friction and cart abandonment triggers.' },
      { step: '03', title: 'Payment & WhatsApp Linking', description: 'Integrating payment webhooks and direct WhatsApp order messaging.' },
      { step: '04', title: 'Testing & Soft Launch', description: 'Running end-to-end transaction tests on mobile devices before opening to customers.' },
    ],
    technologies: ['Next.js Commerce', 'WhatsApp API', 'Secure Webhooks', 'Stripe / PayHere', 'Edge Inventory Sync'],
    faqs: [
      {
        question: 'How does WhatsApp Commerce work for our staff?',
        answer: 'When a customer clicks "Order via WhatsApp", their chosen items, quantities, customizations, delivery address, and order total are formatted into a clean WhatsApp message and sent straight to your business number.',
      },
      {
        question: 'Can we accept online card payments (Visa, MasterCard)?',
        answer: 'Yes. We integrate verified payment gateways like PayHere, WebXPay, and Stripe to accept local and international credit/debit cards.',
      },
      {
        question: 'Are there monthly platform fees like Shopify?',
        answer: 'No. With custom Next.js e-commerce architecture, you own your code outright with zero monthly percentage cuts or mandatory platform subscriptions.',
      },
      {
        question: 'Can this handle food menus with modifiers and variations?',
        answer: 'Yes. As demonstrated in our Cargo Pizza case study, we engineer complex food menus with crust choices, toppings, and promotional combos effortlessly.',
      },
    ],
    recommendedPlan: {
      name: 'PREMIUM',
      price: 'LKR 149,900+',
      description: 'Comprehensive e-commerce flagship with advanced catalog filtering, WhatsApp commerce, and custom payment integrations.',
    },
    relatedProjectSlug: 'cargo-pizzeria',
  },

  'booking-systems': {
    slug: 'booking-systems',
    name: 'Booking Systems',
    title: 'Custom Reservation & Business Booking Engines Sri Lanka',
    metaTitle: 'Custom Booking Systems & Reservation Websites Sri Lanka | ApexGen',
    metaDescription:
      'Bespoke appointment scheduling, hotel and table reservation engines designed to eliminate friction, prevent double-bookings, and automate client acquisition 24/7.',
    targetKeywords: [
      'Booking Systems Sri Lanka',
      'Table Reservation Website Development',
      'Doctor Clinic Appointment System Colombo',
      'Consultant Booking Platform',
      'Hotel Direct Reservation Engine Sri Lanka',
      'Online Appointment Scheduling',
    ],
    tagline: 'AUTOMATE CLIENT INTAKE AND CAPTURE HIGH-VALUE APPOINTMENTS AROUND THE CLOCK.',
    category: 'WORKFLOW ARCHITECTURE & DIRECT RESERVATIONS',
    leadParagraph:
      'Relying on manual phone calls or messy paper registers results in missed clients, double bookings, and wasted staff hours. We build custom booking workflows and digital reservation interfaces that make scheduling as easy as sending a message.',
    whyApexGen:
      'We tailor the booking journey to your business model — whether a woodfired pizzeria taking weekend dinner reservations, a restaurant consultant booking strategy sessions, or a luxury clinic scheduling consultations.',
    deliverables: [
      {
        title: 'Real-Time Availability & Slot Management',
        description: 'Interactive calendar interfaces that show live availability, operating shifts, and seating or room allocations.',
      },
      {
        title: 'Direct WhatsApp & SMS Confirmations',
        description: 'Automated booking confirmations and reminders dispatched instantly to customers to reduce no-show rates.',
      },
      {
        title: 'Client Intake Questionnaires',
        description: 'Capture critical client information, requirements, and dietary notes prior to the scheduled appointment.',
      },
      {
        title: 'Staff Control Interface',
        description: 'A clean overview for your front-of-house staff or receptionists to manage incoming bookings and update slot limits.',
      },
    ],
    processSteps: [
      { step: '01', title: 'Workflow Mapping', description: 'Documenting your operating hours, session limits, lead times, and capacity constraints.' },
      { step: '02', title: 'Frictionless UX Design', description: 'Designing a 3-step date/time/details booking picker optimized for mobile thumb interaction.' },
      { step: '03', title: 'Notification Engine', description: 'Hooking up automated WhatsApp and email dispatchers for confirmations and reminders.' },
      { step: '04', title: 'Staff Onboarding', description: 'Testing reservation flows and training your operational team to handle new bookings.' },
    ],
    technologies: ['Custom Calendar Engines', 'WhatsApp Notification API', 'Timezone Sync', 'Form Security Validation'],
    faqs: [
      {
        question: 'Can customers book tables or appointments directly on mobile?',
        answer: 'Yes. The booking flow is engineered mobile-first so customers can select dates, times, guest counts, and submit within 45 seconds without downloading an app.',
      },
      {
        question: 'Does this prevent double bookings?',
        answer: 'Yes. Slot limits and capacity logic prevent overlapping bookings once a time window is reserved.',
      },
      {
        question: 'Can we collect a booking deposit or upfront fee?',
        answer: 'Yes. We can integrate payment gateways so customers pay a deposit or full consultation fee to secure their reservation.',
      },
      {
        question: 'Can this sync with Google Calendar?',
        answer: 'Yes. We can synchronize confirmed appointments directly with your team’s Google Calendar or Outlook calendar.',
      },
    ],
    recommendedPlan: {
      name: 'BUSINESS',
      price: 'LKR 89,900+',
      description: 'Ideal for consulting practices, restaurants, wellness studios, and boutique hospitality stays.',
    },
    relatedProjectSlug: 'dinepro-advisors',
  },

  'seo': {
    slug: 'seo',
    name: 'SEO & Performance',
    title: 'Technical SEO & Core Web Vitals Optimization Sri Lanka',
    metaTitle: 'Technical SEO Services Sri Lanka | Speed & Search Authority | ApexGen',
    metaDescription:
      'Technical SEO, Core Web Vitals 95+ optimization, Schema.org structured data, and search authority engineering. Helping ambitious Sri Lankan and global brands dominate search rankings.',
    targetKeywords: [
      'SEO Services Sri Lanka',
      'Technical SEO Agency Colombo',
      'Core Web Vitals Optimization',
      'Search Engine Optimization Sri Lanka',
      'Google Lighthouse 90 Speed Optimization',
      'Schema Markup Structured Data',
    ],
    tagline: 'SEARCH ENGINES REWARD SPEED, STRUCTURE, AND AUTHORITY. WE ENGINEER ALL THREE.',
    category: 'TECHNICAL VISIBILITY & SEARCH AUTHORITY',
    leadParagraph:
      'A stunning website is useless if prospective high-value customers cannot discover it on Google. While traditional SEO agencies focus on superficial keyword stuffing and spam links, Google algorithms prioritize technical performance, structured semantic data, and user experience signals.',
    whyApexGen:
      'We bake technical SEO into the foundational architecture of every site we build: Schema.org JSON-LD microdata, pristine HTML5 semantics, sub-second TTFB, and verified Google Lighthouse scores exceeding 90.',
    deliverables: [
      {
        title: 'Schema.org JSON-LD Structured Data',
        description: 'Rich snippets for Organization, LocalBusiness, ProfessionalService, CreativeWork, and Breadcrumbs for rich Google SERP display.',
      },
      {
        title: 'Core Web Vitals 90+ Standards',
        description: 'Optimizing Largest Contentful Paint (LCP < 1.2s), Interaction to Next Paint (INP < 100ms), and Cumulative Layout Shift (CLS < 0.05).',
      },
      {
        title: 'Dynamic OpenGraph & Twitter Social Cards',
        description: 'Automated edge-generated preview cards that make every link shared on WhatsApp, LinkedIn, and X look authoritative.',
      },
      {
        title: 'Semantic HTML & Crawl Optimization',
        description: 'Proper single H1 heading hierarchy, descriptive image alt text, automated XML sitemaps, and optimized robots.txt directives.',
      },
    ],
    processSteps: [
      { step: '01', title: 'Technical Audit', description: 'Evaluating crawl errors, layout shifts, render-blocking scripts, and metadata gaps.' },
      { step: '02', title: 'Schema Injection', description: 'Authoring structured JSON-LD entities that teach Google the exact nature of your business.' },
      { step: '03', title: 'Speed & Edge Optimization', description: 'Compressing media assets to WebP/AVIF, preloading fonts, and leveraging edge caching.' },
      { step: '04', title: 'Search Console Verification', description: 'Submitting sitemaps, verifying indexation status, and setting up conversion event telemetry.' },
    ],
    technologies: ['Schema.org', 'JSON-LD', 'Google Search Console', 'Lighthouse 90+', 'Dynamic Edge OG', 'Semantic HTML5'],
    faqs: [
      {
        question: 'Do you guarantee number 1 ranking on Google?',
        answer: 'No reputable digital studio can guarantee a specific numerical rank because Google algorithms update continuously. However, we guarantee world-class technical foundations that give your site the highest statistical probability of dominating relevant commercial queries.',
      },
      {
        question: 'What is Schema.org structured data and why does it matter?',
        answer: 'Schema.org is a standardized machine-readable vocabulary that tells Google explicitly what your business offers, your operating hours, telephone number, price range, and services. It helps trigger rich search results and local knowledge panels.',
      },
      {
        question: 'How do you optimize Core Web Vitals?',
        answer: 'By serving modern WebP/AVIF images with explicit aspect ratios, minimizing JavaScript execution time, preloading critical fonts, and serving content from edge CDN nodes.',
      },
      {
        question: 'Can you set up Google Search Console and Google Analytics 4?',
        answer: 'Yes. We prepare and verify your domain in Google Search Console and configure GA4 event tracking for form submissions, WhatsApp clicks, and phone calls.',
      },
    ],
    recommendedPlan: {
      name: 'BUSINESS',
      price: 'LKR 89,900+',
      description: 'Includes complete technical SEO setup, Schema.org schemas, dynamic OpenGraph cards, and Core Web Vitals optimization.',
    },
    relatedProjectSlug: 'dinepro-advisors',
  },

  'automation': {
    slug: 'automation',
    name: 'Business Automation',
    title: 'Digital Workflow & Business Process Automation Sri Lanka',
    metaTitle: 'Business Automation & Lead Workflow Solutions Sri Lanka | ApexGen',
    metaDescription:
      'Custom webhook integrations, automated lead routing, and WhatsApp notification systems designed to eliminate repetitive operational work and save your team hours daily.',
    targetKeywords: [
      'Business Automation Sri Lanka',
      'Workflow Automation Colombo',
      'WhatsApp Notification Automation',
      'CRM Lead Routing System',
      'Custom API Integration Sri Lanka',
      'Digital Operational Efficiency',
    ],
    tagline: 'ELIMINATE REPETITIVE TASKS AND DISPATCH INCOMING LEADS IN SUB-SECONDS.',
    category: 'OPERATIONAL EFFICIENCY & API INTEGRATIONS',
    leadParagraph:
      'When prospective clients submit an inquiry, every minute of delay reduces conversion likelihood. Manually copying customer details across spreadsheets, messaging apps, and email chains is error-prone and consumes hours of valuable team bandwidth. We engineer automated digital pipelines that handle the heavy lifting.',
    whyApexGen:
      'We link your website directly to your internal communication tools — whether dispatching instant lead alerts to your private Slack/Discord channel, logging inquiries into your CRM, or sending automatic WhatsApp confirmations to the customer.',
    deliverables: [
      {
        title: 'Instant Multi-Channel Lead Routing',
        description: 'New website inquiries are automatically formatted and dispatched to your team’s WhatsApp, Slack, Discord, or email in real time.',
      },
      {
        title: 'CRM & Database Synchronization',
        description: 'Synchronize customer records with Google Sheets, Notion, Supabase, or HubSpot without manual data entry.',
      },
      {
        title: 'Customer Self-Service Onboarding',
        description: 'Automated intake questionnaires that guide customers through requirements gathering before initial consultation calls.',
      },
      {
        title: 'Custom API Webhook Development',
        description: 'Secure, token-authenticated webhooks that connect third-party business software together effortlessly.',
      },
    ],
    processSteps: [
      { step: '01', title: 'Bottleneck Audit', description: 'Identifying manual data entry, repetitive messages, and delay points in your client pipeline.' },
      { step: '02', title: 'Architecture & Webhooks', description: 'Designing serverless API handlers and secure payload forwarding pipelines.' },
      { step: '03', title: 'Integration Testing', description: 'Running end-to-end simulated client submissions and verifying payload reliability.' },
      { step: '04', title: 'Production Handover', description: 'Deploying automated workflows with monitoring and fail-safe alerts.' },
    ],
    technologies: ['Serverless APIs', 'Webhook Routing', 'WhatsApp Business API', 'Slack / Discord Bots', 'Make / Zapier / Direct API'],
    faqs: [
      {
        question: 'Can website inquiries go directly to our staff WhatsApp?',
        answer: 'Yes. We can trigger instant WhatsApp alerts containing the client name, service requested, budget, and description so your team can respond within seconds.',
      },
      {
        question: 'Do we need expensive third-party automation subscriptions?',
        answer: 'No. Where possible, we engineer direct native API endpoints and webhooks that run on serverless edge functions with near-zero recurring hosting overhead.',
      },
      {
        question: 'Is client information kept private and secure?',
        answer: 'Absolutely. All webhook payloads use encrypted HTTPS endpoints and server-side authentication tokens. Private credentials are never exposed in public frontend code.',
      },
      {
        question: 'Can this connect to Google Sheets or Notion?',
        answer: 'Yes. Every incoming inquiry can automatically append a new row in your private Google Sheet or Notion database with timestamped lead details.',
      },
    ],
    recommendedPlan: {
      name: 'PREMIUM',
      price: 'LKR 149,900+',
      description: 'Includes bespoke webhook integrations, automated lead routing, and custom CRM or database connections.',
    },
    relatedProjectSlug: '69-studio',
  },
};
