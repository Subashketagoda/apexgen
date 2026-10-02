// ApexGen Studio — Service Disciplines Data
// Organized under 3 Master Creative Categories: DESIGN • BUILD • GROW

export interface ServiceDetail {
  slug: string;
  name: string;
  category: 'DESIGN' | 'BUILD' | 'GROW';
  subDisciplines: string[];
  headline: string;
  tagline: string;
  leadParagraph: string;
  problem: string;
  solution: string;
  capabilities: {
    title: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  technologies: string[];
  relevantWorkSlug: string;
  metaTitle: string;
  metaDescription: string;
  targetKeywords: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface ServiceCategory {
  id: 'DESIGN' | 'BUILD' | 'GROW';
  title: string;
  tagline: string;
  description: string;
  subDisciplines: string[];
  services: string[]; // slugs
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'DESIGN',
    title: 'DESIGN',
    tagline: 'Visual Direction & Digital Craft',
    description:
      'We craft bespoke visual languages that command immediate respect. Editorial typography, spatial hierarchy, and responsive design systems that turn casual visitors into loyal brand advocates.',
    subDisciplines: ['Web Design', 'UI/UX Craft', 'Creative Direction', 'Brand Experiences'],
    services: ['web-design'],
  },
  {
    id: 'BUILD',
    title: 'BUILD',
    tagline: 'Next.js & Software Engineering',
    description:
      'Sub-second loading times engineered on Next.js, React, TypeScript, and edge infrastructure. Clean, scalable architectures built with zero bloated site builders or brittle dependencies.',
    subDisciplines: ['Web Development', 'E-commerce', 'Booking Systems', 'Custom Digital Products'],
    services: ['web-development', 'ecommerce', 'booking-systems'],
  },
  {
    id: 'GROW',
    title: 'GROW',
    tagline: 'Search Engine Authority & Conversion',
    description:
      'Technical search engine optimization, sub-second Core Web Vitals, and automated business workflows that ensure your digital presence consistently attracts and captures high-value clients.',
    subDisciplines: ['SEO Authority', 'Core Web Vitals', 'Business Automation', 'Conversion Analytics'],
    services: ['seo', 'automation'],
  },
];

export const servicesData: Record<string, ServiceDetail> = {
  'web-design': {
    slug: 'web-design',
    name: 'Website Design',
    category: 'DESIGN',
    subDisciplines: ['UI/UX Art Direction', 'Responsive Design Systems', 'Visual Identity', 'Micro-Interactions'],
    headline: 'Bespoke Web Design & UI/UX Studio',
    tagline: 'WE DESIGN DIGITAL EXPERIENCES THAT COMMAND ATTENTION AND ELEVATE BRAND VALUE.',
    leadParagraph:
      'In a digital market saturated with cookie-cutter WordPress templates, your website is the sole differentiator between being chosen or forgotten. We design high-end digital flagships tailored to your exact brand character, customer journey, and commercial ambitions.',
    problem:
      'Most business websites look identical, confuse visitors with cluttered layouts, and fail to evoke trust. Generic themes dilute your brand equity and cause potential clients to bounce within seconds.',
    solution:
      'We craft bespoke visual systems from scratch in Figma before writing code. We pair editorial typography, deliberate spatial rhythm, and responsive touch ergonomics to create an unforgettable first impression.',
    capabilities: [
      {
        title: 'Bespoke UI/UX Art Direction',
        description: 'Original wireframes and high-fidelity interfaces crafted exclusively around your brand persona with zero recycled templates.',
      },
      {
        title: 'Editorial Typography & Spatial Grid',
        description: 'Disciplined hierarchy using premium typefaces, generous whitespace, and responsive grids that guide reader attention naturally.',
      },
      {
        title: 'Interactive Design Systems',
        description: 'Reusable component libraries, color tokens, and micro-interactions that guarantee visual consistency across every viewport.',
      },
      {
        title: 'Mobile Touch Ergonomics',
        description: 'Mobile layouts engineered specifically for thumb navigation, touch targets, and rapid single-hand interaction.',
      },
    ],
    process: [
      { step: '01', title: 'Brand Discovery', description: 'Deep audit of your brand ethos, target audience psychology, and competitive landscape.' },
      { step: '02', title: 'Wireframes & Information Flow', description: 'Mapping intuitive page structures and conversion funnels before visual styling.' },
      { step: '03', title: 'Art Direction & Prototyping', description: 'Crafting high-fidelity interactive prototypes with motion and typography.' },
      { step: '04', title: 'Design System Delivery', description: 'Finalizing production design assets ready for pixel-perfect frontend engineering.' },
    ],
    technologies: ['Figma', 'Design Systems', 'Interactive Prototypes', 'Responsive Layouts'],
    relevantWorkSlug: '69-studio',
    metaTitle: 'Web Design Agency Sri Lanka | Premium UI/UX Studio | ApexGen',
    metaDescription:
      'ApexGen crafts custom, award-level web designs for ambitious businesses in Sri Lanka and globally. High-contrast dark luxury, editorial typography, and conversion-focused UI/UX.',
    targetKeywords: [
      'Web Design Agency Sri Lanka',
      'Website Designer Colombo',
      'Custom Website Design',
      'UI UX Designer Sri Lanka',
      'Luxury Website Design',
    ],
    faqs: [
      {
        question: 'Do you use pre-made WordPress or Wix templates?',
        answer: 'Never. Every ApexGen design is conceptualized and art-directed from a blank canvas in Figma specifically for your brand.',
      },
      {
        question: 'Will I be able to preview and give feedback during design?',
        answer: 'Yes. You receive interactive Figma prototype walkthroughs at both wireframe and high-fidelity design stages for collaborative revision.',
      },
      {
        question: 'How do you ensure the design looks great on mobile?',
        answer: 'Mobile is never an afterthought. We design dedicated mobile layouts for every page, ensuring ergonomic thumb reach and swift reading.',
      },
    ],
  },
  'web-development': {
    slug: 'web-development',
    name: 'Website Development',
    category: 'BUILD',
    subDisciplines: ['Next.js Architecture', 'TypeScript Engineering', 'Tailwind CSS', 'Sub-Second Edge CDN'],
    headline: 'High-Performance Next.js Engineering',
    tagline: 'SUB-SECOND LOADING TIMES POWERED BY CLEAN, MODERN CODE.',
    leadParagraph:
      'A great design fails if it takes four seconds to load. We engineer fast, clean, and secure web applications with Next.js, React, and TypeScript. No sluggish page builders, no security vulnerabilities, and no bloated plugins.',
    problem:
      'Legacy websites built on bloated CMS plugins suffer from slow load times, frequent plugin crashes, broken updates, and security vulnerabilities that damage customer trust and SEO rankings.',
    solution:
      'We write hand-crafted, production-grade Next.js and TypeScript code deployed to global edge CDNs. Pages render in under 500 milliseconds, with zero server overhead and bank-grade security.',
    capabilities: [
      {
        title: 'Next.js App Router Architecture',
        description: 'Server Components for zero-bundle rendering, instant page transitions, and optimal Core Web Vitals.',
      },
      {
        title: 'Sub-Second Global Edge Delivery',
        description: 'Static generation and edge caching ensuring sub-500ms response times anywhere in the world.',
      },
      {
        title: 'Full Source Ownership',
        description: 'You own 100% of your source code and repository with zero vendor lock-in or recurring builder fees.',
      },
      {
        title: 'Rigorous Cross-Browser QA',
        description: 'Comprehensive testing across Chrome, Safari, Firefox, iOS, and Android for pixel-perfect fidelity.',
      },
    ],
    process: [
      { step: '01', title: 'Architecture Setup', description: 'Setting up Next.js App Router, TypeScript contracts, and styling foundations.' },
      { step: '02', title: 'Component Engineering', description: 'Building accessible, reusable components matching approved Figma designs.' },
      { step: '03', title: 'Performance Tuning', description: 'Optimizing LCP, font loading, script execution, and image compression.' },
      { step: '04', title: 'Production Deployment', description: 'Zero-downtime deployment to Vercel or cloud CDN with continuous delivery.' },
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Edge CDN'],
    relevantWorkSlug: 'cargo-pizza',
    metaTitle: 'Website Development Sri Lanka | Next.js Agency | ApexGen',
    metaDescription:
      'Modern, high-performance website development in Sri Lanka using Next.js, React, and TypeScript. Sub-second loading speed, custom animations, and clean architecture.',
    targetKeywords: [
      'Website Development Sri Lanka',
      'Next.js Developer Sri Lanka',
      'Web Development Agency Colombo',
      'Custom Web Application Development',
    ],
    faqs: [
      {
        question: 'Why do you build with Next.js instead of WordPress?',
        answer: 'Next.js delivers sub-second load times, superior Google Core Web Vitals scores, zero plugin vulnerability risks, and infinite scalability.',
      },
      {
        question: 'Do I get access to the source code?',
        answer: 'Yes. Upon project completion, full repository ownership is transferred to your organization with full documentation.',
      },
      {
        question: 'What are the ongoing hosting costs?',
        answer: 'Because Next.js renders efficiently on edge networks like Vercel, most client websites run on near-zero hosting costs.',
      },
    ],
  },
  'ecommerce': {
    slug: 'ecommerce',
    name: 'E-commerce',
    category: 'BUILD',
    subDisciplines: ['WhatsApp Commerce', 'Frictionless Cart', 'Visual Product Catalogs', 'Mobile Checkout'],
    headline: 'High-Conversion Digital Commerce',
    tagline: 'TURNING ONLINE BROWSERS INTO PAYING CUSTOMERS WITH ZERO FRICTION.',
    leadParagraph:
      'E-commerce in modern markets demands speed and immediacy. We design and engineer custom online stores with frictionless visual menus, localized payment gateways, and direct WhatsApp checkout flows that maximize completed orders.',
    problem:
      'Standard e-commerce stores lose up to 70% of potential buyers at checkout due to mandatory account creation, confusing payment steps, and sluggish mobile loading.',
    solution:
      'We engineer streamlined ordering paths. For food and retail brands, our WhatsApp ordering engine lets customers select items and submit structured orders directly into your chat in under 30 seconds.',
    capabilities: [
      {
        title: 'Direct WhatsApp Ordering Engine',
        description: 'Instant cart-to-WhatsApp forwarding that creates formatted order summaries without customer login friction.',
      },
      {
        title: 'Visual Product & Menu Architecture',
        description: 'Appetizing visual showcases with variant selectors, add-on options, and live stock indicators.',
      },
      {
        title: 'Rapid Mobile Checkout',
        description: 'One-thumb checkout workflows optimized specifically for smartphone shoppers on mobile connections.',
      },
      {
        title: 'Payment Gateway Integration',
        description: 'Seamless integration with international or Sri Lankan payment providers like PayHere, Stripe, or direct bank transfer.',
      },
    ],
    process: [
      { step: '01', title: 'Product & Flow Audit', description: 'Analyzing your inventory, fulfillment methods, and customer buying habits.' },
      { step: '02', title: 'Catalog UX Design', description: 'Designing high-contrast product displays with instant variant selection.' },
      { step: '03', title: 'Checkout & Gateway Build', description: 'Developing WhatsApp routing or payment gateway processing.' },
      { step: '04', title: 'Order Flow Testing', description: 'Simulating order submissions, notification triggers, and receipt delivery.' },
    ],
    technologies: ['Next.js Commerce', 'WhatsApp API Routing', 'Stripe / PayHere', 'Dynamic Cart State'],
    relevantWorkSlug: 'cargo-pizza',
    metaTitle: 'E-commerce Website Development Sri Lanka | ApexGen',
    metaDescription:
      'Custom e-commerce web development in Sri Lanka. Build high-converting online stores with direct WhatsApp checkout, secure payment gateways, and sub-second catalog speeds.',
    targetKeywords: [
      'E-commerce Website Development',
      'WhatsApp Commerce Sri Lanka',
      'Online Store Web Design Colombo',
      'Custom E-commerce Store',
    ],
    faqs: [
      {
        question: 'How does WhatsApp ordering work?',
        answer: 'Customers add items to their cart on your website. When they click checkout, their selections, customizations, and address are automatically pre-filled into a WhatsApp message directly to your staff.',
      },
      {
        question: 'Can you integrate online credit card payments?',
        answer: 'Yes. We support payment gateways like PayHere, WebXPay, Stripe, and direct bank transfer options.',
      },
      {
        question: 'Do you charge a commission on sales?',
        answer: 'No. ApexGen never takes a percentage of your sales. You keep 100% of your revenue.',
      },
    ],
  },
  'booking-systems': {
    slug: 'booking-systems',
    name: 'Booking Systems',
    category: 'BUILD',
    subDisciplines: ['Online Reservation Engines', 'Calendar Synchronization', 'Intake Questionnaires', 'Automated Reminders'],
    headline: 'Bespoke Reservation & Booking Engines',
    tagline: 'CAPTURE HIGH-VALUE APPOINTMENTS 24/7 WITHOUT MANUAL SCHEDULING FRICTION.',
    leadParagraph:
      'Whether managing appointments for a luxury salon, tables at a fine dining restaurant, or consultations for an advisory practice, our bespoke booking systems automate reservations and eliminate scheduling double-bookings.',
    problem:
      'Managing bookings through manual phone calls and Instagram DMs wastes staff time, causes missed client inquiries outside business hours, and leads to scheduling confusion.',
    solution:
      'We integrate intuitive, self-service booking engines directly into your website. Clients view real-time availability, select services, and secure appointments 24/7 with instant confirmation alerts.',
    capabilities: [
      {
        title: 'Real-Time Availability Calendars',
        description: 'Synchronized appointment slots that automatically block reserved times to prevent double-booking.',
      },
      {
        title: 'Service & Stylist Selection',
        description: 'Multi-step booking workflows allowing clients to pick specific services, staff members, and session durations.',
      },
      {
        title: 'Instant Confirmation Alerts',
        description: 'Automated WhatsApp or email confirmations dispatched immediately to both client and business staff.',
      },
      {
        title: 'Client Intake Questionnaires',
        description: 'Collect key project or consultation details prior to the meeting to ensure high-value consultations.',
      },
    ],
    process: [
      { step: '01', title: 'Schedule Modeling', description: 'Mapping working hours, buffer times, service durations, and staff capacity.' },
      { step: '02', title: 'Booking Flow UX', description: 'Designing a clear 3-step date, service, and contact selection interface.' },
      { step: '03', title: 'Calendar Sync Engineering', description: 'Connecting availability rules, Google/Outlook calendars, and notification webhooks.' },
      { step: '04', title: 'Staff Training & Live Launch', description: 'Onboarding your team to review incoming bookings and manage schedule changes.' },
    ],
    technologies: ['Calendar Sync API', 'Automated WhatsApp Alerts', 'Next.js App Engine', 'Secure Client Database'],
    relevantWorkSlug: '69-studio',
    metaTitle: 'Online Booking Systems & Reservation Web Design | ApexGen',
    metaDescription:
      'Bespoke booking systems and online reservation engines for salons, clinics, restaurants, and consultancies in Sri Lanka. Automated scheduling, WhatsApp confirmations.',
    targetKeywords: [
      'Booking Systems Sri Lanka',
      'Online Reservation Engine',
      'Salon Booking System Website',
      'Consultation Booking Platform',
    ],
    faqs: [
      {
        question: 'Can the booking system sync with our Google Calendar?',
        answer: 'Yes. Appointments can automatically sync with Google Calendar, Outlook, or your internal salon/practice management tools.',
      },
      {
        question: 'Can we collect deposits or consultation fees upfront?',
        answer: 'Yes. The booking system can require an advance payment via credit card or bank slip upload before confirming the reservation.',
      },
      {
        question: 'Can customers reschedule or cancel appointments?',
        answer: 'Yes, based on your cancellation policy rules, clients can self-reschedule through their confirmation link.',
      },
    ],
  },
  'seo': {
    slug: 'seo',
    name: 'SEO & Performance',
    category: 'GROW',
    subDisciplines: ['Core Web Vitals 95+', 'Schema.org JSON-LD', 'Semantic HTML5', 'Local Search Colombo'],
    headline: 'Technical SEO & Search Authority',
    tagline: 'BUILT-IN SEARCH ENGINE DOMINANCE AND LIGHTHOUSE 95+ AUDITS.',
    leadParagraph:
      'Search engine optimization is not an afterthought; it is engineered into the very foundation of your website. We implement semantic HTML5, valid Schema.org JSON-LD, canonical routing, and sub-second Core Web Vitals to help you outrank competitors naturally.',
    problem:
      'Most websites are invisible on Google because they suffer from poor mobile loading speeds, missing structured data, and broken indexing configurations that prevent search bots from understanding their value.',
    solution:
      'We engineer your site for Google search bots from day one: clean heading hierarchies, rich snippet microdata, automated XML sitemaps, and top-tier Core Web Vitals that earn search visibility.',
    capabilities: [
      {
        title: 'Core Web Vitals Optimization',
        description: 'Engineered for sub-second Largest Contentful Paint (LCP) and zero Cumulative Layout Shift (CLS).',
      },
      {
        title: 'Comprehensive Schema.org JSON-LD',
        description: 'Structured data microformats for Organization, LocalBusiness, Service, BreadcrumbList, and FAQPage.',
      },
      {
        title: 'Semantic Heading & Content Architecture',
        description: 'Strict H1-H4 hierarchy and keyword-dense editorial copy tailored to Sri Lankan and international searches.',
      },
      {
        title: 'Search Console & Indexation Readiness',
        description: 'Clean XML sitemaps, robots.txt directives, OpenGraph cards, and Google Search Console verification.',
      },
    ],
    process: [
      { step: '01', title: 'Keyword Intent Analysis', description: 'Researching high-intent search terms used by paying clients in your industry.' },
      { step: '02', title: 'On-Page Architecture', description: 'Structuring title tags, meta descriptions, image alt tags, and internal link equity.' },
      { step: '03', title: 'Structured Data Integration', description: 'Embedding validated JSON-LD schemas for rich snippet search results.' },
      { step: '04', title: 'Speed & Audit Validation', description: 'Running Google Lighthouse audits to achieve 90+ across Performance, Accessibility, and SEO.' },
    ],
    technologies: ['Schema.org JSON-LD', 'Lighthouse 95+ Audit', 'OpenGraph Meta', 'Google Search Console'],
    relevantWorkSlug: 'dinepro-advisors',
    metaTitle: 'SEO Services Sri Lanka | Technical Core Web Vitals | ApexGen',
    metaDescription:
      'Expert technical SEO services in Sri Lanka by ApexGen. Schema.org structured data, Google Core Web Vitals 95+ performance, and semantic on-page optimization.',
    targetKeywords: [
      'SEO Services Sri Lanka',
      'Technical SEO Agency Colombo',
      'Website Optimization Sri Lanka',
      'Core Web Vitals Optimization',
    ],
    faqs: [
      {
        question: 'How fast will my website appear on Google?',
        answer: 'With proper technical SEO, dynamic XML sitemaps, and Search Console submission, search engines index new pages within days. Organic ranking increases as domain authority compounds over 2 to 6 months.',
      },
      {
        question: 'Do you guarantee number 1 rankings on Google?',
        answer: 'No ethical agency can guarantee #1 rankings as search algorithms update constantly. However, our technical foundation guarantees your site meets all of Google’s Core Web Vitals and Schema criteria.',
      },
      {
        question: 'Are image alt tags and social sharing previews included?',
        answer: 'Yes. Every image includes descriptive alt text, and every page includes custom OpenGraph and Twitter card previews.',
      },
    ],
  },
  'automation': {
    slug: 'automation',
    name: 'Business Automation',
    category: 'GROW',
    subDisciplines: ['Custom API Webhooks', 'Automated Lead Routing', 'WhatsApp Alerts', 'Database Synchronization'],
    headline: 'Operational Business Automation',
    tagline: 'ELIMINATE REPETITIVE TASKS AND DISPATCH INQUIRIES INSTANTLY.',
    leadParagraph:
      'A website should work as your hardest-working employee. We connect your digital platforms to custom API webhooks, instant WhatsApp notifications, CRM pipelines, and database spreadsheets, giving your leadership hours back each week.',
    problem:
      'Valuable business leads sit unaddressed for hours in generic email inboxes, while staff waste repetitive hours copying data between forms, spreadsheets, and messaging apps.',
    solution:
      'We engineer automated serverless webhook pipelines. When a client submits an inquiry or places an order, your team receives an instant structured WhatsApp alert, and customer records sync to your database automatically.',
    capabilities: [
      {
        title: 'Instant WhatsApp Lead Dispatch',
        description: 'New project briefs and orders routed directly to your mobile phone within 2 seconds of submission.',
      },
      {
        title: 'Database & Spreadsheet Sync',
        description: 'Automatically record every lead in Google Sheets, Notion, or Supabase without manual data entry.',
      },
      {
        title: 'Custom Webhook Architecture',
        description: 'Secure, token-authenticated webhook handlers connecting your website to third-party software seamlessly.',
      },
      {
        title: 'Automated Client Follow-Ups',
        description: 'Instant branded email and WhatsApp receipts that reassure clients their brief is being actively reviewed.',
      },
    ],
    process: [
      { step: '01', title: 'Workflow Audit', description: 'Identifying manual bottleneck points in your current client intake and response cycle.' },
      { step: '02', title: 'Webhook & API Design', description: 'Architecting secure API routes and structured JSON payloads for lead distribution.' },
      { step: '03', title: 'Pipeline Integration', description: 'Connecting endpoints to WhatsApp Business API, Slack, Google Sheets, or CRM tools.' },
      { step: '04', title: 'Reliability & Error Handling', description: 'Testing webhook retries, spam honeypot filters, and payload delivery logging.' },
    ],
    technologies: ['Serverless Edge APIs', 'Webhook Routing', 'WhatsApp Business API', 'Database Webhooks'],
    relevantWorkSlug: 'cargo-pizza',
    metaTitle: 'Business Automation & API Integration Sri Lanka | ApexGen',
    metaDescription:
      'Automate your business workflows with ApexGen. Custom API webhooks, instant WhatsApp lead notifications, CRM sync, and automated customer onboarding.',
    targetKeywords: [
      'Business Process Automation Sri Lanka',
      'WhatsApp Automation Colombo',
      'API Webhook Integration',
      'Lead Automation Agency',
    ],
    faqs: [
      {
        question: 'Can new inquiries go straight to my staff WhatsApp?',
        answer: 'Yes. As soon as a client submits a form, an automated notification arrives on your WhatsApp with their name, service requested, budget, and project notes.',
      },
      {
        question: 'Do we need expensive third-party subscriptions like Zapier?',
        answer: 'No. Where possible, we write native serverless webhooks in Next.js that run with near-zero ongoing subscription overhead.',
      },
      {
        question: 'Is client information kept confidential and secure?',
        answer: 'Yes. All data transmissions utilize encrypted HTTPS endpoints and server-side secret tokens. Client details are never leaked in client-side code.',
      },
    ],
  },
};

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesData[slug.toLowerCase()];
}
