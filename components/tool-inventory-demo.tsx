'use client';
import { useState, useEffect } from 'react';

const defaultTools = [
  { id: 'websearch', name: 'Web search', cat: 'Research', desc: 'Live web + news + academic corpus.' },
  { id: 'research', name: 'Deep research', cat: 'Research', desc: '5-phase · sourced · auditable.' },
  { id: 'crm', name: 'CRM', cat: 'Sales', desc: 'Pipeline · contacts · deals.' },
  { id: 'email', name: 'Email', cat: 'Sales', desc: 'IMAP/SMTP · threaded replies.' },
  { id: 'calendar', name: 'Calendar', cat: 'Schedule', desc: 'Book · reschedule · brief.' },
  { id: 'panel', name: 'Synthetic panel', cat: 'Data', desc: '12 question types · 50+ personas.' },
  { id: 'meetings', name: 'Meeting intel', cat: 'Meetings', desc: 'Record · transcribe · extract.' },
  { id: 'docs', name: 'Documents', cat: 'Files', desc: 'Read · write · cite.' },
  { id: 'code', name: 'Code', cat: 'Build', desc: 'Run scripts · query data.' },
  { id: 'outcomes', name: 'Outcomes', cat: 'Goals', desc: 'Spawn children · schedule wake-ups.' },
  { id: 'notify', name: 'Notify', cat: 'User', desc: 'Push · iMessage · native alerts.' },
  { id: 'vault', name: 'Credential vault', cat: 'Connect', desc: 'Per-workspace or global.' },
];

const defaultScripts = [
  { title: '"Find me 5 accounts ready to buy this week"', steps: ['websearch', 'research', 'panel', 'crm', 'email'] },
  { title: '"Run a 200-persona focus group on this hero copy"', steps: ['panel', 'research', 'docs', 'notify'] },
  { title: '"Watch for CLIA filings and alert me"', steps: ['websearch', 'research', 'outcomes', 'notify'] },
  { title: '"Prep me for my 3pm with Quest"', steps: ['meetings', 'research', 'crm', 'docs', 'notify'] },
];

interface Tool { id: string; name: string; cat: string; desc: string; }
interface Script { title: string; steps: string[]; }

export function ToolInventoryDemo({ tools: toolsProp, scripts: scriptsProp }: { tools?: Tool[]; scripts?: Script[] }) {
  const tools = toolsProp || defaultTools;
  const scripts = scriptsProp || defaultScripts;

  const [scriptIdx, setScriptIdx] = useState(0);
  const [stepIdx, setStepIdx] = useState(0);
  const script = scripts[scriptIdx];
  const activeTool = script.steps[stepIdx];
  const prevTool = stepIdx > 0 ? script.steps[stepIdx - 1] : null;

  useEffect(() => {
    const t = setTimeout(() => {
      if (stepIdx < script.steps.length - 1) setStepIdx(stepIdx + 1);
      else { setStepIdx(0); setScriptIdx((scriptIdx + 1) % scripts.length); }
    }, 1400);
    return () => clearTimeout(t);
  }, [stepIdx, scriptIdx, script.steps.length, scripts.length]);

  return (
    <div style={{ border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden', background: 'var(--ink1)' }}>
      <div style={{ padding: '16px 22px', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="mav-chip-dot mav-chip-dot--live" />
          <span className="mav-code" style={{ color: 'var(--muted)', fontSize: 11, letterSpacing: '.12em' }}>MAVEN · TOOL-USE DEMO</span>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {scripts.map((_, i) => (
            <button key={i} onClick={() => { setScriptIdx(i); setStepIdx(0); }} style={{
              width: 22, height: 5, border: 0, borderRadius: 999, cursor: 'pointer',
              background: i === scriptIdx ? 'var(--gold)' : 'rgba(255,255,255,0.12)',
            }} />
          ))}
        </div>
      </div>

      <div style={{ padding: '24px 22px', borderBottom: '1px solid var(--line)', background: 'var(--ink0)' }}>
        <div className="mav-caption" style={{ marginBottom: 8 }}>User prompt</div>
        <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22, letterSpacing: '-0.01em', color: 'var(--text)' }}>
          {script.title}
        </div>
        <div style={{ marginTop: 14, display: 'flex', gap: 8, alignItems: 'center', fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '.06em' }}>
          <span>STEP {stepIdx + 1}/{script.steps.length}</span>
          <span>·</span>
          <span style={{ color: 'var(--gold)' }}>{tools.find(t => t.id === activeTool)?.name || ''}</span>
          {prevTool && <><span>·</span><span>returning result to Maven</span></>}
        </div>
      </div>

      <div style={{ padding: 22, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
        {tools.map(t => {
          const isActive = t.id === activeTool;
          const wasUsed = script.steps.slice(0, stepIdx).includes(t.id);
          return (
            <div key={t.id} style={{
              padding: 14, border: `1px solid ${isActive ? 'var(--gold)' : 'var(--line)'}`,
              borderRadius: 10, background: isActive ? 'var(--gold-dim)' : 'transparent',
              transition: 'all .25s ease', minHeight: 96, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              opacity: wasUsed ? 0.85 : 1,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="mav-code" style={{ fontSize: 9.5, color: isActive ? 'var(--gold)' : 'var(--muted)', letterSpacing: '.12em' }}>{t.cat.toUpperCase()}</span>
                {isActive && <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--gold)', animation: 'mav-pulse 1s ease-in-out infinite' }} />}
                {wasUsed && !isActive && <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="square" fill="none" /></svg>}
              </div>
              <div>
                <div style={{ fontSize: 13.5, fontWeight: 500, color: 'var(--text)', letterSpacing: '-0.01em' }}>{t.name}</div>
                <div style={{ fontSize: 11.5, color: 'var(--dim)', marginTop: 2, lineHeight: 1.4 }}>{t.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
