'use client';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from './icons';

export function HomeHero() {
  return (
    <section style={{ position: 'relative', padding: '120px 0 100px', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 800px 600px at 70% 20%, rgba(200,168,255,0.1), transparent 60%)' }} />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)',
      }} />

      <div className="mav-container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'stretch', marginBottom: 28,
          border: '1px solid var(--line)', borderLeft: '2px solid var(--gold)',
          borderRadius: 2, overflow: 'hidden', background: 'rgba(255,255,255,0.02)',
          fontFamily: 'var(--mono)', fontSize: 11.5, letterSpacing: '.04em',
        }}>
          <span style={{ padding: '8px 12px', color: 'var(--gold)', background: 'var(--gold-dim)', borderRight: '1px solid var(--line)', textTransform: 'uppercase' }}>
            0.9 · Preview
          </span>
          <span style={{ padding: '8px 14px', color: 'var(--text)', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            Maven is now in private beta
            <a style={{ color: 'var(--gold)', borderBottom: '1px solid var(--gold-dim)', paddingBottom: 1, cursor: 'pointer' }}>
              Read the memo →
            </a>
          </span>
        </div>

        <h1 className="mav-h1" style={{ maxWidth: 1000 }}>
          Agents that walk <em>through</em> the door.
        </h1>

        <p className="mav-lede" style={{ maxWidth: 560, marginTop: 32, fontSize: 20 }}>
          Autonomous agents that turn live market signals into growth — with an evidence chain on every decision.
        </p>

        <div style={{ display: 'flex', gap: 12, marginTop: 40, alignItems: 'center' }}>
          <a href="#" className="mav-btn mav-btn--primary">Start free <ArrowRight /></a>
          <a href="#" className="mav-btn mav-btn--ghost">Book a demo</a>
          <Link href="/api-docs" style={{ marginLeft: 12, fontSize: 13.5, color: 'var(--dim)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            Or read the API docs <ArrowUpRight />
          </Link>
        </div>

        <div style={{ marginTop: 96, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, borderTop: '1px solid var(--line)', paddingTop: 32 }}>
          {[
            ['98%', 'Accuracy vs. real human panels · OASIS benchmark'],
            ['50M+', 'Behavioral interactions in the synthetic layer'],
            ['295K+', 'Media sources under continuous monitoring'],
            ['9', 'Enterprise customers · SOC 2 · ISO 27001 · ISO 42001'],
          ].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 34, fontFamily: 'var(--sans)', fontWeight: 400, letterSpacing: '-0.03em' }}>{k}</span>
              <span className="mav-caption" style={{ lineHeight: 1.45, maxWidth: 220 }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
