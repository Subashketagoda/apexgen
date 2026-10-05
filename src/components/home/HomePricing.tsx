'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { pricingPlans } from '@/data/pricing';
import { trackStartProjectClick } from '@/lib/analytics';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

export function HomePricing() {
  return (
    <section id="pricing" className="py-28 sm:py-36 lg:py-48 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 sm:pb-20 border-b border-white/[0.08] gap-6">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>TRANSPARENT VALUE PACKAGES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.035em] text-white uppercase leading-[1.05]">
            Transparent pricing. <br />
            <span className="text-gradient-silver font-normal">Predictable investment.</span>
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
          Fixed sprint scopes with full source code ownership. Zero recurring template fees, zero agency markups, and sub-second edge deployment.
        </p>
      </div>

      {/* 3 Premium SaaS Pricing Cards with Signature White-Center High-Contrast Rhythm */}
      <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {pricingPlans.map((plan, idx) => {
          const isFlagship = plan.isPopular; // Flagship center card illuminated per reference image

          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="flex"
            >
              <SpotlightCard
                className={`p-8 sm:p-10 flex flex-col justify-between w-full h-full relative overflow-hidden rounded-3xl transition-all duration-300 ${
                  isFlagship
                    ? 'card-flagship-white border-white/[0.9]'
                    : 'glass-specular text-white hover:border-white/[0.2]'
                }`}
              >
                {/* Highlight badge for Studio Recommended / Flagship */}
                {plan.badge && (
                  <div className="absolute top-5 right-6">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase font-semibold ${
                        isFlagship
                          ? 'bg-black text-white shadow-md'
                          : 'bg-white/[0.08] text-zinc-300 border border-white/[0.12]'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Tier Name & Timeline */}
                  <div className={`flex items-center justify-between pb-4 border-b ${
                    isFlagship ? 'border-black/10' : 'border-white/[0.06]'
                  }`}>
                    <h3 className={`text-xl font-medium tracking-tight uppercase ${
                      isFlagship ? 'text-black' : 'text-white'
                    }`}>
                      {plan.name}
                    </h3>
                    <span className={`text-[11px] font-mono ${
                      isFlagship ? 'text-zinc-600' : 'text-zinc-400'
                    }`}>
                      {plan.timeline}
                    </span>
                  </div>

                  {/* Price Display */}
                  <div className="my-8">
                    <div className={`text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight font-mono ${
                      isFlagship ? 'text-black font-normal' : 'text-white'
                    }`}>
                      {plan.price}
                    </div>
                    <div className={`text-xs font-normal mt-2 leading-relaxed ${
                      isFlagship ? 'text-zinc-700' : 'text-zinc-400'
                    }`}>
                      {plan.valueProposition}
                    </div>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className={`space-y-3 pt-6 border-t ${
                    isFlagship ? 'border-black/10' : 'border-white/[0.06]'
                  }`}>
                    <span className={`text-[10px] font-mono uppercase tracking-widest block mb-2 ${
                      isFlagship ? 'text-zinc-500 font-semibold' : 'text-zinc-400'
                    }`}>
                      INCLUDED DELIVERABLES
                    </span>
                    {plan.deliverables.map((item, i) => (
                      <div key={i} className={`flex items-start gap-2.5 text-xs font-normal ${
                        isFlagship ? 'text-zinc-800' : 'text-zinc-300'
                      }`}>
                        <div className={`p-0.5 rounded-full shrink-0 mt-0.5 ${
                          isFlagship 
                            ? 'bg-black text-white' 
                            : 'bg-white/[0.08] text-white'
                        }`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer & CTA */}
                <div className={`mt-10 pt-6 border-t space-y-4 ${
                  isFlagship ? 'border-black/10' : 'border-white/[0.06]'
                }`}>
                  <Link
                    href={plan.ctaHref}
                    onClick={() => trackStartProjectClick(`pricing_${plan.id}`)}
                    className={`w-full py-4 rounded-full text-xs font-mono tracking-wider uppercase font-semibold flex items-center justify-center space-x-2 transition-all duration-300 active:scale-98 cursor-pointer ${
                      isFlagship
                        ? 'bg-black text-white hover:bg-zinc-800 shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:scale-[1.01]'
                        : 'btn-glossy-dark text-white hover:scale-[1.01]'
                    }`}
                  >
                    <span>{plan.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className={`text-center text-[11px] font-mono ${
                    isFlagship ? 'text-zinc-600' : 'text-zinc-400'
                  }`}>
                    Ideal for: {plan.idealFor}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
