'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface CinematicLoaderProps {
  onComplete?: () => void;
}

export function CinematicLoader({ onComplete }: CinematicLoaderProps) {
  const [isDone, setIsDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const handleFinish = useCallback(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('apexgen_loaded', 'true');
    }
    setProgress(100);
    setTimeout(() => {
      setIsDone(true);
      onComplete?.();
    }, 400);
  }, [onComplete]);

  // Skip on mount if already loaded in this session
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && sessionStorage.getItem('apexgen_loaded') === 'true') {
        setIsDone(true);
        onComplete?.();
      }
    } catch {
      // ignore storage access errors
    }
  }, [onComplete]);

  // Keyboard shortcut listener to skip intro (Esc, Space, Enter)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        handleFinish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleFinish]);

  useEffect(() => {
    if (shouldReduceMotion) {
      handleFinish();
      return;
    }

    const duration = 2200; // Fast, elegant cinematic duration
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / duration, 1);
      // Luxury ease-out curve
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.min(Math.round(eased * 100), 100);
      setProgress(current);

      if (elapsed >= duration) {
        clearInterval(interval);
        handleFinish();
      }
    }, 20);

    return () => clearInterval(interval);
  }, [handleFinish, shouldReduceMotion]);

  if (isDone) return null;

  const brandLetters = 'APEXGEN'.split('');

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="apexgen-cinematic-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            filter: 'blur(10px)',
            transition: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          onClick={handleFinish}
          className="fixed inset-0 z-[100] w-screen h-screen bg-[#050505] text-[#F5F5F5] flex flex-col items-center justify-center p-6 select-none cursor-pointer"
          aria-live="polite"
          aria-busy={!isDone}
        >
          {/* Subtle Cybernetic Grid Mesh Backdrop */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />

          {/* Centered Brand Experience */}
          <div className="relative z-10 flex flex-col items-center text-center space-y-5">
            {/* APEXGEN Letter Animation */}
            <div className="flex items-center space-x-[0.25em]">
              {brandLetters.map((char, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15 + idx * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-4xl sm:text-6xl md:text-7xl font-light tracking-[0.2em] text-[#F5F5F5] uppercase font-mono"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Below: DIGITAL EXPERIENCES */}
            <motion.div
              initial={{ opacity: 0, letterSpacing: '0.15em' }}
              animate={{ opacity: 1, letterSpacing: '0.35em' }}
              transition={{ duration: 1.0, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm font-mono tracking-[0.35em] text-[#8A8A8A] uppercase"
            >
              DIGITAL EXPERIENCES
            </motion.div>

            {/* Progress Indicator: [────────────── 100%] */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="w-64 sm:w-80 pt-4 flex flex-col items-center space-y-2.5"
            >
              <div className="w-full flex items-center justify-between text-[10px] font-mono tracking-widest text-[#8A8A8A]">
                <span>INITIALIZING</span>
                <span className="text-[#F5F5F5]">{String(progress).padStart(3, ' ')}%</span>
              </div>

              {/* Minimal Progress Bar */}
              <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-cyan-400 via-white to-cyan-400"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="text-[9px] font-mono tracking-widest text-neutral-600 select-none">
                [ {Array.from({ length: 24 }).map((_, i) => (
                  <span key={i} className={i < Math.floor((progress / 100) * 24) ? 'text-cyan-400' : 'text-neutral-700'}>
                    ─
                  </span>
                ))} ]
              </div>
            </motion.div>
          </div>

          {/* Skip Note */}
          <div className="absolute bottom-8 text-[10px] font-mono tracking-widest text-neutral-600 uppercase">
            ESC / SPACE TO SKIP
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
