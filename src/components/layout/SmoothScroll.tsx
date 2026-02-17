"use client";

import { useEffect } from 'react'
import Lenis from 'lenis'
import { ReactNode } from 'react'
import { useStore } from '@/store/useStore'

interface SmoothScrollProps {
    children: ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
    const setScrollProgress = useStore((state) => state.setScrollProgress)

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        lenis.on('scroll', (e: any) => {
            // e.progress is 0 to 1
            setScrollProgress(e.progress)
        })

        return () => {
            lenis.destroy()
        }
    }, [setScrollProgress])

    return (
        <>
            {children}
        </>
    )
}
