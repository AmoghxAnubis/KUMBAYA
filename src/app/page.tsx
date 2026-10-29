import HomerRadio from "@/components/dom/HomerRadio";
import Performances from "@/components/dom/Performances";
import ListeningArchive from "@/components/dom/ListeningArchive";
import ChapterIndex from "@/components/dom/ChapterIndex";
import { Fragment, MemoryBox } from "@/components/dom/MemoryBox";
import Workshop from "@/components/dom/Workshop";
import { PassengerSeat, ChannelSwitcher, MemoryCards, Threads } from "@/components/dom/ChapterInteractions";

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
      <div className="hero-frame">
        <div className="hero-kicker"><span>INDEPENDENT MUSIC ARCHIVE</span><span>EST. IN THE FEELING / 01—04</span></div>
        <div className="hero-content">
          <p className="hero-overline"><span /> AN INDEPENDENT TRIBUTE TO FRANK OCEAN</p>
          <h1 id="hero-title">Some things<br /><em>stay with you.</em></h1>
          <div className="hero-description"><p>Four chapters. Countless memories.<br />A world you can make your own.</p><a href="#chapter-index" className="hero-enter"><span>Enter the archive<small>SCROLL TO EXPLORE</small></span><span className="hero-enter-icon" aria-hidden="true">↘</span></a></div>
        </div>
        <div className="hero-image" role="img" aria-label="A quiet coastal road at dusk"><div className="hero-image-label"><span>FIELD NOTES / 001</span><span>THE LONG WAY HOME ↗</span></div><div className="hero-image-wordmark" aria-hidden="true">KUMBAYA<span>✳</span></div></div>
        <div className="hero-caption"><span>A WORLD YOU REMEMBER</span><span>2011 — 2016 & BEYOND</span></div>
      </div>
    </section>
    <section className="manifesto" aria-labelledby="manifesto-title"><div className="manifesto-meta"><span>THE IDEA / 001</span><span>A NOTE FROM KUMBAYA</span></div><div className="manifesto-layout"><p className="manifesto-side">A PLACE FOR<br />THE THINGS THAT STAY.</p><div><h2 id="manifesto-title">Music is never<br />just <em>music.</em></h2><p>A song becomes a place. A voice brings back a summer. A fragment finds its way into your own story. This is an independent archive for the worlds around Frank Ocean&apos;s music — and the things we carry away from them.</p><a href="#chapter-index" className="manifesto-link">FIND YOUR WAY IN <span>↗</span></a></div></div></section>
    <ChapterIndex />
    <section className="seat-spread" aria-labelledby="seat-title"><div className="seat-spread-image" role="img" aria-label="A cassette and photographs on the passenger seat of a car" /><div className="seat-spread-copy"><p className="eyebrow">FIELD NOTE / THE PASSENGER SEAT</p><h2 id="seat-title">Take the<br /><em>long way.</em></h2><p>Somewhere between leaving and arriving, a song becomes a memory. Take a seat, choose a chapter, and see where it takes you.</p><a href="#nostalgia" className="manifesto-link">START THE FIRST CHAPTER <span>↗</span></a></div></section>
    {chapters.map((chapter, index) => <section key={chapter.id} id={chapter.id} data-scene={index + 1} className={`chapter album ${chapter.className}`} aria-labelledby={`${chapter.id}-title`}>
      <div className="chapter-content">
        <div className="chapter-meta"><span>{chapter.year}</span><span>CHAPTER {chapter.number} / 04</span></div>
        <div className="chapter-main"><div className="chapter-heading"><p className="eyebrow">The story so far</p><h2 id={`${chapter.id}-title`}>{chapter.title}{chapter.accent && <><br /><em>{chapter.accent}</em></>}</h2></div>
          <div className="chapter-copy"><p>{chapter.description}</p><div className="track-label">Selected tracks</div><ul>{chapter.tracks.map(track => <li key={track}><a href={`https://open.spotify.com/search/${encodeURIComponent(`Frank Ocean ${track}`)}`} target="_blank" rel="noopener noreferrer" aria-label={`Search Spotify for ${track} by Frank Ocean`}>{track} <span aria-hidden="true">↗</span></a></li>)}</ul></div></div>
        {chapter.id === "nostalgia" && <PassengerSeat />}{chapter.id === "channel-orange" && <ChannelSwitcher />}{chapter.id === "endless" && <Workshop />}{chapter.id === "blonde" && <MemoryCards />}
        <div className="fragment-grid">{({ nostalgia: ["passenger", "road", "mixtape"], "channel-orange": ["room", "summer", "window"], endless: ["staircase", "workshop", "pause"], blonde: ["green", "distance", "time"] }[chapter.id] || []).map(id => <Fragment key={id} id={id} />)}</div>
        <div className="chapter-next"><span>{chapter.number} / 04</span><a href={index < chapters.length - 1 ? `#${chapters[index + 1].id}` : "#archive"} className="text-link">{index < chapters.length - 1 ? "Next chapter" : "Explore the archive"} <span aria-hidden="true">↓</span></a></div>
      </div>
      <ChapterArt type={chapter.className} number={chapter.number} />
    </section>)}
    <Threads />
    <section className="listening-interlude" aria-labelledby="interlude-title"><div><p className="eyebrow">For the long way home</p><h2 id="interlude-title">Some songs<br /><em>stay with you.</em></h2><a className="text-link" href="#archive">Find your next listen ↘</a></div></section>
    <HomerRadio />
    <Performances />
    <ListeningArchive />
    <MemoryBox />
    <footer id="credits" className="footer chapter" data-scene="0"><p className="eyebrow">Made for the music</p><h2>Until next time<span>.</span></h2><div className="footer-bottom"><p>An independent fan tribute to Frank Ocean.</p><a href="#home" className="text-link">Experience again ↑</a></div></footer>
  </>;
}






