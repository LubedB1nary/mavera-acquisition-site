'use client';
import { ReactNode } from 'react';
import { ArrowRight } from './icons';

interface ClosingCTAProps {
  headline?: ReactNode;
  lede?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function ClosingCTA({
  headline = (<>The door to <em className="mav-gradient-text">growth</em> is open.</>),
  lede = 'Start free. Deploy your first agent today. Close the deal yourself.',
  primaryLabel = 'Start free',
  primaryHref = 'https://calendly.com/jill-mavera/discovery-call',
  secondaryLabel = 'Book a walkthrough',
  secondaryHref = 'https://calendly.com/jill-mavera/discovery-call',
}: ClosingCTAProps = {}) {
  return (
    <div
      className="mav-glow"
      style={{
        position: 'relative', border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden',
        padding: '96px 64px', textAlign: 'center',
        background: 'radial-gradient(ellipse 800px 400px at 50% 60%, rgba(200,168,255,0.18), transparent 70%), var(--ink1)',
      }}
    >
      <div className="mav-aurora" aria-hidden style={{ inset: '-30%', opacity: 0.6 }}>
        <div className="mav-aurora__a" />
        <div className="mav-aurora__b" />
      </div>

      <div className="mav-grid-bg" aria-hidden style={{ opacity: 0.35 }} />

      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {[0, 1, 2, 3].map(i => (
          <span
            key={i}
            style={{
              position: 'absolute', left: '50%', top: '46%', transform: 'translate(-50%, -50%)',
              width: 120, height: 120, borderRadius: 999, border: '1px solid rgba(200,168,255,0.25)',
              animation: `mav-ring-pulse 3s ease-out ${i * 0.7}s infinite`,
            }}
          />
        ))}
      </div>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <svg width="60" height="60" viewBox="-30 -30 60 60" style={{ display: 'block', margin: '0 auto 20px' }}>
          <circle cx="0" cy="0" r="20" fill="none" stroke="var(--gold)" strokeWidth="0.8" opacity="0.3"
            style={{ transformOrigin: 'center', animation: 'mav-spin-slow 22s linear infinite' }} />
          <circle cx="0" cy="0" r="14" fill="none" stroke="var(--gold)" strokeWidth="0.8" opacity="0.5"
            style={{ transformOrigin: 'center', animation: 'mav-spin-slow 16s linear infinite reverse' }} />
          <path d="M-8 -10 L-8 10 L0 6 L8 10 L8 -10" fill="none" stroke="var(--gold)" strokeWidth="1.2"
            style={{ animation: 'mav-pulse 2.4s ease-in-out infinite' }} />
        </svg>

        <h2 className="mav-h2" style={{ fontSize: 56, maxWidth: 880, margin: '0 auto' }}>
          {headline}
        </h2>
        <p className="mav-lede" style={{ maxWidth: 560, margin: '20px auto 0' }}>
          {lede}
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 36, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={primaryHref} target={primaryHref?.startsWith('http') ? '_blank' : undefined} rel={primaryHref?.startsWith('http') ? 'noopener noreferrer' : undefined} className="mav-btn mav-btn--primary mav-shimmer">{primaryLabel} <ArrowRight /></a>
          <a href={secondaryHref} target={secondaryHref?.startsWith('http') ? '_blank' : undefined} rel={secondaryHref?.startsWith('http') ? 'noopener noreferrer' : undefined} className="mav-btn mav-btn--ghost">{secondaryLabel}</a>
        </div>
      </div>
    </div>
  );
}
