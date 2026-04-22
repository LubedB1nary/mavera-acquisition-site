import { ArrowRight } from './icons';

export function ClosingCTA() {
  return (
    <div style={{
      position: 'relative', border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden',
      padding: '80px 64px', textAlign: 'center',
      background: 'radial-gradient(ellipse 800px 400px at 50% 60%, rgba(200,168,255,0.15), transparent 70%), var(--ink1)',
    }}>
      <svg width="60" height="60" viewBox="-30 -30 60 60" style={{ display: 'block', margin: '0 auto 20px' }}>
        <circle cx="0" cy="0" r="20" fill="none" stroke="var(--gold)" strokeWidth="0.8" opacity="0.3" />
        <circle cx="0" cy="0" r="14" fill="none" stroke="var(--gold)" strokeWidth="0.8" opacity="0.5" />
        <path d="M-8 -10 L-8 10 L0 6 L8 10 L8 -10" fill="none" stroke="var(--gold)" strokeWidth="1.2" />
      </svg>
      <h2 className="mav-h2" style={{ fontSize: 52, maxWidth: 800, margin: '0 auto' }}>
        The door to <em>growth</em> is open.
      </h2>
      <p className="mav-lede" style={{ maxWidth: 520, margin: '20px auto 0' }}>
        Start free. Deploy your first agent today. Close the deal yourself.
      </p>
      <div style={{ display: 'flex', gap: 12, marginTop: 36, justifyContent: 'center' }}>
        <a href="#" className="mav-btn mav-btn--primary">Start free <ArrowRight /></a>
        <a href="#" className="mav-btn mav-btn--ghost">Book a demo</a>
      </div>
    </div>
  );
}
