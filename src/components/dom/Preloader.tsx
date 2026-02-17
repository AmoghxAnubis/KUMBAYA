"use client";

import { useStore } from '@/store/useStore'
import { useEffect, useState } from 'react'
import { useProgress } from '@react-three/drei'

export default function Preloader() {
    const { progress } = useProgress()
    const loading = useStore((state) => state.loading)
    const [finished, setFinished] = useState(false)

    useEffect(() => {
        if (!loading) {
            const timeout = setTimeout(() => setFinished(true), 1500)
            return () => clearTimeout(timeout)
        }
    }, [loading])

    if (finished) return null

    return (
        <div
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ${!loading ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
        >
            <div className="text-center space-y-8">
                <div className="text-8xl font-black tracking-tighter text-white">
                    {Math.round(progress)}
                </div>
                <div className="text-xs tracking-[0.5em] text-white/40 uppercase">
                    Loading Experience
                </div>
                <div className="w-48 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
        </div>
    )
}
