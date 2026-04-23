'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight } from './icons';
import { CountUp } from './reveal';
import { AsciiTorus } from './ascii-torus';
import { AsciiRain } from './ascii-rain';

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

export function HomeHero() {
  const heroRef = useRef<HTMLElement | null>(null);
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

  return (
    <section
      ref={heroRef}
      style={{ position: 'relative', padding: '120px 0 100px', overflow: 'hidden', isolation: 'isolate' }}
    >
      <div className="mav-aurora" aria-hidden>
        <div className="mav-aurora__a" />
        <div className="mav-aurora__b" />
        <div className="mav-aurora__c" />
      </div>

      <div className="mav-grid-bg" aria-hidden />

      {/* the slow ascii rain sits behind everything */}
      <AsciiRain cols={120} rows={42} fontSize={12} />

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
            gridTemplateColumns: 'minmax(0, 1.1fr) minmax(420px, 520px)',
            gap: 56,
            alignItems: 'start',
          }}
        >
          {/* left column: copy */}
          <div>
            <h1 className="mav-h1" style={{ maxWidth: 560, lineHeight: 0.98, fontSize: 76 }}>
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
                maxWidth: 560, marginTop: 32, fontSize: 20,
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

          {/* right column: ASCII torus on a pedestal */}
          <div
            style={{
              opacity: 0,
              animation: 'mav-rise-soft 1.1s cubic-bezier(.2,.7,.2,1) .35s forwards',
              position: 'relative',
              padding: '8px 4px 24px',
            }}
          >
            <div
              className="mav-scanline"
              style={{
                position: 'relative',
                padding: '20px 28px 28px',
                border: '1px solid var(--line)',
                borderRadius: 10,
                background:
                  'linear-gradient(180deg, rgba(11,13,16,0.88), rgba(7,8,10,0.92))',
                boxShadow:
                  '0 30px 80px -40px rgba(200,168,255,0.45), 0 6px 24px rgba(0,0,0,0.55)',
                backdropFilter: 'blur(2px)',
              }}
            >
              {/* tiny terminal header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontFamily: 'var(--mono)',
                  fontSize: 10.5,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  marginBottom: 14,
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <span
                    style={{
                      display: 'inline-block', width: 6, height: 6, borderRadius: 999,
                      background: 'var(--gold)',
                      boxShadow: '0 0 8px rgba(200,168,255,0.7)',
                      animation: 'mav-pulse 1.8s ease-in-out infinite',
                    }}
                  />
                  argus / orbit.tsx
                </span>
                <span style={{ color: 'var(--dim)' }}>idle · 60fps</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
                <AsciiTorus cols={64} rows={22} scale={1} />
              </div>

              <div
                style={{
                  marginTop: 22,
                  fontFamily: 'var(--mono)',
                  fontSize: 10.5,
                  color: 'var(--dim)',
                  letterSpacing: '0.06em',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                }}
              >
                <span>$ render --evidence --depth=98%</span>
                <span style={{ color: 'var(--muted)' }}>↳ 2,147 surface points · z-buffer ok · trace stable</span>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 96, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32,
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
