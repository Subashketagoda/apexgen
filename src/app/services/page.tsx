import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';
import { servicesData } from '@/data/servicesData';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import {
  ArrowRight,
  Sparkles,
  Layers,
  Code2,
  Calendar,
  Search,
  Cpu,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Agency Services — Web Design, Development & SEO | ApexGen',
  description:
    'ApexGen delivers bespoke website design, high-performance Next.js development, e-commerce stores, custom booking engines, search engine optimization, and business automation in Sri Lanka and worldwide.',
  keywords: [
    'Web Design Agency Sri Lanka',
    'Website Development Sri Lanka',
    'Website Designer Colombo',
    'Business Website Development',
    'E-commerce Website Development',
    'Custom Website Design',
    'Website Redesign',
    'SEO Services Sri Lanka',
    'ApexGen Services',
  ],
  alternates: {
    canonical: `${siteConfig.siteUrl}/services`,
  },
  openGraph: {
    title: 'Digital Agency Services — Web Design, Development & SEO | ApexGen',
    description:
      'ApexGen delivers bespoke website design, high-performance Next.js development, e-commerce stores, custom booking engines, search engine optimization, and business automation.',
    url: `${siteConfig.siteUrl}/services`,
    type: 'website',
    images: [
      {
        url: '/brand/apexgen-brand-kit.png',
        width: 1200,
        height: 630,
        alt: 'ApexGen Studio Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Agency Services — Web Design, Development & SEO | ApexGen',
    description:
      'ApexGen delivers bespoke website design, high-performance Next.js development, e-commerce stores, custom booking engines, search engine optimization, and business automation.',
    images: ['/brand/apexgen-brand-kit.png'],
  },
};

const iconMap: Record<string, React.ReactNode> = {
  'web-design': <Layers className="w-6 h-6 text-[#FF5E00]" />,
  'web-development': <Code2 className="w-6 h-6 text-[#FF5E00]" />,
  'ecommerce': <Sparkles className="w-6 h-6 text-[#FF5E00]" />,
  'booking-systems': <Calendar className="w-6 h-6 text-[#FF5E00]" />,
  'seo': <Search className="w-6 h-6 text-[#FF5E00]" />,
  'automation': <Cpu className="w-6 h-6 text-[#FF5E00]" />,
};

export default function ServicesIndexPage() {
  const servicesList = Object.values(servicesData);

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'ApexGen Digital Agency Services',
    description:
      'Explore ApexGen core service disciplines: Website Design, Next.js Development, E-commerce, Booking Systems, Technical SEO, and Business Automation.',
    url: `${siteConfig.siteUrl}/services`,
    hasPart: servicesList.map((service, index) => ({
      '@type': 'Service',
      name: service.name,
      url: `${siteConfig.siteUrl}/services/${service.slug}`,
      position: index + 1,
      description: service.metaDescription,
    })),
  };

  return (
    <div className="bg-[#050507] text-[#f4f4f6] min-h-screen selection:bg-[#FF5E00] selection:text-white relative">
      <CustomCursor />
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      <main className="pt-32 pb-24 sm:pb-32 overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-16 sm:mb-24">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF5E00]/10 blur-[140px] rounded-full pointer-events-none -z-10" />

          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-[#FF5E00]/30 bg-[#FF5E00]/10 text-xs font-mono text-[#FF7A1A] tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(255,94,0,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#FF5E00] animate-pulse" />
            <span>STUDIO CAPABILITIES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 max-w-5xl leading-[1.08]">
            Full-Spectrum Digital Craft for Growing Brands.
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl font-light leading-relaxed mb-8">
            We unite world-class art direction, rigorous full-stack software engineering, and search optimization to build digital flagships that outperform competitors.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
            <span className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF5E00]" />
              <span>100% Custom Architecture</span>
            </span>
            <span className="text-neutral-600">•</span>
            <span className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF5E00]" />
              <span>Full Source Ownership</span>
            </span>
            <span className="text-neutral-600">•</span>
            <span className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF5E00]" />
              <span>Transparent Milestone Pricing</span>
            </span>
          </div>
        </section>

        {/* 6 SERVICE CARDS GRID */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesList.map((service, idx) => (
              <div
                key={service.slug}
                className="group relative p-8 rounded-3xl bg-neutral-950/70 border border-white/10 hover:border-[#FF5E00]/50 transition-all duration-300 hover:shadow-[0_8px_35px_rgba(255,94,0,0.1)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#FF5E00]/30 transition-colors">
                      {iconMap[service.slug] || <Layers className="w-6 h-6 text-[#FF5E00]" />}
                    </div>
                    <span className="text-xs font-mono text-neutral-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono tracking-widest text-[#FF5E00] uppercase block mb-2">
                    {service.category}
                  </span>

                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                    {service.name}
                  </h2>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-sans">
                    {service.leadParagraph}
                  </p>

                  <div className="space-y-2 mb-8 border-t border-white/5 pt-4">
                    {service.deliverables.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-neutral-300">
                        <span className="text-[#FF5E00] font-mono">•</span>
                        <span>{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
                      RECOMMENDED TIER
                    </span>
                    <span className="text-sm font-mono font-bold text-[#FF5E00]">
                      {service.recommendedPlan.price}
                    </span>
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-[#FF5E00] text-neutral-300 hover:text-black font-mono text-xs tracking-wider uppercase transition-all duration-200"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING OVERVIEW CALLOUT */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto py-16 sm:py-24">
          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900/60 border border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase block mb-2">
                TRANSPARENT CLIENT ACQUISITION
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Need a clear package breakdown with deliverables?
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Review our three structured tiers: Starter (LKR 49,900+), Business (LKR 89,900+), and Premium (LKR 149,900+), or configure a bespoke custom deployment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/#pricing"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-white text-black font-semibold text-xs font-mono tracking-wider uppercase hover:bg-neutral-200 transition-colors"
              >
                <span>View All Pricing Tiers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full border border-white/20 text-white font-mono text-xs tracking-wider uppercase hover:bg-white/10 transition-colors"
              >
                <span>Start Project Inquiry</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
