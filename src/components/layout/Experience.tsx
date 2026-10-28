"use client";
import { ReactNode, useEffect, useState } from "react";
import SceneWrapper from "@/components/canvas/SceneWrapper";
import SceneFallback from "@/components/canvas/SceneFallback";
import Navigation from "@/components/dom/Navigation";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { useStore } from "@/store/useStore";

export default function Experience({ children }: { children: ReactNode }) {
  const setActiveProjectIndex = useStore(s => s.setActiveProjectIndex);
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update(); media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-scene]");
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActiveProjectIndex(Number((entry.target as HTMLElement).dataset.scene));
    }, { rootMargin: "-40% 0px -40% 0px", threshold: 0 });
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [setActiveProjectIndex]);
  return <><a className="skip-link" href="#nostalgia">Skip to chapters</a>{!reduced && <SceneFallback><SceneWrapper /></SceneFallback>}<Navigation /><SmoothScroll disabled={reduced}><main>{children}</main></SmoothScroll></>;
}

