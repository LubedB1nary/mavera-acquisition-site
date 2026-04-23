'use client';

import { useEffect, useRef } from 'react';
import { useMode } from './mode-context';

/**
 * AsciiTelemetry — a compact, live "argus telemetry" readout that sits beside
 * the torus. Four rows: signal rate, network load, processing queue, trust
 * score. Each row carries a scrolling sparkline, a numeric value, and a tiny
 * trend glyph. Everything updates independently so something is always moving.
 *
 * Renders nothing in classic mode.
 */

const SPARK = '▁▂▃▄▅▆▇█';
const SPARK_W = 16;

type Row = {
  label: string;        // 5 chars
  base: number;         // baseline value
  variance: number;     // wobble amplitude
  format: (v: number) => string;
  unit: string;
  /** Bias the sparkline toward higher values (for "load"-style metrics) */
  bias?: number;
};

const ROWS: Row[] = [
  { label: 'sig  ', base: 47,   variance: 6,   format: v => Math.round(v).toString(),   unit: '/m' },
  { label: 'net  ', base: 73,   variance: 4,   format: v => Math.round(v).toString(),   unit: '%',  bias: 0.55 },
  { label: 'proc ', base: 12,   variance: 3,   format: v => Math.round(v).toString(),   unit: ' q' },
  { label: 'trust', base: 98.4, variance: 0.4, format: v => v.toFixed(1),                unit: '%',  bias: 0.85 },
];

function trendGlyph(delta: number): string {
  if (delta > 0.6) return '↑';
  if (delta > 0.15) return '↗';
  if (delta < -0.6) return '↓';
  if (delta < -0.15) return '↘';
  return '─';
}

export function AsciiTelemetry() {
  const { mode } = useMode();
  const preRef = useRef<HTMLPreElement | null>(null);
  const dotRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (mode !== 'ascii') return;
    const pre = preRef.current;
    const dot = dotRef.current;
    if (!pre) return;

    // per-row sparkline history + smoothed value
    const histories = ROWS.map(() => {
      const h = new Float32Array(SPARK_W);
      for (let k = 0; k < SPARK_W; k++) h[k] = Math.random();
      return h;
    });
    const values = ROWS.map(r => r.base);
    const prevValues = ROWS.map(r => r.base);

    let raf = 0;
    let lastShift = 0;
    let lastBlink = 0;
    let blinkOn = true;
    const startedAt = performance.now();

    const tick = (now: number) => {
      // shift sparklines on a slow cadence — feels like real telemetry, not video
      if (now - lastShift >= 110) {
        lastShift = now;
        const tSec = (now - startedAt) / 1000;
        for (let i = 0; i < ROWS.length; i++) {
          const row = ROWS[i];
          const h = histories[i];
          h.copyWithin(0, 1);
          // bias toward higher portion of the bar for load-y metrics
          const bias = row.bias ?? 0.4;
          const wobble = Math.sin(tSec * (0.7 + i * 0.45) + i) * 0.18;
          const noise = (Math.random() - 0.5) * 0.4;
          h[SPARK_W - 1] = Math.max(0, Math.min(1, bias + wobble + noise));

          // smoothed numeric value
          prevValues[i] = values[i];
          const target = row.base + (Math.sin(tSec * (0.4 + i * 0.3)) * 0.4 + (Math.random() - 0.5) * 0.7) * row.variance;
          values[i] += (target - values[i]) * 0.12;
        }

        // assemble block
        let s = '';
        for (let i = 0; i < ROWS.length; i++) {
          const row = ROWS[i];
          const h = histories[i];
          let spark = '';
          for (let k = 0; k < SPARK_W; k++) {
            spark += SPARK[Math.min(7, Math.max(0, Math.floor(h[k] * SPARK.length)))];
          }
          const valStr = row.format(values[i]) + row.unit;
          const valPad = valStr.padStart(7, ' ');
          const tg = trendGlyph(values[i] - prevValues[i]);
          s += `${row.label} ${spark}  ${valPad}  ${tg}\n`;
        }
        pre.textContent = s;
      }

      // status dot blink — independent cadence
      if (dot && now - lastBlink >= 720) {
        lastBlink = now;
        blinkOn = !blinkOn;
        dot.style.opacity = blinkOn ? '1' : '0.35';
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [mode]);

  if (mode !== 'ascii') return null;

  return (
    <div
      className="mav-ascii-telemetry"
      style={{
        marginTop: 18,
        fontFamily: 'var(--mono)',
        fontSize: 11,
        color: 'var(--text)',
        padding: '12px 16px',
        border: '1px solid var(--line-soft)',
        borderRadius: 4,
        background: 'rgba(0,0,0,0.35)',
        maxWidth: 'fit-content',
        position: 'relative',
        boxShadow: '0 12px 32px rgba(0,0,0,0.45), 0 0 0 1px rgba(200,168,255,0.04) inset',
      }}
      aria-hidden
    >
      <div
        style={{
          fontSize: 9.5,
          color: 'var(--gold)',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          marginBottom: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          opacity: 0.92,
        }}
      >
        <span>argus · live telemetry</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--muted)' }}>
          <span
            ref={dotRef}
            style={{
              width: 5,
              height: 5,
              borderRadius: 999,
              background: 'var(--gold)',
              boxShadow: '0 0 6px var(--gold)',
              transition: 'opacity 120ms linear',
            }}
          />
          link · 0042
        </span>
      </div>
      <pre
        ref={preRef}
        style={{
          margin: 0,
          lineHeight: '15px',
          letterSpacing: '0.04em',
          color: 'var(--text)',
          textShadow: '0 0 6px rgba(200,168,255,0.18)',
          opacity: 0.95,
        }}
      />
      {/* tiny scanline overlay for that CRT-readout feel */}
      <span
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 4px)',
          borderRadius: 4,
        }}
      />
    </div>
  );
}
