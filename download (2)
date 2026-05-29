"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ─── Individual floating node ────────────────────────────────────────────────
function Nodes() {
  const meshRef = useRef<THREE.Points>(null!);
  const linesRef = useRef<THREE.LineSegments>(null!);

  const count = 80;

  // Generate stable random positions
  const { positions, linePositions } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spread = 10;

    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * spread;
      pos[i * 3 + 1] = (Math.random() - 0.5) * spread * 0.6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }

    // Build edges between nearby nodes
    const edgeVerts: number[] = [];
    const threshold = 2.5;
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < threshold) {
          edgeVerts.push(
            pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2],
            pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]
          );
        }
      }
    }

    return { positions: pos, linePositions: new Float32Array(edgeVerts) };
  }, []);

  const velocities = useMemo(() => {
    const v = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      v[i] = (Math.random() - 0.5) * 0.003;
    }
    return v;
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    // Slow drift on the whole group
    meshRef.current.rotation.y = t * 0.03;
    if (linesRef.current) linesRef.current.rotation.y = t * 0.03;
  });

  return (
    <>
      {/* Nodes */}
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.045}
          color="#c9a84c"
          transparent
          opacity={0.7}
          sizeAttenuation
        />
      </points>

      {/* Edges */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#c9a84c"
          transparent
          opacity={0.12}
        />
      </lineSegments>
    </>
  );
}

// ─── Ambient floating orbs ───────────────────────────────────────────────────
function Orbs() {
  const group = useRef<THREE.Group>(null!);
  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.rotation.z = t * 0.008;
  });

  const orbs = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        r: 3 + i * 0.8,
        speed: 0.15 + i * 0.04,
        size: 0.04 + Math.random() * 0.04,
        offset: (i * Math.PI * 2) / 6,
      })),
    []
  );

  return (
    <group ref={group}>
      {orbs.map((orb, i) => (
        <OrbInstance key={i} {...orb} />
      ))}
    </group>
  );
}

function OrbInstance({
  r,
  speed,
  size,
  offset,
}: {
  r: number;
  speed: number;
  size: number;
  offset: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * speed + offset;
    ref.current.position.x = Math.cos(t) * r;
    ref.current.position.y = Math.sin(t * 0.7) * r * 0.4;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 8, 8]} />
      <meshBasicMaterial color="#c9a84c" transparent opacity={0.5} />
    </mesh>
  );
}

// ─── Exported Canvas wrapper ─────────────────────────────────────────────────
export default function ParticleField() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Nodes />
      <Orbs />
    </Canvas>
  );
}
