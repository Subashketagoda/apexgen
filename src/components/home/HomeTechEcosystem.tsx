'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import { Cpu, Terminal, ShieldCheck, Zap } from 'lucide-react';

interface TechItem {
  name: string;
  category: string;
  depth: number; // 1 to 3
  top: string;
  left: string;
  spec: string;
  accent: string;
}

export function HomeTechEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(0, springConfig);
  const smoothY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      smoothX.set(x);
      smoothY.set(y);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, [smoothX, smoothY]);

  const technologies: TechItem[] = [
    {
      name: 'NEXT.JS 16',
      category: 'APP ROUTER / EDGE',
      depth: 3,
      top: '18%',
      left: '12%',
      spec: 'TURBOPACK • SSR',
      accent: 'border-white/30 text-white shadow-[0_0_30px_rgba(255,255,255,0.15)]',
    },
    {
      name: 'REACT 19',
      category: 'SPATIAL CORE',
      depth: 2,
      top: '24%',
      left: '68%',
      spec: 'SERVER ACTIONS • CONCURRENT',
      accent: 'border-sky-500/40 text-sky-300 shadow-[0_0_30px_rgba(56,189,248,0.2)]',
    },
    {
      name: 'TYPESCRIPT',
      category: 'RIGOROUS TYPING',
      depth: 1,
      top: '52%',
      left: '18%',
      spec: 'STRICT NULL • ZERO ANY',
      accent: 'border-blue-500/40 text-blue-300 shadow-[0_0_30px_rgba(59,130,246,0.2)]',
    },
    {
      name: 'TAILWIND CSS',
      category: 'DESIGN ATOMS',
      depth: 2,
      top: '68%',
      left: '60%',
      spec: 'JIT ENGINE • ARBITRARY VARS',
      accent: 'border-cyan-500/40 text-cyan-300 shadow-[0_0_30px_rgba(6,182,212,0.2)]',
    },
    {
      name: 'NODE.JS',
      category: 'RUNTIME INFRA',
      depth: 1,
      top: '78%',
      left: '26%',
      spec: 'HIGH-CONCURRENCY ASYNC',
      accent: 'border-emerald-500/40 text-emerald-300 shadow-[0_0_30px_rgba(16,185,129,0.2)]',
    },
    {
      name: 'VERCEL EDGE',
      category: 'GLOBAL DISTRIBUTION',
      depth: 3,
      top: '38%',
      left: '42%',
      spec: 'SUB-50MS WORLDWIDE',
      accent: 'border-white/50 text-white shadow-[0_0_40px_rgba(255,255,255,0.25)]',
    },
    {
      name: 'FIREBASE',
      category: 'AUTH & REALTIME',
      depth: 2,
      top: '12%',
      left: '45%',
      spec: 'SECURE DATA RULES',
      accent: 'border-amber-500/40 text-amber-300 shadow-[0_0_30px_rgba(245,158,11,0.2)]',
    },
    {
      name: 'SUPABASE',
      category: 'POSTGRESQL CLOUD',
      depth: 1,
      top: '58%',
      left: '78%',
      spec: 'RLS ROW SECURITY',
      accent: 'border-emerald-400/40 text-emerald-200 shadow-[0_0_30px_rgba(52,211,153,0.2)]',
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[95vh] py-32 px-6 sm:px-12 md:px-20 overflow-hidden bg-[#050507] border-b border-white/[0.06] flex flex-col justify-between"
    >
      {/* Background depth layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.07)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-white/[0.08] gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono tracking-widest text-[#8B8B96] uppercase">
            <Cpu className="w-3.5 h-3.5 text-[#22D3EE]" />
            <span>05 / ARCHITECTURAL STACK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F5F5F7]">
            SPATIAL TECH <br />
            <span className="text-gradient-silver">ECOSYSTEM.</span>
          </h2>
        </div>
        <p className="max-w-md text-xs sm:text-sm text-[#8B8B96] font-mono leading-relaxed">
          [ZERO TEMPLATE DEPENDENCY] • Pure enterprise-grade open foundations engineered for infinite scalability, bulletproof security, and sub-second execution.
        </p>
      </div>

      {/* Spatial 3D Floating Field */}
      <div className="relative w-full h-[620px] sm:h-[680px] my-8 perspective-1000 overflow-hidden">
        {technologies.map((tech, idx) => {
          // Multiply mouse offset by depth factor for rich 3D parallax
          return (
            <motion.div
              key={tech.name}
              style={{
                top: tech.top,
                left: tech.left,
                x: useSpring(smoothX, { damping: 20 + tech.depth * 5 }).get() * tech.depth * 25,
                y: useSpring(smoothY, { damping: 20 + tech.depth * 5 }).get() * tech.depth * 25,
              }}
              whileHover={{ scale: 1.1, zIndex: 40 }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 p-5 sm:p-6 rounded-2xl bg-[#0B0B10]/90 backdrop-blur-xl border ${tech.accent} cursor-pointer transition-all duration-300 group z-${tech.depth * 10}`}
            >
              <div className="flex items-center space-x-3 pb-2 border-b border-white/[0.08]">
                <div className="w-2 h-2 rounded-full bg-[#22D3EE] group-hover:animate-ping" />
                <span className="text-[10px] font-mono text-[#8B8B96] tracking-widest uppercase">
                  {tech.category}
                </span>
              </div>

              <div className="pt-3">
                <div className="text-xl sm:text-2xl font-black tracking-tight uppercase group-hover:text-white transition-colors">
                  {tech.name}
                </div>
                <div className="text-[11px] font-mono text-zinc-500 mt-1">
                  {tech.spec}
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Center Spatial Machine Hologram Node */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none select-none">
          <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-white/[0.08] flex items-center justify-center animate-spin-slow">
            <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-full border border-[#3B82F6]/30 border-dashed animate-spin-slow" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-[10px] font-mono tracking-widest text-[#8B8B96] uppercase">
              APEXGEN CORE
            </div>
            <div className="text-xs font-mono text-zinc-400 mt-1">
              EDGE NATIVE
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Technical Strip */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between text-[11px] font-mono text-zinc-500 gap-4">
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-1.5 text-zinc-400">
            <Terminal className="w-3.5 h-3.5 text-sky-400" />
            100% CLEAN TYPESCRIPT
          </span>
          <span className="flex items-center gap-1.5 text-zinc-400">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            0% VENDOR LOCK-IN
          </span>
          <span className="flex items-center gap-1.5 text-zinc-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            FULL SOURCE CODE HANDOFF
          </span>
        </div>
        <div>LATENCY: &lt;50MS GLOBALLY</div>
      </div>
    </section>
  );
}
