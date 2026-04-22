// /agents · index page
function AgentsIndexPage({ onNav }) {
  const squads = [
    { id:'agents-assistant', code:'00', name:'Maven', tag:'Generalized', desc:'One assistant. Every tool. Runs the full stack for you — or composes any specialist.', featured: true },
    { id:'sales-agents',     code:'01', name:'Sales',        tag:'7-agent flywheel',  desc:'Signal · research · draft · handle · qualify · re-engage · prep.' },
    { id:'agents-research',  code:'02', name:'Research',     tag:'Deep 5-phase',      desc:'Scope · search · synthesize · attribute · audit. Per-claim confidence.' },
    { id:'agents-content',   code:'03', name:'Content',      tag:'Brand voice',       desc:'Writes in your voice. Audience-tested before it ships.' },
    { id:'agents-meetings',  code:'04', name:'Meetings',     tag:'Record · extract',  desc:'Transcription, structured extraction, meeting prep 30 min prior.' },
    { id:'agents-market',    code:'05', name:'Market intel', tag:'Signals',           desc:'295K+ sources under continuous monitoring. Alerts on thresholds.' },
    { id:'agents-focus',     code:'06', name:'Focus groups', tag:'Synthetic panels',  desc:'50+ personas · 12 question types · synthesis engine.' },
    { id:'agents-ops',       code:'07', name:'Ops',          tag:'CRM · automations', desc:'Pipeline · IMAP/SMTP · playbooks · no third-party needed.' },
    { id:'agents-science',   code:'08', name:'Science',      tag:'ML training',       desc:'Train, evaluate, deploy. Synthetic + real data. Audit-ready.' },
  ];

  return (
    <div className="mav-root" style={{minHeight:'100%'}}>
      <MavNav active="agents" onNav={onNav}/>

      <Section style={{paddingTop: 96, paddingBottom: 40}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.2fr', gap: 80, alignItems:'end', marginBottom: 56}}>
          <div>
            <div className="mav-eyebrow" style={{marginBottom: 20}}>Agents · index</div>
            <h1 className="mav-h1" style={{fontSize: 84}}>Nine agents. <em>One system.</em></h1>
          </div>
          <p className="mav-lede" style={{fontSize: 20}}>
            Maven wields every tool. Eight specialists go deep. Compose through her, or go direct.
          </p>
        </div>

        <ToolInventoryDemo />
      </Section>

      <Section eyebrow="Specialists">
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 1, background:'var(--line)', border:'1px solid var(--line)', borderRadius: 14, overflow:'hidden'}}>
          {squads.map(s => (
            <a key={s.id} onClick={() => onNav && onNav(s.id)}
               style={{
                 cursor:'pointer', padding: 28, minHeight: 220, display:'flex', flexDirection:'column', justifyContent:'space-between',
                 background: s.featured ? 'rgba(200,168,255,0.04)' : 'var(--ink0)',
                 transition:'background .15s', textDecoration:'none', color:'inherit',
               }}
               onMouseEnter={e => { if (!s.featured) e.currentTarget.style.background='rgba(255,255,255,0.02)'; }}
               onMouseLeave={e => { if (!s.featured) e.currentTarget.style.background='var(--ink0)'; }}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
                <span className="mav-code" style={{color: s.featured ? 'var(--gold)' : 'var(--muted)', fontSize: 11, letterSpacing:'.12em'}}>AGENT · {s.code}</span>
                {s.featured && <span className="mav-code" style={{fontSize: 10, color:'var(--gold)', padding:'3px 8px', border:'1px solid var(--gold-dim)', borderRadius: 999, letterSpacing:'.1em'}}>FEATURED</span>}
              </div>
              <div>
                <div style={{display:'flex', alignItems:'baseline', gap: 10, marginBottom: 6}}>
                  <h3 style={{fontSize: 24, fontWeight: 500, letterSpacing:'-0.02em', margin: 0}}>{s.name}</h3>
                  <span style={{fontSize: 12, color:'var(--muted)', fontFamily:'var(--mono)'}}>{s.tag}</span>
                </div>
                <div style={{fontSize: 13.5, color:'var(--dim)', lineHeight: 1.5, marginBottom: 14}}>{s.desc}</div>
                <span className="mav-code" style={{fontSize: 11, color:'var(--gold)', letterSpacing:'.06em'}}>Visit →</span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Section dense style={{padding: '120px 0'}}><ClosingCTA/></Section>
      <MavFooter onNav={onNav}/>
    </div>
  );
}

// Re-usable sub-page scaffold for every specialist.
function AgentSubPage({ onNav, id, code, name, tag, tagline, body, tools, metrics, sections }) {
  return (
    <div className="mav-root" style={{minHeight:'100%'}}>
      <MavNav active={id} onNav={onNav}/>

      <Section style={{paddingTop: 96, paddingBottom: 72}}>
        <div style={{marginBottom: 20}}>
          <a onClick={() => onNav && onNav('agents')} style={{fontSize: 12, color:'var(--muted)', fontFamily:'var(--mono)', letterSpacing:'.08em', cursor:'pointer'}}>
            ← ALL AGENTS
          </a>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.1fr', gap: 80, alignItems:'start'}}>
          <div>
            <div className="mav-eyebrow" style={{marginBottom: 16}}>Agent · {code} · {tag}</div>
            <h1 className="mav-h1" style={{fontSize: 96}}>{name}<em style={{color:'var(--gold)'}}>.</em></h1>
          </div>
          <div style={{paddingTop: 24}}>
            <p className="mav-lede" style={{fontSize: 22, marginBottom: 24}}>{tagline}</p>
            <p className="mav-body" style={{color:'var(--muted)'}}>{body}</p>
          </div>
        </div>
      </Section>

      {metrics && (
        <Section dense style={{background:'var(--ink1)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)', padding:'56px 0'}}>
          <div style={{display:'grid', gridTemplateColumns:`repeat(${metrics.length}, 1fr)`, gap: 1, background:'var(--line)', border:'1px solid var(--line)', borderRadius: 10, overflow:'hidden'}}>
            {metrics.map(([v, l]) => (
              <div key={l} style={{background:'var(--ink1)', padding: 28}}>
                <div style={{fontFamily:'var(--serif)', fontSize: 48, letterSpacing:'-0.02em', color:'var(--text)'}}>{v}</div>
                <div style={{fontSize: 12, color:'var(--dim)', marginTop: 6, fontFamily:'var(--mono)', letterSpacing:'.06em'}}>{l}</div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {sections && sections.map((sec, i) => (
        <Section key={i} eyebrow={sec.eyebrow} style={sec.alt ? {background:'var(--ink1)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)'} : {}}>
          {sec.render()}
        </Section>
      ))}

      {tools && (
        <Section eyebrow="Tools this agent uses">
          <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 1, background:'var(--line)', border:'1px solid var(--line)', borderRadius: 12, overflow:'hidden'}}>
            {tools.map(t => (
              <div key={t[0]} style={{background:'var(--ink0)', padding: 18, minHeight: 100, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <span className="mav-code" style={{fontSize: 10, color:'var(--gold)', letterSpacing:'.12em'}}>{t[0].toUpperCase()}</span>
                <div>
                  <div style={{fontSize: 13.5, fontWeight: 500}}>{t[1]}</div>
                  <div style={{fontSize: 11.5, color:'var(--dim)', marginTop: 4}}>{t[2]}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section dense style={{padding: '120px 0'}}><ClosingCTA/></Section>
      <MavFooter onNav={onNav}/>
    </div>
  );
}

// ── individual agent pages ──

function AgentsAssistantPage({ onNav }) {
  return <AgentSubPage onNav={onNav} id="agents-assistant" code="00" name="Maven" tag="Generalized"
    tagline="One assistant. Every tool on the platform. Runs in your desktop app or your browser."
    body="Maven is the generalized Mavera assistant. She can run web searches, open your CRM, spawn a synthetic focus group, record a meeting, draft brand-voiced content, and coordinate the sales flywheel — the same things our specialists do, but orchestrated by one conversation. She's built for the moments where you don't know which agent you need."
    metrics={[['180+','tools available'], ['~$0.40','median cost / task'], ['12 s','median latency to first tool call']]}
    sections={[
      { eyebrow:'01 · Watch Maven compose', render: () => <ToolInventoryDemo /> },
      { eyebrow:'02 · Live examples', alt: true, render: () => (
        <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap: 24}}>
          {[
            ['Sales motion','"Find me 5 Labcorp-adjacent accounts with CLIA movement this month." Maven pulls filings, cross-refs your CRM, drafts outreach, books follow-ups.'],
            ['Meeting prep','"Prep me for my 3pm with Quest." Maven reads the last 14 days of correspondence, runs a 50-persona synthetic check on your proposal, writes the brief.'],
            ['Focus group','"Run 200 mid-market CFOs against these three pricing pages." Maven spins a synthetic panel, synthesizes the transcripts, ships a Loom-style walkthrough.'],
            ['Scientific audit','"Find anomalies in the last month of assay runs." Maven queries LIMS, runs statistical tests, flags outliers with confidence bands and suggested cause.'],
          ].map(([h, p]) => (
            <div key={h} style={{padding: 24, border:'1px solid var(--line)', borderRadius: 12, background:'var(--ink0)'}}>
              <div style={{fontSize: 15, fontWeight: 500, marginBottom: 8, letterSpacing:'-0.01em'}}>{h}</div>
              <div style={{fontSize: 13.5, color:'var(--dim)', lineHeight: 1.55}}>{p}</div>
            </div>
          ))}
        </div>
      )},
    ]}
    tools={[
      ['research','Deep research','5-phase sourced synthesis'],
      ['crm','CRM','Native pipeline & contacts'],
      ['email','Email','IMAP/SMTP threaded'],
      ['calendar','Calendar','Book · reschedule · brief'],
      ['panel','Synthetic panel','50+ personas'],
      ['meetings','Meeting intel','Record · extract'],
      ['docs','Documents','Read · write · cite'],
      ['code','Code','Run · query · plot'],
    ]}/>;
}

function AgentsResearchPage({ onNav }) {
  return <AgentSubPage onNav={onNav} id="agents-research" code="02" name="Research" tag="Deep 5-phase"
    tagline="Scope · search · synthesize · attribute · audit. Every claim sourced. Every inference scored."
    body="The Research squad runs long-form research jobs that would take a senior analyst a day. The 5-phase pipeline produces per-claim confidence scores, a hallucination-risk flag on every section, and a replayable reasoning trace. Nothing is a black box; every step is auditable."
    metrics={[['0.92','median confidence'], ['≤3%','hallucination rate'], ['40+','source types indexed']]}
    sections={[
      { eyebrow:'01 · The 5-phase pipeline', render: () => (
        <div style={{display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap: 1, background:'var(--line)', border:'1px solid var(--line)', borderRadius: 12, overflow:'hidden'}}>
          {[
            ['Scope','Frame the question. Identify constraints.'],
            ['Search','40+ source types. News, filings, papers, web.'],
            ['Synthesize','Cross-reference. Extract claims.'],
            ['Attribute','Every claim linked to a source span.'],
            ['Audit','Score confidence. Flag hallucination risk.'],
          ].map(([k, v], i) => (
            <div key={k} style={{background:'var(--ink0)', padding: 20, minHeight: 180, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
              <span className="mav-code" style={{color:'var(--gold)', fontSize: 10.5, letterSpacing:'.12em'}}>{String(i+1).padStart(2,'0')}</span>
              <div>
                <div style={{fontSize: 15, fontWeight: 500, letterSpacing:'-0.01em'}}>{k}</div>
                <div style={{fontSize: 12.5, color:'var(--dim)', lineHeight: 1.5, marginTop: 6}}>{v}</div>
              </div>
            </div>
          ))}
        </div>
      )},
    ]}
    tools={[
      ['websearch','Web search','Live web + news corpus'],
      ['research','Deep research','5-phase sourced'],
      ['docs','Documents','Read · cite'],
      ['code','Code','Run statistical checks'],
    ]}/>;
}

function AgentsContentPage({ onNav }) {
  return <AgentSubPage onNav={onNav} id="agents-content" code="03" name="Content" tag="Brand voice"
    tagline="Writes in your voice. Tested against your audience before it ships."
    body="The Content squad trains on your top-performing copy and your top human writers. Every draft runs through a synthetic audience panel before it reaches your inbox. You see not just the copy, but the panel's reaction — pull-quote, confusion points, predicted click-through."
    sections={[
      { eyebrow:'01 · Brand-voice training', render: () => (
        <div style={{display:'grid', gridTemplateColumns:'1.2fr 1fr', gap: 48, alignItems:'center'}}>
          <div>
            <h2 className="mav-h2" style={{fontSize: 44}}>Your voice, <em>distilled.</em></h2>
            <p className="mav-lede" style={{marginTop: 24}}>
              Point at your last 200 assets. Maven learns rhythm, cadence, metaphor. Ships with a similarity score and diff view.
            </p>
          </div>
          <div style={{padding: 22, border:'1px solid var(--line)', borderRadius: 12, background:'var(--ink0)'}}>
            <div className="mav-caption" style={{marginBottom: 10}}>Style fingerprint</div>
            {[
              ['Sentence length','14.2 words · ±3.1'],
              ['Reading level','Grade 9'],
              ['Punctuation','em-dashes · colons · italics'],
              ['Metaphor','engineering · craft · fieldwork'],
              ['Forbidden','"unlock" · "seamless" · "synergize"'],
            ].map(([k,v]) => (
              <div key={k} style={{display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid var(--line-soft)', fontSize: 12.5}}>
                <span style={{color:'var(--dim)'}}>{k}</span>
                <span style={{color:'var(--text)', fontFamily:'var(--mono)', fontSize: 11.5}}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      )},
    ]}
    tools={[
      ['panel','Synthetic panel','50+ personas'],
      ['research','Research','Ground claims'],
      ['docs','Documents','Read · cite'],
      ['crm','CRM','Pull examples'],
    ]}/>;
}

function AgentsMeetingsPage({ onNav }) {
  return <AgentSubPage onNav={onNav} id="agents-meetings" code="04" name="Meetings" tag="Record · extract"
    tagline="Record, transcribe, structurally extract, and prep — 30 minutes before every call."
    body="The Meetings squad turns a 45-minute call into a briefing you can act on in 2 minutes. Structured extraction gives you decisions, next steps, open questions, risks — each linked back to the timecode. Prep briefs arrive 30 minutes before every call, grounded in the last 90 days of correspondence and CRM state."
    metrics={[['45m','call → 2m brief'], ['96%','transcript accuracy'], ['30m','prep lead-time']]}
    tools={[
      ['meetings','Meeting intel','Record · transcribe'],
      ['research','Research','Prep context'],
      ['crm','CRM','Pull history'],
      ['calendar','Calendar','Event binding'],
    ]}/>;
}

function AgentsMarketPage({ onNav }) {
  return <AgentSubPage onNav={onNav} id="agents-market" code="05" name="Market intel" tag="Signals"
    tagline="295K+ sources under continuous monitoring. Trending, personalized, alert-aware."
    body="The Market Intel squad is always watching. CLIA filings, payer bulletins, competitor moves, funding rounds, executive transitions, regulatory changes — every signal is scored 0–100 for intent, personalized to your ICP, and surfaced the moment it crosses a threshold you set."
    metrics={[['295K+','sources'], ['~40','signal types'], ['<60s','median alert latency']]}
    tools={[
      ['websearch','Web search','Live · news · academic'],
      ['research','Research','Enrich signals'],
      ['notify','Notify','Push · iMessage'],
      ['outcomes','Outcomes','Drive action'],
    ]}/>;
}

function AgentsFocusPage({ onNav }) {
  return <AgentSubPage onNav={onNav} id="agents-focus" code="06" name="Focus groups" tag="Synthetic panels"
    tagline="50+ built-in personas. 12 question types. Synthesis engine reads the transcripts for you."
    body="The Focus Groups squad lets you run a 200-panelist focus group in 12 minutes for what a real panel would cost in a week. Personas are built-in or custom-trained on your customer data; question types include open, Likert, card-sort, preference, maxdiff, conjoint, and more."
    metrics={[['200','panelists / group'], ['12 m','typical runtime'], ['12','question types']]}
    tools={[
      ['panel','Synthetic panel','Built-in + custom'],
      ['research','Research','Ground the synthesis'],
      ['docs','Documents','Transcripts · reports'],
      ['notify','Notify','Share with team'],
    ]}/>;
}

function AgentsOpsPage({ onNav }) {
  return <AgentSubPage onNav={onNav} id="agents-ops" code="07" name="Ops" tag="CRM · automations"
    tagline="Native pipeline. IMAP/SMTP. Playbooks. No third-party tax, no broken integration."
    body="The Ops squad runs the pipeline you'd otherwise pay Salesforce and a dozen middleware vendors for. Native CRM, native inbox via IMAP/SMTP, playbook automations, renewal motion, enrichment, deduplication — all under one audit log."
    tools={[
      ['crm','CRM','Native'],
      ['email','Email','IMAP/SMTP'],
      ['calendar','Calendar','Bidirectional'],
      ['outcomes','Outcomes','Playbooks'],
    ]}/>;
}

// AgentsSciencePage is defined in page-agent-science.jsx (bespoke build)

window.AgentsIndexPage = AgentsIndexPage;
window.AgentsAssistantPage = AgentsAssistantPage;
window.AgentsResearchPage = AgentsResearchPage;
window.AgentsContentPage = AgentsContentPage;
window.AgentsMeetingsPage = AgentsMeetingsPage;
window.AgentsMarketPage = AgentsMarketPage;
window.AgentsFocusPage = AgentsFocusPage;
window.AgentsOpsPage = AgentsOpsPage;
// AgentsSciencePage exported from page-agent-science.jsx
