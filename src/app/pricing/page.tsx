import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { pricingPlans, customProjectDetails } from '@/data/pricing';
import { siteConfig } from '@/data/site';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Transparent Website Pricing & Investment Tiers | ApexGen',
  description:
    'Transparent, deliverable-backed website design and development pricing in Sri Lanka. Starter LKR 49,900+, Business LKR 89,900+, Premium LKR 149,900+. Full source code ownership.',
  keywords: [
    'Website development pricing Sri Lanka',
    'Web design cost Colombo',
    'Affordable web design packages',
    'Custom website pricing',
    'E-commerce website cost Sri Lanka',
    'ApexGen pricing',
  ],
  alternates: {
    canonical: `${siteConfig.siteUrl}/pricing`,
  },
  openGraph: {
    title: 'Transparent Website Pricing & Packages | ApexGen',
    description:
      'Clear, deliverable-backed pricing packages for ambitious businesses. Starter LKR 49,900+, Business LKR 89,900+, Premium LKR 149,900+.',
    url: `${siteConfig.siteUrl}/pricing`,
    type: 'website',
    images: [
      {
        url: '/brand/apexgen-brand-kit.png',
        width: 1200,
        height: 630,
        alt: 'ApexGen Transparent Website Pricing Packages',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transparent Website Pricing & Packages | ApexGen',
    description:
      'Clear, deliverable-backed pricing packages for ambitious businesses. Starter LKR 49,900+, Business LKR 89,900+, Premium LKR 149,900+.',
    images: ['/brand/apexgen-brand-kit.png'],
  },
};

export default function PricingPage() {
  const pricingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'ApexGen Web Design & Development Packages',
    itemListElement: pricingPlans.map((plan, index) => ({
      '@type': 'Offer',
      position: index + 1,
      name: plan.name,
      description: plan.description,
      price: plan.price.replace(/[^0-9]/g, ''),
      priceCurrency: 'LKR',
      seller: {
        '@type': 'ProfessionalService',
        name: siteConfig.name,
        url: siteConfig.siteUrl,
      },
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
        name: 'Pricing',
        item: `${siteConfig.siteUrl}/pricing`,
      },
    ],
  };

  return (
    <div className="bg-[#050505] text-[#F5F5F5] min-h-screen selection:bg-[#FF5E00] selection:text-white relative">
      <CustomCursor />
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="pt-32 sm:pt-44 pb-28 sm:pb-36 overflow-hidden">
        {/* Editorial Header */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-20 sm:mb-28 text-center">
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-[#FF5E00]/30 bg-[#FF5E00]/10 text-xs font-mono text-[#FF7A1A] tracking-wider uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E00] animate-pulse" />
            <span>TRANSPARENT INVESTMENT</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-light tracking-[-0.04em] text-white uppercase font-mono mb-6 max-w-4xl mx-auto leading-[1.05]">
            VALUE-FOCUSED PRICING.
          </h1>

          <p className="text-base sm:text-xl text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
            Predictable milestones backed by clear deliverables. Every package includes 100% full source ownership with zero monthly platform lock-in.
          </p>
        </section>

        {/* 3 PRICING CARDS */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-20 sm:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-neutral-900/90 border-2 border-[#FF5E00]/80 shadow-[0_10px_50px_rgba(255,94,0,0.15)]'
                    : 'bg-neutral-950/70 border border-white/10 hover:border-white/25'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 px-3.5 py-1 rounded-full bg-[#FF5E00] text-black text-[11px] font-mono font-bold uppercase tracking-wider">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-white/10">
                    <div>
                      <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                        PACKAGE
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold font-mono text-white mt-1">
                        {plan.name}
                      </h2>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
                        STARTING AT
                      </span>
                      <span className="text-2xl sm:text-3xl font-mono font-bold text-[#FF5E00]">
                        {plan.price}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-300 font-light my-6 leading-relaxed">
                    {plan.valueProposition}
                  </p>

                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase block">
                      DELIVERABLES:
                    </span>
                    {plan.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-neutral-300 font-light">
                        <Check className="w-4 h-4 text-[#FF5E00] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                    <span>ESTIMATED SPRINT:</span>
                    <span className="text-white">{plan.timeline}</span>
                  </div>

                  <Link
                    href={plan.ctaHref}
                    className={`w-full py-4 rounded-full font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                      plan.isPopular
                        ? 'bg-[#FF5E00] text-black hover:bg-[#FF7A1A] shadow-[0_0_25px_rgba(255,94,0,0.3)]'
                        : 'bg-white text-black hover:bg-neutral-200'
                    }`}
                  >
                    <span>{plan.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CUSTOM PROJECT SECTION */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-20 sm:mb-28">
          <div className="p-8 sm:p-14 rounded-3xl bg-neutral-950/80 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase block">
                {customProjectDetails.title}
              </span>
              <h3 className="text-2xl sm:text-4xl font-light text-white uppercase font-mono">
                {customProjectDetails.tagline}
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-2xl">
                {customProjectDetails.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {customProjectDetails.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-mono text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-[#FF5E00]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <Link
                href="/contact"
                className="w-full py-4 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold text-center hover:bg-neutral-200 transition-colors"
              >
                {customProjectDetails.ctaLabel} &rarr;
              </Link>

              <a
                href={`https://wa.me/94770289139?text=${encodeURIComponent(
                  'Hello ApexGen, I would like to discuss a custom digital project roadmap.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full border border-white/20 bg-white/5 text-neutral-200 font-mono text-xs uppercase tracking-wider font-semibold text-center hover:bg-white/10 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 text-[#FF5E00]" />
                <span>WhatsApp Senior Partner</span>
              </a>
            </div>
          </div>
        </section>

        {/* PRICING FAQS */}
        <section className="px-4 sm:px-6 md:px-12 max-w-4xl mx-auto pt-12 border-t border-white/10">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h3 className="text-2xl sm:text-4xl font-light text-white uppercase font-mono">
              Investment &amp; Collaboration Details
            </h3>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Are there any hidden monthly or recurring builder fees?',
                a: 'No. You own 100% of your website, repository, and design files. Because we build on modern Next.js edge architecture, hosting costs on providers like Vercel or Cloudflare are typically near zero.',
              },
              {
                q: 'How are project payments structured?',
                a: 'All projects are divided into predictable milestone stages: 50% mobilization deposit at kickoff, and 50% upon final pre-launch staging approval and domain cutover.',
              },
              {
                q: 'Can we upgrade from Starter to Business later?',
                a: 'Yes. Because our code is built on clean, modular component architecture, expanding from a 3-page Starter to an advanced Business flagship with booking or e-commerce is straightforward.',
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-950/60 border border-white/5 space-y-2"
              >
                <h4 className="text-base sm:text-lg font-mono text-white">{faq.q}</h4>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
