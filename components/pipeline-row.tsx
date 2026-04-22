const logos = ['Coinbase', 'S&P Global', 'PitchBook', 'Spotify', 'Hasbro', 'H&R Block'];

export function PipelineRow({ label = 'In active enterprise pipeline' }: { label?: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center' }}>
      <div className="mav-eyebrow" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ width: 5, height: 5, borderRadius: 999, background: 'var(--gold)', display: 'inline-block' }} />
        {label}
      </div>
      <div style={{ display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', opacity: 0.62 }}>
        {logos.map(l => (
          <div key={l} style={{
            fontFamily: 'var(--serif)', fontSize: 22, letterSpacing: '-0.01em',
            color: 'var(--dim)', fontStyle: 'italic',
          }}>{l}</div>
        ))}
      </div>
    </div>
  );
}
