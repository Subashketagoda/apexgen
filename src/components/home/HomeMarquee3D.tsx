'use client';

import React from 'react';

export function HomeMarquee3D() {
  const itemsRow1 = [
    'WEB DESIGN',
    'NEXT.JS ENGINEERING',
    'WHATSAPP COMMERCE',
    'BESPOKE BOOKING SYSTEMS',
    'AUTOMATION',
    'TECHNICAL SEO',
    'SUB-SECOND SPEED',
  ];

  const itemsRow2 = [
    'ZERO TEMPLATES',
    'HANDCRAFTED IN SRI LANKA',
    'SERVING BRANDS GLOBALLY',
    'ARCHITECTURAL PRECISION',
    'LKR PRICING TRANSPARENCY',
    'SUBHASH KETAGODA',
  ];

  return (
    <section className="relative py-8 bg-[#08080a] border-b border-white/[0.08] overflow-hidden select-none">
      {/* Subtle background architectural dots */}
      <div className="absolute inset-0 architectural-dots opacity-20 pointer-events-none" />

      <div className="space-y-4">
        {/* Row 1 — Moving Left */}
        <div className="flex overflow-hidden whitespace-nowrap mask-gradient">
          <div className="flex shrink-0 animate-marquee items-center gap-8 py-1">
            {[...itemsRow1, ...itemsRow1].map((text, idx) => (
              <div key={idx} className="flex items-center gap-8">
                <span className="text-xl sm:text-2xl font-black font-mono tracking-wider text-white">
                  {text}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#d4ff00]" />
              </div>
            ))}
          </div>
          <div className="flex shrink-0 animate-marquee items-center gap-8 py-1" aria-hidden="true">
            {[...itemsRow1, ...itemsRow1].map((text, idx) => (
              <div key={`dup-${idx}`} className="flex items-center gap-8">
                <span className="text-xl sm:text-2xl font-black font-mono tracking-wider text-white">
                  {text}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#d4ff00]" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — Moving Right */}
        <div className="flex overflow-hidden whitespace-nowrap mask-gradient border-t border-white/[0.05] pt-3">
          <div className="flex shrink-0 animate-marquee-reverse items-center gap-8 py-1">
            {[...itemsRow2, ...itemsRow2].map((text, idx) => (
              <div key={idx} className="flex items-center gap-8">
                <span className="text-xs sm:text-sm font-mono tracking-[0.2em] text-zinc-400 uppercase">
                  {text}
                </span>
                <span className="text-zinc-600 font-mono">+</span>
              </div>
            ))}
          </div>
          <div className="flex shrink-0 animate-marquee-reverse items-center gap-8 py-1" aria-hidden="true">
            {[...itemsRow2, ...itemsRow2].map((text, idx) => (
              <div key={`dup-${idx}`} className="flex items-center gap-8">
                <span className="text-xs sm:text-sm font-mono tracking-[0.2em] text-zinc-400 uppercase">
                  {text}
                </span>
                <span className="text-zinc-600 font-mono">+</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
