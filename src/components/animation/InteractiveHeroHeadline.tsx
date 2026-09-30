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
}

function InteractiveWord({ word, isSpecial, isAccent }: WordProps) {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const letters = word.split('');

  return (
    <span
      className="inline-block whitespace-nowrap cursor-default select-none mr-[0.24em] last:mr-0 group/word relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {letters.map((char, charIdx) => (
        <motion.span
          key={charIdx}
          className={`inline-block transition-colors duration-300 ${
            char === '.'
              ? 'text-cyan-400 font-bold drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]'
              : isSpecial
              ? 'text-gradient-iridescent font-normal'
              : isAccent
              ? 'text-white font-normal'
              : 'text-neutral-100 group-hover/word:text-white'
          }`}
          animate={
            shouldReduceMotion
              ? {}
              : isHovered
              ? {
                  y: -6,
                  scale: 1.05,
                  color: '#ffffff',
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 35px rgba(56, 189, 248, 0.35)',
                  transition: {
                    type: 'spring',
                    stiffness: 450,
                    damping: 15,
                    delay: charIdx * 0.015,
                  },
                }
              : {
                  y: 0,
                  scale: 1,
                  textShadow: '0 0 0px rgba(0, 0, 0, 0)',
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
    { text: 'THAT MOVE BUSINESSES.', special: false, accent: true },
  ];

  return (
    <h1
      ref={headlineRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative text-[2.2rem] xs:text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.75rem] font-light tracking-[-0.035em] leading-[0.98] sm:leading-[0.95] uppercase text-balance ${className}`}
      style={{ perspective: '1200px' }}
    >
      {/* Subtle cursor sheen spotlight */}
      <div
        className="pointer-events-none absolute -inset-8 transition-opacity duration-500 ease-out z-20 mix-blend-color-dodge hidden sm:block"
        style={{
          opacity: mousePos.opacity * 0.6,
          background: `radial-gradient(350px circle at ${mousePos.x + 32}px ${mousePos.y + 32}px, rgba(255, 255, 255, 0.2), rgba(56, 189, 248, 0.12) 40%, transparent 70%)`,
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
                      rotateX: 20,
                      filter: 'blur(8px)',
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
                duration: 0.95,
                delay: 0.2 + lineIdx * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {words.map((word, wordIdx) => (
                <InteractiveWord
                  key={wordIdx}
                  word={word}
                  isSpecial={lineData.special}
                  isAccent={lineData.accent}
                />
              ))}
            </motion.span>
          </span>
        );
      })}
    </h1>
  );
}
