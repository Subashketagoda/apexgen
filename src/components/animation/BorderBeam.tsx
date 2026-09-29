'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BorderBeamProps {
  className?: string;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
  borderWidth?: number;
  size?: number; // Spread angle in degrees
}

export function BorderBeam({
  className,
  duration = 8,
  colorFrom = 'rgba(16, 185, 129, 0.9)',
  colorTo = 'rgba(255, 255, 255, 1)',
  borderWidth = 1.5,
  size = 70,
}: BorderBeamProps) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return null;

  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden',
        className
      )}
      style={{
        padding: borderWidth,
        WebkitMask:
          'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        maskComposite: 'exclude',
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[-150%] origin-center will-change-transform"
        style={{
          background: `conic-gradient(from 0deg, transparent 0deg, transparent ${
            360 - size
          }deg, ${colorFrom} ${360 - size / 2}deg, ${colorTo} 360deg)`,
        }}
      />
    </div>
  );
}
