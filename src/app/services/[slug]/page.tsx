import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/siteConfig';
import { servicesData, ServiceDetail } from '@/data/servicesData';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ServiceFaqAccordion } from '@/components/ui/ServiceFaqAccordion';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Check,
  Cpu,
  ShieldCheck,
  Clock,
  MessageSquare,
  ChevronRight,
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
    keywords: service.targetKeywords,
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
  const relatedProject = siteConfig.realProjects.find(
    (p) => p.slug === service.relatedProjectSlug
  );

  // Other services for horizontal navigation
  const otherServices = Object.values(servicesData).filter(
    (s) => s.slug !== service.slug
  );

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
    },
    areaServed: [
      { '@type': 'Country', name: 'Sri Lanka' },
      { '@type': 'AdministrativeArea', name: 'Global' },
    ],
    offers: {
      '@type': 'Offer',
      price: service.recommendedPlan.price.replace(/[^0-9]/g, ''),
      priceCurrency: 'LKR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: service.recommendedPlan.price,
        priceCurrency: 'LKR',
      },
    },
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
    <div className="bg-[#050507] text-[#f4f4f6] min-h-screen selection:bg-[#FF5E00] selection:text-white relative">
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

      <main className="pt-32 pb-24 sm:pb-32 overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
          {/* Subtle Ambient Orange Aura */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#FF5E00]/10 blur-[130px] rounded-full pointer-events-none -z-10" />

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
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-[#FF5E00]/30 bg-[#FF5E00]/10 text-xs font-mono text-[#FF7A1A] tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(255,94,0,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#FF5E00] animate-pulse" />
            <span>{service.category}</span>
          </div>

          {/* Service Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 max-w-5xl leading-[1.08]">
            {service.title}
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-neutral-300 max-w-3xl font-light leading-relaxed mb-8">
            {service.tagline}
          </p>

          <p className="text-base sm:text-lg text-neutral-400 max-w-3xl leading-relaxed mb-10">
            {service.leadParagraph}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-2 pb-14 border-b border-white/10">
            <Link
              href={`/#contact?service=${encodeURIComponent(service.name)}`}
              className="inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full bg-[#FF5E00] text-black font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#FF7A1A] hover:scale-[1.02] shadow-[0_0_25px_rgba(255,94,0,0.3)] active:scale-95"
            >
              <span>Request Project Inquiry</span>
              <ArrowUpRight className="w-4 h-4 text-black" />
            </Link>

            <a
              href={`https://wa.me/94770289139?text=${encodeURIComponent(
                `Hello ApexGen Studio, I would like to inquire about your ${service.name} services.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2.5 px-7 py-4 rounded-full border border-white/20 bg-white/5 text-sm font-mono tracking-wider text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200"
            >
              <MessageSquare className="w-4 h-4 text-[#FF5E00]" />
              <span>Direct WhatsApp Consultation</span>
            </a>
          </div>
        </section>

        {/* WHY APEXGEN PILLAR STATEMENT */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto py-16 sm:py-20">
          <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-neutral-950/70 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5E00]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="max-w-3xl relative z-10">
              <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase block mb-3">
                THE APEXGEN STANDARD
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Engineered for commercial impact, not just cosmetic decoration.
              </h2>
              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-light">
                {service.whyApexGen}
              </p>
            </div>
          </div>
        </section>

        {/* CORE DELIVERABLES GRID */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto py-12 sm:py-16">
          <div className="mb-12">
            <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase block mb-2">
              SCOPE OF CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Deliverables & Technical Scope
            </h2>
            <p className="text-neutral-400 mt-2 text-sm sm:text-base max-w-2xl">
              Concrete solutions engineered into every deployment. No ambiguous promises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-[#FF5E00]/40 transition-all duration-300 hover:shadow-[0_4px_30px_rgba(255,94,0,0.08)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono text-neutral-500">
                      DELIVERABLE 0{idx + 1}
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-[#FF5E00]/60 group-hover:text-[#FF5E00] transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-neutral-100 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto py-16 sm:py-20 border-t border-white/5">
          <div className="mb-12">
            <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase block mb-2">
              PRECISION WORKFLOW
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Execution Methodology
            </h2>
            <p className="text-neutral-400 mt-2 text-sm sm:text-base max-w-2xl">
              A transparent, disciplined sprint cadence from kickoff to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-950/60 border border-white/5 relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-mono font-bold text-[#FF5E00] mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5 mr-1.5 text-neutral-500" />
                  <span>Phase Milestone</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TECH STACK & ARCHITECTURE BADGES */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto py-12">
          <div className="p-8 rounded-2xl bg-neutral-900/30 border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center space-x-3">
              <Cpu className="w-6 h-6 text-[#FF5E00]" />
              <div>
                <h4 className="text-sm font-mono uppercase tracking-wider text-white">
                  Tools & Production Stack
                </h4>
                <p className="text-xs text-neutral-400">
                  Modern, performant toolsets tailored to {service.name.toLowerCase()} standards.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {service.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* RECOMMENDED INVESTMENT & PACKAGES */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto py-16 sm:py-20 border-t border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase block mb-2">
                TRANSPARENT PRICING
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Recommended Investment Tier
              </h2>
            </div>
            <p className="text-neutral-400 mt-2 md:mt-0 text-sm sm:text-base max-w-md">
              Fixed milestones with clear scopes. All tiers include full source ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Main Recommended Tier */}
            <div className="lg:col-span-2 p-8 sm:p-10 rounded-3xl bg-neutral-900/80 border-2 border-[#FF5E00]/60 relative shadow-[0_10px_40px_rgba(255,94,0,0.12)]">
              <div className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1 rounded-full bg-[#FF5E00] text-black text-xs font-mono font-bold uppercase tracking-wider">
                RECOMMENDED FOR THIS DISCIPLINE
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
                <div>
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                    PACKAGE TIER
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {service.recommendedPlan.name}
                  </h3>
                </div>
                <div>
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block">
                    STARTING AT
                  </span>
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-[#FF5E00]">
                    {service.recommendedPlan.price}
                  </span>
                </div>
              </div>

              <p className="text-neutral-300 text-sm sm:text-base my-6 leading-relaxed">
                {service.recommendedPlan.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {service.deliverables.slice(0, 4).map((del, i) => (
                  <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-[#FF5E00] shrink-0 mt-0.5" />
                    <span>{del.title}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/#contact?service=${encodeURIComponent(service.name)}&tier=${encodeURIComponent(
                    service.recommendedPlan.name
                  )}`}
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-[#FF5E00] text-black font-semibold text-xs font-mono tracking-wider uppercase hover:bg-[#FF7A1A] transition-all"
                >
                  <span>Select {service.recommendedPlan.name} Tier</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </Link>

                <Link
                  href="/#pricing"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full border border-white/20 text-neutral-300 text-xs font-mono tracking-wider uppercase hover:text-white hover:border-white transition-all"
                >
                  <span>Compare All 3 Tiers</span>
                </Link>
              </div>
            </div>

            {/* Custom Quote Card */}
            <div className="p-8 rounded-3xl bg-neutral-950/60 border border-white/10 flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-mono text-[#FF5E00] uppercase tracking-wider block mb-2">
                  CUSTOM SCOPE
                </span>
                <h3 className="text-xl font-bold text-white mb-3">Enterprise or Multi-Phase Project?</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                  For complex integrations, high-traffic portals, or customized multi-system workflows, we prepare bespoke roadmaps.
                </p>
                <div className="space-y-2 mb-6 text-xs text-neutral-400">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-neutral-400" />
                    <span>Comprehensive Technical Discovery</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-neutral-400" />
                    <span>Milestone-based SLA & Delivery</span>
                  </div>
                </div>
              </div>

              <Link
                href="/#contact"
                className="w-full py-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-white text-neutral-200 hover:text-black transition-all text-xs font-mono uppercase tracking-wider font-semibold text-center block"
              >
                Request Custom Quotation
              </Link>
            </div>
          </div>
        </section>

        {/* FLAGSHIP CASE STUDY SPOTLIGHT */}
        {relatedProject && (
          <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto py-16 sm:py-20 border-t border-white/5">
            <div className="mb-10">
              <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase block mb-2">
                VERIFIED REAL CLIENT DEPLOYMENT
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Featured Case Study: {relatedProject.title}
              </h2>
            </div>

            <div className="rounded-3xl border border-white/10 bg-neutral-900/50 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden">
              <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-black">
                <Image
                  src={relatedProject.heroImage}
                  alt={`${relatedProject.title} Case Study Preview`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#FF7A1A] mb-4">
                    <span>{relatedProject.category}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    {relatedProject.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                    {relatedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {relatedProject.services.map((serviceItem) => (
                      <span
                        key={serviceItem}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-neutral-400"
                      >
                        {serviceItem}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                  <Link
                    href={`/work/${relatedProject.slug}`}
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs font-mono tracking-wider uppercase hover:bg-neutral-200 transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 text-black" />
                  </Link>

                  {relatedProject.liveUrl && (
                    <a
                      href={relatedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-5 py-3 rounded-full border border-white/20 text-xs font-mono tracking-wider uppercase text-neutral-300 hover:text-white hover:border-white transition-colors"
                    >
                      <span>Visit Live Website</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5E00]" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="px-4 sm:px-6 md:px-12 max-w-5xl mx-auto py-16 sm:py-20 border-t border-white/5">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Questions About Our {service.name} Process
            </h2>
            <p className="text-neutral-400 mt-2 text-sm sm:text-base max-w-xl mx-auto">
              Straightforward answers regarding delivery, communication, technical standards, and turnaround.
            </p>
          </div>

          <ServiceFaqAccordion faqs={service.faqs} />
        </section>

        {/* EXPLORE OTHER SERVICES */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto py-16 sm:py-20 border-t border-white/5">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase block mb-1">
                STUDIO DISCIPLINES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Explore Other Services
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs font-mono tracking-wider uppercase text-[#FF5E00] hover:underline hidden sm:inline-block"
            >
              View All Services →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherServices.slice(0, 3).map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group p-6 rounded-2xl bg-neutral-950/60 border border-white/5 hover:border-[#FF5E00]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF7A1A] transition-colors flex items-center justify-between">
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#FF5E00] transition-colors" />
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2 leading-relaxed">
                    {item.leadParagraph}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* BOTTOM CONVERSION CTA BANNER */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto pt-10">
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-neutral-900 via-black to-[#FF5E00]/15 border border-[#FF5E00]/30 text-center relative overflow-hidden shadow-[0_10px_50px_rgba(255,94,0,0.1)]">
            <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase block mb-3">
              READY TO COMMENCE YOUR PROJECT?
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 max-w-2xl mx-auto leading-tight">
              Let&apos;s build an extraordinary digital presence for your brand.
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light">
              Submit your project scope through our multi-step inquiry system or speak directly with our creative director on WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/#contact?service=${encodeURIComponent(service.name)}`}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FF5E00] text-black font-semibold text-sm tracking-wider uppercase hover:bg-[#FF7A1A] transition-all shadow-[0_0_30px_rgba(255,94,0,0.35)]"
              >
                Start Your Project Inquiry
              </Link>
              <Link
                href="/#work"
                className="w-full sm:w-auto px-7 py-4 rounded-full border border-white/20 text-white font-mono text-xs tracking-wider uppercase hover:bg-white/10 transition-all"
              >
                Explore Selected Work
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
