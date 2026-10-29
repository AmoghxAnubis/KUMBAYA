"use client";
import { useStore } from "@/store/useStore";
import { BoxLink } from "@/components/dom/MemoryBox";
const chapters = [{ href: "#nostalgia", label: "Nostalgia, Ultra" }, { href: "#channel-orange", label: "Channel Orange" }, { href: "#endless", label: "Endless" }, { href: "#blonde", label: "Blonde" }];
export default function Navigation() {
  const active = useStore(s => s.activeProjectIndex);
  return <>
    <nav className="navigation" aria-label="Main navigation"><a href="#home">Kumbaya</a><a href="#chapter-index">Chapters</a><a href="#radio">Radio</a><a href="#archive">Listen</a><BoxLink /></nav>
    <nav className="chapter-nav" aria-label="Chapter navigation">{chapters.map((chapter, index) => <a key={chapter.href} href={chapter.href} aria-label={`${String(index + 1).padStart(2, "0")}: ${chapter.label}`} aria-current={active === index + 1 ? "location" : undefined}><span>{String(index + 1).padStart(2, "0")}</span><i /></a>)}</nav>
  </>;
}


