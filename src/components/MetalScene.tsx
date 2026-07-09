"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Lightformer, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import type { Group, Mesh } from "three";

function Chrome({ green = false }: { green?: boolean }) {
  return <meshPhysicalMaterial color={green ? "#147df5" : "#cbd8e5"} metalness={green ? .9 : .8} roughness={green ? .15 : .2} clearcoat={1} clearcoatRoughness={.05} envMapIntensity={green ? 1.55 : 1.3} emissive={green ? "#042d75" : "#05090d"} emissiveIntensity={green ? .6 : .08} />;
}

function Sculpture() {
  const group = useRef<Group>(null);
  const core = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (!group.current || !core.current) return;
    const targetX = state.pointer.y * .22;
    const targetY = state.pointer.x * .35;
    group.current.rotation.x += (targetX - group.current.rotation.x) * Math.min(1, delta * 2.4);
    group.current.rotation.y += (targetY - group.current.rotation.y) * Math.min(1, delta * 2.4);
    group.current.rotation.z += delta * .08;
    core.current.rotation.y -= delta * .22;
    core.current.rotation.x += delta * .09;
  });

  return (
    <group ref={group} position={[1.35, 0, 0]} rotation={[.1, -.15, -.2]}>
      <Float speed={1.8} rotationIntensity={.22} floatIntensity={.45}>
        <mesh ref={core} scale={1.2}>
          <torusKnotGeometry args={[1.35, .24, 180, 28, 2, 5]} />
          <Chrome />
        </mesh>
      </Float>
      <mesh rotation={[1.32, .22, .15]} scale={1.35}>
        <torusGeometry args={[1.62, .06, 18, 150]} />
        <Chrome green />
      </mesh>
      <mesh rotation={[.2, 1.1, -.55]} scale={1.12}>
        <torusGeometry args={[1.9, .035, 14, 140]} />
        <Chrome />
      </mesh>
      <mesh rotation={[.85, -.3, .9]} scale={.8}>
        <torusGeometry args={[2.05, .045, 14, 140]} />
        <Chrome green />
      </mesh>
      {[
        [-1.9, 1.25, .2, .32], [2.1, -.8, -.2, .22], [-1.45, -1.3, .5, .18], [1.55, 1.5, -.5, .13],
      ].map(([x, y, z, s], i) => <Float key={i} speed={1.1 + i * .3} floatIntensity={.8}><mesh position={[x, y, z]} scale={s}><torusGeometry args={[1, .18, 12, 64]} /><Chrome green={i % 2 === 0} /></mesh></Float>)}
    </group>
  );
}

export default function MetalScene() {
  if (typeof window !== "undefined" && window.matchMedia("(max-width: 900px), (pointer: coarse), (prefers-reduced-motion: reduce)").matches) return null;
  return (
    <Canvas dpr={[1, 1.5]} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }} fallback={null}>
      <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={42} />
      <ambientLight intensity={1.7} />
      <directionalLight position={[4, 5, 6]} intensity={5} color="#d8f4ff" />
      <directionalLight position={[-5, -2, 3]} intensity={4} color="#126dff" />
      <pointLight position={[2, -3, 4]} intensity={45} distance={9} color="#218bff" />
      <pointLight position={[-3, 2, 2]} intensity={25} distance={8} color="#ffffff" />
      <Environment resolution={128} background={false} environmentIntensity={1.4}>
        <Lightformer intensity={8} color="#ffffff" position={[0, 4, -2]} rotation={[Math.PI / 2, 0, 0]} scale={[8, 1, 1]} />
        <Lightformer intensity={6} color="#147df5" position={[-4, 0, 2]} rotation={[0, Math.PI / 2, 0]} scale={[5, 1, 1]} />
        <Lightformer intensity={7} color="#3f7dff" position={[5, 1, 1]} rotation={[0, -Math.PI / 2, 0]} scale={[6, 1, 1]} />
        <Lightformer intensity={4} color="#ffffff" position={[0, -4, 1]} rotation={[-Math.PI / 2, 0, 0]} scale={[8, 1, 1]} />
      </Environment>
      <Sculpture />
    </Canvas>
  );
}
