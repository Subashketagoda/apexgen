'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useVelocity, useTransform, useSpring } from 'framer-motion';

export function HomeMarquee3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseSkew, setMouseSkew] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 40, stiffness: 300 });

  // Distortion skew based on scroll velocity
  const skew = useTransform(smoothVelocity, [-1, 1], [-8, 8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const offset = (e.clientX - centerX) / centerX;
      setMouseSkew(offset * 4);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const marqueeWords = [
    'DESIGN',
    'DEVELOP',
    'MOTION',
    'STRATEGY',
    'TECHNOLOGY',
    'EXPERIENCE',
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-24 sm:py-36 overflow-hidden bg-[#050507] border-b border-white/[0.06] select-none pointer-events-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#3B82F6]/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#8B5CF6]/10 blur-[120px] pointer-events-none" />

      <motion.div
        style={{ skewX: skew }}
        className="space-y-6 sm:space-y-8 flex flex-col justify-center transform-gpu"
      >
        {/* Layer 1: Moves Left, Solid High-Contrast Editorial */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 24,
            }}
            className="flex items-center space-x-12 sm:space-x-16 shrink-0"
          >
            {[...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords].map(
              (word, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-8 sm:space-x-12 text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tight text-white/90"
                >
                  <span className="hover:text-sky-400 transition-colors drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    {word}
                  </span>
                  <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-sky-400/80 inline-block" />
                </div>
              )
            )}
          </motion.div>
        </div>

        {/* Layer 2: Moves Right, Outlined Technical Minimalist Wireframe */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <motion.div
            animate={{ x: ['-50%', '0%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 30,
            }}
            className="flex items-center space-x-12 sm:space-x-16 shrink-0"
          >
            {[...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords].reverse().map(
              (word, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-8 sm:space-x-12 text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tight text-transparent font-outline-2"
                  style={{
                    WebkitTextStroke: '1px rgba(255, 255, 255, 0.28)',
                  }}
                >
                  <span>{word}</span>
                  <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full border border-white/30 inline-block" />
                </div>
              )
            )}
          </motion.div>
        </div>

        {/* Layer 3: Moves Left Faster with Violet Accent Glow */}
        <div className="flex overflow-hidden whitespace-nowrap opacity-60">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 18,
            }}
            className="flex items-center space-x-10 sm:space-x-14 shrink-0"
          >
            {['CREATIVE TECH', 'THREE.JS', 'HIGH PERFORMANCE', 'DIGITAL FLAGSHIPS', 'EDGE ENGINE', 'NO TEMPLATES', 'CREATIVE TECH', 'THREE.JS', 'HIGH PERFORMANCE', 'DIGITAL FLAGSHIPS', 'EDGE ENGINE', 'NO TEMPLATES'].map(
              (phrase, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-6 sm:space-x-8 text-2xl sm:text-3xl md:text-4xl font-mono uppercase tracking-widest text-zinc-500"
                >
                  <span>{phrase}</span>
                  <span className="text-zinc-700">//</span>
                </div>
              )
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
