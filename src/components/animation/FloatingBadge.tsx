'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface FloatingBadgeProps {
  label: string;
  className?: string;
  dotColor?: string;
  duration?: number;
  delay?: number;
}

export function FloatingBadge({
  label,
  className = '',
  dotColor = 'bg-emerald-400',
  duration = 6,
  delay = 0,
}: FloatingBadgeProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
      animate={
        shouldReduceMotion
          ? { opacity: 1 }
          : {
              opacity: 1,
              y: [-4, 4, -4],
              rotate: [-0.8, 0.8, -0.8],
            }
      }
      transition={
        shouldReduceMotion
          ? { duration: 0.5 }
          : {
              opacity: { duration: 0.6, delay },
              y: { repeat: Infinity, duration, ease: 'easeInOut', delay },
              rotate: { repeat: Infinity, duration: duration * 1.2, ease: 'easeInOut', delay },
            }
      }
      className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md text-[10px] font-mono tracking-widest uppercase text-neutral-300 shadow-lg select-none will-change-transform ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dotColor} animate-pulse`} />
      <span>{label}</span>
    </motion.div>
  );
}
