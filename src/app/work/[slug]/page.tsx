import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { projectsData, getProjectBySlug, ProjectItem } from '@/data/projects';
import { siteConfig } from '@/data/site';
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
  Smartphone,
  Monitor,
  Lock,
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const staticSlugs: { slug: string }[] = [];
  projectsData.forEach((project) => {
    staticSlugs.push({ slug: project.slug });
    if (project.aliases) {
      project.aliases.forEach((alias) => staticSlugs.push({ slug: alias }));
    }
  });
  return staticSlugs;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) return {};

  const canonicalUrl = `${siteConfig.siteUrl}/work/${project.slug}`;
  const ogImageUrl = project.heroImage.startsWith('http')
    ? project.heroImage
    : `${siteConfig.siteUrl}${project.heroImage}`;

  return {
    title: project.seoTitle,
    description: project.seoDescription,
    keywords: [
      `${project.title} web design`,
      `${project.category} website development`,
      'ApexGen case study',
      'website design Sri Lanka',
      'Colombo digital studio',
      project.domain,
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: project.seoTitle,
      description: project.seoDescription,
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
      title: project.seoTitle,
      description: project.seoDescription,
      images: [ogImageUrl],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project: ProjectItem | undefined = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const nextProject = getProjectBySlug(project.nextProjectSlug) || projectsData[0];

  // Schema.org CreativeWork
  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${siteConfig.siteUrl}/work/${project.slug}#project`,
    name: project.title,
    headline: project.tagline,
    description: project.description,
    image: `${siteConfig.siteUrl}${project.heroImage}`,
    url: `${siteConfig.siteUrl}/work/${project.slug}`,
    creator: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    datePublished: `${project.year}-01-01`,
    keywords: project.technologies.join(', '),
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
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `${siteConfig.siteUrl}/work/${project.slug}`,
      },
    ],
  };

  return (
    <div className="bg-[#050505] text-[#F5F5F5] min-h-screen selection:bg-[#FF5E00] selection:text-white relative">
      <CustomCursor />
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="pt-28 sm:pt-36 pb-28 sm:pb-36 overflow-hidden">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-8">
          <Link
            href="/work"
            className="inline-flex items-center space-x-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO SELECTED WORK</span>
          </Link>
        </div>

        {/* 1. PROJECT HERO */}
        <header className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-16 sm:mb-24">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3.5 py-1.5 rounded-full border border-[#FF5E00]/30 bg-[#FF5E00]/10 text-xs font-mono text-[#FF7A1A] uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs font-mono text-neutral-500 uppercase">
              YEAR: {project.year}
            </span>
            <span className="text-neutral-600">&bull;</span>
            <span className="text-xs font-mono text-neutral-400 uppercase">
              CLIENT: {project.client}
            </span>
          </div>

          <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-[-0.04em] text-white uppercase font-mono mb-8 max-w-6xl leading-[0.95]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-2xl text-neutral-300 font-light max-w-4xl leading-relaxed mb-10">
            {project.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-[#FF5E00] text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#FF7A1A] transition-all shadow-[0_0_25px_rgba(255,94,0,0.3)]"
            >
              <span>VISIT LIVE WEBSITE</span>
              <ArrowUpRight className="w-4 h-4 text-black" />
            </a>

            <div className="flex items-center space-x-2 text-xs font-mono text-neutral-400 px-4 py-3 rounded-full bg-white/5 border border-white/10">
              <Globe className="w-3.5 h-3.5 text-[#FF5E00]" />
              <span>{project.domain}</span>
            </div>
          </div>
        </header>

        {/* FULL-WIDTH VISUAL HERO IMAGE IN LUXURY BROWSER CHASSIS */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-20 sm:mb-28">
          <div className="rounded-2xl sm:rounded-3xl bg-[#09090b] border border-white/20 shadow-[0_25px_80px_rgba(0,0,0,0.85)] overflow-hidden">
            {/* Browser Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-neutral-900/90 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
              </div>

              <div className="flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono text-neutral-300">
                <Lock className="w-3 h-3 text-[#27C93F]" />
                <span className="text-white font-semibold">https://{project.domain}</span>
              </div>

              <div className="flex items-center space-x-1.5 text-[10px] font-mono text-[#27C93F] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#27C93F] animate-pulse" />
                <span>LIVE PRODUCTION</span>
              </div>
            </div>

            {/* Real Screenshot Viewport */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
              <Image
                src={project.heroImage}
                alt={`${project.title} Hero Showcase`}
                fill
                priority
                className="object-cover object-top"
                sizes="100vw"
              />
            </div>
          </div>
        </section>

        {/* 2. OVERVIEW & CHALLENGE */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-20 sm:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-t border-white/10 pt-12">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase block mb-2">
                01 / CONTEXT
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-white uppercase font-mono">
                Project Overview &amp; The Commercial Challenge
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-4">
                <h3 className="text-sm font-mono text-neutral-400 uppercase tracking-wider">
                  The Background
                </h3>
                <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/5">
                <h3 className="text-sm font-mono text-[#FF7A1A] uppercase tracking-wider">
                  The Friction &amp; Problem Solved
                </h3>
                <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CREATIVE DIRECTION & DESIGN APPROACH */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-20 sm:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-t border-white/10 pt-12">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase block mb-2">
                02 / CRAFT
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-white uppercase font-mono">
                Creative Direction &amp; Spatial UI/UX
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-4">
                <h3 className="text-sm font-mono text-neutral-400 uppercase tracking-wider">
                  Art Direction Philosophy
                </h3>
                <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                  {project.creativeDirection}
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/5">
                <h3 className="text-sm font-mono text-neutral-400 uppercase tracking-wider">
                  Interface Execution
                </h3>
                <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                  {project.designApproach}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. REAL PROJECT SCREENSHOTS — DUAL DESKTOP & MOBILE PRESENTATION */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-20 sm:mb-28">
          <div className="border-t border-white/10 pt-12 mb-10">
            <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase block mb-2">
              03 / PRODUCTION VIEWPORTS
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-white uppercase font-mono">
              Desktop Architecture &amp; Mobile Ergonomics
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Desktop Chassis (8-col) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-neutral-400">
                <Monitor className="w-4 h-4 text-[#FF5E00]" />
                <span>DESKTOP EXPERIENCE &bull; FULL-BLEED WORKSPACE</span>
              </div>

              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-950 border border-white/15 shadow-2xl">
                {/* Browser top-bar chrome mockup */}
                <div className="h-8 bg-neutral-900 border-b border-white/10 flex items-center px-4 space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <div className="ml-4 px-3 py-0.5 rounded-full bg-black/50 text-[10px] font-mono text-neutral-400">
                    https://{project.domain}
                  </div>
                </div>
                <div className="relative h-[calc(100%-2rem)] w-full">
                  <Image
                    src={project.gallery[1] || project.thumbnail}
                    alt={`${project.title} Desktop Experience`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Chassis (4-col) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-neutral-400">
                <Smartphone className="w-4 h-4 text-[#FF5E00]" />
                <span>MOBILE TOUCH VIEWPORT</span>
              </div>

              <div className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-neutral-950 border-2 border-white/20 shadow-2xl p-2.5">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black">
                  <Image
                    src={project.gallery[2] || project.thumbnail}
                    alt={`${project.title} Mobile Viewport`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 70vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Highlights List */}
          <div className="mt-8 p-6 rounded-2xl bg-neutral-950/60 border border-white/10">
            <h4 className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase mb-4">
              MOBILE INTERACTION DETAILS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.mobileHighlights.map((hl, i) => (
                <div key={i} className="flex items-start space-x-2.5 text-xs font-mono text-neutral-300">
                  <span className="text-[#FF5E00] font-bold">&bull;</span>
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. DEVELOPMENT & DELIVERED FEATURES */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-20 sm:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-t border-white/10 pt-12">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase block mb-2">
                04 / ENGINEERING
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-white uppercase font-mono">
                Development &amp; Delivered Capabilities
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                {project.solution}
              </p>

              <div className="space-y-3 pt-4">
                {project.deliveredFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-3 p-4 rounded-xl bg-neutral-950/60 border border-white/5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#FF5E00] shrink-0 mt-0.5" />
                    <span className="text-sm font-mono text-neutral-300">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. TECHNOLOGIES USED */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-20 sm:mb-28">
          <div className="p-8 rounded-2xl bg-neutral-950/80 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center space-x-3">
              <Code2 className="w-5 h-5 text-[#FF5E00]" />
              <span className="text-xs font-mono uppercase tracking-widest text-white">
                TECHNOLOGY STACK
              </span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 7. LIVE PROJECT LINK & NEXT PROJECT TRANSITION */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto pt-12 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-16">
            <div>
              <span className="text-xs font-mono text-neutral-500 uppercase block mb-1">
                LIVE PRODUCTION SITE
              </span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl sm:text-2xl font-mono text-white hover:text-[#FF5E00] transition-colors inline-flex items-center space-x-2"
              >
                <span>{project.liveUrl}</span>
                <ArrowUpRight className="w-5 h-5 text-[#FF5E00]" />
              </a>
            </div>

            <Link
              href="/start-a-project"
              className="px-8 py-4 rounded-full bg-[#FF5E00] text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#FF7A1A] transition-all shadow-[0_0_25px_rgba(255,94,0,0.3)] self-start sm:self-auto"
            >
              COMMISSION SIMILAR PROJECT &rarr;
            </Link>
          </div>

          {/* Next Project Banner */}
          <Link
            href={`/work/${nextProject.slug}`}
            className="group block p-8 sm:p-14 rounded-3xl bg-neutral-950/80 border border-white/10 hover:border-[#FF5E00]/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase block mb-2">
                  NEXT CASE STUDY
                </span>
                <h3 className="text-3xl sm:text-5xl font-light text-white uppercase font-mono group-hover:text-[#FF7A1A] transition-colors">
                  {nextProject.title} &rarr;
                </h3>
                <p className="text-xs sm:text-sm font-mono text-neutral-400 mt-2">
                  {nextProject.category}
                </p>
              </div>

              <div className="hidden sm:flex w-14 h-14 rounded-full border border-white/20 items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
