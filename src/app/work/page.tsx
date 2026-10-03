import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/data/projects';
import { siteConfig } from '@/data/site';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ArrowUpRight, ArrowRight, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Selected Work & Digital Flagships | ApexGen',
  description:
    'Explore bespoke digital experiences designed and engineered by ApexGen. Client case studies including Cargo Pizza, 69 Studio, and DinePro Advisors.',
  keywords: [
    'Subhash Ketagoda portfolio',
    'ApexGen portfolio',
    'Web design Sri Lanka case studies',
    'Cargo Pizza website',
    '69 Studio website',
    'DinePro Advisors website',
    'Colombo digital agency work',
    'Restaurant website design Sri Lanka',
    'Salon website design Sri Lanka',
  ],
  alternates: {
    canonical: `${siteConfig.siteUrl}/work`,
  },
  openGraph: {
    title: 'Selected Work & Digital Flagships | ApexGen',
    description:
      'Digital experiences designed and engineered by ApexGen for ambitious businesses in Sri Lanka and worldwide.',
    url: `${siteConfig.siteUrl}/work`,
    type: 'website',
    images: [
      {
        url: '/images/projects/cargo-pizzeria-real.png',
        width: 1200,
        height: 630,
        alt: 'ApexGen Selected Work Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Selected Work & Digital Flagships | ApexGen',
    description:
      'Digital experiences designed and engineered by ApexGen for ambitious businesses in Sri Lanka and worldwide.',
    images: ['/images/projects/cargo-pizzeria-real.png'],
  },
};

export default function WorkIndexPage() {
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'ApexGen Selected Work Portfolio',
    description: 'Digital experiences designed and engineered by ApexGen, founded by Subhash Ketagoda.',
    url: `${siteConfig.siteUrl}/work`,
    hasPart: projectsData.map((project, index) => ({
      '@type': 'CreativeWork',
      name: project.title,
      url: `${siteConfig.siteUrl}/work/${project.slug}`,
      position: index + 1,
      creator: [
        {
          '@type': 'Organization',
          name: 'ApexGen',
          url: siteConfig.siteUrl,
        },
        {
          '@type': 'Person',
          name: 'Subhash Ketagoda',
          url: `${siteConfig.siteUrl}/about`,
        },
      ],
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
        name: 'Work',
        item: `${siteConfig.siteUrl}/work`,
      },
    ],
  };

  return (
    <div className="bg-[#050505] text-[#F5F5F5] min-h-screen selection:bg-[#FF5E00] selection:text-white relative">
      <CustomCursor />
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="pt-32 sm:pt-40 pb-28 sm:pb-36 overflow-hidden">
        {/* Editorial Header */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-20 sm:mb-28">
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-[#FF5E00]/30 bg-[#FF5E00]/10 text-xs font-mono text-[#FF7A1A] tracking-wider uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E00] animate-pulse" />
            <span>CASE STUDIES &bull; PRODUCTION DEPLOYMENTS</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-[-0.04em] text-white uppercase font-mono mb-8">
            SELECTED WORK
          </h1>

          <p className="text-lg sm:text-2xl text-neutral-400 font-light max-w-3xl leading-relaxed">
            Digital experiences designed and built by ApexGen. Every project is engineered from scratch for commercial impact and brand authority.
          </p>
        </section>

        {/* Cinematic Project Presentations */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-24 sm:space-y-36">
          {projectsData.map((project, index) => (
            <article
              key={project.id}
              data-cursor="view"
              className="group relative border-t border-white/10 pt-10 sm:pt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start"
            >
              {/* Left Column: Project Info */}
              <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-36">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase">
                    PROJECT 0{index + 1}
                  </span>
                  <span className="text-xs font-mono text-neutral-500 uppercase">
                    {project.year}
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white uppercase font-mono group-hover:text-[#FF7A1A] transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-xs font-mono tracking-wider text-neutral-400 uppercase">
                    {project.category}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.03] border border-white/10 text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#FF5E00] hover:text-black transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-5 py-3.5 rounded-full border border-white/20 text-neutral-300 font-mono text-xs uppercase tracking-wider hover:text-white hover:border-white transition-colors"
                  >
                    <span>VISIT LIVE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5E00]" />
                  </a>
                </div>
              </div>

              {/* Right Column: Immersive Visual Hero in Browser Frame */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl sm:rounded-3xl bg-[#09090b] border border-white/15 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] group-hover:border-[#FF5E00]/40 transition-all duration-500">
                  {/* Browser Bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-neutral-900/90 border-b border-white/10">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                    </div>

                    <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono text-neutral-300 max-w-[240px] truncate">
                      <Lock className="w-3 h-3 text-[#27C93F] shrink-0" />
                      <span className="text-white truncate">https://{project.domain}</span>
                    </div>

                    <div className="flex items-center space-x-1.5 text-[10px] font-mono text-[#27C93F] uppercase">
                      <span className="w-2 h-2 rounded-full bg-[#27C93F] animate-pulse" />
                      <span className="hidden sm:inline">LIVE</span>
                    </div>
                  </div>

                  {/* Screenshot Viewport */}
                  <Link
                    href={`/work/${project.slug}`}
                    className="block relative aspect-[16/10] sm:aspect-[16/11] overflow-hidden bg-black"
                  >
                    <Image
                      src={project.heroImage}
                      alt={`${project.title} — ${project.category} case study designed by ApexGen and Subhash Ketagoda`}
                      fill
                      priority={index === 0}
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />

                    {/* Corner Domain Badge */}
                    <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white flex items-center space-x-1.5">
                      <span>EXPLORE DOSSIER</span>
                      <ArrowRight className="w-3 h-3 text-[#FF5E00]" />
                    </div>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Bottom CTA */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mt-28 sm:mt-36">
          <div className="p-10 sm:p-16 rounded-3xl bg-neutral-950/80 border border-white/10 text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF5E00]/5 blur-[120px] rounded-full pointer-events-none" />
            <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase block">
              READY FOR YOUR DIGITAL FLAGSHIP?
            </span>
            <h3 className="text-3xl sm:text-5xl font-light text-white uppercase font-mono max-w-2xl mx-auto">
              We design websites people remember.
            </h3>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/start-a-project"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FF5E00] text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#FF7A1A] transition-all shadow-[0_0_25px_rgba(255,94,0,0.3)]"
              >
                START A PROJECT
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto px-7 py-4 rounded-full border border-white/20 text-white font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
              >
                EXPLORE SERVICES
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
