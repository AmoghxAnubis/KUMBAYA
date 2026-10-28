"use client";
const links = [{ href: "#home", label: "Kumbaya" }, { href: "#nostalgia", label: "Chapters" }, { href: "#credits", label: "Credits" }];
export default function Navigation() {
  return <nav className="navigation" aria-label="Main navigation">{links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>;
}
