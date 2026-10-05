'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export type Hero3DMode = 'hologram' | 'wireframe' | 'neon' | 'explode';

export function setHero3DMode(mode: Hero3DMode) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('apexgen:3d-mode', { detail: { mode } }));
  }
}

export function Hero3DScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ── WebGL availability guard ─────────────────────────────────
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) return;
    } catch {
      return;
    }

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let isDisposed = false;
    let animationFrameId: number;
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // ── Viewport Profile Function ────────────────────────────────
    const getViewportConfig = (w: number, h: number) => {
      const aspect = w / (h || 1);
      const isMobile = w < 640;
      const isTablet = w >= 640 && w < 1024;

      if (isMobile) {
        // Mobile portrait: Center the hyper-structure perfectly in the upper-mid viewport
        // Increase FOV in portrait mode to ensure rings and geometry never clip on phone edges
        const fov = aspect < 0.48 ? 58 : aspect < 0.6 ? 52 : 46;
        return {
          isMobile: true,
          isDesktop: false,
          fov,
          camX: 0,
          camY: 0.25,
          camZ: 14.8,
          lookX: 0,
          lookY: 0.1,
          objX: 0,
          objY: 0.15,
          scale: 0.76,
          parallaxX: 0.55,
          parallaxY: 0.35,
          rayOpacity: 0.045,
          waveY: -4.8,
        };
      }

      if (isTablet) {
        return {
          isMobile: false,
          isDesktop: false,
          fov: 42,
          camX: -0.3,
          camY: 0.3,
          camZ: 14.2,
          lookX: 1.8,
          lookY: 0.15,
          objX: 2.2,
          objY: 0.1,
          scale: 1.05,
          parallaxX: 0.85,
          parallaxY: 0.5,
          rayOpacity: 0.065,
          waveY: -5.0,
        };
      }

      // Desktop: Signature right-aligned composition framing editorial text
      return {
        isMobile: false,
        isDesktop: true,
        fov: 38,
        camX: -0.9,
        camY: 0.5,
        camZ: 13.8,
        lookX: 2.6,
        lookY: 0.15,
        objX: 3.9,
        objY: 0.15,
        scale: 1.34,
        parallaxX: 1.25,
        parallaxY: 0.75,
        rayOpacity: 0.085,
        waveY: -5.0,
      };
    };

    let vpConfig = getViewportConfig(width, height);

    // ── Scene & Camera ───────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050507, 0.02);

    const camera = new THREE.PerspectiveCamera(vpConfig.fov, width / height, 0.1, 160);
    camera.position.set(vpConfig.camX, vpConfig.camY, vpConfig.camZ);
    camera.lookAt(vpConfig.lookX, vpConfig.lookY, 0);

    // ── Renderer ─────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      antialias: !vpConfig.isMobile,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, vpConfig.isMobile ? 1.5 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.domElement.style.pointerEvents = 'none';
    container.appendChild(renderer.domElement);

    // ── Group Hierarchy ──────────────────────────────────────────
    const sceneRoot = new THREE.Group();
    scene.add(sceneRoot);

    const objectGroup = new THREE.Group();
    sceneRoot.add(objectGroup);

    objectGroup.position.set(vpConfig.objX, vpConfig.objY, 0);
    objectGroup.scale.setScalar(vpConfig.scale);

    // ════════════════════════════════════════════════════════════
    // 1.  OUTER ARCHITECTURAL SHELL – High-transparency crystal hull
    //     Glass-metallic facets that catch blue/violet specular glints
    // ════════════════════════════════════════════════════════════
    const outerGeo = new THREE.IcosahedronGeometry(3.6, 2);
    const outerMat = new THREE.MeshPhysicalMaterial({
      color: 0x081328,
      emissive: 0x3b82f6,
      emissiveIntensity: 0.42,
      roughness: 0.08,
      metalness: 0.38,
      transmission: 0.72,
      thickness: 2.2,
      reflectivity: 1.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.03,
      transparent: true,
      opacity: 0.88,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    objectGroup.add(outerMesh);

    // Primary wireframe lattice — electric blue
    const outerWireGeo = new THREE.IcosahedronGeometry(3.64, 2);
    const outerWireMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const outerWireMesh = new THREE.Mesh(outerWireGeo, outerWireMat);
    objectGroup.add(outerWireMesh);

    // Secondary geodesic cage — soft violet moiré layer
    const geodesicGeo = new THREE.DodecahedronGeometry(3.52, 1);
    const geodesicMat = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
    });
    const geodesicMesh = new THREE.Mesh(geodesicGeo, geodesicMat);
    objectGroup.add(geodesicMesh);

    // ════════════════════════════════════════════════════════════
    // 2.  MID SHELL – Dark obsidian violet octahedron
    // ════════════════════════════════════════════════════════════
    const midGeo = new THREE.OctahedronGeometry(2.15, 2);
    const midMat = new THREE.MeshPhysicalMaterial({
      color: 0x120826,
      emissive: 0x8b5cf6,
      emissiveIntensity: 0.82,
      roughness: 0.10,
      metalness: 0.65,
      transmission: 0.45,
      thickness: 1.4,
      clearcoat: 1.0,
      clearcoatRoughness: 0.04,
      transparent: true,
      opacity: 0.92,
    });
    const midMesh = new THREE.Mesh(midGeo, midMat);
    objectGroup.add(midMesh);

    const midWireGeo = new THREE.OctahedronGeometry(2.18, 2);
    const midWireMat = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      wireframe: true,
      transparent: true,
      opacity: 0.52,
      blending: THREE.AdditiveBlending,
    });
    const midWireMesh = new THREE.Mesh(midWireGeo, midWireMat);
    objectGroup.add(midWireMesh);

    // ════════════════════════════════════════════════════════════
    // 3.  INNER CORE – Radiant Quantum Singularity
    //     Multi-faceted pulsing crystal energy heart
    // ════════════════════════════════════════════════════════════
    const coreGeo = new THREE.OctahedronGeometry(1.0, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xffffff,
      emissiveIntensity: 5.5,
      roughness: 0.02,
      metalness: 0.92,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    objectGroup.add(coreMesh);

    // Cyan wireframe energy cage around core
    const coreAuraGeo = new THREE.TetrahedronGeometry(1.3, 1);
    const coreAuraMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const coreAuraMesh = new THREE.Mesh(coreAuraGeo, coreAuraMat);
    objectGroup.add(coreAuraMesh);

    // Dual-tone interior radiance
    const coreLightViolet = new THREE.PointLight(0xc084fc, 8.5, 22);
    objectGroup.add(coreLightViolet);

    const coreLightCyan = new THREE.PointLight(0x22d3ee, 4.2, 12);
    objectGroup.add(coreLightCyan);

    // ════════════════════════════════════════════════════════════
    // 4.  ORBITAL QUANTUM RINGS & ENERGY BEADS
    // ════════════════════════════════════════════════════════════
    const ringDefs = [
      { radius: 4.5, tube: 0.018, color: 0x3b82f6, opacity: 0.55, rx: Math.PI * 0.32, ry: Math.PI * 0.12, speed: 0.32 },
      { radius: 5.3, tube: 0.014, color: 0x8b5cf6, opacity: 0.42, rx: -Math.PI * 0.24, ry: Math.PI * 0.52, speed: -0.25 },
      { radius: 6.1, tube: 0.010, color: 0x22d3ee, opacity: 0.28, rx: Math.PI * 0.62, ry: -Math.PI * 0.22, speed: 0.18 },
      { radius: 7.0, tube: 0.007, color: 0xc084fc, opacity: 0.18, rx: -Math.PI * 0.45, ry: Math.PI * 0.32, speed: -0.12 },
    ];

    const beadGeo = new THREE.SphereGeometry(0.065, 8, 8);
    const rings = ringDefs.map(def => {
      const geo = new THREE.TorusGeometry(def.radius, def.tube, 8, 160);
      const mat = new THREE.MeshBasicMaterial({
        color: def.color,
        transparent: true,
        opacity: def.opacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = def.rx;
      mesh.rotation.y = def.ry;
      objectGroup.add(mesh);

      // Circulating energy bead on the ring
      const beadMat = new THREE.MeshBasicMaterial({
        color: def.color,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const beadMesh = new THREE.Mesh(beadGeo, beadMat);
      objectGroup.add(beadMesh);

      return { mesh, mat, beadMesh, def, angle: Math.random() * Math.PI * 2 };
    });

    // ════════════════════════════════════════════════════════════
    // 5.  VERTEX SPARKLE POINTS – GLOWING VERTICES
    // ════════════════════════════════════════════════════════════
    const sparkleGeo = new THREE.BufferGeometry();
    sparkleGeo.setAttribute('position', outerGeo.attributes.position.clone());
    const sparkleMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.10,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const sparklePoints = new THREE.Points(sparkleGeo, sparkleMat);
    objectGroup.add(sparklePoints);

    // ════════════════════════════════════════════════════════════
    // 6.  CONSTELLATION SATELLITE NODES
    // ════════════════════════════════════════════════════════════
    const orbiterCount = vpConfig.isMobile ? 8 : 16;
    const orbiterGeo = new THREE.SphereGeometry(0.052, 8, 8);
    const orbiterMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const orbiters: THREE.Mesh[] = [];
    for (let i = 0; i < orbiterCount; i++) {
      const m = new THREE.Mesh(orbiterGeo, orbiterMat);
      objectGroup.add(m);
      orbiters.push(m);
    }

    // ════════════════════════════════════════════════════════════
    // 7.  UNDULATING DATA-TOPOLOGY WAVE GRID
    // ════════════════════════════════════════════════════════════
    const gridCols = vpConfig.isMobile ? 48 : vpConfig.isDesktop ? 88 : 64;
    const gridRows = vpConfig.isMobile ? 48 : vpConfig.isDesktop ? 88 : 64;
    const gridSpacing = 0.50;
    const totalPts = gridCols * gridRows;

    const wavePosArr = new Float32Array(totalPts * 3);
    const waveColArr = new Float32Array(totalPts * 3);
    const waveBaseCoords: { x: number; z: number }[] = [];

    let pi = 0;
    const hW = (gridCols * gridSpacing) / 2;
    const hD = (gridRows * gridSpacing) / 2;
    for (let i = 0; i < gridCols; i++) {
      for (let j = 0; j < gridRows; j++) {
        const x = i * gridSpacing - hW;
        const z = j * gridSpacing - hD;
        wavePosArr[pi * 3]     = x;
        wavePosArr[pi * 3 + 1] = vpConfig.waveY;
        wavePosArr[pi * 3 + 2] = z;
        waveColArr[pi * 3]     = 0.18;
        waveColArr[pi * 3 + 1] = 0.36;
        waveColArr[pi * 3 + 2] = 0.95;
        waveBaseCoords.push({ x, z });
        pi++;
      }
    }

    const waveGeo = new THREE.BufferGeometry();
    waveGeo.setAttribute('position', new THREE.BufferAttribute(wavePosArr, 3));
    waveGeo.setAttribute('color',    new THREE.BufferAttribute(waveColArr, 3));

    const waveMat = new THREE.PointsMaterial({
      size: vpConfig.isMobile ? 0.042 : 0.054,
      vertexColors: true,
      transparent: true,
      opacity: 0.58,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const waveMesh = new THREE.Points(waveGeo, waveMat);
    waveMesh.rotation.x = 0.28;
    waveMesh.position.set(vpConfig.isMobile ? 0 : -2, 0, -2);
    sceneRoot.add(waveMesh);

    // ════════════════════════════════════════════════════════════
    // 8.  AMBIENT STARDUST
    // ════════════════════════════════════════════════════════════
    const starCount = vpConfig.isMobile ? 180 : 400;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPos[i]     = (Math.random() - 0.5) * 60;
      starPos[i + 1] = (Math.random() - 0.5) * 40;
      starPos[i + 2] = (Math.random() - 0.5) * 40 - 5;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.038,
      transparent: true,
      opacity: 0.38,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // ════════════════════════════════════════════════════════════
    // 9.  VOLUMETRIC GOD-RAYS
    // ════════════════════════════════════════════════════════════
    const rayGroup = new THREE.Group();
    scene.add(rayGroup);
    const rayGeo = new THREE.CylinderGeometry(0.15, 3.2, 32, 16, 1, true);
    const rayMatBlue = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: vpConfig.rayOpacity,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const rayMatViolet = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: vpConfig.rayOpacity * 0.85,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const rays: { mesh: THREE.Mesh; baseRotZ: number; speed: number }[] = [];
    const rayConfigs = [
      { x: 5, y: 12, z: -4, rx: 0.45, rz: -0.65, mat: rayMatBlue, speed: 0.4 },
      { x: 10, y: 10, z: -8, rx: 0.35, rz: -0.52, mat: rayMatViolet, speed: -0.3 },
      { x: 0, y: 14, z: 1, rx: 0.55, rz: -0.78, mat: rayMatBlue, speed: 0.5 },
      { x: 8, y: 15, z: -12, rx: 0.40, rz: -0.58, mat: rayMatViolet, speed: -0.4 },
    ];
    rayConfigs.forEach(cfg => {
      const ray = new THREE.Mesh(rayGeo, cfg.mat);
      ray.position.set(cfg.x, cfg.y, cfg.z);
      ray.rotation.x = cfg.rx;
      ray.rotation.z = cfg.rz;
      rayGroup.add(ray);
      rays.push({ mesh: ray, baseRotZ: cfg.rz, speed: cfg.speed });
    });

    // ════════════════════════════════════════════════════════════
    // 10. FLOATING CRYSTAL MONOLITHS (SHARDS)
    // ════════════════════════════════════════════════════════════
    const shardGroup = new THREE.Group();
    sceneRoot.add(shardGroup);
    const shardGeo = new THREE.BoxGeometry(0.72, 3.2, 0.12);
    const glassShardMat = new THREE.MeshPhysicalMaterial({
      color: 0x0a1428,
      emissive: 0x3b82f6,
      emissiveIntensity: 0.36,
      roughness: 0.08,
      metalness: 0.48,
      transmission: 0.72,
      thickness: 1.8,
      reflectivity: 1.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.03,
      transparent: true,
      opacity: 0.85,
    });
    const chromeShardMat = new THREE.MeshStandardMaterial({
      color: 0x140e24,
      emissive: 0x8b5cf6,
      emissiveIntensity: 0.42,
      metalness: 0.95,
      roughness: 0.12,
    });

    // Mobile: Position shards within visible frustum [-2.2, 2.2]
    const shardPrisms: { mesh: THREE.Mesh; rotSpeed: number; floatSpeed: number; baseY: number }[] = [];
    const shardConfigs = vpConfig.isMobile
      ? [
          { pos: [2.1, 1.4, -1.8], rot: [0.3, 0.4, 0.2], mat: glassShardMat, sc: 0.68 },
          { pos: [-2.1, -1.2, 0.8], rot: [-0.2, 0.5, -0.3], mat: chromeShardMat, sc: 0.62 },
          { pos: [1.8, -2.2, -1.0], rot: [0.4, -0.3, 0.2], mat: glassShardMat, sc: 0.58 },
          { pos: [-1.7, 2.0, -1.5], rot: [-0.3, 0.3, 0.4], mat: chromeShardMat, sc: 0.60 },
        ]
      : [
          { pos: [6.8, 2.4, -4], rot: [0.3, 0.4, 0.2], mat: glassShardMat, sc: 1.15 },
          { pos: [1.2, -2.6, 2], rot: [-0.2, 0.6, -0.4], mat: chromeShardMat, sc: 0.85 },
          { pos: [6.2, -3.0, -2], rot: [0.5, -0.3, 0.3], mat: glassShardMat, sc: 0.95 },
          { pos: [2.0, 3.6, -3], rot: [-0.4, 0.5, 0.1], mat: chromeShardMat, sc: 0.75 },
          { pos: [-3.8, 2.0, -7], rot: [0.2, -0.5, -0.3], mat: glassShardMat, sc: 1.25 },
          { pos: [8.4, -0.5, -6], rot: [-0.3, 0.2, 0.5], mat: chromeShardMat, sc: 0.9 },
        ];

    shardConfigs.forEach((cfg, idx) => {
      const mesh = new THREE.Mesh(shardGeo, cfg.mat);
      mesh.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
      mesh.rotation.set(cfg.rot[0], cfg.rot[1], cfg.rot[2]);
      mesh.scale.setScalar(cfg.sc);
      shardGroup.add(mesh);
      shardPrisms.push({
        mesh,
        rotSpeed: 0.006 + (idx % 3) * 0.005,
        floatSpeed: 0.7 + (idx % 2) * 0.5,
        baseY: cfg.pos[1],
      });
    });

    // ════════════════════════════════════════════════════════════
    // 11. BOKEH DUST PARTICLES
    // ════════════════════════════════════════════════════════════
    const bokehCount = vpConfig.isMobile ? 24 : 52;
    const bokehPos = new Float32Array(bokehCount * 3);
    const bokehCol = new Float32Array(bokehCount * 3);
    for (let b = 0; b < bokehCount; b++) {
      bokehPos[b * 3]     = (Math.random() - 0.4) * 30;
      bokehPos[b * 3 + 1] = (Math.random() - 0.5) * 20;
      bokehPos[b * 3 + 2] = (Math.random() - 0.5) * 18 + 2;
      const isBlue = b % 2 === 0;
      bokehCol[b * 3]     = isBlue ? 0.23 : 0.55;
      bokehCol[b * 3 + 1] = isBlue ? 0.51 : 0.36;
      bokehCol[b * 3 + 2] = 0.96;
    }
    const bokehGeo = new THREE.BufferGeometry();
    bokehGeo.setAttribute('position', new THREE.BufferAttribute(bokehPos, 3));
    bokehGeo.setAttribute('color', new THREE.BufferAttribute(bokehCol, 3));
    const bokehMat = new THREE.PointsMaterial({
      size: vpConfig.isMobile ? 0.12 : 0.20,
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const bokehPoints = new THREE.Points(bokehGeo, bokehMat);
    sceneRoot.add(bokehPoints);

    // ════════════════════════════════════════════════════════════
    // 12. DYNAMIC LIGHTING
    // ════════════════════════════════════════════════════════════
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.70);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 4.0);
    keyLight.position.set(6, 12, 10);
    scene.add(keyLight);

    const blueLight = new THREE.PointLight(0x3b82f6, 9.5, 45);
    blueLight.position.set(7, 3, 8);
    scene.add(blueLight);

    const violetLight = new THREE.PointLight(0x8b5cf6, 8.5, 40);
    violetLight.position.set(-8, -4, 4);
    scene.add(violetLight);

    const cursorLight = new THREE.PointLight(0xffffff, 3.8, 22);
    cursorLight.position.set(0, 0, 7);
    scene.add(cursorLight);

    // ════════════════════════════════════════════════════════════
    // MOUSE & TOUCH TRACKING
    // ════════════════════════════════════════════════════════════
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollFrac = 0;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let cx = 0, cy = 0;
      if ('touches' in e && e.touches.length > 0) {
        cx = e.touches[0].clientX;
        cy = e.touches[0].clientY;
      } else if ('clientX' in e) {
        cx = (e as MouseEvent).clientX;
        cy = (e as MouseEvent).clientY;
      }
      mouse.targetX = (cx / width) * 2 - 1;
      mouse.targetY = -(cy / height) * 2 + 1;
    };

    const handleTouchEnd = () => {
      // Gracefully float back to rest
      mouse.targetX = 0;
      mouse.targetY = 0;
    };

    const handleScroll = () => {
      scrollFrac = Math.min(1, window.scrollY / (window.innerHeight * 0.85));
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchstart', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // ════════════════════════════════════════════════════════════
    // MODE SWITCHING
    // ════════════════════════════════════════════════════════════
    let explodeScale = 1.0, targetExplodeScale = 1.0;

    const handleModeChange = (e: Event) => {
      const mode = (e as CustomEvent<{ mode: Hero3DMode }>).detail?.mode;
      if (!mode) return;
      if (mode === 'wireframe') {
        outerMat.opacity = 0; outerWireMat.opacity = 0.9;
        midMat.opacity = 0; midWireMat.opacity = 0.7;
        geodesicMat.opacity = 0.8;
        coreMat.emissive.setHex(0x06b6d4); coreLightViolet.color.setHex(0x06b6d4);
        targetExplodeScale = 1.0;
      } else if (mode === 'neon') {
        outerMat.emissive.setHex(0xf43f5e); outerMat.emissiveIntensity = 0.65;
        outerWireMat.color.setHex(0xf43f5e);
        midWireMat.color.setHex(0xa855f7);
        coreMat.emissive.setHex(0xf43f5e); coreLightViolet.color.setHex(0xf43f5e);
        targetExplodeScale = 1.12;
      } else if (mode === 'explode') {
        targetExplodeScale = 1.6;
        outerWireMat.opacity = 0.6; midWireMat.opacity = 0.5;
      } else {
        // hologram (default)
        outerMat.opacity = 0.88; outerMat.emissive.setHex(0x3b82f6); outerMat.emissiveIntensity = 0.42;
        outerWireMat.color.setHex(0x3b82f6); outerWireMat.opacity = 0.45;
        midMat.opacity = 0.92; midWireMat.color.setHex(0xc084fc); midWireMat.opacity = 0.52;
        geodesicMat.opacity = 0.28;
        coreMat.emissive.setHex(0xffffff); coreLightViolet.color.setHex(0xc084fc);
        rings.forEach(r => { r.mat.color.setHex(r.def.color); r.mat.opacity = r.def.opacity; });
        targetExplodeScale = 1.0;
      }
    };

    window.addEventListener('apexgen:3d-mode', handleModeChange);

    // ════════════════════════════════════════════════════════════
    // RESIZE HANDLER – Responsive recalibration
    // ════════════════════════════════════════════════════════════
    const handleResize = () => {
      if (isDisposed || !container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;

      vpConfig = getViewportConfig(width, height);

      camera.fov = vpConfig.fov;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, vpConfig.isMobile ? 1.5 : 2));

      objectGroup.position.set(vpConfig.objX, vpConfig.objY, 0);
      objectGroup.scale.setScalar(vpConfig.scale * explodeScale);
    };
    window.addEventListener('resize', handleResize);

    // ════════════════════════════════════════════════════════════
    // INTERSECTION OBSERVER – pause when off-screen
    // ════════════════════════════════════════════════════════════
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting; },
      { threshold: 0.02 }
    );
    observer.observe(container);

    // ════════════════════════════════════════════════════════════
    // ANIMATION LOOP
    // ════════════════════════════════════════════════════════════
    const clock = performance.now();

    const animate = () => {
      if (isDisposed) return;
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const t = (performance.now() - clock) * 0.001;
      const speed = prefersReducedMotion ? 0.1 : 1.0;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      // Explode scale easing
      explodeScale += (targetExplodeScale - explodeScale) * 0.055;
      const baseScale = vpConfig.scale * explodeScale;
      objectGroup.scale.setScalar(baseScale);

      // ── Cursor spotlight tracks mouse/touch ───────────────────
      cursorLight.position.x += (mouse.x * 8 - cursorLight.position.x) * 0.04;
      cursorLight.position.y += (mouse.y * 6 - cursorLight.position.y) * 0.04;

      // ── Parallax tilt on scene root ──────────────────────────
      sceneRoot.rotation.y += (mouse.x * 0.12 - sceneRoot.rotation.y) * 0.04;
      sceneRoot.rotation.x += (-mouse.y * 0.08 - sceneRoot.rotation.x) * 0.04;

      // ── Scroll-linked: sink + fade the objectGroup ───────────
      const scrollSink = scrollFrac * 2.5;
      objectGroup.position.y = (vpConfig.objY) + Math.sin(t * speed * 0.9) * 0.16 - scrollSink;
      objectGroup.position.z = -scrollFrac * 4.5;
      const scrollOpacity = Math.max(0, 1 - scrollFrac * 2.2);

      outerMat.opacity = 0.88 * scrollOpacity;
      outerWireMat.opacity = 0.45 * scrollOpacity;
      geodesicMat.opacity = 0.28 * scrollOpacity;
      midMat.opacity = 0.92 * scrollOpacity;
      waveMat.opacity = Math.max(0, 0.58 - scrollFrac * 0.6);

      // ── Outer shell: slow steady rotation ────────────────────
      outerMesh.rotation.y = t * speed * 0.14;
      outerMesh.rotation.x = t * speed * 0.09;
      outerWireMesh.rotation.y = t * speed * 0.14;
      outerWireMesh.rotation.x = t * speed * 0.09;
      geodesicMesh.rotation.y = -t * speed * 0.10;
      geodesicMesh.rotation.z = t * speed * 0.07;
      sparklePoints.rotation.y = t * speed * 0.14;
      sparklePoints.rotation.x = t * speed * 0.09;

      // ── Mid octahedron: counter-rotates ──────────────────────
      midMesh.rotation.y = -t * speed * 0.22;
      midMesh.rotation.z = t * speed * 0.12;
      midWireMesh.rotation.y = -t * speed * 0.22;
      midWireMesh.rotation.z = t * speed * 0.12;

      // ── Core pulse & rotation ────────────────────────────────
      coreMesh.rotation.y = t * speed * 0.55;
      coreMesh.rotation.z = -t * speed * 0.38;
      coreAuraMesh.rotation.y = -t * speed * 0.42;
      coreAuraMesh.rotation.x = t * speed * 0.32;

      const pulse = 1.0 + Math.sin(t * speed * 2.6) * 0.18;
      coreMesh.scale.setScalar(pulse);
      coreAuraMesh.scale.setScalar(pulse * 1.05);

      coreLightViolet.intensity = 6.5 + Math.sin(t * speed * 2.6) * 2.5;
      coreLightCyan.intensity = 3.5 + Math.cos(t * speed * 2.6) * 1.5;

      // ── Orbital rings & circulating beads ────────────────────
      rings.forEach(r => {
        r.mesh.rotation.z += r.def.speed * speed * 0.008;
        r.angle += r.def.speed * speed * 0.015;
        // Position bead on ring perimeter
        const bRad = r.def.radius;
        const bx = Math.cos(r.angle) * bRad;
        const by = Math.sin(r.angle) * bRad;
        // Transform along ring inclination
        const cosX = Math.cos(r.mesh.rotation.x);
        const sinX = Math.sin(r.mesh.rotation.x);
        const cosY = Math.cos(r.mesh.rotation.y);
        const sinY = Math.sin(r.mesh.rotation.y);
        r.beadMesh.position.set(
          bx * cosY - by * sinX * sinY,
          by * cosX,
          bx * sinY + by * sinX * cosY
        );
      });

      // ── Constellation satellites ─────────────────────────────
      for (let k = 0; k < orbiterCount; k++) {
        const angle = t * speed * (0.65 + (k % 3) * 0.2) + (k * (Math.PI * 2)) / orbiterCount;
        const radius = 4.5 + (k % 4) * 0.6;
        const tiltX = (k % 2 === 0 ? 0.42 : -0.35);
        const tiltY = (k % 3 === 0 ? 0.72 : 0.28);
        orbiters[k].position.set(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius * tiltX,
          Math.sin(angle) * radius * tiltY
        );
        const sc = 0.7 + Math.sin(t * speed * 2.8 + k) * 0.45;
        orbiters[k].scale.setScalar(Math.max(0.1, sc));
      }

      // ── Wave grid dynamics ───────────────────────────────────
      const posAttr = waveGeo.attributes.position as THREE.BufferAttribute;
      const colAttr = waveGeo.attributes.color as THREE.BufferAttribute;
      const posA = posAttr.array as Float32Array;
      const colA = colAttr.array as Float32Array;

      for (let i = 0; i < totalPts; i++) {
        const { x, z } = waveBaseCoords[i];
        const dist = Math.sqrt(x * x + z * z);
        const w1 = Math.sin(dist * 0.38 - t * speed * 1.5) * 0.52;
        const w2 = Math.cos(x * 0.28 + t * speed * 1.0) * 0.32;
        const mDist = Math.sqrt((x - mouse.x * 7) ** 2 + (z - mouse.y * 7) ** 2);
        const mWave = Math.sin(mDist * 0.5 - t * speed * 2.0) * Math.max(0, 1 - mDist / 9) * 0.42;

        const h = w1 + w2 + mWave;
        posA[i * 3 + 1] = vpConfig.waveY + h;

        const hn = Math.max(0, Math.min(1, (h + 0.9) / 1.8));
        const mn = Math.max(0, 1 - mDist / 7);
        colA[i * 3]     = 0.12 + hn * 0.55 + mn * 0.35;
        colA[i * 3 + 1] = 0.28 + hn * 0.65 + mn * 0.35;
        colA[i * 3 + 2] = 0.88 + hn * 0.12;
      }
      posAttr.needsUpdate = true;
      colAttr.needsUpdate = true;

      // ── Shards & Monoliths floating ──────────────────────────
      shardPrisms.forEach(s => {
        s.mesh.rotation.y += s.rotSpeed * speed;
        s.mesh.rotation.x += s.rotSpeed * speed * 0.5;
        s.mesh.position.y = s.baseY + Math.sin(t * speed * s.floatSpeed) * 0.20;
      });

      // ── Volumetric rays breathing ────────────────────────────
      rays.forEach(r => {
        r.mesh.rotation.z = r.baseRotZ + Math.sin(t * speed * r.speed) * 0.05;
      });

      // ── Bokeh particles upward drift ─────────────────────────
      bokehPoints.rotation.y = t * speed * 0.02;
      const bPos = bokehGeo.attributes.position.array as Float32Array;
      for (let b = 0; b < bokehCount; b++) {
        bPos[b * 3 + 1] += 0.008 * speed;
        if (bPos[b * 3 + 1] > 14) bPos[b * 3 + 1] = -10;
      }
      bokehGeo.attributes.position.needsUpdate = true;

      // ── Star field drifts slowly ──────────────────────────────
      starField.rotation.y = t * speed * 0.016;
      starField.rotation.x = t * speed * 0.006;

      // ── Camera responsive breathing & parallax ───────────────
      camera.position.x = vpConfig.camX + Math.sin(t * speed * 0.15) * 0.35 + mouse.x * vpConfig.parallaxX;
      camera.position.y = vpConfig.camY + Math.cos(t * speed * 0.12) * 0.22 + mouse.y * vpConfig.parallaxY;
      camera.position.z = vpConfig.camZ;
      camera.lookAt(vpConfig.lookX, vpConfig.lookY, 0);

      // ── Accent light animations ───────────────────────────────
      blueLight.intensity = 7.0 + Math.sin(t * speed * 0.8) * 1.5;
      violetLight.intensity = 5.5 + Math.cos(t * speed * 0.65) * 1.2;

      renderer.render(scene, camera);
    };

    animate();

    // ════════════════════════════════════════════════════════════
    // CLEANUP
    // ════════════════════════════════════════════════════════════
    return () => {
      isDisposed = true;
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchstart', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('apexgen:3d-mode', handleModeChange);

      [outerGeo, outerWireGeo, geodesicGeo, midGeo, midWireGeo, coreGeo, coreAuraGeo, orbiterGeo, beadGeo,
       sparkleGeo, waveGeo, starGeo, rayGeo, shardGeo, bokehGeo].forEach(g => g.dispose());
      [outerMat, outerWireMat, geodesicMat, midMat, midWireMat, coreMat, coreAuraMat, orbiterMat,
       sparkleMat, waveMat, starMat, rayMatBlue, rayMatViolet, glassShardMat, chromeShardMat, bokehMat].forEach(m => m.dispose());
      rings.forEach(r => { r.mesh.geometry.dispose(); r.mat.dispose(); r.beadMesh.material.dispose(); });

      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-[2]"
      aria-hidden="true"
    />
  );
}
