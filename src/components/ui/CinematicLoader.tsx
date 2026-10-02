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
      sessionStorage.setItem('apexgen_loaded_v2', 'true');
    }
    setProgress(100);
    setTimeout(() => {
      setIsDone(true);
      onComplete?.();
    }, 300);
  }, [onComplete]);

  // Skip on mount if already loaded in this session
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && sessionStorage.getItem('apexgen_loaded_v2') === 'true') {
        const timer = setTimeout(() => {
          setIsDone(true);
          onComplete?.();
        }, 0);
        return () => clearTimeout(timer);
      }
    } catch {
      // storage error
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
      const timer = setTimeout(() => {
        handleFinish();
      }, 0);
      return () => clearTimeout(timer);
    }

    const duration = 1600; // Fast, elegant, no unnecessary waiting
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / duration, 1);
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

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="apexgen-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -40,
            transition: {
              duration: 0.7,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          onClick={handleFinish}
          className="fixed inset-0 z-[100] w-screen h-screen bg-[#050505] text-[#F5F5F5] flex flex-col justify-between p-8 sm:p-14 select-none cursor-pointer"
          aria-live="polite"
          aria-busy={!isDone}
        >
          {/* Top Label */}
          <div className="flex items-center justify-between text-xs font-mono tracking-widest text-neutral-500 uppercase">
            <span>DIGITAL STUDIO</span>
            <span>SRI LANKA &bull; GLOBAL</span>
          </div>

          {/* Centered Brand Experience */}
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl md:text-8xl font-light tracking-[0.18em] text-[#F5F5F5] uppercase font-mono"
            >
              APEXGEN
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xs sm:text-sm font-mono tracking-[0.3em] text-[#8A8A8A] uppercase"
            >
              DESIGN &bull; BUILD &bull; GROW
            </motion.div>
          </div>

          {/* Bottom Progress Counter: 00 — 100 */}
          <div className="flex items-end justify-between border-t border-white/10 pt-6">
            <div className="text-[11px] font-mono tracking-widest text-neutral-600 uppercase">
              ESC TO SKIP
            </div>

            <div className="flex items-baseline space-x-2 text-2xl sm:text-3xl font-mono text-white">
              <span className="text-[#FF5E00] font-bold">
                {String(progress).padStart(2, '0')}
              </span>
              <span className="text-neutral-600">—</span>
              <span className="text-neutral-500">100</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
