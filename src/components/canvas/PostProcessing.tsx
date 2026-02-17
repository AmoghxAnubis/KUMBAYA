"use client";

import { EffectComposer, Bloom, Noise, ChromaticAberration } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { useStore } from '@/store/useStore'
import * as THREE from 'three'

export default function PostProcessing() {
    const loading = useStore((state) => state.loading)

    // Disable sensitive effects during loading if needed, or keep them

    return (
        <EffectComposer>
            <Bloom
                luminanceThreshold={1}
                mipmapBlur
                intensity={0.5}
                radius={0.4}
            />
            <Noise opacity={0.1} />
            <ChromaticAberration
                offset={new THREE.Vector2(0.002, 0.002)}
                radialModulation={false}
                modulationOffset={0}
            />
        </EffectComposer>
    )
}
