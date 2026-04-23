'use client';

import { useEffect, useRef } from 'react';

/**
 * AsciiRain — a slow, sparse cascade of monospace characters that drifts
 * down behind hero content. NOT the loud Matrix rain — this is closer to
 * gentle data sediment, with occasional bright streaks.
 *
 * Renders into a single <pre>; one column per text-column. Each column has
 * its own slow scroll speed and occasional "active" streak.
 */

const GLYPHS = '01[]<>{}/\\=+*-.:;|';
const ACTIVE_GLYPHS = '01';

type Props = {
  className?: string;
  cols?: number;
  rows?: number;
  fontSize?: number;
  /** 0..1 probability per col per second of a bright streak starting */
  streakChance?: number;
  /** Base color */
  color?: string;
  /** Bright color for streak heads */
  highlight?: string;
};

export function AsciiRain({
  className = '',
  cols = 96,
  rows = 36,
  fontSize = 12,
  streakChance = 0.18,
  color = 'rgba(200,168,255,0.10)',
  highlight = 'rgba(220,196,255,0.85)',
}: Props) {
  const baseRef = useRef<HTMLPreElement | null>(null);
  const hiRef = useRef<HTMLPreElement | null>(null);

  useEffect(() => {
    const base = baseRef.current;
    const hi = hiRef.current;
    if (!base || !hi) return;

    // for each column: a slow scroll offset + active streak state
    type Streak = { row: number; len: number; speed: number };
    const colSpeeds: number[] = [];
    const colChars: string[][] = [];
    const colStreaks: (Streak | null)[] = [];

    for (let c = 0; c < cols; c++) {
      colSpeeds[c] = 0.08 + Math.random() * 0.18;
      colChars[c] = [];
      for (let r = 0; r < rows + 6; r++) {
        colChars[c][r] = Math.random() < 0.55 ? GLYPHS[Math.floor(Math.random() * GLYPHS.length)] : ' ';
      }
      colStreaks[c] = null;
    }

    let raf = 0;
    let last = performance.now();
    const offsets: number[] = new Array(cols).fill(0);

    const tick = (now: number) => {
      const dt = Math.min(80, now - last) / 1000;
      last = now;

      const baseGrid: string[][] = Array.from({ length: rows }, () => Array(cols).fill(' '));
      const hiGrid: string[][] = Array.from({ length: rows }, () => Array(cols).fill(' '));

      for (let c = 0; c < cols; c++) {
        offsets[c] += colSpeeds[c] * dt * 8;
        const off = Math.floor(offsets[c]);

        // occasionally mutate a few chars in this column
        if (Math.random() < 0.03) {
          const idx = Math.floor(Math.random() * colChars[c].length);
          colChars[c][idx] = Math.random() < 0.55 ? GLYPHS[Math.floor(Math.random() * GLYPHS.length)] : ' ';
        }

        // possibly start a streak
        if (!colStreaks[c] && Math.random() < (streakChance * dt)) {
          colStreaks[c] = {
            row: -2,
            len: 4 + Math.floor(Math.random() * 8),
            speed: 6 + Math.random() * 14,
          };
        }

        // render base
        for (let r = 0; r < rows; r++) {
          const ch = colChars[c][(r + off) % colChars[c].length];
          baseGrid[r][c] = ch;
        }

        // render streak (highlight on top of base)
        const s = colStreaks[c];
        if (s) {
          s.row += s.speed * dt;
          const head = Math.floor(s.row);
          for (let k = 0; k < s.len; k++) {
            const r = head - k;
            if (r >= 0 && r < rows) {
              const g = ACTIVE_GLYPHS[Math.floor(Math.random() * ACTIVE_GLYPHS.length)];
              hiGrid[r][c] = g;
              if (k === 0) baseGrid[r][c] = g; // reinforce head in base too
            }
          }
          if (head - s.len > rows + 2) colStreaks[c] = null;
        }
      }

      base.textContent = baseGrid.map(r => r.join('')).join('\n');
      hi.textContent = hiGrid.map(r => r.join('')).join('\n');

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [cols, rows, streakChance]);

  return (
    <div
      className={`mav-ascii-rain ${className}`}
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        // radial fade so it disappears behind text
        maskImage:
          'radial-gradient(ellipse at 32% 35%, transparent 0%, transparent 24%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,1) 100%)',
        WebkitMaskImage:
          'radial-gradient(ellipse at 32% 35%, transparent 0%, transparent 24%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,1) 100%)',
      }}
    >
      <pre
        ref={baseRef}
        style={{
          margin: 0,
          fontFamily: 'var(--mono)',
          fontSize,
          lineHeight: `${fontSize}px`,
          color,
          letterSpacing: '0.04em',
          whiteSpace: 'pre',
        }}
      />
      <pre
        ref={hiRef}
        style={{
          margin: 0,
          position: 'absolute',
          inset: 0,
          fontFamily: 'var(--mono)',
          fontSize,
          lineHeight: `${fontSize}px`,
          color: highlight,
          letterSpacing: '0.04em',
          whiteSpace: 'pre',
          textShadow: '0 0 6px rgba(200,168,255,0.6), 0 0 14px rgba(200,168,255,0.3)',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
}
