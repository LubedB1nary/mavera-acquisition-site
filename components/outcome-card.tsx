interface OutcomeCardProps {
  color?: string;
  name: string;
  goal: string;
  todos?: [boolean, string][];
  children?: [string, string][];
  questions?: { q: string; opts: string[] }[];
  journal?: string;
  stats?: { days?: number; progress?: string };
}

export function OutcomeCard({ color = '#c8a8ff', name, goal, todos = [], children = [], questions = [], journal, stats }: OutcomeCardProps) {
  return (
    <div style={{ border: '1px solid var(--line)', borderRadius: 12, overflow: 'hidden', background: 'var(--ink0)' }}>
      <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ width: 8, height: 8, borderRadius: 999, background: color }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 500, letterSpacing: '-0.01em' }}>{name}</div>
          <div style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--mono)', marginTop: 2 }}>daily · active · {stats?.days || 12}d old</div>
        </div>
        <span className="mav-code" style={{ fontSize: 10, color: 'var(--gold)', padding: '3px 8px', border: '1px solid var(--gold-dim)', borderRadius: 999 }}>{stats?.progress || '47%'}</span>
      </div>
      <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--line)' }}>
        <div className="mav-caption" style={{ marginBottom: 6 }}>Goal</div>
        <div style={{ fontSize: 13.5, color: 'var(--text)', fontFamily: 'var(--serif)', fontStyle: 'italic', lineHeight: 1.4 }}>{goal}</div>
      </div>
      {todos.length > 0 && (
        <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--line)' }}>
          <div className="mav-caption" style={{ marginBottom: 8 }}>To-do · {todos.filter(t => t[0]).length}/{todos.length}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {todos.map(([done, text], i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12.5, color: done ? 'var(--muted)' : 'var(--dim)', textDecoration: done ? 'line-through' : 'none' }}>
                <span style={{ width: 12, height: 12, border: `1px solid ${done ? color : 'var(--line)'}`, borderRadius: 3, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: done ? color : 'transparent', flexShrink: 0 }}>
                  {done && <svg width="8" height="8" viewBox="0 0 16 16"><path d="M3 8l3 3 7-7" stroke="var(--ink0)" strokeWidth="2" fill="none" /></svg>}
                </span>
                {text}
              </div>
            ))}
          </div>
        </div>
      )}
      {children.length > 0 && (
        <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--line)' }}>
          <div className="mav-caption" style={{ marginBottom: 8 }}>Child sessions</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {children.map(([status, purpose], i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--dim)' }}>
                <span style={{
                  fontSize: 9, padding: '2px 6px', borderRadius: 3, fontFamily: 'var(--mono)', letterSpacing: '.06em',
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
        <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--line)', background: 'rgba(200,168,255,0.06)' }}>
          <div className="mav-caption" style={{ marginBottom: 6, color: color }}>Maven has a question</div>
          <div style={{ fontSize: 13, color: 'var(--text)', marginBottom: 8 }}>{questions[0].q}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {questions[0].opts.map((o, i) => (
              <div key={i} style={{ fontSize: 12, padding: '6px 10px', border: '1px solid var(--line)', borderRadius: 6, color: 'var(--dim)' }}>{o}</div>
            ))}
          </div>
        </div>
      )}
      {journal && (
        <div style={{ padding: '14px 18px' }}>
          <div className="mav-caption" style={{ marginBottom: 6 }}>Journal · today</div>
          <div style={{ fontSize: 12.5, color: 'var(--dim)', lineHeight: 1.5 }}>{journal}</div>
        </div>
      )}
    </div>
  );
}
