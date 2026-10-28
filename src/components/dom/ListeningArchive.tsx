const singles = ["Chanel", "Biking", "Lens", "Provider", "Moon River", "DHL", "In My Room", "Cayendo", "Dear April"];

export default function ListeningArchive() {
  return <section id="archive" className="archive chapter" data-scene="0" aria-labelledby="archive-title">
    <div className="archive-header"><span>MORE TO EXPLORE</span><span>THE LISTENING ARCHIVE / 05</span></div>
    <div className="archive-intro"><div><p className="eyebrow">Beyond the albums</p><h2 id="archive-title">Keep<br /><em>listening.</em></h2></div><p>The story doesn&apos;t end with the albums. Explore a selection of tracks featured on blonded, and listen to the playlist shared on the official site.</p></div>
    <div className="archive-content">
      <div className="archive-tracks"><div className="archive-label"><span>SELECTED TRACKS</span><span>01 — 09</span></div><ol>{singles.map((title, index) => <li key={title}><span className="archive-track-number">{String(index + 1).padStart(2, "0")}</span><span>{title}</span><span className="archive-track-mark" aria-hidden="true">·</span></li>)}</ol><p>Track selection from the <a href="https://blonded.co/" target="_blank" rel="noopener noreferrer">official blonded site ↗</a>.</p></div>
      <div className="archive-player"><div className="archive-label"><span>ON ROTATION</span><span>SPOTIFY</span></div><h3>blonded<br />playlist<span>.</span></h3><p>A selection of music shared on blonded.co.</p><iframe title="Blonded playlist on Spotify" src="https://open.spotify.com/embed/playlist/6HEegfWHhUcytwQFAm1QbK?theme=0" width="100%" height="352" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin" /><a className="text-link" href="https://open.spotify.com/playlist/6HEegfWHhUcytwQFAm1QbK" target="_blank" rel="noopener noreferrer">Open playlist on Spotify ↗</a></div>
    </div>
  </section>;
}

