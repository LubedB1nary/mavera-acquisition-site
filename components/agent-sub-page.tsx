import { ReactNode } from 'react';
import { MavNav } from './nav';
import { MavFooter } from './footer';
import { Section } from './section';
import { ClosingCTA } from './closing-cta';
import { ToolInventoryDemo } from './tool-inventory-demo';

interface AgentSubPageProps {
  eyebrow: string;
  name: string;
  tagline: ReactNode;
  lede: string;
  metrics: [string, string][];
  tools?: { id: string; name: string; cat: string; desc: string }[];
  scripts?: { title: string; steps: string[] }[];
  sections?: { title: string; body: ReactNode }[];
  cta?: {
    headline?: ReactNode;
    lede?: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
}

export function AgentSubPage({ eyebrow, name, tagline, lede, metrics, tools, scripts, sections = [], cta }: AgentSubPageProps) {
  return (
    <>
      <MavNav />
      <section style={{ padding: '120px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 900px 500px at 30% 0%, rgba(200,168,255,0.1), transparent 60%)' }} />
        <div className="mav-container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="mav-eyebrow" style={{ marginBottom: 20 }}>/ agents / {eyebrow}</div>
          <h1 className="mav-h1" style={{ fontSize: 76, maxWidth: 920 }}>{tagline}</h1>
          <p className="mav-lede" style={{ maxWidth: 640, marginTop: 26 }}>{lede}</p>

          <div style={{ marginTop: 72, display: 'grid', gridTemplateColumns: `repeat(${metrics.length}, 1fr)`, gap: 28, paddingTop: 32, borderTop: '1px solid var(--line)' }}>
            {metrics.map(([k, v]) => (
              <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ fontSize: 34, fontFamily: 'var(--sans)', fontWeight: 400, letterSpacing: '-0.03em' }}>{k}</span>
                <span className="mav-caption" style={{ lineHeight: 1.45, maxWidth: 240 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {tools && (
        <Section eyebrow="Toolbelt">
          <ToolInventoryDemo tools={tools} scripts={scripts} />
        </Section>
      )}

      {sections.map((s, i) => (
        <Section key={i} eyebrow={s.title} style={{
          background: i % 2 === 0 ? 'var(--ink1)' : 'var(--ink0)',
          borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
        }}>
          {s.body}
        </Section>
      ))}

      <Section dense style={{ padding: '120px 0' }}>
        <ClosingCTA
          headline={cta?.headline ?? (<>See <em className="mav-gradient-text">{name}</em> against your own data.</>)}
          lede={cta?.lede ?? `Bring a real workflow. We'll wire ${name} into it and walk you through the evidence chain.`}
          primaryLabel={cta?.primaryLabel ?? 'Book a walkthrough'}
          primaryHref={cta?.primaryHref}
          secondaryLabel={cta?.secondaryLabel ?? 'See the API'}
          secondaryHref={cta?.secondaryHref ?? '/api-docs'}
        />
      </Section>
      <MavFooter />
    </>
  );
}
