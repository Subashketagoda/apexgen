'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useReducedMotion } from 'framer-motion';

interface TextScrambleProps {
  text: string;
  className?: string;
  triggerOnHover?: boolean;
  triggerOnView?: boolean;
  duration?: number; // Duration in ms (default: 400)
}

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/_<>[]*#';

export function TextScramble({
  text,
  className = '',
  triggerOnHover = false,
  triggerOnView = true,
  duration = 400,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const isAnimatingRef = useRef(false);
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const hasTriggeredRef = useRef(false);
  const shouldReduceMotion = useReducedMotion();

  const scramble = useCallback(() => {
    if (shouldReduceMotion || isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const length = text.length;
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const revealedCount = Math.floor(progress * length);

      let result = '';
      for (let i = 0; i < length; i++) {
        if (text[i] === ' ') {
          result += ' ';
        } else if (i < revealedCount) {
          result += text[i];
        } else {
          result += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
      }

      setDisplayText(result);

      if (progress >= 1) {
        clearInterval(interval);
        setDisplayText(text);
        isAnimatingRef.current = false;
      }
    }, 28);
  }, [text, duration, shouldReduceMotion]);

  useEffect(() => {
    if (!triggerOnView || shouldReduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          scramble();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [scramble, triggerOnView, shouldReduceMotion]);

  return (
    <span
      ref={containerRef}
      onMouseEnter={triggerOnHover ? scramble : undefined}
      className={`inline-block font-mono tracking-wider will-change-contents ${className}`}
    >
      {displayText}
    </span>
  );
}
