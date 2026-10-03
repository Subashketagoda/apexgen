'use client';

import React from 'react';

export function HomeMarquee() {
  const items = [
    'BESPOKE FIGMA UI/UX',
    'NEXT.JS 15 EDGE SPEED',
    'DIRECT WHATSAPP COMMERCE',
    'AUTOMATED BOOKING ENGINES',
    'SUB-SECOND CORE WEB VITALS',
    'ZERO RECYCLED TEMPLATES',
    'SRI LANKA & INTERNATIONAL FLAGSHIPS',
    'TECHNICAL SEO AUTHORITY',
    'SUBHASH KETAGODA FOUNDER CRAFT',
    '100% SOURCE CODE OWNERSHIP',
  ];

  return (
    <div className="relative border-y border-white/10 bg-[#0A0A0D] overflow-hidden py-4 sm:py-5 select-none">
      {/* Background ambient gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/10 via-transparent to-[#FF6B35]/10 pointer-events-none opacity-40" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee space-x-8 items-center">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center space-x-6 shrink-0">
            <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-white/90 uppercase font-semibold flex items-center space-x-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] animate-pulse" />
              <span>{text}</span>
            </span>
            <span className="text-[#FF6B35]/40 text-xs font-mono">&bull;</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
