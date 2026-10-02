'use client';

import React, { useRef, useSyncExternalStore } from 'react';
import { motion, useSpring, useMotionValue, useReducedMotion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  strength?: number; // Distance pull factor (default: 0.28)
  ariaLabel?: string;
  as?: 'button' | 'a' | 'div';
}

function subscribeCoarsePointer(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  const media = window.matchMedia('(pointer: coarse)');
  media.addEventListener('change', callback);
  return () => media.removeEventListener('change', callback);
}

function getCoarsePointerSnapshot() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(pointer: coarse)').matches;
}

function getCoarsePointerServerSnapshot() {
  return false;
}

export function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
  strength = 0.28,
  ariaLabel,
  as = href ? 'a' : 'div',
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isTouch = useSyncExternalStore(
    subscribeCoarsePointer,
    getCoarsePointerSnapshot,
    getCoarsePointerServerSnapshot
  );
  const shouldReduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth organic spring physics
  const springConfig = { damping: 18, stiffness: 220, mass: 0.6 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouch || shouldReduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const commonProps = {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: shouldReduceMotion || isTouch ? undefined : { x: springX, y: springY },
    className: `relative inline-flex items-center justify-center transition-shadow duration-300 will-change-transform ${className}`,
    'aria-label': ariaLabel,
  };

  if (as === 'a' && href) {
    return (
      <motion.a
        ref={ref as unknown as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        {...commonProps}
      >
        {children}
      </motion.a>
    );
  }

  if (as === 'button') {
    return (
      <motion.button
        ref={ref as unknown as React.RefObject<HTMLButtonElement>}
        type="button"
        onClick={onClick}
        {...commonProps}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.div
      ref={ref as unknown as React.RefObject<HTMLDivElement>}
      onClick={onClick}
      {...commonProps}
    >
      {children}
    </motion.div>
  );
}
