"use client";
import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { useStore } from "@/store/useStore";

export default function SmoothScroll({ children, disabled }: { children: ReactNode; disabled: boolean }) {
  const setScrollProgress = useStore(s => s.setScrollProgress);
  useEffect(() => {
    if (disabled) return;
    const lenis = new Lenis({ anchors: true });
    let frame = 0;
    const raf = (time: number) => { lenis.raf(time); frame = requestAnimationFrame(raf); };
    frame = requestAnimationFrame(raf);
    lenis.on("scroll", event => setScrollProgress(event.progress));
    return () => { cancelAnimationFrame(frame); lenis.destroy(); };
  }, [disabled, setScrollProgress]);
  return children;
}
