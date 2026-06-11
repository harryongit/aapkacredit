"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, RoundedBox } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Group, Mesh } from "three";
import { ClientOnly } from "@/components/fx/ClientOnly";

function CreditCard({ position, color, rotation = [0, 0, 0] as [number, number, number] }: { position: [number, number, number]; color: string; rotation?: [number, number, number] }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = rotation[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.7}>
      <RoundedBox ref={ref} args={[2.2, 1.4, 0.06]} radius={0.08} smoothness={6} position={position} rotation={rotation}>
        <meshPhysicalMaterial color={color} metalness={0.85} roughness={0.18} clearcoat={1} clearcoatRoughness={0.1} reflectivity={0.9} />
      </RoundedBox>
    </Float>
  );
}

function Node({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.4}>
      <mesh position={position}>
        <icosahedronGeometry args={[0.18, 0]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.4} toneMapped={false} />
      </mesh>
    </Float>
  );
}

function Rig() {
  const group = useRef<Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const x = state.pointer.x * 0.35;
    const y = state.pointer.y * 0.25;
    group.current.rotation.y += (x - group.current.rotation.y) * 0.04;
    group.current.rotation.x += (-y - group.current.rotation.x) * 0.04;
  });
  return (
    <group ref={group}>
      <CreditCard position={[0, 0.2, 0]} color="#2563EB" rotation={[0.1, -0.3, -0.08]} />
      <CreditCard position={[-1.6, -0.9, -0.6]} color="#0b1a36" rotation={[0.05, 0.45, 0.12]} />
      <CreditCard position={[1.7, 1.0, -0.4]} color="#10B981" rotation={[-0.15, 0.2, -0.05]} />
      <Node position={[-2.4, 1.6, 0.8]} color="#3B82F6" />
      <Node position={[2.6, -1.3, 0.7]} color="#10B981" />
      <Node position={[-1.2, -1.8, 1.2]} color="#60a5fa" />
      <Node position={[1.4, 1.9, 1.0]} color="#a78bfa" />
    </group>
  );
}

function Scene() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 45 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 5, 5]} intensity={2.4} color="#3B82F6" />
      <pointLight position={[-5, -3, 2]} intensity={1.8} color="#10B981" />
      <Suspense fallback={null}>
        <Environment preset="city" />
        <Rig />
      </Suspense>
    </Canvas>
  );
}

export function HeroScene() {
  return (
    <ClientOnly fallback={<div className="absolute inset-0 aurora-bg" />}>
      <Scene />
    </ClientOnly>
  );
}
