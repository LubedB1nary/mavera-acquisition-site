// Live Signal→Outreach agent demo — 12 steps, auto-advancing loop.
// Left: step narrator + timeline. Right: evolving artifact panel.

const AGENT_STEPS = [
  {
    agent: 'Signal Scanner',
    code: '01',
    title: 'Signal detected',
    narr: 'A new regulatory filing crosses our radar. Geo-tagged, scored 0–100 by relevance.',
    artifact: 'signal',
  },
  {
    agent: 'Signal Scanner',
    code: '02',
    title: 'Scored & categorized',
    narr: 'The signal is classified and routed — high-relevance (≥80) auto-triggers the Prospect Researcher.',
    artifact: 'signal_scored',
  },
  {
    agent: 'Prospect Researcher',
    code: '03',
    title: 'Prospect auto-created',
    narr: 'A prospect record spawns from the signal. Company, director, certificate type pulled from CMS QCOR.',
    artifact: 'prospect',
  },
  {
    agent: 'Prospect Researcher',
    code: '04',
    title: 'Enrichment run',
    narr: 'LabScope + LinkedIn enrich the profile. Send-out volume, current PCR platform, revenue leakage estimated.',
    artifact: 'enrichment',
  },
  {
    agent: 'Prospect Researcher',
    code: '05',
    title: 'Dossier assembled',
    narr: 'Pain points, opportunity sizing, competitive context — all with sources and confidence scores.',
    artifact: 'dossier',
  },
  {
    agent: 'Outreach Drafter',
    code: '06',
    title: 'Outreach drafted',
    narr: 'Written in your brand voice, calibrated to the Lab Director persona, tied to the triggering signal.',
    artifact: 'draft',
  },
  {
    agent: 'Outreach Drafter',
    code: '07',
    title: 'Sent',
    narr: 'Queued for human review or auto-sent via your own IMAP/SMTP. No third-party CRM in the middle.',
    artifact: 'sent',
  },
  {
    agent: 'Conversation Handler',
    code: '08',
    title: 'Reply received',
    narr: 'Sentiment scored. Intent classified: interested, objection, question, not interested.',
    artifact: 'reply',
  },
  {
    agent: 'Conversation Handler',
    code: '09',
    title: 'Deal advanced',
    narr: 'Stage moves based on engagement. A contextual response is drafted against the actual reply.',
    artifact: 'advanced',
  },
  {
    agent: 'Qualifier',
    code: '10',
    title: 'Prospect qualified',
    narr: 'Fit scored against ICP. Budget, authority, need, timeline assessed. Every factor shown.',
    artifact: 'qualified',
  },
  {
    agent: 'Qualifier',
    code: '11',
    title: 'Discovery call booked',
    narr: 'A task is created for the human closer. Calendar slot proposed.',
    artifact: 'booked',
  },
  {
    agent: 'Meeting Prepper',
    code: '12',
    title: 'Meeting brief generated',
    narr: 'Briefing doc attached to the deal: talking points, positioning, objections, recommended ask.',
    artifact: 'brief',
  },
];

function useAutoStep(total, intervalMs = 3000, paused = false) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI(x => (x + 1) % total), intervalMs);
    return () => clearInterval(t);
  }, [total, intervalMs, paused]);
  return [i, setI];
}

// ───────────────────────── Artifact panels ─────────────────────────

const ArtifactFrame = ({ children, title, tag }) => (
  <div style={{
    background:'var(--ink1)', border:'1px solid var(--line)', borderRadius: 12,
    padding: 18, display:'flex', flexDirection:'column', gap: 12,
    animation: 'mav-fadeUp .35s ease both',
  }}>
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:12}}>
      <div className="mav-eyebrow" style={{color:'var(--dim)'}}>{title}</div>
      {tag && <div style={{
        fontFamily:'var(--mono)', fontSize: 10.5, letterSpacing:'.08em',
        color: 'var(--gold)', textTransform:'uppercase',
        padding:'3px 8px', border:'1px solid var(--gold-dim)', borderRadius:999, background:'rgba(200,168,255,0.04)'
      }}>{tag}</div>}
    </div>
    {children}
  </div>
);

const ScoreBar = ({ value, label, accent = 'var(--gold)' }) => (
  <div style={{display:'flex', alignItems:'center', gap: 12}}>
    <div style={{flex:1, height: 4, background:'rgba(255,255,255,0.06)', borderRadius: 2, overflow:'hidden'}}>
      <div style={{width:`${value}%`, height:'100%', background:accent, transition:'width .5s ease'}}/>
    </div>
    <span className="mav-code" style={{color:'var(--dim)', minWidth: 36, textAlign:'right'}}>{value}</span>
    {label && <span style={{fontSize:12, color:'var(--muted)', minWidth: 90}}>{label}</span>}
  </div>
);

const ArtifactSignal = ({ scored }) => (
  <ArtifactFrame title="Signal · CLIA filing" tag={scored ? 'Relevance 92' : 'Scanning…'}>
    <div style={{display:'grid', gridTemplateColumns:'90px 1fr', gap: '6px 14px', fontSize: 13}}>
      <span style={{color:'var(--muted)'}}>Source</span><span>CMS QCOR · US-CA</span>
      <span style={{color:'var(--muted)'}}>Type</span><span>New CLIA certificate filed</span>
      <span style={{color:'var(--muted)'}}>Lab</span><span>Meridian Clinical Diagnostics</span>
      <span style={{color:'var(--muted)'}}>Director</span><span>Dr. L. Osei, MD PhD</span>
      <span style={{color:'var(--muted)'}}>Filed</span><span>14 min ago</span>
    </div>
    {scored && (
      <div style={{marginTop: 4, display:'flex', flexDirection:'column', gap: 8}}>
        <ScoreBar value={92} label="Relevance" />
        <ScoreBar value={78} label="Territory fit" />
      </div>
    )}
  </ArtifactFrame>
);

const ArtifactProspect = ({ enriched, dossier }) => (
  <ArtifactFrame title="Prospect · Meridian Clinical Diagnostics" tag={dossier ? 'Dossier ready' : enriched ? 'Enriching' : 'Creating'}>
    <div style={{display:'flex', gap: 12, alignItems:'center'}}>
      <div style={{width: 40, height: 40, borderRadius: 8, background:'linear-gradient(135deg,#2a2420,#1a1814)', border:'1px solid var(--line)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--serif)', fontSize: 18, color:'var(--gold)'}}>M</div>
      <div style={{flex:1}}>
        <div style={{fontSize: 14, fontWeight: 500}}>Meridian Clinical Diagnostics</div>
        <div style={{fontSize: 12, color:'var(--muted)'}}>ICL · 40 staff · San Jose, CA</div>
      </div>
    </div>
    {enriched && (
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 8, fontSize: 12.5, marginTop: 4}}>
        <div style={{padding: 10, background:'rgba(255,255,255,0.02)', borderRadius: 8, border:'1px solid var(--line-soft)'}}>
          <div style={{color:'var(--muted)', fontSize: 11}}>Send-out volume</div>
          <div style={{fontFamily:'var(--mono)', fontSize: 15, marginTop: 2}}>38K<span style={{color:'var(--muted)', fontSize: 11}}>/yr</span></div>
        </div>
        <div style={{padding: 10, background:'rgba(255,255,255,0.02)', borderRadius: 8, border:'1px solid var(--line-soft)'}}>
          <div style={{color:'var(--muted)', fontSize: 11}}>Revenue leakage</div>
          <div style={{fontFamily:'var(--mono)', fontSize: 15, marginTop: 2, color:'var(--gold)'}}>$1.4M</div>
        </div>
        <div style={{padding: 10, background:'rgba(255,255,255,0.02)', borderRadius: 8, border:'1px solid var(--line-soft)'}}>
          <div style={{color:'var(--muted)', fontSize: 11}}>Current platform</div>
          <div style={{fontSize: 13, marginTop: 2}}>Send-out only</div>
        </div>
        <div style={{padding: 10, background:'rgba(255,255,255,0.02)', borderRadius: 8, border:'1px solid var(--line-soft)'}}>
          <div style={{color:'var(--muted)', fontSize: 11}}>Lead score</div>
          <div style={{fontFamily:'var(--mono)', fontSize: 15, marginTop: 2, color:'var(--gold)'}}>87<span style={{color:'var(--muted)', fontSize: 11}}>/100</span></div>
        </div>
      </div>
    )}
    {dossier && (
      <div style={{fontSize: 12.5, color:'var(--dim)', lineHeight: 1.55, marginTop: 4}}>
        <span style={{color:'var(--text)'}}>Opportunity.</span> Ripe for in-house respiratory panel. Director known to publish on infectious disease economics; high-density geo (6 existing clients in CA).
      </div>
    )}
  </ArtifactFrame>
);

const ArtifactDraft = ({ sent }) => (
  <ArtifactFrame title={sent ? 'Outreach · Sent' : 'Outreach · Draft'} tag={sent ? 'Delivered' : 'Ready for review'}>
    <div style={{fontSize: 12.5, color:'var(--muted)', display:'flex', gap: 14}}>
      <span>To&nbsp;<span style={{color:'var(--dim)'}}>l.osei@meridianclin.dx</span></span>
      <span>From&nbsp;<span style={{color:'var(--dim)'}}>you@ospri.bio</span></span>
    </div>
    <div style={{fontSize: 14, color:'var(--text)', fontWeight: 500, letterSpacing:'-0.01em'}}>
      Congrats on the new CLIA — a thought on respiratory
    </div>
    <div style={{fontSize: 13, color:'var(--dim)', lineHeight: 1.6}}>
      Dr. Osei — saw your certificate post today. Given Meridian's volume
      profile, bringing a 21-target respiratory panel in-house likely
      recovers ~$1.4M in annual send-out margin. Not a sales ask — happy to
      share how two similar ICLs structured the transition…
    </div>
    <div style={{display:'flex', gap: 6, marginTop: 4, flexWrap:'wrap'}}>
      {['Brand voice: Ospri', 'Persona: Lab Director', 'Signal: CLIA filing', 'Evidence: 2 case studies'].map(t => (
        <span key={t} style={{
          fontSize: 11, fontFamily:'var(--mono)', letterSpacing:'.02em',
          padding:'3px 8px', border:'1px solid var(--line)', borderRadius: 4,
          color:'var(--muted)',
        }}>{t}</span>
      ))}
    </div>
  </ArtifactFrame>
);

const ArtifactReply = ({ advanced }) => (
  <ArtifactFrame title="Reply · Dr. L. Osei" tag={advanced ? 'Stage → engaged' : 'Sentiment +0.62'}>
    <div style={{fontSize: 13, color:'var(--dim)', lineHeight: 1.55, fontStyle:'italic', borderLeft:'2px solid var(--gold)', paddingLeft: 12}}>
      "Timely. We've been quoting send-out costs all quarter. Would 20 min next week work? Tuesday afternoon is open."
    </div>
    <div style={{display:'flex', gap: 8, flexWrap:'wrap'}}>
      {[['Intent','Interested'],['Sentiment','+0.62'],['Urgency','This quarter'],['Authority','Decision-maker']].map(([k,v]) => (
        <div key={k} style={{padding:'6px 10px', background:'rgba(255,255,255,0.02)', border:'1px solid var(--line-soft)', borderRadius:6, fontSize: 11.5}}>
          <span style={{color:'var(--muted)'}}>{k}&nbsp;</span><span>{v}</span>
        </div>
      ))}
    </div>
  </ArtifactFrame>
);

const ArtifactQualified = ({ booked }) => (
  <ArtifactFrame title="Qualification · ICP fit" tag={booked ? 'Discovery booked' : 'Score 87 / 100'}>
    <div style={{display:'flex', flexDirection:'column', gap: 8}}>
      {[['Lab type · ICL', 80],['Volume · 38K/yr', 82],['Platform · send-out only', 85],['Leakage · $1.4M', 80],['Engagement · reply', 92],['Geo density · 6 in-state', 90]].map(([l, v]) => (
        <ScoreBar key={l} value={v} label={l} />
      ))}
    </div>
    {booked && (
      <div style={{padding: 10, background:'var(--gold-dim)', border:'1px solid rgba(200,168,255,0.28)', borderRadius: 8, fontSize: 12.5, display:'flex', alignItems:'center', gap:10}}>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="11" rx="1.5" stroke="var(--gold)" strokeWidth="1.3"/><path d="M2 6h12M6 1v3M10 1v3" stroke="var(--gold)" strokeWidth="1.3"/></svg>
        <span>Discovery call · Tue 2:30 PM PT · task created for closer</span>
      </div>
    )}
  </ArtifactFrame>
);

const ArtifactBrief = () => (
  <ArtifactFrame title="Meeting brief · Meridian" tag="Ready · 30 min before">
    <div style={{display:'flex', flexDirection:'column', gap: 8, fontSize: 12.5, color:'var(--dim)'}}>
      {[
        ['Profile', 'Refreshed 4 min ago. New CLIA filing context included.'],
        ['Talking points', 'Respiratory panel ROI · director\'s published stance on in-house vs send-out · CA payer dynamics'],
        ['Objections likely', 'Capex hesitation (1), staffing (2), validation timelines (3) — responses attached.'],
        ['Recommended ask', 'Scope a 90-day validation pilot on 21-target respiratory; introduce Panel Designer.'],
      ].map(([k, v]) => (
        <div key={k} style={{display:'grid', gridTemplateColumns:'110px 1fr', gap: 12}}>
          <span style={{color:'var(--muted)', fontFamily:'var(--mono)', fontSize: 11, letterSpacing:'.04em', textTransform:'uppercase'}}>{k}</span>
          <span>{v}</span>
        </div>
      ))}
    </div>
  </ArtifactFrame>
);

function Artifact({ kind }) {
  switch (kind) {
    case 'signal': return <ArtifactSignal />;
    case 'signal_scored': return <ArtifactSignal scored />;
    case 'prospect': return <ArtifactProspect />;
    case 'enrichment': return <ArtifactProspect enriched />;
    case 'dossier': return <ArtifactProspect enriched dossier />;
    case 'draft': return <ArtifactDraft />;
    case 'sent': return <ArtifactDraft sent />;
    case 'reply': return <ArtifactReply />;
    case 'advanced': return <ArtifactReply advanced />;
    case 'qualified': return <ArtifactQualified />;
    case 'booked': return <ArtifactQualified booked />;
    case 'brief': return <ArtifactBrief />;
    default: return null;
  }
}

// ───────────────────────── Main demo component ─────────────────────────

function AgentDemo({ compact = false }) {
  const [paused, setPaused] = React.useState(false);
  const [i, setI] = useAutoStep(AGENT_STEPS.length, 2800, paused);
  const step = AGENT_STEPS[i];

  const phases = [
    { label: 'DETECT', range: [0, 2] },
    { label: 'RESEARCH', range: [2, 5] },
    { label: 'OUTREACH', range: [5, 7] },
    { label: 'HANDLE', range: [7, 9] },
    { label: 'QUALIFY', range: [9, 11] },
    { label: 'PREP', range: [11, 12] },
  ];

  return (
    <div style={{
      background:'var(--ink1)', border:'1px solid var(--line)', borderRadius: 16,
      padding: compact ? 20 : 28, display:'grid', gridTemplateColumns:'1fr 1.15fr',
      gap: 28, minHeight: compact ? 420 : 520,
      boxShadow:'0 40px 80px -20px rgba(0,0,0,0.5)',
      position:'relative', overflow:'hidden',
    }}>
      <div style={{position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg, transparent, var(--gold-dim), transparent)'}}/>

      {/* LEFT — narrator + timeline */}
      <div style={{display:'flex', flexDirection:'column', gap: 22}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap: 12}}>
          <div style={{display:'flex', alignItems:'center', gap: 10}}>
            <span className="mav-chip-dot mav-chip-dot--live" style={{width:6, height:6, borderRadius:999, background:'#7ce0a8', display:'inline-block'}}/>
            <span className="mav-code" style={{color:'var(--muted)', fontSize: 11, letterSpacing:'.1em'}}>LIVE · GLENGARRY · SANDBOX DATASET</span>
          </div>
          <button onClick={() => setPaused(p => !p)} style={{
            background:'transparent', border:'1px solid var(--line)', borderRadius: 6,
            color:'var(--dim)', fontSize: 11, fontFamily:'var(--mono)', padding:'4px 10px',
            cursor:'pointer', letterSpacing:'.08em',
          }}>{paused ? '▶ RESUME' : '❚❚ PAUSE'}</button>
        </div>

        <div style={{display:'flex', flexDirection:'column', gap: 6, animation: 'mav-fadeUp .35s ease both', key: i}}>
          <div style={{display:'flex', alignItems:'baseline', gap: 14}}>
            <span className="mav-code" style={{fontSize: 42, color:'var(--gold)', fontWeight: 400, lineHeight: 1, letterSpacing:'-0.02em'}}>{step.code}</span>
            <span className="mav-eyebrow" style={{color:'var(--dim)'}}>{step.agent}</span>
          </div>
          <h3 style={{fontSize: 26, margin:'6px 0 0', letterSpacing:'-0.02em', fontWeight: 500}}>{step.title}</h3>
          <p style={{fontSize: 14.5, color:'var(--dim)', lineHeight: 1.55, margin: '10px 0 0', maxWidth: 420}}>{step.narr}</p>
        </div>

        {/* Phase rail */}
        <div style={{marginTop:'auto', display:'flex', flexDirection:'column', gap: 10}}>
          <div style={{display:'flex', gap: 6}}>
            {AGENT_STEPS.map((_, n) => (
              <div key={n} style={{
                flex: 1, height: 2,
                background: n <= i ? 'var(--gold)' : 'rgba(255,255,255,0.08)',
                transition:'background .35s',
              }}/>
            ))}
          </div>
          <div style={{display:'flex', justifyContent:'space-between', gap: 4}}>
            {phases.map((p, idx) => {
              const active = i >= p.range[0] && i < p.range[1];
              const done = i >= p.range[1];
              return (
                <span key={p.label} className="mav-code" style={{
                  fontSize: 9.5, letterSpacing:'.14em', fontWeight: 500,
                  color: active ? 'var(--gold)' : done ? 'var(--dim)' : 'var(--muted)',
                  transition:'color .3s',
                }}>{p.label}</span>
              );
            })}
          </div>
        </div>
      </div>

      {/* RIGHT — artifact */}
      <div key={step.artifact} style={{display:'flex', flexDirection:'column', gap: 14}}>
        <Artifact kind={step.artifact} />
        <div style={{
          border:'1px dashed var(--line)', borderRadius: 10, padding: '10px 14px',
          display:'flex', alignItems:'center', gap: 10,
          fontSize: 11.5, color:'var(--muted)', fontFamily:'var(--mono)', letterSpacing:'.04em',
        }}>
          <Check size={11}/> Every action logged · sources attached · credits: {(i+1)*3} / 10000
        </div>
      </div>
    </div>
  );
}

window.AgentDemo = AgentDemo;
window.AGENT_STEPS = AGENT_STEPS;
