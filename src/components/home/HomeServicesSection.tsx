'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Layers, Cpu, ShoppingBag, Calendar, TrendingUp, Workflow } from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'Website Design',
    description: 'Premium UI/UX and business-focused website experiences.',
    slug: '/services/web-design',
    icon: Layers,
    accent: 'from-[#3B82F6]/40 via-transparent to-[#8B5CF6]/20',
  },
  {
    number: '02',
    title: 'Website Development',
    description: 'Responsive, fast, modern websites built for real businesses.',
    slug: '/services/web-development',
    icon: Cpu,
    accent: 'from-[#22D3EE]/30 via-transparent to-[#3B82F6]/25',
  },
  {
    number: '03',
    title: 'E-commerce',
    description: 'Online stores and digital shopping experiences.',
    slug: '/services/ecommerce',
    icon: ShoppingBag,
    accent: 'from-[#8B5CF6]/35 via-transparent to-[#3B82F6]/15',
  },
  {
    number: '04',
    title: 'Booking Systems',
    description: 'Online appointment and reservation systems.',
    slug: '/services/digital-solutions',
    icon: Calendar,
    accent: 'from-[#C084FC]/30 via-transparent to-[#080B18]',
  },
  {
    number: '05',
    title: 'SEO Optimization',
    description: 'Technical SEO and search visibility improvements.',
    slug: '/services/seo',
    icon: TrendingUp,
    accent: 'from-[#3B82F6]/30 via-transparent to-[#22D3EE]/15',
  },
  {
    number: '06',
    title: 'Business Automation',
    description: 'Custom digital workflows and business systems.',
    slug: '/services/digital-solutions',
    icon: Workflow,
    accent: 'from-[#8B5CF6]/28 via-transparent to-[#3B82F6]/20',
  },
];

export function HomeServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 max-w-[1600px] mx-auto scroll-mt-24">
      <div className="absolute inset-0 section-services-bg rounded-[2rem] pointer-events-none" />
      <div className="absolute right-[8%] top-[12%] w-[420px] h-[420px] rounded-full bg-[#3B82F6]/12 blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 border-b border-white/[0.08] mb-12 sm:mb-16">
        <div className="space-y-4 max-w-3xl">
          <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-zinc-400">What we create</p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-[-0.045em] uppercase leading-[0.9] text-white">
            Crafted for businesses that need more than a template.
          </h2>
        </div>
        <p className="max-w-md text-sm sm:text-base text-zinc-400 leading-relaxed">
          Six capabilities, one studio: design, engineering, commerce, booking, search, and automation — built as a single digital experience.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isActive = active === index;
          return (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setActive(index)}
              className={`group relative overflow-hidden rounded-[1.6rem] border p-6 sm:p-7 min-h-[280px] flex flex-col justify-between transition-all duration-500 ${
                isActive
                  ? 'border-[#8B5CF6]/45 shadow-[0_24px_80px_rgba(59,130,246,0.16)] -translate-y-1 bg-[#0B0B10]'
                  : 'border-white/[0.08] bg-[#0B0B10]/80 hover:border-white/20'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              <div className="service-card-visual absolute -right-10 -top-10 w-48 h-48 rounded-full blur-2xl opacity-70 group-hover:scale-125 group-hover:opacity-100 transition-all duration-700" />

              <div className="relative z-10 flex items-start justify-between">
                <span className="font-mono text-sm text-[#3B82F6]">{service.number}</span>
                <span className="w-11 h-11 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-sky-200 group-hover:border-[#8B5CF6]/50 group-hover:shadow-[0_0_24px_rgba(139,92,246,0.35)] transition-all">
                  <Icon className="w-5 h-5" />
                </span>
              </div>

              <div className="relative z-10 space-y-3 pt-10">
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">{service.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">{service.description}</p>
                <Link
                  href={service.slug}
                  className="inline-flex items-center gap-1.5 pt-2 text-[11px] font-mono uppercase tracking-widest text-zinc-300 group-hover:text-white"
                >
                  Explore service
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
