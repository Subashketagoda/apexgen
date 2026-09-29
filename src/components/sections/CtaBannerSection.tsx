'use client';

import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { formatWhatsAppUrl } from '@/lib/utils';
import { MagneticButton } from '@/components/animation/MagneticButton';
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

  const ctaLines = [
    'YOUR BUSINESS',
    'DESERVES A',
    'BETTER WEBSITE.',
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-32 sm:py-44 md:py-56 border-b border-white/10 bg-[#050507] overflow-hidden select-none"
    >
      {/* Subtle Mouse-Follow Lighting */}
      <div
        className="pointer-events-none absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-[120px] transition-all duration-300 ease-out"
        style={{ left: mousePos.x || '50%', top: mousePos.y || '50%' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Eyebrow */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono tracking-widest text-neutral-400 uppercase"
          >
            <span>ELEVATE YOUR BRAND</span>
          </motion.div>

          {/* Huge Typography Headline */}
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[6.5rem] font-light tracking-[-0.04em] text-white leading-[0.98] uppercase">
            {ctaLines.map((line, idx) => (
              <span key={idx} className="block overflow-hidden py-1">
                <motion.span
                  className="block will-change-transform"
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { y: '105%', opacity: 0 }
                  }
                  whileInView={{ y: '0%', opacity: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.85,
                    delay: idx * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h2>

          {/* Small Text */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-2xl text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Let&apos;s build something people remember.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          >
            {/* Primary CTA */}
            <MagneticButton as="div" strength={0.25} ariaLabel="Start a project">
              <Link
                href="/#contact"
                className="group inline-flex items-center space-x-3 px-9 py-4.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_35px_rgba(255,255,255,0.3)] active:scale-95 cursor-pointer"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </MagneticButton>

            {/* Secondary CTA: WHATSAPP US → */}
            <MagneticButton
              as="div"
              strength={0.2}
              ariaLabel="WhatsApp us"
            >
              <a
                href={formatWhatsAppUrl(
                  siteConfig.contact.whatsappNumber,
                  "Hello ApexGen, let's build something people remember."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-2.5 px-8 py-4.5 rounded-full border border-white/20 bg-white/5 text-white font-mono text-xs uppercase tracking-wider hover:bg-white/10 hover:border-white/40 transition-all duration-300 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>WHATSAPP US &rarr;</span>
              </a>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
