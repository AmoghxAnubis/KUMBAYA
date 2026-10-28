import HomerRadio from "@/components/dom/HomerRadio";
import Performances from "@/components/dom/Performances";
import ListeningArchive from "@/components/dom/ListeningArchive";
import ChapterIndex from "@/components/dom/ChapterIndex";

const chapters = [
  { id: "nostalgia", number: "01", year: "2011 · MIXTAPE", title: "Nostalgia,", accent: "Ultra", description: "An orange cassette, a BMW, and a collection of stories about longing, escape, and growing up.", tracks: ["Novacane", "Swim Good", "Nature Feels", "Songs for Women"], className: "nostalgia" },
  { id: "channel-orange", number: "02", year: "2012 · ALBUM", title: "Channel", accent: "Orange", description: "A world of vivid characters, restless summers, and stories that unfold in full color.", tracks: ["Thinkin Bout You", "Pyramids", "Super Rich Kids", "Pink Matter"], className: "channel" },
  { id: "endless", number: "03", year: "2016 · VISUAL ALBUM", title: "Endless", accent: "", description: "A staircase slowly takes shape. An intimate portrait of making, repetition, and the beauty of unfinished things.", tracks: ["At Your Best", "Alabama", "Wither", "Higgs"], className: "endless" },
  { id: "blonde", number: "04", year: "2016 · ALBUM", title: "Blonde", accent: "", description: "Fragments of memory, love, and change. An open-ended record that leaves room for the listener.", tracks: ["Nikes", "Ivy", "Self Control", "Nights", "White Ferrari"], className: "blonde" },
];

function ChapterArt({ type, number }: { type: string; number: string }) {
  return <div className={`chapter-art art-${type}`} aria-hidden="true">
    <span className="art-number">{number}</span>
    {type === "nostalgia" && <div className="cassette"><div className="cassette-label"><span>MEMORIES / SIDE A</span><div className="cassette-window"><i /><i /></div><span>PLAY IT BACK</span></div><div className="cassette-base" /></div>}
    {type === "channel" && <div className="channel-frame"><div className="channel-screen"><i /><i /><i /><i /><i /><i /><i /></div><span>COLOR / SOUND / STORY</span></div>}
    {type === "endless" && <div className="stairs">{Array.from({ length: 9 }, (_, i) => <i key={i} />)}</div>}
    {type === "blonde" && <div className="blonde-orbit"><i /><i /><i /><span>IN<br />TIME</span></div>}
  </div>;
}

export default function Home() {
  return <>
    <section id="home" className="hero chapter" data-scene="0" aria-labelledby="hero-title">
      <div className="hero-inner">
        <p className="eyebrow">An independent tribute · 2011—2016</p>
        <h1 id="hero-title">KUM<span>BA</span>YA<span className="hero-dot">.</span></h1>
        <div className="hero-bottom"><p>Four chapters. One journey through Frank Ocean&apos;s sound.</p><a href="#nostalgia" className="text-link">Explore the story <span aria-hidden="true">↘</span></a></div>
      </div>
      <span className="hero-index" aria-hidden="true">SCROLL TO BEGIN / 01—04</span>
    </section>
    <ChapterIndex />
    {chapters.map((chapter, index) => <section key={chapter.id} id={chapter.id} data-scene={index + 1} className={`chapter album ${chapter.className}`} aria-labelledby={`${chapter.id}-title`}>
      <div className="chapter-content">
        <div className="chapter-meta"><span>{chapter.year}</span><span>CHAPTER {chapter.number} / 04</span></div>
        <div className="chapter-main"><div className="chapter-heading"><p className="eyebrow">The story so far</p><h2 id={`${chapter.id}-title`}>{chapter.title}{chapter.accent && <><br /><em>{chapter.accent}</em></>}</h2></div>
          <div className="chapter-copy"><p>{chapter.description}</p><div className="track-label">Selected tracks</div><ul>{chapter.tracks.map(track => <li key={track}><a href={`https://open.spotify.com/search/${encodeURIComponent(`Frank Ocean ${track}`)}`} target="_blank" rel="noopener noreferrer" aria-label={`Search Spotify for ${track} by Frank Ocean`}>{track} <span aria-hidden="true">↗</span></a></li>)}</ul></div></div>
        <div className="chapter-next"><span>{chapter.number} / 04</span><a href={index < chapters.length - 1 ? `#${chapters[index + 1].id}` : "#archive"} className="text-link">{index < chapters.length - 1 ? "Next chapter" : "Explore the archive"} <span aria-hidden="true">↓</span></a></div>
      </div>
      <ChapterArt type={chapter.className} number={chapter.number} />
    </section>)}
    <section className="listening-interlude" aria-labelledby="interlude-title"><div><p className="eyebrow">For the long way home</p><h2 id="interlude-title">Some songs<br /><em>stay with you.</em></h2><a className="text-link" href="#archive">Find your next listen ↘</a></div></section>
    <HomerRadio />
    <Performances />
    <ListeningArchive />
    <footer id="credits" className="footer chapter" data-scene="0"><p className="eyebrow">Made for the music</p><h2>Until next time<span>.</span></h2><div className="footer-bottom"><p>An independent fan tribute to Frank Ocean.</p><a href="#home" className="text-link">Experience again ↑</a></div></footer>
  </>;
}





