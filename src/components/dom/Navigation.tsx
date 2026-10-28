"use client";
import { useStore } from "@/store/useStore";
const links = [{ href: "#home", label: "Kumbaya", index: 0 }, { href: "#nostalgia", label: "Chapters", index: 1 }, { href: "#credits", label: "Credits", index: -1 }];
export default function Navigation() {
  const active = useStore(s => s.activeProjectIndex);
  return <nav className="navigation" aria-label="Main navigation">{links.map(link => <a key={link.href} href={link.href} aria-current={link.index === 0 && active === 0 ? "page" : undefined}>{link.label}</a>)}</nav>;
}
