'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Logo } from '@/components/ui/Logo';

interface CinematicLoaderProps {
  onComplete?: () => void;
}

export function CinematicLoader({ onComplete }: CinematicLoaderProps) {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && false) {
      setIsDone(true);
      onComplete?.();
    }
  }, [onComplete]);

  const [phase, setPhase] = useState<number>(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleFinish = useCallback(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('apexgen_intro_seen', 'true');
    }
    setProgress(100);
    setTimeout(() => {
      setIsDone(true);
      onComplete?.();
    }, 350);
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
    if (isDone) {
      onComplete?.();
      return;
    }

    if (shouldReduceMotion) {
      const skipTimer = setTimeout(() => {
        handleFinish();
      }, 0);
      return () => clearTimeout(skipTimer);
    }

    // Phase 1 (0-1s): Black screen
    // Phase 2 (1-2s): Light streak appears
    // Phase 3 (2-3s): Symbol forms
    // Phase 4 (3-4s): Wordmark appears + 00 -> 100 counter completes
    const t1 = setTimeout(() => setPhase(1), 800);
    const t2 = setTimeout(() => setPhase(2), 1600);
    const t3 = setTimeout(() => setPhase(3), 2400);

    const startTime = Date.now();
    const duration = 3800;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      // Cubic easing for percentage counter
      const t = Math.min(elapsed / duration, 1);
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const currentProgress = Math.min(Math.round(eased * 100), 100);

      setProgress(currentProgress);

      if (elapsed >= duration) {
        clearInterval(interval);
        handleFinish();
      }
    }, 25);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearInterval(interval);
    };
  }, [isDone, handleFinish, onComplete, shouldReduceMotion]);

  if (isDone) return null;

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="apexgen-cinematic-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[100] w-screen h-screen bg-[#050507] text-[#f4f4f6] overflow-hidden select-none flex flex-col justify-between p-6 sm:p-12 cursor-default"
          aria-live="polite"
          aria-busy={!isDone}
        >
          {/* Subtle Ambient Video Reveal in background if available */}
          <div className="absolute inset-0 w-full h-full overflow-hidden opacity-35 pointer-events-none">
            <video
              ref={videoRef}
              src="/brand/apexgen-logo-reveal.mp4"
              autoPlay
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#050507]/80 backdrop-blur-[2px]" />
          </div>

          {/* Top minimal status + skip button */}
          <div className="relative z-20 flex items-center justify-between text-[11px] font-mono tracking-widest text-neutral-500 uppercase">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
              <span>APEXGEN / STUDIO INTRO</span>
            </div>

            <button
              type="button"
              onClick={handleFinish}
              className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black text-neutral-400 hover:text-black transition-all font-mono text-[10px] tracking-wider cursor-pointer"
            >
              SKIP INTRO &rarr;
            </button>
          </div>

          {/* Centered Monolithic Symbol & Wordmark Reveal */}
          <div className="relative z-20 flex flex-col items-center justify-center my-auto space-y-6">
            {/* 1-2s: Very subtle light streak */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={phase >= 1 ? { opacity: [0, 0.8, 0.2], scaleX: [0, 1, 0.6] } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-48 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent"
            />

            {/* 2-3s: APEXGEN symbol forms/reveals */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, filter: 'blur(10px)' }}
              animate={
                phase >= 2
                  ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
                  : { opacity: 0, scale: 0.85, filter: 'blur(10px)' }
              }
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border border-white/20 bg-black/60 backdrop-blur-md flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.12)]">
                <Logo variant="symbol" size="lg" />
              </div>
            </motion.div>

            {/* 3-4s: APEXGEN wordmark + statement */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center space-y-2"
            >
              <h1 className="text-xl sm:text-2xl font-light tracking-[0.3em] text-white uppercase font-mono">
                APEXGEN
              </h1>
              <p className="text-[10px] sm:text-xs font-mono tracking-[0.22em] text-neutral-400 uppercase">
                BUILD DIGITAL EXPERIENCES.
              </p>
            </motion.div>
          </div>

          {/* Bottom Precision Percentage Counter */}
          <div className="relative z-20 flex items-end justify-between font-mono text-xs text-neutral-500 border-t border-white/10 pt-4">
            <span className="text-[10px] tracking-widest uppercase">
              CREATIVE TECHNOLOGY STUDIO
            </span>

            <div className="text-3xl sm:text-4xl font-light text-white tracking-tight tabular-nums">
              {String(progress).padStart(2, '0')}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
