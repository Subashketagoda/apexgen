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

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-32 sm:py-44 md:py-52 border-b border-white/10 bg-[#050507] overflow-hidden select-none"
    >
      {/* Subtle Mouse-Follow Ambient Glow */}
      <div
        className="pointer-events-none absolute w-[550px] h-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.04] blur-[140px] transition-all duration-300 ease-out"
        style={{ left: mousePos.x || '50%', top: mousePos.y || '50%' }}
        aria-hidden="true"
      />

      {/* Cybernetic background grid line */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Eyebrow */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono tracking-widest text-neutral-400 uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>COMMISSIONS OPEN &bull; Q4 2026</span>
          </motion.div>

          {/* Exact Headline Required */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light tracking-[-0.04em] text-white leading-[1.0] uppercase">
            Your next digital experience starts here.
          </h2>

          {/* Exact Supporting Text Required */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Tell us what you&apos;re building. We&apos;ll turn the idea into something people remember.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          >
            {/* Primary CTA */}
            <MagneticButton as="div" strength={0.25} ariaLabel="Start a project">
              <Link
                href="/#contact"
                className="group inline-flex items-center space-x-3 px-9 py-4 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_35px_rgba(255,255,255,0.25)] active:scale-95 cursor-pointer"
              >
                <span>Start a Project →</span>
              </Link>
            </MagneticButton>

            {/* Secondary CTA: WhatsApp */}
            <MagneticButton as="div" strength={0.2} ariaLabel="WhatsApp us">
              <a
                href={formatWhatsAppUrl(
                  siteConfig.contact.whatsappNumber,
                  "Hello ApexGen, let's build something people remember."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-2.5 px-8 py-4 rounded-full border border-white/15 bg-white/[0.03] text-white font-mono text-xs uppercase tracking-wider hover:bg-white/10 hover:border-white/35 transition-all duration-300 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-cyan-400" />
                <span>WhatsApp Us</span>
              </a>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
