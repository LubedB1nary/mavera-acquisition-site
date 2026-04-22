import { MavNav } from '@/components/nav';
import { MavFooter } from '@/components/footer';
import { Section } from '@/components/section';
import { ClosingCTA } from '@/components/closing-cta';
import { AgentDemo } from '@/components/agent-demo';
import { ArrowRight, Check } from '@/components/icons';

const features = [
  { code: '01', name: 'Autonomous agents', lead: 'The 7-agent Glengarry module.', bullets: ['Signal Scanner · relevance scoring', 'Prospect Researcher · dossiers', 'Outreach Drafter · brand voice', 'Conversation Handler · sentiment + stage', 'Qualifier · ICP fit with contributing factors', 'Re-engager · stalled deal recovery', 'Meeting Prepper · 30-min pre-call brief'] },
  { code: '02', name: 'Synthetic intelligence', lead: '50+ AI personas validated at 98% against human panels.', bullets: ['Focus groups · 12 question types', 'Content testing · structured scores', 'Video analysis · attention · clarity · emotion · CTA', '52+ published parity studies'] },
  { code: '03', name: 'Evidence layer', lead: 'Every decision shows its work — or we call it a draft.', bullets: ['Source attribution on every claim', 'Confidence scoring per claim', 'Full audit trails · replayable', 'Explainable lead scores'] },
  { code: '04', name: 'Maven · research', lead: 'Deep 5-phase research with source attribution.', bullets: ['Scope · Search · Synthesize · Attribute · Audit', '295K+ source corpus · news + policy + academic', 'Conflicts surfaced, not averaged', 'Hallucination risk scored'] },
  { code: '05', name: 'Meetings', lead: 'Recording to structured output.', bullets: ['On-device option available', 'Action items · decisions · blockers', 'Sentiment arc · direct quotes', 'Agenda coverage + next meeting auto-draft'] },
  { code: '06', name: 'Brand voice + content', lead: 'Your voice. At volume.', bullets: ['Extracted from existing material', 'Variants A/B/C with persona fit', 'Pre-test before spend', '200+ workflow templates'] },
  { code: '07', name: 'Owned CRM', lead: 'Full pipeline, IMAP/SMTP, no third-party.', bullets: ['Contacts · companies · deals', 'Visual automation graph', 'Tasks assignable across humans + agents', 'Your data, your environment'] },
  { code: '08', name: 'OpenAI-compatible API', lead: 'Drop-in replacement for Responses API.', bullets: ['Python · JavaScript · Go · any SDK', 'Credit-based · every cost shown', '11 feature areas exposed', 'persona_id parameter to calibrate'] },
];

export default function FeaturesPage() {
  return (
    <>
      <MavNav />
      <section style={{ padding: '120px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 900px 500px at 70% 0%, rgba(200,168,255,0.1), transparent 60%)' }} />
        <div className="mav-container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="mav-eyebrow" style={{ marginBottom: 20 }}>/ features</div>
          <h1 className="mav-h1" style={{ fontSize: 76, maxWidth: 980 }}>
            One platform. <em>Eight surfaces.</em>
          </h1>
          <p className="mav-lede" style={{ maxWidth: 620, marginTop: 26 }}>
            Market intelligence, audience research, content, sales execution, meeting intelligence — the same evidence
            layer, the same synthetic layer, one API.
          </p>
        </div>
      </section>

      <Section>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          {features.map((f, i) => (
            <div key={f.code} style={{
              display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr',
              gap: 60, alignItems: 'center',
              paddingBottom: 48, borderBottom: '1px solid var(--line)',
            }}>
              <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                <span className="mav-code" style={{ color: 'var(--gold)', fontSize: 12, letterSpacing: '.12em' }}>{f.code} · FEATURE</span>
                <h2 className="mav-h2" style={{ fontSize: 44, marginTop: 12 }}>{f.name}</h2>
                <p className="mav-lede" style={{ marginTop: 20 }}>{f.lead}</p>
              </div>
              <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {f.bullets.map(b => (
                    <li key={b} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--dim)' }}>
                      <Check size={14} /><span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="See it run" style={{ background: 'var(--ink1)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <AgentDemo />
      </Section>

      <Section dense style={{ padding: '120px 0' }}>
        <ClosingCTA />
      </Section>
      <MavFooter />
    </>
  );
}
