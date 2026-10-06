'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowDown, ExternalLink, Activity, Terminal, ShieldCheck, Zap } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export function HomeHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [currentTime, setCurrentTime] = useState('');

  const projects = siteConfig.realProjects;
  const activeProject = projects[activeProjectIdx];

  const impactWords = ['BUSINESSES.', 'BRANDS.', 'ENTERPRISES.', 'REVENUE.', 'FLAGSHIPS.'];
  const [impactIndex, setImpactIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImpactIndex((prev) => (prev + 1) % impactWords.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [impactWords.length]);

  // Live Colombo Time
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Colombo',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Subtle interactive grid canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    let mouseX = width * 0.7;
    let mouseY = height * 0.4;
    let targetX = mouseX;
    let targetY = mouseY;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const spacing = 64;
    const cols = Math.ceil(width / spacing) + 1;
    const rows = Math.ceil(height / spacing) + 1;

    const render = () => {
      mouseX += (targetX - mouseX) * 0.06;
      mouseY += (targetY - mouseY) * 0.06;

      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 0.5;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;

          const dx = x - mouseX;
          const dy = y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 240;

          let alpha = 0.035;
          let cross = 2;

          if (dist < maxDist) {
            const factor = 1 - dist / maxDist;
            alpha = 0.035 + factor * 0.3;
            cross = 2 + factor * 3;

            if (dist < 120) {
              ctx.strokeStyle = `rgba(212, 255, 0, ${(1 - dist / 120) * 0.12})`;
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(mouseX, mouseY);
              ctx.stroke();
            }
          }

          ctx.strokeStyle = dist < maxDist ? `rgba(212, 255, 0, ${alpha})` : `rgba(255, 255, 255, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(x - cross, y);
          ctx.lineTo(x + cross, y);
          ctx.moveTo(x, y - cross);
          ctx.lineTo(x, y + cross);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] lg:h-screen lg:max-h-[1080px] pt-16 sm:pt-18 lg:pt-20 pb-3 lg:pb-3 flex flex-col justify-between overflow-hidden bg-[#08080a] border-b border-white/[0.08]">
      {/* 01: Ambient Canvas Coordinate Field */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-50"
      />

      {/* Hero Master Grid (Asymmetric Split: Monumental Masthead + Living Telemetry) */}
      <div className="relative z-10 max-w-[1520px] mx-auto px-4 sm:px-6 md:px-10 w-full flex-1 flex items-center py-2 sm:py-3 lg:py-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">
          
          {/* Left Column: Monumental Editorial Statement (7 cols) */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4 lg:space-y-3 xl:space-y-4.5">
            
            {/* Architectural Index Tag */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#12131a] border border-white/[0.1] text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-zinc-300 shadow-[0_0_20px_rgba(212,255,0,0.06)] animate-subtle-float"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4ff00] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4ff00]" />
              </span>
              <span className="text-zinc-200 font-bold">APEXGEN // BESPOKE DIGITAL ATELIER</span>
              <span className="text-zinc-600 hidden sm:inline">|</span>
              <span className="text-[#d4ff00] hidden sm:inline tracking-wider">SUB-SECOND EXECUTION</span>
            </motion.div>

            {/* Monumental Kinetic Sculptural Typography */}
            <div className="space-y-2 sm:space-y-2.5 lg:space-y-2 xl:space-y-2.5">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[2.65rem] xl:text-[3.25rem] 2xl:text-[3.85rem] font-black leading-[0.93] tracking-[-0.04em] text-white uppercase select-none">
                {/* Line 01: WE ENGINEER */}
                <span className="block overflow-hidden py-0.5">
                  <span className="inline-flex flex-wrap gap-x-2.5 sm:gap-x-3.5">
                    {['WE', 'ENGINEER'].map((word, i) => (
                      <motion.span
                        key={word}
                        initial={{ y: '120%', opacity: 0, rotateX: 30 }}
                        animate={{ y: '0%', opacity: 1, rotateX: 0 }}
                        transition={{ duration: 0.75, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ y: -3, color: '#d4ff00', transition: { duration: 0.15 } }}
                        className="inline-block cursor-default transition-colors duration-200"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </span>
                </span>

                {/* Line 02: DIGITAL EXPERIENCES */}
                <span className="block overflow-hidden py-0.5">
                  <span className="inline-flex flex-wrap gap-x-2.5 sm:gap-x-3.5 text-white">
                    {['DIGITAL', 'EXPERIENCES'].map((word, i) => (
                      <motion.span
                        key={word}
                        initial={{ y: '120%', opacity: 0, rotateX: 30 }}
                        animate={{ y: '0%', opacity: 1, rotateX: 0 }}
                        transition={{ duration: 0.75, delay: 0.25 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ y: -3, color: '#ffffff', transition: { duration: 0.15 } }}
                        className="inline-block cursor-default transition-colors duration-200"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </span>
                </span>

                {/* Line 03: THAT MOVE + DYNAMIC ROLLING IMPACT WORD */}
                <span className="block overflow-hidden py-0.5">
                  <span className="inline-flex flex-wrap items-baseline gap-x-2.5 sm:gap-x-3.5">
                    {['THAT', 'MOVE'].map((word, i) => (
                      <motion.span
                        key={word}
                        initial={{ y: '120%', opacity: 0, rotateX: 30 }}
                        animate={{ y: '0%', opacity: 1, rotateX: 0 }}
                        transition={{ duration: 0.75, delay: 0.42 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ y: -3, color: '#d4ff00', transition: { duration: 0.15 } }}
                        className="inline-block cursor-default transition-colors duration-200 text-white"
                      >
                        {word}
                      </motion.span>
                    ))}

                    {/* Next-Level 3D Vertical Kinetic Rolling Word Ticker */}
                    <span className="relative inline-block overflow-hidden align-baseline min-w-[200px] sm:min-w-[280px] lg:min-w-[340px] xl:min-w-[400px]">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={impactWords[impactIndex]}
                          initial={{ y: '120%', opacity: 0, filter: 'blur(6px)' }}
                          animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                          exit={{ y: '-120%', opacity: 0, filter: 'blur(6px)' }}
                          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                          className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-[#d4ff00] animate-text-shimmer animate-volt-glow font-black"
                        >
                          {impactWords[impactIndex]}
                        </motion.span>
                      </AnimatePresence>
                    </span>
                  </span>
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-sm lg:text-[13px] xl:text-sm text-zinc-300 font-light max-w-xl leading-relaxed flex items-start gap-2.5"
              >
                <span className="inline-block w-1 h-3.5 bg-[#d4ff00] rounded-full shrink-0 mt-1 animate-pulse" />
                <span>
                  No templates. No slow builders. ApexGen designs and engineers bespoke web flagships, frictionless WhatsApp commerce, and custom reservation systems for ambitious brands in Sri Lanka and worldwide.
                </span>
              </motion.p>
            </div>

            {/* Action Buttons & Leadership Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3 pt-1"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="#contact"
                  className="btn-volt text-xs py-3 px-6 tracking-wider font-mono font-bold flex items-center justify-center gap-2 group"
                >
                  <span>START A PROJECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="#work"
                  className="btn-architectural text-xs py-3 px-6 tracking-wider font-mono flex items-center justify-center gap-2 group"
                >
                  <span>EXPLORE WORK</span>
                  <ArrowDown className="w-3.5 h-3.5 text-[#d4ff00] transition-transform group-hover:translate-y-0.5" />
                </Link>
              </div>

              <div className="text-[10px] sm:text-[11px] font-mono text-zinc-500 flex items-center gap-2 pt-0.5">
                <span>FOUNDER & CREATIVE TECHNOLOGIST:</span>
                <span className="text-zinc-300 font-medium">SUBHASH KETAGODA</span>
                <span>•</span>
                <span>COLOMBO {currentTime && `[${currentTime} IST]`}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Living Telemetry Specimen Console (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Terminal Enclosure */}
            <div className="bg-[#0e0f14] border border-white/[0.12] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.9)] relative">
              
              {/* Terminal Top Masthead */}
              <div className="px-4 py-2.5 bg-[#14161f] border-b border-white/[0.08] flex items-center justify-between text-[11px] sm:text-xs font-mono">
                <div className="flex items-center gap-2 text-zinc-300">
                  <Terminal className="w-3.5 h-3.5 text-[#d4ff00]" />
                  <span className="font-bold">APX-TELEMETRY // LIVE SPECIMEN</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-zinc-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>LATENCY &lt; 0.8s</span>
                </div>
              </div>

              {/* Interactive Specimen Selector Tabs */}
              <div className="grid grid-cols-3 border-b border-white/[0.08] bg-[#0b0c10] text-[10px] sm:text-[11px] font-mono">
                {projects.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setActiveProjectIdx(idx)}
                    className={`py-2 px-2.5 text-center transition-all cursor-pointer truncate border-r last:border-r-0 border-white/[0.08] ${
                      activeProjectIdx === idx
                        ? 'bg-[#14161f] text-[#d4ff00] font-bold shadow-inner'
                        : 'text-zinc-400 hover:text-white hover:bg-white/[0.02]'
                    }`}
                  >
                    0{idx + 1} {p.title.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Active Specimen Preview Showcase */}
              <div className="p-3.5 sm:p-4 lg:p-3.5 xl:p-4 space-y-3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-2.5"
                  >
                    {/* Image / Video Viewport Frame */}
                    <div className="relative aspect-[16/9] max-h-[160px] xl:max-h-[195px] w-full rounded-xl overflow-hidden border border-white/[0.1] bg-[#050507] group">
                      {activeProject.videoUrl ? (
                        <video
                          src={activeProject.videoUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        <Image
                          src={activeProject.heroImage}
                          alt={activeProject.title}
                          fill
                          priority
                          sizes="(max-width: 1024px) 100vw, 480px"
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f14]/80 via-transparent to-transparent pointer-events-none" />

                      {/* Domain pill */}
                      <a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-2.5 left-2.5 z-10 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#08080a]/90 backdrop-blur-md border border-white/[0.15] text-[10px] font-mono text-zinc-300 hover:text-[#d4ff00] transition-colors"
                      >
                        <span>{activeProject.domain}</span>
                        <ExternalLink className="w-2.5 h-2.5 text-[#d4ff00]" />
                      </a>
                    </div>

                    {/* Metadata Readout */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-[#d4ff00] font-bold">{activeProject.title}</span>
                        <span className="text-zinc-400">{activeProject.category}</span>
                      </div>
                      <p className="text-[11px] text-zinc-300 font-light line-clamp-1">
                        {activeProject.tagline || activeProject.description}
                      </p>
                    </div>

                    {/* Deliverables Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {activeProject.technologies?.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-[9px] sm:text-[10px] font-mono text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Specimen Terminal Footer */}
                <div className="pt-2.5 border-t border-white/[0.08] flex items-center justify-between text-[10px] sm:text-[11px] font-mono">
                  <span className="text-zinc-500">PRODUCTION VERIFIED</span>
                  <Link
                    href="#work"
                    className="text-[#d4ff00] hover:underline flex items-center gap-1 font-bold"
                  >
                    <span>VIEW CASE STUDY →</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Integrated Architectural Datum Bar */}
      <div className="relative z-10 max-w-[1520px] mx-auto px-4 sm:px-6 md:px-10 w-full pt-1 pb-1">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.08] border border-white/[0.08] rounded-xl overflow-hidden backdrop-blur-md">
          <div className="bg-[#0e0f14]/90 p-2.5 sm:p-3 lg:py-2 lg:px-3.5 xl:py-2.5 xl:px-4 space-y-0.5">
            <div className="text-[9px] sm:text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
              SPECIMEN 01
            </div>
            <div className="text-sm sm:text-base lg:text-base xl:text-lg font-black text-white font-mono">
              CARGO PIZZA
            </div>
            <div className="text-[10px] sm:text-[11px] text-zinc-400 truncate">
              Handcrafted woodfired pizza & takeaway
            </div>
          </div>

          <div className="bg-[#0e0f14]/90 p-2.5 sm:p-3 lg:py-2 lg:px-3.5 xl:py-2.5 xl:px-4 space-y-0.5">
            <div className="text-[9px] sm:text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
              SPECIMEN 02
            </div>
            <div className="text-sm sm:text-base lg:text-base xl:text-lg font-black text-white font-mono">
              69 STUDIO
            </div>
            <div className="text-[10px] sm:text-[11px] text-zinc-400 truncate">
              Creative tech & bespoke POS solutions
            </div>
          </div>

          <div className="bg-[#0e0f14]/90 p-2.5 sm:p-3 lg:py-2 lg:px-3.5 xl:py-2.5 xl:px-4 space-y-0.5">
            <div className="text-[9px] sm:text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
              SPECIMEN 03
            </div>
            <div className="text-sm sm:text-base lg:text-base xl:text-lg font-black text-white font-mono">
              DINEPRO
            </div>
            <div className="text-[10px] sm:text-[11px] text-zinc-400 truncate">
              Hospitality consulting & advisory
            </div>
          </div>

          <div className="bg-[#0e0f14]/90 p-2.5 sm:p-3 lg:py-2 lg:px-3.5 xl:py-2.5 xl:px-4 space-y-0.5">
            <div className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#d4ff00] uppercase">
              COMMERCIAL BASIS
            </div>
            <div className="text-sm sm:text-base lg:text-base xl:text-lg font-black text-white font-mono">
              LKR 49,900+
            </div>
            <div className="text-[10px] sm:text-[11px] text-zinc-400 truncate">
              Transparent, scope-defined pricing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
