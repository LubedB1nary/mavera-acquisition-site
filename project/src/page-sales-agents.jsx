// Sales Agents subpage — the Flywheel metaphor page (trimmed of duplicated
// generic sections; platform/pricing/trust live on their own pages).

function SalesAgentsPage({ onNav }) {
  return (
    <div className="mav-root" style={{minHeight:'100%', position:'relative'}}>
      <MavNav active="sales-agents" onNav={onNav}/>
      <HeroSalesAgents onNav={onNav}/>

      <Section dense style={{padding:'36px 0 0'}}>
        <PipelineRow label="In active pipeline with"/>
      </Section>

      <Section eyebrow="02 · The flywheel">
        <FlywheelExplain/>
      </Section>

      <Section eyebrow="03 · Live run" style={{background:'var(--ink1)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.2fr', gap: 72, alignItems:'start', marginBottom: 40}}>
          <h2 className="mav-h2">Watch the cycle <em>run.</em></h2>
          <p className="mav-lede">Sandboxed Glengarry run — same code, same agents. Twelve steps, signal to brief.</p>
        </div>
        <AgentDemo />
      </Section>

      <Section eyebrow="04 · Seven specialists">
        <AgentRoster/>
      </Section>

      <Section eyebrow="05 · Synthetic intelligence" style={{background:'var(--ink1)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)'}}>
        <SyntheticIntel/>
      </Section>

      <Section eyebrow="06 · Evidence">
        <EvidenceBlock/>
      </Section>

      <Section dense style={{padding: '120px 0'}}><ClosingCTA/></Section>

      <MavFooter onNav={onNav}/>
    </div>
  );
}

function HeroSalesAgents({ onNav }) {
  return (
    <section style={{position:'relative', padding:'120px 0 100px', overflow:'hidden'}}>
      <div style={{position:'absolute', inset:0, background:'radial-gradient(ellipse 1200px 700px at 70% 50%, rgba(200,168,255,0.12), transparent 60%)'}}/>
      <div className="mav-container" style={{position:'relative', display:'grid', gridTemplateColumns:'1fr 1fr', gap: 80, alignItems:'center'}}>
        <div>
          <div className="mav-chip" style={{marginBottom: 28}}>
            <span className="mav-chip-dot mav-chip-dot--live"/>
            <span>Sales Agents · the growth flywheel</span>
          </div>
          <h1 className="mav-h1" style={{fontSize: 80}}>
            Seven agents. <em>One compounding cycle.</em>
          </h1>
          <p className="mav-lede" style={{maxWidth: 480, marginTop: 28, fontSize: 19}}>
            Signal to close, compounding. Every deal sharpens the next cycle.
          </p>
          <div style={{display:'flex', gap: 12, marginTop: 36}}>
            <a className="mav-btn mav-btn--primary">Book a demo <ArrowRight/></a>
            <a onClick={() => onNav && onNav('api')} className="mav-btn mav-btn--ghost" style={{cursor:'pointer'}}>View the API</a>
          </div>
          <div style={{marginTop: 56}}>
            <CertBadges/>
          </div>
        </div>
        <div style={{position:'relative', display:'flex', alignItems:'center', justifyContent:'flex-end'}}>
          <OrbitDiagram/>
        </div>
      </div>
    </section>
  );
}

// Editorial "signal → deal" schematic. Replaces the spinning orbit.
// Seven stations in a vertical pipeline. Each stage shows the artifact it
// produces + a condensed sample of that artifact. One station lights up at a
// time (cycling every ~2s) without rotating anything — information, not spin.
function OrbitDiagram() {
  const stages = [
    { code:'01', name:'Signal Scanner',   verb:'detects',   artifact:'Signal', sample:'LabCorp · CLIA expansion · score 0.87' },
    { code:'02', name:'Researcher',       verb:'profiles',  artifact:'Dossier', sample:'14 pages · 38 sources · 4 decision-makers' },
    { code:'03', name:'Drafter',          verb:'composes',  artifact:'Outreach', sample:'Subject · 3 variants · brand-voice 0.94' },
    { code:'04', name:'Handler',          verb:'replies',   artifact:'Thread', sample:'Positive · intent: evaluation · stage ↑' },
    { code:'05', name:'Qualifier',        verb:'scores',    artifact:'Fit brief', sample:'ICP 9/10 · budget ✓ · timeline Q3' },
    { code:'06', name:'Re-engager',       verb:'revives',   artifact:'Re-entry', sample:'48 stalled · 6 qualified for wave 2' },
    { code:'07', name:'Prepper',          verb:'briefs',    artifact:'Call brief', sample:'T-30 min · 5 risks · 3 pull-quotes' },
  ];

  const [active, setActive] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % stages.length), 2000);
    return () => clearInterval(t);
  }, []);

  const Row = ({ s, i }) => {
    const isActive = i === active;
    return (
      <div style={{
        position:'relative', display:'grid',
        gridTemplateColumns:'56px 1fr 220px', gap: 16, alignItems:'center',
        padding:'14px 18px',
        borderTop: i === 0 ? '1px solid var(--line)' : 'none',
        borderBottom:'1px solid var(--line)',
        background: isActive ? 'rgba(200,168,255,0.05)' : 'transparent',
        transition:'background .4s ease',
      }}>
        {/* Connecting rail */}
        {i < stages.length - 1 && (
          <div style={{position:'absolute', left: 40, top:'100%', width: 1, height: 12, background:'var(--line)'}}/>
        )}
        {/* Stage index */}
        <div style={{
          width: 36, height: 36, borderRadius: 2,
          border:`1px solid ${isActive ? 'var(--gold)' : 'var(--line)'}`,
          background: isActive ? 'var(--gold-dim)' : 'transparent',
          display:'flex', alignItems:'center', justifyContent:'center',
          fontFamily:'var(--mono)', fontSize: 11, letterSpacing:'.06em',
          color: isActive ? 'var(--gold)' : 'var(--muted)',
          transition:'all .3s ease',
        }}>{s.code}</div>

        {/* Agent + verb */}
        <div>
          <div style={{display:'flex', alignItems:'baseline', gap: 10, marginBottom: 3}}>
            <span style={{fontSize: 15, fontWeight: 500, letterSpacing:'-0.01em', color: isActive ? 'var(--text)' : 'var(--dim)'}}>{s.name}</span>
            <span style={{fontSize: 11.5, fontFamily:'var(--serif)', fontStyle:'italic', color:'var(--muted)'}}>{s.verb}</span>
          </div>
          <div style={{fontSize: 11.5, color:'var(--muted)', fontFamily:'var(--mono)', letterSpacing:'.02em'}}>
            → {s.artifact.toLowerCase()}
          </div>
        </div>

        {/* Artifact sample */}
        <div style={{
          padding:'8px 10px', border:'1px solid var(--line)', borderRadius: 4,
          background: isActive ? 'var(--ink0)' : 'transparent',
          fontFamily:'var(--mono)', fontSize: 10.5, color: isActive ? 'var(--text)' : 'var(--muted)',
          letterSpacing:'.02em', lineHeight: 1.4, transition:'all .3s ease',
        }}>
          <div style={{fontSize: 9, color:'var(--gold)', letterSpacing:'.12em', marginBottom: 3}}>{s.artifact.toUpperCase()}</div>
          {s.sample}
        </div>
      </div>
    );
  };

  return (
    <div style={{width:'100%', maxWidth: 520}}>
      {/* Header */}
      <div style={{
        display:'flex', justifyContent:'space-between', alignItems:'flex-end',
        marginBottom: 16, paddingBottom: 10,
      }}>
        <div>
          <div className="mav-eyebrow" style={{marginBottom: 6}}>Signal → Deal · 7 stages</div>
          <div style={{fontFamily:'var(--serif)', fontStyle:'italic', fontSize: 22, letterSpacing:'-0.01em', color:'var(--text)'}}>
            Mavera intelligence layer
          </div>
        </div>
        <div style={{textAlign:'right', fontFamily:'var(--mono)', fontSize: 10.5, color:'var(--muted)', letterSpacing:'.06em'}}>
          <div>LIVE · sandbox</div>
          <div style={{color:'var(--gold)', marginTop: 2}}>T+{String(active*18+4).padStart(3,'0')}s</div>
        </div>
      </div>

      {stages.map((s, i) => <Row key={s.code} s={s} i={i}/>)}

      {/* Feedback loop */}
      <div style={{
        marginTop: 18, padding:'14px 18px',
        border:'1px dashed var(--line)', borderRadius: 6,
        display:'flex', alignItems:'center', gap: 14,
        fontSize: 12, color:'var(--dim)',
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M20 12a8 8 0 1 1-2.34-5.66" stroke="var(--gold)" strokeWidth="1.4" strokeLinecap="square"/>
          <path d="M20 4v4h-4" stroke="var(--gold)" strokeWidth="1.4" strokeLinecap="square" fill="none"/>
        </svg>
        <div style={{flex: 1}}>
          <span style={{color:'var(--text)'}}>Closed deals teach the layer.</span>
          <span style={{marginLeft: 8}}>Next cycle sharper — scoring, voice, timing, all tuned to outcomes.</span>
        </div>
      </div>
    </div>
  );
}

function FlywheelExplain() {
  const steps = [
    ['Signals detected','News · CLIA · payer policy · competitor moves — continuously.'],
    ['Prospects researched','Full dossiers: volume, platform, pain, decision-makers.'],
    ['Outreach sent','Brand-voiced, persona-calibrated, signal-tied.'],
    ['Replies handled','Sentiment scored, intents classified, responses drafted.'],
    ['Deals qualified','ICP fit with explainable scoring — every factor shown.'],
    ['Meetings prepped','Briefings 30 minutes before every call.'],
    ['Deals closed','Outcomes feed the intelligence layer — next cycle is sharper.'],
  ];
  return (
    <div>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1.1fr', gap: 80, alignItems:'end', marginBottom: 48}}>
        <h2 className="mav-h2">From signal to close, <em>compounding.</em></h2>
        <p className="mav-lede">
          Every cycle feeds back. Cost per deal falls, precision rises.
        </p>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(7, 1fr)', gap: 1, background:'var(--line)', border:'1px solid var(--line)', borderRadius: 14, overflow:'hidden'}}>
        {steps.map(([k,v], i) => (
          <div key={k} style={{background:'var(--ink0)', padding: 20, minHeight: 200, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
            <span className="mav-code" style={{fontSize: 10.5, color:'var(--gold)', letterSpacing:'.1em'}}>{String(i+1).padStart(2,'0')}</span>
            <div>
              <div style={{fontSize: 14, fontWeight: 500, letterSpacing:'-0.01em'}}>{k}</div>
              <div style={{fontSize: 12, color:'var(--dim)', lineHeight: 1.5, marginTop: 6}}>{v}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Detailed roster of the seven agents — unique to sales-agents subpage
function AgentRoster() {
  const roster = [
    { code:'01', name:'Signal Scanner', role:'Watches 40+ sources — news, CLIA filings, payer bulletins, competitor moves — and scores intent in real time.' },
    { code:'02', name:'Researcher', role:'Builds a full dossier on every qualifying account: volume, platform, stack, decision-makers, recent hires.' },
    { code:'03', name:'Drafter', role:'Writes persona-calibrated outreach grounded in the signal. Brand voice is learned from your top reps.' },
    { code:'04', name:'Handler', role:'Replies in-thread: classifies intent, routes objections, books time when a human isn\'t required.' },
    { code:'05', name:'Qualifier', role:'Scores ICP fit with an explainable rubric — every factor and weighting surfaced to the rep.' },
    { code:'06', name:'Re-engager', role:'Monitors closed-lost and paused accounts for new signals, and reopens the loop at the right moment.' },
    { code:'07', name:'Prepper', role:'Delivers a meeting brief 30 minutes before every call: pain, precedent, next-best-action.' },
  ];
  return (
    <div>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1.1fr', gap: 80, alignItems:'end', marginBottom: 40}}>
        <h2 className="mav-h2">Seven agents. <em>One team.</em></h2>
        <p className="mav-lede">
          Specialized, swappable, observable. Every artifact traces back to its signal.
        </p>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap: 1, background:'var(--line)', border:'1px solid var(--line)', borderRadius: 14, overflow:'hidden'}}>
        {roster.map((a) => (
          <div key={a.code} style={{background:'var(--ink0)', padding: 28, display:'grid', gridTemplateColumns:'60px 1fr', gap: 20, alignItems:'start'}}>
            <div style={{
              fontFamily:'var(--mono)', fontSize: 11, color:'var(--gold)', letterSpacing:'.1em',
              padding:'4px 8px', border:'1px solid var(--gold-dim)', borderRadius: 6,
              textAlign:'center', width:'fit-content',
            }}>{a.code}</div>
            <div>
              <div style={{fontSize: 16, fontWeight: 500, letterSpacing:'-0.01em', marginBottom: 6}}>{a.name}</div>
              <div style={{fontSize: 13.5, color:'var(--dim)', lineHeight: 1.55}}>{a.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

window.SalesAgentsPage = SalesAgentsPage;
