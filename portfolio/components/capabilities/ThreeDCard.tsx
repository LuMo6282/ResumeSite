"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { Mesh, BufferGeometry, Float32BufferAttribute, Points } from "three";

function RotatingKnot() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.25;
      meshRef.current.rotation.x += delta * 0.12;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.38, 200, 40]} />
        <MeshDistortMaterial
          color="#c8a96e"
          wireframe
          transparent
          opacity={0.6}
          distort={0.1}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function AmbientParticles() {
  const ref = useRef<Points>(null);

  const geometry = useMemo(() => {
    const count = 120;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    const geo = new BufferGeometry();
    geo.setAttribute("position", new Float32BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.elapsedTime * 0.05;
      ref.current.rotation.x = clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.02}
        color="#c8a96e"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

export default function ThreeDCard() {
  return (
    <div className="relative w-full aspect-[4/3] bg-card-bg rounded-lg overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 50 }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#c8a96e" />
        <pointLight position={[-8, -5, -5]} intensity={0.2} color="#e8d5a8" />
        <pointLight position={[0, 5, -8]} intensity={0.15} color="#ffffff" />
        <RotatingKnot />
        <AmbientParticles />
      </Canvas>
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#111110] via-[#111110]/60 to-transparent">
        <p className="text-[0.7rem] tracking-[0.18em] uppercase text-accent font-semibold">
          3D objects? Done.
        </p>
      </div>
    </div>
  );
}
