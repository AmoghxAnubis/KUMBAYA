"use client";

import { useProgress } from '@react-three/drei'
import { useEffect } from 'react'
import { useStore } from '@/store/useStore'

export default function AssetLoader() {
    const { active, progress } = useProgress()
    const setLoading = useStore((state) => state.setLoading)

    useEffect(() => {
        // If nothing is active and progress is 100, we are done
        // Or if nothing is active at all (no assets to load yet), we might consider it done or wait
        // For now, let's say if progress is 100, loading is false.
        const isLoading = active || progress < 100
        setLoading(isLoading)
    }, [active, progress, setLoading])

    return null
}
