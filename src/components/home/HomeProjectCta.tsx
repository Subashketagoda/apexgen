'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/site';
import { trackStartProjectClick, trackWhatsAppClick } from '@/lib/analytics';
import { ChromeStar } from '@/components/ui/ChromeStar';

export function HomeProjectCta() {
  return (
    <section className="py-28 sm:py-36 lg:py-48 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08] relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="p-10 sm:p-20 lg:p-24 rounded-3xl studio-card-elevated border-white/[0.18] text-center relative overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.9)]"
      >
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-white/[0.03] blur-[150px] rounded-full pointer-events-none" />

        {/* Chrome Star Floating Accent */}
        <div className="absolute -top-6 right-8 opacity-40 pointer-events-none hidden md:block">
          <ChromeStar size={110} delay={0.2} />
        </div>
        <div className="absolute bottom-4 left-6 opacity-30 pointer-events-none hidden md:block">
          <ChromeStar size={80} delay={0.5} reverse />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono tracking-widest text-zinc-300 uppercase backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>COMMENCE A PROJECT</span>
          </div>

          {/* Huge Editorial Headline */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[-0.04em] text-white uppercase leading-[0.98]">
            Let&apos;s build <br />
            <span className="text-gradient-silver font-normal">something</span> <br />
            <span className="text-white font-medium">exceptional.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-zinc-400 font-normal max-w-xl mx-auto leading-relaxed">
            Have a project in mind? Let&apos;s turn your idea into a premium digital experience that elevates your business.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <Link
              href="/start-a-project"
              onClick={() => trackStartProjectClick('home_bottom_cta')}
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-white text-black text-xs font-medium font-mono uppercase tracking-wider transition-all duration-300 hover:bg-zinc-200 hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.25)] flex items-center justify-center space-x-2.5 active:scale-95"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </Link>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                'Hello ApexGen Studio, I have a project in mind and would like to discuss building a website.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('home_bottom_cta')}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/[0.14] bg-white/[0.04] text-white font-mono text-xs uppercase tracking-wider transition-all duration-300 hover:bg-white/[0.1] hover:border-white/[0.28] hover:scale-[1.02] active:scale-95 flex items-center justify-center space-x-2.5 backdrop-blur-md"
            >
              <MessageCircle className="w-4 h-4 text-zinc-300" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="pt-2 text-[11px] font-mono text-zinc-400">
            Average response time: &lt; 2 hours during studio business hours
          </div>
        </div>
      </motion.div>
    </section>
  );
}
