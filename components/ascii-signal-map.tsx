'use client';

import { useEffect, useRef } from 'react';
import { useMode } from './mode-context';

/**
 * AsciiSignalMap — a full-section ASCII operations dashboard rendering the
 * seven-agent topology as a live view. Rows are built procedurally with a
 * fixed inner width so the box stays rectangular regardless of value lengths.
 * Activity bars wobble, tick counter advances, event count climbs.
 *
 * Renders nothing in classic mode.
 */

type Node = { code: string; label: string; baseRate: number; fill: number };

const NODES: Node[] = [
  { code: '01', label: 'signal scanner',   baseRate: 47, fill: 0.92 }, // 0
  { code: '02', label: 'researcher',       baseRate: 12, fill: 0.62 }, // 1
  { code: '03', label: 'outreach drafter', baseRate: 8,  fill: 0.48 }, // 2
  { code: '04', label: 'handler',          baseRate: 5,  fill: 0.32 }, // 3
  { code: '05', label: 'qualifier',        baseRate: 3,  fill: 0.24 }, // 4
  { code: '06', label: 're-engager',       baseRate: 2,  fill: 0.18 }, // 5
  { code: '07', label: 'meeting prepper',  baseRate: 1,  fill: 0.12 }, // 6
];

const W = 76; // inner content width inside the box
const BAR_W = 12;
const BAR_GLYPHS = ['░', '▒', '▓', '█'];

function bar(seed: number, t: number): string {
  const node = NODES[seed];
  const wobble = Math.sin(t * 1.4 + seed * 1.7) * 0.08 + Math.sin(t * 0.6 + seed * 3.1) * 0.05;
  const f = Math.max(0.02, Math.min(1, node.fill + wobble));
  let s = '';
  for (let i = 0; i < BAR_W; i++) {
    const cellFill = f * BAR_W - i;
    if (cellFill >= 1) s += BAR_GLYPHS[3];
    else if (cellFill >= 0.7) s += BAR_GLYPHS[2];
    else if (cellFill >= 0.4) s += BAR_GLYPHS[1];
    else if (cellFill > 0) s += BAR_GLYPHS[0];
    else s += '░';
  }
  return s;
}

function rate(seed: number, t: number): string {
  const node = NODES[seed];
  const wobble = Math.sin(t * 0.9 + seed) * Math.max(1, node.baseRate * 0.18);
  const v = Math.max(0, Math.round(node.baseRate + wobble));
  return String(v).padStart(2, ' ');
}

// Pad content to W chars (assumes 1-cell unicode for our glyphs in JetBrains Mono),
// then wrap in │ │ for the box edges.
function line(content: string): string {
  const padded = (content + ' '.repeat(W)).slice(0, W);
  return '│' + padded + '│';
}

function buildFrame(t: number, fc: number): string {
  const tickStr = (fc / 4).toFixed(2).padStart(7, '0');
  const evt = (2147 + Math.floor(t * 0.4)).toLocaleString();
  const trust = (98 + Math.sin(t * 0.4) * 0.4).toFixed(1);

  const top = '┌' + '─'.repeat(W) + '┐';
  const sep = '├' + '─'.repeat(W) + '┤';
  const bot = '└' + '─'.repeat(W) + '┘';

  return [
    top,
    line(` argus / topology         ◉ 7 agents · live              tick · ${tickStr}`),
    sep,
    line(''),
    line(`   01 signal scanner   ◉ ${bar(0, t)}  ${rate(0, t)}/min ──────────┐`),
    line(`                                                              │`),
    line(`                                                              ▼`),
    line(`   02 researcher       ◉ ${bar(1, t)}  ${rate(1, t)}/min ──────┬───→ ◉ 05 qualifier`),
    line(`                                                  │             ${bar(4, t)}  ${rate(4, t)}/min`),
    line(`                                                  │`),
    line(`   03 outreach         ◉ ${bar(2, t)}  ${rate(2, t)}/min ──────┴───→ ◉ 07 meeting prep`),
    line(`                                                                ${bar(6, t)}  ${rate(6, t)}/min`),
    line(''),
    line(`   04 handler          ◉ ${bar(3, t)}  ${rate(3, t)}/min                ◉ 06 re-engager`),
    line(`                                                                ${bar(5, t)}  ${rate(5, t)}/min`),
    line(''),
    line(` ── ${evt} evt · 24h  ── ${trust}% trust  ── 312 sources  ── stream stable ──`),
    bot,
  ].join('\n');
}

export function AsciiSignalMap() {
  const { mode } = useMode();
  const baseRef = useRef<HTMLPreElement | null>(null);

  useEffect(() => {
    if (mode !== 'ascii') return;
    const base = baseRef.current;
    if (!base) return;

    let raf = 0;
    let t = 0;
    let fc = 0;
    let visible = true;

    const io = new IntersectionObserver(
      ents => {
        for (const e of ents) visible = e.isIntersecting;
      },
      { threshold: 0.05 }
    );
    io.observe(base);

    const tick = () => {
      t += 1 / 60;
      fc++;
      base.textContent = buildFrame(t, fc);
      if (visible) raf = requestAnimationFrame(tick);
      else raf = window.setTimeout(() => requestAnimationFrame(tick), 250) as unknown as number;
    };

    tick();
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [mode]);

  if (mode !== 'ascii') return null;

  return (
    <section style={{ padding: '40px 0 60px', position: 'relative' }}>
      <div className="mav-container">
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: 22,
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div className="mav-eyebrow" style={{ marginBottom: 8 }}>02.5 · Topology</div>
            <h2 className="mav-h2" style={{ fontSize: 38, maxWidth: 720 }}>
              The system, <em className="mav-gradient-text">in one frame.</em>
            </h2>
          </div>
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              color: 'var(--muted)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              maxWidth: 320,
              textAlign: 'right',
              lineHeight: 1.6,
            }}
          >
            <span style={{ color: 'var(--gold)' }}>◉ live</span> · sandbox dataset · activity bars track real signal flow · last paint just now
          </div>
        </div>

        <div
          className="mav-scanline"
          style={{
            position: 'relative',
            background:
              'radial-gradient(ellipse at center, rgba(11,13,16,0.95), rgba(7,8,10,0.98))',
            border: '1px solid var(--line)',
            borderRadius: 10,
            padding: '28px 32px',
            boxShadow:
              '0 30px 80px -40px rgba(200,168,255,0.35), inset 0 0 80px rgba(0,0,0,0.4)',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <pre
            ref={baseRef}
            style={{
              margin: 0,
              fontFamily: 'var(--mono)',
              fontSize: 13,
              lineHeight: '17px',
              letterSpacing: '0.04em',
              color: 'var(--dim)',
              textShadow: '0 0 6px rgba(200,168,255,0.10)',
              filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))',
              whiteSpace: 'pre',
              display: 'inline-block',
            }}
          />
        </div>

        <div
          style={{
            marginTop: 16,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: 'var(--mono)',
            fontSize: 11,
            color: 'var(--muted)',
            letterSpacing: '0.06em',
          }}
        >
          <span>$ argus topology --tail</span>
          <span style={{ color: 'var(--dim)' }}>↳ press [t] to inspect a node · [/] to filter</span>
        </div>
      </div>
    </section>
  );
}
