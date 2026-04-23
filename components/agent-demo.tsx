'use client';
import { useState, useEffect } from 'react';
import { Check } from './icons';

const AGENT_STEPS = [
  { agent: 'Signal Scanner', code: '01', title: 'Signal detected', narr: 'A funding announcement crosses our radar. Tagged, deduped, scored 0–100 by relevance.', artifact: 'signal' },
  { agent: 'Signal Scanner', code: '02', title: 'Scored & categorized', narr: 'The signal is classified and routed — high-relevance (≥80) auto-triggers the Prospect Researcher.', artifact: 'signal_scored' },
  { agent: 'Prospect Researcher', code: '03', title: 'Prospect auto-created', narr: 'A prospect record spawns from the signal. Company, executive, round details pulled from Crunchbase + press wire.', artifact: 'prospect' },
  { agent: 'Prospect Researcher', code: '04', title: 'Enrichment run', narr: 'Apollo + LinkedIn enrich the profile. Headcount, growth rate, current ops stack, overhead estimate.', artifact: 'enrichment' },
  { agent: 'Prospect Researcher', code: '05', title: 'Dossier assembled', narr: 'Pain points, opportunity sizing, competitive context — all with sources and confidence scores.', artifact: 'dossier' },
  { agent: 'Outreach Drafter', code: '06', title: 'Outreach drafted', narr: 'Written in your brand voice, calibrated to the VP Operations persona, tied to the triggering signal.', artifact: 'draft' },
  { agent: 'Outreach Drafter', code: '07', title: 'Sent', narr: 'Queued for human review or auto-sent via your own IMAP/SMTP. No third-party CRM in the middle.', artifact: 'sent' },
  { agent: 'Conversation Handler', code: '08', title: 'Reply received', narr: 'Sentiment scored. Intent classified: interested, objection, question, not interested.', artifact: 'reply' },
  { agent: 'Conversation Handler', code: '09', title: 'Deal advanced', narr: 'Stage moves based on engagement. A contextual response is drafted against the actual reply.', artifact: 'advanced' },
  { agent: 'Qualifier', code: '10', title: 'Prospect qualified', narr: 'Fit scored against ICP. Budget, authority, need, timeline assessed. Every factor shown.', artifact: 'qualified' },
  { agent: 'Qualifier', code: '11', title: 'Discovery call booked', narr: 'A task is created for the human closer. Calendar slot proposed.', artifact: 'booked' },
  { agent: 'Meeting Prepper', code: '12', title: 'Meeting brief generated', narr: 'Briefing doc attached to the deal: talking points, positioning, objections, recommended ask.', artifact: 'brief' },
];

const phases = [
  { label: 'DETECT', range: [0, 2] },
  { label: 'RESEARCH', range: [2, 5] },
  { label: 'OUTREACH', range: [5, 7] },
  { label: 'HANDLE', range: [7, 9] },
  { label: 'QUALIFY', range: [9, 11] },
  { label: 'PREP', range: [11, 12] },
];

const ScoreBar = ({ value, label, accent = 'var(--gold)' }: { value: number; label?: string; accent?: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
    <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
      <div style={{ width: `${value}%`, height: '100%', background: accent, transition: 'width .5s ease' }} />
    </div>
    <span className="mav-code" style={{ color: 'var(--dim)', minWidth: 36, textAlign: 'right' }}>{value}</span>
    {label && <span style={{ fontSize: 12, color: 'var(--muted)', minWidth: 90 }}>{label}</span>}
  </div>
);

const ArtifactFrame = ({ children, title, tag }: { children: React.ReactNode; title: string; tag?: string }) => (
  <div style={{
    background: 'var(--ink1)', border: '1px solid var(--line)', borderRadius: 12,
    padding: 18, display: 'flex', flexDirection: 'column', gap: 12,
    animation: 'mav-fadeUp .35s ease both',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
      <div className="mav-eyebrow" style={{ color: 'var(--dim)' }}>{title}</div>
      {tag && <div style={{
        fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '.08em',
        color: 'var(--gold)', textTransform: 'uppercase',
        padding: '3px 8px', border: '1px solid var(--gold-dim)', borderRadius: 999, background: 'rgba(200,168,255,0.04)',
      }}>{tag}</div>}
    </div>
    {children}
  </div>
);

function Artifact({ kind }: { kind: string }) {
  switch (kind) {
    case 'signal': return (
      <ArtifactFrame title="Signal · Funding announcement" tag="Scanning…">
        <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: '6px 14px', fontSize: 13 }}>
          <span style={{ color: 'var(--muted)' }}>Source</span><span>Press wire · US-IL</span>
          <span style={{ color: 'var(--muted)' }}>Type</span><span>Series B · $45M raised</span>
          <span style={{ color: 'var(--muted)' }}>Company</span><span>Northwind Logistics</span>
          <span style={{ color: 'var(--muted)' }}>Lead</span><span>Sarah Chen · VP Operations</span>
          <span style={{ color: 'var(--muted)' }}>Posted</span><span>14 min ago</span>
        </div>
      </ArtifactFrame>
    );
    case 'signal_scored': return (
      <ArtifactFrame title="Signal · Funding announcement" tag="Relevance 92">
        <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: '6px 14px', fontSize: 13 }}>
          <span style={{ color: 'var(--muted)' }}>Source</span><span>Press wire · US-IL</span>
          <span style={{ color: 'var(--muted)' }}>Type</span><span>Series B · $45M raised</span>
          <span style={{ color: 'var(--muted)' }}>Company</span><span>Northwind Logistics</span>
          <span style={{ color: 'var(--muted)' }}>Lead</span><span>Sarah Chen · VP Operations</span>
          <span style={{ color: 'var(--muted)' }}>Posted</span><span>14 min ago</span>
        </div>
        <div style={{ marginTop: 4, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <ScoreBar value={92} label="Relevance" />
          <ScoreBar value={78} label="Territory fit" />
        </div>
      </ArtifactFrame>
    );
    case 'prospect': return (
      <ArtifactFrame title="Prospect · Northwind Logistics" tag="Creating">
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <div style={{ width: 40, height: 40, borderRadius: 8, background: 'linear-gradient(135deg,#2a2420,#1a1814)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontSize: 18, color: 'var(--gold)' }}>N</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 500 }}>Northwind Logistics</div>
            <div style={{ fontSize: 12, color: 'var(--muted)' }}>Mid-market · 1,200 staff · Chicago, IL</div>
          </div>
        </div>
      </ArtifactFrame>
    );
    case 'enrichment': return (
      <ArtifactFrame title="Prospect · Northwind Logistics" tag="Enriching">
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <div style={{ width: 40, height: 40, borderRadius: 8, background: 'linear-gradient(135deg,#2a2420,#1a1814)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontSize: 18, color: 'var(--gold)' }}>N</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 500 }}>Northwind Logistics</div>
            <div style={{ fontSize: 12, color: 'var(--muted)' }}>Mid-market · 1,200 staff · Chicago, IL</div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 12.5, marginTop: 4 }}>
          {[['Headcount', '1,200'], ['Ops overhead', '$2.1M'], ['Current stack', 'Manual / spreadsheet'], ['Lead score', '87/100']].map(([label, val]) => (
            <div key={label} style={{ padding: 10, background: 'rgba(255,255,255,0.02)', borderRadius: 8, border: '1px solid var(--line-soft)' }}>
              <div style={{ color: 'var(--muted)', fontSize: 11 }}>{label}</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 15, marginTop: 2, color: label.includes('overhead') || label.includes('score') ? 'var(--gold)' : 'inherit' }}>{val}</div>
            </div>
          ))}
        </div>
      </ArtifactFrame>
    );
    case 'dossier': return (
      <ArtifactFrame title="Prospect · Northwind Logistics" tag="Dossier ready">
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <div style={{ width: 40, height: 40, borderRadius: 8, background: 'linear-gradient(135deg,#2a2420,#1a1814)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontSize: 18, color: 'var(--gold)' }}>N</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 500 }}>Northwind Logistics</div>
            <div style={{ fontSize: 12, color: 'var(--muted)' }}>Mid-market · 1,200 staff · Chicago, IL</div>
          </div>
        </div>
        <div style={{ fontSize: 12.5, color: 'var(--dim)', lineHeight: 1.55, marginTop: 4 }}>
          <span style={{ color: 'var(--text)' }}>Opportunity.</span> Series B capital earmarked for ops modernization per S-1 commentary. Manual back-office workflows; high-density geo (8 existing customers in IL/WI).
        </div>
      </ArtifactFrame>
    );
    case 'draft': return (
      <ArtifactFrame title="Outreach · Draft" tag="Ready for review">
        <div style={{ fontSize: 12.5, color: 'var(--muted)', display: 'flex', gap: 14 }}>
          <span>To <span style={{ color: 'var(--dim)' }}>s.chen@northwind.io</span></span>
        </div>
        <div style={{ fontSize: 14, color: 'var(--text)', fontWeight: 500 }}>Congrats on the Series B — a thought on ops automation</div>
        <div style={{ fontSize: 13, color: 'var(--dim)', lineHeight: 1.6 }}>
          Sarah — saw the announcement today. Given Northwind's headcount and growth curve, automating the back-office workflow stack typically recovers ~$2.1M in annual operations overhead within twelve months.
        </div>
        <div style={{ display: 'flex', gap: 6, marginTop: 4, flexWrap: 'wrap' }}>
          {['Brand voice: Helio', 'Persona: VP Operations', 'Signal: Series B'].map(t => (
            <span key={t} style={{ fontSize: 11, fontFamily: 'var(--mono)', letterSpacing: '.02em', padding: '3px 8px', border: '1px solid var(--line)', borderRadius: 4, color: 'var(--muted)' }}>{t}</span>
          ))}
        </div>
      </ArtifactFrame>
    );
    case 'sent': return (
      <ArtifactFrame title="Outreach · Sent" tag="Delivered">
        <div style={{ fontSize: 12.5, color: 'var(--muted)', display: 'flex', gap: 14 }}>
          <span>To <span style={{ color: 'var(--dim)' }}>s.chen@northwind.io</span></span>
        </div>
        <div style={{ fontSize: 14, color: 'var(--text)', fontWeight: 500 }}>Congrats on the Series B — a thought on ops automation</div>
        <div style={{ fontSize: 13, color: 'var(--dim)', lineHeight: 1.6 }}>
          Sarah — saw the announcement today. Given Northwind's headcount and growth curve, automating the back-office workflow stack typically recovers ~$2.1M in annual operations overhead within twelve months.
        </div>
      </ArtifactFrame>
    );
    case 'reply': return (
      <ArtifactFrame title="Reply · Sarah Chen" tag="Sentiment +0.62">
        <div style={{ fontSize: 13, color: 'var(--dim)', lineHeight: 1.55, fontStyle: 'italic', borderLeft: '2px solid var(--gold)', paddingLeft: 12 }}>
          "Timely. Workflow consolidation is the #1 line item in our 90-day plan. Would 20 min next week work?"
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {[['Intent', 'Interested'], ['Urgency', 'This quarter'], ['Authority', 'Decision-maker']].map(([k, v]) => (
            <div key={k} style={{ padding: '6px 10px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--line-soft)', borderRadius: 6, fontSize: 11.5 }}>
              <span style={{ color: 'var(--muted)' }}>{k} </span><span>{v}</span>
            </div>
          ))}
        </div>
      </ArtifactFrame>
    );
    case 'advanced': return (
      <ArtifactFrame title="Reply · Sarah Chen" tag="Stage → engaged">
        <div style={{ fontSize: 13, color: 'var(--dim)', lineHeight: 1.55, fontStyle: 'italic', borderLeft: '2px solid var(--gold)', paddingLeft: 12 }}>
          "Timely. Workflow consolidation is the #1 line item in our 90-day plan. Would 20 min next week work?"
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {[['Intent', 'Interested'], ['Sentiment', '+0.62'], ['Urgency', 'This quarter'], ['Authority', 'Decision-maker']].map(([k, v]) => (
            <div key={k} style={{ padding: '6px 10px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--line-soft)', borderRadius: 6, fontSize: 11.5 }}>
              <span style={{ color: 'var(--muted)' }}>{k} </span><span>{v}</span>
            </div>
          ))}
        </div>
      </ArtifactFrame>
    );
    case 'qualified': return (
      <ArtifactFrame title="Qualification · ICP fit" tag="Score 87 / 100">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[['Segment · Mid-market', 80], ['Headcount · 1,200', 82], ['Stack · manual', 85], ['Overhead · $2.1M', 80], ['Engagement · reply', 92], ['Geo density · 8 in-region', 90]].map(([l, v]) => (
            <ScoreBar key={l as string} value={v as number} label={l as string} />
          ))}
        </div>
      </ArtifactFrame>
    );
    case 'booked': return (
      <ArtifactFrame title="Qualification · ICP fit" tag="Discovery booked">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[['Segment · Mid-market', 80], ['Headcount · 1,200', 82], ['Engagement · reply', 92], ['Geo density', 90]].map(([l, v]) => (
            <ScoreBar key={l as string} value={v as number} label={l as string} />
          ))}
        </div>
        <div style={{ padding: 10, background: 'var(--gold-dim)', border: '1px solid rgba(200,168,255,0.28)', borderRadius: 8, fontSize: 12.5, display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="11" rx="1.5" stroke="var(--gold)" strokeWidth="1.3" /><path d="M2 6h12M6 1v3M10 1v3" stroke="var(--gold)" strokeWidth="1.3" /></svg>
          <span>Discovery call · Tue 2:30 PM CT · task created for closer</span>
        </div>
      </ArtifactFrame>
    );
    case 'brief': return (
      <ArtifactFrame title="Meeting brief · Northwind" tag="Ready · 30 min before">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12.5, color: 'var(--dim)' }}>
          {[
            ['Profile', 'Refreshed 4 min ago. Series B announcement context included.'],
            ['Talking points', "Workflow ROI · executive's expansion plans · IL labor market dynamics"],
            ['Objections', 'Change-mgmt risk (1), procurement timeline (2), integration scope (3) — responses attached.'],
            ['Ask', 'Scope a 90-day proof-of-value pilot across two ops workflows.'],
          ].map(([k, v]) => (
            <div key={k as string} style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: 12 }}>
              <span style={{ color: 'var(--muted)', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.04em', textTransform: 'uppercase' }}>{k}</span>
              <span>{v}</span>
            </div>
          ))}
        </div>
      </ArtifactFrame>
    );
    default: return null;
  }
}

export function AgentDemo({ compact = false }: { compact?: boolean }) {
  const [paused, setPaused] = useState(false);
  const [i, setI] = useState(0);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI(x => (x + 1) % AGENT_STEPS.length), 2800);
    return () => clearInterval(t);
  }, [paused]);

  const step = AGENT_STEPS[i];

  return (
    <div style={{
      background: 'var(--ink1)', border: '1px solid var(--line)', borderRadius: 16,
      padding: compact ? 20 : 28, display: 'grid', gridTemplateColumns: '1fr 1.15fr',
      gap: 28, minHeight: compact ? 420 : 520,
      boxShadow: '0 40px 80px -20px rgba(0,0,0,0.5)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--gold-dim), transparent)' }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="mav-chip-dot mav-chip-dot--live" />
            <span className="mav-code" style={{ color: 'var(--muted)', fontSize: 11, letterSpacing: '.1em' }}>LIVE · ARGUS · SANDBOX DATASET</span>
          </div>
          <button onClick={() => setPaused(p => !p)} style={{
            background: 'transparent', border: '1px solid var(--line)', borderRadius: 6,
            color: 'var(--dim)', fontSize: 11, fontFamily: 'var(--mono)', padding: '4px 10px',
            cursor: 'pointer', letterSpacing: '.08em',
          }}>{paused ? '▶ RESUME' : '❚❚ PAUSE'}</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, animation: 'mav-fadeUp .35s ease both' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
            <span className="mav-code" style={{ fontSize: 42, color: 'var(--gold)', fontWeight: 400, lineHeight: 1, letterSpacing: '-0.02em' }}>{step.code}</span>
            <span className="mav-eyebrow" style={{ color: 'var(--dim)' }}>{step.agent}</span>
          </div>
          <h3 style={{ fontSize: 26, margin: '6px 0 0', letterSpacing: '-0.02em', fontWeight: 500 }}>{step.title}</h3>
          <p style={{ fontSize: 14.5, color: 'var(--dim)', lineHeight: 1.55, margin: '10px 0 0', maxWidth: 420 }}>{step.narr}</p>
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', gap: 6 }}>
            {AGENT_STEPS.map((_, n) => (
              <div key={n} style={{ flex: 1, height: 2, background: n <= i ? 'var(--gold)' : 'rgba(255,255,255,0.08)', transition: 'background .35s' }} />
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 4 }}>
            {phases.map(p => {
              const active = i >= p.range[0] && i < p.range[1];
              const done = i >= p.range[1];
              return (
                <span key={p.label} className="mav-code" style={{
                  fontSize: 9.5, letterSpacing: '.14em', fontWeight: 500,
                  color: active ? 'var(--gold)' : done ? 'var(--dim)' : 'var(--muted)',
                  transition: 'color .3s',
                }}>{p.label}</span>
              );
            })}
          </div>
        </div>
      </div>

      <div key={step.artifact} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <Artifact kind={step.artifact} />
        <div style={{
          border: '1px dashed var(--line)', borderRadius: 10, padding: '10px 14px',
          display: 'flex', alignItems: 'center', gap: 10,
          fontSize: 11.5, color: 'var(--muted)', fontFamily: 'var(--mono)', letterSpacing: '.04em',
        }}>
          <Check size={11} /> Every action logged · sources attached · credits: {(i + 1) * 3} / 10000
        </div>
      </div>
    </div>
  );
}
