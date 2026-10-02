'use client';

import React, { useState, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

interface InteractiveHeroHeadlineProps {
  className?: string;
  containerRef?: React.RefObject<HTMLDivElement | null>;
}

export function InteractiveHeroHeadline({ className = '', containerRef }: InteractiveHeroHeadlineProps) {
  const shouldReduceMotion = useReducedMotion();
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 0 });

  // Scroll parallax to slowly move typography apart as user scrolls down
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const line1X = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const line2X = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const line3X = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.1]);

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    if (!headlineRef.current) return;
    const rect = headlineRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <h1
      ref={headlineRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative select-none uppercase font-light text-[#F5F5F5] tracking-[-0.04em] leading-[0.88] ${className}`}
      style={{ perspective: '1200px' }}
    >
      {/* Subtle cursor sheen spotlight */}
      <div
        className="pointer-events-none absolute -inset-12 transition-opacity duration-500 ease-out z-20 mix-blend-color-dodge hidden sm:block"
        style={{
          opacity: mousePos.opacity * 0.5,
          background: `radial-gradient(400px circle at ${mousePos.x + 48}px ${mousePos.y + 48}px, rgba(255, 255, 255, 0.18), rgba(255, 94, 0, 0.14) 40%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* LINE 1: WE BUILD */}
      <motion.div
        style={shouldReduceMotion ? {} : { x: line1X, opacity: textOpacity }}
        className="block overflow-hidden py-1 will-change-transform"
      >
        <motion.span
          initial={shouldReduceMotion ? { opacity: 0 } : { y: '110%', opacity: 0, rotateX: 20 }}
          animate={{ y: '0%', opacity: 1, rotateX: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="block text-[3.2rem] xs:text-[4.2rem] sm:text-7xl md:text-8xl lg:text-[9.5rem] xl:text-[11rem] font-light"
        >
          WE BUILD
        </motion.span>
      </motion.div>

      {/* LINE 2: DIGITAL */}
      <motion.div
        style={shouldReduceMotion ? {} : { x: line2X, opacity: textOpacity }}
        className="block overflow-hidden py-1 will-change-transform sm:pl-[0.1em]"
      >
        <motion.span
          initial={shouldReduceMotion ? { opacity: 0 } : { y: '110%', opacity: 0, rotateX: 20 }}
          animate={{ y: '0%', opacity: 1, rotateX: 0 }}
          transition={{ duration: 1.1, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="block text-[3.2rem] xs:text-[4.2rem] sm:text-7xl md:text-8xl lg:text-[9.5rem] xl:text-[11rem] font-light text-gradient-orange"
        >
          DIGITAL
        </motion.span>
      </motion.div>

      {/* LINE 3: EXPERIENCES. */}
      <motion.div
        style={shouldReduceMotion ? {} : { x: line3X, opacity: textOpacity }}
        className="block overflow-hidden py-1 will-change-transform"
      >
        <motion.span
          initial={shouldReduceMotion ? { opacity: 0 } : { y: '110%', opacity: 0, rotateX: 20 }}
          animate={{ y: '0%', opacity: 1, rotateX: 0 }}
          transition={{ duration: 1.1, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="block text-[3.2rem] xs:text-[4.2rem] sm:text-7xl md:text-8xl lg:text-[9.5rem] xl:text-[11rem] font-light"
        >
          EXPERIENCES
          <span className="text-[#FF5E00] font-bold drop-shadow-[0_0_25px_rgba(255,94,0,0.9)]">.</span>
        </motion.span>
      </motion.div>
    </h1>
  );
}
