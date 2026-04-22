// Mavera design tokens + shared CSS
// Injected once globally. Use className="mav-*" utilities inside Mavera cards.

const MAV_TOKENS = {
  ink0: '#07080a',
  ink1: '#0b0d10',
  ink2: '#111418',
  ink3: '#181b21',
  line: 'rgba(255,255,255,0.08)',
  lineSoft: 'rgba(255,255,255,0.04)',
  text: '#edece6',
  dim: 'rgba(237,236,230,0.62)',
  muted: 'rgba(237,236,230,0.38)',
  faint: 'rgba(237,236,230,0.16)',
  gold: '#c8a8ff',
  goldSoft: '#dcc4ff',
  goldDim: 'rgba(200,168,255,0.14)',
  serif: "'Instrument Serif', 'Iowan Old Style', Georgia, serif",
  sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  mono: "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace",
};

if (typeof document !== 'undefined' && !document.getElementById('mav-styles')) {
  const s = document.createElement('style');
  s.id = 'mav-styles';
  const t = MAV_TOKENS;
  s.textContent = `
    .mav-root {
      --ink0:${t.ink0}; --ink1:${t.ink1}; --ink2:${t.ink2}; --ink3:${t.ink3};
      --line:${t.line}; --line-soft:${t.lineSoft};
      --text:${t.text}; --dim:${t.dim}; --muted:${t.muted}; --faint:${t.faint};
      --gold:${t.gold}; --gold-soft:${t.goldSoft}; --gold-dim:${t.goldDim};
      --sans:${t.sans}; --serif:${t.serif}; --mono:${t.mono};
      color: var(--text);
      background: var(--ink0);
      font-family: var(--sans);
      font-feature-settings: "ss01","cv11";
      -webkit-font-smoothing: antialiased;
      letter-spacing: -0.005em;
      line-height: 1.45;
    }
    .mav-root a { color: inherit; text-decoration: none; }
    .mav-root button { font-family: inherit; }
    .mav-root ::selection { background: var(--gold); color: var(--ink0); }

    .mav-grain {
      position: absolute; inset: 0; pointer-events: none; opacity:.35; mix-blend-mode: overlay;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.09 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
    }

    .mav-container { max-width: 1200px; margin: 0 auto; padding: 0 64px; }
    .mav-eyebrow {
      font-family: var(--mono); font-size: 11px; letter-spacing: 0.14em;
      text-transform: uppercase; color: var(--dim); font-weight: 500;
    }
    .mav-h1 {
      font-family: var(--sans); font-weight: 500; letter-spacing: -0.035em;
      font-size: 88px; line-height: 0.98; margin: 0; color: var(--text);
    }
    .mav-h1 em { font-family: var(--serif); font-style: italic; font-weight: 400; letter-spacing: -0.02em; }
    .mav-h2 {
      font-family: var(--sans); font-weight: 500; letter-spacing: -0.028em;
      font-size: 56px; line-height: 1.02; margin: 0;
    }
    .mav-h2 em { font-family: var(--serif); font-style: italic; font-weight: 400; }
    .mav-h3 {
      font-family: var(--sans); font-weight: 500; letter-spacing: -0.02em;
      font-size: 28px; line-height: 1.2; margin: 0;
    }
    .mav-lede { font-size: 19px; line-height: 1.5; color: var(--dim); font-weight: 400; letter-spacing: -0.005em; }
    .mav-body { font-size: 15px; line-height: 1.55; color: var(--dim); }
    .mav-caption { font-size: 12.5px; color: var(--muted); }
    .mav-code { font-family: var(--mono); font-size: 13px; }

    .mav-btn {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 12px 20px; border-radius: 8px; font-size: 14px; font-weight: 500;
      cursor: pointer; transition: all .18s ease; border: 1px solid transparent;
      letter-spacing: -0.005em; white-space: nowrap;
    }
    .mav-btn--primary {
      background: var(--gold); color: var(--ink0);
    }
    .mav-btn--primary:hover { background: var(--gold-soft); transform: translateY(-1px); }
    .mav-btn--ghost {
      background: transparent; color: var(--text);
      border-color: var(--line);
    }
    .mav-btn--ghost:hover { background: rgba(255,255,255,0.03); border-color: rgba(255,255,255,0.18); }
    .mav-btn--sm { padding: 8px 14px; font-size: 13px; }

    .mav-chip {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 5px 10px 5px 8px; border-radius: 999px;
      background: rgba(255,255,255,0.03); border: 1px solid var(--line);
      font-size: 12px; color: var(--dim); font-family: var(--mono); letter-spacing: .02em;
    }
    .mav-chip-dot { width:6px; height:6px; border-radius: 999px; background: var(--gold); }
    .mav-chip-dot--live { background: #7ce0a8; box-shadow: 0 0 0 3px rgba(124,224,168,0.18); animation: mav-pulse 1.8s ease-in-out infinite; }

    @keyframes mav-pulse { 0%,100%{opacity:1;} 50%{opacity:.45;} }
    @keyframes mav-blink { 0%,49%{opacity:1} 50%,100%{opacity:0} }
    @keyframes mav-fadeUp { from { opacity:0; transform: translateY(6px);} to {opacity:1; transform:none;} }

    .mav-card {
      background: var(--ink1); border: 1px solid var(--line); border-radius: 14px;
      position: relative;
    }
    .mav-hr { height:1px; background: var(--line); border: 0; margin: 0; }

    /* thin scrollbar inside artboards */
    .mav-scroll::-webkit-scrollbar { width: 6px; height: 6px; }
    .mav-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 3px; }
    .mav-scroll::-webkit-scrollbar-track { background: transparent; }
  `;
  document.head.appendChild(s);
}

window.MAV_TOKENS = MAV_TOKENS;
