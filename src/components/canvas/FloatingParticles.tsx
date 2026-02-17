"use client";

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function FloatingParticles({ count = 500 }) {
    const mesh = useRef<THREE.InstancedMesh>(null)

    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100
            const factor = 20 + Math.random() * 100
            const speed = 0.01 + Math.random() / 200
            const x = (Math.random() - 0.5) * 20
            const y = (Math.random() - 0.5) * 20
            const z = (Math.random() - 0.5) * 20
            temp.push({ t, factor, speed, x, y, z, mx: 0, my: 0 })
        }
        return temp
    }, [count])

    const dummy = useMemo(() => new THREE.Object3D(), [])

    useFrame((state) => {
        if (!mesh.current) return

        particles.forEach((particle, i) => {
            let { t, factor, speed, x, y, z } = particle

            // Update time
            t = particle.t += speed / 2
            const a = Math.cos(t) + Math.sin(t * 1) / 10
            const b = Math.sin(t) + Math.cos(t * 2) / 10
            const s = Math.cos(t)

            // Update position
            dummy.position.set(
                x + Math.cos(t / 10) * jiggle(i) + particle.mx,
                y + Math.sin(t / 10) * jiggle(i) + particle.my,
                z + (Math.sin(t / 20) * jiggle(i))
            )

            // Scale based on "music" or time
            const scale = (Math.sin(t * 5) + 2) * 0.05
            dummy.scale.set(scale, scale, scale)

            dummy.rotation.set(s * 5, s * 5, s * 5)
            dummy.updateMatrix()

            mesh.current!.setMatrixAt(i, dummy.matrix)
        })
        mesh.current.instanceMatrix.needsUpdate = true
    })

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
            <dodecahedronGeometry args={[0.15, 0]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
        </instancedMesh>
    )
}

function jiggle(index: number) {
    return (index % 2 === 0 ? 1 : -1)
}
