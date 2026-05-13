// pages.jsx — all page components for JK Collective

const { useState: useStateP, useEffect: useEffectP, useMemo: useMemoP } = React;

// ─── Home ──────────────────────────────────────────────────────────
function HomePage({ heroVariant, objectImgs, onOpenWork }) {
  const overrides = objectImgs || [];
  const baseFeatured = window.JK_WORKS.slice(0, 6);
  const featured = baseFeatured.map((w, i) => overrides[i] ? {...w, img: overrides[i]} : w);
  const hero = window.JK_WORKS[0];
  const currentShow = window.JK_EXHIBITIONS[0];

  const HeroA = () => (
    <div className="hero hero-a">
      <div className="left">
        <div>
          <div className="meta-label mono">Currently on view</div>
          <h1 className="display d-3" style={{marginTop: 28, marginBottom: 20}}>
            Porcelain dreams<br/>of Mr. Hun Chun Lee
          </h1>
          <p className="mono" style={{color:'var(--ink-3)'}}>{currentShow.dates}</p>
        </div>
        <div>
          <p style={{fontSize: 15, lineHeight: 1.5, color:'var(--ink-2)', marginBottom: 28}}>
            Just Kidding Collective presents a unique mix of contemporary art, collectible furniture, objects and historical design by some of the world's most inspired creators.
          </p>
          <button className="btn" onClick={()=>window.jkNavigate('works')}>
            View works <span className="arr">→</span>
          </button>
        </div>
      </div>
      <div className="right">
        <img src={hero.img} alt={hero.title} />
      </div>
    </div>
  );

  const HeroB = () => (
    <div className="hero hero-b">
      <div className="bg"><img src={hero.img} alt={hero.title} /></div>
      <div className="content">
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <div className="meta-label mono">No. 07 / Spring Season</div>
          <div className="mono">{currentShow.dates}</div>
        </div>
        <div>
          <h1 className="display d-1" style={{marginBottom: 24}}>
            Porcelain dreams of <span className="italic" style={{fontStyle:'italic'}}>Mr. Hun Chun Lee</span>
          </h1>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', gap: 40, flexWrap:'wrap'}}>
            <p style={{fontSize: 16, lineHeight: 1.5, maxWidth:'44ch', color:'#F1EDE4cc'}}>
              Three artists on the membrane between object and atmosphere — Ono Takashi, Lena Varga, Mira Aaltonen.
            </p>
            <button className="btn" style={{color:'#F1EDE4', borderColor:'#F1EDE4'}}
                    onClick={()=>window.jkNavigate('works')}>
              Enter the show <span className="arr">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const HeroC = () => (
    <div className="hero hero-c">
      <div style={{display:'flex', justifyContent:'space-between', marginBottom: 80, alignItems:'baseline'}}>
        <div className="meta-label mono">Exhibition N° 07</div>
        <div className="mono" style={{color:'var(--ink-3)'}}>200 North Sea Road · SH, NY</div>
      </div>
      <h1 className="display d-1" style={{marginBottom: 40}}>
        Porcelain dreams<br/><span style={{fontStyle:'italic'}}>of Mr. Hun Chun Lee,</span>
      </h1>
      <div style={{display:'grid', gridTemplateColumns:'2fr 1fr', gap: 60, alignItems:'end', marginBottom: 80}}>
        <p className="display d-4" style={{color:'var(--ink-2)', maxWidth:'32ch'}}>
          A gallery of contemporary art, collectible furniture, objects and historical design by the world's most inspired creators.
        </p>
        <div style={{display:'flex', flexDirection:'column', gap: 16, alignItems:'flex-end'}}>
          <span className="mono" style={{color:'var(--ink-3)'}}>{currentShow.dates}</span>
          <button className="btn" onClick={()=>window.jkNavigate('works')}>
            View works <span className="arr">→</span>
          </button>
        </div>
      </div>
      <div className="ticker">
        <div className="ticker-inner mono" style={{color:'var(--ink-2)'}}>
          {Array(2).fill(0).map((_, i) => (
            <React.Fragment key={i}>
              <span>● Ono Takashi</span><span>● Lena Varga</span><span>● Mira Aaltonen</span>
              <span>● Jules Okafor</span><span>● Hiro Yamada</span><span>● Rafael Duarte</span>
              <span>● Claire Benoit</span><span>● Theo Marsh</span>
              <span>● Apr 20 — Jun 15 2026</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );

  const Hero = heroVariant === 'b' ? HeroB : heroVariant === 'c' ? HeroC : HeroA;

  return (
    <main>
      <Hero />

      {/* Featured works */}
      <section className="home-section">
        <div className="home-section-head">
          <div>
            <div className="meta-label mono" style={{marginBottom: 16}}>Selected works</div>
            <h2 className="display d-2">Objects on view,<br/><span style={{fontStyle:'italic', color:'var(--ink-3)'}}>Spring 2026.</span></h2>
          </div>
          <button className="btn-ghost mono" onClick={()=>window.jkNavigate('works')}>See all →</button>
        </div>

        {/* Asymmetric editorial grid */}
        <div className="editorial" style={{padding: 0}}>
          <figure style={{gridColumn: 'span 7', aspectRatio: '4/3'}}>
            <Img src={featured[0].img} alt={featured[0].title}
                 className="hoverable"
                 caption={<><span style={{fontStyle:'italic'}}>{featured[0].title}</span><span>{featured[0].year}</span></>}
                 onClick={()=>onOpenWork(featured[0])} />
            <figcaption>
              <span className="t">{featured[0].title}, {featured[0].year}</span>
              <span className="r">{window.JK_ARTISTS.find(a=>a.id===featured[0].artist).name}</span>
            </figcaption>
          </figure>
          <figure style={{gridColumn: 'span 5', gridRowStart: 1, aspectRatio: '3/4', alignSelf:'end'}}>
            <Img src={featured[1].img} alt={featured[1].title} className="hoverable"
                 onClick={()=>onOpenWork(featured[1])} />
            <figcaption>
              <span className="t">{featured[1].title}, {featured[1].year}</span>
              <span className="r">{window.JK_ARTISTS.find(a=>a.id===featured[1].artist).name}</span>
            </figcaption>
          </figure>
          <figure style={{gridColumn: '3 / span 4', aspectRatio: '1/1', marginTop: 60}}>
            <Img src={featured[2].img} alt={featured[2].title} className="hoverable"
                 onClick={()=>onOpenWork(featured[2])} />
            <figcaption>
              <span className="t">{featured[2].title}, {featured[2].year}</span>
              <span className="r">{window.JK_ARTISTS.find(a=>a.id===featured[2].artist).name}</span>
            </figcaption>
          </figure>
          <figure style={{gridColumn: 'span 5', aspectRatio: '3/4'}}>
            <Img src={featured[3].img} alt={featured[3].title} className="hoverable"
                 onClick={()=>onOpenWork(featured[3])} />
            <figcaption>
              <span className="t">{featured[3].title}, {featured[3].year}</span>
              <span className="r">{window.JK_ARTISTS.find(a=>a.id===featured[3].artist).name}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* About block */}
      <section className="home-section" style={{paddingTop: 0}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.2fr', gap: 80, alignItems:'start'}}>
          <div>
            <div className="meta-label mono" style={{marginBottom: 24}}>The Power Station</div>
            <h3 className="display d-3" style={{marginBottom: 40}}>
              Once the engine of Southampton's <span style={{fontStyle:'italic'}}>earliest electrical grid</span>, now a cathedral for the slow arts.
            </h3>
            <button className="btn" onClick={()=>window.jkNavigate('visit')}>
              Plan a visit <span className="arr">→</span>
            </button>
          </div>
          <div>
            <p className="lead" style={{marginBottom: 28}}>
              The 1900 power station at 200 North Sea Road pulses with a different kind of energy. Under founders Kate Vogel and Jeff Lincoln, JK has reimagined the historic structure as 5,500 square feet of interior space and a sprawling one-acre campus designed for installations, programming, and large-scale activations.
            </p>
            <div className="two-col" style={{padding: 0, gap: 40, gridTemplateColumns:'1fr 1fr'}}>
              <div>
                <div className="mono" style={{color:'var(--ink-3)', marginBottom: 6}}>Interior</div>
                <div className="display d-4">5,500 <span style={{fontSize:'0.5em', color:'var(--ink-3)'}}>sq ft</span></div>
              </div>
              <div>
                <div className="mono" style={{color:'var(--ink-3)', marginBottom: 6}}>Campus</div>
                <div className="display d-4">1 <span style={{fontSize:'0.5em', color:'var(--ink-3)'}}>acre</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// ─── Artists index ─────────────────────────────────────────────────
function ArtistsPage() {
  return (
    <main>
      <section className="container" style={{padding:'80px 36px 40px'}}>
        <div className="meta-label mono" style={{marginBottom: 24}}>Index — {String(window.JK_ARTISTS.filter(a=>!a.hidden).length).padStart(2,'0')} artists</div>
        <h1 className="display d-1" style={{marginBottom: 16}}>
          Artists &<br/><span style={{fontStyle:'italic'}}>Designers.</span>
        </h1>
        <p className="lead" style={{marginTop: 24, marginBottom: 20}}>
          A roster assembled across continents and centuries — united by patience, material intimacy, and a refusal of the fashionable.
        </p>
      </section>
      <section className="artist-index">
        {window.JK_ARTISTS.filter(a=>!a.hidden).map((a, i) => (
          <div key={a.id} className="artist-row" onClick={()=>window.jkNavigate(`artist/${a.id}`)}>
            <div className="num">{String(i+1).padStart(2,'0')}</div>
            <div className="name serif">{a.name}</div>
            <div className="meta">{a.based}</div>
            <div className="meta">{a.medium}</div>
            <div className="arrow">↗</div>
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
}

// ─── Artist detail ─────────────────────────────────────────────────
function ArtistDetailPage({ artistId, onOpenWork }) {
  const a = window.JK_ARTISTS.find(x => x.id === artistId);
  if (!a) return <main><div className="container" style={{padding:60}}>Artist not found. <button className="btn-ghost" onClick={()=>window.jkNavigate('artists')}>Back</button></div></main>;
  const works = window.JK_WORKS.filter(w => w.artist === artistId);
  return (
    <main>
      <div className="artist-hero">
        <div className="text">
          <div>
            <button className="mono btn-ghost" onClick={()=>window.jkNavigate('artists')} style={{marginBottom: 40}}>← All artists</button>
            <div className="meta-label mono" style={{marginBottom: 20}}>{[a.born && ('b. ' + a.born), a.based].filter(Boolean).join(', ') || '—'}</div>
            <h1 className="display d-1" style={{marginBottom: 40}}>{a.name}</h1>
            <p className="lead" style={{marginBottom: 24}}>{a.bio}</p>
            <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.6, maxWidth:'52ch'}}>
              Working primarily in {a.medium.toLowerCase()}, {a.name.split(' ')[0]} maintains a practice that resists market tempo. Each work is conceived, made, and released on its own schedule — sometimes years in the making.
            </p>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap: 24, paddingTop:40, borderTop:'1px solid var(--rule)'}}>
            <div>
              <div className="mono" style={{color:'var(--ink-3)', marginBottom:6}}>Born</div>
              <div className="serif" style={{fontSize:22}}>{a.born || '—'}</div>
            </div>
            <div>
              <div className="mono" style={{color:'var(--ink-3)', marginBottom:6}}>Works</div>
              <div className="serif" style={{fontSize:22}}>{works.length}</div>
            </div>
            <div>
              <div className="mono" style={{color:'var(--ink-3)', marginBottom:6}}>Represented</div>
              <div className="serif" style={{fontSize:22}}>2024 —</div>
            </div>
          </div>
        </div>
        <div className="img-wrap">
          <Img src={a.portrait} alt={a.name} />
        </div>
      </div>

      <section className="home-section">
        <div className="home-section-head">
          <div className="meta-label mono">Selected works</div>
          <div className="mono" style={{color:'var(--ink-3)'}}>{works.length} objects</div>
        </div>
        <div className="editorial" style={{padding:0}}>
          {works.map((w, i) => {
            const span = i % 3 === 0 ? 7 : i % 3 === 1 ? 5 : 6;
            const ar = w.aspect === 'portrait' ? '3/4' : w.aspect === 'tall' ? '2/3' : w.aspect === 'square' ? '1/1' : w.aspect === 'wide' ? '16/9' : '4/3';
            return (
              <figure key={w.id} style={{gridColumn: `span ${span}`, aspectRatio: ar}}>
                <Img src={w.img} alt={w.title} className="hoverable" onClick={()=>onOpenWork(w)} />
                <figcaption>
                  <span className="t">{w.title}, {w.year}</span>
                  <span className="r">{w.dimensions}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
}

// ─── Works index with filters ──────────────────────────────────────
function WorksPage({ onOpenWork }) {
  const [cat, setCat] = useStateP('All');

  // Category buckets — order matters for both nav and grouped display
  const CATS = ['All','Lighting','Seating','Tables','Storage','Mirrors','Ceramics','Art','Objects','Rugs','Desks','Jewelry'];

  const categorize = (w) => {
    const t = (w.title || '').toLowerCase();
    const m = (w.medium || '').toLowerCase();
    const u = (w.img || '').toLowerCase();
    const blob = t + ' ' + m + ' ' + u;
    if (/\b(lamp|sconce|chandelier|pendant|floor light|table light|lantern|candelabra|candlestick)\b/.test(blob)) return 'Lighting';
    if (/\b(rug|carpet|tapestry|tufted)\b/.test(blob)) return 'Rugs';
    if (/\b(mirror)\b/.test(blob)) return 'Mirrors';
    if (/\b(chair|stool|bench|sofa|chaise|settee|loveseat|armchair|ottoman|seating)\b/.test(blob)) return 'Seating';
    if (/\b(desk)\b/.test(blob)) return 'Desks';
    if (/\b(table|console|nightstand|side table|coffee table|cocktail table)\b/.test(blob)) return 'Tables';
    if (/\b(cabinet|sideboard|credenza|shelf|shelving|storage|chest|dresser|armoire|wardrobe)\b/.test(blob)) return 'Storage';
    if (/\b(necklace|ring|earring|bracelet|brooch|cuff|jewelry)\b/.test(blob)) return 'Jewelry';
    if (/\b(canvas|oil paint|acrylic on|watercolor|pastel|drawing|painting|gouache|tempera|print|paper)\b/.test(m)) return 'Art';
    if (/\bwall\b/.test(t) && /\b(bronze|cast|tile|relief)\b/.test(m)) return 'Art';
    if (/\b(vase|vessel|jar|bowl|pot|urn|amphora|sculpture|relief|totem)\b/.test(blob)) return 'Ceramics';
    if (/\b(stoneware|porcelain|earthenware|terracotta|ceramic|glaze)\b/.test(m)) return 'Ceramics';
    return 'Objects';
  };

  // Pre-tag every work once
  const tagged = useMemoP(() => window.JK_WORKS.map(w => ({...w, _cat: categorize(w)})), []);
  const counts = useMemoP(() => {
    const c = { All: tagged.length };
    for (const w of tagged) c[w._cat] = (c[w._cat] || 0) + 1;
    return c;
  }, [tagged]);

  // Build display list: in "All" mode, group sections by category; otherwise filter
  const visible = cat === 'All' ? tagged : tagged.filter(w => w._cat === cat);

  // Choose a span based on aspect (cleaner rhythm than the previous hand-tuned cycle)
  const spanFor = (w, i, total) => {
    const ar = w.aspect;
    // statement piece every ~10 items
    if (i % 10 === 0 && total > 6) return 8;
    if (ar === 'wide') return 6;
    if (ar === 'portrait') return 4;
    return 4;
  };

  const aspectCss = (a) => a === 'portrait' ? '3/4' : a === 'wide' ? '16/10' : '4/3';

  const renderGrid = (items, keyPrefix = '') => (
    <div className="editorial" style={{padding:'0 36px', gridGap:'40px 24px'}}>
      {items.map((w, i) => {
        const span = spanFor(w, i, items.length);
        const ar = aspectCss(w.aspect);
        const artist = window.JK_ARTISTS.find(a => a.id === w.artist);
        return (
          <figure key={keyPrefix + w.id} style={{gridColumn:`span ${span}`, aspectRatio: ar, cursor:'pointer'}}
                  onClick={()=>window.jkNavigate(`work/${w.id}`)}>
            <Img src={w.img} alt={w.title} className="hoverable" />
            <figcaption>
              <span>
                <span className="t">{w.title}</span>, {w.year}<br/>
                <span style={{color:'var(--ink-3)', fontSize:11}}>{artist ? artist.name : ''}</span>
              </span>
              <span className="r">{w.price}</span>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );

  return (
    <main>
      <section className="container" style={{padding:'80px 36px 32px'}}>
        <div className="meta-label mono" style={{marginBottom: 24}}>Archive — {window.JK_WORKS.length} works</div>
        <h1 className="display d-1">
          Works in<br/><span style={{fontStyle:'italic'}}>circulation.</span>
        </h1>
      </section>

      {/* Category nav — editorial type, not chips. Sticks below page header. */}
      <nav style={{
        position:'sticky', top:68, zIndex:20,
        background:'color-mix(in srgb, var(--bg) 92%, transparent)',
        backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)',
        borderTop:'1px solid var(--rule)', borderBottom:'1px solid var(--rule)',
        padding:'18px 36px',
        display:'flex', gap:28, flexWrap:'wrap', alignItems:'baseline',
      }}>
        {CATS.filter(c => c === 'All' || (counts[c]||0) > 0).map(c => {
          const active = cat === c;
          return (
            <button key={c} onClick={()=>setCat(c)}
                    style={{
                      fontFamily:"'Gloock', serif",
                      fontSize: active ? 24 : 22,
                      lineHeight:1,
                      color: active ? 'var(--ink)' : 'var(--ink-3)',
                      fontStyle: active ? 'italic' : 'normal',
                      letterSpacing:'-0.01em',
                      transition:'color .2s, font-size .2s',
                      padding:0, background:'none', border:0, cursor:'pointer',
                      display:'inline-flex', alignItems:'baseline', gap:6,
                    }}>
              {c}
              <sup style={{
                fontFamily:"'JetBrains Mono', monospace", fontSize:10, fontStyle:'normal',
                color: active ? 'var(--ink-2)' : 'var(--ink-3)', letterSpacing:'.04em',
              }}>{counts[c] || 0}</sup>
            </button>
          );
        })}
      </nav>

      {cat === 'All' ? (
        // Grouped sections — gallery floor plan
        <div style={{padding:'60px 0 80px'}}>
          {CATS.filter(c => c !== 'All' && (counts[c]||0) > 0).map((c, sectionIdx) => {
            const items = tagged.filter(w => w._cat === c);
            return (
              <section key={c} style={{marginBottom: 80}}>
                <header style={{
                  display:'grid', gridTemplateColumns:'1fr auto', alignItems:'baseline',
                  padding:'0 36px', marginBottom: 32,
                  borderBottom:'1px solid var(--rule)', paddingBottom: 18,
                }}>
                  <div style={{display:'flex', alignItems:'baseline', gap:18}}>
                    <span className="mono" style={{color:'var(--ink-3)'}}>
                      {String(sectionIdx + 1).padStart(2,'0')}
                    </span>
                    <h2 className="display" style={{fontSize:'clamp(36px,5vw,72px)', lineHeight:0.95}}>
                      {c}<span style={{fontStyle:'italic', color:'var(--ink-3)'}}>.</span>
                    </h2>
                  </div>
                  <div style={{display:'flex', gap:18, alignItems:'baseline'}}>
                    <span className="mono" style={{color:'var(--ink-3)'}}>
                      {items.length} {items.length === 1 ? 'work' : 'works'}
                    </span>
                    <button className="mono btn-ghost" onClick={()=>setCat(c)} style={{fontSize:10}}>
                      View all →
                    </button>
                  </div>
                </header>
                {/* Show only the first 6 in each section in "All" view to keep scrollability */}
                {renderGrid(items.slice(0, 6), `${c}-`)}
                {items.length > 6 && (
                  <div style={{padding:'24px 36px 0', textAlign:'right'}}>
                    <button className="mono btn-ghost" onClick={()=>setCat(c)}>
                      + {items.length - 6} more in {c.toLowerCase()}
                    </button>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      ) : (
        // Focused single-category view
        <section style={{padding:'48px 0 80px'}}>
          <div style={{padding:'0 36px', marginBottom:32, display:'flex', justifyContent:'space-between', alignItems:'baseline'}}>
            <div>
              <span className="mono" style={{color:'var(--ink-3)'}}>{cat}</span>
              <h2 className="display d-3" style={{marginTop:8}}>
                {counts[cat]} {counts[cat] === 1 ? 'work' : 'works'} on offer
              </h2>
            </div>
            <button className="mono btn-ghost" onClick={()=>setCat('All')}>← All categories</button>
          </div>
          {renderGrid(visible)}
        </section>
      )}
      <Footer />
    </main>
  );
}

// ─── Work detail ───────────────────────────────────────────────────
function WorkDetailPage({ workId, onOpenWork }) {
  const w = window.JK_WORKS.find(x => x.id === workId);
  if (!w) return <main><div style={{padding:60}}>Work not found. <button className="btn-ghost" onClick={()=>window.jkNavigate('works')}>Back</button></div></main>;
  const artist = window.JK_ARTISTS.find(a => a.id === w.artist);
  const related = window.JK_WORKS.filter(x => x.artist === w.artist && x.id !== w.id).slice(0, 3);
  return (
    <main>
      <div className="work-detail">
        <div className="media" onClick={()=>onOpenWork(w)}>
          <img src={w.img} alt={w.title} />
        </div>
        <div className="info">
          <button className="mono btn-ghost" onClick={()=>window.jkNavigate('works')} style={{marginBottom: 48}}>← All works</button>
          <div className="meta-label mono" style={{marginBottom: 20}}>
            <a href={`#/artist/${artist.id}`} onClick={(e)=>{e.preventDefault();window.jkNavigate(`artist/${artist.id}`)}}>{artist.name}</a>
          </div>
          <h1 className="display d-3">{w.title}<span className="year">, </span></h1>
          <div className="year serif" style={{fontSize: 22}}>{w.year}</div>

          <dl>
            <dt>Medium</dt><dd>{w.medium}</dd>
            <dt>Dimensions</dt><dd>{w.dimensions}</dd>
            <dt>Edition</dt><dd>{w.edition}</dd>
            <dt>Provenance</dt><dd>Studio of the artist</dd>
            <dt>Price</dt><dd className="serif" style={{fontSize: 20}}>{w.price}</dd>
          </dl>

          <p style={{fontSize: 14, color:'var(--ink-2)', lineHeight: 1.6, marginBottom: 20}}>
            This work continues {artist.name.split(' ')[0]}'s ongoing investigation into {w.medium.split(',')[0].toLowerCase()} as a carrier of light, gesture, and time. Click the image to view at full scale.
          </p>

          <div className="cta-row">
            <button className="btn">Inquire <span className="arr">→</span></button>
            <button className="btn" style={{background:'transparent'}}>Save to list</button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="home-section" style={{paddingTop: 80}}>
          <div className="home-section-head">
            <div className="meta-label mono">More by {artist.name}</div>
            <button className="btn-ghost mono" onClick={()=>window.jkNavigate(`artist/${artist.id}`)}>View all →</button>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 24}}>
            {related.map(r => (
              <figure key={r.id} style={{aspectRatio: '3/4', cursor:'pointer'}} onClick={()=>window.jkNavigate(`work/${r.id}`)}>
                <Img src={r.img} alt={r.title} className="hoverable" />
                <figcaption style={{paddingTop:12, fontSize:12, color:'var(--ink-2)'}}>
                  <em>{r.title}</em>, {r.year}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

// ─── Press ─────────────────────────────────────────────────────────
function PressPage() {
  return (
    <main>
      <section className="container" style={{padding:'80px 36px 40px'}}>
        <div className="meta-label mono" style={{marginBottom: 24}}>Selected press</div>
        <h1 className="display d-1">
          In<br/><span style={{fontStyle:'italic'}}>conversation.</span>
        </h1>
        <p className="lead" style={{marginTop: 24}}>
          A selection of features, profiles, and interviews from our first eighteen months.
        </p>
      </section>
      <section className="press-list">
        {window.JK_PRESS.map((p, i) => {
          const hasLink = p.url && p.url !== '#';
          const Row = hasLink ? 'a' : 'div';
          const linkProps = hasLink ? { href: p.url, target: '_blank', rel: 'noopener noreferrer' } : {};
          return (
            <Row key={i} className="press-row" {...linkProps}>
              <div className="pub">{p.pub}</div>
              <div className="title serif">{p.title}</div>
              <div className="date">{p.date}</div>
              <div className="arr">↗</div>
            </Row>
          );
        })}
      </section>
      <Footer />
    </main>
  );
}

// ─── Visit ─────────────────────────────────────────────────────────
function VisitPage() {
  return (
    <main>
      <section className="container" style={{padding:'80px 36px 20px'}}>
        <div className="meta-label mono" style={{marginBottom: 24}}>200 North Sea Road · Southampton, NY</div>
        <h1 className="display d-1">
          Visit<br/><span style={{fontStyle:'italic'}}>the station.</span>
        </h1>
      </section>

      <div className="two-col">
        <div>
          <div className="info-list">
            <div className="row">
              <span className="k">Hours</span>
              <span className="v">
                Thu–Sat · 11:30 — 17:00<br/>
                Sunday · 12:00 — 16:00<br/>
                Mon–Wed · By appointment<br/>
                <span style={{color:'var(--ink-3)', fontSize:13}}>Current winter hours. Closed most holidays.</span>
              </span>
            </div>
            <div className="row">
              <span className="k">Address</span>
              <span className="v">
                200 North Sea Road<br/>
                Southampton, NY 11968<br/>
                <span style={{color:'var(--ink-3)', fontSize:13}}>93 miles east of Manhattan.</span>
              </span>
            </div>
            <div className="row">
              <span className="k">Contact</span>
              <span className="v">
                <a href="mailto:info@collectiveartdesign.com" style={{color:'inherit'}}>info@collectiveartdesign.com</a><br/>
                <a href="tel:+16313533445" style={{color:'inherit'}}>+1 (631) 353 — 3445</a>
              </span>
            </div>
            <div className="row">
              <span className="k">Follow</span>
              <span className="v" style={{display:'flex', flexWrap:'wrap', gap:'4px 18px'}}>
                <a className="mono" style={{color:'inherit', textDecoration:'none', borderBottom:'1px solid var(--rule)'}} href="https://www.instagram.com/jefflincolnartdesign/?hl=en" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
                <a className="mono" style={{color:'inherit', textDecoration:'none', borderBottom:'1px solid var(--rule)'}} href="https://www.incollect.com/professionals/dealers/jeff-lincoln-ny" target="_blank" rel="noopener noreferrer">InCollect ↗</a>
                <a className="mono" style={{color:'inherit', textDecoration:'none', borderBottom:'1px solid var(--rule)'}} href="https://www.artsy.net/partner/jeff-lincoln-art-plus-design" target="_blank" rel="noopener noreferrer">Artsy ↗</a>
                <a className="mono" style={{color:'inherit', textDecoration:'none', borderBottom:'1px solid var(--rule)'}} href="https://www.artnet.com/galleries/jeff-lincoln-art-design/" target="_blank" rel="noopener noreferrer">Artnet ↗</a>
              </span>
            </div>
            <div className="row">
              <span className="k">Accessibility</span>
              <span className="v">
                Ground-floor galleries are fully wheelchair accessible. Please call ahead for assistance entering the sculpture campus.
              </span>
            </div>
            <div className="row">
              <span className="k">Private viewings</span>
              <span className="v">
                Available weekdays by request. Please write to the above address for scheduling.
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="img-wrap" style={{aspectRatio:'4/5', marginBottom: 24}}>
            <Img src="assets/img/visit/exterior.webp" alt="JK Collective gallery exterior" />
          </div>
          <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.6}}>
            Originally the 1900 North Sea power station, the building retains its steel-truss roof, concrete loading bays, and the scars of a century of industry. Restoration was led by architect Niels Torp with the founders, completed September 2025.
          </p>
        </div>
      </div>

      {/* Exhibitions list */}
      <section className="container" style={{padding:'60px 36px'}}>
        <div className="meta-label mono" style={{marginBottom: 40}}>Exhibitions</div>
        {window.JK_EXHIBITIONS.slice(0, 6).map((ex, i) => {
          const label = ex.section === 'current' ? (ex.year >= 2025 ? 'On view' : 'Recent') : 'Past';
          return (
            <div key={i} style={{display:'grid', gridTemplateColumns:'120px 1fr 120px', gap: 32, padding:'28px 0', borderTop:'1px solid var(--rule)', alignItems:'baseline'}}>
              <span className="mono" style={{color: label === 'On view' ? 'var(--accent)' : 'var(--ink-3)'}}>{label}</span>
              <span className="serif" style={{fontSize:22}}>{ex.title}</span>
              <span className="mono" style={{color:'var(--ink-3)', textAlign:'right'}}>{ex.dates}</span>
            </div>
          );
        })}
        <div style={{borderTop:'1px solid var(--rule)', paddingTop:24, marginTop:8}}>
          <button className="btn-ghost mono" onClick={()=>window.jkNavigate('exhibitions')}>Full exhibition history →</button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// ─── Exhibitions ───────────────────────────────────────────────────
function ExhibitionsPage({ onOpenWork }) {
  const all = window.JK_EXHIBITIONS;
  const current = all.filter(e => e.section === 'current');
  const past = all.filter(e => e.section === 'past');

  // Group past by year
  const pastByYear = {};
  past.forEach(e => {
    pastByYear[e.year] = pastByYear[e.year] || [];
    pastByYear[e.year].push(e);
  });
  const pastYears = Object.keys(pastByYear).sort((a,b) => b - a);

  return (
    <main>
      {/* HERO */}
      <section className="container" style={{padding:'96px 36px 32px'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr auto', gap:48, alignItems:'end'}}>
          <div>
            <div className="meta-label mono" style={{marginBottom: 28}}>Exhibitions · 2016 — 2026</div>
            <h1 className="display d-1">
              On <span style={{fontStyle:'italic'}}>view,</span><br/>
              and previously.
            </h1>
          </div>
          <div className="mono" style={{color:'var(--ink-3)', textAlign:'right', whiteSpace:'nowrap'}}>
            <div>{current.length} currently on view</div>
            <div style={{marginTop:4}}>{past.length} in the archive</div>
          </div>
        </div>
        <p className="lead" style={{marginTop:40, maxWidth: '50ch'}}>
          A decade of programming across both galleries, from the founding 2016 season to the current cycle at the Southampton power station.
        </p>
      </section>

      {/* CURRENT — featured grid */}
      <section className="container" style={{padding:'32px 36px 24px'}}>
        <div className="home-section-head" style={{marginBottom:32}}>
          <div className="meta-label mono">Currently on view</div>
          <span className="mono" style={{color:'var(--ink-3)'}}>{String(current.length).padStart(2,'0')} shows</span>
        </div>

        <div className="exh-feature-grid">
          {current.map((ex, i) => (
            <article key={ex.id} className="exh-card">
              <figure className="img-wrap" style={{aspectRatio: i === 0 ? '4/5' : '3/4'}}>
                <Img src={ex.img} alt={ex.title} className="hoverable" />
              </figure>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginTop:18}}>
                <span className="mono" style={{color:'var(--ink-3)'}}>{String(i + 1).padStart(2,'0')} / {String(current.length).padStart(2,'0')}</span>
                <span className="mono" style={{color:'var(--ink-3)'}}>{ex.dates}</span>
              </div>
              <h3 className="serif" style={{fontSize:'clamp(22px,1.9vw,28px)', lineHeight:1.15, marginTop:10, letterSpacing:'-0.01em'}}>
                {ex.title}
              </h3>
              {ex.blurb && (
                <p style={{fontSize:14, lineHeight:1.6, color:'var(--ink-2)', marginTop:12, maxWidth:'42ch'}}>
                  {ex.blurb}
                </p>
              )}
              <button className="btn-ghost mono" style={{marginTop:18}}
                      onClick={()=>window.jkNavigate('works')}>
                View works →
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* PAST — typographic archive */}
      <section className="container" style={{padding:'96px 36px 80px'}}>
        <div className="home-section-head" style={{marginBottom:32}}>
          <div className="meta-label mono">Past exhibitions</div>
          <span className="mono" style={{color:'var(--ink-3)'}}>{String(past.length).padStart(2,'0')} archived</span>
        </div>

        <div className="exh-archive">
          {pastYears.map(year => (
            <div key={year} className="exh-year-block">
              <div className="exh-year">{year}</div>
              <div className="exh-year-list">
                {pastByYear[year].map((ex, i) => (
                  <div key={ex.id} className="exh-row">
                    <span className="num mono">{String(i+1).padStart(2,'0')}</span>
                    <span className="serif title">{ex.title}</span>
                    <span className="mono dates">{ex.dates}</span>
                    <span className="arr">↗</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

Object.assign(window, { HomePage, ArtistsPage, ArtistDetailPage, WorksPage, WorkDetailPage, PressPage, VisitPage, ExhibitionsPage });
