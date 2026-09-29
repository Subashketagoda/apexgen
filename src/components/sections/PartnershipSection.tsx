'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import { ArrowUpRight } from 'lucide-react';

export function PartnershipSection() {
  return (
    <section className="relative py-20 md:py-28 fine-border-b bg-[#070709] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-10 md:p-16 rounded-3xl bg-gradient-to-b from-[#0e0e15] to-[#08080c] border border-white/15 shadow-2xl space-y-8"
        >
          {/* Subtle badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 font-mono text-[11px] tracking-widest text-neutral-300 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>FOUNDING CLIENT COHORT</span>
          </div>

          {/* Transparent Statement */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
              {siteConfig.partnershipNote.headline}
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              {siteConfig.partnershipNote.copy}
            </p>
          </div>

          {/* CTA Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-sm font-mono text-neutral-400">
              {siteConfig.partnershipNote.cta}
            </span>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-all hover:scale-105"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-neutral-500">
            <div>DIRECT FOUNDER ACCESS</div>
            <div>STRICT 2-WEEK SPRINTS</div>
            <div>100% CODE OWNERSHIP</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
