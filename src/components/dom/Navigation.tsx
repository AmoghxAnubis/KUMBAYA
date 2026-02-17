"use client";

import { useScramble } from '@/hooks/useScramble'

const NavItem = ({ label }: { label: string }) => {
    const { displayText, scramble } = useScramble(label)

    return (
        <div
            className="text-sm font-light uppercase tracking-widest cursor-pointer hover:text-green-400 transition-colors"
            onMouseEnter={scramble}
        >
            {displayText}
        </div>
    )
}

export default function Navigation() {
    return (
        <nav className="fixed bottom-10 left-10 z-40 flex gap-8 text-white/80 mix-blend-difference hidden md:flex">
            <NavItem label="Kumbaya" />
            <div className="w-[1px] h-4 bg-white/20"></div>
            <NavItem label="Chapters" />
            <NavItem label="Credits" />
        </nav>
    )
}
