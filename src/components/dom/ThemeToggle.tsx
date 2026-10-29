"use client";

import { useEffect, useState } from "react";

const storageKey = "kumbaya.theme.v1";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setDark(root.dataset.theme === "dark");
    sync();
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      try { if (localStorage.getItem(storageKey)) return; } catch { /* Follow the system when storage is unavailable. */ }
      root.dataset.theme = preference.matches ? "dark" : "light";
      sync();
    };
    preference.addEventListener("change", onChange);
    return () => preference.removeEventListener("change", onChange);
  }, []);

  function toggle() {
    const next = !dark;
    document.documentElement.dataset.theme = next ? "dark" : "light";
    setDark(next);
    try { localStorage.setItem(storageKey, next ? "dark" : "light"); } catch { /* The preference remains active for this visit. */ }
  }

  return <button className="theme-toggle" type="button" aria-pressed={dark} aria-label="Dark mode" onClick={toggle}><span aria-hidden="true">{dark ? "☾" : "☼"}</span><span>{dark ? "Dark" : "Light"}</span></button>;
}
