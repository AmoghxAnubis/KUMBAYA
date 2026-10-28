const chapters = [
  { number: "01", year: "2011", title: "Nostalgia, Ultra", href: "#nostalgia", color: "orange", note: "Dreams in orange" },
  { number: "02", year: "2012", title: "Channel Orange", href: "#channel-orange", color: "gold", note: "Stories in color" },
  { number: "03", year: "2016", title: "Endless", href: "#endless", color: "silver", note: "The art of becoming" },
  { number: "04", year: "2016", title: "Blonde", href: "#blonde", color: "green", note: "A memory in fragments" },
];

export default function ChapterIndex() {
  return <section id="chapter-index" className="index-section" aria-labelledby="index-title">
    <div className="index-intro"><div><p className="eyebrow">A place to begin</p><h2 id="index-title">Choose a<br /><em>chapter.</em></h2></div><p>Four worlds, four different shades of the same voice. Start anywhere, or follow the story from the beginning.</p></div>
    <div className="index-grid">{chapters.map(chapter => <a key={chapter.number} href={chapter.href} className={`index-card index-${chapter.color}`}><div className="index-card-top"><span>{chapter.number} / 04</span><span>↗</span></div><div className="index-card-disc" aria-hidden="true"><i /></div><div className="index-card-bottom"><span>{chapter.year} · {chapter.note}</span><h3>{chapter.title}</h3></div></a>)}</div>
  </section>;
}

