export function ImagePlaceholder({ label, height = 420, tone = 'dark' }: { label: string; height?: number; tone?: string }) {
  return (
    <div style={{
      width: '100%', height, borderRadius: 14, overflow: 'hidden',
      background: tone === 'dark' ? 'var(--ink1)' : 'rgba(255,255,255,0.02)',
      border: '1px solid var(--line)', position: 'relative',
      backgroundImage: 'repeating-linear-gradient(135deg, transparent 0 12px, rgba(255,255,255,0.025) 12px 13px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <span className="mav-code" style={{ color: 'var(--muted)', letterSpacing: '0.04em' }}>{label}</span>
    </div>
  );
}
