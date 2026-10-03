import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ArrowUpRight, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact ApexGen | Direct Inquiry & WhatsApp Consultation',
  description:
    'Initiate a project inquiry with ApexGen Studio in Colombo, Sri Lanka. Direct WhatsApp consultation, studio email, and structured project intake brief.',
  keywords: [
    'Contact ApexGen',
    'Web design consultation Sri Lanka',
    'Hire web design agency Colombo',
    'Subhash Ketagoda contact',
    'WhatsApp web developer Sri Lanka',
  ],
  alternates: {
    canonical: `${siteConfig.siteUrl}/contact`,
  },
  openGraph: {
    title: 'Contact ApexGen | Direct Inquiry & WhatsApp Consultation',
    description:
      'Connect directly with ApexGen creative directors and senior engineers in Colombo, Sri Lanka.',
    url: `${siteConfig.siteUrl}/contact`,
    type: 'website',
    images: [
      {
        url: '/brand/apexgen-brand-kit.png',
        width: 1200,
        height: 630,
        alt: 'Contact ApexGen Digital Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact ApexGen | Direct Inquiry & WhatsApp Consultation',
    description:
      'Connect directly with ApexGen studio leadership in Colombo, Sri Lanka.',
    images: ['/brand/apexgen-brand-kit.png'],
  },
};

export default function ContactPage() {
  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact ApexGen Studio',
    description: 'Direct inquiry channels for ApexGen Digital Studio in Colombo, Sri Lanka.',
    url: `${siteConfig.siteUrl}/contact`,
    mainEntity: {
      '@type': 'ProfessionalService',
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.whatsappNumber,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Colombo',
        addressCountry: 'LK',
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
        name: 'Contact',
        item: `${siteConfig.siteUrl}/contact`,
      },
    ],
  };

  return (
    <div className="bg-[#050505] text-[#F5F5F5] min-h-screen selection:bg-[#FF5E00] selection:text-white relative">
      <CustomCursor />
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="pt-32 sm:pt-44 pb-28 sm:pb-36 overflow-hidden">
        {/* Editorial Header */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-[#FF5E00]/30 bg-[#FF5E00]/10 text-xs font-mono text-[#FF7A1A] tracking-wider uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E00] animate-pulse" />
            <span>DIRECT INQUIRY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-light tracking-[-0.04em] text-white uppercase font-mono mb-8 max-w-5xl leading-[0.95]">
            START A CONVERSATION.
          </h1>

          <p className="text-lg sm:text-2xl text-neutral-300 font-light max-w-3xl leading-relaxed">
            Every great digital flagship begins with a dialogue. Connect directly with our studio leadership to discuss your vision, timeline, and commercial goals.
          </p>
        </section>

        {/* Primary Contact Channels */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-20 sm:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Channel 1: Start A Project Questionnaire */}
            <div className="p-8 sm:p-14 rounded-3xl bg-neutral-900/80 border-2 border-[#FF5E00]/60 relative flex flex-col justify-between space-y-8 shadow-[0_10px_40px_rgba(255,94,0,0.12)]">
              <div className="space-y-4">
                <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase block">
                  RECOMMENDED PATH
                </span>
                <h2 className="text-3xl sm:text-5xl font-light text-white uppercase font-mono">
                  Submit Project Brief
                </h2>
                <p className="text-neutral-300 font-light text-sm sm:text-base leading-relaxed">
                  Guide us through your project requirements, scope, budget, and timeline with our 7-step interactive brief intake wizard.
                </p>
              </div>

              <div>
                <Link
                  href="/start-a-project"
                  className="w-full py-4 rounded-full bg-[#FF5E00] text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#FF7A1A] transition-all shadow-[0_0_25px_rgba(255,94,0,0.3)] flex items-center justify-center space-x-2"
                >
                  <span>LAUNCH 7-STEP BRIEF WIZARD</span>
                  <ArrowUpRight className="w-4 h-4 text-black" />
                </Link>
              </div>
            </div>

            {/* Channel 2: Direct WhatsApp Chat */}
            <div className="p-8 sm:p-14 rounded-3xl bg-neutral-950/80 border border-white/10 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase block">
                  IMMEDIATE RESPONSE
                </span>
                <h2 className="text-3xl sm:text-5xl font-light text-white uppercase font-mono">
                  WhatsApp Direct
                </h2>
                <p className="text-neutral-300 font-light text-sm sm:text-base leading-relaxed">
                  Speak directly with creative director Subash on WhatsApp. Fast-track questions, discuss ideas, or schedule a strategy consultation call.
                </p>
                <div className="text-xl sm:text-2xl font-mono text-white pt-2">
                  {siteConfig.contact.whatsappDisplay}
                </div>
              </div>

              <div>
                <a
                  href={`https://wa.me/94770289139?text=${encodeURIComponent(
                    'Hello ApexGen Studio, I would like to inquire about starting a website project.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-black font-mono text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>START CHAT ON WHATSAPP &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Studio Meta Information */}
        <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto pt-12 border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-xs font-mono text-neutral-500 uppercase tracking-widest">
                <Mail className="w-3.5 h-3.5 text-[#FF5E00]" />
                <span>STUDIO EMAIL</span>
              </div>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-base sm:text-lg font-mono text-white hover:text-[#FF5E00] transition-colors block"
              >
                {siteConfig.contact.email}
              </a>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-xs font-mono text-neutral-500 uppercase tracking-widest">
                <MapPin className="w-3.5 h-3.5 text-[#FF5E00]" />
                <span>HEADQUARTERS</span>
              </div>
              <p className="text-base sm:text-lg font-mono text-neutral-300">
                {siteConfig.contact.location}
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-xs font-mono text-neutral-500 uppercase tracking-widest">
                <Clock className="w-3.5 h-3.5 text-[#FF5E00]" />
                <span>OFFICE HOURS</span>
              </div>
              <p className="text-base sm:text-lg font-mono text-neutral-300">
                {siteConfig.contact.hours}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
