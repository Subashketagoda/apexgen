'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Layout,
  Code2,
  Sparkles,
  Search,
  ShoppingBag,
  Cpu,
} from 'lucide-react';

interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  slug: string;
  icon: React.ComponentType<{ className?: string }>;
}

export function HomeServicesSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);

  const services: ServiceItem[] = [
    {
      number: '01',
      title: 'Web Design',
      tagline: 'Bespoke UI/UX & Digital Brand Flagships',
      description:
        'Art-directed visual identity, editorial typography, spatial grids, and interactive Figma systems that command instant authority. Engineered from scratch with zero generic templates.',
      deliverables: ['Custom Figma Architecture', 'Editorial Typography Systems', 'Mobile Touch Ergonomics', 'Interactive Design Tokens'],
      slug: '/services/web-design',
      icon: Layout,
    },
    {
      number: '02',
      title: 'Web Development',
      tagline: 'Next.js 16 & Sub-Second Edge Engineering',
      description:
        'Production web applications engineered on Next.js 16, React 19, and distributed edge CDN. Clean, maintainable code with full client source code ownership.',
      deliverables: ['Sub-Second Edge Rendering', 'TypeScript Architecture', 'Core Web Vitals 99+', 'Zero WordPress Bloat'],
      slug: '/services/web-development',
      icon: Code2,
    },
    {
      number: '03',
      title: 'UI/UX Design',
      tagline: 'Human-Centered Digital Ergonomics',
      description:
        'Intuitive interface architectures engineered to guide visitors smoothly from discovery to conversion. Thumb-friendly mobile navigation and friction-free user journeys.',
      deliverables: ['Conversion Funnel Design', 'Component Design Systems', 'Interactive Prototyping', 'Mobile Gestures & Ergonomics'],
      slug: '/services/web-design',
      icon: Sparkles,
    },
    {
      number: '04',
      title: 'SEO',
      tagline: 'Technical Search Authority & Discovery',
      description:
        'Deep technical SEO architecture, structured Schema.org JSON-LD data, automated XML sitemaps, and Google Search Console optimization for durable search visibility.',
      deliverables: ['Schema.org JSON-LD Entities', 'Google Search Console Verification', 'Semantic HTML5 Hierarchy', 'OpenGraph & Twitter Card Engine'],
      slug: '/services/seo',
      icon: Search,
    },
    {
      number: '05',
      title: 'E-Commerce',
      tagline: 'Zero-Commission Transaction Engines',
      description:
        'Custom digital storefronts and instant WhatsApp checkout mechanisms that allow businesses to sell directly to consumers without giving up 25–30% in aggregator commissions.',
      deliverables: ['Direct WhatsApp Cart Engine', 'Dynamic Pricing & Cart Matrix', 'Automated Order Payloads', 'Zero Ongoing Platform Cuts'],
      slug: '/services/ecommerce',
      icon: ShoppingBag,
    },
    {
      number: '06',
      title: 'Digital Solutions',
      tagline: 'Custom Portals & Automated Workflows',
      description:
        'Tailored booking engines, consultation funnels, interactive estimators, and database integrations engineered to streamline business operations and capture leads daily.',
      deliverables: ['Online Appointment Engines', 'Client Brief Funnels', 'Calendar & CRM Integration', 'Scalable Database Connectors'],
      slug: '/services/digital-solutions',
      icon: Cpu,
    },
  ];

  return (
    <section id="services" className="py-28 sm:py-36 lg:py-48 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 sm:pb-20 border-b border-white/[0.08] gap-6">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>DISCIPLINES & CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.035em] text-white uppercase leading-[1.05]">
            What we create. <br />
            <span className="text-gradient-silver font-normal">Services engineered for growth.</span>
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
          From full digital flagships to custom conversion infrastructure, our disciplines cover every layer of modern digital execution.
        </p>
      </div>

      {/* Interactive Rows / Cards */}
      <div className="mt-12 sm:mt-16 divide-y divide-white/[0.08]">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isHovered = hoveredIdx === index;

          return (
            <motion.div
              key={service.number}
              onMouseEnter={() => setHoveredIdx(index)}
              onClick={() => setHoveredIdx(hoveredIdx === index ? null : index)}
              className={`group transition-all duration-300 py-8 sm:py-10 px-4 sm:px-8 rounded-2xl cursor-pointer ${
                isHovered ? 'bg-[#0c0c12] border border-white/[0.12] shadow-[0_15px_35px_rgba(0,0,0,0.6)]' : 'bg-transparent border border-transparent'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Number & Title */}
                <div className="lg:col-span-4 flex items-center space-x-6">
                  <span
                    className={`text-sm sm:text-base font-mono transition-colors duration-300 ${
                      isHovered ? 'text-white font-bold' : 'text-zinc-500'
                    }`}
                  >
                    {service.number}
                  </span>
                  
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-2 rounded-xl transition-all duration-300 ${
                        isHovered
                          ? 'bg-white text-black'
                          : 'bg-white/[0.04] text-zinc-400 border border-white/[0.06]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight uppercase group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description & Deliverables */}
                <div className="lg:col-span-6 space-y-3">
                  <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-1">
                    {service.deliverables.map((item, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono text-zinc-400 bg-white/[0.03] border border-white/[0.06] px-2.5 py-0.5 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Arrow */}
                <div className="lg:col-span-2 flex items-center justify-end">
                  <Link
                    href={service.slug}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                      isHovered
                        ? 'bg-white text-black font-medium'
                        : 'text-zinc-400 group-hover:text-white'
                    }`}
                  >
                    <span>EXPLORE</span>
                    <ArrowUpRight
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isHovered ? 'translate-x-0.5 -translate-y-0.5' : ''
                      }`}
                    />
                  </Link>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
