const certs = ['SOC 2 Type II', 'ISO 27001', 'ISO 42001', 'HIPAA-ready'];

export function CertBadges({ small }: { small?: boolean }) {
  return (
    <div style={{ display: 'flex', gap: small ? 8 : 12, flexWrap: 'wrap' }}>
      {certs.map(c => (
        <div key={c} style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: small ? '5px 10px' : '7px 12px',
          border: '1px solid var(--line)', borderRadius: 6,
          fontFamily: 'var(--mono)', fontSize: small ? 10.5 : 11,
          color: 'var(--dim)', letterSpacing: '0.04em', textTransform: 'uppercase',
        }}>
          <span style={{ width: 5, height: 5, borderRadius: 999, background: 'var(--gold)', flexShrink: 0 }} />
          {c}
        </div>
      ))}
    </div>
  );
}
