'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useSpring } from 'framer-motion';
import { ArrowRight, MessageSquare, Mail, MapPin, Globe, Sparkles } from 'lucide-react';
import { trackStartProjectClick } from '@/lib/analytics';

export function HomeProjectCta() {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const springX = useSpring(50, { damping: 30, stiffness: 200 });
  const springY = useSpring(50, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
      const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
      springX.set(xPercent);
      springY.set(yPercent);
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener('mousemove', handleMouseMove);
      return () => el.removeEventListener('mousemove', handleMouseMove);
    }
  }, [springX, springY]);

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative min-h-screen py-32 sm:py-48 px-4 sm:px-8 md:px-16 flex flex-col justify-between overflow-hidden bg-[#050507] section-contact-bg border-t border-white/[0.08]"
    >
      {/* Interactive Cursor-Tracking Radial Lighting */}
      <motion.div
        style={{
          left: springX,
          top: springY,
        }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full bg-gradient-to-tr from-[#3B82F6]/15 via-[#080B18] to-[#8B5CF6]/10 blur-[140px] pointer-events-none"
      />

      {/* Giant Slowly Rotating Metallic 3D Geometric Structure in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-40">
        <div className="w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] rounded-full border border-white/[0.08] flex items-center justify-center animate-spin-slow">
          <div
            className="w-[480px] h-[480px] sm:w-[720px] sm:h-[720px] rounded-full border border-[#3B82F6]/25 border-dashed animate-spin-slow"
            style={{ animationDirection: 'reverse', animationDuration: '40s' }}
          />
          <div className="absolute w-[360px] h-[360px] sm:w-[540px] sm:h-[540px] rounded-full border border-[#8B5CF6]/20" />
        </div>
      </div>

      {/* Top Header Label */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between pb-8 border-b border-white/[0.08] text-xs font-mono text-[#8B8B96]">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          <span className="text-[#F5F5F7] uppercase">07 / INITIATE COMMISSION</span>
        </div>
        <div className="hidden sm:block text-zinc-600">
          GLOBAL REMOTE // COLOMBO HQ
        </div>
      </div>

      {/* Monumental Statement: LET'S BUILD SOMETHING EXCEPTIONAL. */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-12 sm:my-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2 sm:space-y-4"
        >
          <div className="text-5xl sm:text-7xl md:text-9xl lg:text-[9.5vw] font-black uppercase tracking-tight leading-[0.88] text-white">
            <span className="block text-[#8B8B96] hover:text-[#F5F5F7] transition-colors">
              LET&apos;S BUILD
            </span>
            <span className="block bg-gradient-to-r from-[#F5F5F7] via-[#C084FC] to-[#3B82F6] bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(59,130,246,0.35)]">
              SOMETHING EXCEPTIONAL.
            </span>
          </div>

          <p className="text-lg sm:text-2xl text-[#8B8B96] font-light max-w-2xl pt-4">
            Have an ambitious digital vision? Let&apos;s engineer an unforgettable experience that scales your business.
          </p>
        </motion.div>

        {/* Portal-Like CTA Buttons */}
        <div className="mt-12 sm:mt-16 flex flex-wrap items-center gap-6">
          <Link
            href="/start-a-project"
            onClick={() => trackStartProjectClick('final_cta')}
            className="group relative inline-flex items-center justify-center px-10 py-5 rounded-full btn-cta-primary text-xs sm:text-sm font-mono font-bold tracking-widest uppercase transition-all duration-500 overflow-hidden shadow-[0_0_45px_rgba(139,92,246,0.4)] hover:scale-105"
          >
            <span className="relative z-10 flex items-center space-x-3 text-white">
              <span>START A PROJECT</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </span>
          </Link>

          <a
            href="https://wa.me/94789656969"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-5 rounded-full btn-physical text-xs sm:text-sm font-mono tracking-wider text-zinc-300 hover:text-white transition-all hover:scale-105"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WHATSAPP // +94 78 965 6969</span>
          </a>

          <a
            href="mailto:contact@apexgen.website"
            className="inline-flex items-center space-x-3 px-8 py-5 rounded-full btn-physical text-xs sm:text-sm font-mono tracking-wider text-zinc-300 hover:text-white transition-all hover:scale-105"
          >
            <Mail className="w-4 h-4 text-sky-400" />
            <span>EMAIL // CONTACT@APEXGEN.WEBSITE</span>
          </a>
        </div>
      </div>

      {/* Bottom Technical Grid Strip */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-10 border-t border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between text-xs font-mono text-zinc-500 gap-4">
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-1.5 text-zinc-400">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            COLOMBO, SRI LANKA
          </span>
          <span className="flex items-center gap-1.5 text-zinc-400">
            <Globe className="w-3.5 h-3.5 text-indigo-400" />
            WORLDWIDE EDGE DEPLOYMENT
          </span>
        </div>
        <div>AVAILABILITY: ACCEPTING Q2 / Q3 COMMISSIONS</div>
      </div>
    </section>
  );
}
