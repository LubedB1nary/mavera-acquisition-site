'use client';

const days = ['Mon 14', 'Tue 15', 'Wed 16', 'Thu 17', 'Fri 18', 'Sat 19', 'Sun 20'];
const colors: Record<string, string> = {
  growth: '#c8a8ff', science: '#a3e6c4', ops: '#b8c5ff', content: '#ff9c6b',
};
const outcomes = [
  { id: 'growth', name: 'Q2 enterprise pipeline', color: colors.growth },
  { id: 'science', name: 'Assay performance audit', color: colors.science },
  { id: 'ops', name: 'Renewal motion v2', color: colors.ops },
  { id: 'content', name: 'Narrative refresh', color: colors.content },
];
const events: Record<number, [string, string, string][]> = {
  0: [['growth', '⚡', 'Wake-up · signals scan'], ['ops', '✓', '5 contracts reviewed'], ['growth', '✦', 'Milestone: 12 new accounts qualified']],
  1: [['science', '💡', 'Learning: variance drops 18% at n=40'], ['science', '⚡', 'Wake-up · model retrain'], ['growth', '✉', 'Outreach to Quest sent']],
  2: [['ops', '📄', 'Output: renewal playbook v2.1'], ['content', '✉', 'Draft hero variants A/B/C'], ['growth', '✓', 'Call booked · Labcorp Ventures']],
  3: [['growth', '⚡', 'Wake-up · pipeline review'], ['science', '✦', 'Milestone: paper sent for peer review'], ['content', '💡', 'Learning: "evidence" outperforms "proof"']],
  4: [['ops', '⚡', 'Wake-up · renewal health'], ['growth', '✉', '12 personalized follow-ups'], ['science', '📄', 'Output: calibration report']],
  5: [['growth', '⏰', 'Scheduled: weekly brief']],
  6: [['growth', '⏰', 'Scheduled: sync'], ['content', '⏰', 'Scheduled: retro']],
};
const moods: Record<number, string> = { 0: '🙂', 1: '🙂', 2: '😐', 3: '🙂', 4: '🙂' };

export function OutcomesCalendar() {
  return (
    <div style={{ border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden', background: 'var(--ink1)' }}>
      <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span className="mav-eyebrow">Outcomes · Apr 14 – 20</span>
          <span style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--mono)', letterSpacing: '.06em' }}>WEEK 16 · 2026</span>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <button style={{ background: 'transparent', border: '1px solid var(--line)', color: 'var(--dim)', width: 28, height: 28, borderRadius: 6, cursor: 'pointer' }}>‹</button>
          <button style={{ background: 'transparent', border: '1px solid var(--line)', color: 'var(--dim)', padding: '0 12px', height: 28, borderRadius: 6, cursor: 'pointer', fontSize: 12 }}>Today</button>
          <button style={{ background: 'transparent', border: '1px solid var(--line)', color: 'var(--dim)', width: 28, height: 28, borderRadius: 6, cursor: 'pointer' }}>›</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', borderBottom: '1px solid var(--line)' }}>
        {days.map((d, i) => (
          <div key={d} style={{
            padding: '16px 14px', minHeight: 220, borderRight: i < 6 ? '1px solid var(--line)' : 'none',
            opacity: i > 4 ? 0.62 : 1, display: 'flex', flexDirection: 'column', gap: 10,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)' }}>{d}</div>
              {moods[i] && <div style={{ fontSize: 13 }}>{moods[i]}</div>}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {(events[i] || []).map(([oc, icon, text], j) => (
                <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 6, fontSize: 11.5, lineHeight: 1.35, color: 'var(--dim)' }}>
                  <span style={{ width: 6, height: 6, marginTop: 4, borderRadius: 999, background: colors[oc], flexShrink: 0 }} />
                  <span>{icon} {text}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: '12px 20px', borderBottom: '1px solid var(--line)', display: 'flex', gap: 22, fontSize: 11.5, color: 'var(--dim)', fontFamily: 'var(--mono)', letterSpacing: '.04em' }}>
        <span>5 wake-ups</span><span>·</span>
        <span>3 learnings</span><span>·</span>
        <span>2 milestones</span><span>·</span>
        <span>8 tasks</span><span>·</span>
        <span>4 outputs</span>
      </div>
      <div style={{ padding: '14px 20px', display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        {outcomes.map(o => (
          <span key={o.id} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--dim)' }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: o.color }} />
            {o.name}
          </span>
        ))}
      </div>
    </div>
  );
}
