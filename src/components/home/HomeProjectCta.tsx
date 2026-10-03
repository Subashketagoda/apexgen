'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { trackStartProjectClick, trackWhatsAppClick } from '@/lib/analytics';

export function HomeProjectCta() {
  return (
    <section className="py-28 sm:py-36 md:py-44 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="p-10 sm:p-20 rounded-3xl bg-neutral-950 border border-[#FF5E00]/40 text-center space-y-8 relative overflow-hidden shadow-[0_10px_60px_rgba(255,94,0,0.1)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FF5E00]/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-[#FF5E00]/30 bg-[#FF5E00]/10 text-xs font-mono text-[#FF7A1A] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E00] animate-pulse" />
            <span>COMMISSION APEXGEN</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[-0.04em] text-white uppercase font-mono leading-[1.0]">
            LET&apos;S BUILD SOMETHING EXTRAORDINARY.
          </h2>

          <p className="text-base sm:text-xl text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
            Ready to replace your commoditized website with a high-end digital flagship that commands respect and drives revenue?
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/start-a-project"
              onClick={() => trackStartProjectClick('home_bottom_cta')}
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#FF5E00] text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#FF7A1A] transition-all shadow-[0_0_30px_rgba(255,94,0,0.4)] flex items-center justify-center space-x-2"
            >
              <span>LAUNCH PROJECT BRIEF</span>
              <ArrowUpRight className="w-4 h-4 text-black" />
            </Link>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                'Hello ApexGen Studio, I would like to discuss building a premium website for my business.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('home_bottom_cta')}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-mono text-xs uppercase tracking-wider hover:bg-white/10 hover:border-white transition-all flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4 text-[#FF5E00]" />
              <span>DIRECT WHATSAPP INQUIRY</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
