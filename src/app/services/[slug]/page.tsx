import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/site';
import { servicesData, ServiceDetail } from '@/data/services';
import { getProjectBySlug } from '@/data/projects';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ServiceFaqAccordion } from '@/components/ui/ServiceFaqAccordion';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MessageSquare,
  ChevronRight,
  AlertCircle,
  Lightbulb,
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug];

  if (!service) return {};

  const canonicalUrl = `${siteConfig.siteUrl}/services/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [
      ...service.targetKeywords,
      'Subhash Ketagoda',
      'ApexGen Sri Lanka',
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: canonicalUrl,
      type: 'website',
      siteName: 'ApexGen',
      images: [
        {
          url: '/brand/apexgen-brand-kit.png',
          width: 1200,
          height: 630,
          alt: `${service.name} — ApexGen Digital Studio`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: ['/brand/apexgen-brand-kit.png'],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const service: ServiceDetail | undefined = servicesData[resolvedParams.slug];

  if (!service) {
    notFound();
  }

  // Find related real flagship project
  const relatedProject = getProjectBySlug(service.relevantWorkSlug);


  // JSON-LD Structured Data for Service, BreadcrumbList, and FAQPage
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.siteUrl}/services/${service.slug}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.metaDescription,
    provider: {
      '@type': 'ProfessionalService',
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: siteConfig.siteUrl,
      telephone: siteConfig.contact.whatsappNumber,
      email: siteConfig.contact.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Colombo',
        addressCountry: 'LK',
      },
      founder: {
        '@type': 'Person',
        name: 'Subhash Ketagoda',
        url: `${siteConfig.siteUrl}/about`,
      },
    },
    areaServed: [
      { '@type': 'Country', name: 'Sri Lanka' },
      { '@type': 'AdministrativeArea', name: 'Global' },
    ],
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
        name: 'Services',
        item: `${siteConfig.siteUrl}/services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.name,
        item: `${siteConfig.siteUrl}/services/${service.slug}`,
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="bg-[#050505] text-[#F5F5F5] min-h-screen selection:bg-[#FF5E00] selection:text-white relative">
      <CustomCursor />
      <Navbar />

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="pt-32 sm:pt-40 pb-28 sm:pb-36 overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-16 sm:mb-24">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center space-x-2 text-xs font-mono text-neutral-400 mb-8 overflow-x-auto whitespace-nowrap py-1"
          >
            <Link href="/" className="hover:text-white transition-colors">
              HOME
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
            <Link href="/services" className="hover:text-white transition-colors">
              SERVICES
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
            <span className="text-[#FF5E00] font-medium">{service.name.toUpperCase()}</span>
          </nav>

          {/* Header Badge */}
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-[#FF5E00]/30 bg-[#FF5E00]/10 text-xs font-mono text-[#FF7A1A] tracking-wider uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E00] animate-pulse" />
            <span>DISCIPLINE &bull; {service.category}</span>
          </div>

          {/* Service Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[-0.04em] text-white uppercase font-mono mb-6 max-w-5xl leading-[1.05]">
            {service.headline}
          </h1>

          <p className="text-base sm:text-xl font-mono text-[#FF7A1A] uppercase tracking-wider mb-6">
            {service.tagline}
          </p>

          <p className="text-base sm:text-lg text-neutral-300 font-light max-w-3xl leading-relaxed mb-10">
            {service.leadParagraph}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 pb-14 border-b border-white/10">
            <Link
              href={`/start-a-project?service=${encodeURIComponent(service.name)}`}
              className="inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full bg-[#FF5E00] text-black font-mono font-semibold text-xs uppercase tracking-wider transition-all duration-300 hover:bg-[#FF7A1A] shadow-[0_0_25px_rgba(255,94,0,0.3)] active:scale-95"
            >
              <span>START A PROJECT INQUIRY</span>
              <ArrowUpRight className="w-4 h-4 text-black" />
            </Link>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                `Hello ApexGen Studio, I would like to inquire about your ${service.name} services.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2.5 px-7 py-4 rounded-full border border-white/20 bg-white/5 text-xs font-mono tracking-wider uppercase text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200"
            >
              <MessageSquare className="w-4 h-4 text-zinc-300" />
              <span>Direct WhatsApp Consultation</span>
            </a>
          </div>
        </section>

        {/* PROBLEM & SOLUTION SECTION */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-20 sm:mb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Problem */}
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-950 border border-red-500/20 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-red-400 uppercase tracking-widest">
                <AlertCircle className="w-4 h-4" />
                <span>THE INDUSTRY PROBLEM</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-mono font-light text-white uppercase">
                Where Conventional Solutions Fail
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                {service.problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900/80 border border-[#FF5E00]/40 space-y-4 shadow-[0_10px_35px_rgba(255,94,0,0.08)]">
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#FF5E00] uppercase tracking-widest">
                <Lightbulb className="w-4 h-4" />
                <span>THE APEXGEN STANDARD</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-mono font-light text-white uppercase">
                How We Engineer The Solution
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                {service.solution}
              </p>
            </div>
          </div>
        </section>

        {/* CORE CAPABILITIES */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-20 sm:mb-28">
          <div className="mb-12">
            <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase block mb-2">
              DISCIPLINE SCOPE
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-white uppercase font-mono">
              Core Capabilities &amp; Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.capabilities.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-neutral-950/70 border border-white/10 hover:border-[#FF5E00]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono text-neutral-500">
                      DELIVERABLE 0{idx + 1}
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-[#FF5E00]" />
                  </div>
                  <h3 className="text-xl font-bold font-mono text-white uppercase mb-3">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-20 sm:mb-28 border-t border-white/10 pt-16">
          <div className="mb-12">
            <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase block mb-2">
              EXECUTION PROCESS
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-white uppercase font-mono">
              Sprint Methodology
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-neutral-950/60 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-mono font-bold text-[#FF5E00] mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold font-mono text-white uppercase mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RELEVANT CASE STUDY */}
        {relatedProject && (
          <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-20 sm:mb-28 border-t border-white/10 pt-16">
            <div className="mb-10">
              <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase block mb-2">
                RELEVANT PRODUCTION DEPLOYMENT
              </span>
              <h2 className="text-3xl sm:text-5xl font-light text-white uppercase font-mono">
                Case Study: {relatedProject.title}
              </h2>
            </div>

            <div className="rounded-3xl border border-white/10 bg-neutral-950 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden">
              <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-black">
                <Image
                  src={relatedProject.heroImage}
                  alt={`${relatedProject.title} — ${relatedProject.category} case study designed by ApexGen and Subhash Ketagoda`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>

              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-mono text-[#FF7A1A] uppercase tracking-wider block mb-2">
                    {relatedProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-light font-mono text-white uppercase mb-3">
                    {relatedProject.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                    {relatedProject.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                  <Link
                    href={`/work/${relatedProject.slug}`}
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs font-mono tracking-wider uppercase hover:bg-neutral-200 transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 text-black" />
                  </Link>

                  <a
                    href={relatedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-5 py-3 rounded-full border border-white/20 text-xs font-mono tracking-wider uppercase text-neutral-300 hover:text-white hover:border-white transition-colors"
                  >
                    <span>Visit Live Website</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5E00]" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQS */}
        <section className="px-4 sm:px-6 md:px-12 max-w-4xl mx-auto mb-20 sm:mb-28 border-t border-white/10 pt-16">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase block mb-2">
              QUESTIONS &amp; ANSWERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white uppercase font-mono">
              Frequently Asked Questions
            </h2>
          </div>

          <ServiceFaqAccordion faqs={service.faqs} />
        </section>

        {/* BOTTOM CTA */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto pt-6">
          <div className="p-10 sm:p-16 rounded-3xl bg-neutral-950 border border-[#FF5E00]/40 text-center space-y-6">
            <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase block">
              READY TO COMMENCE?
            </span>
            <h3 className="text-3xl sm:text-5xl font-light text-white uppercase font-mono max-w-2xl mx-auto">
              Commission {service.name} for your brand.
            </h3>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/start-a-project?service=${encodeURIComponent(service.name)}`}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FF5E00] text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#FF7A1A] transition-all shadow-[0_0_25px_rgba(255,94,0,0.3)]"
              >
                START A PROJECT INQUIRY &rarr;
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
