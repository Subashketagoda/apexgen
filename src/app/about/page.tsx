import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';

export const metadata: Metadata = {
  title: 'About ApexGen & Subhash Ketagoda | Design Philosophy & Creative Craft',
  description:
    'Founded by Subhash Ketagoda, ApexGen is an independent digital studio in Sri Lanka dedicated to bespoke website design, Next.js engineering, and digital brand experiences for ambitious businesses.',
  keywords: [
    'Subhash Ketagoda',
    'Subas Ketagoda',
    'Subhash Ketagoda Sri Lanka',
    'ApexGen founder',
    'ApexGen owner',
    'web design Sri Lanka',
    'creative technologist Colombo',
  ],
  alternates: {
    canonical: `${siteConfig.siteUrl}/about`,
  },
  openGraph: {
    title: 'About ApexGen & Subhash Ketagoda | Design Philosophy & Creative Craft',
    description:
      'Founded by Subhash Ketagoda. Design first. Experience second. Technology third. Explore the creative philosophy and technical standards behind ApexGen Digital Studio.',
    url: `${siteConfig.siteUrl}/about`,
    type: 'website',
  },
};

export default function AboutPage() {
  const aboutJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About ApexGen Digital Studio',
    description: 'Design philosophy, technical standards, and creative process of ApexGen, founded by Subhash Ketagoda.',
    url: `${siteConfig.siteUrl}/about`,
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: siteConfig.siteUrl,
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.whatsappNumber,
      founder: {
        '@type': 'Person',
        name: 'Subhash Ketagoda',
        jobTitle: 'Founder & Lead Creative Technologist',
        url: `${siteConfig.siteUrl}/about`,
        sameAs: [
          'https://github.com/Subashketagoda',
          siteConfig.socials.linkedin,
        ],
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Colombo',
        addressCountry: 'LK',
      },
    },
  };

  return (
    <div className="bg-[#050505] text-[#F5F5F5] min-h-screen selection:bg-[#FF5E00] selection:text-white relative">
      <CustomCursor />
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      <main className="pt-32 sm:pt-44 pb-28 sm:pb-36 overflow-hidden">
        {/* Editorial Hero */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-20 sm:mb-32">
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-[#FF5E00]/30 bg-[#FF5E00]/10 text-xs font-mono text-[#FF7A1A] tracking-wider uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>STUDIO MANIFESTO</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[-0.04em] text-white uppercase font-mono mb-8 max-w-5xl leading-[1.05]">
            WE DESIGN WEBSITES PEOPLE REMEMBER.
          </h1>

          <div className="text-xl sm:text-3xl font-light font-mono text-zinc-300 uppercase tracking-wider mb-8">
            DESIGN FIRST. EXPERIENCE SECOND. TECHNOLOGY THIRD.
          </div>

          <p className="text-lg sm:text-xl text-zinc-400 font-light max-w-3xl leading-relaxed">
            ApexGen is an independent digital studio founded and directed by Subhash Ketagoda. Built on a clear conviction: most business websites fail not because of missing code, but because of mediocre design and commoditized templates that fail to move human beings.
          </p>
        </section>

        {/* 1. DESIGN PHILOSOPHY */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-20 sm:mb-28 border-t border-white/[0.08] pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase block">
                01 / DESIGN PHILOSOPHY
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-white uppercase font-mono">
                Visual Distinction As a Commercial Asset
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-zinc-300 font-light text-base sm:text-lg leading-relaxed">
              <p>
                In a global digital landscape crowded with generic WordPress themes and template builders, your visual identity is the primary determinant of whether a potential client perceives you as a market leader or a commodity.
              </p>
              <p>
                We approach every project with the rigor of an editorial publication and the spatial restraint of architectural design. We use expansive whitespace, disciplined typography, and cinematic imagery so your brand commands immediate respect.
              </p>
            </div>
          </div>
        </section>

        {/* 2. DEVELOPMENT PHILOSOPHY */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-20 sm:mb-28 border-t border-white/[0.08] pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase block">
                02 / DEVELOPMENT PHILOSOPHY
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-white uppercase font-mono">
                Zero Sluggish Builders. Pure Code.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-zinc-300 font-light text-base sm:text-lg leading-relaxed">
              <p>
                We do not build on bloated site builders that inject megabytes of unnecessary JavaScript. We write clean, production-grade Next.js, React, and TypeScript deployed to global edge networks.
              </p>
              <p>
                This ensures our websites load in under 500 milliseconds, score 95+ on Google Lighthouse audits, and remain impervious to the security vulnerabilities that plague plugin-heavy platforms.
              </p>
            </div>
          </div>
        </section>

        {/* 3. HOW APEXGEN WORKS */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-20 sm:mb-28 border-t border-white/[0.08] pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase block">
                03 / HOW WE WORK
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-white uppercase font-mono">
                Direct Partnership With Studio Leadership
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-zinc-300 font-light text-base sm:text-lg leading-relaxed">
              <p>
                When you commission ApexGen, your brief is not passed down to junior outsourced contractors or account managers. You work directly with the creative directors and senior engineers responsible for crafting your website.
              </p>
              <p>
                We intentionally partner with a selective roster of businesses each quarter. This disciplined capacity allows us to obsess over typography kerning, sub-pixel animations, and commercial conversion paths.
              </p>
            </div>
          </div>
        </section>

        {/* 4. QUALITY STANDARDS & PRINCIPLES */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-20 sm:mb-28 border-t border-white/10 pt-16">
          <div className="mb-12">
            <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase block mb-2">
              04 / STANDARDS
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white uppercase font-mono">
              The Five ApexGen Quality Benchmarks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: '100% Bespoke Architecture',
                description: 'Every layout is designed from a blank Figma canvas tailored exclusively to your commercial positioning.',
              },
              {
                title: 'Sub-Second Edge Speeds',
                description: 'Engineered for sub-500ms global edge delivery and 90+ Google Core Web Vitals performance.',
              },
              {
                title: 'Full Source Ownership',
                description: 'You own 100% of your source code and design files with zero vendor lock-in or recurring builder fees.',
              },
              {
                title: 'Mobile Touch Ergonomics',
                description: 'Dedicated smartphone compositions engineered for one-thumb reach and frictionless mobile buying.',
              },
              {
                title: 'Built-In Technical SEO',
                description: 'Semantic HTML5, Schema.org JSON-LD microdata, and OpenGraph sharing tags built into the core.',
              },
              {
                title: 'Frictionless Conversion',
                description: 'Direct WhatsApp order routing, reservation funnels, and intake briefs that capture paying customers daily.',
              },
            ].map((benchmark, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-neutral-950/70 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#FF5E00]/10 border border-[#FF5E00]/30 flex items-center justify-center text-xs font-mono text-[#FF5E00] mb-5">
                    0{i + 1}
                  </div>
                  <h3 className="text-lg font-bold font-mono text-white uppercase mb-3">
                    {benchmark.title}
                  </h3>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    {benchmark.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. CALL TO ACTION */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto pt-12">
          <div className="p-10 sm:p-16 rounded-3xl bg-neutral-950 border border-[#FF5E00]/30 text-center space-y-6 relative overflow-hidden">
            <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase block">
              COLLABORATION
            </span>
            <h3 className="text-3xl sm:text-5xl font-light text-white uppercase font-mono max-w-2xl mx-auto">
              Ready to create an extraordinary digital presence?
            </h3>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/start-a-project"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FF5E00] text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#FF7A1A] transition-all shadow-[0_0_25px_rgba(255,94,0,0.3)]"
              >
                START A PROJECT &rarr;
              </Link>
              <Link
                href="/work"
                className="w-full sm:w-auto px-7 py-4 rounded-full border border-white/20 text-white font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
              >
                VIEW SELECTED WORK
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
