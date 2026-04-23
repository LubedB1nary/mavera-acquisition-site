'use client';

import { useEffect, useRef } from 'react';

/**
 * AsciiWaveform — a live scrolling waveform rendered as ASCII, with intermittent
 * signal "spikes" representing detection events. Each frame composes a column
 * of characters based on a smoothed amplitude. Pulse beats brighten the trace.
 */

type Props = {
  width?: number;        // columns
  height?: number;       // rows
  className?: string;
  /** Pulses per ~10s on average — represents signal events */
  pulseRate?: number;
  /** Color of the trace */
  color?: string;
  /** Color of the highlighted pulse */
  pulseColor?: string;
  /** Optional caption rendered above */
  caption?: string;
  /** Font size in px (line-height matches) */
  fontSize?: number;
};

const TRACE_CHARS = '▁▂▃▄▅▆▇█';
const FILL_CHARS = ' ·∙○◌◯';

export function AsciiWaveform({
  width = 60,
  height = 9,
  className = '',
  pulseRate = 1.2,
  color = 'var(--gold-soft)',
  pulseColor = '#ffffff',
  caption,
  fontSize = 12,
}: Props) {
  const baseRef = useRef<HTMLPreElement | null>(null);
  const hiRef = useRef<HTMLPreElement | null>(null);

  useEffect(() => {
    const base = baseRef.current;
    const hi = hiRef.current;
    if (!base || !hi) return;

    // ring buffer of amplitudes [-1, 1]
    const amps = new Float32Array(width);
    const spikes = new Uint8Array(width); // bool: this column is a spike

    let raf = 0;
    let t = 0;
    let lastSpike = 0;

    const tick = () => {
      t += 1 / 60;

      // shift left by one column
      amps.copyWithin(0, 1);
      spikes.copyWithin(0, 1);

      // compose new sample at the right edge
      const base1 = Math.sin(t * 1.7) * 0.18;
      const base2 = Math.sin(t * 0.6 + 1.2) * 0.12;
      const noise = (Math.random() - 0.5) * 0.14;

      // probabilistic pulse
      const sinceSpike = t - lastSpike;
      const willSpike = sinceSpike > 1.3 / pulseRate && Math.random() < 0.05;
      let amp = base1 + base2 + noise;
      let spike = 0;
      if (willSpike) {
        amp = (Math.random() < 0.5 ? -1 : 1) * (0.7 + Math.random() * 0.3);
        spike = 1;
        lastSpike = t;
      }

      amps[width - 1] = amp;
      spikes[width - 1] = spike;

      // render: each column gets one char; the row where it appears is determined by amp
      const baseGrid: string[][] = Array.from({ length: height }, () => Array(width).fill(' '));
      const hiGrid: string[][] = Array.from({ length: height }, () => Array(width).fill(' '));
      const mid = Math.floor(height / 2);

      for (let c = 0; c < width; c++) {
        const a = amps[c];
        const half = (height - 1) / 2;
        const row = Math.round(mid - a * half);
        const ch = a >= 0
          ? TRACE_CHARS[Math.min(TRACE_CHARS.length - 1, Math.floor(Math.abs(a) * TRACE_CHARS.length))]
          : TRACE_CHARS[Math.min(TRACE_CHARS.length - 1, Math.floor(Math.abs(a) * TRACE_CHARS.length))];

        if (row >= 0 && row < height) {
          baseGrid[row][c] = ch;
          if (spikes[c]) hiGrid[row][c] = ch;
        }

        // axis dots between
        if (baseGrid[mid][c] === ' ') baseGrid[mid][c] = FILL_CHARS[1];

        // tail decay highlight on recent spikes
        if (spikes[c] && row >= 0 && row < height) {
          for (let dr = 1; dr < 3; dr++) {
            const r1 = row - dr, r2 = row + dr;
            if (r1 >= 0 && hiGrid[r1][c] === ' ') hiGrid[r1][c] = FILL_CHARS[2];
            if (r2 < height && hiGrid[r2][c] === ' ') hiGrid[r2][c] = FILL_CHARS[2];
          }
        }
      }

      base.textContent = baseGrid.map(r => r.join('')).join('\n');
      hi.textContent = hiGrid.map(r => r.join('')).join('\n');

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [width, height, pulseRate]);

  return (
    <div className={`mav-ascii-wave ${className}`} aria-hidden>
      {caption && (
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 10.5,
            color: 'var(--muted)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: 6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 8,
          }}
        >
          <span>{caption}</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span
              style={{
                display: 'inline-block',
                width: 6,
                height: 6,
                borderRadius: 999,
                background: color,
                boxShadow: `0 0 8px ${color}`,
                animation: 'mav-pulse 1.6s ease-in-out infinite',
              }}
            />
            LIVE
          </span>
        </div>
      )}
      <div
        style={{
          position: 'relative',
          fontFamily: 'var(--mono)',
          fontSize,
          lineHeight: `${fontSize}px`,
          letterSpacing: '0.04em',
          padding: '8px 10px',
          background: 'rgba(0,0,0,0.35)',
          border: '1px solid var(--line-soft)',
          borderRadius: 6,
          overflow: 'hidden',
        }}
      >
        {/* grid scanline */}
        <span
          aria-hidden
          style={{
            position: 'absolute', inset: 0,
            background:
              'repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 4px)',
            pointerEvents: 'none',
          }}
        />
        <pre
          ref={baseRef}
          style={{
            margin: 0,
            color,
            opacity: 0.78,
            textShadow: `0 0 6px ${color}88`,
          }}
        />
        <pre
          ref={hiRef}
          style={{
            margin: 0,
            position: 'absolute',
            top: 8, left: 10, right: 10, bottom: 8,
            color: pulseColor,
            textShadow: `0 0 8px ${pulseColor}, 0 0 16px ${color}`,
            mixBlendMode: 'screen',
            pointerEvents: 'none',
          }}
        />
        {/* right edge gradient — "now" indicator */}
        <span
          aria-hidden
          style={{
            position: 'absolute', right: 0, top: 0, bottom: 0,
            width: 60,
            background: 'linear-gradient(90deg, transparent, rgba(11,13,16,0.85))',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  );
}
