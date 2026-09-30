'use client';

import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MagneticButton } from '@/components/animation/MagneticButton';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function CtaBannerSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const lines = [
    "LET'S BUILD",
    'SOMETHING',
    'IMPOSSIBLE',
    'TO IGNORE.',
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] flex flex-col justify-center items-center py-32 sm:py-44 border-b border-white/10 bg-[#050505] overflow-hidden select-none"
    >
      {/* Subtle Mouse-Follow Glow in deep near-black */}
      <div
        className="pointer-events-none absolute w-[650px] h-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.035] blur-[150px] transition-all duration-300 ease-out"
        style={{ left: mousePos.x || '50%', top: mousePos.y || '50%' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 text-center w-full">
        <div className="max-w-5xl mx-auto space-y-10 sm:space-y-12">
          {/* Eyebrow */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono tracking-widest text-[#8A8A8A] uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>DIRECT INITIATION</span>
          </motion.div>

          {/* Huge Monolithic Typography: LET'S BUILD SOMETHING IMPOSSIBLE TO IGNORE. */}
          <h2 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-light tracking-[-0.04em] text-[#F5F5F5] leading-[0.92] uppercase">
            {lines.map((line, idx) => (
              <span key={idx} className="block overflow-hidden py-0.5">
                <motion.span
                  className={`block will-change-transform ${
                    idx === 2 ? 'text-gradient-iridescent font-light' : ''
                  }`}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { y: '105%', opacity: 0 }
                  }
                  whileInView={{ y: '0%', opacity: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.85,
                    delay: idx * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h2>

          {/* Small Text */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-1 text-base sm:text-xl text-[#8A8A8A] font-light max-w-lg mx-auto"
          >
            <p>Have an idea?</p>
            <p className="text-neutral-300">Let&apos;s turn it into a digital experience.</p>
          </motion.div>

          {/* Magnetic CTA Button with Subtle Glow */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="pt-6 flex justify-center"
          >
            <MagneticButton as="div" strength={0.3} ariaLabel="Start a project">
              <Link
                href="/#contact"
                className="group relative inline-flex items-center space-x-3 px-10 py-5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-100 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.35)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)] active:scale-95 cursor-pointer"
              >
                <span className="relative z-10">START A PROJECT →</span>
                <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
