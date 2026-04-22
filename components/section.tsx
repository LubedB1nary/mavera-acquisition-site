import { CSSProperties, ReactNode } from 'react';
import { Dot } from './icons';

interface SectionProps {
  eyebrow?: string;
  children: ReactNode;
  style?: CSSProperties;
  id?: string;
  dense?: boolean;
}

export function Section({ eyebrow, children, style, id, dense }: SectionProps) {
  return (
    <section id={id} style={{ padding: dense ? '72px 0' : '120px 0', position: 'relative', ...style }}>
      <div className="mav-container">
        {eyebrow && (
          <div className="mav-eyebrow" style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 18, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
            {eyebrow}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
