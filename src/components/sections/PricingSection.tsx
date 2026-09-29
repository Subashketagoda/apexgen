'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import { Check, ArrowUpRight, MessageCircle, Info } from 'lucide-react';
import { formatPlanWhatsAppUrl } from '@/lib/utils';
import Link from 'next/link';

export function PricingSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="pricing" className="relative py-28 sm:py-36 md:py-44 border-b border-white/10 bg-[#050507] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 sm:pb-16 border-b border-white/10 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-neutral-500 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>TRANSPARENT ENGAGEMENT</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-light tracking-[-0.04em] text-white">
              PRICING
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              Clear starting points for ambitious businesses. Full codebase ownership, high performance, and transparent deliverables.
            </p>
          </div>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mt-16">
          {siteConfig.pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-[#0b0b12] border-2 border-white/35 shadow-[0_15px_45px_rgba(0,0,0,0.8)]'
                  : 'bg-[#08080c] border border-white/10 hover:border-white/25'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-white text-black font-mono text-[9px] font-bold tracking-widest uppercase">
                  RECOMMENDED
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                    {plan.name}
                  </h3>
                  <div className="text-2xl sm:text-3xl font-light tracking-tight text-white mt-2">
                    {plan.price}
                  </div>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                    INCLUDED:
                  </div>
                  {plan.features.map((feat) => (
                    <div key={feat} className="flex items-start space-x-2.5 text-xs text-neutral-300 font-mono">
                      <Check className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-2.5 pt-8 border-t border-white/10 mt-8">
                <Link
                  href="/#contact"
                  className={`w-full min-h-[44px] flex items-center justify-center space-x-2 py-3 rounded-full font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                    plan.isPopular
                      ? 'bg-white text-black hover:bg-neutral-200'
                      : 'bg-white/10 text-white hover:bg-white hover:text-black border border-white/15'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={formatPlanWhatsAppUrl(plan.name, plan.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[40px] flex items-center justify-center space-x-1.5 py-2 rounded-full border border-white/10 bg-white/[0.02] text-neutral-400 font-mono text-[11px] uppercase hover:text-white transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WHATSAPP US</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mandatory Scope Note */}
        <div className="mt-12 p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex items-start space-x-3 text-xs text-neutral-400 font-mono">
          <Info className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">{siteConfig.pricingDisclaimer}</p>
        </div>
      </div>
    </section>
  );
}
