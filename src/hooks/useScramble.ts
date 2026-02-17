"use client";

import { useState, useEffect } from 'react'
import { gsap } from 'gsap'

export function useScramble(text: string, speed: number = 0.5) {
    const [displayText, setDisplayText] = useState(text)
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#%&@$"

    const scramble = () => {
        let iteration = 0
        // Using a simple interval or GSAP ticker
        const interval = setInterval(() => {
            setDisplayText(text
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return text[index];
                    }
                    return chars[Math.floor(Math.random() * chars.length)]
                })
                .join("")
            )

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3; // slower unlock
        }, 30);
    }

    return { displayText, scramble }
}
