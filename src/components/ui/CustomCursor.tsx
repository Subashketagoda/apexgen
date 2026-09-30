'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion';

type CursorMode = 'default' | 'pointer' | 'project';

export function CustomCursor() {
  const [cursorMode, setCursorMode] = useState<CursorMode>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.35 };
  const followerX = useSpring(mouseX, springConfig);
  const followerY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable for desktop mice
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const updatePointer = () => {
      setIsTouchDevice(!mediaQuery.matches);
    };

    updatePointer();
    mediaQuery.addEventListener('change', updatePointer);

    if (!mediaQuery.matches) {
      return () => mediaQuery.removeEventListener('change', updatePointer);
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest('[data-cursor="project"]');
      const clickableEl = target.closest(
        'a, button, [role="button"], input, select, textarea, [data-cursor="pointer"]'
      );

      if (projectEl) {
        setCursorMode('project');
      } else if (clickableEl) {
        setCursorMode('pointer');
      } else {
        setCursorMode('default');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      mediaQuery.removeEventListener('change', updatePointer);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[999] overflow-hidden select-none"
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    >
      {/* 1. Precise Center Dot (visible in default mode) */}
      {cursorMode === 'default' && (
        <motion.div
          style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%', pointerEvents: 'none' }}
          className="pointer-events-none fixed left-0 top-0 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        />
      )}

      {/* 2. Interactive States */}
      <AnimatePresence mode="wait">
        {cursorMode === 'project' ? (
          <motion.div
            key="project-cursor"
            style={{ x: followerX, y: followerY, translateX: '-50%', translateY: '-50%', pointerEvents: 'none' }}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ type: 'spring', damping: 24, stiffness: 350 }}
            className="pointer-events-none fixed left-0 top-0 px-4 py-2 rounded-full bg-white text-black flex items-center space-x-2 font-mono text-[10px] uppercase font-bold tracking-widest shadow-2xl backdrop-blur-md"
          >
            <span>VIEW PROJECT</span>
            <span>&rarr;</span>
          </motion.div>
        ) : cursorMode === 'pointer' ? (
          <motion.div
            key="pointer-cursor"
            style={{ x: followerX, y: followerY, translateX: '-50%', translateY: '-50%', pointerEvents: 'none' }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.35, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 380 }}
            className="pointer-events-none fixed left-0 top-0 w-8 h-8 rounded-full border border-white/50 bg-white/[0.08]"
          />
        ) : (
          <motion.div
            key="default-follower"
            style={{ x: followerX, y: followerY, translateX: '-50%', translateY: '-50%', pointerEvents: 'none' }}
            animate={{ scale: 1, opacity: 0.25 }}
            transition={{ type: 'spring', damping: 30, stiffness: 280 }}
            className="pointer-events-none fixed left-0 top-0 w-6 h-6 rounded-full border border-white/30"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
