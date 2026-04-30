import { MavNav } from '@/components/nav';
import { MavFooter } from '@/components/footer';
import { Section } from '@/components/section';
import { ClosingCTA } from '@/components/closing-cta';
import { OutcomesCalendar } from '@/components/outcomes-calendar';
import { OutcomeCard } from '@/components/outcome-card';
import { ArrowRight } from '@/components/icons';

const lifecycle: [string, string][] = [
  ['01 · State', 'Goal, context, timeline, priority, and whether Maven can assign you tasks.'],
  ['02 · Spawn', 'Strategy session plans · breaks into 5–10 todos · sets a schedule.'],
  ['03 · Wake', 'Cadence-driven. Maven resumes context and picks up where she left off.'],
  ['04 · Work', 'Child sessions do focused tasks — parallel, sandboxed, returning results.'],
  ['05 · Ask', 'When stuck, Maven asks a structured question. macOS + iMessage notify.'],
  ['06 · Report', 'Daily journal: mood, highlights, blockers, tomorrow plan. Always-on.'],
];

export default function OutcomesPage() {
  return (
    <>
      <MavNav />
      <section style={{ padding: '120px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 900px 500px at 30% 0%, rgba(200,168,255,0.12), transparent 60%)' }} />
        <div className="mav-container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="mav-eyebrow" style={{ marginBottom: 20 }}>/ outcomes</div>
          <h1 className="mav-h1" style={{ fontSize: 76, maxWidth: 960 }}>
            Give Maven <em>a goal.</em> Not a prompt.
          </h1>
          <p className="mav-lede" style={{ maxWidth: 620, marginTop: 26 }}>
            An Outcome is a persistent project with its own strategy session, schedule, child sessions, and journal.
            Maven wakes up, makes progress, asks when stuck, reports back — on her own cadence, for weeks or months.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
            <a href="#" className="mav-btn mav-btn--primary">Start an outcome <ArrowRight /></a>
            <a href="#" className="mav-btn mav-btn--ghost">See the data model</a>
          </div>
        </div>
      </section>

      <Section eyebrow="Calendar">
        <OutcomesCalendar />
      </Section>

      <Section eyebrow="Anatomy" style={{ background: 'var(--ink1)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <OutcomeCard
            color="#c8a8ff"
            name="Q2 enterprise pipeline"
            goal="Add $2M in new enterprise ARR by end of Q2 across 3 verticals."
            todos={[
              [true, 'Identify top 40 accounts by signal density'],
              [true, 'Build custom dossier for each · with competitive context'],
              [false, 'Run persona-calibrated outreach · wave 1'],
              [false, 'Track reply rates by vertical · report weekly'],
              [false, 'Book 12 qualified discoveries'],
            ]}
            children={[
              ['done', 'Research: Logistics vertical deep-dive'],
              ['running', 'Outreach: Wave 1 · 8 accounts'],
              ['running', 'Monitor: Series B announcements in target geos'],
            ]}
            journal="Momentum holding. Logistics is responding 2.4× better than FinServ. Recommend shifting next wave 60/40 toward Logistics. Tomorrow: draft wave-2 copy for FinServ with new ROI framing."
            stats={{ days: 12, progress: '47%' }}
          />
          <OutcomeCard
            color="#a3e6c4"
            name="Support resolution audit"
            goal="Reduce ticket resolution time by 15% across Tier-2 support in 60 days."
            todos={[
              [true, 'Characterize current resolution-time drivers'],
              [true, 'Generate synthetic matched ticket controls'],
              [false, 'Run controlled experiment across 3 teams'],
              [false, 'Draft routing + macro update procedure'],
            ]}
            children={[
              ['done', 'Generate 10k synthetic matched tickets'],
              ['running', 'Train drift detector'],
            ]}
            questions={[{
              q: 'Resolution time dropped 18% at n=40 — exceeds target. Continue or close?',
              opts: ['Continue · aim for 20%', 'Close · write report now', 'Pause · let me decide tomorrow'],
            }]}
            stats={{ days: 24, progress: '62%' }}
          />
        </div>
      </Section>

      <Section eyebrow="Lifecycle">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden' }}>
          {lifecycle.map(([k, v]) => (
            <div key={k} style={{ background: 'var(--ink0)', padding: 24, minHeight: 160, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span className="mav-code" style={{ color: 'var(--gold)', fontSize: 11, letterSpacing: '.1em' }}>{k}</span>
              <div style={{ fontSize: 14, color: 'var(--dim)', lineHeight: 1.55 }}>{v}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Always-on" style={{ background: 'var(--ink1)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
          <div>
            <h2 className="mav-h2">Maven wakes <em>without you.</em></h2>
            <p className="mav-lede" style={{ marginTop: 24 }}>
              Maven runs on your schedule &mdash; daily, hourly, or weekly. No app needs to be open.
              macOS native notifications. iMessage fan-out. You always know what she's running on your behalf.
            </p>
          </div>
          <div className="mav-card" style={{ padding: 24, background: 'var(--ink0)' }}>
            <div className="mav-eyebrow" style={{ marginBottom: 14 }}>iMessage · Maven</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { who: 'Maven', text: '[Maven] Resolution time dropped 18% at n=40 on the support audit — exceeds target. Continue or close?', mine: false },
                { who: 'You', text: 'close · write report now', mine: true },
                { who: 'Maven', text: '[Maven] Writing. Expect the final report in tomorrow\'s 9am session.', mine: false },
              ].map((m, i) => (
                <div key={i} style={{
                  alignSelf: m.mine ? 'flex-end' : 'flex-start',
                  background: m.mine ? 'var(--gold-dim)' : 'rgba(255,255,255,0.04)',
                  color: 'var(--text)', fontSize: 13.5,
                  padding: '10px 14px', borderRadius: 16,
                  maxWidth: '85%', lineHeight: 1.5,
                  border: m.mine ? '1px solid var(--gold-dim)' : '1px solid var(--line)',
                }}>{m.text}</div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section dense style={{ padding: '120px 0' }}>
        <ClosingCTA
          headline={<>Hand Maven the <em className="mav-gradient-text">first goal.</em></>}
          lede="Spin up an Outcome in minutes. Maven plans the work, runs it on cadence, and reports back &mdash; for as long as it takes."
          primaryLabel="Start your first outcome"
          secondaryLabel="See the agents"
          secondaryHref="/agents"
        />
      </Section>
      <MavFooter />
    </>
  );
}
