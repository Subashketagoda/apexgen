'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import { Check, ArrowUpRight, MessageCircle } from 'lucide-react';
import { formatPlanWhatsAppUrl } from '@/lib/utils';
import Link from 'next/link';

export function PricingSection() {
  const shouldReduceMotion = useReducedMotion();
  const plans = siteConfig.pricingPlans;

  return (
    <section id="pricing" className="relative py-28 sm:py-36 md:py-44 border-b border-white/10 bg-[#050507] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 sm:pb-16 border-b border-white/10 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-neutral-500 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>TRANSPARENT VALUE &bull; INVESTMENT</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-light tracking-[-0.04em] text-white">
              PRICING
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              Transparent starting points with zero hidden licensing costs. 100% codebase ownership, bespoke Next.js architecture, and direct execution.
            </p>
          </div>
        </div>

        {/* 3 Editorial Luxury Tier Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mt-16 sm:mt-20">
          {plans.map((plan, index) => {
            const isPremium = plan.id === 'premium';
            const isBusiness = plan.id === 'business';

            return (
              <motion.div
                key={plan.id}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-2xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  isPremium
                    ? 'bg-[#090b12] border-2 border-cyan-400/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(56,189,248,0.08)]'
                    : isBusiness
                    ? 'bg-[#08080c] border border-white/20 hover:border-white/35'
                    : 'bg-[#08080c] border border-white/10 hover:border-white/25'
                }`}
              >
                {/* Visual Distinction Badge for Premium */}
                {isPremium && (
                  <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-cyan-400 text-black font-mono text-[9px] font-bold tracking-widest uppercase">
                    HIGH-END FLAGSHIP
                  </div>
                )}

                {isBusiness && (
                  <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-white text-black font-mono text-[9px] font-bold tracking-widest uppercase">
                    MOST POPULAR
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-1">
                      TIER 0{index + 1}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight uppercase">
                      {plan.name}
                    </h3>
                    <div className="text-3xl sm:text-4xl font-light tracking-tight text-white mt-3 font-mono">
                      {plan.price}
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-400 font-light mt-3 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Included Specifications */}
                  <div className="space-y-3 pt-6 border-t border-white/[0.08]">
                    <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                      INCLUDED IN {plan.name}:
                    </div>
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start space-x-2.5 text-xs sm:text-sm text-neutral-300 font-mono">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="space-y-3 pt-8 border-t border-white/[0.08] mt-8">
                  <Link
                    href="/#contact"
                    className={`w-full min-h-[46px] flex items-center justify-center space-x-2 py-3 rounded-full font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                      isPremium
                        ? 'bg-cyan-400 text-black hover:bg-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.3)]'
                        : isBusiness
                        ? 'bg-white text-black hover:bg-neutral-200'
                        : 'bg-white/10 text-white hover:bg-white hover:text-black border border-white/15'
                    }`}
                  >
                    <span>Start a Project →</span>
                  </Link>

                  <a
                    href={formatPlanWhatsAppUrl(plan.name, plan.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[40px] flex items-center justify-center space-x-1.5 py-2 rounded-full border border-white/10 bg-white/[0.02] text-neutral-400 font-mono text-[11px] uppercase hover:text-white transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scope Note */}
        <div className="mt-12 text-center text-xs font-mono text-neutral-500">
          {siteConfig.pricingDisclaimer}
        </div>
      </div>
    </section>
  );
}
