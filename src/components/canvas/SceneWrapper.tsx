"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useStore } from "@/store/useStore";

function Orb() {
  const mesh = useRef<THREE.Mesh>(null);
  const color = useRef(new THREE.Color());
  useFrame((state, delta) => {
    if (!mesh.current) return;
    const index = useStore.getState().activeProjectIndex;
    mesh.current.rotation.y += delta * 0.08;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
    const material = mesh.current.material as THREE.MeshBasicMaterial;
    color.current.set(["#b7ff86", "#ff964e", "#ffcb63", "#dddddd", "#a6e9a9"][index] ?? "#b7ff86");
    material.color.lerp(color.current, Math.min(delta * 1.5, 1));
  });
  return <mesh ref={mesh} position={[2.4, 0, -1]}><icosahedronGeometry args={[2.3, 2]} /><meshBasicMaterial color="#b7ff86" wireframe transparent opacity={0.25} /></mesh>;
}
export default function SceneWrapper() {
  return <div className="scene" aria-hidden="true"><Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 7], fov: 45 }}><Orb /></Canvas></div>;
}
