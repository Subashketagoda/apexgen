'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export function HomeIntroduction() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'end 0.3'],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], [40, -30]);
  const visualRotate = useTransform(scrollYProgress, [0, 1], [-4, 6]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 overflow-hidden section-about-bg"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[780px] h-[780px] rounded-full bg-[#8B5CF6]/10 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 studio-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7 space-y-8">
          <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-zinc-400">Studio introduction</p>
          <h2 className="text-4xl sm:text-6xl lg:text-[4.6rem] font-black uppercase tracking-[-0.045em] leading-[0.92] text-white">
            Your business deserves more than just a website.
          </h2>
          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-2xl">
            ApexGen combines design, development, and digital strategy to create useful online experiences — flagships that look premium, load fast, and help real businesses get found, booked, and remembered.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Custom visual direction', 'Responsive engineering', 'SEO-ready foundations', 'Clear communication'].map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-mono tracking-wider text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <motion.div style={{ y: visualY, rotate: visualRotate }} className="lg:col-span-5 relative">
          <div className="absolute inset-8 rounded-full bg-[#3B82F6]/25 blur-[70px]" />
          <div className="relative aspect-square max-w-[520px] mx-auto">
            <Image
              src="/images/agency-hero-chrome.jpg"
              alt="Abstract chrome sculpture representing ApexGen digital craft"
              fill
              sizes="(max-width: 1024px) 90vw, 520px"
              className="object-contain drop-shadow-[0_30px_80px_rgba(59,130,246,0.28)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
