import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/siteConfig';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Code2,
  Sparkles,
  Smartphone,
  Monitor,
  ExternalLink,
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return siteConfig.realProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = siteConfig.realProjects.find((p) => p.slug === resolvedParams.slug);

  if (!project) return {};

  const title = `${project.title} — ${project.category} Web Design Case Study | ApexGen`;
  const description = `${project.title} case study: ${project.description} Delivered by ApexGen Digital Studio.`;
  const canonicalUrl = `${siteConfig.siteUrl}/work/${project.slug}`;
  const ogImageUrl = project.heroImage.startsWith('http')
    ? project.heroImage
    : `${siteConfig.siteUrl}${project.heroImage}`;

  return {
    title,
    description,
    keywords: [
      `${project.title} web design`,
      `${project.category} website development`,
      'ApexGen case study',
      'website design Sri Lanka',
      'Colombo digital studio',
      project.domain || project.slug,
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'article',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${project.title} Case Study Preview`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const resolvedParams = await params;
  const projectIndex = siteConfig.realProjects.findIndex((p) => p.slug === resolvedParams.slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = siteConfig.realProjects[projectIndex];
  const nextProjectIndex = (projectIndex + 1) % siteConfig.realProjects.length;
  const nextProject = siteConfig.realProjects[nextProjectIndex];
  const relatedProjects = siteConfig.realProjects.filter((p) => p.slug !== project.slug);
  const projectNumberFormatted = String(projectIndex + 1).padStart(2, '0');

  // Second gallery image for dual desktop/mobile view
  const mobilePreviewImage = project.galleryImages?.[1] || project.heroImage;

  // JSON-LD Schemas: CreativeWork + Breadcrumbs
  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ApexGen Studio',
        item: siteConfig.siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Selected Work',
        item: `${siteConfig.siteUrl}/#work`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `${siteConfig.siteUrl}/work/${project.slug}`,
      },
    ],
  };

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    headline: project.tagline,
    description: project.description,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    creator: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    keywords: project.services.join(', '),
    url: `${siteConfig.siteUrl}/work/${project.slug}`,
    image: `${siteConfig.siteUrl}${project.heroImage}`,
    about: {
      '@type': 'Thing',
      name: project.category,
    },
  };

  return (
    <>
      {/* Structured SEO Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      <CustomCursor />
      <Navbar />

      <main className="min-h-screen bg-[#050507] text-[#f4f4f6] pt-32 sm:pt-36 selection:bg-[#FF5E00] selection:text-white">
        {/* Top Back Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-8 sm:mb-10">
          <Link
            href="/#work"
            className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-neutral-400 hover:text-white transition-colors uppercase py-2 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>BACK TO SELECTED WORK</span>
          </Link>
        </div>

        {/* Case Study Header & Hero Presentation */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-16 border-b border-white/10">
          <div className="space-y-6 max-w-5xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono text-[#FF5E00] border border-[#FF5E00]/30 bg-[#FF5E00]/10 uppercase tracking-wider font-semibold">
                PROJECT {projectNumberFormatted} / PRODUCTION VERIFIED
              </span>
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                {project.category} &bull; {project.projectType}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-8xl font-light tracking-[-0.04em] text-white uppercase">
              {project.title}
            </h1>

            <p className="text-lg sm:text-2xl text-neutral-300 font-light leading-relaxed max-w-3xl">
              {project.description}
            </p>

            {/* Live Website Button & Services Pills */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-full bg-[#FF5E00] text-white hover:bg-[#FF7A1A] font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-[0_0_25px_rgba(255,94,0,0.35)] cursor-pointer"
                >
                  <Globe className="w-3.5 h-3.5 text-white" />
                  <span>LAUNCH LIVE WEBSITE ({project.domain})</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}

              {project.services.map((srv) => (
                <span
                  key={srv}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-neutral-400"
                >
                  {srv}
                </span>
              ))}
            </div>
          </div>

          {/* Desktop & Mobile Multi-Viewport Presentation */}
          <div className="mt-14 space-y-6">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pb-2">
              <div className="flex items-center space-x-2">
                <Monitor className="w-4 h-4 text-[#FF5E00]" />
                <span className="text-white uppercase font-semibold">DESKTOP &amp; MOBILE PRESENTATION</span>
              </div>
              <span className="hidden sm:inline text-neutral-500">PRODUCTION ARCHITECTURE</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Desktop Browser Viewport Frame (8 Cols) */}
              <div className="lg:col-span-8 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 bg-[#0a0a0f] shadow-2xl flex flex-col">
                <div className="flex items-center justify-between px-4 py-3 bg-[#0d0e14] border-b border-white/10">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                  <div className="px-4 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-neutral-400">
                    https://{project.domain}/
                  </div>
                  <div className="text-[10px] font-mono text-emerald-400 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>200 OK</span>
                  </div>
                </div>

                <div className="relative w-full aspect-[16/10] overflow-hidden bg-black">
                  <Image
                    src={project.heroImage}
                    alt={`${project.title} Desktop Viewport`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* Mobile Viewport Phone Frame (4 Cols) */}
              <div className="lg:col-span-4 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 bg-[#0a0a0f] shadow-2xl flex flex-col">
                <div className="flex items-center justify-between px-4 py-3 bg-[#0d0e14] border-b border-white/10">
                  <div className="flex items-center space-x-2 text-xs font-mono text-neutral-400">
                    <Smartphone className="w-3.5 h-3.5 text-[#FF5E00]" />
                    <span className="uppercase text-[11px]">MOBILE EXPERIENCE</span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500">390 &times; 844</span>
                </div>

                <div className="relative w-full aspect-[9/16] max-h-[500px] lg:max-h-none flex-1 overflow-hidden bg-black">
                  <Image
                    src={mobilePreviewImage}
                    alt={`${project.title} Mobile Responsive Touch Interface`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050507]/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative Section: OBJECTIVES, CHALLENGE & APPROACH */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-20 sm:py-28 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-mono text-[#FF5E00] uppercase tracking-widest block">
                STRATEGY &amp; ARCHITECTURE
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight uppercase">
                THE OBJECTIVE &amp; APPROACH
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-12">
              {project.challenge && (
                <div className="space-y-4">
                  <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                    THE COMMERCIAL CHALLENGE
                  </h3>
                  <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              )}

              {project.designApproach && (
                <div className="space-y-4">
                  <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                    DESIGN DIRECTION &amp; USER EXPERIENCE
                  </h3>
                  <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                    {project.designApproach}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="space-y-4">
                  <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                    ENGINEERING SOLUTION &amp; DEPLOYMENT
                  </h3>
                  <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* THE EXPERIENCE: Features Delivered */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-20 sm:py-28 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-mono text-[#FF5E00] uppercase tracking-widest block">
                TOUCHPOINTS &amp; CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight uppercase">
                DELIVERED FEATURES
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#09090e] border border-white/10 flex items-start space-x-3.5 hover:border-[#FF5E00]/30 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#FF5E00] shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-200 font-mono leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TECHNOLOGY & PRODUCTION DETAILS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-20 sm:py-28 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-mono text-[#FF5E00] uppercase tracking-widest block">
                PRODUCTION RIGOR
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight uppercase">
                TECHNOLOGY &amp; SYSTEMS
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-10">
              {/* Technology Stack */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center space-x-2">
                  <Code2 className="w-3.5 h-3.5 text-[#FF5E00]" />
                  <span>CORE TECHNOLOGIES USED</span>
                </h3>
                <div className="flex flex-wrap items-center gap-2.5">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-xl bg-[#0e0e14] border border-white/10 text-xs font-mono text-neutral-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Result / Outcome */}
              <div className="space-y-4 pt-6 border-t border-white/10">
                <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center space-x-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF5E00]" />
                  <span>PRODUCTION OUTCOME</span>
                </h3>
                <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                  The production platform was deployed live onto edge infrastructure with responsive mobile architecture, verified structured business schema, and frictionless customer conversion channels directly integrated into the client&apos;s daily operations.
                </p>
              </div>

              {/* Direct Launch Button */}
              {project.liveUrl && (
                <div className="pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black font-mono text-xs uppercase tracking-wider transition-all"
                  >
                    <span>LAUNCH LIVE PROJECT</span>
                    <ExternalLink className="w-4 h-4 text-[#FF5E00]" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* RELATED PROJECTS SHOWCASE */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-20 sm:py-28 border-b border-white/10">
          <div className="space-y-8">
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-[#FF5E00] uppercase tracking-widest block">
                  EXPLORE ARCHIVE
                </span>
                <h2 className="text-3xl sm:text-4xl font-light text-white uppercase tracking-tight">
                  RELATED PROJECTS
                </h2>
              </div>
              <Link
                href="/#work"
                className="hidden sm:inline-flex items-center space-x-1.5 text-xs font-mono text-neutral-400 hover:text-white uppercase tracking-wider transition-colors"
              >
                <span>ALL CASE STUDIES</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/work/${rel.slug}`}
                  className="group block rounded-2xl overflow-hidden border border-white/10 bg-[#090A0E] p-6 hover:border-[#FF5E00]/40 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black mb-5">
                    <Image
                      src={rel.heroImage}
                      alt={rel.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 500px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-neutral-300">
                      {rel.domain}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-[#FF5E00] tracking-widest uppercase block">
                        {rel.category}
                      </span>
                      <h4 className="text-xl font-light text-white uppercase tracking-tight group-hover:text-[#FF5E00] transition-colors">
                        {rel.title}
                      </h4>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white group-hover:border-[#FF5E00] group-hover:text-[#FF5E00] transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* NEXT PROJECT → Transition Loop */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-24 sm:py-32">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-12 border-b border-white/10 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                NEXT PROJECT &rarr;
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight uppercase">
                {nextProject.title}
              </h2>
              <p className="text-xs font-mono text-neutral-400 uppercase">
                {nextProject.category}
              </p>
            </div>

            <Link
              href={`/work/${nextProject.slug}`}
              className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-all hover:scale-105"
            >
              <span>NEXT PROJECT</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Bottom Project Call to Action */}
          <div className="pt-16 text-center space-y-6 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-4xl font-light text-white tracking-tight uppercase">
              Ready to build a digital flagship for your business?
            </h3>
            <p className="text-sm sm:text-base text-neutral-400 font-light">
              We design and engineer bespoke web platforms tailored to move your business forward.
            </p>
            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-[#FF5E00] text-white hover:bg-[#FF7A1A] font-mono text-xs uppercase tracking-wider font-semibold transition-colors shadow-[0_0_30px_rgba(255,94,0,0.35)]"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
