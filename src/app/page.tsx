export default function Home() {
  return (
    <div className="flex flex-col items-center w-full relative">
      {/* Film grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Hero - Full Screen */}
      <section className="h-screen w-full flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-green-700 to-black opacity-40"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0djVoNXYtNWgtNXptMCA1djVoNXYtNWgtNXptLTUgMHY1aDV2LTVoLTV6bTAgMHYtNWg1djVoLTV6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

        <div className="relative z-10 text-center space-y-6 px-6">
          <div className="text-xs tracking-[0.5em] text-orange-400 uppercase font-light animate-pulse">
            Press Play
          </div>
          <h1 className="text-[18vw] md:text-[15rem] font-black leading-none tracking-tighter">
            <span className="block text-white drop-shadow-2xl">KUM</span>
            <span className="block text-green-400 italic drop-shadow-2xl">BA</span>
            <span className="block text-orange-400 drop-shadow-2xl">YA</span>
          </h1>
          <p className="text-xl text-white/60 max-w-lg mx-auto">
            Four albums. One journey through Frank Ocean's sound.
          </p>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="text-xs text-white/40 animate-bounce">SCROLL TO BEGIN</div>
        </div>
      </section>

      {/* Nostalgia, Ultra - Full Screen with Image */}
      <section className="min-h-screen w-full relative flex items-center overflow-hidden">
        {/* Background Image Simulation */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-700 via-orange-500 to-amber-400"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.3),transparent)]"></div>

        {/* Cassette Tape Visual */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-3/4 opacity-20">
          <div className="w-full h-full bg-black/30 rounded-lg border-8 border-white/10 flex items-center justify-center">
            <div className="space-y-4">
              <div className="flex gap-16 justify-center">
                <div className="w-32 h-32 rounded-full bg-white/20 border-4 border-white/30"></div>
                <div className="w-32 h-32 rounded-full bg-white/20 border-4 border-white/30"></div>
              </div>
              <div className="text-center text-white/40 text-2xl font-mono">SIDE A</div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-20 py-32">
          <div className="max-w-2xl space-y-8">
            <div className="space-y-3">
              <div className="text-sm tracking-[0.3em] text-white/70 uppercase">2011 • Mixtape</div>
              <h2 className="text-7xl md:text-9xl font-black leading-none text-white drop-shadow-2xl">
                Nostalgia,<br />
                <span className="text-amber-200 italic">Ultra</span>
              </h2>
            </div>

            <div className="h-1 w-32 bg-white/40"></div>

            <p className="text-2xl text-white/90 leading-relaxed font-light">
              "I'm high and I'm bi, wait, I never said I'm bi"<br />
              The orange cassette. The BMW. California sunsets and borrowed dreams.
            </p>

            <div className="space-y-3 pt-4">
              <div className="text-sm text-white/60 uppercase tracking-wide">Essential Tracks</div>
              <div className="grid grid-cols-2 gap-3 text-white/50">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-white/60"></div>
                  <span>Novacane</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-white/60"></div>
                  <span>Swim Good</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-white/60"></div>
                  <span>Nature Feels</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-white/60"></div>
                  <span>Songs for Women</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Channel Orange - Full Screen with Image */}
      <section className="min-h-screen w-full relative flex items-center overflow-hidden">
        {/* Background Image Simulation - TV Static / Orange Gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-600 via-amber-400 to-yellow-300"></div>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)` }}></div>

        {/* TV Static Bars */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 opacity-20">
          <div className="w-full h-full space-y-8">
            <div className="h-12 bg-black/40"></div>
            <div className="h-12 bg-white/40"></div>
            <div className="h-12 bg-black/40"></div>
            <div className="h-12 bg-amber-900/40"></div>
            <div className="h-12 bg-white/40"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-20 py-32 ml-auto">
          <div className="max-w-2xl space-y-8 text-right ml-auto">
            <div className="space-y-3">
              <div className="text-sm tracking-[0.3em] text-black/60 uppercase">2012 • Album</div>
              <h2 className="text-7xl md:text-9xl font-black leading-none text-white drop-shadow-2xl">
                Channel<br />
                <span className="text-white/90">Orange</span>
              </h2>
            </div>

            <div className="h-1 w-32 bg-white/60 ml-auto"></div>

            <p className="text-2xl text-white leading-relaxed font-light">
              "I'll be the boyfriend in your wet dreams tonight"<br />
              Pyramids. Super rich kids. Endless summer heat and heartbreak.
            </p>

            <div className="space-y-3 pt-4">
              <div className="text-sm text-white/80 uppercase tracking-wide">Key Moments</div>
              <div className="grid grid-cols-2 gap-3 text-white/70">
                <div className="flex items-center gap-2 justify-end">
                  <span>Thinkin Bout You</span>
                  <div className="w-1 h-1 rounded-full bg-white/80"></div>
                </div>
                <div className="flex items-center gap-2 justify-end">
                  <span>Pyramids</span>
                  <div className="w-1 h-1 rounded-full bg-white/80"></div>
                </div>
                <div className="flex items-center gap-2 justify-end">
                  <span>Super Rich Kids</span>
                  <div className="w-1 h-1 rounded-full bg-white/80"></div>
                </div>
                <div className="flex items-center gap-2 justify-end">
                  <span>Pink Matter</span>
                  <div className="w-1 h-1 rounded-full bg-white/80"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blonde - Full Screen with Image */}
      <section className="min-h-screen w-full relative flex items-center justify-center overflow-hidden">
        {/* Background - Green Hair / Minimalist */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-600 via-green-800 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(134,239,172,0.3),transparent)]"></div>

        {/* Abstract Hair Pattern */}
        <div className="absolute top-0 left-0 right-0 h-1/2 opacity-10">
          <div className="w-full h-full bg-gradient-to-b from-green-300 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center space-y-12 px-8">
          <div className="space-y-4">
            <div className="text-sm tracking-[0.5em] text-green-300/60 uppercase">2016 • Visual Album</div>
            <h2 className="text-[12rem] md:text-[16rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-green-300 to-green-600 italic drop-shadow-2xl">
              Blonde
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-3xl text-green-100 font-light italic leading-relaxed">
              "Solo (Reprise). Self control.<br />Nikes. Nights. Ivy."
            </p>

            <div className="h-px w-64 bg-green-400/30 mx-auto"></div>

            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Green hair. White Ferrari. The loneliest album.<br />
              Minimalism as vulnerability. Love songs for nobody.
            </p>

            <div className="pt-6 space-y-4">
              <div className="text-sm text-green-300/60 uppercase tracking-widest">Track Highlights</div>
              <div className="flex flex-wrap gap-4 justify-center text-green-200/50 text-sm">
                <span>Nikes</span>
                <span>•</span>
                <span>Ivy</span>
                <span>•</span>
                <span>Self Control</span>
                <span>•</span>
                <span>Nights</span>
                <span>•</span>
                <span>White Ferrari</span>
                <span>•</span>
                <span>Siegfried</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Endless - Full Screen */}
      <section className="min-h-screen w-full relative flex items-center justify-center overflow-hidden">
        {/* Industrial Warehouse Aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>

        {/* Staircase Visual */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10">
          <div className="w-full h-full flex items-center justify-center">
            <div className="space-y-2 transform rotate-12">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-8 bg-white/20" style={{ width: `${200 + i * 30}px`, marginLeft: `${i * 20}px` }}></div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center space-y-16 px-8">
          <div className="space-y-6">
            <div className="text-xs tracking-[0.5em] text-gray-600 uppercase">2016 • Visual Album</div>
            <h2 className="text-8xl md:text-[10rem] font-black tracking-[0.4em] text-gray-300 uppercase drop-shadow-2xl">
              ENDLESS
            </h2>
            <p className="text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              The staircase. Built from scratch.<br />
              Black and white construction. Forever building, never finished.
            </p>
          </div>

          <div className="pt-12">
            <button className="px-16 py-6 border-2 border-gray-600 hover:border-gray-400 hover:bg-gray-900/50 transition-all duration-300 rounded-full text-sm tracking-[0.3em] uppercase text-gray-400 hover:text-gray-200">
              Experience Again
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="w-full py-24 px-6 bg-black/60 backdrop-blur-sm border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <p className="text-xs text-white/40 tracking-[0.4em] uppercase">
            A Tribute to Frank Ocean
          </p>
          <p className="text-sm text-white/20 italic max-w-md mx-auto">
            "I'd rather live outside, I'd rather chip my pride than lose my mind out here"
          </p>
          <div className="flex gap-6 justify-center text-xs text-white/30">
            <span>2011</span>
            <span>•</span>
            <span>2012</span>
            <span>•</span>
            <span>2016</span>
          </div>
        </div>
      </section>
    </div>
  );
}
