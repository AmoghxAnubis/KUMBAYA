"use client";

import { useRef, useMemo } from 'react'
import { useFrame, extend, ReactThreeFiber } from '@react-three/fiber'
import { Sphere, Cylinder, shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Define the shader material
const LiquidMaterial = shaderMaterial(
    {
        uTime: 0,
        uColor: new THREE.Color(0.0, 1.0, 0.0), // Blonde Green
        uMouse: new THREE.Vector2(0, 0)
    },
    // Vertex Shader
    `
    varying vec2 vUv;
    varying float vDisplacement;
    uniform float uTime;

    void main() {
      vUv = uv;
      
      // Liquid ripple effect
      float wave = sin(position.y * 5.0 + uTime * 2.0);
      vDisplacement = wave * 0.1;
      
      vec3 pos = position;
      pos.x += wave * 0.05;
      pos.z += cos(position.y * 5.0 + uTime * 2.0) * 0.05;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
    // Fragment Shader
    `
    uniform float uTime;
    uniform vec3 uColor;
    varying vec2 vUv;
    varying float vDisplacement;

    void main() {
      // Fresnel effect approximation
      float fresnel = 0.5 + 0.5 * vDisplacement;
      
      // Mix colors based on displacement (Green to Pink/Orange)
      vec3 color = mix(uColor, vec3(1.0, 0.5, 0.0), fresnel); // Orange
      
      gl_FragColor = vec4(color, 1.0);
    }
  `
)

extend({ LiquidMaterial })

// Add types for the new material
declare global {
    namespace JSX {
        interface IntrinsicElements {
            liquidMaterial: any
        }
    }
}

export default function HeroFigure() {
    const materialRef = useRef<THREE.ShaderMaterial>(null)

    useFrame((state) => {
        if (materialRef.current) {
            // @ts-ignore
            materialRef.current.uTime = state.clock.elapsedTime
        }
    })

    return (
        <group position={[3, -2, -5]} scale={0.5}>
            {/* Head */}
            <Sphere args={[0.5, 64, 64]} position={[0, 2.8, 0]}>
                {/* @ts-ignore */}
                <liquidMaterial ref={materialRef} transparent wireframe={false} uColor={new THREE.Color("#4ade80")} />
            </Sphere>

            {/* Body */}
            <Cylinder args={[0.3, 0.3, 2.5, 32]} position={[0, 1.2, 0]}>
                {/* @ts-ignore */}
                <liquidMaterial ref={materialRef} transparent wireframe={false} uColor={new THREE.Color("#4ade80")} />
            </Cylinder>

            {/* Arms */}
            <Cylinder args={[0.1, 0.1, 2, 32]} position={[-0.6, 1.2, 0]} rotation={[0, 0, 0.2]}>
                {/* @ts-ignore */}
                <liquidMaterial ref={materialRef} transparent wireframe={false} uColor={new THREE.Color("#fbbf24")} />
            </Cylinder>
            <Cylinder args={[0.1, 0.1, 2, 32]} position={[0.6, 1.2, 0]} rotation={[0, 0, -0.2]}>
                {/* @ts-ignore */}
                <liquidMaterial ref={materialRef} transparent wireframe={false} uColor={new THREE.Color("#fbbf24")} />
            </Cylinder>
        </group>
    )
}
