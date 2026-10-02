'use client';

import React, { useEffect, useRef } from 'react';
import { Hero3DScene } from './Hero3DScene';

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: width * 0.5,
      y: height * 0.35,
      targetX: width * 0.5,
      targetY: height * 0.35,
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let time = 0;

    const render = () => {
      time += 0.006;

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // 1. Interactive Cursor Radial Monochrome Light
      const ambientGradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        Math.max(width, height) * 0.35
      );
      ambientGradient.addColorStop(0, 'rgba(255, 255, 255, 0.045)');
      ambientGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.01)');
      ambientGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = ambientGradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Subtle center silver beam
      const centerGlow = ctx.createRadialGradient(
        width * 0.5,
        height * 0.3 + Math.sin(time * 0.6) * 15,
        0,
        width * 0.5,
        height * 0.3,
        width * 0.45
      );
      centerGlow.addColorStop(0, 'rgba(255, 255, 255, 0.025)');
      centerGlow.addColorStop(0.7, 'rgba(255, 255, 255, 0.005)');
      centerGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Cybernetic Blueprint Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-70" />

      {/* Dynamic Luminous Aurora Sweeps */}
      <div className="absolute -top-[20%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-br from-[#FF5E00]/16 via-[#FF8533]/8 to-transparent rounded-full blur-[150px] pointer-events-none animate-pulse duration-[7000ms]" />
      <div className="absolute top-[30%] -left-[15%] w-[600px] h-[600px] bg-gradient-to-tr from-[#E64A00]/12 via-[#FF5E00]/6 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-[10%] right-[20%] w-[550px] h-[550px] bg-gradient-to-t from-[#FF5E00]/10 via-amber-600/5 to-transparent rounded-full blur-[130px] pointer-events-none" />

      {/* 3D WebGL Three.js Interactive Scene */}
      <Hero3DScene />

      {/* Ambient Canvas Lighting */}
      <canvas ref={canvasRef} className="w-full h-full block opacity-40 mix-blend-screen" />

      {/* Architectural Corner HUD Crosshairs & Telemetry */}
      <div className="absolute top-24 left-6 sm:left-12 flex items-center space-x-2 text-[9px] font-mono tracking-widest text-neutral-600 select-none opacity-60">
        <span className="text-[#FF5E00] font-bold">+</span>
        <span className="hidden sm:inline">APX-01 // COORD: 06&deg;55&apos;N</span>
      </div>
      <div className="absolute top-24 right-6 sm:right-12 flex items-center space-x-2 text-[9px] font-mono tracking-widest text-neutral-600 select-none opacity-60">
        <span className="hidden sm:inline">SYS // ARCHITECTURE</span>
        <span className="text-[#FF5E00] font-bold">+</span>
      </div>

      {/* Film grain texture */}
      <div className="absolute inset-0 bg-noise opacity-35 pointer-events-none" />

      {/* Top and Bottom soft vignette masks for seamless section transitions */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/60 via-transparent to-[#050507] pointer-events-none" />
    </div>
  );
}
