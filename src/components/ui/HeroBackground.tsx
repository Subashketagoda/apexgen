'use client';

import React, { useEffect, useRef } from 'react';

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
    const particleCount = 36;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 0.5,
      baseAlpha: Math.random() * 0.3 + 0.1,
    }));

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
        Math.max(width, height) * 0.4
      );
      ambientGradient.addColorStop(0, 'rgba(255, 255, 255, 0.06)');
      ambientGradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.015)');
      ambientGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = ambientGradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Subtle center silver beam
      const centerGlow = ctx.createRadialGradient(
        width * 0.5,
        height * 0.25 + Math.sin(time * 0.6) * 20,
        0,
        width * 0.5,
        height * 0.25,
        width * 0.5
      );
      centerGlow.addColorStop(0, 'rgba(255, 255, 255, 0.035)');
      centerGlow.addColorStop(0.7, 'rgba(255, 255, 255, 0.008)');
      centerGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, width, height);

      // 3. Subtle floating silver dust particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const currentAlpha = p.baseAlpha + Math.sin(time * 2 + i) * 0.1;
        const alpha = Math.max(0.05, Math.min(0.6, currentAlpha));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      }

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
      <canvas ref={canvasRef} className="w-full h-full block opacity-80" />
      {/* Film grain texture */}
      <div className="absolute inset-0 bg-noise opacity-70 pointer-events-none" />
      {/* Top and Bottom soft vignette masks */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050507] via-transparent to-[#050507] pointer-events-none opacity-80" />
    </div>
  );
}
