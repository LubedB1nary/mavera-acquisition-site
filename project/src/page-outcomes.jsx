// /outcomes — dedicated page
function OutcomesPage({ onNav }) {
  return (
    <div className="mav-root" style={{minHeight:'100%'}}>
      <MavNav active="outcomes" onNav={onNav}/>

      <Section style={{paddingTop: 96, paddingBottom: 48}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.2fr', gap: 80, alignItems:'end', marginBottom: 48}}>
          <div>
            <div className="mav-eyebrow" style={{marginBottom: 20}}>Outcomes</div>
            <h1 className="mav-h1" style={{fontSize: 92}}>Hand Maven <em>a goal.</em><br/>Not a prompt<em style={{color:'var(--gold)'}}>.</em></h1>
          </div>
          <p className="mav-lede" style={{fontSize: 21}}>
            A long-running project with its own schedule, child sessions, and journal. Maven wakes on cadence, asks when blocked, reports back.
          </p>
        </div>
      </Section>

      <Section dense style={{paddingTop: 0, paddingBottom: 80}}>
        <OutcomesCalendar/>
      </Section>

      <Section eyebrow="01 · Anatomy of an outcome" style={{background:'var(--ink1)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 28}}>
          <OutcomeCard color="#c8a8ff" name="Q2 enterprise pipeline"
            goal="Close 8 qualified enterprise deals by end of June without burning pipeline quality."
            stats={{progress:'47%', days: 12}}
            todos={[
              [true, 'Identify ICP lookalikes in CLIA dataset'],
              [true, 'Qualify top 40 targets'],
              [true, 'Draft outreach sequences per persona'],
              [false, 'Book discovery calls with top 20'],
              [false, 'Run synthetic objection panels'],
              [false, 'Close 8'],
            ]}
            children={[
              ['done','Research: top-40 target dossiers'],
              ['done','Drafts: 3 outreach sequences'],
              ['running','Wave 1 outreach to 40 accounts'],
              ['running','Re-engage Q1 closed-lost'],
            ]}
            journal="Good day. Labcorp Ventures replied positive. Quest asked for a deeper technical paper — queued research child. Mood: 🙂"
          />
          <OutcomeCard color="#a3e6c4" name="Assay performance audit"
            goal="Find and explain the variance drift in the last 90 days of plate-reader output."
            stats={{progress:'68%', days: 9}}
            todos={[
              [true, 'Pull last 90 days of plate runs from LIMS'],
              [true, 'Run change-point detection per assay'],
              [true, 'Flag 3 suspicious instrument shifts'],
              [false, 'Correlate with reagent lot numbers'],
              [false, 'Draft protocol revision'],
            ]}
            questions={[{ q: 'Include the June 3 excursion in the audit window?', opts:['Include it','Exclude as known outlier','Treat separately','Let me type a reason'] }]}
            journal="Found two likely root causes: a reagent lot change on day 34 and a thermal controller drift starting day 61. Awaiting answer. Mood: 🙂"
          />
        </div>
      </Section>

      <Section eyebrow="02 · Lifecycle">
        <div style={{display:'grid', gridTemplateColumns:'repeat(6, 1fr)', gap: 1, background:'var(--line)', border:'1px solid var(--line)', borderRadius: 12, overflow:'hidden'}}>
          {[
            ['Create','Goal + timeline + priority. Maven builds a 5-10 step plan.'],
            ['Strategize','Parent session coordinates. Spawns child sessions for work.'],
            ['Wake','Every hour / day / week, the loop runs. Resumes, doesn\'t restart.'],
            ['Ask','When blocked, Maven asks — with multiple-choice options.'],
            ['Journal','Daily mood + highlights + blockers. Tomorrow plan set.'],
            ['Complete','Outcome archived. Journal preserved. Artifacts exported.'],
          ].map(([k,v], i) => (
            <div key={k} style={{background:'var(--ink0)', padding: 18, minHeight: 180, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
              <span className="mav-code" style={{color:'var(--gold)', fontSize: 10.5, letterSpacing:'.12em'}}>{String(i+1).padStart(2,'0')}</span>
              <div>
                <div style={{fontSize: 14, fontWeight: 500, letterSpacing:'-0.01em'}}>{k}</div>
                <div style={{fontSize: 12.5, color:'var(--dim)', lineHeight: 1.5, marginTop: 6}}>{v}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="03 · Always-on" style={{background:'var(--ink1)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)'}}>
        <div style={{display:'grid', gridTemplateColumns:'1.1fr 1fr', gap: 72, alignItems:'center'}}>
          <div>
            <h2 className="mav-h2">Runs <em>when you're not looking.</em></h2>
            <p className="mav-lede" style={{marginTop: 20}}>
              macOS LaunchAgent wakes Maven even when the app is closed. iMessage pings you when she's blocked. No duplicate notifications.
            </p>
            <div style={{marginTop: 28, display:'flex', flexDirection:'column', gap: 10}}>
              {[
                ['Schedule','hourly · daily · weekly · cron'],
                ['Notify surfaces','macOS native · iMessage · in-app banner'],
                ['Storage','plain JSON on disk — portable · greppable · git-able'],
                ['Credentials','per-workspace vault · AI requests, you grant'],
              ].map(([k,v]) => (
                <div key={k} style={{display:'flex', justifyContent:'space-between', padding:'10px 14px', border:'1px solid var(--line)', borderRadius: 8, background:'var(--ink0)'}}>
                  <span style={{fontSize: 12.5, color:'var(--dim)'}}>{k}</span>
                  <span style={{fontSize: 12, color:'var(--text)', fontFamily:'var(--mono)'}}>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{padding: 24, border:'1px solid var(--line)', borderRadius: 12, background:'var(--ink0)'}}>
            <div className="mav-caption" style={{marginBottom: 14}}>iMessage · 09:47</div>
            <div style={{maxWidth: 320, background:'rgba(200,168,255,0.08)', padding:'10px 14px', borderRadius: 14, fontSize: 13.5, color:'var(--text)', marginBottom: 10}}>
              [Maven] Question for "Q2 pipeline": Labcorp Ventures is asking for a deeper technical paper. Want me to
              spawn a research child to write one?
            </div>
            <div style={{display:'flex', flexWrap:'wrap', gap: 6, marginBottom: 14}}>
              {['Yes — 2 pages','Yes — full paper','Wait for me','Let me type a reason'].map(o => (
                <span key={o} style={{fontSize: 11.5, padding:'5px 10px', border:'1px solid var(--line)', borderRadius: 999, color:'var(--dim)'}}>{o}</span>
              ))}
            </div>
            <div style={{fontSize: 11, color:'var(--muted)', fontFamily:'var(--mono)', letterSpacing:'.06em'}}>REPLIED AT 09:51 · MAVEN RESUMED SESSION</div>
          </div>
        </div>
      </Section>

      <Section dense style={{padding: '120px 0'}}><ClosingCTA/></Section>
      <MavFooter onNav={onNav}/>
    </div>
  );
}

window.OutcomesPage = OutcomesPage;
