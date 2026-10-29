"use client";

import { createContext, useContext, useEffect, useState } from "react";

const fragments = [
  { id: "passenger", title: "The passenger seat", copy: "Some conversations need a long way home.", anchor: "#nostalgia" },
  { id: "staircase", title: "The staircase", copy: "A work can be unfinished and still mean something.", anchor: "#endless", source: "https://www.newyorker.com/magazine/2016/09/05/frank-oceans-blonde-endless-and-boys-dont-cry-reviewed", sourceLabel: "The New Yorker on Endless" },
  { id: "green", title: "A flash of green", copy: "Memory rarely arrives in order.", anchor: "#blonde", source: "https://www.malaymail.com/news/showbiz/2016/11/22/frank-ocean-finally-free-mystery-intact/1255429", sourceLabel: "Frank Ocean on memory and writing" },
  { id: "road", title: "The long way", copy: "A detour can give a moment room to breathe.", anchor: "#nostalgia" },
  { id: "room", title: "Every room", copy: "Every room has a story, even after its people leave.", anchor: "#channel-orange" },
  { id: "summer", title: "A different summer", copy: "A bright afternoon can hold more than one story.", anchor: "#channel-orange" },
  { id: "workshop", title: "Still becoming", copy: "There is room to begin again in the middle of things.", anchor: "#endless" },
  { id: "distance", title: "A little distance", copy: "Some things come into focus only after we leave them.", anchor: "#blonde" },
  { id: "mixtape", title: "Side A", copy: "A collection can be a map of where you have been.", anchor: "#nostalgia" },
  { id: "window", title: "Through the window", copy: "Look long enough and the background becomes the story.", anchor: "#channel-orange" },
  { id: "pause", title: "The pause", copy: "Rest is part of the work, too.", anchor: "#endless" },
  { id: "time", title: "Out of order", copy: "Not everything returns in the order it happened.", anchor: "#blonde" },
];
type Box = { ids: string[]; toggle: (id: string) => void; move: (id: string, direction: number) => void; clear: () => void; message: string };
const Context = createContext<Box | null>(null);
const key = "kumbaya.memoryBox.v1";

export function MemoryProvider({ children }: { children: React.ReactNode }) {
  const [ids, setIds] = useState<string[]>([]);
  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(key) || "[]");
      // Hydrate from browser storage only after the server and client have rendered the same initial state.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (Array.isArray(saved)) setIds([...new Set(saved.filter((id): id is string => typeof id === "string" && fragments.some(f => f.id === id)))].slice(0, 5));
    } catch { /* Keep the box usable in memory when storage is unavailable. */ }
    setReady(true);
  }, []);
  useEffect(() => { if (ready) { try { localStorage.setItem(key, JSON.stringify(ids)); } catch { /* memory-only fallback */ } } }, [ids, ready]);
  function toggle(id: string) {
    if (ids.includes(id)) { setIds(ids.filter(item => item !== id)); setMessage("Fragment removed from your box."); }
    else if (ids.length >= 5) setMessage("Your box is full. Remove a fragment to make room.");
    else { setIds([...ids, id]); setMessage("Fragment added to your box."); }
  }
  function move(id: string, direction: number) {
    const next = [...ids]; const from = next.indexOf(id); const to = from + direction;
    if (from < 0 || to < 0 || to >= next.length) return;
    [next[from], next[to]] = [next[to], next[from]]; setIds(next); setMessage("Fragment order updated.");
  }
  return <Context.Provider value={{ ids, toggle, move, clear: () => { setIds([]); setMessage("Your box has been cleared."); }, message }}>{children}</Context.Provider>;
}
function useBox() { const box = useContext(Context); if (!box) throw new Error("MemoryProvider missing"); return box; }
export function BoxLink() { const { ids, message } = useBox(); return <><a href="#memory-box">Your box {ids.length}/5</a><span className="visually-hidden" role="status">{message}</span></>; }
export function Fragment({ id }: { id: string }) {
  const box = useBox(); const item = fragments.find(f => f.id === id)!; const kept = box.ids.includes(id);
  const [attempted, setAttempted] = useState(false);
  return <div className="fragment-card"><span className="fragment-label">A FRAGMENT TO KEEP</span><h3>{item.title}</h3><p>{item.copy}</p><button type="button" onClick={() => { setAttempted(true); box.toggle(id); }} aria-pressed={kept}>{kept ? "Kept · Remove" : "Keep this"} <span aria-hidden="true">{kept ? "−" : "+"}</span></button>{attempted && !kept && box.ids.length >= 5 && <p className="fragment-feedback">Your box is full. <a href="#memory-box">Remove a fragment</a> to make room.</p>}</div>;
}
export function MemoryBox() {
  const box = useBox();
  const selected = box.ids.map(id => fragments.find(f => f.id === id)!).filter(Boolean);
  async function copy() {
    const receipt = ["KUMBAYA — an independent fan tribute", "The things you kept:", ...selected.map(f => `${f.title} — ${f.copy}${f.source ? `\nSource: ${f.source}` : ""}`)].join("\n\n");
    try { await navigator.clipboard.writeText(receipt); setCopyMessage("Receipt copied."); } catch { setCopyMessage("Copy unavailable. Select the text above to copy it."); }
  }
  const [copyMessage, setCopyMessage] = useState("");
  return <section id="memory-box" className="memory-box" aria-labelledby="box-title"><div className="memory-intro"><div><p className="eyebrow">A little something to take with you</p><h2 id="box-title">The things<br /><em>you kept.</em></h2></div><p>Gather up to five fragments as you wander. Your box is saved on this device when storage is available.</p></div>
    <p className="box-status" aria-live="polite">{box.message || `${selected.length} / 5 fragments kept`}</p>
    {selected.length ? <><ol className="memory-list">{selected.map((item, index) => <li key={item.id}><div><span className="fragment-label">{String(index + 1).padStart(2, "0")} / FRAGMENT</span><h3>{item.title}</h3><p>{item.copy}</p><a href={item.anchor}>Return to chapter ↗</a>{item.source && <> · <a href={item.source} target="_blank" rel="noopener noreferrer">{item.sourceLabel} ↗</a></>}</div><div className="memory-actions"><button onClick={() => box.move(item.id, -1)} disabled={index === 0} aria-label={`Move ${item.title} up`}>↑</button><button onClick={() => box.move(item.id, 1)} disabled={index === selected.length - 1} aria-label={`Move ${item.title} down`}>↓</button><button onClick={() => box.toggle(item.id)} aria-label={`Remove ${item.title}`}>Remove</button></div></li>)}</ol><div className="box-controls"><button onClick={copy}>Copy text receipt</button><button onClick={box.clear}>Clear box</button><span aria-live="polite">{copyMessage}</span></div></> : <p className="box-empty">Nothing here yet. <a href="#nostalgia">Explore fragments ↗</a> or simply enjoy the archive.</p>}
  </section>;
}
