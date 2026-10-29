"use client";
import { useState } from "react";

const context = "https://www.newyorker.com/magazine/2016/09/05/frank-oceans-blonde-endless-and-boys-dont-cry-reviewed";
const memorySource = "https://www.malaymail.com/news/showbiz/2016/11/22/frank-ocean-finally-free-mystery-intact/1255429";
export function PassengerSeat() {
  const [open, setOpen] = useState(false);
  return <div className="object-panel glovebox"><p className="fragment-label">THE PASSENGER SEAT / 01</p><h3>A little room for the road.</h3><button className="object-trigger" aria-expanded={open} aria-controls="glovebox-contents" onClick={() => setOpen(!open)}>{open ? "Close the glovebox −" : "Open the glovebox +"}</button><div id="glovebox-contents" hidden={!open}><p><strong>Road note.</strong> Some conversations take the long way home. This is an original KUMBAYA note.</p><p><strong>Mixtape context.</strong> Cars recur in Ocean’s work and photography; their meanings are never just one thing. <a href={context} target="_blank" rel="noopener noreferrer">Read the context ↗</a></p><a href="https://open.spotify.com/search/Frank%20Ocean%20nostalgia%20ultra" target="_blank" rel="noopener noreferrer">Search Spotify for Nostalgia, Ultra ↗</a></div></div>;
}
const channels = [
  { label: "Characters", text: "A story can be told from across a room. Here, we listen for the people at its edges." },
  { label: "Places", text: "A setting can feel bright and distant at once. Follow the rooms, streets and summer light." },
  { label: "Contrasts", text: "Comfort and loneliness can share the same frame. These are our lenses, open to yours." },
];
export function ChannelSwitcher() {
  const [active, setActive] = useState(0);
  return <div className={`object-panel television channel-view-${active}`}><p className="fragment-label">A FICTIONAL BROADCAST / 02</p><h3>Change the channel.</h3><div className="object-buttons">{channels.map((channel, i) => <button key={channel.label} aria-pressed={active === i} onClick={() => setActive(i)}>{channel.label}</button>)}</div><div className="channel-message" aria-live="polite"><span>0{active + 1} / {channels[active].label}</span><p>{channels[active].text}</p></div><a href={context} target="_blank" rel="noopener noreferrer">Read critical context ↗</a></div>;
}
const memories = [
  { id: "youth", title: "Youth", text: "What we remember of growing up is rarely the whole picture." },
  { id: "distance", title: "Distance", text: "Some moments change shape when viewed from farther away." },
  { id: "time", title: "Time", text: "A memory can arrive before its place in the story is clear." },
];
export function MemoryCards() {
  const [order, setOrder] = useState(memories);
  const [announcement, setAnnouncement] = useState("");
  function move(index: number, direction: number) { const next = [...order]; const to = index + direction; if (to < 0 || to >= next.length) return; [next[index], next[to]] = [next[to], next[index]]; setOrder(next); setAnnouncement(`${next[to].title} moved to position ${to + 1}.`); }
  return <div className="object-panel memory-cards"><p className="fragment-label">A ROOM OF OVERLAPPING MEMORIES / 04</p><h3>Put them in your order.</h3><p>Three original notes, arranged however you like. There is no right sequence.</p><ol>{order.map((item, i) => <li key={item.id}><div><span className="fragment-label">0{i + 1}</span><h4>{item.title}</h4><p>{item.text}</p></div><div className="object-buttons"><button disabled={i === 0} onClick={() => move(i, -1)} aria-label={`Move ${item.title} up`}>↑</button><button disabled={i === order.length - 1} onClick={() => move(i, 1)} aria-label={`Move ${item.title} down`}>↓</button></div></li>)}</ol><span className="visually-hidden" role="status">{announcement}</span><a href={memorySource} target="_blank" rel="noopener noreferrer">Read Ocean on writing and memory ↗</a></div>;
}
const threads = [
  { title: "On the road", text: "A car can be a place to leave, listen or talk. Follow the road through the archive.", stops: [{ label: "The passenger seat", href: "#nostalgia" }, { label: "The listening interlude", href: "#interlude-title" }, { label: "After hours on Homer Radio", href: "#radio" }] },
  { title: "Making something", text: "Follow a line from construction to the way memories are assembled. This is an editorial interpretation.", stops: [{ label: "The workshop", href: "#endless" }, { label: "A room of memories", href: "#blonde" }, { label: "Your own collection", href: "#memory-box" }] },
  { title: "Looking back", text: "The shape of a story can change with distance; begin with a mixtape and end with fragments.", stops: [{ label: "Nostalgia, Ultra", href: "#nostalgia" }, { label: "Channel Orange", href: "#channel-orange" }, { label: "Blonde", href: "#blonde" }] },
];
export function Threads() {
  return <section className="threads-section" id="threads" aria-labelledby="threads-title"><p className="eyebrow">Paths through the archive</p><h2 id="threads-title">Follow a<br /><em>thread.</em></h2><p>These are invitations, not instructions. Start anywhere and leave whenever you like.</p><div className="threads-grid">{threads.map(thread => <details key={thread.title}><summary>{thread.title} <span aria-hidden="true">↗</span></summary><p>{thread.text}</p><ol>{thread.stops.map((stop, i) => <li key={stop.href}><span>0{i + 1}</span> <a href={stop.href}>{stop.label} ↗</a></li>)}</ol><a href={context} target="_blank" rel="noopener noreferrer">Read the editorial context ↗</a></details>)}</div></section>;
}

