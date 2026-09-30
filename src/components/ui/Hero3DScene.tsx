'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

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
    renderer.toneMappingExposure = 1.1;

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
    // 1. Core 3D Crystalline Polyhedron (Icosahedron & Wireframe)
    // ----------------------------------------------------
    // Inner Solid Faceted Mesh
    const innerGeo = new THREE.IcosahedronGeometry(2.1, 1);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0x11131c,
      emissive: 0x0c101a,
      roughness: 0.15,
      metalness: 0.85,
      transmission: 0.6,
      thickness: 1.2,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    objectGroup.add(innerMesh);

    // Outer Glowing Wireframe Lattice
    const wireGeo = new THREE.IcosahedronGeometry(2.15, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x94a3b8,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    objectGroup.add(wireMesh);

    // Vertices Glow Points
    const innerWirePositions = wireGeo.attributes.position;
    const vertexPointsGeo = new THREE.BufferGeometry();
    vertexPointsGeo.setAttribute('position', innerWirePositions);
    const vertexPointsMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.09,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const vertexPoints = new THREE.Points(vertexPointsGeo, vertexPointsMat);
    objectGroup.add(vertexPoints);

    // ----------------------------------------------------
    // 2. Concentric Orbital Cybernetic Rings
    // ----------------------------------------------------
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x64748b,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const ringGeo1 = new THREE.TorusGeometry(3.3, 0.015, 16, 100);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI * 0.35;
    ring1.rotation.y = Math.PI * 0.15;
    objectGroup.add(ring1);

    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x94a3b8,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const ringGeo2 = new THREE.TorusGeometry(3.8, 0.012, 16, 100);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI * 0.25;
    ring2.rotation.z = Math.PI * 0.4;
    objectGroup.add(ring2);

    // ----------------------------------------------------
    // 3. Orbiting Satellite Nodes on Rings
    // ----------------------------------------------------
    const satelliteGeo = new THREE.SphereGeometry(0.06, 12, 12);
    const satelliteMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: false,
    });
    const satellite1 = new THREE.Mesh(satelliteGeo, satelliteMat);
    const satellite2 = new THREE.Mesh(satelliteGeo, satelliteMat);
    objectGroup.add(satellite1);
    objectGroup.add(satellite2);

    // ----------------------------------------------------
    // 4. Undulating 3D Particle Grid Wave (Digital Terrain)
    // ----------------------------------------------------
    const gridCols = isDesktop ? 65 : 45;
    const gridRows = isDesktop ? 65 : 45;
    const gridSpacing = 0.55;
    const totalPoints = gridCols * gridRows;

    const wavePositions = new Float32Array(totalPoints * 3);
    const originalWaveCoords: { x: number; z: number }[] = [];

    let pIdx = 0;
    const halfWidth = (gridCols * gridSpacing) / 2;
    const halfDepth = (gridRows * gridSpacing) / 2;

    for (let i = 0; i < gridCols; i++) {
      for (let j = 0; j < gridRows; j++) {
        const x = i * gridSpacing - halfWidth;
        const z = j * gridSpacing - halfDepth;
        wavePositions[pIdx * 3] = x;
        wavePositions[pIdx * 3 + 1] = -4.5; // baseY
        wavePositions[pIdx * 3 + 2] = z;
        originalWaveCoords.push({ x, z });
        pIdx++;
      }
    }

    const waveGeo = new THREE.BufferGeometry();
    waveGeo.setAttribute('position', new THREE.BufferAttribute(wavePositions, 3));

    const waveMat = new THREE.PointsMaterial({
      color: 0x818cf8,
      size: 0.045,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const wavePoints = new THREE.Points(waveGeo, waveMat);
    wavePoints.rotation.x = 0.25; // tilt towards camera
    mainGroup.add(wavePoints);

    // ----------------------------------------------------
    // 5. Ambient Floating Stardust Field
    // ----------------------------------------------------
    const starCount = isDesktop ? 220 : 120;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 35;
      starPositions[i + 1] = (Math.random() - 0.5) * 22;
      starPositions[i + 2] = (Math.random() - 0.5) * 25;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.04,
      transparent: true,
      opacity: 0.35,
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
      objectGroup.scale.setScalar(desktopNow ? 0.82 : 0.62);
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

      // Dynamic Interactive Mouse Light positioning
      mouseLight.position.x = mouse.x * 7;
      mouseLight.position.y = mouse.y * 5;

      // Parallax Tilt on Main Group
      mainGroup.rotation.y = mouse.x * 0.22;
      mainGroup.rotation.x = -mouse.y * 0.15;

      // Rotate 3D Core Object
      innerMesh.rotation.y = elapsedTime * 0.22;
      innerMesh.rotation.x = elapsedTime * 0.14;
      wireMesh.rotation.y = elapsedTime * 0.22;
      wireMesh.rotation.x = elapsedTime * 0.14;
      vertexPoints.rotation.y = elapsedTime * 0.22;
      vertexPoints.rotation.x = elapsedTime * 0.14;

      // Floating vertical bobbing
      objectGroup.position.y = (width >= 768 ? 0.65 : -0.35) + Math.sin(elapsedTime * 1.2) * 0.14;

      // Rotate Rings in opposite directions
      ring1.rotation.z = elapsedTime * 0.35;
      ring2.rotation.z = -elapsedTime * 0.28;

      // Update Satellite positions
      const satAngle1 = elapsedTime * 1.4;
      satellite1.position.set(
        Math.cos(satAngle1) * 3.3,
        Math.sin(satAngle1) * 3.3 * 0.45,
        Math.sin(satAngle1) * 3.3 * 0.8
      );

      const satAngle2 = -elapsedTime * 1.1;
      satellite2.position.set(
        Math.cos(satAngle2) * 3.8 * 0.7,
        Math.sin(satAngle2) * 3.8,
        Math.sin(satAngle2) * 3.8 * 0.5
      );

      // Animate Undulating 3D Wave Grid
      const posAttr = waveGeo.attributes.position as THREE.BufferAttribute;
      const array = posAttr.array as Float32Array;

      for (let i = 0; i < totalPoints; i++) {
        const { x, z } = originalWaveCoords[i];
        // Calculate dynamic height wave using distance and sine
        const distFromCenter = Math.sqrt(x * x + z * z);
        const wave1 = Math.sin(distFromCenter * 0.4 - elapsedTime * 1.5) * 0.45;
        const wave2 = Math.cos(x * 0.3 + elapsedTime * 1.1) * 0.3;
        const mouseWave =
          Math.sin(Math.sqrt((x - mouse.x * 6) ** 2 + (z - mouse.y * 6) ** 2) * 0.5 - elapsedTime * 2) *
          0.2;

        array[i * 3 + 1] = -4.5 + wave1 + wave2 + mouseWave;
      }
      posAttr.needsUpdate = true;

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

      // Dispose Geometries and Materials
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
      satelliteGeo.dispose();
      satelliteMat.dispose();
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
