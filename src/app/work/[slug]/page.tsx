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

  const title = `${project.title} — ${project.category} | ApexGen Studio`;
  const description = project.description;
  const canonicalUrl = `https://apexgen.online/work/${project.slug}`;
  const ogImageUrl = project.heroImage.startsWith('http')
    ? project.heroImage
    : `https://apexgen.online${project.heroImage}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
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
  const projectNumberFormatted = String(projectIndex + 1).padStart(2, '0');

  return (
    <>
      <CustomCursor />
      <Navbar />

      <main className="min-h-screen bg-[#050507] text-[#f4f4f6] pt-36 selection:bg-white selection:text-black">
        {/* Top Back Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-10">
          <Link
            href="/#work"
            className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-neutral-400 hover:text-white transition-colors uppercase py-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO SELECTED WORK</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-16 border-b border-white/10">
          <div className="space-y-6 max-w-5xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono text-neutral-300 border border-white/15 bg-white/5 uppercase tracking-wider">
                PROJECT {projectNumberFormatted}
              </span>
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                {project.category} &bull; {project.projectType}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-8xl font-light tracking-[-0.04em] text-white">
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
                  className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.25)] cursor-pointer"
                >
                  <Globe className="w-3.5 h-3.5 text-black" />
                  <span>LIVE WEBSITE</span>
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

          {/* Large Website Preview Visual */}
          <div className="mt-14 relative w-full aspect-[16/10] sm:aspect-[21/10] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 bg-[#0a0a0f] shadow-2xl">
            <Image
              src={project.heroImage}
              alt={`${project.title} Full Website Preview`}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050507]/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </section>

        {/* Narrative Section: THE CHALLENGE & THE APPROACH */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-20 sm:py-28 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                STRATEGY & ARCHITECTURE
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                THE OBJECTIVE & DESIGN APPROACH
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-12">
              {project.challenge && (
                <div className="space-y-4">
                  <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                    THE CHALLENGE
                  </h3>
                  <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              )}

              {project.designApproach && (
                <div className="space-y-4">
                  <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                    THE APPROACH
                  </h3>
                  <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                    {project.designApproach}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="space-y-4">
                  <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                    THE SOLUTION
                  </h3>
                  <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* THE EXPERIENCE: Core Features */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-20 sm:py-28 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                INTERACTIONS & TOUCHPOINTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                THE EXPERIENCE
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#09090e] border border-white/10 flex items-start space-x-3.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-200 font-mono leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TECHNOLOGY & RESULT / OUTCOME */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-20 sm:py-28 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                PRODUCTION DETAILS
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                TECHNOLOGY & OUTCOME
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-10">
              {/* Technology Stack */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center space-x-2">
                  <Code2 className="w-3.5 h-3.5 text-neutral-400" />
                  <span>TECHNOLOGY</span>
                </h3>
                <div className="flex flex-wrap items-center gap-2.5">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-md bg-[#0e0e14] border border-white/10 text-xs font-mono text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Result / Outcome */}
              <div className="space-y-4 pt-6 border-t border-white/10">
                <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center space-x-2">
                  <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
                  <span>RESULT / OUTCOME</span>
                </h3>
                <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                  The production website was successfully deployed live on high-speed edge infrastructure with full mobile responsiveness, verified structured business schema, and seamless direct customer communication channels.
                </p>
              </div>

              {/* Direct Launch Button */}
              {project.liveUrl && (
                <div className="pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black font-mono text-xs uppercase tracking-wider transition-all"
                  >
                    <span>LAUNCH LIVE PROJECT</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              )}
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
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight">
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
            <h3 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
              Ready to elevate your brand&apos;s digital experience?
            </h3>
            <p className="text-sm sm:text-base text-neutral-400 font-light">
              We design and engineer bespoke web platforms tailored to move your business forward.
            </p>
            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)]"
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
