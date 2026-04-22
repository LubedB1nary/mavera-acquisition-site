import { MavNav } from '@/components/nav';
import { MavFooter } from '@/components/footer';
import { Section } from '@/components/section';
import { ClosingCTA } from '@/components/closing-cta';
import { PipelineRow } from '@/components/pipeline-row';

const team: [string, string, string][] = [
  ['Soren Ames', 'Founder · CEO', 'Built the first Maven as an internal tool for Ospri. Ten years in diagnostics and go-to-market. Believes receipts beat vibes.'],
  ['Iris Kwon',  'Founder · Chief Scientist', 'Previously led synthetic data R&D at a national lab. Forty papers, zero patience for unsourced claims.'],
];

const principles: [string, string][] = [
  ['Receipts, not vibes',       'Every decision ships with its sources, its confidence score, and its audit trail. If we can\'t defend it, we call it a draft.'],
  ['Outcomes, not prompts',     'You hand us a goal. The agent composes the work, asks when stuck, reports back on its own cadence. Prompt engineering is a workaround, not a destination.'],
  ['Autonomy, with consent',    'Agents act on the authority you grant. Boundaries are explicit. Escalations are structured. You always know what\'s running on your behalf.'],
];

const facts: [string, string][] = [
  ['Founded', '2024 · San Francisco'],
  ['Team',    '17 full-time · engineers, scientists, designers'],
  ['Funding', 'Seed · led by a16z'],
  ['Customers', '9 paying enterprises · 6 in active pipeline'],
];

export default function AboutPage() {
  return (
    <>
      <MavNav />
      <section style={{ padding: '120px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 900px 500px at 30% 0%, rgba(200,168,255,0.1), transparent 60%)' }} />
        <div className="mav-container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="mav-eyebrow" style={{ marginBottom: 20 }}>/ about</div>
          <h1 className="mav-h1" style={{ fontSize: 76, maxWidth: 900 }}>
            We build <em>defensible</em> intelligence.
          </h1>
          <p className="mav-lede" style={{ maxWidth: 640, marginTop: 26 }}>
            Mavera is the intelligence layer between companies and their growth. We build systems you can send to a regulator — agents that show their work, synthetic data with provenance, and a CRM you own.
          </p>
        </div>
      </section>

      <Section eyebrow="Team">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {team.map(([name, role, bio]) => (
            <div key={name} className="mav-card" style={{ padding: 28, display: 'flex', gap: 22 }}>
              <div style={{
                width: 56, height: 56, borderRadius: 12, flexShrink: 0,
                background: 'linear-gradient(135deg, #2a2420, #1a1814)',
                border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 24, color: 'var(--gold)',
              }}>{name.split(' ').map(s => s[0]).join('')}</div>
              <div>
                <div style={{ fontSize: 17, fontWeight: 500, letterSpacing: '-0.01em' }}>{name}</div>
                <div className="mav-code" style={{ fontSize: 11, color: 'var(--gold)', marginTop: 4, letterSpacing: '.08em' }}>{role.toUpperCase()}</div>
                <p className="mav-body" style={{ marginTop: 12, color: 'var(--dim)' }}>{bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Principles" style={{ background: 'var(--ink1)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {principles.map(([k, v]) => (
            <div key={k}>
              <h3 className="mav-h3">{k}</h3>
              <p className="mav-body" style={{ marginTop: 16, color: 'var(--dim)' }}>{v}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Research">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {[
            ['52+', 'Published parity studies'],
            ['98%', 'OASIS benchmark accuracy'],
            ['9', 'Papers submitted in 2026'],
            ['4', 'Open benchmarks we maintain'],
          ].map(([k, v]) => (
            <div key={k} style={{ borderLeft: '1.5px solid var(--gold)', paddingLeft: 16 }}>
              <div style={{ fontSize: 44, letterSpacing: '-0.03em', fontWeight: 500, fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--gold)' }}>{k}</div>
              <div className="mav-body" style={{ marginTop: 6 }}>{v}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Company" style={{ background: 'var(--ink1)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden' }}>
          {facts.map(([k, v]) => (
            <div key={k} style={{ background: 'var(--ink0)', padding: 24, minHeight: 110 }}>
              <div className="mav-caption" style={{ marginBottom: 6 }}>{k}</div>
              <div style={{ fontSize: 15, color: 'var(--text)', fontFamily: 'var(--mono)' }}>{v}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section dense>
        <PipelineRow />
      </Section>

      <Section dense style={{ padding: '120px 0' }}>
        <ClosingCTA />
      </Section>
      <MavFooter />
    </>
  );
}
