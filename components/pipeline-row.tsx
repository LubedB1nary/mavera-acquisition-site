const logos = ['Coinbase', 'S&P Global', 'PitchBook', 'Spotify', 'Hasbro', 'H&R Block', 'Stripe', 'Snowflake', 'Atlassian'];

export function PipelineRow({ label = 'In active enterprise pipeline' }: { label?: string }) {
  const reel = [...logos, ...logos];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'center', width: '100%' }}>
      <div className="mav-eyebrow" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span
          style={{
            width: 6, height: 6, borderRadius: 999, background: 'var(--gold)',
            display: 'inline-block', boxShadow: '0 0 0 3px rgba(200,168,255,0.18)',
            animation: 'mav-pulse 1.6s ease-in-out infinite',
          }}
        />
        {label}
      </div>
      <div className="mav-marquee-mask" style={{ width: '100%', overflow: 'hidden' }}>
        <div className="mav-marquee" style={{ alignItems: 'center' }}>
          {reel.map((l, i) => (
            <div
              key={`${l}-${i}`}
              className="mav-pipeline-logo"
              style={{
                fontFamily: 'var(--serif)', fontSize: 24, letterSpacing: '-0.01em',
                color: 'var(--dim)', fontStyle: 'italic', whiteSpace: 'nowrap',
              }}
            >
              {l}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
