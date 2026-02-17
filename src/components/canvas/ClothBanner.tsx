"use client";

import { useRef } from 'react'
import { useFrame, extend, ReactThreeFiber } from '@react-three/fiber'
import { Plane, shaderMaterial } from '@react-three/drei'
import { useStore } from '@/store/useStore'
import * as THREE from 'three'

// Shader visual based on scroll/index
const BannerMaterial = shaderMaterial(
    {
        uTime: 0,
        uColor1: new THREE.Color("#f97316"), // Orange
        uColor2: new THREE.Color("#ea580c"), // Dark Orange
        uScroll: 0,
        uIndex: 0
    },
    // Vertex
    `
    varying vec2 vUv;
    varying float vWave;
    uniform float uTime;
    uniform float uScroll;

    void main() {
      vUv = uv;
      
      // Wind/Cloth ripple
      float wave = sin(uv.x * 10.0 + uTime) * 0.1;
      wave += sin(uv.y * 5.0 + uTime * 0.5) * 0.05;
      
      vec3 pos = position;
      pos.z += wave;
      
      vWave = wave;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
    // Fragment
    `
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform float uIndex;
    varying vec2 vUv;
    varying float vWave;

    void main() {
      // Create a pattern based on index
      float pattern = 0.0;
      
      if (uIndex < 0.5) {
         // Nostalgia (Stripes)
         pattern = step(0.5, fract(vUv.y * 10.0 + vWave));
      } else if (uIndex < 1.5) {
         // Channel Orange (Gradient + Noise)
         pattern = vUv.y + vWave * 2.0;
      } else {
         // Blonde (Circle/Soft)
         float dist = distance(vUv, vec2(0.5));
         pattern = 1.0 - smoothstep(0.2, 0.5, dist + vWave * 0.2);
      }
      
      vec3 color = mix(uColor1, uColor2, pattern);
      
      // Add grain
      float noise = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);
      color += noise * 0.05;

      gl_FragColor = vec4(color, 1.0);
    }
  `
)

extend({ BannerMaterial })

declare global {
    namespace JSX {
        interface IntrinsicElements {
            bannerMaterial: ReactThreeFiber.Object3DNode<THREE.ShaderMaterial, typeof BannerMaterial>
        }
    }
}

export default function ClothBanner() {
    const materialRef = useRef<THREE.ShaderMaterial>(null)

    useFrame((state) => {
        const { scrollProgress, activeProjectIndex } = useStore.getState()

        if (materialRef.current) {
            // @ts-ignore
            materialRef.current.uTime = state.clock.elapsedTime
            // @ts-ignore
            materialRef.current.uScroll = scrollProgress
            // @ts-ignore
            materialRef.current.uIndex = scrollProgress * 4 // Approximation of index based on scroll

            // Dynamic colors based on scroll
            const color1 = new THREE.Color()
            const color2 = new THREE.Color()

            if (scrollProgress < 0.25) {
                // Nostalgia
                color1.set("#f97316") // Orange
                color2.set("#1f2937") // Gray
            } else if (scrollProgress < 0.5) {
                // Channel Orange
                color1.set("#f97316")
                color2.set("#fbbf24") // Amber
            } else if (scrollProgress < 0.75) {
                // Blonde
                color1.set("#4ade80") // Green
                color2.set("#ffffff") // White
            } else {
                // Endless
                color1.set("#000000")
                color2.set("#9ca3af")
            }

            // @ts-ignore
            materialRef.current.uColor1.lerp(color1, 0.1)
            // @ts-ignore
            materialRef.current.uColor2.lerp(color2, 0.1)
        }
    })

    return (
        <Plane args={[4, 5, 32, 32]} position={[0, 0, -2]} rotation={[0, 0, -0.1]}>
            {/* @ts-ignore */}
            <bannerMaterial ref={materialRef} transparent side={THREE.DoubleSide} />
        </Plane>
    )
}
