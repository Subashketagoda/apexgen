import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { serviceCategories, servicesData } from '@/data/services';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Agency Services & Capabilities | ApexGen',
  description:
    'Explore ApexGen core service disciplines organized across Design, Build, and Grow. Bespoke website design, Next.js engineering, e-commerce, booking systems, SEO, and business automation.',
  alternates: {
    canonical: `${siteConfig.siteUrl}/services`,
  },
  openGraph: {
    title: 'Digital Agency Services & Capabilities | ApexGen',
    description:
      'Design. Build. Grow. Explore ApexGen digital studio capabilities in Colombo, Sri Lanka.',
    url: `${siteConfig.siteUrl}/services`,
    type: 'website',
  },
};

export default function ServicesIndexPage() {
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'ApexGen Studio Services',
    description: 'Disciplines across Design, Build, and Grow.',
    url: `${siteConfig.siteUrl}/services`,
  };

  return (
    <div className="bg-[#050505] text-[#F5F5F5] min-h-screen selection:bg-[#FF5E00] selection:text-white relative">
      <CustomCursor />
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      <main className="pt-32 sm:pt-44 pb-28 sm:pb-36 overflow-hidden">
        {/* Editorial Header */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-20 sm:mb-32">
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-[#FF5E00]/30 bg-[#FF5E00]/10 text-xs font-mono text-[#FF7A1A] tracking-wider uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E00] animate-pulse" />
            <span>FULL-SPECTRUM DISCIPLINES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-light tracking-[-0.04em] text-white uppercase font-mono mb-8 max-w-5xl leading-[0.95]">
            DESIGN. BUILD. GROW.
          </h1>

          <p className="text-lg sm:text-2xl text-neutral-300 font-light max-w-3xl leading-relaxed">
            We unite world-class art direction, disciplined software engineering, and search optimization to create digital flagships that outperform competitors.
          </p>
        </section>

        {/* 3 MASTER CATEGORIES: DESIGN • BUILD • GROW */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-24 sm:space-y-36">
          {serviceCategories.map((category, idx) => (
            <div
              key={category.id}
              className="border-t border-white/10 pt-12 sm:pt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
            >
              {/* Category Overview (4-col) */}
              <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-36">
                <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase">
                  CATEGORY 0{idx + 1}
                </span>
                <h2 className="text-3xl sm:text-5xl font-light text-white uppercase font-mono">
                  {category.title}
                </h2>
                <p className="text-xs font-mono tracking-widest text-[#FF7A1A] uppercase">
                  {category.tagline}
                </p>
                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                  {category.description}
                </p>

                <div className="pt-2">
                  <div className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase mb-2">
                    DISCIPLINES COVERED:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.subDisciplines.map((sub) => (
                      <span
                        key={sub}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-neutral-300"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Individual Service Dossier Cards (7-col) */}
              <div className="lg:col-span-7 space-y-6">
                {category.services.map((slug) => {
                  const service = servicesData[slug];
                  if (!service) return null;

                  return (
                    <article
                      key={slug}
                      className="p-8 rounded-3xl bg-neutral-950/80 border border-white/10 hover:border-[#FF5E00]/50 transition-all duration-300 flex flex-col justify-between space-y-6 group"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono text-[#FF5E00] uppercase">
                            {service.category} &bull; DOSSIER
                          </span>
                          <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-[#FF5E00] transition-colors" />
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-light font-mono text-white uppercase group-hover:text-[#FF7A1A] transition-colors">
                          {service.name}
                        </h3>

                        <p className="text-sm text-neutral-300 font-light leading-relaxed">
                          {service.leadParagraph}
                        </p>

                        <div className="space-y-2 pt-2 border-t border-white/5">
                          {service.capabilities.slice(0, 3).map((cap, i) => (
                            <div key={i} className="flex items-start space-x-2 text-xs font-mono text-neutral-400">
                              <span className="text-[#FF5E00] font-bold">&bull;</span>
                              <span>{cap.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center space-x-2 text-xs font-mono text-white uppercase tracking-wider hover:text-[#FF5E00] transition-colors"
                        >
                          <span>EXPLORE FULL DOSSIER</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>

                        <Link
                          href={`/start-a-project?service=${encodeURIComponent(service.name)}`}
                          className="px-5 py-2 rounded-full bg-white/5 hover:bg-[#FF5E00] text-neutral-300 hover:text-black font-mono text-xs uppercase tracking-wider transition-all"
                        >
                          INQUIRE &rarr;
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </section>

        {/* Bottom CTA */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mt-28 sm:mt-36">
          <div className="p-10 sm:p-16 rounded-3xl bg-neutral-950 border border-[#FF5E00]/30 text-center space-y-6">
            <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase block">
              COLLABORATE WITH APEXGEN
            </span>
            <h3 className="text-3xl sm:text-5xl font-light text-white uppercase font-mono max-w-2xl mx-auto">
              Ready to elevate your digital presence?
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
