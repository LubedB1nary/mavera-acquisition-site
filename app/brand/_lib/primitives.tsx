'use client';

import React, { ReactNode } from 'react';

// ── Font shortcuts ─────────────────────────────────────────────
export const MONO  = 'var(--mono)';
export const SANS  = 'var(--sans)';
export const SERIF = 'var(--serif)';

// ── Brand-page color tokens ───────────────────────────────────
// (lightly tuned versions of the acquisition-site CSS vars,
//  written as concrete values so the brand book renders crisply
//  even when imported into a different surface)
export const BRAND = {
  bg:        '#07080a',
  surface1:  'rgba(255,255,255,0.02)',
  surface2:  'rgba(255,255,255,0.035)',
  hairline:  'rgba(255,255,255,0.07)',
  hairlineSoft: 'rgba(255,255,255,0.04)',
  text:      'rgba(237,236,230,0.95)',
  textHigh:  'rgba(237,236,230,0.88)',
  textMed:   'rgba(237,236,230,0.62)',
  textLow:   'rgba(237,236,230,0.38)',
  textDim:   'rgba(237,236,230,0.22)',
  textGhost: 'rgba(237,236,230,0.12)',
  gold:      '#c8a8ff',
  goldSoft:  '#dcc4ff',
  goldDim:   'rgba(200,168,255,0.14)',
  green:     '#7ce0a8',
  amber:     '#ffb87c',
  rose:      '#ff8aa8',
  blue:      '#9ec1ff',
};

// ── Section wrapper ────────────────────────────────────────────
export function Section({
  children,
  label,
  id,
}: {
  children: ReactNode;
  label?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      style={{
        maxWidth: 980,
        margin: '0 auto',
        padding: '88px 56px',
        borderBottom: `1px solid ${BRAND.hairline}`,
        pageBreakBefore: 'auto',
      }}
    >
      {label && (
        <p
          style={{
            fontFamily: MONO,
            fontSize: 10,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: BRAND.textDim,
            marginBottom: 40,
          }}
        >
          {label}
        </p>
      )}
      {children}
    </section>
  );
}

// ── Headings ───────────────────────────────────────────────────
export function H2({
  children,
  sub,
  italicTail,
}: {
  children: ReactNode;
  sub?: string;
  /** When provided, renders a serif-italic accent at the end of the heading. */
  italicTail?: string;
}) {
  return (
    <div style={{ marginBottom: sub ? 18 : 36 }}>
      <h2
        style={{
          fontFamily: SANS,
          fontSize: 38,
          fontWeight: 500,
          letterSpacing: '-0.035em',
          color: BRAND.textHigh,
          lineHeight: 1.05,
          margin: 0,
        }}
      >
        {children}
        {italicTail && (
          <>
            {' '}
            <em
              style={{
                fontFamily: SERIF,
                fontStyle: 'italic',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                color: BRAND.gold,
              }}
            >
              {italicTail}
            </em>
          </>
        )}
      </h2>
      {sub && (
        <p
          style={{
            fontSize: 14.5,
            fontWeight: 400,
            color: BRAND.textLow,
            lineHeight: 1.7,
            maxWidth: 600,
            marginTop: 14,
            marginBottom: 36,
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3
      style={{
        fontFamily: SANS,
        fontSize: 16,
        fontWeight: 500,
        letterSpacing: '-0.015em',
        color: BRAND.textHigh,
        marginBottom: 16,
        marginTop: 36,
      }}
    >
      {children}
    </h3>
  );
}

// ── Mono section label ────────────────────────────────────────
export function Mono({ label }: { label: string }) {
  return (
    <p
      style={{
        fontFamily: MONO,
        fontSize: 10,
        letterSpacing: '0.13em',
        textTransform: 'uppercase',
        color: BRAND.textDim,
        marginBottom: 14,
        marginTop: 32,
      }}
    >
      {label}
    </p>
  );
}

// ── Key/value spec table ──────────────────────────────────────
export function Spec({ rows }: { rows: [string, string][] }) {
  return (
    <div
      style={{
        borderRadius: 10,
        border: `1px solid ${BRAND.hairline}`,
        overflow: 'hidden',
      }}
    >
      {rows.map(([k, v], i) => (
        <div
          key={k + i}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 16px',
            background: i % 2 === 0 ? BRAND.surface1 : 'transparent',
            borderBottom:
              i < rows.length - 1 ? `1px solid ${BRAND.hairlineSoft}` : 'none',
            gap: 16,
          }}
        >
          <span
            style={{
              fontFamily: MONO,
              fontSize: 10,
              color: BRAND.textLow,
              letterSpacing: '0.04em',
            }}
          >
            {k}
          </span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 10,
              color: BRAND.textMed,
              textAlign: 'right',
            }}
          >
            {v}
          </span>
        </div>
      ))}
    </div>
  );
}

// ── Color swatch ──────────────────────────────────────────────
export function Swatch({
  color,
  name,
  variable,
  note,
}: {
  color: string;
  name: string;
  variable?: string;
  note?: string;
}) {
  return (
    <div>
      <div
        className="no-invert"
        style={{
          width: '100%',
          height: 56,
          borderRadius: 8,
          background: color,
          border: `1px solid ${BRAND.hairline}`,
          marginBottom: 9,
        }}
      />
      <p style={{ fontSize: 12.5, fontWeight: 500, color: BRAND.textHigh, marginBottom: 2 }}>
        {name}
      </p>
      {variable && (
        <p style={{ fontFamily: MONO, fontSize: 10, color: BRAND.textLow, marginBottom: 2 }}>
          {variable}
        </p>
      )}
      <p
        style={{
          fontFamily: MONO,
          fontSize: 10,
          color: BRAND.textLow,
          letterSpacing: '0.03em',
        }}
      >
        {color.toUpperCase()}
      </p>
      {note && (
        <p style={{ fontSize: 11, fontWeight: 400, color: BRAND.textLow, marginTop: 4, lineHeight: 1.55 }}>
          {note}
        </p>
      )}
    </div>
  );
}

// ── Avoid / Use copy pair ─────────────────────────────────────
export function CopyPair({
  bad,
  good,
  label,
}: {
  bad: string;
  good: string;
  label?: string;
}) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
      {label && (
        <p
          style={{
            fontFamily: MONO,
            fontSize: 10,
            color: BRAND.textDim,
            letterSpacing: '0.10em',
            textTransform: 'uppercase',
            gridColumn: '1/-1',
            marginBottom: 4,
          }}
        >
          {label}
        </p>
      )}
      <div
        style={{
          padding: '14px 16px',
          borderRadius: 8,
          border: '1px solid rgba(255,138,168,0.20)',
          background: 'rgba(255,138,168,0.04)',
        }}
      >
        <span
          style={{
            fontFamily: MONO,
            fontSize: 10,
            color: BRAND.rose,
            letterSpacing: '0.08em',
            marginBottom: 8,
            display: 'block',
          }}
        >
          ✕  AVOID
        </span>
        <p style={{ fontSize: 13, fontWeight: 400, color: BRAND.textMed, lineHeight: 1.65 }}>
          {bad}
        </p>
      </div>
      <div
        style={{
          padding: '14px 16px',
          borderRadius: 8,
          border: '1px solid rgba(124,224,168,0.22)',
          background: 'rgba(124,224,168,0.04)',
        }}
      >
        <span
          style={{
            fontFamily: MONO,
            fontSize: 10,
            color: BRAND.green,
            letterSpacing: '0.08em',
            marginBottom: 8,
            display: 'block',
          }}
        >
          ✓  USE
        </span>
        <p style={{ fontSize: 13, fontWeight: 400, color: BRAND.textMed, lineHeight: 1.65 }}>
          {good}
        </p>
      </div>
    </div>
  );
}

// ── Do / Don't grid ───────────────────────────────────────────
export function DoDont({
  items,
  cols = 3,
}: {
  items: { do: boolean; title: string; note: string }[];
  cols?: 2 | 3;
}) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 8 }}>
      {items.map((r) => (
        <div
          key={r.title}
          style={{
            padding: 16,
            borderRadius: 10,
            border: `1px solid ${
              r.do ? 'rgba(124,224,168,0.22)' : 'rgba(255,138,168,0.20)'
            }`,
            background: r.do ? 'rgba(124,224,168,0.03)' : 'rgba(255,138,168,0.03)',
          }}
        >
          <span
            style={{
              fontSize: 10,
              color: r.do ? BRAND.green : BRAND.rose,
              fontFamily: MONO,
              letterSpacing: '0.08em',
              marginBottom: 6,
              display: 'block',
            }}
          >
            {r.do ? "✓  DO" : "✕  DON'T"}
          </span>
          <p style={{ fontSize: 12.5, fontWeight: 500, color: BRAND.textHigh, marginBottom: 5 }}>
            {r.title}
          </p>
          <p style={{ fontSize: 11.5, fontWeight: 400, color: BRAND.textLow, lineHeight: 1.65 }}>
            {r.note}
          </p>
        </div>
      ))}
    </div>
  );
}

// ── Card / panel ──────────────────────────────────────────────
export function Card({
  children,
  padding = 22,
  style,
}: {
  children: ReactNode;
  padding?: number;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        padding,
        borderRadius: 12,
        border: `1px solid ${BRAND.hairline}`,
        background: BRAND.surface1,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ── Inline code chip ──────────────────────────────────────────
export function Code({ children }: { children: ReactNode }) {
  return (
    <code
      style={{
        fontFamily: MONO,
        fontSize: 11,
        color: BRAND.gold,
        background: BRAND.goldDim,
        padding: '1px 6px',
        borderRadius: 3,
      }}
    >
      {children}
    </code>
  );
}

// ── Pre-formatted code block ──────────────────────────────────
export function Pre({ children }: { children: string }) {
  return (
    <div
      style={{
        borderRadius: 12,
        border: `1px solid ${BRAND.hairline}`,
        overflow: 'hidden',
        background: BRAND.surface1,
      }}
    >
      <pre
        style={{
          padding: '22px 26px',
          fontFamily: MONO,
          fontSize: 11.5,
          color: BRAND.textHigh,
          lineHeight: 1.85,
          margin: 0,
          whiteSpace: 'pre',
          overflowX: 'auto',
        }}
      >
        {children}
      </pre>
    </div>
  );
}
