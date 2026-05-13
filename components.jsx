// components.jsx — shared components for JK Collective

const { useState, useEffect, useRef, useMemo } = React;

// ─── Logo ──────────────────────────────────────────────────────────
function LogoJK({ size = 28, tagline = true }) {
  return (
    <a href="#/" className="logo-jk" onClick={(e)=>{e.preventDefault(); window.jkNavigate('home');}}>
      <svg viewBox="0 0 96 44" style={{height: size, width: 'auto'}} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square">
        {/* J — two nested strokes forming the J letterform */}
        <path d="M6 4 H30" />
        <path d="M18 4 V30 Q18 36 12 36 Q6 36 6 30" />
        <path d="M26 4 V30 Q26 40 16 40 Q6 40 6 34" />
        {/* K — vertical stem + two diagonals, doubled */}
        <path d="M46 4 V40" />
        <path d="M52 4 V40" />
        <path d="M52 22 L72 4" />
        <path d="M52 22 L72 40" />
        <path d="M58 22 L78 40" />
      </svg>
      {tagline && (
        <div className="lockup">
          Just Kidding<br/>Collective
        </div>
      )}
    </a>
  );
}

// ─── Nav ───────────────────────────────────────────────────────────
function Nav({ route }) {
  const links = [
    ['artists', 'Artists'],
    ['works', 'Works'],
    ['exhibitions', 'Exhibitions'],
    ['press', 'Press'],
    ['visit', 'Visit'],
  ];
  const now = new Date();
  const day = now.getDay(); // 0=Sun … 6=Sat
  const mins = now.getHours() * 60 + now.getMinutes();
  // Thu–Sat 11:30–17:00, Sun 12:00–16:00, Mon–Wed by appointment
  const isOpen =
    ((day >= 4 && day <= 6) && mins >= 11 * 60 + 30 && mins < 17 * 60) ||
    (day === 0 && mins >= 12 * 60 && mins < 16 * 60);
  return (
    <nav className="nav">
      <LogoJK />
      <div className="nav-links">
        {links.map(([r, label]) => (
          <a key={r} href={`#/${r}`}
             className={route.startsWith(r) ? 'active' : ''}
             onClick={(e)=>{e.preventDefault(); window.jkNavigate(r);}}>
            {label}
          </a>
        ))}
      </div>
      <div className="nav-right">
        <span className="mono"><span className="dot"></span>{isOpen ? 'Open now' : 'Closed'}</span>
        <span className="mono">Southampton, NY</span>
      </div>
    </nav>
  );
}

// ─── Footer ────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer>
      <div className="colossal">JK</div>
      <div className="footer-grid">
        <div>
          <h4>Just Kidding Collective</h4>
          <p style={{fontSize: 14, lineHeight: 1.55, color: 'var(--ink-2)', maxWidth: '42ch'}}>
            A gallery of contemporary art, collectible furniture, and historical design, inside a 1900 power station on North Sea Road.
          </p>
        </div>
        <div>
          <h4>Visit</h4>
          <ul>
            <li>200 North Sea Road</li>
            <li>Southampton, NY 11968</li>
            <li style={{marginTop: 8, color:'var(--ink-3)'}}>Wed–Sun, 11–6</li>
            <li><a href="#/visit" onClick={(e)=>{e.preventDefault();window.jkNavigate('visit')}}>Directions →</a></li>
          </ul>
        </div>
        <div>
          <h4>Index</h4>
          <ul>
            <li><a href="#/artists" onClick={(e)=>{e.preventDefault();window.jkNavigate('artists')}}>Artists</a></li>
            <li><a href="#/works" onClick={(e)=>{e.preventDefault();window.jkNavigate('works')}}>Works</a></li>
            <li><a href="#/press" onClick={(e)=>{e.preventDefault();window.jkNavigate('press')}}>Press</a></li>
            <li>Exhibitions</li>
          </ul>
        </div>
        <div>
          <h4>Follow</h4>
          <ul>
            <li>Instagram</li>
            <li>Newsletter</li>
            <li>Inquiries</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© MMXXVI JK Collective</span>
        <span>Est. September 2025</span>
        <span>Design / Colophon</span>
      </div>
    </footer>
  );
}

// ─── Image with skeleton ───────────────────────────────────────────


function Img({ src, alt, className, caption, onClick }) {
  const resolved = (window.JK_IMG_MAP && window.JK_IMG_MAP[src]) || src;
  return (
    <div className={`img-wrap ${className || ''}`} onClick={onClick}>
      <img src={resolved} alt={alt || ''} loading="lazy" />
      {caption && <div className="caption">{caption}</div>}
    </div>
  );
}

// ─── Lightbox ──────────────────────────────────────────────────────
function Lightbox({ work, onClose }) {
  useEffect(() => {
    const h = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', h);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', h); document.body.style.overflow = ''; };
  }, [onClose]);
  if (!work) return null;
  const artist = window.JK_ARTISTS.find(a => a.id === work.artist);
  return (
    <div className="lightbox" onClick={onClose}>
      <button className="close" onClick={onClose}>CLOSE [ESC]</button>
      <img src={work.img} alt={work.title} onClick={(e)=>e.stopPropagation()} />
      <div className="meta">
        <span style={{fontStyle:'italic', textTransform:'none', letterSpacing:0, fontFamily:'Gloock, serif', fontSize:14}}>
          {work.title}, {work.year}
        </span>
        &nbsp;&nbsp;·&nbsp;&nbsp;
        {artist?.name}&nbsp;&nbsp;·&nbsp;&nbsp;
        {work.medium}
      </div>
    </div>
  );
}

Object.assign(window, { LogoJK, Nav, Footer, Img, Lightbox });
