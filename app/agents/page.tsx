import Link from 'next/link';
import { MavNav } from '@/components/nav';
import { MavFooter } from '@/components/footer';
import { Section } from '@/components/section';
import { ClosingCTA } from '@/components/closing-cta';
import { ToolInventoryDemo } from '@/components/tool-inventory-demo';
import { ArrowRight } from '@/components/icons';

const agents = [
  { slug: 'maven',    code: '★', name: 'Maven',             tag: 'GENERALIZED ASSISTANT', desc: 'One generalist that wields all twelve tools. Point Maven at a goal, get an Outcome back.', featured: true },
  { slug: 'sales',    code: '01', name: 'Sales',            tag: 'SEVEN AGENTS',          desc: 'The 7-agent Argus flywheel. Signal → outreach → qualified meeting.' },
  { slug: 'research', code: '02', name: 'Research',         tag: 'DEEP · 5-PHASE',        desc: 'Scope → search → synthesize → attribute → audit. Every claim sourced.' },
  { slug: 'content',  code: '03', name: 'Content',          tag: 'BRAND VOICE',           desc: 'Extracts your voice, tests against synthetic panels, writes at volume.' },
  { slug: 'meetings', code: '04', name: 'Meetings',         tag: 'RECORD · EXTRACT',      desc: 'Records, transcribes, extracts action items + decisions + follow-ups.' },
  { slug: 'market',   code: '05', name: 'Market intel',     tag: '295K+ SOURCES',         desc: 'Real-time signal monitoring across news, policy, competitor moves.' },
  { slug: 'focus',    code: '06', name: 'Focus groups',     tag: 'SYNTHETIC PANELS',      desc: '50+ personas · 12 question types · 98% parity with human panels.' },
  { slug: 'ops',      code: '07', name: 'Ops · CRM',        tag: 'PIPELINE · AUTOMATION', desc: 'Owned CRM with IMAP/SMTP and automation graph — no third-party.' },
  { slug: 'science',  code: '08', name: 'Science',          tag: 'ML TRAINING',           desc: 'Scientific synthetic data. Training runs. Evaluation. Provenance.' },
];

export default function AgentsIndexPage() {
  return (
    <>
      <MavNav />
      <section style={{ padding: '120px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 800px 400px at 50% 0%, rgba(200,168,255,0.12), transparent 60%)' }} />
        <div className="mav-container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="mav-eyebrow" style={{ marginBottom: 24 }}>/ agents</div>
          <h1 className="mav-h1" style={{ fontSize: 76, maxWidth: 900 }}>
            Nine agents. <em>One toolbelt.</em>
          </h1>
          <p className="mav-lede" style={{ maxWidth: 620, marginTop: 28 }}>
            Maven composes everything — or go direct to a specialist. Every agent shares the same evidence layer, the same credentials vault, the same outcome system.
          </p>
        </div>
      </section>

      <Section style={{ paddingTop: 60 }}>
        <ToolInventoryDemo />
      </Section>

      <Section eyebrow="Index">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden' }}>
          {agents.map(a => (
            <Link key={a.slug} href={`/agents/${a.slug}`} style={{
              background: a.featured ? 'linear-gradient(180deg, rgba(200,168,255,0.08), rgba(200,168,255,0.02))' : 'var(--ink0)',
              padding: 28, minHeight: 220,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              color: 'inherit', cursor: 'pointer', transition: 'background .15s',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="mav-code" style={{ fontSize: 11, color: a.featured ? 'var(--gold)' : 'var(--muted)', letterSpacing: '.12em' }}>{a.tag}</span>
                <span className="mav-code" style={{ fontSize: 14, color: a.featured ? 'var(--gold)' : 'var(--muted)' }}>{a.code}</span>
              </div>
              <div>
                <h3 style={{ fontSize: 24, fontWeight: 500, margin: '0 0 10px', letterSpacing: '-0.02em' }}>
                  {a.name} <span style={{ color: 'var(--gold)', opacity: 0.6 }}>→</span>
                </h3>
                <p style={{ fontSize: 13.5, color: 'var(--dim)', margin: 0, lineHeight: 1.55 }}>{a.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section dense style={{ padding: '120px 0' }}>
        <ClosingCTA />
      </Section>
      <MavFooter />
    </>
  );
}
