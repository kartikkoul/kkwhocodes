"use client";

import { useRef, useMemo, type ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const PARTICLE_COUNT = 2500;

function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const col = new Float32Array(PARTICLE_COUNT * 3);
    const colorA = new THREE.Color("#59BEB8");
    const colorB = new THREE.Color("#9655fe");

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const radius = Math.random() * 7 + 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = (radius * Math.sin(phi) * Math.sin(theta)) * 0.6;
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const mixed = colorA.clone().lerp(colorB, Math.random());
      col[i * 3] = mixed.r;
      col[i * 3 + 1] = mixed.g;
      col[i * 3 + 2] = mixed.b;
    }

    return [pos, col];
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.04;
    ref.current.rotation.z = Math.sin(t * 0.15) * 0.08;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={PARTICLE_COUNT}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function WireTorusKnot() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * 0.35;
    ref.current.rotation.y = t * 0.25;
  });

  return (
    <Float speed={2.5} rotationIntensity={1.2} floatIntensity={2}>
      <mesh ref={ref} position={[1.8, 0.2, 0]}>
        <torusKnotGeometry args={[0.75, 0.22, 128, 16, 2, 3]} />
        <meshStandardMaterial
          color="#9655fe"
          wireframe
          emissive="#9655fe"
          emissiveIntensity={0.6}
        />
      </mesh>
    </Float>
  );
}

function DistortedSphere() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <Float speed={1.8} floatIntensity={1.8}>
      <mesh ref={ref} position={[-1.6, 0.8, -0.5]}>
        <icosahedronGeometry args={[1.1, 4]} />
        <MeshDistortMaterial
          color="#59BEB8"
          distort={0.45}
          speed={3}
          roughness={0.15}
          metalness={0.85}
          emissive="#59BEB8"
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  );
}

function SpinningRing() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = Math.PI / 2 + Math.sin(t * 0.5) * 0.3;
    ref.current.rotation.z = t * 0.6;
  });

  return (
    <mesh ref={ref} position={[0, -0.5, -1]}>
      <torusGeometry args={[2.2, 0.015, 16, 100]} />
      <meshBasicMaterial color="#00B2FF" transparent opacity={0.5} />
    </mesh>
  );
}

function MouseParallaxGroup({ children }: { children: ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const { x, y } = state.pointer;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      x * 0.45,
      0.04
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      y * 0.3,
      0.04
    );
  });

  return <group ref={groupRef}>{children}</group>;
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[8, 8, 8]} intensity={1.2} color="#59BEB8" />
      <pointLight position={[-8, -4, -4]} intensity={0.9} color="#9655fe" />
      <pointLight position={[0, -6, 4]} intensity={0.5} color="#00B2FF" />
      <Sparkles
        count={180}
        scale={10}
        size={2.5}
        speed={0.5}
        color="#59BEB8"
        opacity={0.7}
      />
      <Stars
        radius={40}
        depth={40}
        count={1500}
        factor={3}
        saturation={0.2}
        fade
        speed={0.8}
      />
      <MouseParallaxGroup>
        <ParticleField />
        <WireTorusKnot />
        <DistortedSphere />
        <SpinningRing />
      </MouseParallaxGroup>
    </>
  );
}

interface HeroSceneProps {
  active?: boolean;
}

export default function HeroScene({ active = true }: HeroSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 55 }}
      className="h-full w-full"
      gl={{ antialias: true, alpha: true }}
      dpr={active ? [1, 1.5] : 1}
      frameloop={active ? "always" : "never"}
      style={{ background: "transparent" }}
    >
      <Scene />
    </Canvas>
  );
}
