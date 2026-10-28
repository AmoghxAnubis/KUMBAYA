const episodes = [
  { number: "52", guest: "Westside Ty the Beeper King", url: "https://music.apple.com/us/station/homer-radio-ep-52/ra.1712725541" },
  { number: "51", guest: "DJ_Dave", url: "https://music.apple.com/us/station/homer-radio-ep-51/ra.1712723927" },
  { number: "50", guest: "CRYSTALLMESS", url: "https://music.apple.com/us/station/homer-radio-ep-50/ra.1711424821" },
];

export default function HomerRadio() {
  return <section id="radio" className="radio-section" data-scene="0" aria-labelledby="radio-title">
    <div className="radio-meta"><span>THE SOUND BETWEEN THE STORIES</span><span>APPLE MUSIC 1 / HOMER RADIO</span></div>
    <div className="radio-layout"><div className="radio-copy"><p className="eyebrow">An office soundtrack, after hours</p><h2 id="radio-title">HOMER<br /><em>RADIO</em><span>.</span></h2><p>A window into the music playing around the Homer office. Step into a world of guest mixes and unexpected discoveries, presented on Apple Music 1.</p><a className="radio-button" href="https://music.apple.com/us/curator/homer-radio/1620058858" target="_blank" rel="noopener noreferrer">Explore Homer Radio <span aria-hidden="true">↗</span></a></div>
      <div className="radio-visual" aria-hidden="true"><div className="radio-ring ring-one" /><div className="radio-ring ring-two" /><div className="radio-ring ring-three" /><div className="radio-center"><span>OFFICE<br />AFTER<br />HOURS</span><i>✳</i></div><span className="radio-visual-label">A DIFFERENT FREQUENCY / 001</span></div></div>
    <div className="radio-episodes"><div className="radio-episodes-head"><span>SELECTED EPISODES</span><span>OPEN IN APPLE MUSIC ↗</span></div><div className="episode-grid">{episodes.map(episode => <a className="episode-card" href={episode.url} key={episode.number} target="_blank" rel="noopener noreferrer"><span>EPISODE / {episode.number}</span><strong>{episode.guest}</strong><span className="episode-action">Listen on Apple Music ↗</span></a>)}</div></div>
  </section>;
}
