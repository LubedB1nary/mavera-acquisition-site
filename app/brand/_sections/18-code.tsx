'use client';
import { Section, H2, Mono, Pre } from '../_lib/primitives';

export default function CodeReferenceSection() {
  return (
    <Section id="code" label="18 — Code Reference">
      <H2 italicTail="copy.">CSS &mdash; the literal</H2>

      <Mono label="globals.css · :root tokens" />
      <Pre>{`:root {
  /* Backgrounds */
  --ink0:   #07080a;
  --ink1:   #0b0d10;
  --ink2:   #111418;
  --ink3:   #181b21;

  /* Hairlines */
  --line:      rgba(255,255,255,0.08);
  --line-soft: rgba(255,255,255,0.04);

  /* Text */
  --text:  #edece6;
  --dim:   rgba(237,236,230,0.62);
  --muted: rgba(237,236,230,0.38);
  --faint: rgba(237,236,230,0.16);

  /* Accent */
  --gold:      #c8a8ff;
  --gold-soft: #dcc4ff;
  --gold-dim:  rgba(200,168,255,0.14);

  /* Type families */
  --sans:  'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --serif: 'Instrument Serif', 'Iowan Old Style', Georgia, serif;
  --mono:  'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace;
}`}</Pre>

      <Mono label="Type classes" />
      <Pre>{`.mav-h1 {
  font-family: var(--sans);
  font-weight: 500;
  letter-spacing: -0.035em;
  font-size: 88px;
  line-height: 0.98;
}
.mav-h1 em {
  font-family: var(--serif);
  font-style: italic;
  font-weight: 400;
  letter-spacing: -0.02em;
}

.mav-h2 { font-family: var(--sans); font-weight: 500; letter-spacing: -0.028em; font-size: 56px; line-height: 1.02; }
.mav-h2 em { font-family: var(--serif); font-style: italic; font-weight: 400; }

.mav-h3       { font-size: 28px; font-weight: 500; letter-spacing: -0.020em; line-height: 1.20; }
.mav-lede     { font-size: 19px; font-weight: 400; line-height: 1.50; color: var(--dim); }
.mav-body     { font-size: 15px; font-weight: 400; line-height: 1.55; color: var(--dim); }
.mav-caption  { font-size: 12.5px; color: var(--muted); }
.mav-eyebrow  { font-family: var(--mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--dim); font-weight: 500; }
.mav-code     { font-family: var(--mono); font-size: 13px; }`}</Pre>

      <Mono label="Buttons" />
      <Pre>{`.mav-btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 20px; border-radius: 8px;
  font-size: 14px; font-weight: 500;
  font-family: var(--sans);
  letter-spacing: -0.005em; white-space: nowrap;
  border: 1px solid transparent;
  transition: all .18s ease;
}
.mav-btn--primary { background: var(--gold); color: var(--ink0); }
.mav-btn--primary:hover {
  background: var(--gold-soft);
  transform: translateY(-1px);
  box-shadow: 0 14px 30px -10px rgba(200,168,255,0.45);
}
.mav-btn--ghost { background: transparent; color: var(--text); border-color: var(--line); }
.mav-btn--ghost:hover { background: rgba(255,255,255,0.03); border-color: rgba(255,255,255,0.18); }
.mav-btn--sm { padding: 8px 14px; font-size: 13px; }

/* Shimmer sweep on hover */
.mav-btn--primary::before {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%);
  transform: translateX(-130%);
  transition: transform .9s ease;
  pointer-events: none;
}
.mav-btn--primary:hover::before { transform: translateX(130%); }`}</Pre>

      <Mono label="Card + hover lift + glow" />
      <Pre>{`.mav-card {
  background: var(--ink1);
  border: 1px solid var(--line);
  border-radius: 14px;
}
.mav-hover-lift { transition: transform .35s, border-color .25s, box-shadow .35s; }
.mav-hover-lift:hover {
  transform: translateY(-3px);
  border-color: rgba(200,168,255,0.28) !important;
  box-shadow: 0 22px 40px -22px rgba(200,168,255,0.18);
}

/* Conic-gradient border-on-hover */
.mav-glow::before {
  content: ''; position: absolute; inset: -1px;
  border-radius: inherit; padding: 1px;
  background: conic-gradient(from 0deg, transparent 0%, var(--gold) 18%, transparent 36%, transparent 100%);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor; mask-composite: exclude;
  opacity: 0; transition: opacity .35s ease;
}
.mav-glow:hover::before { opacity: 1; animation: mav-spin-slow 4.5s linear infinite; }`}</Pre>
    </Section>
  );
}
