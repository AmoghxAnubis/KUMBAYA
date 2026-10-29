"use client";

import { useState } from "react";

const signals = [
  { frequency: "01", name: "The long way home", note: "For the ride that takes a little longer. Start in the passenger seat.", href: "#nostalgia", action: "Explore Nostalgia, Ultra", color: "road" },
  { frequency: "02", name: "Rooms in color", note: "Stories unfold through the people and places around them.", href: "#channel-orange", action: "Explore Channel Orange", color: "orange" },
  { frequency: "03", name: "In the workshop", note: "A little space for the unfinished, the process, and the pause.", href: "#endless", action: "Explore Endless", color: "workshop" },
  { frequency: "04", name: "Looking back", note: "A collection of moments that never quite return in order.", href: "#blonde", action: "Explore Blonde", color: "green" },
];

export default function SignalDial() {
  const [active, setActive] = useState(0);
  const signal = signals[active];
  return <section className={`signal signal-${signal.color}`} id="signal" aria-labelledby="signal-title">
    <div className="signal-header"><span>KUMBAYA / INTERACTIVE INDEX</span><span>NO AUDIO · JUST DISCOVERY</span></div>
    <div className="signal-layout">
      <div className="signal-copy"><p className="signal-eyebrow">A different way in / 001—004</p><h2 id="signal-title">Find your<br /><em>frequency.</em></h2><p>Turn the dial and follow a feeling through the archive. Each signal is an original KUMBAYA route.</p><div className="signal-controls" aria-label="Choose a signal">{signals.map((item, index) => <button key={item.frequency} type="button" aria-pressed={index === active} onClick={() => setActive(index)}><span>{item.frequency}</span><span>{item.name}</span><span aria-hidden="true">↗</span></button>)}</div></div>
      <div className="signal-stage"><div className="signal-stage-top"><span>THE SIGNAL / {signal.frequency}</span><span>SELECT A FREQUENCY ↓</span></div><div className="signal-art" aria-hidden="true"><div className="signal-orbit orbit-one" /><div className="signal-orbit orbit-two" /><div className="signal-orbit orbit-three" /><div className="signal-disc"><div className="signal-disc-label"><span>KUMBAYA</span><strong>{signal.frequency}</strong><span>AN ARCHIVE OF<br />THINGS THAT STAYED</span></div></div><div className="signal-crosshair crosshair-one">✳</div><div className="signal-crosshair crosshair-two">✳</div></div><div className="signal-meter" aria-hidden="true">{Array.from({ length: 32 }, (_, i) => <i key={i} style={{ height: `${18 + ((i * 37 + active * 29) % 74)}%` }} />)}</div><div className="signal-selected" aria-live="polite"><div><span>NOW EXPLORING / {signal.frequency}</span><h3>{signal.name}</h3><p>{signal.note}</p></div><a href={signal.href}>{signal.action} ↗</a></div></div>
    </div>
  </section>;
}
