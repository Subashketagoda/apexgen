'use client';

import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion';

type CursorMode = 'default' | 'pointer' | 'view' | 'open' | 'drag' | 'explore';

function subscribeFinePointer(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  const media = window.matchMedia('(pointer: fine)');
  media.addEventListener('change', callback);
  return () => media.removeEventListener('change', callback);
}

function getFinePointerSnapshot() {
  if (typeof window === 'undefined') return true; // default touch/no cursor during SSR
  return !window.matchMedia('(pointer: fine)').matches;
}

function getFinePointerServerSnapshot() {
  return true;
}

export function CustomCursor() {
  const [cursorMode, setCursorMode] = useState<CursorMode>('default');
  const [cursorLabel, setCursorLabel] = useState<string>('VIEW');
  const [isVisible, setIsVisible] = useState(false);

  const isTouchDevice = useSyncExternalStore(
    subscribeFinePointer,
    getFinePointerSnapshot,
    getFinePointerServerSnapshot
  );

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.35 };
  const followerX = useSpring(mouseX, springConfig);
  const followerY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');

      if (cursorAttr === 'view' || cursorAttr === 'project') {
        setCursorMode('view');
        setCursorLabel('VIEW');
      } else if (cursorAttr === 'open') {
        setCursorMode('open');
        setCursorLabel('OPEN');
      } else if (cursorAttr === 'drag') {
        setCursorMode('drag');
        setCursorLabel('DRAG');
      } else if (cursorAttr === 'explore') {
        setCursorMode('explore');
        setCursorLabel('EXPLORE');
      } else if (
        target.closest('a, button, [role="button"], input, select, textarea')
      ) {
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
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [mouseX, mouseY, isVisible, isTouchDevice]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  const isPill = ['view', 'open', 'drag', 'explore'].includes(cursorMode);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[999] overflow-hidden select-none"
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    >
      {/* Center Dot (default) */}
      {cursorMode === 'default' && (
        <motion.div
          style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%', pointerEvents: 'none' }}
          className="pointer-events-none fixed left-0 top-0 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        />
      )}

      {/* Interactive Contextual States */}
      <AnimatePresence mode="wait">
        {isPill ? (
          <motion.div
            key={cursorLabel}
            style={{ x: followerX, y: followerY, translateX: '-50%', translateY: '-50%', pointerEvents: 'none' }}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ type: 'spring', damping: 24, stiffness: 350 }}
            className="pointer-events-none fixed left-0 top-0 px-4 py-2 rounded-full bg-white text-black flex items-center space-x-2 font-mono text-[10px] uppercase font-bold tracking-widest shadow-[0_0_25px_rgba(255,94,0,0.3)] backdrop-blur-md"
          >
            <span>{cursorLabel}</span>
            <span className="text-[#FF5E00] font-black">&rarr;</span>
          </motion.div>
        ) : cursorMode === 'pointer' ? (
          <motion.div
            key="pointer-cursor"
            style={{ x: followerX, y: followerY, translateX: '-50%', translateY: '-50%', pointerEvents: 'none' }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.35, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 380 }}
            className="pointer-events-none fixed left-0 top-0 w-8 h-8 rounded-full border border-[#FF5E00]/60 bg-[#FF5E00]/[0.08] shadow-[0_0_15px_rgba(255,94,0,0.2)]"
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
