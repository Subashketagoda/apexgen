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

    // Check WebGL availability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) return;
    } catch {
      return;
    }

    let isDisposed = false;
    let animationFrameId: number;

    // Dimensions
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050507, 0.04);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 16);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.domElement.style.pointerEvents = 'none';
    container.appendChild(renderer.domElement);

    // Parent group for interactive parallax tilt
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Centerpiece group (positioned to the right on desktop, center on mobile)
    const objectGroup = new THREE.Group();
    mainGroup.add(objectGroup);

    const isDesktop = width >= 768;
    const targetGroupX = isDesktop ? 3.0 : 0;
    const targetGroupY = isDesktop ? 0.65 : -0.35;
    const targetScale = isDesktop ? 0.82 : 0.62;
    objectGroup.position.set(targetGroupX, targetGroupY, 0);
    objectGroup.scale.setScalar(targetScale);

    // ----------------------------------------------------
    // 1. Core 3D Crystalline Polyhedron with Internal Glowing Heart
    // ----------------------------------------------------
    // Internal Pulsing Arc Heart (Inner Octahedron)
    const heartGeo = new THREE.OctahedronGeometry(0.85, 0);
    const heartMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 1.2,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: false,
    });
    const heartMesh = new THREE.Mesh(heartGeo, heartMat);
    objectGroup.add(heartMesh);

    // Heart Inner Point Light
    const heartLight = new THREE.PointLight(0x38bdf8, 3.2, 10);
    objectGroup.add(heartLight);

    // Translucent Faceted Crystal Outer Shell
    const innerGeo = new THREE.IcosahedronGeometry(2.05, 1);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0x0f172a,
      emissive: 0x0284c7,
      emissiveIntensity: 0.15,
      roughness: 0.08,
      metalness: 0.92,
      transmission: 0.55,
      thickness: 1.4,
      reflectivity: 0.95,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      wireframe: false,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    objectGroup.add(innerMesh);

    // Outer Glowing Wireframe Lattice
    const wireGeo = new THREE.IcosahedronGeometry(2.1, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x93c5fd,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    objectGroup.add(wireMesh);

    // Vertices Glow Sparkle Points
    const innerWirePositions = wireGeo.attributes.position;
    const vertexPointsGeo = new THREE.BufferGeometry();
    vertexPointsGeo.setAttribute('position', innerWirePositions);
    const vertexPointsMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.12,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
    });
    const vertexPoints = new THREE.Points(vertexPointsGeo, vertexPointsMat);
    objectGroup.add(vertexPoints);

    // ----------------------------------------------------
    // 2. Concentric Cybernetic Orbital Rings (3 Rings)
    // ----------------------------------------------------
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const ringGeo1 = new THREE.TorusGeometry(3.2, 0.015, 16, 120);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI * 0.35;
    ring1.rotation.y = Math.PI * 0.15;
    objectGroup.add(ring1);

    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.24,
    });
    const ringGeo2 = new THREE.TorusGeometry(3.7, 0.012, 16, 120);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI * 0.28;
    ring2.rotation.z = Math.PI * 0.42;
    objectGroup.add(ring2);

    const ringMat3 = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const ringGeo3 = new THREE.TorusGeometry(4.2, 0.008, 16, 120);
    const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
    ring3.rotation.x = Math.PI * 0.6;
    ring3.rotation.y = -Math.PI * 0.25;
    objectGroup.add(ring3);

    // ----------------------------------------------------
    // 3. Orbiting Constellation Swarm (14 Nodes)
    // ----------------------------------------------------
    const constellationCount = 14;
    const constellationGeo = new THREE.SphereGeometry(0.055, 10, 10);
    const constellationMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
    });
    const constellationNodes: THREE.Mesh[] = [];
    for (let i = 0; i < constellationCount; i++) {
      const node = new THREE.Mesh(constellationGeo, constellationMat);
      objectGroup.add(node);
      constellationNodes.push(node);
    }

    // ----------------------------------------------------
    // 4. Undulating 3D Particle Grid Wave with Dynamic Colors
    // ----------------------------------------------------
    const gridCols = isDesktop ? 68 : 46;
    const gridRows = isDesktop ? 68 : 46;
    const gridSpacing = 0.52;
    const totalPoints = gridCols * gridRows;

    const wavePositions = new Float32Array(totalPoints * 3);
    const waveColors = new Float32Array(totalPoints * 3);
    const originalWaveCoords: { x: number; z: number }[] = [];

    let pIdx = 0;
    const halfWidth = (gridCols * gridSpacing) / 2;
    const halfDepth = (gridRows * gridSpacing) / 2;

    for (let i = 0; i < gridCols; i++) {
      for (let j = 0; j < gridRows; j++) {
        const x = i * gridSpacing - halfWidth;
        const z = j * gridSpacing - halfDepth;
        wavePositions[pIdx * 3] = x;
        wavePositions[pIdx * 3 + 1] = -3.8; // baseY
        wavePositions[pIdx * 3 + 2] = z;

        // Base color: cool electric blue
        waveColors[pIdx * 3] = 0.25;
        waveColors[pIdx * 3 + 1] = 0.45;
        waveColors[pIdx * 3 + 2] = 0.95;

        originalWaveCoords.push({ x, z });
        pIdx++;
      }
    }

    const waveGeo = new THREE.BufferGeometry();
    waveGeo.setAttribute('position', new THREE.BufferAttribute(wavePositions, 3));
    waveGeo.setAttribute('color', new THREE.BufferAttribute(waveColors, 3));

    const waveMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });
    const wavePoints = new THREE.Points(waveGeo, waveMat);
    wavePoints.rotation.x = 0.22; // tilt towards camera
    mainGroup.add(wavePoints);

    // ----------------------------------------------------
    // 5. Ambient Floating Stardust Field
    // ----------------------------------------------------
    const starCount = isDesktop ? 260 : 130;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 36;
      starPositions[i + 1] = (Math.random() - 0.5) * 24;
      starPositions[i + 2] = (Math.random() - 0.5) * 26;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.045,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const starPoints = new THREE.Points(starGeo, starMat);
    scene.add(starPoints);

    // ----------------------------------------------------
    // 6. Dynamic Lights
    // ----------------------------------------------------
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const primaryLight = new THREE.DirectionalLight(0xffffff, 1.8);
    primaryLight.position.set(5, 10, 8);
    scene.add(primaryLight);

    const accentLight1 = new THREE.PointLight(0x60a5fa, 2.5, 20); // Cyan/Ice blue
    accentLight1.position.set(4, 2, 5);
    scene.add(accentLight1);

    const accentLight2 = new THREE.PointLight(0xa855f7, 2.0, 20); // Purple/Violet
    accentLight2.position.set(-5, -3, 3);
    scene.add(accentLight2);

    // Interactive Cursor Spotlight
    const mouseLight = new THREE.PointLight(0xffffff, 2.2, 15);
    mouseLight.position.set(0, 0, 6);
    scene.add(mouseLight);

    // ----------------------------------------------------
    // Mouse Parallax & Tracking
    // ----------------------------------------------------
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      // Normalized coordinates (-1 to 1)
      mouse.targetX = (clientX / width) * 2 - 1;
      mouse.targetY = -(clientY / height) * 2 + 1;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    // Interactive 3D Mode State
    let currentMode: Hero3DMode = 'hologram';
    let explodeScale = 1.0;
    let targetExplodeScale = 1.0;

    const handleModeChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ mode: Hero3DMode }>;
      if (!customEvent.detail || !customEvent.detail.mode) return;
      currentMode = customEvent.detail.mode;

      if (currentMode === 'wireframe') {
        innerMesh.visible = false;
        wireMesh.visible = true;
        wireMat.color.setHex(0x38bdf8);
        wireMat.opacity = 0.85;
        vertexPointsMat.color.setHex(0xffffff);
        vertexPointsMat.size = 0.16;
        heartLight.color.setHex(0x06b6d4);
        heartLight.intensity = 4.5;
        targetExplodeScale = 1.0;
      } else if (currentMode === 'neon') {
        innerMesh.visible = true;
        innerMat.color.setHex(0x2e0854);
        innerMat.emissive.setHex(0xa855f7);
        innerMat.emissiveIntensity = 0.85;
        wireMat.color.setHex(0xf43f5e);
        wireMat.opacity = 0.65;
        vertexPointsMat.color.setHex(0xfb7185);
        heartLight.color.setHex(0xf43f5e);
        heartLight.intensity = 6.5;
        ringMat1.color.setHex(0xf43f5e);
        ringMat2.color.setHex(0xa855f7);
        ringMat3.color.setHex(0x38bdf8);
        targetExplodeScale = 1.08;
      } else if (currentMode === 'explode') {
        innerMesh.visible = true;
        innerMat.color.setHex(0x0f172a);
        innerMat.emissive.setHex(0x0284c7);
        innerMat.emissiveIntensity = 0.5;
        wireMat.color.setHex(0x38bdf8);
        wireMat.opacity = 0.7;
        vertexPointsMat.size = 0.2;
        heartLight.color.setHex(0x38bdf8);
        heartLight.intensity = 5.5;
        targetExplodeScale = 1.45;
      } else {
        // Hologram (default)
        innerMesh.visible = true;
        innerMat.color.setHex(0x0f172a);
        innerMat.emissive.setHex(0x0284c7);
        innerMat.emissiveIntensity = 0.25;
        wireMat.color.setHex(0x93c5fd);
        wireMat.opacity = 0.35;
        vertexPointsMat.color.setHex(0xffffff);
        vertexPointsMat.size = 0.12;
        heartLight.color.setHex(0x38bdf8);
        heartLight.intensity = 3.2;
        ringMat1.color.setHex(0x38bdf8);
        ringMat2.color.setHex(0xa855f7);
        ringMat3.color.setHex(0xffffff);
        targetExplodeScale = 1.0;
      }
    };

    window.addEventListener('apexgen:3d-mode', handleModeChange);

    // Handle Resize
    const handleResize = () => {
      if (!container || isDisposed) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const desktopNow = width >= 768;
      objectGroup.position.set(desktopNow ? 3.0 : 0, desktopNow ? 0.65 : -0.35, 0);
      objectGroup.scale.setScalar((desktopNow ? 0.82 : 0.62) * explodeScale);
    };

    window.addEventListener('resize', handleResize);

    // ----------------------------------------------------
    // Animation Loop
    // ----------------------------------------------------
    let clock = new THREE.Clock();
    let isVisible = true;

    // Pause animation when scrolled far out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const animate = () => {
      if (isDisposed) return;
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Smooth mode explode scaling
      explodeScale += (targetExplodeScale - explodeScale) * 0.06;
      const currentBaseScale = (width >= 768 ? 0.82 : 0.62) * explodeScale;
      objectGroup.scale.setScalar(currentBaseScale);

      // Dynamic Interactive Mouse Light positioning
      mouseLight.position.x = mouse.x * 7;
      mouseLight.position.y = mouse.y * 5;

      // Parallax Tilt on Main Group
      mainGroup.rotation.y = mouse.x * 0.22;
      mainGroup.rotation.x = -mouse.y * 0.15;

      // Rotate 3D Core Object & Internal Heart
      innerMesh.rotation.y = elapsedTime * 0.22;
      innerMesh.rotation.x = elapsedTime * 0.14;
      wireMesh.rotation.y = elapsedTime * 0.22;
      wireMesh.rotation.x = elapsedTime * 0.14;
      vertexPoints.rotation.y = elapsedTime * 0.22;
      vertexPoints.rotation.x = elapsedTime * 0.14;

      // Pulse and rotate internal Arc Heart
      heartMesh.rotation.y = -elapsedTime * 0.45;
      heartMesh.rotation.z = elapsedTime * 0.3;
      const heartPulse = 1.0 + Math.sin(elapsedTime * 2.4) * 0.15;
      heartMesh.scale.setScalar(heartPulse);
      heartLight.intensity = 2.4 + Math.sin(elapsedTime * 2.4) * 1.2;

      // Floating vertical bobbing
      objectGroup.position.y = (width >= 768 ? 0.65 : -0.35) + Math.sin(elapsedTime * 1.2) * 0.14;

      // Rotate Rings in distinct orbital patterns
      ring1.rotation.z = elapsedTime * 0.32;
      ring2.rotation.z = -elapsedTime * 0.26;
      ring3.rotation.z = elapsedTime * 0.18;

      // Update Constellation Nodes along orbital trajectories
      for (let k = 0; k < constellationCount; k++) {
        const angle = elapsedTime * (0.8 + (k % 3) * 0.25) + (k * (Math.PI * 2)) / constellationCount;
        const radius = 3.2 + (k % 3) * 0.5;
        const tiltX = (k % 2 === 0 ? 0.5 : -0.4);
        const tiltY = (k % 3 === 0 ? 0.8 : 0.3);

        const node = constellationNodes[k];
        node.position.set(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius * tiltX,
          Math.sin(angle) * radius * tiltY
        );

        // Gentle twinkling scale
        const scaleVal = 0.8 + Math.sin(elapsedTime * 3.0 + k) * 0.4;
        node.scale.setScalar(scaleVal);
      }

      // Animate Undulating 3D Wave Grid with Dynamic Vertex Colors
      const posAttr = waveGeo.attributes.position as THREE.BufferAttribute;
      const colAttr = waveGeo.attributes.color as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;
      const colArray = colAttr.array as Float32Array;

      for (let i = 0; i < totalPoints; i++) {
        const { x, z } = originalWaveCoords[i];
        // Calculate dynamic height wave using distance and sine
        const distFromCenter = Math.sqrt(x * x + z * z);
        const wave1 = Math.sin(distFromCenter * 0.4 - elapsedTime * 1.6) * 0.5;
        const wave2 = Math.cos(x * 0.32 + elapsedTime * 1.1) * 0.32;
        const mouseDist = Math.sqrt((x - mouse.x * 6.5) ** 2 + (z - mouse.y * 6.5) ** 2);
        const mouseWave = Math.sin(mouseDist * 0.55 - elapsedTime * 2.2) * Math.max(0, 1 - mouseDist / 8) * 0.35;

        const currentHeight = wave1 + wave2 + mouseWave;
        posArray[i * 3 + 1] = -3.8 + currentHeight;

        // Dynamic Color calculation:
        // Height factor: 0 (valleys) to 1 (peaks)
        const hNorm = Math.max(0, Math.min(1, (currentHeight + 0.8) / 1.6));
        // Mouse proximity factor
        const mNear = Math.max(0, 1 - mouseDist / 6.0);

        // Interpolate: Deep Obsidian/Indigo -> Ice Cyan -> Radiant Silver/White
        colArray[i * 3] = 0.15 + hNorm * 0.5 + mNear * 0.35; // R
        colArray[i * 3 + 1] = 0.3 + hNorm * 0.6 + mNear * 0.35; // G
        colArray[i * 3 + 2] = 0.85 + hNorm * 0.15; // B
      }
      posAttr.needsUpdate = true;
      colAttr.needsUpdate = true;

      // Slow drift of background stars
      starPoints.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // ----------------------------------------------------
    // Cleanup
    // ----------------------------------------------------
    return () => {
      isDisposed = true;
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('apexgen:3d-mode', handleModeChange);

      // Dispose Geometries and Materials
      heartGeo.dispose();
      heartMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      vertexPointsGeo.dispose();
      vertexPointsMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      ringGeo3.dispose();
      ringMat3.dispose();
      constellationGeo.dispose();
      constellationMat.dispose();
      waveGeo.dispose();
      waveMat.dispose();
      starGeo.dispose();
      starMat.dispose();

      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-0"
      aria-hidden="true"
    />
  );
}
