"use client";
import { useState } from "react";

const steps = [
  { label: "The space", text: "A bare workshop makes room for the process itself to become the scene." },
  { label: "The work", text: "In the visual album, a staircase takes shape through repeated acts of construction." },
  { label: "The pause", text: "Looking at the work in progress can be its own kind of arrival. That is our interpretation, left open for yours." },
];
export default function Workshop() {
  const [active, setActive] = useState(0);
  return <div className="workshop"><p className="fragment-label">THE WORKSHOP / AN EDITORIAL STUDY</p><h3>Build a step.</h3><div className={`workshop-graphic workshop-stage-${active}`} aria-hidden="true"><span>STUDY / 0{active + 1}</span><div>{Array.from({ length: 6 }, (_, i) => <i key={i} />)}</div><span>FORM FOLLOWS FEELING</span></div><div className="workshop-tabs" aria-label="Workshop steps">{steps.map((step, i) => <button key={step.label} type="button" aria-pressed={active === i} onClick={() => setActive(i)}>{String(i + 1).padStart(2, "0")} {step.label}</button>)}</div><p aria-live="polite">{steps[active].text}</p><a href="https://www.newyorker.com/magazine/2016/09/05/frank-oceans-blonde-endless-and-boys-dont-cry-reviewed" target="_blank" rel="noopener noreferrer">Read the context in The New Yorker ↗</a><p className="workshop-thread">MAKING SOMETHING / 01 <a href="#endless">The workshop</a> → 02 <a href="#blonde">Memory in fragments</a></p></div>;
}
