'use client';

import React, { useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface InteractiveHeroHeadlineProps {
  className?: string;
}

interface WordProps {
  word: string;
  isSpecial?: boolean;
  isAccent?: boolean;
  lineIndex: number;
  wordIndex: number;
}

function InteractiveWord({ word, isSpecial, isAccent, lineIndex, wordIndex }: WordProps) {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Split word into characters for micro-spring wave hover
  const letters = word.split('');

  return (
    <span
      className="inline-block whitespace-nowrap cursor-default select-none mr-[0.26em] last:mr-0 group/word relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {letters.map((char, charIdx) => (
        <motion.span
          key={charIdx}
          className={`inline-block transition-colors duration-300 ${
            char === '.'
              ? 'text-cyan-400 font-bold drop-shadow-[0_0_25px_rgba(34,211,238,0.9)]'
              : isSpecial
              ? 'text-gradient-iridescent font-medium'
              : isAccent
              ? 'text-white font-medium drop-shadow-[0_0_24px_rgba(255,255,255,0.3)]'
              : 'text-neutral-100 group-hover/word:text-white'
          }`}
          animate={
            shouldReduceMotion
              ? {}
              : isHovered
              ? {
                  y: -7,
                  scale: 1.06,
                  color: '#ffffff',
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(129, 140, 248, 0.4)',
                  transition: {
                    type: 'spring',
                    stiffness: 450,
                    damping: 14,
                    delay: charIdx * 0.02,
                  },
                }
              : {
                  y: 0,
                  scale: 1,
                  textShadow: isSpecial
                    ? '0 0 24px rgba(255, 255, 255, 0.35)'
                    : '0 0 0px rgba(0, 0, 0, 0)',
                  transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  },
                }
          }
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export function InteractiveHeroHeadline({ className = '' }: InteractiveHeroHeadlineProps) {
  const shouldReduceMotion = useReducedMotion();
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 0 });

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

  const lines = [
    { text: 'WE BUILD', special: false, accent: false },
    { text: 'DIGITAL EXPERIENCES', special: true, accent: false },
    { text: 'THAT MOVE BUSINESSES', special: false, accent: false },
    { text: 'FORWARD.', special: false, accent: true },
  ];

  return (
    <h1
      ref={headlineRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative text-[1.95rem] xs:text-[2.4rem] sm:text-5xl md:text-6xl lg:text-[4.75rem] font-light tracking-[-0.035em] leading-[0.98] sm:leading-[0.96] uppercase text-balance ${className}`}
      style={{ perspective: '1200px' }}
    >
      {/* Interactive Cursor Spotlight Sheen over letters */}
      <div
        className="pointer-events-none absolute -inset-8 transition-opacity duration-500 ease-out z-20 mix-blend-color-dodge hidden sm:block"
        style={{
          opacity: mousePos.opacity * 0.7,
          background: `radial-gradient(400px circle at ${mousePos.x + 32}px ${mousePos.y + 32}px, rgba(255, 255, 255, 0.22), rgba(129, 140, 248, 0.12) 40%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {lines.map((lineData, lineIdx) => {
        const words = lineData.text.split(' ');

        return (
          <span key={lineIdx} className="block overflow-hidden py-0.5">
            <motion.span
              className="block will-change-transform"
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : {
                      y: '115%',
                      opacity: 0,
                      rotateX: 25,
                      filter: 'blur(10px)',
                    }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : {
                      y: '0%',
                      opacity: 1,
                      rotateX: 0,
                      filter: 'blur(0px)',
                    }
              }
              transition={{
                duration: 1.05,
                delay: 0.22 + lineIdx * 0.14,
                ease: [0.16, 1, 0.3, 1], // Luxury cubic-bezier settle
              }}
            >
              {words.map((word, wordIdx) => (
                <InteractiveWord
                  key={wordIdx}
                  word={word}
                  isSpecial={lineData.special}
                  isAccent={lineData.accent}
                  lineIndex={lineIdx}
                  wordIndex={wordIdx}
                />
              ))}
            </motion.span>
          </span>
        );
      })}
    </h1>
  );
}
