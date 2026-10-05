'use client';

import React from 'react';

export function HomeMarquee() {
  const techStack = [
    { label: 'Next.js 16', detail: 'Edge Architecture' },
    { label: 'React 19', detail: 'Modern Foundations' },
    { label: 'Tailwind CSS', detail: 'Precision Design' },
    { label: 'TypeScript', detail: 'Type-Safe Logic' },
    { label: 'Framer Motion', detail: 'Fluid Animation' },
    { label: 'Three.js', detail: '3D Digital Spatial' },
    { label: 'Vercel Edge', detail: 'Sub-Second CDN' },
    { label: 'Figma Studio', detail: 'Bespoke UI/UX' },
    { label: 'Google Search Console', detail: 'Verified Indexing' },
    { label: 'Schema.org', detail: 'Rich JSON-LD' },
  ];

  return (
    <div className="relative border-y border-white/[0.08] bg-[#07070a] overflow-hidden py-4 select-none">
      <div className="flex w-max animate-marquee space-x-12 items-center">
        {[...techStack, ...techStack, ...techStack].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-10 shrink-0">
            <div className="flex items-center space-x-3 text-zinc-400 hover:text-white transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span className="text-xs sm:text-[13px] font-mono tracking-wider uppercase text-zinc-300 font-medium">
                {item.label}
              </span>
              <span className="text-[11px] font-mono tracking-normal text-zinc-400 lowercase">
                / {item.detail}
              </span>
            </div>
            <span className="text-zinc-700 text-xs font-mono">✦</span>
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
          animation: marquee 38s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
