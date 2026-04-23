'use client';

import { useEffect, useRef } from 'react';

/**
 * AsciiTorus — a real-time 3D torus rendered in ASCII characters.
 *
 * Port of Andy Sloane's donut.c with two enhancements:
 *  - mouse position eases the rotation target (drag-to-orient feel without dragging)
 *  - a second highlight pass renders only the brightest specular chars in gold
 *
 * Soft drop-shadow is applied via CSS filter on the <pre> nodes,
 * so the donut feels like it's sitting in space with weight underneath it.
 */

const RAMP = '.,-~:;=!*#$@';
const HI_RAMP_START = 8; // any luminance index >= this goes to the highlight overlay

type Props = {
  className?: string;
  spinA?: number;     // base spin speed on x
  spinB?: number;     // base spin speed on y
  scale?: number;     // CSS font-size scale
  cols?: number;      // grid columns
  rows?: number;      // grid rows
};

export function AsciiTorus({
  className = '',
  spinA = 0.034,
  spinB = 0.018,
  scale = 1,
  cols = 64,
  rows = 22,
}: Props) {
  const W = cols;
  const H = rows;
  const X_SCALE = W * 0.375; // donut.c original used 30 with W=80 → 0.375
  const Y_SCALE = H * 0.68;  // donut.c original used 15 with H=22 → 0.68
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const baseRef = useRef<HTMLPreElement | null>(null);
  const hiRef = useRef<HTMLPreElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const base = baseRef.current;
    const hi = hiRef.current;
    if (!wrap || !base || !hi) return;

    let A = 0;
    let B = 0;
    // mouse-influenced offsets that ease toward target
    let offA = 0;
    let offB = 0;
    let tgtA = 0;
    let tgtB = 0;

    const onMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;   // -0.5..0.5
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      tgtB = nx * 1.4;
      tgtA = -ny * 1.0;
    };
    const onLeave = () => {
      tgtA = 0;
      tgtB = 0;
    };

    wrap.addEventListener('mousemove', onMove);
    wrap.addEventListener('mouseleave', onLeave);

    const z = new Float32Array(W * H);
    const buf = new Uint8Array(W * H);
    const hiBuf = new Uint8Array(W * H);

    // pre-build row breaks for fast string assembly
    const decoder = new TextDecoder();

    let raf = 0;
    let last = performance.now();
    let visible = true;

    const io = new IntersectionObserver(
      ents => {
        for (const e of ents) visible = e.isIntersecting;
      },
      { threshold: 0.05 }
    );
    io.observe(wrap);

    const tick = (now: number) => {
      const dt = Math.min(64, now - last) / 16.6667; // normalize ~ frames@60fps
      last = now;

      // ease mouse offsets
      offA += (tgtA - offA) * 0.06;
      offB += (tgtB - offB) * 0.06;

      // continuous slow drift + mouse offset
      A += spinA * dt;
      B += spinB * dt;

      const eA = A + offA;
      const eB = B + offB;

      buf.fill(32);
      hiBuf.fill(32);
      z.fill(0);

      const cosA = Math.cos(eA), sinA = Math.sin(eA);
      const cosB = Math.cos(eB), sinB = Math.sin(eB);

      for (let j = 0; j < 6.28; j += 0.07) {
        const cosJ = Math.cos(j);
        const sinJ = Math.sin(j);
        const h = cosJ + 2; // donut center radius

        for (let i = 0; i < 6.28; i += 0.02) {
          const sinI = Math.sin(i);
          const cosI = Math.cos(i);

          const D = 1 / (sinI * h * sinA + sinJ * cosA + 5);
          const t = sinI * h * cosA - sinJ * sinA;

          const x = (W / 2) | 0;
          const y = (H / 2) | 0;
          const xp = (x + X_SCALE * D * (cosI * h * cosB - t * sinB)) | 0;
          const yp = (y + Y_SCALE * D * (cosI * h * sinB + t * cosB)) | 0;
          const o = xp + W * yp;

          const N =
            8 *
            ((sinJ * sinA - sinI * cosJ * cosA) * cosB -
              sinI * cosJ * sinA -
              sinJ * cosA -
              cosI * cosJ * sinB);
          const Nf = N | 0;

          if (yp >= 0 && yp < H && xp >= 0 && xp < W && D > z[o]) {
            z[o] = D;
            const idx = Nf > 0 ? Math.min(RAMP.length - 1, Nf) : 0;
            const ch = RAMP.charCodeAt(idx);
            buf[o] = ch;
            if (idx >= HI_RAMP_START) hiBuf[o] = ch;
          }
        }
      }

      // assemble strings with row breaks
      let bs = '';
      let hs = '';
      for (let r = 0; r < H; r++) {
        bs += decoder.decode(buf.subarray(r * W, (r + 1) * W)) + '\n';
        hs += decoder.decode(hiBuf.subarray(r * W, (r + 1) * W)) + '\n';
      }

      base.textContent = bs;
      hi.textContent = hs;

      if (visible) raf = requestAnimationFrame(tick);
      else raf = window.setTimeout(() => requestAnimationFrame(tick), 200) as unknown as number;
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      wrap.removeEventListener('mousemove', onMove);
      wrap.removeEventListener('mouseleave', onLeave);
    };
  }, [spinA, spinB, W, H, X_SCALE, Y_SCALE]);

  const fontPx = 13 * scale;
  const linePx = 13 * scale;

  return (
    <div
      ref={wrapRef}
      className={`mav-ascii-torus ${className}`}
      style={{
        position: 'relative',
        display: 'inline-block',
        fontFamily: 'var(--mono)',
        fontSize: fontPx,
        lineHeight: `${linePx}px`,
        letterSpacing: '0.02em',
        userSelect: 'none',
        cursor: 'crosshair',
      }}
      aria-hidden
    >
      {/* base layer: the full character grid in dim ink */}
      <pre
        ref={baseRef}
        className="mav-ascii-torus__base"
        style={{
          margin: 0,
          color: 'rgba(237,236,230,0.55)',
          textShadow: '0 0 1px rgba(237,236,230,0.18)',
          filter: 'drop-shadow(0 16px 24px rgba(200,168,255,0.18)) drop-shadow(0 4px 8px rgba(0,0,0,0.5))',
        }}
      />
      {/* highlight layer: brightest specular chars in gold, sitting on top */}
      <pre
        ref={hiRef}
        className="mav-ascii-torus__hi"
        style={{
          margin: 0,
          position: 'absolute',
          inset: 0,
          color: 'var(--gold-soft)',
          textShadow:
            '0 0 6px rgba(220,196,255,0.8), 0 0 14px rgba(200,168,255,0.55), 0 0 28px rgba(200,168,255,0.3)',
          pointerEvents: 'none',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
}
