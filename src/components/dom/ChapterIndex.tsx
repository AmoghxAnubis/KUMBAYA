const chapters = [
  { number: "01", year: "2011", title: "Nostalgia, Ultra", href: "#nostalgia", color: "orange", note: "Dreams in orange" },
  { number: "02", year: "2012", title: "Channel Orange", href: "#channel-orange", color: "gold", note: "Stories in color" },
  { number: "03", year: "2016", title: "Endless", href: "#endless", color: "silver", note: "The art of becoming" },
  { number: "04", year: "2016", title: "Blonde", href: "#blonde", color: "green", note: "A memory in fragments" },
];

export default function ChapterIndex() {
  return <section id="chapter-index" className="index-section" aria-labelledby="index-title">
    <div className="index-intro"><div><p className="eyebrow">THE ARCHIVE / FOUR WAYS IN</p><h2 id="index-title">Every chapter<br />is a <em>world.</em></h2></div><p>Four releases, four distinct worlds. Pick a starting point and follow whatever stays with you.</p></div>
    <div className="index-grid">{chapters.map(chapter => <a key={chapter.number} href={chapter.href} className={`index-card index-${chapter.color}`}><div className="index-card-top"><span>CHAPTER / {chapter.number}</span><span>↗</span></div><div className="index-card-art" aria-hidden="true"><span>{chapter.number}</span></div><div className="index-card-bottom"><span>{chapter.year} · {chapter.note}</span><h3>{chapter.title}</h3><span className="index-card-action">EXPLORE CHAPTER ↗</span></div></a>)}</div>
    <div className="feeling-index"><p className="fragment-label">Or start with a feeling</p><a href="#nostalgia">The long way home ↗</a><a href="#channel-orange">A different kind of love ↗</a><a href="#endless">Things left unfinished ↗</a><a href="#blonde">Looking back ↗</a></div>
  </section>;
}

