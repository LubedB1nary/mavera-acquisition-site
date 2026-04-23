import Link from 'next/link';
import { MavNav } from '@/components/nav';
import { MavFooter } from '@/components/footer';
import { Section } from '@/components/section';
import { PipelineRow } from '@/components/pipeline-row';
import { AgentDemo } from '@/components/agent-demo';
import { OutcomesCalendar } from '@/components/outcomes-calendar';
import { CertBadges } from '@/components/cert-badges';
import { ClosingCTA } from '@/components/closing-cta';
import { CodeCard } from '@/components/code-card';
import { ArrowRight, ArrowUpRight, Check } from '@/components/icons';
import { HomeHero } from '@/components/home-hero';
import { Reveal } from '@/components/reveal';
import { TiltCard } from '@/components/tilt-card';
import { AsciiDivider } from '@/components/ascii-divider';
import { AsciiFrame } from '@/components/ascii-frame';

const agentGridItems = [
  { code: '01', name: 'Signal Scanner', desc: 'Scans funding news, hires, press wires, competitor moves, PE activity. Scores 0–100.' },
  { code: '02', name: 'Prospect Researcher', desc: 'Crunchbase + Apollo + LinkedIn into a full prospect dossier.' },
  { code: '03', name: 'Outreach Drafter', desc: 'Brand-voiced, persona-calibrated, signal-aware.' },
  { code: '04', name: 'Conversation Handler', desc: 'Reads replies, scores sentiment, advances stages, drafts responses.' },
  { code: '05', name: 'Qualifier', desc: 'ICP fit · budget · authority · timeline — every factor shown.' },
  { code: '06', name: 'Re-engager', desc: 'Stalled deals get fresh angles, new ROI, competitive updates.' },
  { code: '07', name: 'Meeting Prepper', desc: 'Briefing doc 30 minutes before every call.' },
];

const personas = [
  { tag: 'GEN', name: 'Millennial · Urban · Growth-minded', fit: 92 },
  { tag: 'PRO', name: 'CFO · Mid-market · Risk-averse', fit: 74 },
  { tag: 'EXP', name: 'VP Operations · Mid-market · Technical', fit: 88 },
  { tag: 'LIF', name: 'Suburban Parent · Value-seeker', fit: 66 },
];

const evidenceSteps: [string, string][] = [
  ['1 · Scope', 'Break the question into 4 sub-questions with success criteria.'],
  ['2 · Search', '12 sources crawled · 34 passages retained · 4 discarded (low-evidence).'],
  ['3 · Synthesize', 'Conflicts reconciled. 2 contradictions flagged for user review.'],
  ['4 · Attribute', 'Every claim linked to its source passage · confidence per claim.'],
  ['5 · Audit', 'Full trail logged · user can replay reasoning step-by-step.'],
];

const evidencePoints: [string, string][] = [
  ['Explainable scoring', 'Every lead score shows which factors contributed — no black boxes.'],
  ['Source attribution', 'Every claim is traceable to a passage, URL, or internal document.'],
  ['Full audit trails', 'Every agent action is logged · replay any decision step-by-step.'],
  ['Confidence per claim', 'Soft claims are marked. Halluc. risk scored. You know what to trust.'],
];

const platformCaps: [string, string][] = [
  ['Responses API', 'Persona-enhanced AI. Drop-in OpenAI replacement.'],
  ['Maven', 'Deep research with source attribution.'],
  ['Personas', '50+ built-in. Custom-trained on your data.'],
  ['Focus Groups', '12 question types · synthesis engine.'],
  ['Video Analysis', 'Attention · clarity · emotion · CTA.'],
  ['News Intelligence', '295K+ sources, persona-calibrated.'],
  ['Brand Voice', 'Extracted from your existing content.'],
  ['Content Generation', 'Template-based, audience-tested.'],
  ['Meetings', 'Recording · transcript · structured extraction.'],
  ['Autonomous Sales', 'The 7-agent Argus module.'],
  ['CRM', 'Full pipeline. IMAP/SMTP. No third-party.'],
  ['Synthetic Data', 'FDA-accepted · differential privacy.'],
];

const trustRows: [string, string][] = [
  ['SOC 2 Type II', 'Audit renewed Q1 2026'],
  ['ISO 27001 · ISMS', 'Certified'],
  ['ISO 42001 · AIMS', 'Among first AI firms certified'],
  ['HIPAA-ready', 'Signed BAA available'],
  ['Sub-processors', '14 listed · notified of changes'],
  ['Data residency', 'US · EU on enterprise'],
];

const tiers = [
  { name: 'Starter', price: '$300', unit: '/mo', credits: '500 credits', features: ['50 GB S3', 'Audio transcription included', 'Email support', '$0.80/credit overage'] },
  { name: 'Professional', price: '$3,500', unit: '/mo', highlight: true, credits: '10,000 credits', features: ['100 GB S3', '1,000 min transcription', 'Priority support', '$0.55/credit overage', 'Brand voice · custom personas'] },
  { name: 'Enterprise', price: 'Custom', credits: 'Custom credits', features: ['SSO · SCIM · BAA', 'Dedicated CSM', 'Data residency', 'Uptime SLA', 'Custom integrations'] },
];

export default function HomePage() {
  return (
    <>
      <MavNav />
      <HomeHero />

      <Section dense style={{ padding: '40px 0 20px' }}>
        <PipelineRow />
      </Section>

      <AsciiDivider variant="route" label="autonomous agents" marginY={32} />

      <Section eyebrow="02 · Autonomous agents">
        <Reveal style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: 64, alignItems: 'start', marginBottom: 48 }}>
          <div>
            <h2 className="mav-h2" style={{ fontSize: 52 }}>Agents that work while you sleep — <em className="mav-gradient-text">not copilots.</em></h2>
          </div>
          <div style={{ paddingTop: 16 }}>
            <p className="mav-lede" style={{ maxWidth: 520 }}>
              Seven specialized agents run the full sales cycle on their own: detect signals, research prospects,
              draft outreach, handle replies, qualify leads, re-engage stalled deals, prep you for meetings.
            </p>
            <p className="mav-body" style={{ marginTop: 16, color: 'var(--muted)' }}>
              The human closes the deal. Everything before that is handled.
            </p>
            <Link href="/agents/sales" className="mav-btn mav-btn--ghost mav-btn--sm mav-shimmer" style={{ marginTop: 20 }}>
              See the flywheel <ArrowRight size={12} />
            </Link>
          </div>
        </Reveal>
        <Reveal variant="scale">
          <AsciiFrame header="◉ argus / live" label="sandbox · 0xA1F3">
            <AgentDemo />
          </AsciiFrame>
        </Reveal>
        <div style={{ marginTop: 20, display: 'flex', gap: 10, alignItems: 'center', justifyContent: 'center' }}>
          <span className="mav-caption">Argus demo runs real CRM operations against a sandboxed dataset — every artifact above is live-generated.</span>
        </div>
      </Section>

      <Section style={{ paddingTop: 40 }}>
        <Reveal stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden' }}>
          {agentGridItems.map(a => (
            <div
              key={a.code}
              className="mav-sheen mav-surface-lift"
              style={{
                padding: 24, minHeight: 180,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                cursor: 'default',
              }}
            >
              <span className="mav-code" style={{ color: 'var(--gold)', fontSize: 11, letterSpacing: '.1em' }}>AGENT · {a.code}</span>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 500, margin: '0 0 8px', letterSpacing: '-0.01em' }}>{a.name}</h3>
                <p style={{ fontSize: 13, color: 'var(--dim)', margin: 0, lineHeight: 1.5 }}>{a.desc}</p>
              </div>
            </div>
          ))}
          <Link
            href="/agents"
            className="mav-sheen mav-surface-accent"
            style={{
              padding: 24,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              cursor: 'pointer', color: 'inherit',
            }}
          >
            <span className="mav-code" style={{ color: 'var(--gold)', fontSize: 11, letterSpacing: '.1em' }}>ALL NINE AGENTS</span>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 500, margin: '0 0 8px', letterSpacing: '-0.01em' }}>Maven + eight specialists <span style={{ color: 'var(--gold)', display: 'inline-block', transition: 'transform .25s ease' }}>→</span></h3>
              <p style={{ fontSize: 13, color: 'var(--dim)', margin: 0 }}>Research · content · meetings · market intel · focus groups · ops · science. One index. Go direct, or let Maven compose.</p>
            </div>
          </Link>
        </Reveal>
      </Section>

      <AsciiDivider variant="flow" marginY={48} />

      <Section eyebrow="03 · Outcomes" style={{ background: 'var(--ink1)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <Reveal style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'end', marginBottom: 40 }}>
          <div>
            <h2 className="mav-h2" style={{ fontSize: 52 }}>Hand Maven <em className="mav-gradient-text">a goal.</em> Not a prompt.</h2>
          </div>
          <div style={{ paddingTop: 8 }}>
            <p className="mav-lede" style={{ maxWidth: 560 }}>
              An Outcome is a long-running project with its own strategy session, schedule, child sessions, and journal. Maven
              wakes up on cadence, makes progress, asks when she needs help, and reports back.
            </p>
            <Link href="/outcomes" className="mav-btn mav-btn--ghost mav-btn--sm mav-shimmer" style={{ marginTop: 20 }}>
              See outcomes <ArrowRight size={12} />
            </Link>
          </div>
        </Reveal>
        <Reveal variant="scale">
          <AsciiFrame header="◉ outcome / north-star" label="cadence · 6h">
            <OutcomesCalendar />
          </AsciiFrame>
        </Reveal>
      </Section>

      <Section eyebrow="04 · Synthetic intelligence">
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: -40, marginTop: -20 }}>
          <Link href="/synthetic" className="mav-btn mav-btn--ghost mav-btn--sm">
            /synthetic — methods + audits <ArrowRight size={12} />
          </Link>
        </div>
        <Reveal style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 80, alignItems: 'center' }}>
          <div>
            <h2 className="mav-h2">Ask your audience <em className="mav-gradient-text">before</em> you spend.</h2>
            <p className="mav-lede" style={{ marginTop: 24 }}>
              Fifty-plus AI personas, statistically validated at 98% accuracy against real human panels.
              Test any message, any creative, any strategy against your actual audience — in minutes, not weeks.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '32px 0 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'Focus groups with 12 question types · synthesis in minutes',
                'Content testing with structured engagement scores',
                'Video analysis — attention, clarity, emotion, CTA',
                '96% parity with traditional panels · 52+ published studies',
              ].map(line => (
                <li key={line} style={{ display: 'flex', gap: 10, fontSize: 14.5, color: 'var(--dim)' }}>
                  <Check size={14} /><span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mav-card mav-hover-lift mav-glow" style={{ padding: 24, background: 'var(--ink1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <span className="mav-eyebrow">Focus group · in progress</span>
              <span className="mav-chip"><span className="mav-chip-dot mav-chip-dot--live" />12 / 12 personas responding</span>
            </div>
            <div style={{ fontSize: 15, fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--text)', padding: '16px 0', borderBottom: '1px solid var(--line)', marginBottom: 16 }}>
              "How does this headline land with you?" — <span style={{ color: 'var(--dim)', fontStyle: 'normal', fontFamily: 'var(--sans)', fontSize: 13 }}>Open the door to growth.</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {personas.map(p => (
                <div key={p.tag} style={{ display: 'grid', gridTemplateColumns: '40px 1fr 80px', gap: 14, alignItems: 'center' }}>
                  <span className="mav-code" style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '.1em' }}>{p.tag}</span>
                  <span style={{ fontSize: 13 }}>{p.name}</span>
                  <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
                    <div style={{ width: `${p.fit}%`, height: '100%', background: 'var(--gold)' }} />
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, padding: 14, background: 'rgba(255,255,255,0.02)', border: '1px dashed var(--line)', borderRadius: 10, fontSize: 12.5, color: 'var(--dim)' }}>
              <span style={{ color: 'var(--gold)' }}>Synthesis.</span> "Growth" resonates with founders (9/12), reads generic to CFOs (2/12).
              Try "defensible growth" for financial personas — +31% resonance in prior studies.
            </div>
          </div>
        </Reveal>
      </Section>

      <Section eyebrow="05 · Evidence layer" style={{ background: 'var(--ink1)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <Reveal style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div className="mav-card mav-hover-lift mav-glow" style={{ padding: 0, background: 'var(--ink0)', overflow: 'hidden' }}>
            <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="mav-eyebrow">Maven · 5-phase research</span>
              <span className="mav-code" style={{ fontSize: 10.5, color: 'var(--muted)' }}>confidence · 0.92 · halluc. risk · low</span>
            </div>
            <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {evidenceSteps.map(([k, v]) => (
                <div key={k} style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: 14 }}>
                  <span className="mav-code" style={{ color: 'var(--gold)', fontSize: 11, letterSpacing: '.08em' }}>{k}</span>
                  <span style={{ fontSize: 13, color: 'var(--dim)' }}>{v}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: '14px 18px', borderTop: '1px solid var(--line)', fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '.02em' }}>
              sources · CMS.gov · NEJM · Payer LCD 2026-03 · internal KB (14) · ·
            </div>
          </div>
          <div>
            <h2 className="mav-h2">Every decision comes with <em className="mav-gradient-text">receipts.</em></h2>
            <p className="mav-lede" style={{ marginTop: 24 }}>
              In a world of AI hallucination, Mavera's outputs are defensible.
              Sources cited. Confidence scored. Reasoning transparent. Actions logged.
              Every score shows its contributing factors.
            </p>
            <Reveal stagger style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {evidencePoints.map(([k, v]) => (
                <div key={k} className="mav-evidence-row">
                  <div style={{ fontSize: 14.5, fontWeight: 500, letterSpacing: '-0.01em' }}>{k}</div>
                  <div style={{ fontSize: 13, color: 'var(--dim)', marginTop: 3 }}>{v}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </Reveal>
      </Section>

      <Section eyebrow="06 · Platform">
        <div>
          <Reveal style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 80, alignItems: 'end', marginBottom: 56 }}>
            <h2 className="mav-h2">One platform <br />for the <em className="mav-gradient-text">full growth cycle.</em></h2>
            <p className="mav-lede">
              Market intelligence → audience research → content creation → sales execution → meeting intelligence —
              all powered by the same synthetic layer, all exposed through one OpenAI-compatible API.
            </p>
          </Reveal>
          <Reveal stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden' }}>
            {platformCaps.map(([k, v], idx) => (
              <div
                key={k}
                className="mav-sheen mav-surface-lift"
                style={{
                  padding: 22, minHeight: 130,
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  cursor: 'default',
                }}
              >
                <span className="mav-code" style={{ color: 'var(--muted)', fontSize: 10.5, letterSpacing: '.1em' }}>{String(idx + 1).padStart(2, '0')}</span>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 500, letterSpacing: '-0.01em', marginBottom: 4 }}>{k}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--dim)', lineHeight: 1.5 }}>{v}</div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      <AsciiDivider variant="tick" label="developers" marginY={40} />

      <Section eyebrow="07 · Developers" style={{ background: 'var(--ink1)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <Reveal style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 72, alignItems: 'center' }}>
          <div>
            <h2 className="mav-h2"><em className="mav-gradient-text">OpenAI-compatible.</em><br />Change one line.</h2>
            <p className="mav-lede" style={{ marginTop: 24 }}>
              Drop-in replacement for the Responses API. Same SDKs you already use — Python, JavaScript, Go —
              plus a <span style={{ color: 'var(--text)' }}>persona_id</span> parameter that transforms the model into
              a behaviorally-calibrated respondent.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '28px 0 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                '200+ workflow templates · ready-to-run',
                'Credit-based pricing · every response shows cost',
                'Built for non-developers using Claude Code, Cursor, Codex',
                '11 feature areas exposed · model: mavera-1',
              ].map(t => (
                <li key={t} style={{ fontSize: 14, color: 'var(--dim)', display: 'flex', gap: 10 }}><Check size={14} />{t}</li>
              ))}
            </ul>
            <div style={{ marginTop: 36, display: 'flex', gap: 12 }}>
              <Link href="/api-docs" className="mav-btn mav-btn--primary">API overview <ArrowRight /></Link>
              <a href="#" className="mav-btn mav-btn--ghost">docs.mavera.io <ArrowUpRight /></a>
            </div>
          </div>
          <CodeCard />
        </Reveal>
      </Section>

      <Section eyebrow="08 · Enterprise trust">
        <Reveal style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
          <div>
            <h2 className="mav-h2">Built for <em className="mav-gradient-text">enterprise</em> from day one.</h2>
            <p className="mav-lede" style={{ marginTop: 24 }}>
              Most AI startups at our stage don't hold the certifications we do.
              Nine paying enterprise customers. Pipeline with household names.
              AWS infrastructure. Auth0. Full trust portal.
            </p>
            <div style={{ marginTop: 28 }}>
              <CertBadges />
            </div>
          </div>
          <div className="mav-card mav-hover-lift mav-glow" style={{ padding: 28, background: 'var(--ink1)' }}>
            <div className="mav-eyebrow" style={{ marginBottom: 20 }}>Trust · Live posture</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {trustRows.map(([k, v]) => (
                <div key={k} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 12, borderBottom: '1px dashed var(--line-soft)' }}>
                  <span style={{ fontSize: 13.5 }}>{k}</span>
                  <span style={{ fontSize: 12, color: 'var(--dim)', fontFamily: 'var(--mono)' }}>{v}</span>
                </div>
              ))}
            </div>
            <a href="#" className="mav-btn mav-btn--ghost mav-btn--sm" style={{ marginTop: 20 }}>Open trust portal <ArrowUpRight /></a>
          </div>
        </Reveal>
      </Section>

      <Section eyebrow="09 · Pricing" style={{ paddingTop: 40 }}>
        <div>
          <Reveal style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 48, gap: 48, flexWrap: 'wrap' }}>
            <h2 className="mav-h2" style={{ fontSize: 48 }}>Transparent pricing. <em className="mav-gradient-text">Pay for what you use.</em></h2>
            <p className="mav-lede" style={{ maxWidth: 420 }}>Credit-based. Every API response shows its cost. No hidden line items.</p>
          </Reveal>
          <Reveal stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {tiers.map(t => (
              <TiltCard key={t.name} className="mav-hover-lift" intensity={t.highlight ? 5 : 3} style={{
                background: t.highlight ? 'var(--ink2)' : 'var(--ink1)',
                border: `1px solid ${t.highlight ? 'var(--gold-dim)' : 'var(--line)'}`,
                borderRadius: 14, padding: 28, position: 'relative',
              }}>
                {t.highlight && <span style={{ position: 'absolute', top: 16, right: 16, fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--gold)', letterSpacing: '.1em' }}>MOST POPULAR</span>}
                <div className="mav-eyebrow" style={{ marginBottom: 8 }}>{t.name}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 }}>
                  <span style={{ fontSize: 40, letterSpacing: '-0.03em', fontWeight: 500 }}>{t.price}</span>
                  {t.unit && <span style={{ fontSize: 14, color: 'var(--muted)' }}>{t.unit}</span>}
                </div>
                <div style={{ fontSize: 13, color: 'var(--dim)', marginBottom: 20, fontFamily: 'var(--mono)' }}>{t.credits}</div>
                <div style={{ height: 1, background: 'var(--line)', margin: '0 0 20px' }} />
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {t.features.map(f => (
                    <li key={f} style={{ fontSize: 13, color: 'var(--dim)', display: 'flex', gap: 10 }}><Check size={13} />{f}</li>
                  ))}
                </ul>
                <Link href="/pricing" className={`mav-btn ${t.highlight ? 'mav-btn--primary mav-shimmer' : 'mav-btn--ghost'}`} style={{ marginTop: 28, width: '100%', justifyContent: 'center' }}>
                  {t.name === 'Enterprise' ? 'Talk to sales' : 'Start free trial'}
                </Link>
              </TiltCard>
            ))}
          </Reveal>
        </div>
      </Section>

      <Section dense style={{ padding: '120px 0' }}>
        <Reveal variant="scale">
          <ClosingCTA />
        </Reveal>
      </Section>

      <MavFooter />
    </>
  );
}
