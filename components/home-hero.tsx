'use client';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight } from './icons';
import { CountUp } from './reveal';
import { AsciiTorus } from './ascii-torus';
import { AsciiRain } from './ascii-rain';
import { AsciiTelemetry } from './ascii-telemetry';
import { AsciiWaveform } from './ascii-waveform';
import { useMode } from './mode-context';

const HEADLINE_WORDS = ['Agents', 'that', 'walk'];
const HEADLINE_EM = ['through'];
const HEADLINE_TAIL = ['the', 'door.'];

const ROTATING_PHRASES = [
  'turn live market signals into growth',
  'detect a Series B announcement in 14 minutes',
  'draft outreach in your brand voice',
  'qualify leads with explainable scores',
  'book the discovery while you sleep',
];

type Particle = { left: number; top: number; size: number; delay: number; dur: number; opacity: number };

export function HomeHero() {
  const { mode } = useMode();
  const heroRef = useRef<HTMLElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [typed, setTyped] = useState('');

  // typewriter loop for the rotating subline
  useEffect(() => {
    const phrase = ROTATING_PHRASES[phraseIdx];
    let i = 0;
    let dir: 1 | -1 = 1;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (dir === 1) {
        i++;
        setTyped(phrase.slice(0, i));
        if (i >= phrase.length) {
          dir = -1;
          timer = setTimeout(tick, 2400);
          return;
        }
        timer = setTimeout(tick, 38 + Math.random() * 30);
      } else {
        i--;
        setTyped(phrase.slice(0, i));
        if (i <= 0) {
          setPhraseIdx(p => (p + 1) % ROTATING_PHRASES.length);
          return;
        }
        timer = setTimeout(tick, 18);
      }
    };
    timer = setTimeout(tick, 280);
    return () => clearTimeout(timer);
  }, [phraseIdx]);

  // cursor-follow glow (classic mode)
  useEffect(() => {
    if (mode !== 'classic') return;
    const el = heroRef.current;
    const glow = glowRef.current;
    if (!el || !glow) return;
    let raf = 0;
    let tx = 0, ty = 0, x = 0, y = 0;
    const handle = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      tx = e.clientX - rect.left;
      ty = e.clientY - rect.top;
      glow.style.opacity = '1';
    };
    const leave = () => { if (glow) glow.style.opacity = '0'; };
    const tick = () => {
      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;
      if (glow) {
        glow.style.left = `${x}px`;
        glow.style.top = `${y}px`;
      }
      raf = requestAnimationFrame(tick);
    };
    el.addEventListener('mousemove', handle);
    el.addEventListener('mouseleave', leave);
    raf = requestAnimationFrame(tick);
    return () => {
      el.removeEventListener('mousemove', handle);
      el.removeEventListener('mouseleave', leave);
      cancelAnimationFrame(raf);
    };
  }, [mode]);

  // deterministic particle field (classic mode)
  const particles: Particle[] = useMemo(() => {
    const seed = (n: number) => {
      const x = Math.sin(n * 9301 + 49297) * 233280;
      return x - Math.floor(x);
    };
    return Array.from({ length: 28 }, (_, i) => ({
      left: seed(i + 1) * 100,
      top: seed(i + 11) * 100,
      size: 1.5 + seed(i + 21) * 3.5,
      delay: seed(i + 31) * 6,
      dur: 5 + seed(i + 41) * 7,
      opacity: 0.25 + seed(i + 51) * 0.55,
    }));
  }, []);

  const isAscii = mode === 'ascii';

  return (
    <section
      ref={heroRef}
      style={{ position: 'relative', padding: '120px 0 100px', overflow: 'hidden', isolation: 'isolate' }}
    >
      {/* Decorative layers — classic */}
      {!isAscii && (
        <>
          <div className="mav-aurora" aria-hidden>
            <div className="mav-aurora__a" />
            <div className="mav-aurora__b" />
            <div className="mav-aurora__c" />
          </div>
          <div className="mav-grid-bg" aria-hidden />
          <div ref={glowRef} className="mav-cursor-glow" aria-hidden style={{ opacity: 0, left: '50%', top: '40%' }} />
          <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            {particles.map((p, i) => (
              <span
                key={i}
                className="mav-particle"
                style={{
                  left: `${p.left}%`,
                  top: `${p.top}%`,
                  width: p.size,
                  height: p.size,
                  opacity: p.opacity,
                  animationDelay: `${p.delay}s`,
                  animationDuration: `${p.dur}s`,
                }}
              />
            ))}
          </div>
          <svg
            aria-hidden
            viewBox="0 0 1200 600"
            preserveAspectRatio="none"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.55 }}
          >
            <defs>
              <linearGradient id="lg" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="rgba(200,168,255,0)" />
                <stop offset="50%" stopColor="rgba(200,168,255,0.55)" />
                <stop offset="100%" stopColor="rgba(200,168,255,0)" />
              </linearGradient>
            </defs>
            {[120, 220, 360, 480].map((y, idx) => (
              <path
                key={y}
                d={`M -50 ${y} Q 300 ${y - 40 + idx * 8} 600 ${y} T 1250 ${y - 10}`}
                stroke="url(#lg)"
                strokeWidth="1"
                fill="none"
                strokeDasharray="220"
                style={{ animation: `mav-line-trace 4.5s ease-out ${idx * 0.6}s both` }}
              />
            ))}
          </svg>
        </>
      )}

      {/* Decorative layers — ascii */}
      {isAscii && (
        <>
          {/* very faint grid still helps with structure */}
          <div className="mav-grid-bg" aria-hidden style={{ opacity: 0.35 }} />
          <AsciiRain cols={120} rows={42} fontSize={12} />
        </>
      )}

      <div className="mav-container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          className="mav-shimmer"
          style={{
            display: 'inline-flex', alignItems: 'stretch', marginBottom: 28,
            border: '1px solid var(--line)', borderLeft: '2px solid var(--gold)',
            borderRadius: 2, overflow: 'hidden', background: 'rgba(255,255,255,0.02)',
            fontFamily: 'var(--mono)', fontSize: 11.5, letterSpacing: '.04em',
            animation: 'mav-rise-soft .8s cubic-bezier(.2,.7,.2,1) both',
          }}
        >
          <span style={{ padding: '8px 12px', color: 'var(--gold)', background: 'var(--gold-dim)', borderRight: '1px solid var(--line)', textTransform: 'uppercase', position: 'relative' }}>
            <span style={{
              display: 'inline-block', width: 6, height: 6, borderRadius: 999,
              background: 'var(--gold)', marginRight: 8, verticalAlign: 'middle',
              boxShadow: '0 0 0 0 rgba(200,168,255,0.6)',
              animation: 'mav-pulse 1.6s ease-in-out infinite',
            }} />
            0.9 · Preview
          </span>
          <span style={{ padding: '8px 14px', color: 'var(--text)', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            Maven is now in private beta
            <a style={{ color: 'var(--gold)', borderBottom: '1px solid var(--gold-dim)', paddingBottom: 1, cursor: 'pointer' }}>
              Read the memo →
            </a>
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isAscii ? 'minmax(0, 1.05fr) minmax(440px, 540px)' : '1fr',
            gap: 56,
            alignItems: 'start',
          }}
        >
          {/* left column: copy (shared) */}
          <div>
            <h1 className="mav-h1" style={{ maxWidth: isAscii ? 560 : 1000, lineHeight: 0.98, fontSize: isAscii ? 76 : 88 }}>
              {HEADLINE_WORDS.map((w, i) => (
                <span key={i} className="mav-word" style={{ animationDelay: `${0.1 + i * 0.08}s`, marginRight: '0.28em' }}>
                  {w}
                </span>
              ))}
              {HEADLINE_EM.map((w, i) => (
                <em key={`em-${i}`} className="mav-word mav-gradient-text" style={{ animationDelay: `${0.1 + (HEADLINE_WORDS.length + i) * 0.08}s`, marginRight: '0.28em' }}>
                  {w}
                </em>
              ))}
              {HEADLINE_TAIL.map((w, i) => (
                <span key={`t-${i}`} className="mav-word" style={{ animationDelay: `${0.1 + (HEADLINE_WORDS.length + HEADLINE_EM.length + i) * 0.08}s`, marginRight: '0.28em' }}>
                  {w}
                </span>
              ))}
            </h1>

            <p
              className="mav-lede"
              style={{
                maxWidth: isAscii ? 540 : 620, marginTop: 32, fontSize: 20,
                opacity: 0,
                animation: 'mav-rise-soft 1s cubic-bezier(.2,.7,.2,1) .85s forwards',
                minHeight: '3.2em',
              }}
            >
              Autonomous agents that{' '}
              <span style={{ color: 'var(--text)', borderBottom: '1px dashed var(--gold-dim)', paddingBottom: 2 }}>
                {typed}
                <span style={{ display: 'inline-block', width: 1, marginLeft: 2, color: 'var(--gold)', animation: 'mav-blink-cursor 1s step-end infinite' }}>
                  |
                </span>
              </span>{' '}— with an evidence chain on every decision.
            </p>

            <div
              style={{
                display: 'flex', gap: 12, marginTop: 40, alignItems: 'center', flexWrap: 'wrap',
                opacity: 0,
                animation: 'mav-rise-soft 1s cubic-bezier(.2,.7,.2,1) 1.05s forwards',
              }}
            >
              <a href="#" className="mav-btn mav-btn--primary mav-shimmer">Start free <ArrowRight /></a>
              <a href="#" className="mav-btn mav-btn--ghost">Book a demo</a>
              <Link href="/api-docs" style={{ marginLeft: 12, fontSize: 13.5, color: 'var(--dim)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                Or read the API docs <ArrowUpRight />
              </Link>
            </div>
          </div>

          {/* right column: ASCII torus + live telemetry */}
          {isAscii && (
            <div
              style={{
                opacity: 0,
                animation: 'mav-rise-soft 1.1s cubic-bezier(.2,.7,.2,1) .35s forwards',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                paddingTop: 4,
                gap: 8,
              }}
            >
              <AsciiTorus cols={70} rows={26} scale={1.05} />
              <AsciiTelemetry />
            </div>
          )}
        </div>

        {/* full-width pulse waveform — only in ascii mode, sits above the stats grid */}
        {isAscii && (
          <div
            style={{
              marginTop: 72,
              opacity: 0,
              animation: 'mav-rise-soft 1s cubic-bezier(.2,.7,.2,1) 1.1s forwards',
            }}
          >
            <AsciiWaveform
              width={148}
              height={6}
              fontSize={11}
              caption="argus · system pulse · last 60s"
            />
          </div>
        )}

        <div
          style={{
            marginTop: isAscii ? 40 : 96, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32,
            borderTop: '1px solid var(--line)', paddingTop: 32, position: 'relative',
            opacity: 0,
            animation: 'mav-rise-soft 1s cubic-bezier(.2,.7,.2,1) 1.25s forwards',
          }}
        >
          <div aria-hidden style={{
            position: 'absolute', top: -1, left: 0, height: 1, width: '32%',
            background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
            animation: 'mav-shimmer 4.5s ease-in-out infinite',
          }} />
          {[
            { display: <><CountUp to={98} />%</>, label: 'Accuracy vs. real human panels · OASIS benchmark' },
            { display: <><CountUp to={50} />M+</>, label: 'Behavioral interactions in the synthetic layer' },
            { display: <><CountUp to={295} />K+</>, label: 'Media sources under continuous monitoring' },
            { display: <><CountUp to={9} /></>, label: 'Enterprise customers · SOC 2 · ISO 27001 · ISO 42001' },
          ].map((s, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 34, fontFamily: 'var(--sans)', fontWeight: 400, letterSpacing: '-0.03em' }}>
                {s.display}
              </span>
              <span className="mav-caption" style={{ lineHeight: 1.45, maxWidth: 220 }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
