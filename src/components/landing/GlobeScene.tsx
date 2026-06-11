"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import { ClientOnly } from "@/components/fx/ClientOnly";
import * as THREE from "three";

function Globe() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.12;
  });

  const points = useMemo(() => {
    const arr: [number, number, number][] = [];
    for (let i = 0; i < 60; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      const r = 1.5;
      arr.push([
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
      ]);
    }
    return arr;
  }, []);

  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[1.5, 48, 48]} />
        <meshBasicMaterial color="#0b1a36" transparent opacity={0.4} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.51, 32, 32]} />
        <meshBasicMaterial color="#3B82F6" wireframe transparent opacity={0.25} />
      </mesh>
      {points.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color="#60a5fa" toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 4.5], fov: 45 }} gl={{ alpha: true }}>
      <ambientLight intensity={0.7} />
      <Suspense fallback={null}>
        <Globe />
      </Suspense>
    </Canvas>
  );
}

export function GlobeScene() {
  return (
    <ClientOnly fallback={null}>
      <Scene />
    </ClientOnly>
  );
}
