'use client';

import React from 'react';

export function MarqueeSection() {
  const row1Items = [
    'WEB DESIGN',
    'DEVELOPMENT',
    'MOTION',
    'DIGITAL EXPERIENCES',
    'WEB DESIGN',
    'DEVELOPMENT',
    'MOTION',
    'DIGITAL EXPERIENCES',
  ];

  const row2Items = [
    'DIGITAL EXPERIENCES',
    'MOTION',
    'DEVELOPMENT',
    'WEB DESIGN',
    'DIGITAL EXPERIENCES',
    'MOTION',
    'DEVELOPMENT',
    'WEB DESIGN',
  ];

  const repeatedRow1 = [...row1Items, ...row1Items, ...row1Items];
  const repeatedRow2 = [...row2Items, ...row2Items, ...row2Items];

  return (
    <div className="relative py-8 md:py-12 border-t border-b border-white/10 bg-[#050507] overflow-hidden select-none space-y-4 md:space-y-6">
      {/* Side gradient blur masks for cinematic fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#050507] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#050507] to-transparent z-10 pointer-events-none" />

      {/* Row 1: Forward Marquee with Very Large Typography */}
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex items-center space-x-8 sm:space-x-12 shrink-0">
          {repeatedRow1.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-8 sm:space-x-12 shrink-0">
              <span className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.03em] text-white/90 uppercase whitespace-nowrap">
                {item}
              </span>
              <span className="text-xl sm:text-3xl md:text-5xl font-light text-neutral-600 font-serif">
                &times;
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Reverse Direction Marquee with Subtly Muted Styling */}
      <div className="flex overflow-hidden">
        <div className="animate-marquee-reverse flex items-center space-x-8 sm:space-x-12 shrink-0">
          {repeatedRow2.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-8 sm:space-x-12 shrink-0">
              <span className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.03em] text-neutral-500/70 uppercase whitespace-nowrap">
                {item}
              </span>
              <span className="text-xl sm:text-3xl md:text-5xl font-light text-neutral-700 font-serif">
                &times;
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
