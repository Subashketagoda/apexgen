'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Activity, CheckCircle2 } from 'lucide-react';
import { trackStartProjectClick } from '@/lib/analytics';
import { ChromeStar } from '@/components/ui/ChromeStar';
import { projectsData } from '@/data/projects';

export function HomeHero() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 20,
        y: (e.clientY / innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const activeProject = projectsData[activeProjectIdx] || projectsData[0];

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen pt-32 sm:pt-36 lg:pt-44 pb-20 flex flex-col justify-between overflow-hidden bg-[#040406]">
      {/* Background Architectural Grid & Subtle Radial Ambient Bloom */}
      <div className="absolute inset-0 studio-grid pointer-events-none opacity-40" />
      <div className="hero-atmosphere pointer-events-none" />
      <div className="hero-vignette pointer-events-none" />

      {/* Subtle top spotlight flare */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-white/[0.06] to-transparent blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Eyebrow, Large Editorial Headline, Description, CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-7 space-y-7"
          >
            {/* Small Eyebrow Label with subtle glowing status dot */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono tracking-wider text-zinc-300 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span className="text-zinc-200">APEXGEN STUDIO</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-400">NEXT-GEN DIGITAL CRAFT</span>
            </div>

            {/* Huge Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-[82px] font-light tracking-[-0.035em] text-white leading-[1.02] uppercase">
              We build digital <br />
              <span className="font-normal text-white">experiences that</span> <br />
              <span className="text-gradient-silver font-medium">move businesses.</span>
            </h1>

            {/* Short Premium Description */}
            <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-xl font-normal leading-relaxed">
              We engineer bespoke digital flagships, high-conversion web platforms, and authoritative digital experiences that turn ambitious businesses into market leaders.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5">
              <Link
                href="/start-a-project"
                onClick={() => trackStartProjectClick('hero_primary')}
                className="group inline-flex items-center space-x-2.5 px-8 py-4 rounded-full bg-white text-black text-sm font-medium tracking-wide transition-all duration-300 hover:bg-zinc-200 hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.25)] active:scale-95"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/work"
                className="group inline-flex items-center space-x-2.5 px-8 py-4 rounded-full bg-white/[0.05] border border-white/[0.12] text-white text-sm font-medium tracking-wide backdrop-blur-md transition-all duration-300 hover:bg-white/[0.1] hover:border-white/[0.25] hover:scale-[1.02] active:scale-95"
              >
                <span>View Our Work</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Trust Telemetry micro-strip */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-zinc-400 font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-300" />
                <span>Sub-Second Performance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-300" />
                <span>Zero-Commission Commerce</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-300" />
                <span>Next.js 16 Architecture</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Interactive Abstract Digital Visual with Chrome 3D Stars & Floating Glass UI Panels */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-5 relative min-h-[460px] sm:min-h-[540px] flex items-center justify-center"
            style={{
              transform: `translate3d(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px, 0)`,
            }}
          >
            {/* Ambient Chrome Flare Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] to-transparent rounded-3xl blur-2xl pointer-events-none" />

            {/* Iconic 3D Metallic Chrome Stars from Reference Image */}
            <div className="absolute -top-6 right-4 z-20">
              <ChromeStar size={150} delay={0.3} />
            </div>
            <div className="absolute top-28 right-36 z-10 opacity-70">
              <ChromeStar size={75} delay={0.6} reverse />
            </div>

            {/* Floating Glass Panel 1: Live Core Web Vitals & Performance Telemetry */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-4 left-0 sm:-left-4 z-30 w-64 p-4 rounded-2xl studio-card-elevated"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  <span className="text-[11px] font-mono tracking-wider text-zinc-300 uppercase">
                    Core Web Vitals
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  99/100
                </span>
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <div>
                  <div className="text-2xl font-light text-white tracking-tight">0.38s</div>
                  <div className="text-[10px] font-mono text-zinc-400">First Contentful Paint</div>
                </div>
                {/* SVG Mini Waveform Graph */}
                <div className="w-20 h-8">
                  <svg viewBox="0 0 80 30" className="w-full h-full stroke-white/80 fill-none">
                    <path
                      d="M0 25 Q 20 5, 40 18 T 80 6"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="80" cy="6" r="3" fill="#ffffff" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Floating Glass Panel 2: Live Project Screenshot Preview (Cargo Pizza / 69 Studio) */}
            <motion.div
              className="relative z-10 w-full max-w-[380px] sm:max-w-[420px] rounded-2xl overflow-hidden studio-card border border-white/[0.14] shadow-[0_30px_70px_rgba(0,0,0,0.9)] transition-all duration-500"
              style={{
                transform: `rotateY(${mousePos.x * 0.4}deg) rotateX(${-mousePos.y * 0.4}deg)`,
              }}
            >
              {/* Card Header */}
              <div className="px-4 py-3 bg-white/[0.03] border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="ml-2 text-[11px] font-mono text-zinc-400">
                    {activeProject.domain}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                    {activeProject.client}
                  </span>
                </div>
              </div>

              {/* Real Project Image Preview */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60 group">
                <Image
                  src={activeProject.heroImage || activeProject.thumbnail}
                  alt={activeProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Project Badge overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-white font-mono text-[11px] border border-white/10">
                    {activeProject.title}
                  </span>
                  <Link
                    href={`/work/${activeProject.slug}`}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-white text-black font-medium text-[11px] hover:bg-zinc-200 transition-colors"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Project Quick Selector Tabs */}
              <div className="p-3 bg-[#0a0a0f] border-t border-white/[0.08] flex items-center justify-between text-xs">
                <span className="text-[11px] text-zinc-400 font-mono">Verified Case Study</span>
                <div className="flex items-center space-x-1.5">
                  {projectsData.slice(0, 3).map((p, idx) => (
                    <button
                      key={p.id}
                      onClick={() => setActiveProjectIdx(idx)}
                      className={`px-2.5 py-1 rounded-md text-[10px] font-mono transition-all cursor-pointer ${
                        activeProjectIdx === idx
                          ? 'bg-white text-black font-semibold'
                          : 'bg-white/[0.05] text-zinc-400 hover:text-white'
                      }`}
                    >
                      0{idx + 1}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Glass Panel 3: Google Search Console / High-Conversion Metric Card */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-4 right-0 sm:-right-6 z-30 p-3.5 rounded-2xl studio-card-elevated max-w-[240px]"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-white/[0.08] border border-white/[0.12] flex items-center justify-center shrink-0">
                  <Activity className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-medium text-white">Direct WhatsApp Inquiries</div>
                  <div className="text-[10px] font-mono text-zinc-400">Zero-Friction Conversion</div>
                </div>
              </div>
              <div className="mt-2.5 pt-2 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono">
                <span className="text-zinc-500">Platform Cut</span>
                <span className="text-emerald-400 font-semibold">0% Commission</span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
