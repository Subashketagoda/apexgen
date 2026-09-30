'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { setHero3DMode, Hero3DMode } from '@/components/ui/Hero3DScene';
import { Sparkles, Zap, Boxes, Atom } from 'lucide-react';

interface ModeOption {
  id: Hero3DMode;
  label: string;
  icon: React.ElementType;
  activeColor: string;
}

const MODES: ModeOption[] = [
  { id: 'hologram', label: 'HOLOGRAM', icon: Sparkles, activeColor: 'text-cyan-400 border-cyan-500/50 bg-cyan-500/10' },
  { id: 'neon', label: 'NEON CORE', icon: Zap, activeColor: 'text-fuchsia-400 border-fuchsia-500/50 bg-fuchsia-500/10' },
  { id: 'wireframe', label: 'WIREFRAME', icon: Boxes, activeColor: 'text-sky-400 border-sky-500/50 bg-sky-500/10' },
  { id: 'explode', label: 'QUANTUM', icon: Atom, activeColor: 'text-amber-400 border-amber-500/50 bg-amber-500/10' },
];

export function Hero3DModeSwitcher() {
  const [activeMode, setActiveMode] = useState<Hero3DMode>('hologram');

  const handleSelect = (mode: Hero3DMode) => {
    setActiveMode(mode);
    setHero3DMode(mode);
  };

  return (
    <div className="inline-flex items-center p-1.5 rounded-full border border-white/10 bg-[#08080d]/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
      <span className="hidden sm:inline-block pl-3 pr-2 text-[10px] font-mono tracking-widest text-neutral-400 uppercase select-none">
        3D MODE:
      </span>
      <div className="flex items-center space-x-1">
        {MODES.map((m) => {
          const Icon = m.icon;
          const isActive = activeMode === m.id;

          return (
            <button
              key={m.id}
              onClick={() => handleSelect(m.id)}
              className={`relative inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer select-none ${
                isActive
                  ? `${m.activeColor} border shadow-[0_0_16px_rgba(56,189,248,0.25)] scale-[1.03]`
                  : 'text-neutral-400 border border-transparent hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className="w-3 h-3" />
              <span>{m.label}</span>
              {isActive && (
                <motion.span
                  layoutId="active3dIndicator"
                  className="absolute inset-0 rounded-full border pointer-events-none"
                  style={{ borderColor: 'currentColor' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
