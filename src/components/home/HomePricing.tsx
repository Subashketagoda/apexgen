'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { pricingPlans } from '@/data/pricing';
import { trackStartProjectClick } from '@/lib/analytics';

export function HomePricing() {
  const [hoveredTier, setHoveredTier] = useState<string | null>('business');

  return (
    <section id="pricing" className="py-32 sm:py-48 px-4 sm:px-8 md:px-16 max-w-[1600px] mx-auto scroll-mt-24 section-pricing-bg rounded-3xl my-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-16 border-b border-white/[0.08] gap-8 mb-20 sm:mb-28">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono tracking-widest text-[#8B8B96] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span>06 / INVESTMENT ARCHITECTURE</span>
          </div>
          <h2 className="text-5xl sm:text-7xl lg:text-[7vw] font-black tracking-tight text-[#F5F5F7] uppercase leading-[0.92]">
            TRANSPARENT <br />
            <span className="text-gradient-silver">PRICING.</span>
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
          Zero hidden costs. Zero recurring platform taxes. Fixed sprint milestones with 100% intellectual property and source code handoff.
        </p>
      </div>

      {/* Three Large Vertical Luxury Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {pricingPlans.map((plan, idx) => {
          const isBusiness = plan.id === 'business';
          const isHovered = hoveredTier === plan.id;

          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHoveredTier(plan.id)}
              className={`group relative rounded-3xl p-8 sm:p-12 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer ${
                isBusiness
                  ? 'bg-gradient-to-b from-[#0B0B10] to-[#080B18] border border-[#8B5CF6]/50 shadow-[0_25px_80px_rgba(139,92,246,0.18)] ring-1 ring-[#3B82F6]/30'
                  : 'bg-[#0B0B10]/95 border border-white/[0.08] hover:border-[#8B5CF6]/30 shadow-xl'
              }`}
            >
              {/* Atmospheric volumetric lighting behind the recommended package */}
              {isBusiness && (
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-b from-[#8B5CF6]/30 via-[#3B82F6]/20 to-transparent blur-2xl pointer-events-none -z-10 opacity-70" />
              )}

              {/* Background Ambient Lighting Change on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${
                  isBusiness
                    ? 'from-[#3B82F6]/15 via-[#8B5CF6]/10 to-transparent'
                    : 'from-[#3B82F6]/[0.04] to-transparent'
                } pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10 space-y-8">
                {/* Panel Top: Tier Name & Tag */}
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                      TIER // 0{idx + 1}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-light text-white uppercase tracking-tight">
                      {plan.name}
                    </h3>
                  </div>

                  {plan.badge && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-md">
                      <Sparkles className="w-3 h-3 text-[#22D3EE]" />
                      {plan.badge}
                    </span>
                  )}
                </div>

                {/* Massive Typography Price */}
                <div className="space-y-2">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-light font-mono text-white tracking-tight">
                    {plan.price}
                  </div>
                  <div className="text-xs font-mono text-zinc-400">
                    EST. SPRINT TIMELINE: {plan.timeline}
                  </div>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed pt-2">
                    {plan.valueProposition}
                  </p>
                </div>

                {/* Minimal Elegant Deliverables List */}
                <div className="pt-6 border-t border-white/[0.08] space-y-3">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3">
                    CORE DELIVERABLES
                  </div>
                  {plan.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start space-x-3 text-xs sm:text-sm text-zinc-300 font-light">
                      <Check className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Panel CTA */}
              <div className="relative z-10 pt-10 mt-8 border-t border-white/[0.08] space-y-3">
                <Link
                  href={plan.ctaHref}
                  onClick={() => trackStartProjectClick(`pricing_${plan.id}`)}
                  className={`w-full py-4 rounded-full text-xs font-mono tracking-wider uppercase font-semibold flex items-center justify-center space-x-2 transition-all duration-300 ${
                    isBusiness
                      ? 'btn-cta-primary text-white shadow-[0_0_30px_rgba(139,92,246,0.35)]'
                      : 'btn-physical text-white hover:text-white'
                  }`}
                >
                  <span>{plan.ctaLabel}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <div className="text-center text-[11px] font-mono text-zinc-500">
                  Ideal for: {plan.idealFor}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
