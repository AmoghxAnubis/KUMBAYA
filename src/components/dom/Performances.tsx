const performances = [
  { year: "2017", location: "LOS ANGELES, CA", title: "FYF Fest", description: "A headline set that brought the worlds of Blonde and Endless to the stage, with unexpected guests and a crowd singing along.", url: "https://pitchfork.com/news/watch-frank-oceans-full-fyf-fest-2017-set/", link: "Read the performance story" },
  { year: "2023", location: "INDIO, CA", title: "Coachella", description: "A return to the stage with reworked arrangements, deep cuts, and a set that ended at curfew.", url: "https://pitchfork.com/news/frank-ocean-headlines-coachella-2023/", link: "Explore the set and coverage" },
];

export default function Performances() {
  return <section id="performances" className="performances" data-scene="0" aria-labelledby="performances-title">
    <div className="performance-meta"><span>THE LIVE ARCHIVE</span><span>SELECTED MOMENTS / 2017—2023</span></div>
    <div className="performance-intro"><div><p className="eyebrow">In the room</p><h2 id="performances-title">The music,<br /><em>alive.</em></h2></div><p>Some moments exist beyond the record. Revisit two performances that reshaped familiar songs for the stage.</p></div>
    <div className="performance-grid">{performances.map((performance, index) => <article className={`performance-card performance-${index}`} key={performance.title}><div className="performance-card-top"><span>{performance.location}</span><span>{performance.year}</span></div><div className="performance-stage" aria-hidden="true"><div className="stage-light" /><div className="stage-rings" /><span>LIVE / {performance.year}</span></div><div className="performance-card-content"><h3>{performance.title}</h3><p>{performance.description}</p><a className="text-link" href={performance.url} target="_blank" rel="noopener noreferrer">{performance.link} ↗</a></div></article>)}</div>
    <p className="performance-note">Performance coverage links to Pitchfork. <a href="https://www.youtube.com/watch?v=X7SvbfTyUMo" target="_blank" rel="noopener noreferrer">Watch a fan-uploaded FYF recording ↗</a> · Coachella 2023 was not officially livestreamed.</p>
  </section>;
}

