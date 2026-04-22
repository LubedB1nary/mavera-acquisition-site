// Shared components used by Agents/Synthetic/Outcomes pages.

// Tool inventory grid — assistant in center, tools highlighted when
// an animated "task" walks through calling them in sequence.
function ToolInventoryDemo({ tools: toolsProp, scripts: scriptsProp }) {
  const tools = toolsProp || [
    { id:'websearch', name:'Web search', cat:'Research', desc:'Live web + news + academic corpus.' },
    { id:'research',  name:'Deep research', cat:'Research', desc:'5-phase · sourced · auditable.' },
    { id:'crm',       name:'CRM', cat:'Sales', desc:'Pipeline · contacts · deals.' },
    { id:'email',     name:'Email', cat:'Sales', desc:'IMAP/SMTP · threaded replies.' },
    { id:'calendar',  name:'Calendar', cat:'Schedule', desc:'Book · reschedule · brief.' },
    { id:'panel',     name:'Synthetic panel', cat:'Data', desc:'12 question types · 50+ personas.' },
    { id:'meetings',  name:'Meeting intel', cat:'Meetings', desc:'Record · transcribe · extract.' },
    { id:'docs',      name:'Documents', cat:'Files', desc:'Read · write · cite.' },
    { id:'code',      name:'Code', cat:'Build', desc:'Run scripts · query data.' },
    { id:'outcomes',  name:'Outcomes', cat:'Goals', desc:'Spawn children · schedule wake-ups.' },
    { id:'notify',    name:'Notify', cat:'User', desc:'Push · iMessage · native alerts.' },
    { id:'vault',     name:'Credential vault', cat:'Connect', desc:'Per-workspace or global.' },
  ];

  const scripts = scriptsProp || [
    { title:'"Find me 5 accounts ready to buy this week"',
      steps:['websearch','research','panel','crm','email'] },
    { title:'"Run a 200-persona focus group on this hero copy"',
      steps:['panel','research','docs','notify'] },
    { title:'"Watch for CLIA filings and alert me"',
      steps:['websearch','research','outcomes','notify'] },
    { title:'"Prep me for my 3pm with Quest"',
      steps:['meetings','research','crm','docs','notify'] },
  ];

  const [scriptIdx, setScriptIdx] = React.useState(0);
  const [stepIdx, setStepIdx] = React.useState(0);
  const script = scripts[scriptIdx];
  const activeTool = script.steps[stepIdx];
  const prevTool = stepIdx > 0 ? script.steps[stepIdx-1] : null;

  React.useEffect(() => {
    const t = setTimeout(() => {
      if (stepIdx < script.steps.length - 1) setStepIdx(stepIdx + 1);
      else { setStepIdx(0); setScriptIdx((scriptIdx + 1) % scripts.length); }
    }, 1400);
    return () => clearTimeout(t);
  }, [stepIdx, scriptIdx]);

  return (
    <div style={{
      border:'1px solid var(--line)', borderRadius: 16, overflow:'hidden',
      background:'var(--ink1)',
    }}>
      <div style={{padding:'16px 22px', borderBottom:'1px solid var(--line)', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <div style={{display:'flex', alignItems:'center', gap: 10}}>
          <span className="mav-chip-dot mav-chip-dot--live" style={{width:6, height:6, borderRadius:999, background:'#7ce0a8', display:'inline-block'}}/>
          <span className="mav-code" style={{color:'var(--muted)', fontSize: 11, letterSpacing:'.12em'}}>MAVEN · TOOL-USE DEMO</span>
        </div>
        <div style={{display:'flex', gap: 6}}>
          {scripts.map((s, i) => (
            <button key={i} onClick={() => { setScriptIdx(i); setStepIdx(0); }} style={{
              width: 22, height: 5, border: 0, borderRadius: 999, cursor:'pointer',
              background: i === scriptIdx ? 'var(--gold)' : 'rgba(255,255,255,0.12)',
            }}/>
          ))}
        </div>
      </div>

      <div style={{padding:'24px 22px', borderBottom:'1px solid var(--line)', background:'var(--ink0)'}}>
        <div className="mav-caption" style={{marginBottom: 8}}>User prompt</div>
        <div style={{fontFamily:'var(--serif)', fontStyle:'italic', fontSize: 22, letterSpacing:'-0.01em', color:'var(--text)'}}>
          {script.title}
        </div>
        <div style={{marginTop: 14, display:'flex', gap: 8, alignItems:'center', fontFamily:'var(--mono)', fontSize: 11, color:'var(--muted)', letterSpacing:'.06em'}}>
          <span>STEP {stepIdx+1}/{script.steps.length}</span>
          <span>·</span>
          <span style={{color:'var(--gold)'}}>{tools.find(t=>t.id===activeTool)?.name || ''}</span>
          {prevTool && <><span>·</span><span>returning result to Maven</span></>}
        </div>
      </div>

      <div style={{padding: 22, display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 10}}>
        {tools.map(t => {
          const isActive = t.id === activeTool;
          const wasUsed  = script.steps.slice(0, stepIdx).includes(t.id);
          return (
            <div key={t.id} style={{
              padding: 14, border: `1px solid ${isActive ? 'var(--gold)' : 'var(--line)'}`,
              borderRadius: 10, background: isActive ? 'var(--gold-dim)' : 'transparent',
              transition:'all .25s ease', minHeight: 96, display:'flex', flexDirection:'column', justifyContent:'space-between',
              opacity: wasUsed ? 0.85 : 1,
            }}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <span className="mav-code" style={{fontSize: 9.5, color: isActive ? 'var(--gold)' : 'var(--muted)', letterSpacing:'.12em'}}>{t.cat.toUpperCase()}</span>
                {isActive && <span style={{width: 6, height: 6, borderRadius:999, background:'var(--gold)', animation:'mav-pulse 1s ease-in-out infinite'}}/>}
                {wasUsed && !isActive && <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="square" fill="none"/></svg>}
              </div>
              <div>
                <div style={{fontSize: 13.5, fontWeight: 500, color:'var(--text)', letterSpacing:'-0.01em'}}>{t.name}</div>
                <div style={{fontSize: 11.5, color:'var(--dim)', marginTop: 2, lineHeight: 1.4}}>{t.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Calendar week grid — mirrors the Outcomes calendar in the product.
function OutcomesCalendar() {
  const days = ['Mon 14','Tue 15','Wed 16','Thu 17','Fri 18','Sat 19','Sun 20'];
  const colors = {
    growth:'#c8a8ff', science:'#a3e6c4', ops:'#b8c5ff', content:'#ff9c6b',
  };
  const outcomes = [
    { id:'growth',  name:'Q2 enterprise pipeline',   color: colors.growth  },
    { id:'science', name:'Assay performance audit',  color: colors.science },
    { id:'ops',     name:'Renewal motion v2',        color: colors.ops     },
    { id:'content', name:'Narrative refresh',        color: colors.content },
  ];
  // day → list of events
  const events = {
    0: [['growth','⚡','Wake-up · signals scan'],['ops','✓','5 contracts reviewed'],['growth','✦','Milestone: 12 new accounts qualified']],
    1: [['science','💡','Learning: variance drops 18% at n=40'],['science','⚡','Wake-up · model retrain'],['growth','✉','Outreach to Quest sent']],
    2: [['ops','📄','Output: renewal playbook v2.1'],['content','✉','Draft hero variants A/B/C'],['growth','✓','Call booked · Labcorp Ventures']],
    3: [['growth','⚡','Wake-up · pipeline review'],['science','✦','Milestone: paper sent for peer review'],['content','💡','Learning: "evidence" outperforms "proof"']],
    4: [['ops','⚡','Wake-up · renewal health'],['growth','✉','12 personalized follow-ups'],['science','📄','Output: calibration report']],
    5: [['growth','⏰','Scheduled: weekly brief']],
    6: [['growth','⏰','Scheduled: sync'],['content','⏰','Scheduled: retro']],
  };
  const moods = { 0:'🙂', 1:'🙂', 2:'😐', 3:'🙂', 4:'🙂' };
  return (
    <div style={{border:'1px solid var(--line)', borderRadius: 14, overflow:'hidden', background:'var(--ink1)'}}>
      <div style={{padding:'14px 20px', borderBottom:'1px solid var(--line)', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <div style={{display:'flex', alignItems:'center', gap: 16}}>
          <span className="mav-eyebrow">Outcomes · Apr 14 – 20</span>
          <span style={{fontSize:11, color:'var(--muted)', fontFamily:'var(--mono)', letterSpacing:'.06em'}}>WEEK 16 · 2026</span>
        </div>
        <div style={{display:'flex', gap: 6}}>
          <button style={{background:'transparent', border:'1px solid var(--line)', color:'var(--dim)', width: 28, height: 28, borderRadius: 6, cursor:'pointer'}}>‹</button>
          <button style={{background:'transparent', border:'1px solid var(--line)', color:'var(--dim)', padding:'0 12px', height: 28, borderRadius: 6, cursor:'pointer', fontSize: 12}}>Today</button>
          <button style={{background:'transparent', border:'1px solid var(--line)', color:'var(--dim)', width: 28, height: 28, borderRadius: 6, cursor:'pointer'}}>›</button>
        </div>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'repeat(7, 1fr)', borderBottom:'1px solid var(--line)'}}>
        {days.map((d, i) => (
          <div key={d} style={{padding:'16px 14px', minHeight: 220, borderRight: i<6 ? '1px solid var(--line)' : 'none', opacity: i>4 ? 0.62 : 1, display:'flex', flexDirection:'column', gap: 10}}>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
              <div style={{fontSize: 13, fontWeight: 500, color:'var(--text)'}}>{d}</div>
              {moods[i] && <div style={{fontSize: 13}}>{moods[i]}</div>}
            </div>
            <div style={{display:'flex', flexDirection:'column', gap: 6}}>
              {(events[i] || []).map(([oc, icon, text], j) => (
                <div key={j} style={{display:'flex', alignItems:'flex-start', gap: 6, fontSize: 11.5, lineHeight: 1.35, color:'var(--dim)'}}>
                  <span style={{width: 6, height: 6, marginTop: 4, borderRadius:999, background: colors[oc], flexShrink: 0}}/>
                  <span>{icon} {text}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{padding:'12px 20px', borderBottom:'1px solid var(--line)', display:'flex', gap: 22, fontSize: 11.5, color:'var(--dim)', fontFamily:'var(--mono)', letterSpacing:'.04em'}}>
        <span>5 wake-ups</span><span>·</span>
        <span>3 learnings</span><span>·</span>
        <span>2 milestones</span><span>·</span>
        <span>8 tasks</span><span>·</span>
        <span>4 outputs</span>
      </div>
      <div style={{padding:'14px 20px', display:'flex', gap: 14, flexWrap:'wrap'}}>
        {outcomes.map(o => (
          <span key={o.id} style={{display:'inline-flex', alignItems:'center', gap: 8, fontSize: 12, color:'var(--dim)'}}>
            <span style={{width: 8, height: 8, borderRadius:999, background: o.color}}/>
            {o.name}
          </span>
        ))}
      </div>
    </div>
  );
}

// Outcome kanban-style card — shows a single outcome's anatomy
function OutcomeCard({ color = '#c8a8ff', name, goal, todos = [], children = [], questions = [], journal, stats }) {
  return (
    <div style={{border:'1px solid var(--line)', borderRadius: 12, overflow:'hidden', background:'var(--ink0)'}}>
      <div style={{padding:'14px 18px', borderBottom:'1px solid var(--line)', display:'flex', alignItems:'center', gap: 10}}>
        <span style={{width: 8, height: 8, borderRadius:999, background: color}}/>
        <div style={{flex: 1}}>
          <div style={{fontSize: 14, fontWeight: 500, letterSpacing:'-0.01em'}}>{name}</div>
          <div style={{fontSize: 11, color:'var(--muted)', fontFamily:'var(--mono)', marginTop: 2}}>daily · active · {stats?.days || 12}d old</div>
        </div>
        <span className="mav-code" style={{fontSize: 10, color:'var(--gold)', padding:'3px 8px', border:'1px solid var(--gold-dim)', borderRadius: 999}}>{stats?.progress || '47%'}</span>
      </div>
      <div style={{padding:'14px 18px', borderBottom:'1px solid var(--line)'}}>
        <div className="mav-caption" style={{marginBottom: 6}}>Goal</div>
        <div style={{fontSize: 13.5, color:'var(--text)', fontFamily:'var(--serif)', fontStyle:'italic', lineHeight: 1.4}}>{goal}</div>
      </div>
      {todos.length > 0 && (
        <div style={{padding:'14px 18px', borderBottom:'1px solid var(--line)'}}>
          <div className="mav-caption" style={{marginBottom: 8}}>To-do · {todos.filter(t=>t[0]).length}/{todos.length}</div>
          <div style={{display:'flex', flexDirection:'column', gap: 6}}>
            {todos.map(([done, text], i) => (
              <div key={i} style={{display:'flex', alignItems:'center', gap: 8, fontSize: 12.5, color: done ? 'var(--muted)' : 'var(--dim)', textDecoration: done ? 'line-through' : 'none'}}>
                <span style={{width: 12, height: 12, border:`1px solid ${done ? color : 'var(--line)'}`, borderRadius: 3, display:'inline-flex', alignItems:'center', justifyContent:'center', background: done ? color : 'transparent'}}>
                  {done && <svg width="8" height="8" viewBox="0 0 16 16"><path d="M3 8l3 3 7-7" stroke="var(--ink0)" strokeWidth="2" fill="none"/></svg>}
                </span>
                {text}
              </div>
            ))}
          </div>
        </div>
      )}
      {children.length > 0 && (
        <div style={{padding:'14px 18px', borderBottom:'1px solid var(--line)'}}>
          <div className="mav-caption" style={{marginBottom: 8}}>Child sessions</div>
          <div style={{display:'flex', flexDirection:'column', gap: 6}}>
            {children.map(([status, purpose], i) => (
              <div key={i} style={{display:'flex', alignItems:'center', gap: 8, fontSize: 12, color:'var(--dim)'}}>
                <span style={{fontSize: 9, padding:'2px 6px', borderRadius: 3, fontFamily:'var(--mono)', letterSpacing:'.06em',
                  background: status === 'done' ? 'rgba(124,224,168,0.14)' : 'rgba(200,168,255,0.14)',
                  color: status === 'done' ? '#7ce0a8' : color,
                }}>{status.toUpperCase()}</span>
                {purpose}
              </div>
            ))}
          </div>
        </div>
      )}
      {questions.length > 0 && (
        <div style={{padding:'14px 18px', borderBottom:'1px solid var(--line)', background: 'rgba(200,168,255,0.06)'}}>
          <div className="mav-caption" style={{marginBottom: 6, color: color}}>Maven has a question</div>
          <div style={{fontSize: 13, color:'var(--text)', marginBottom: 8}}>{questions[0].q}</div>
          <div style={{display:'flex', flexDirection:'column', gap: 4}}>
            {questions[0].opts.map((o, i) => (
              <div key={i} style={{fontSize: 12, padding:'6px 10px', border:'1px solid var(--line)', borderRadius: 6, color:'var(--dim)'}}>{o}</div>
            ))}
          </div>
        </div>
      )}
      {journal && (
        <div style={{padding:'14px 18px'}}>
          <div className="mav-caption" style={{marginBottom: 6}}>Journal · today</div>
          <div style={{fontSize: 12.5, color:'var(--dim)', lineHeight: 1.5}}>{journal}</div>
        </div>
      )}
    </div>
  );
}

window.ToolInventoryDemo = ToolInventoryDemo;
window.OutcomesCalendar = OutcomesCalendar;
window.OutcomeCard = OutcomeCard;
