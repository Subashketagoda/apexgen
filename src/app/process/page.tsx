import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { CheckCircle2, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our 5-Stage Process & Methodology | ApexGen',
  description:
    'Explore the disciplined 5-stage creative process ApexGen uses to discover, direct, design, build, and launch high-impact digital experiences in Sri Lanka.',
  keywords: [
    'Web design process',
    'Website development methodology Sri Lanka',
    'Next.js development workflow',
    'UI UX design sprint',
    'Subhash Ketagoda creative process',
    'ApexGen methodology',
  ],
  alternates: {
    canonical: `${siteConfig.siteUrl}/process`,
  },
  openGraph: {
    title: 'Our 5-Stage Process & Methodology | ApexGen',
    description:
      '01 Discover → 02 Direction → 03 Design → 04 Build → 05 Launch. The disciplined creative methodology of ApexGen.',
    url: `${siteConfig.siteUrl}/process`,
    type: 'website',
    images: [
      {
        url: '/brand/apexgen-brand-kit.png',
        width: 1200,
        height: 630,
        alt: 'ApexGen 5-Stage Creative Methodology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our 5-Stage Process & Methodology | ApexGen',
    description:
      '01 Discover → 02 Direction → 03 Design → 04 Build → 05 Launch. The disciplined creative methodology of ApexGen.',
    images: ['/brand/apexgen-brand-kit.png'],
  },
};

const processStages = [
  {
    number: '01',
    title: 'DISCOVER',
    duration: 'Sprint Phase 01',
    tagline: 'Brand Alignment & Commercial Psychology',
    description:
      'Before opening Figma or writing code, we dissect your commercial positioning. We uncover what makes your business extraordinary, analyze your competitors’ weaknesses, and define the exact emotional response your website must provoke.',
    deliverables: [
      'Commercial positioning & audience psychology brief',
      'Competitor visual & architectural gap audit',
      'Technical roadmap & integration scope',
    ],
  },
  {
    number: '02',
    title: 'DIRECTION',
    duration: 'Sprint Phase 02',
    tagline: 'Moodboarding & Information Architecture',
    description:
      'We establish the creative trajectory. Through curated moodboards, typographic pairings, and low-fidelity information architecture wireframes, we structure the visitor journey from initial intrigue to final transaction.',
    deliverables: [
      'Curated editorial moodboards and visual tone of voice',
      'Information architecture wireframes and user flow mapping',
      'Content strategy and key copy outlines',
    ],
  },
  {
    number: '03',
    title: 'DESIGN',
    duration: 'Sprint Phase 03',
    tagline: 'High-Fidelity Art Direction & Interactive Prototyping',
    description:
      'We craft every screen from a blank canvas in Figma. We balance bold editorial typography with micro-interactions, responsive grid systems, and custom photography crops to build a cohesive visual world.',
    deliverables: [
      'High-fidelity desktop, tablet, and mobile interface mockups',
      'Interactive Figma prototype with click-through animations',
      'Design tokens, color harmonies, and typography scales',
    ],
  },
  {
    number: '04',
    title: 'BUILD',
    duration: 'Sprint Phase 04',
    tagline: 'Next.js Engineering & Sub-Second Speeds',
    description:
      'We transform approved designs into production software. Using Next.js, React, and TypeScript, we hand-code clean, accessible, and ultra-fast components deployed to global edge CDNs.',
    deliverables: [
      'Production Next.js App Router codebase with full TypeScript types',
      'Frictionless booking engines, WhatsApp checkouts, and forms',
      'Sub-second edge caching and asset optimization',
    ],
  },
  {
    number: '05',
    title: 'LAUNCH',
    duration: 'Sprint Phase 05',
    tagline: 'Lighthouse Audits, Schema SEO & Go-Live',
    description:
      'We conduct rigorous pre-launch audits across viewports, devices, and search crawlers. We verify Google Core Web Vitals 95+ scores, deploy Schema.org structured data, and coordinate zero-downtime domain cutover.',
    deliverables: [
      'Google Lighthouse 90+ speed, accessibility, and SEO audit',
      'Schema.org JSON-LD structured data and dynamic XML sitemaps',
      'Domain DNS propagation and post-launch technical warranty',
    ],
  },
];

export default function ProcessPage() {
  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'ApexGen 5-Stage Digital Agency Process',
    description: 'Disciplined creative methodology to design, engineer, and launch high-impact digital experiences.',
    step: processStages.map((stage, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: stage.title,
      text: stage.description,
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Process',
        item: `${siteConfig.siteUrl}/process`,
      },
    ],
  };

  return (
    <div className="bg-[#040406] text-[#F5F5F7] min-h-screen selection:bg-white selection:text-black relative">
      <CustomCursor />
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="pt-32 sm:pt-44 pb-28 sm:pb-36 overflow-hidden">
        {/* Editorial Header */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-20 sm:mb-32">
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] text-xs font-mono text-zinc-300 tracking-wider uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>SPRINT METHODOLOGY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-light tracking-[-0.04em] text-white uppercase font-mono mb-8 max-w-5xl leading-[1.05]">
            HOW WE BRING DIGITAL FLAGSHIPS TO LIFE.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 font-light max-w-3xl leading-relaxed">
            A disciplined, five-stage sprint cadence engineered to eliminate ambiguity, guarantee sub-second performance, and deliver extraordinary visual craft.
          </p>
        </section>

        {/* 5-STAGE VERTICAL STORYTELLING EXPERIENCE */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-24 sm:space-y-36">
          {processStages.map((stage) => (
            <article
              key={stage.number}
              className="border-t border-white/[0.08] pt-12 sm:pt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
            >
              {/* Massive Stage Number (4-col) */}
              <div className="lg:col-span-4 space-y-4">
                <div className="text-7xl sm:text-9xl font-mono font-light tracking-tighter text-white/30 select-none">
                  {stage.number}
                </div>

                <div className="inline-flex items-center space-x-2 text-xs font-mono text-zinc-400 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
                  <Clock className="w-3.5 h-3.5 text-zinc-300" />
                  <span>{stage.duration}</span>
                </div>
              </div>

              {/* Stage Details (8-col) */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <h2 className="text-3xl sm:text-5xl font-light text-white uppercase font-mono mb-2">
                    {stage.title}
                  </h2>
                  <p className="text-xs sm:text-sm font-mono tracking-widest text-[#FF7A1A] uppercase">
                    {stage.tagline}
                  </p>
                </div>

                <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                  {stage.description}
                </p>

                {/* Deliverables Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950/80 border border-white/10 space-y-4">
                  <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase block">
                    STAGE DELIVERABLES &bull; WHAT YOU RECEIVE:
                  </span>
                  <div className="space-y-3">
                    {stage.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm font-mono text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-[#FF5E00] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Bottom CTA */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mt-28 sm:mt-36">
          <div className="p-10 sm:p-16 rounded-3xl bg-neutral-950 border border-[#FF5E00]/30 text-center space-y-6 relative overflow-hidden">
            <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase block">
              READY TO COMMENCE?
            </span>
            <h3 className="text-3xl sm:text-5xl font-light text-white uppercase font-mono max-w-2xl mx-auto">
              Let&apos;s build an extraordinary website together.
            </h3>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/start-a-project"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FF5E00] text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#FF7A1A] transition-all shadow-[0_0_25px_rgba(255,94,0,0.3)]"
              >
                START A PROJECT &rarr;
              </Link>
              <Link
                href="/pricing"
                className="w-full sm:w-auto px-7 py-4 rounded-full border border-white/20 text-white font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
              >
                VIEW PRICING TIERS
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
