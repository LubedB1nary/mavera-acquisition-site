'use client';
import { useState, useEffect } from 'react';
import { MavNav } from '@/components/nav';
import { MavFooter } from '@/components/footer';
import { Section } from '@/components/section';
import { ClosingCTA } from '@/components/closing-cta';
import { AgentDemo } from '@/components/agent-demo';
import { PipelineRow } from '@/components/pipeline-row';
import { AsciiTorus } from '@/components/ascii-torus';
import { AsciiTelemetry } from '@/components/ascii-telemetry';
import { ArrowRight } from '@/components/icons';

const stages = [
  { n: '01', agent: 'Signal Scanner',       artifact: 'Series B · Northwind · Relevance 92' },
  { n: '02', agent: 'Prospect Researcher',  artifact: 'Dossier · 1,200 staff · overhead $2.1M' },
  { n: '03', agent: 'Outreach Drafter',     artifact: 'Draft · VP Operations persona · signal-tied' },
  { n: '04', agent: 'Conversation Handler', artifact: 'Reply received · sentiment +0.62 · interested' },
  { n: '05', agent: 'Qualifier',            artifact: 'ICP fit 87/100 · decision-maker confirmed' },
  { n: '06', agent: 'Re-engager',           artifact: 'Stalled deal · fresh angle · new ROI data' },
  { n: '07', agent: 'Meeting Prepper',      artifact: 'Brief · 30 min before · objections + ask' },
];

const roster = [
  { name: 'Signal Scanner',       role: 'Detection',   desc: 'Monitors funding news, executive hires, press wires, competitor moves, PE activity. Everything scored 0–100.' },
  { name: 'Prospect Researcher',  role: 'Research',    desc: 'Crunchbase · Apollo · LinkedIn. Builds a defensible dossier per prospect.' },
  { name: 'Outreach Drafter',     role: 'Generation',  desc: 'Writes in your brand voice, calibrated to persona, anchored to a triggering signal.' },
  { name: 'Conversation Handler', role: 'Response',    desc: 'Reads replies. Scores sentiment. Advances stages. Drafts contextual follow-ups.' },
  { name: 'Qualifier',            role: 'Judgment',    desc: 'ICP fit · budget · authority · need · timeline. Every contributing factor visible.' },
  { name: 'Re-engager',           role: 'Recovery',    desc: 'Surfaces stalled deals with fresh angles, new ROI data, competitive updates.' },
  { name: 'Meeting Prepper',      role: 'Brief',       desc: 'Briefing doc 30 minutes before the call: talking points, objections, recommended ask.' },
];

function StageRail() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % stages.length), 2000);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden', background: 'var(--ink1)' }}>
      {stages.map((s, i) => {
        const isActive = i === active;
        const done = i < active;
        return (
          <div key={s.n} style={{
            padding: '18px 22px',
            borderBottom: i < stages.length - 1 ? '1px solid var(--line)' : 'none',
            display: 'grid', gridTemplateColumns: '60px 180px 1fr 12px',
            alignItems: 'center', gap: 20, transition: 'background .3s',
            background: isActive ? 'rgba(200,168,255,0.05)' : 'transparent',
          }}>
            <span className="mav-code" style={{ fontSize: 22, color: isActive ? 'var(--gold)' : done ? 'var(--dim)' : 'var(--muted)' }}>{s.n}</span>
            <span style={{ fontSize: 14, fontWeight: 500, color: isActive ? 'var(--text)' : 'var(--dim)' }}>{s.agent}</span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11.5, color: isActive ? 'var(--text)' : 'var(--muted)', letterSpacing: '.02em' }}>{s.artifact}</span>
            <span style={{
              width: 8, height: 8, borderRadius: 999,
              background: isActive ? 'var(--gold)' : done ? 'var(--dim)' : 'var(--line)',
              boxShadow: isActive ? '0 0 0 4px rgba(200,168,255,0.18)' : 'none',
              transition: 'all .3s',
            }} />
          </div>
        );
      })}
    </div>
  );
}

export default function SalesAgentsPage() {
  return (
    <>
      <MavNav />
      <section style={{ padding: '120px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 900px 500px at 70% 30%, rgba(200,168,255,0.12), transparent 60%)' }} />
        <div className="mav-container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="mav-eyebrow" style={{ marginBottom: 24 }}>/ agents / sales</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.05fr) minmax(440px, 540px)', gap: 64, alignItems: 'start' }}>
            <div>
              <h1 className="mav-h1" style={{ fontSize: 76 }}>The <em>Argus</em> flywheel.</h1>
              <p className="mav-lede" style={{ maxWidth: 540, marginTop: 28 }}>
                Seven specialists running the full sales cycle autonomously. Signal detection, prospect research,
                outreach, reply handling, qualification, re-engagement, meeting prep. You close.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
                <a href="#" className="mav-btn mav-btn--primary">Book a walkthrough <ArrowRight /></a>
                <a href="#" className="mav-btn mav-btn--ghost">See the API</a>
              </div>
            </div>
            {/* Argus orbit: 3D ASCII torus with three orbiting satellites + live telemetry readout */}
            <div
              aria-hidden
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
                paddingTop: 4,
              }}
            >
              <AsciiTorus cols={70} rows={26} scale={1.05} />
              <AsciiTelemetry />
            </div>
          </div>
        </div>
      </section>

      <Section dense style={{ padding: '40px 0 20px' }}>
        <PipelineRow />
      </Section>

      <Section eyebrow="Flywheel">
        <div style={{ marginBottom: 28, maxWidth: 720 }}>
          <h2 className="mav-h2">Seven agents. One loop. Always running.</h2>
        </div>
        <StageRail />
      </Section>

      <Section eyebrow="Live run" style={{ background: 'var(--ink1)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ marginBottom: 40 }}>
          <h2 className="mav-h2">Watch twelve steps run against a <em>sandboxed dataset.</em></h2>
        </div>
        <AgentDemo />
      </Section>

      <Section eyebrow="Roster">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {roster.map(a => (
            <div key={a.name} className="mav-card" style={{ padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <div style={{ fontSize: 17, fontWeight: 500, letterSpacing: '-0.01em' }}>{a.name}</div>
                <span className="mav-code" style={{ fontSize: 10, color: 'var(--gold)', padding: '3px 8px', border: '1px solid var(--gold-dim)', borderRadius: 999, letterSpacing: '.06em' }}>{a.role.toUpperCase()}</span>
              </div>
              <p style={{ fontSize: 13.5, color: 'var(--dim)', margin: 0, lineHeight: 1.55 }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section dense style={{ padding: '120px 0' }}>
        <ClosingCTA />
      </Section>
      <MavFooter />
    </>
  );
}
