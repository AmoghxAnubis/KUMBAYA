"use client";

import { useFrame } from '@react-three/fiber'
import { useStore } from '@/store/useStore'
import * as THREE from 'three'

export default function CameraController() {
    const vec = new THREE.Vector3()

    useFrame((state) => {
        const scroll = useStore.getState().scrollProgress

        // Calculate camera position based on scroll
        // 0 -> start
        // 1 -> end

        // Example path:
        // Start: [0, 0, 5]
        // Middle: [2, -2, 4]
        // End: [0, -5, 3]

        const x = Math.sin(scroll * Math.PI * 2) * 2
        const y = -scroll * 5
        const z = 5 - Math.sin(scroll * Math.PI) * 2

        state.camera.position.lerp(vec.set(x, y, z), 0.1)
        state.camera.lookAt(0, y, 0)
    })

    return null
}
