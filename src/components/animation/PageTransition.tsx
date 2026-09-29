'use client';

import React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/ui/Logo';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="min-h-screen">
        {/* Cinematic Black Transition Layer with APEXGEN emblem (~600ms) */}
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none bg-[#050507] flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: [0, 1, 0] }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="flex flex-col items-center space-y-3"
          >
            <div className="w-16 h-16 rounded-2xl border border-white/20 bg-black/80 flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.15)]">
              <Logo variant="symbol" size="md" />
            </div>
            <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
              APEXGEN
            </span>
          </motion.div>
        </motion.div>

        {/* Page Content Fade & Settle */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
