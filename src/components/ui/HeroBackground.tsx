'use client';

import React, { useEffect, useRef } from 'react';

export function HeroBackground() {
  const layerRef = useRef<{
    atmosphere: HTMLDivElement | null;
    grid: HTMLDivElement | null;
    lightA: HTMLDivElement | null;
    lightB: HTMLDivElement | null;
    lightC: HTMLDivElement | null;
    object: HTMLDivElement | null;
  }>({
    atmosphere: null,
    grid: null,
    lightA: null,
    lightB: null,
    lightC: null,
    object: null,
  });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const { atmosphere, grid, lightA, lightB, lightC, object } = layerRef.current;
    if (!atmosphere || !grid || !lightA || !lightB || !lightC || !object) return;

    const state = {
      x: 0,
      y: 0,
      tx: 0,
      ty: 0,
      scroll: 0,
      targetScroll: 0,
    };

    const applyTransforms = () => {
      const moveX = state.x * 14;
      const moveY = state.y * 12;

      atmosphere.style.transform = `translate3d(${moveX * 0.4}px, ${moveY * 0.45 + state.scroll * 0.12}px, 0)`;
      grid.style.transform = `translate3d(${moveX * 0.75}px, ${-state.scroll * 0.12 + moveY * 0.3}px, 0) perspective(1200px) rotateX(72deg)`;
      lightA.style.transform = `translate3d(${moveX * 0.55}px, ${state.scroll * 0.22 + moveY * 0.45}px, 0)`;
      lightB.style.transform = `translate3d(${moveX * 0.8}px, ${moveY * 0.7 - state.scroll * 0.18}px, 0)`;
      lightC.style.transform = `translate3d(${moveX * 0.95}px, ${moveY * 0.65 + state.scroll * 0.27}px, 0)`;
      object.style.transform = `translate3d(${moveX * 1.2}px, ${moveY * 1.1 - state.scroll * 0.18}px, 0) rotate(${state.x * 11}deg) rotateY(${state.y * 18}deg)`;
    };

    const handlePointer = (event: PointerEvent) => {
      state.tx = (event.clientX / window.innerWidth - 0.5) * 2;
      state.ty = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      state.targetScroll = window.scrollY * 0.4;
    };

    let rafId = 0;

    const tick = () => {
      state.x += (state.tx - state.x) * 0.06;
      state.y += (state.ty - state.y) * 0.06;
      state.scroll += (state.targetScroll - state.scroll) * 0.06;
      applyTransforms();
      rafId = window.requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', handlePointer, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', handlePointer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const setAtmosphereRef = (node: HTMLDivElement | null) => {
    layerRef.current.atmosphere = node;
  };

  const setGridRef = (node: HTMLDivElement | null) => {
    layerRef.current.grid = node;
  };

  const setLightARef = (node: HTMLDivElement | null) => {
    layerRef.current.lightA = node;
  };

  const setLightBRef = (node: HTMLDivElement | null) => {
    layerRef.current.lightB = node;
  };

  const setLightCRef = (node: HTMLDivElement | null) => {
    layerRef.current.lightC = node;
  };

  const setObjectRef = (node: HTMLDivElement | null) => {
    layerRef.current.object = node;
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <div className="absolute inset-0 bg-[#050507]" />

      <div ref={setAtmosphereRef} className="hero-atmosphere" />
      <div ref={setGridRef} className="hero-grid" />

      <div className="hero-noise" />

      <div ref={setLightARef} className="hero-light trail-a" />
      <div ref={setLightBRef} className="hero-light trail-b" />
      <div ref={setLightCRef} className="hero-light trail-c" />

      <div ref={setObjectRef} className="hero-object" />

      <div className="hero-vignette" />
    </div>
  );
}
