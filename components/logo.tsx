export const MavLogo = ({ size = 20 }: { size?: number }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'baseline', gap: 2,
    fontFamily: 'var(--sans)', fontSize: size, fontWeight: 500,
    letterSpacing: '-0.035em', color: 'var(--text)',
  }}>
    <span>Mavera</span>
    <span style={{ color: 'var(--gold)', fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400 }}>.</span>
  </span>
);
