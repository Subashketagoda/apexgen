'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ChromeStarProps {
  size?: number;
  className?: string;
  delay?: number;
  reverse?: boolean;
}

export function ChromeStar({ size = 160, className = '', delay = 0, reverse = false }: ChromeStarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay }}
      className={`relative inline-block pointer-events-none select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <div className={reverse ? 'animate-float-reverse' : 'animate-float-slow'}>
        <svg
          viewBox="0 0 200 200"
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="chrome-glow"
        >
          <defs>
            {/* Main Chrome Gradient */}
            <linearGradient id={`chrome-grad-${size}-${delay}`} x1="10%" y1="0%" x2="90%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#e4e4ed" stopOpacity="0.8" />
              <stop offset="45%" stopColor="#25252d" stopOpacity="0.85" />
              <stop offset="55%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="75%" stopColor="#7a7a88" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
            </linearGradient>

            {/* Specular Highlight Gradient */}
            <linearGradient id={`specular-${size}-${delay}`} x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#9a9ab0" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.7" />
            </linearGradient>

            {/* Dark Bevel Shadow */}
            <linearGradient id={`bevel-shadow-${size}-${delay}`} x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#050508" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
            </linearGradient>

            {/* Ambient Radial Flare */}
            <radialGradient id={`flare-${size}-${delay}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
              <stop offset="40%" stopColor="#8d8ea6" stopOpacity="0.08" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Ambient Glow Aura */}
          <circle cx="100" cy="100" r="85" fill={`url(#flare-${size}-${delay})`} />

          {/* 3D Tilted Chrome Four-Point Star Geometry */}
          {/* North facet */}
          <path
            d="M100 8 C100 62 138 100 192 100 C138 100 100 138 100 192 C100 138 62 100 8 100 C62 100 100 62 100 8 Z"
            fill={`url(#chrome-grad-${size}-${delay})`}
            stroke="rgba(255, 255, 255, 0.45)"
            strokeWidth="0.75"
          />

          {/* High-gloss specular center ridge */}
          <path
            d="M100 14 C100 66 134 100 186 100 C134 100 100 134 100 186"
            stroke={`url(#specular-${size}-${delay})`}
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Core reflection facet */}
          <ellipse
            cx="100"
            cy="100"
            rx="12"
            ry="12"
            fill="#ffffff"
            opacity="0.6"
            filter="blur(3px)"
          />
          <circle cx="100" cy="100" r="3" fill="#ffffff" />
        </svg>
      </div>
    </motion.div>
  );
}
