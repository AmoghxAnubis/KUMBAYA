"use client";

import { Canvas } from '@react-three/fiber'
import { PerformanceMonitor } from '@react-three/drei'
import { Suspense, useState } from 'react'
import HeroFigure from './HeroFigure'
import AssetLoader from './AssetLoader'
import CameraController from './CameraController'
import PostProcessing from './PostProcessing'
import FloatingParticles from './FloatingParticles'
import ClothBanner from './ClothBanner'

export default function SceneWrapper() {
    const [dpr, setDpr] = useState(1.5)

    return (
        <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
            <Canvas
                dpr={dpr}
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ antialias: false }} // Performance optimization, rely on post-processing or dpr
            >
                <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(1)} />

                <AssetLoader />

                <Suspense fallback={null}>
                    <color attach="background" args={['#000000']} />
                    <fog attach="fog" args={['#000000', 8, 20]} />

                    <ambientLight intensity={0.3} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.5} color="#4ade80" />
                    <pointLight position={[-10, -10, -10]} intensity={0.3} color="#f97316" />

                    <HeroFigure />
                    <FloatingParticles count={200} />
                    <CameraController />
                    <PostProcessing />
                </Suspense>
            </Canvas>
        </div>
    )
}
