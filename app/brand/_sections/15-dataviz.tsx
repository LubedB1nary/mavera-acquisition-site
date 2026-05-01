'use client';
import { Section, H2, Mono, BRAND, MONO, SERIF, Spec } from '../_lib/primitives';

export default function DatavizSection() {
  return (
    <Section id="dataviz" label="15 — Data Visualization">
      <H2 sub="Charts on Mavera always carry the dark-first palette. Axes and gridlines are hairline white at low opacity. Every chart has a title and a single accent color drawn from the agent palette. No color-explosion. No 3D. No drop shadows.">
        Charts &mdash; <em style={{ color: BRAND.gold, fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400 }}>monochrome</em> by default.
      </H2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 32 }}>
        {/* Bar */}
        <div style={{
          padding: 24, borderRadius: 14,
          border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
        }}>
          <p style={{
            fontFamily: MONO, fontSize: 10, color: BRAND.textDim,
            letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 16, margin: '0 0 16px',
          }}>Bar / column</p>
          <svg viewBox="0 0 240 110" style={{ width: '100%', height: 110 }}>
            <line x1="0" y1="100" x2="240" y2="100" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
            {[0, 1, 2, 3].map(i => (
              <line key={i} x1="0" y1={i*25 + 5} x2="240" y2={i*25 + 5} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
            ))}
            {[
              { x: 12, h: 70 }, { x: 60, h: 86 }, { x: 108, h: 52 },
              { x: 156, h: 92 }, { x: 204, h: 74 },
            ].map(b => (
              <rect key={b.x} x={b.x} y={100 - b.h} width="32" height={b.h} rx="3"
                fill={BRAND.gold} fillOpacity="0.78" />
            ))}
          </svg>
          <p style={{ fontFamily: MONO, fontSize: 9.5, color: BRAND.textLow, marginTop: 8, margin: '8px 0 0' }}>
            Argus · qualified meetings per week · last 5 weeks
          </p>
        </div>

        {/* Area */}
        <div style={{
          padding: 24, borderRadius: 14,
          border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
        }}>
          <p style={{
            fontFamily: MONO, fontSize: 10, color: BRAND.textDim,
            letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 16, margin: '0 0 16px',
          }}>Line / area</p>
          <svg viewBox="0 0 240 110" style={{ width: '100%', height: 110 }}>
            {[0, 1, 2, 3].map(i => (
              <line key={i} x1="0" y1={i*25 + 5} x2="240" y2={i*25 + 5} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
            ))}
            <defs>
              <linearGradient id="bAreaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={BRAND.gold} stopOpacity="0.30" />
                <stop offset="100%" stopColor={BRAND.gold} stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <path d="M0,82 C30,72 50,30 80,42 C110,54 130,18 160,22 C190,26 210,46 240,32 L240,110 L0,110 Z"
              fill="url(#bAreaGrad)" />
            <path d="M0,82 C30,72 50,30 80,42 C110,54 130,18 160,22 C190,26 210,46 240,32"
              fill="none" stroke={BRAND.gold} strokeWidth="2" strokeLinecap="round" />
            {[[0,82],[80,42],[160,22],[240,32]].map(([x,y]) => (
              <circle key={x} cx={x} cy={y} r="3.5" fill={BRAND.gold} fillOpacity="0.9" />
            ))}
          </svg>
          <p style={{ fontFamily: MONO, fontSize: 9.5, color: BRAND.textLow, marginTop: 8, margin: '8px 0 0' }}>
            Maven · OASIS agreement · over 12 calibration runs
          </p>
        </div>
      </div>

      <Mono label="Component spec" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 24 }}>
        {[
          { name: 'Axis lines',   spec: 'stroke rgba(255,255,255,0.08) · 1px' },
          { name: 'Grid lines',   spec: 'stroke rgba(255,255,255,0.04) · 1px · dashed optional' },
          { name: 'Axis labels',  spec: 'MONO · 10 · color --muted' },
          { name: 'Bar fill',     spec: 'agent accent · fillOpacity 0.78' },
          { name: 'Line stroke',  spec: 'agent accent · 2px · linecap round · linejoin round' },
          { name: 'Area fill',    spec: 'gradient: accent 30% → accent 2% top-down' },
        ].map(r => (
          <div key={r.name} style={{
            padding: '14px 16px', borderRadius: 10,
            border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
          }}>
            <p style={{ fontSize: 12, fontWeight: 500, color: BRAND.textHigh, marginBottom: 6, margin: '0 0 6px' }}>{r.name}</p>
            <p style={{ fontFamily: MONO, fontSize: 9.5, color: BRAND.textLow, lineHeight: 1.65, margin: 0 }}>{r.spec}</p>
          </div>
        ))}
      </div>

      <Mono label="Tooltip spec" />
      <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
        <div style={{
          padding: '14px 18px', borderRadius: 10,
          border: `1px solid ${BRAND.hairline}`, background: 'rgba(11,13,16,0.95)',
          backdropFilter: 'blur(16px)', minWidth: 160,
        }}>
          <p style={{ fontFamily: MONO, fontSize: 9.5, color: BRAND.textLow, marginBottom: 6, margin: '0 0 6px' }}>Q2 · 2026</p>
          <p style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.030em', color: BRAND.gold, margin: 0 }}>0.92</p>
          <p style={{ fontFamily: MONO, fontSize: 9.5, color: BRAND.textLow, marginTop: 4, margin: '4px 0 0' }}>OASIS agreement</p>
        </div>
        <Spec rows={[
          ['bg',          'rgba(11,13,16,0.95) + blur(16px)'],
          ['border',      '1px var(--line)'],
          ['radius',      '10px'],
          ['padding',     '14px 18px'],
          ['label',       'MONO 9.5 · --muted'],
          ['value',       'agent accent · 22 · weight 500 · −0.030em'],
          ['sub-label',   'MONO 9.5 · --muted'],
        ]} />
      </div>
    </Section>
  );
}
