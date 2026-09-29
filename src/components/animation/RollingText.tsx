'use client';

import React from 'react';
import { useReducedMotion } from 'framer-motion';

interface RollingTextProps {
  text: string;
  className?: string;
}

export function RollingText({ text, className = '' }: RollingTextProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={`relative inline-block overflow-hidden h-[1.25em] leading-[1.25em] align-middle ${className}`}>
      {/* Primary Top Layer */}
      <span className="block transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full will-change-transform">
        {text}
      </span>

      {/* Duplicate Bottom Layer */}
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 block text-white font-medium transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-full group-hover:translate-y-0 will-change-transform"
      >
        {text}
      </span>
    </span>
  );
}
