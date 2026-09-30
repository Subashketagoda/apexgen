'use client';

import React from 'react';

export function MarqueeSection() {
  const items = [
    'DESIGN',
    'DEVELOP',
    'LAUNCH',
    'GROW',
    'DESIGN',
    'DEVELOP',
    'LAUNCH',
    'GROW',
  ];

  const repeated = [...items, ...items, ...items];

  return (
    <div className="relative py-8 md:py-12 border-t border-b border-white/10 bg-[#050505] overflow-hidden select-none">
      {/* Side gradient blur masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      {/* Infinite Elegant Marquee */}
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex items-center space-x-8 sm:space-x-14 shrink-0">
          {repeated.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-8 sm:space-x-14 shrink-0">
              <span className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.03em] text-[#F5F5F5] uppercase whitespace-nowrap">
                {item}
              </span>
              <span className="text-xl sm:text-3xl md:text-5xl font-light text-neutral-600 font-serif">
                &mdash;
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
