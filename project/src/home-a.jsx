// Home page — Direction A: Editorial dark, type-led hero.
// Tweaks-driven hero variants exposed via props.heroVariant ('type' | 'product' | 'portal').

function HomePageA({ heroVariant = 'type', onNav }) {
  return (
    <div className="mav-root" style={{minHeight:'100%', position:'relative'}}>
      <MavNav active="home" onNav={onNav}/>

      {/* HERO */}
      <HeroA variant={heroVariant} onNav={onNav}/>

      {/* PIPELINE */}
      <Section dense style={{padding:'40px 0 20px'}}>
        <PipelineRow />
      </Section>

      {/* AGENTS — live demo */}
      <Section eyebrow="02 · Autonomous agents">
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.25fr', gap: 64, alignItems:'start', marginBottom: 48}}>
          <div>
            <h2 className="mav-h2" style={{fontSize: 52}}>Agents that work while you sleep — <em>not copilots.</em></h2>
          </div>
          <div style={{paddingTop: 16}}>
            <p className="mav-lede" style={{maxWidth: 520}}>
              Seven specialized agents run the full sales cycle on their own: detect signals, research prospects,
              draft outreach, handle replies, qualify leads, re-engage stalled deals, prep you for meetings.
            </p>
            <p className="mav-body" style={{marginTop: 16, color:'var(--muted)'}}>
              The human closes the deal. Everything before that is handled.
            </p>
            <a onClick={() => onNav && onNav('sales-agents')} className="mav-btn mav-btn--ghost mav-btn--sm" style={{marginTop: 20, cursor:'pointer'}}>
              See the flywheel <ArrowRight size={12}/>
            </a>
          </div>
        </div>
        <AgentDemo />
        <div style={{marginTop: 20, display:'flex', gap: 10, alignItems:'center', justifyContent:'center'}}>
          <span className="mav-caption">Glengarry demo runs real CRM operations against a sandboxed dataset — every artifact above is live-generated.</span>
        </div>
      </Section>

      <AgentsGrid onNav={onNav}/>

      {/* OUTCOMES TEASER */}
      <Section eyebrow="03 · Outcomes" style={{background:'var(--ink1)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.2fr', gap: 64, alignItems:'end', marginBottom: 40}}>
          <div>
            <h2 className="mav-h2" style={{fontSize: 52}}>Hand Maven <em>a goal.</em> Not a prompt.</h2>
          </div>
          <div style={{paddingTop: 8}}>
            <p className="mav-lede" style={{maxWidth: 560}}>
              An Outcome is a long-running project with its own strategy session, schedule, child sessions, and journal. Maven
              wakes up on cadence, makes progress, asks when she needs help, and reports back.
            </p>
            <a onClick={() => onNav && onNav('outcomes')} className="mav-btn mav-btn--ghost mav-btn--sm" style={{marginTop: 20, cursor:'pointer'}}>
              See outcomes <ArrowRight size={12}/>
            </a>
          </div>
        </div>
        <OutcomesCalendar/>
      </Section>

      {/* SYNTHETIC INTELLIGENCE */}
      <Section eyebrow="04 · Synthetic intelligence">
        <div style={{display:'flex', justifyContent:'flex-end', marginBottom: -40, marginTop: -20}}>
          <a onClick={() => onNav && onNav('synthetic')} className="mav-btn mav-btn--ghost mav-btn--sm" style={{cursor:'pointer'}}>
            /synthetic — methods + audits <ArrowRight size={12}/>
          </a>
        </div>
        <SyntheticIntel/>
      </Section>

      {/* EVIDENCE */}
      <Section eyebrow="05 · Evidence layer" style={{background:'var(--ink1)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)'}}>
        <EvidenceBlock/>
      </Section>

      {/* PLATFORM OVERVIEW */}
      <Section eyebrow="06 · Platform">
        <PlatformOverview/>
      </Section>

      {/* API */}
      <Section eyebrow="07 · Developers" style={{background:'var(--ink1)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)'}}>
        <ApiTeaser onNav={onNav}/>
      </Section>

      {/* TRUST */}
      <Section eyebrow="08 · Enterprise trust">
        <TrustTeaser/>
      </Section>

      {/* PRICING TEASER */}
      <Section eyebrow="09 · Pricing" style={{paddingTop: 40}}>
        <PricingTeaser onNav={onNav}/>
      </Section>

      {/* CTA */}
      <Section dense style={{padding: '120px 0'}}>
        <ClosingCTA/>
      </Section>

      <MavFooter onNav={onNav}/>
    </div>
  );
}

// ──────────── Hero variants ────────────

function HeroA({ variant = 'type', onNav }) {
  return (
    <section style={{position:'relative', padding:'120px 0 100px', overflow:'hidden'}}>
      <HeroBg variant={variant}/>
      <div className="mav-container" style={{position:'relative', zIndex: 2}}>
        <div style={{
          display:'inline-flex', alignItems:'stretch', marginBottom: 28,
          border:'1px solid var(--line)', borderLeft:'2px solid var(--gold)',
          borderRadius: 2, overflow:'hidden', background:'rgba(255,255,255,0.02)',
          fontFamily:'var(--mono)', fontSize: 11.5, letterSpacing:'.04em',
        }}>
          <span style={{padding:'8px 12px', color:'var(--gold)', background:'var(--gold-dim)', borderRight:'1px solid var(--line)', textTransform:'uppercase'}}>
            0.9 · Preview
          </span>
          <span style={{padding:'8px 14px', color:'var(--text)', display:'inline-flex', alignItems:'center', gap: 10}}>
            Maven is now in private beta
            <a style={{color:'var(--gold)', textDecoration:'none', borderBottom:'1px solid var(--gold-dim)', paddingBottom: 1, cursor:'pointer'}}>
              Read the memo →
            </a>
          </span>
        </div>

        <h1 className="mav-h1" style={{maxWidth: 1000}}>
          Agents that walk <em>through</em> the door.
        </h1>

        <p className="mav-lede" style={{maxWidth: 560, marginTop: 32, fontSize: 20}}>
          Autonomous agents that turn live market signals into growth — with an evidence chain on every decision.
        </p>

        <div style={{display:'flex', gap: 12, marginTop: 40, alignItems:'center'}}>
          <a className="mav-btn mav-btn--primary">Start free <ArrowRight/></a>
          <a className="mav-btn mav-btn--ghost">Book a demo</a>
          <a onClick={() => onNav && onNav('api')} style={{marginLeft: 12, fontSize: 13.5, color:'var(--dim)', cursor:'pointer', display:'inline-flex', alignItems:'center', gap: 6}}>
            Or read the API docs <ArrowUpRight/>
          </a>
        </div>

        {/* Hero proof strip */}
        <div style={{marginTop: 96, display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 32, borderTop:'1px solid var(--line)', paddingTop: 32}}>
          {[
            ['98%', 'Accuracy vs. real human panels · OASIS benchmark'],
            ['50M+', 'Behavioral interactions in the synthetic layer'],
            ['295K+', 'Media sources under continuous monitoring'],
            ['9', 'Enterprise customers · SOC 2 · ISO 27001 · ISO 42001'],
          ].map(([k,v]) => (
            <div key={k} style={{display:'flex', flexDirection:'column', gap: 4}}>
              <span style={{fontSize: 34, fontFamily:'var(--sans)', fontWeight: 400, letterSpacing:'-0.03em'}}>{k}</span>
              <span className="mav-caption" style={{lineHeight:1.45, maxWidth: 220}}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroBg({ variant }) {
  if (variant === 'product') {
    // Live console preview floating behind the type
    return (
      <>
        <div style={{position:'absolute', inset:0, background:'radial-gradient(ellipse 900px 500px at 80% 30%, rgba(200,168,255,0.12), transparent 70%)'}}/>
        <div style={{position:'absolute', right:-80, top: 80, width: 720, opacity: 0.42, transform:'rotate(-4deg)'}}>
          <ImagePlaceholder label="HERO · live console" height={520}/>
        </div>
      </>
    );
  }
  if (variant === 'portal') {
    // Metaphor: the door / concentric arcs
    return (
      <div style={{position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'flex-end', paddingRight: 64}}>
        <svg width="680" height="680" viewBox="-340 -340 680 680" style={{opacity: 0.5}}>
          {[1,2,3,4,5,6,7].map(n => (
            <circle key={n} cx="0" cy="0" r={40 + n*36}
              fill="none" stroke="var(--gold)" strokeWidth="0.5"
              strokeDasharray={n % 2 ? "2 6" : undefined}
              opacity={1 - n*0.11}/>
          ))}
          <circle cx="0" cy="0" r="34" fill="var(--ink1)" stroke="var(--gold)" strokeWidth="1"/>
          <path d="M -18 -22 L -18 22 L 0 12 L 18 22 L 18 -22" fill="none" stroke="var(--gold)" strokeWidth="1.4"/>
        </svg>
      </div>
    );
  }
  // default 'type' — subtle radial + grid
  return (
    <>
      <div style={{position:'absolute', inset:0, background:'radial-gradient(ellipse 800px 600px at 70% 20%, rgba(200,168,255,0.1), transparent 60%)'}}/>
      <div style={{position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize:'64px 64px', maskImage:'radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)'}}/>
    </>
  );
}

// ──────────── Agents grid ────────────

function AgentsGrid({ onNav }) {
  const agents = [
    { code:'01', name:'Signal Scanner', desc:'Scans CLIA, news, payer policy, competitor moves, PE. Scores 0–100.' },
    { code:'02', name:'Prospect Researcher', desc:'CMS QCOR + LabScope + LinkedIn into a full prospect dossier.' },
    { code:'03', name:'Outreach Drafter', desc:'Brand-voiced, persona-calibrated, signal-aware.' },
    { code:'04', name:'Conversation Handler', desc:'Reads replies, scores sentiment, advances stages, drafts responses.' },
    { code:'05', name:'Qualifier', desc:'ICP fit · budget · authority · timeline — every factor shown.' },
    { code:'06', name:'Re-engager', desc:'Stalled deals get fresh angles, new ROI, competitive updates.' },
    { code:'07', name:'Meeting Prepper', desc:'Briefing doc 30 minutes before every call.' },
  ];
  return (
    <Section style={{paddingTop: 40}}>
      <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 1, background:'var(--line)', border:'1px solid var(--line)', borderRadius: 14, overflow:'hidden'}}>
        {agents.map(a => (
          <div key={a.code} style={{background:'var(--ink0)', padding: 24, minHeight: 180, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
            <span className="mav-code" style={{color:'var(--gold)', fontSize: 11, letterSpacing:'.1em'}}>AGENT · {a.code}</span>
            <div>
              <h3 style={{fontSize: 18, fontWeight: 500, margin:'0 0 8px', letterSpacing:'-0.01em'}}>{a.name}</h3>
              <p style={{fontSize: 13, color:'var(--dim)', margin:0, lineHeight:1.5}}>{a.desc}</p>
            </div>
          </div>
        ))}
        <a onClick={() => onNav && onNav('agents')} style={{background:'rgba(200,168,255,0.04)', padding: 24, display:'flex', flexDirection:'column', justifyContent:'space-between', cursor:'pointer', textDecoration:'none', color:'inherit'}}>
          <span className="mav-code" style={{color:'var(--gold)', fontSize: 11, letterSpacing:'.1em'}}>ALL NINE AGENTS</span>
          <div>
            <h3 style={{fontSize: 18, fontWeight: 500, margin:'0 0 8px', letterSpacing:'-0.01em'}}>Maven + eight specialists <span style={{color:'var(--gold)'}}>→</span></h3>
            <p style={{fontSize: 13, color:'var(--dim)', margin:0}}>Research · content · meetings · market intel · focus groups · ops · science. One index. Go direct, or let Maven compose.</p>
          </div>
        </a>
      </div>
    </Section>
  );
}

// ──────────── Synthetic intelligence ────────────

function SyntheticIntel() {
  const personas = [
    { tag:'GEN', name:'Millennial · Urban · Growth-minded', fit: 92 },
    { tag:'PRO', name:'CFO · Mid-market · Risk-averse', fit: 74 },
    { tag:'EXP', name:'Lab Director · ICL · Technical', fit: 88 },
    { tag:'LIF', name:'Suburban Parent · Value-seeker', fit: 66 },
  ];
  return (
    <div style={{display:'grid', gridTemplateColumns:'1fr 1.15fr', gap: 80, alignItems:'center'}}>
      <div>
        <h2 className="mav-h2">Ask your audience <em>before</em> you spend.</h2>
        <p className="mav-lede" style={{marginTop: 24}}>
          Fifty-plus AI personas, statistically validated at 98% accuracy against real human panels.
          Test any message, any creative, any strategy against your actual audience — in minutes, not weeks.
        </p>
        <ul style={{listStyle:'none', padding:0, margin:'32px 0 0', display:'flex', flexDirection:'column', gap: 12}}>
          {[
            'Focus groups with 12 question types · synthesis in minutes',
            'Content testing with structured engagement scores',
            'Video analysis — attention, clarity, emotion, CTA',
            '96% parity with traditional panels · 52+ published studies',
          ].map(line => (
            <li key={line} style={{display:'flex', gap: 10, fontSize: 14.5, color:'var(--dim)'}}>
              <Check size={14}/>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mav-card" style={{padding: 24, background:'var(--ink1)'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom: 16}}>
          <span className="mav-eyebrow">Focus group · in progress</span>
          <span className="mav-chip"><span className="mav-chip-dot mav-chip-dot--live"/>12 / 12 personas responding</span>
        </div>
        <div style={{fontSize: 15, fontFamily:'var(--serif)', fontStyle:'italic', color:'var(--text)', padding: '16px 0', borderBottom:'1px solid var(--line)', marginBottom: 16}}>
          "How does this headline land with you?" — <span style={{color:'var(--dim)', fontStyle:'normal', fontFamily:'var(--sans)', fontSize: 13}}>Open the door to growth.</span>
        </div>
        <div style={{display:'flex', flexDirection:'column', gap: 12}}>
          {personas.map(p => (
            <div key={p.tag} style={{display:'grid', gridTemplateColumns:'40px 1fr 80px', gap: 14, alignItems:'center'}}>
              <span className="mav-code" style={{fontSize: 10, color:'var(--muted)', letterSpacing:'.1em'}}>{p.tag}</span>
              <span style={{fontSize: 13}}>{p.name}</span>
              <div style={{height: 4, background:'rgba(255,255,255,0.06)', borderRadius: 2, overflow:'hidden'}}>
                <div style={{width: `${p.fit}%`, height:'100%', background:'var(--gold)'}}/>
              </div>
            </div>
          ))}
        </div>
        <div style={{marginTop: 20, padding: 14, background:'rgba(255,255,255,0.02)', border:'1px dashed var(--line)', borderRadius:10, fontSize: 12.5, color:'var(--dim)'}}>
          <span style={{color:'var(--gold)'}}>Synthesis.</span> "Growth" resonates with founders (9/12), reads generic to CFOs (2/12).
          Try "defensible growth" for financial personas — +31% resonance in prior studies.
        </div>
      </div>
    </div>
  );
}

// ──────────── Evidence ────────────

function EvidenceBlock() {
  return (
    <div style={{display:'grid', gridTemplateColumns:'1.1fr 1fr', gap: 80, alignItems:'center'}}>
      <div className="mav-card" style={{padding: 0, background:'var(--ink0)', overflow:'hidden'}}>
        <div style={{padding:'14px 18px', borderBottom:'1px solid var(--line)', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <span className="mav-eyebrow">Maven · 5-phase research</span>
          <span className="mav-code" style={{fontSize:10.5, color:'var(--muted)'}}>confidence · 0.92 · halluc. risk · low</span>
        </div>
        <div style={{padding: 20, display:'flex', flexDirection:'column', gap: 12}}>
          {[
            ['1 · Scope','Break the question into 4 sub-questions with success criteria.'],
            ['2 · Search','12 sources crawled · 34 passages retained · 4 discarded (low-evidence).'],
            ['3 · Synthesize','Conflicts reconciled. 2 contradictions flagged for user review.'],
            ['4 · Attribute','Every claim linked to its source passage · confidence per claim.'],
            ['5 · Audit','Full trail logged · user can replay reasoning step-by-step.'],
          ].map(([k,v]) => (
            <div key={k} style={{display:'grid', gridTemplateColumns:'110px 1fr', gap: 14}}>
              <span className="mav-code" style={{color:'var(--gold)', fontSize: 11, letterSpacing:'.08em'}}>{k}</span>
              <span style={{fontSize: 13, color:'var(--dim)'}}>{v}</span>
            </div>
          ))}
        </div>
        <div style={{padding:'14px 18px', borderTop:'1px solid var(--line)', fontFamily:'var(--mono)', fontSize: 11, color:'var(--muted)', letterSpacing:'.02em'}}>
          sources · CMS.gov · NEJM · Payer LCD 2026-03 · internal KB (14) · ·
        </div>
      </div>
      <div>
        <h2 className="mav-h2">Every decision comes with <em>receipts.</em></h2>
        <p className="mav-lede" style={{marginTop: 24}}>
          In a world of AI hallucination, Mavera's outputs are defensible.
          Sources cited. Confidence scored. Reasoning transparent. Actions logged.
          Every score shows its contributing factors.
        </p>
        <div style={{marginTop: 32, display:'flex', flexDirection:'column', gap: 14}}>
          {[
            ['Explainable scoring','Every lead score shows which factors contributed — no black boxes.'],
            ['Source attribution','Every claim is traceable to a passage, URL, or internal document.'],
            ['Full audit trails','Every agent action is logged · replay any decision step-by-step.'],
            ['Confidence per claim','Soft claims are marked. Halluc. risk scored. You know what to trust.'],
          ].map(([k,v]) => (
            <div key={k} style={{borderLeft:'1.5px solid var(--gold)', paddingLeft: 16}}>
              <div style={{fontSize: 14.5, fontWeight: 500, letterSpacing:'-0.01em'}}>{k}</div>
              <div style={{fontSize: 13, color:'var(--dim)', marginTop: 3}}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ──────────── Platform overview ────────────

function PlatformOverview() {
  const caps = [
    ['Responses API', 'Persona-enhanced AI. Drop-in OpenAI replacement.'],
    ['Maven', 'Deep research with source attribution.'],
    ['Personas', '50+ built-in. Custom-trained on your data.'],
    ['Focus Groups', '12 question types · synthesis engine.'],
    ['Video Analysis', 'Attention · clarity · emotion · CTA.'],
    ['News Intelligence', '295K+ sources, persona-calibrated.'],
    ['Brand Voice', 'Extracted from your existing content.'],
    ['Content Generation', 'Template-based, audience-tested.'],
    ['Meetings', 'Recording · transcript · structured extraction.'],
    ['Autonomous Sales', 'The 7-agent Glengarry module.'],
    ['CRM', 'Full pipeline. IMAP/SMTP. No third-party.'],
    ['Synthetic Data', 'FDA-accepted · differential privacy.'],
  ];
  return (
    <div>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1.1fr', gap: 80, alignItems:'end', marginBottom: 56}}>
        <h2 className="mav-h2">One platform <br/>for the <em>full growth cycle.</em></h2>
        <p className="mav-lede">
          Market intelligence → audience research → content creation → sales execution → meeting intelligence —
          all powered by the same synthetic layer, all exposed through one OpenAI-compatible API.
        </p>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 1, background:'var(--line)', border:'1px solid var(--line)', borderRadius: 14, overflow:'hidden'}}>
        {caps.map(([k, v], idx) => (
          <div key={k} style={{background:'var(--ink0)', padding: 22, minHeight: 130, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
            <span className="mav-code" style={{color:'var(--muted)', fontSize: 10.5, letterSpacing:'.1em'}}>{String(idx+1).padStart(2,'0')}</span>
            <div>
              <div style={{fontSize: 15, fontWeight: 500, letterSpacing:'-0.01em', marginBottom: 4}}>{k}</div>
              <div style={{fontSize: 12.5, color:'var(--dim)', lineHeight: 1.5}}>{v}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ──────────── API teaser ────────────

function ApiTeaser({ onNav }) {
  const [lang, setLang] = React.useState('python');
  const samples = {
    python: `from openai import OpenAI

client = OpenAI(
    api_key="mvra_live_…",
    base_url="https://app.mavera.io/api/v1",
)

response = client.responses.create(
    model="mavera-1",
    input="How do Gen Z consumers feel about remote work?",
    extra_body={"persona_id": "gen_z_consumer"},
)`,
    javascript: `import OpenAI from "openai";

const client = new OpenAI({
  apiKey: "mvra_live_…",
  baseURL: "https://app.mavera.io/api/v1",
});

const response = await client.responses.create({
  model: "mavera-1",
  input: "How do Gen Z consumers feel about remote work?",
  extra_body: { persona_id: "gen_z_consumer" },
});`,
    go: `client := openai.NewClient(
    option.WithAPIKey("mvra_live_…"),
    option.WithBaseURL("https://app.mavera.io/api/v1"),
)

res, err := client.Responses.Create(ctx, openai.ResponseNewParams{
    Model: "mavera-1",
    Input: "How do Gen Z consumers feel about remote work?",
    ExtraBody: map[string]any{"persona_id": "gen_z_consumer"},
})`,
  };
  return (
    <div style={{display:'grid', gridTemplateColumns:'1fr 1.2fr', gap: 72, alignItems:'center'}}>
      <div>
        <h2 className="mav-h2"><em>OpenAI-compatible.</em><br/>Change one line.</h2>
        <p className="mav-lede" style={{marginTop: 24}}>
          Drop-in replacement for the Responses API. Same SDKs you already use — Python, JavaScript, Go —
          plus a <span style={{color:'var(--text)'}}>persona_id</span> parameter that transforms the model into
          a behaviorally-calibrated respondent.
        </p>
        <ul style={{listStyle:'none', padding:0, margin:'28px 0 0', display:'flex', flexDirection:'column', gap: 10}}>
          {[
            '200+ workflow templates · ready-to-run',
            'Credit-based pricing · every response shows cost',
            'Built for non-developers using Claude Code, Cursor, Codex',
            '11 feature areas exposed · model: mavera-1',
          ].map(t => (
            <li key={t} style={{fontSize: 14, color:'var(--dim)', display:'flex', gap: 10}}><Check size={14}/>{t}</li>
          ))}
        </ul>
        <div style={{marginTop: 36, display:'flex', gap: 12}}>
          <a className="mav-btn mav-btn--primary" onClick={() => onNav && onNav('api')}>API overview <ArrowRight/></a>
          <a className="mav-btn mav-btn--ghost">docs.mavera.io <ArrowUpRight/></a>
        </div>
      </div>
      <CodeCard lang={lang} setLang={setLang} samples={samples}/>
    </div>
  );
}

function CodeCard({ lang, setLang, samples }) {
  const langs = [['python','Python'],['javascript','JavaScript'],['go','Go']];
  const output = [
    { sym:'▸', text:'POST /api/v1/responses', color:'var(--gold)' },
    { sym:' ', text:'model: mavera-1 · persona: gen_z_consumer', color:'var(--dim)' },
    { sym:'✓', text:'200 OK · 412 ms · credits: 3', color:'#7ce0a8' },
    { sym:' ', text:'', color:'var(--muted)' },
    { sym:' ', text:'"Remote work feels non-negotiable to my', color:'var(--text)' },
    { sym:' ', text:' generation. Return-to-office reads as', color:'var(--text)' },
    { sym:' ', text:' distrust — and a reason to leave. (92%', color:'var(--text)' },
    { sym:' ', text:' resonance across Gen Z urban cohort.)"', color:'var(--text)' },
    { sym:' ', text:'', color:'var(--muted)' },
    { sym:' ', text:'sources: 4 · confidence: 0.89 · halluc: low', color:'var(--muted)' },
  ];
  return (
    <div className="mav-card" style={{overflow:'hidden', background:'var(--ink0)'}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px 16px', borderBottom:'1px solid var(--line)'}}>
        <div style={{display:'flex', gap: 6, alignItems:'center'}}>
          <span style={{width:10, height:10, borderRadius:999, background:'rgba(255,255,255,0.08)'}}/>
          <span style={{width:10, height:10, borderRadius:999, background:'rgba(255,255,255,0.08)'}}/>
          <span style={{width:10, height:10, borderRadius:999, background:'rgba(200,168,255,0.4)'}}/>
          <span className="mav-code" style={{color:'var(--muted)', marginLeft: 10}}>mavera.{lang === 'python' ? 'py' : lang === 'javascript' ? 'ts' : 'go'}</span>
        </div>
        <div style={{display:'flex', gap: 2}}>
          {langs.map(([k,l]) => (
            <button key={k} onClick={() => setLang(k)} style={{
              background: lang === k ? 'rgba(255,255,255,0.04)' : 'transparent',
              color: lang === k ? 'var(--gold)' : 'var(--muted)',
              border: 0, padding: '4px 10px', borderRadius: 4, cursor:'pointer',
              fontFamily:'var(--mono)', fontSize: 11, letterSpacing:'.04em',
            }}>{l}</button>
          ))}
        </div>
      </div>
      <pre style={{margin: 0, padding: '20px 22px', fontFamily:'var(--mono)', fontSize: 12.5, color:'var(--text)', lineHeight: 1.65, overflow:'auto'}}>
        <code>{colorizeCode(samples[lang])}</code>
      </pre>
      <div style={{borderTop:'1px solid var(--line)', padding:'16px 22px', background:'rgba(255,255,255,0.015)'}}>
        <div className="mav-code" style={{fontSize: 10.5, color:'var(--muted)', letterSpacing:'.1em', marginBottom: 8}}>LIVE OUTPUT</div>
        <div style={{fontFamily:'var(--mono)', fontSize: 12, lineHeight: 1.55}}>
          {output.map((ln, i) => (
            <div key={i} style={{color: ln.color, display:'flex', gap: 8}}>
              <span style={{width: 12, color: ln.color, opacity: 0.7}}>{ln.sym}</span>
              <span>{ln.text || ' '}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function colorizeCode(src) {
  // Very lightweight coloring — wraps keywords/strings in spans.
  const parts = [];
  const regex = /(".*?"|'.*?'|\/\/.*|#[^\n]*|\b(?:from|import|await|const|client|response|model|base_url|baseURL|extra_body|ExtraBody|ctx|err|struct|package|options?|Options?|func|return)\b|\b[A-Z][A-Za-z]+\b)/g;
  let last = 0; let m; let i = 0;
  while ((m = regex.exec(src))) {
    if (m.index > last) parts.push(<span key={i++} style={{color:'var(--text)'}}>{src.slice(last, m.index)}</span>);
    const tok = m[0];
    let color = 'var(--text)';
    if (/^["']/.test(tok)) color = '#d8b48a';
    else if (/^(\/\/|#)/.test(tok)) color = 'var(--muted)';
    else if (/^[A-Z]/.test(tok)) color = '#c8d4e8';
    else color = '#e09a7b';
    parts.push(<span key={i++} style={{color}}>{tok}</span>);
    last = m.index + tok.length;
  }
  if (last < src.length) parts.push(<span key={i++} style={{color:'var(--text)'}}>{src.slice(last)}</span>);
  return parts;
}

// ──────────── Trust teaser ────────────

function TrustTeaser() {
  return (
    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 72, alignItems:'center'}}>
      <div>
        <h2 className="mav-h2">Built for <em>enterprise</em> from day one.</h2>
        <p className="mav-lede" style={{marginTop: 24}}>
          Most AI startups at our stage don't hold the certifications we do.
          Nine paying enterprise customers. Pipeline with household names.
          AWS infrastructure. Auth0. Full trust portal.
        </p>
        <div style={{marginTop: 28}}>
          <CertBadges />
        </div>
      </div>
      <div className="mav-card" style={{padding: 28, background:'var(--ink1)'}}>
        <div className="mav-eyebrow" style={{marginBottom: 20}}>Trust · Live posture</div>
        <div style={{display:'flex', flexDirection:'column', gap: 12}}>
          {[
            ['SOC 2 Type II','Audit renewed Q1 2026'],
            ['ISO 27001 · ISMS','Certified'],
            ['ISO 42001 · AIMS','Among first AI firms certified'],
            ['HIPAA-ready','Signed BAA available'],
            ['Sub-processors','14 listed · notified of changes'],
            ['Data residency','US · EU on enterprise'],
          ].map(([k, v]) => (
            <div key={k} style={{display:'flex', alignItems:'center', justifyContent:'space-between', paddingBottom: 12, borderBottom:'1px dashed var(--line-soft)'}}>
              <span style={{fontSize: 13.5}}>{k}</span>
              <span style={{fontSize: 12, color:'var(--dim)', fontFamily:'var(--mono)'}}>{v}</span>
            </div>
          ))}
        </div>
        <a className="mav-btn mav-btn--ghost mav-btn--sm" style={{marginTop: 20}}>Open trust portal <ArrowUpRight/></a>
      </div>
    </div>
  );
}

// ──────────── Pricing teaser ────────────

function PricingTeaser({ onNav }) {
  const tiers = [
    { name:'Starter', price:'$300', unit:'/mo', credits:'500 credits', features:['50 GB S3','Audio transcription included','Email support','$0.80/credit overage'] },
    { name:'Professional', price:'$3,500', unit:'/mo', highlight: true, credits:'10,000 credits', features:['100 GB S3','1,000 min transcription','Priority support','$0.55/credit overage','Brand voice · custom personas'] },
    { name:'Enterprise', price:'Custom', credits:'Custom credits', features:['SSO · SCIM · BAA','Dedicated CSM','Data residency','Uptime SLA','Custom integrations'] },
  ];
  return (
    <div>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'end', marginBottom: 48, gap: 48, flexWrap:'wrap'}}>
        <h2 className="mav-h2" style={{fontSize: 48}}>Transparent pricing. <em>Pay for what you use.</em></h2>
        <p className="mav-lede" style={{maxWidth: 420}}>Credit-based. Every API response shows its cost. No hidden line items.</p>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 16}}>
        {tiers.map(t => (
          <div key={t.name} style={{
            background: t.highlight ? 'var(--ink2)' : 'var(--ink1)',
            border: `1px solid ${t.highlight ? 'var(--gold-dim)' : 'var(--line)'}`,
            borderRadius: 14, padding: 28, position:'relative',
          }}>
            {t.highlight && <span style={{position:'absolute', top: 16, right: 16, fontFamily:'var(--mono)', fontSize: 10, color:'var(--gold)', letterSpacing:'.1em'}}>MOST POPULAR</span>}
            <div className="mav-eyebrow" style={{marginBottom: 8}}>{t.name}</div>
            <div style={{display:'flex', alignItems:'baseline', gap: 4, marginBottom: 4}}>
              <span style={{fontSize: 40, letterSpacing:'-0.03em', fontWeight: 500}}>{t.price}</span>
              {t.unit && <span style={{fontSize: 14, color:'var(--muted)'}}>{t.unit}</span>}
            </div>
            <div style={{fontSize: 13, color:'var(--dim)', marginBottom: 20, fontFamily:'var(--mono)'}}>{t.credits}</div>
            <div style={{height: 1, background:'var(--line)', margin:'0 0 20px'}}/>
            <ul style={{listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap: 10}}>
              {t.features.map(f => (
                <li key={f} style={{fontSize: 13, color:'var(--dim)', display:'flex', gap:10}}><Check size={13}/>{f}</li>
              ))}
            </ul>
            <a className={`mav-btn ${t.highlight ? 'mav-btn--primary' : 'mav-btn--ghost'}`} style={{marginTop: 28, width:'100%', justifyContent:'center'}}
               onClick={() => onNav && onNav('pricing')}>
              {t.name === 'Enterprise' ? 'Talk to sales' : 'Start free trial'}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

// ──────────── Closing CTA ────────────

function ClosingCTA() {
  return (
    <div style={{
      position:'relative', border:'1px solid var(--line)', borderRadius: 16, overflow:'hidden',
      padding: '80px 64px', textAlign:'center',
      background:'radial-gradient(ellipse 800px 400px at 50% 60%, rgba(200,168,255,0.15), transparent 70%), var(--ink1)',
    }}>
      <svg width="60" height="60" viewBox="-30 -30 60 60" style={{display:'block', margin:'0 auto 20px'}}>
        <circle cx="0" cy="0" r="20" fill="none" stroke="var(--gold)" strokeWidth="0.8" opacity="0.3"/>
        <circle cx="0" cy="0" r="14" fill="none" stroke="var(--gold)" strokeWidth="0.8" opacity="0.5"/>
        <path d="M-8 -10 L-8 10 L0 6 L8 10 L8 -10" fill="none" stroke="var(--gold)" strokeWidth="1.2"/>
      </svg>
      <h2 className="mav-h2" style={{fontSize: 52, maxWidth: 800, margin:'0 auto'}}>The door to <em>growth</em> is open.</h2>
      <p className="mav-lede" style={{maxWidth: 520, margin:'20px auto 0'}}>
        Start free. Deploy your first agent today. Close the deal yourself.
      </p>
      <div style={{display:'flex', gap: 12, marginTop: 36, justifyContent:'center'}}>
        <a className="mav-btn mav-btn--primary">Start free <ArrowRight/></a>
        <a className="mav-btn mav-btn--ghost">Book a demo</a>
      </div>
    </div>
  );
}

Object.assign(window, { HomePageA, HeroA });
