'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { serviceCategories, servicesData } from '@/data/services';

export function HomeServicesShowcase() {
  const [activeCategory, setActiveCategory] = useState<'DESIGN' | 'BUILD' | 'GROW'>('DESIGN');

  const currentCat = serviceCategories.find((c) => c.id === activeCategory) || serviceCategories[0];

  return (
    <section id="services" className="py-28 sm:py-36 md:py-44 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 sm:pb-20 border-b border-white/10 gap-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#FF5E00] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#FF5E00] animate-pulse" />
            <span>DISCIPLINES &bull; THREE CORE PILLARS</span>
          </div>
          <h2 className="text-4xl sm:text-7xl md:text-8xl font-light tracking-[-0.04em] text-white uppercase font-mono">
            SERVICES
          </h2>
        </div>

        <div className="max-w-md">
          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            High-contrast digital craft across three specialized domains. Hover each category to reveal scope and capabilities.
          </p>
        </div>
      </div>

      {/* Category Tabs: DESIGN • BUILD • GROW */}
      <div className="grid grid-cols-3 border-b border-white/10 text-center my-12">
        {serviceCategories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`py-6 sm:py-8 font-mono text-lg sm:text-3xl lg:text-4xl uppercase tracking-wider transition-all cursor-pointer border-b-2 ${
                isActive
                  ? 'border-[#FF5E00] text-white font-bold bg-white/[0.02]'
                  : 'border-transparent text-neutral-500 hover:text-neutral-300'
              }`}
            >
              <span>{cat.title}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Interactive Category Dossier */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCat.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
        >
          {/* Left Column: Category Narrative (5-col) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase block mb-2">
                {currentCat.tagline}
              </span>
              <h3 className="text-3xl sm:text-4xl font-light font-mono text-white uppercase">
                {currentCat.title}
              </h3>
            </div>

            <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
              {currentCat.description}
            </p>

            <div className="space-y-3 pt-2">
              <span className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase block">
                SPECIALIZED CAPABILITIES:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {currentCat.subDisciplines.map((sub) => (
                  <span
                    key={sub}
                    className="px-4 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-neutral-200"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/services"
                className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#FF5E00] hover:text-white transition-colors"
              >
                <span>EXPLORE ALL SERVICES &rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Dedicated Service Links (7-col) */}
          <div className="lg:col-span-7 space-y-4">
            {currentCat.services.map((slug) => {
              const service = servicesData[slug];
              if (!service) return null;

              return (
                <Link
                  key={slug}
                  href={`/services/${service.slug}`}
                  className="group block p-8 rounded-3xl bg-neutral-950/80 border border-white/10 hover:border-[#FF5E00]/50 transition-all duration-300 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                      DISCIPLINE DOSSIER
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-[#FF5E00] transition-colors" />
                  </div>

                  <h4 className="text-2xl sm:text-3xl font-light font-mono text-white uppercase group-hover:text-[#FF7A1A] transition-colors">
                    {service.name}
                  </h4>

                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    {service.leadParagraph}
                  </p>

                  <div className="flex items-center space-x-2 text-xs font-mono text-[#FF5E00] pt-2">
                    <span>VIEW SCOPE, PROCESS &amp; DELIVERABLES</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
