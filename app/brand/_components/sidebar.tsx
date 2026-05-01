'use client';

import { useCallback } from 'react';
import { NAV_ITEMS, ABRIDGED_IDS, NavItem } from '../_lib/nav';
import { BRAND, MONO } from '../_lib/primitives';
import { BRAND_MARKDOWN } from '../_lib/markdown';

interface SidebarProps {
  mode: 'full' | 'abridged';
  onModeChange: (m: 'full' | 'abridged') => void;
  exporting: boolean;
  onPrint: () => void;
}

export function Sidebar({ mode, onModeChange, exporting, onPrint }: SidebarProps) {
  const exportMarkdown = useCallback(() => {
    const blob = new Blob([BRAND_MARKDOWN], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mavera-brand-guidelines${mode === 'abridged' ? '-abridged' : ''}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [mode]);

  const visibleNav: NavItem[] = mode === 'abridged'
    ? NAV_ITEMS.filter((n) => ABRIDGED_IDS.has(n.id))
    : NAV_ITEMS;

  return (
    <aside
      className="no-print brand-sidebar"
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        width: 240,
        borderRight: `1px solid ${BRAND.hairline}`,
        background: 'rgba(7,8,10,0.97)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 50,
      }}
    >
      {/* Brand mark + title */}
      <div
        style={{
          padding: '20px 18px 16px',
          borderBottom: `1px solid ${BRAND.hairline}`,
          flexShrink: 0,
        }}
      >
        <a
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 9,
            textDecoration: 'none',
            marginBottom: 14,
          }}
        >
          <img
            src="/mavera-logo.webp"
            alt=""
            width={20}
            height={20}
            style={{ filter: 'invert(1)', opacity: 0.9 }}
          />
          <span
            style={{
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '-0.025em',
              color: BRAND.text,
              fontFamily: 'var(--sans)',
            }}
          >
            Mavera
            <span
              style={{
                color: BRAND.gold,
                fontFamily: 'var(--serif)',
                fontStyle: 'italic',
                fontWeight: 400,
              }}
            >
              .
            </span>
          </span>
        </a>
        <p
          style={{
            fontFamily: MONO,
            fontSize: 9,
            color: BRAND.textDim,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          / brand · v1.0
        </p>
      </div>

      {/* Mode toggle + exports */}
      <div
        style={{
          padding: '16px 18px',
          borderBottom: `1px solid ${BRAND.hairline}`,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: 'flex',
            background: BRAND.surface1,
            border: `1px solid ${BRAND.hairline}`,
            borderRadius: 8,
            padding: 3,
            gap: 2,
            marginBottom: 10,
          }}
        >
          {(['full', 'abridged'] as const).map((m) => (
            <button
              key={m}
              onClick={() => onModeChange(m)}
              style={{
                flex: 1,
                padding: '6px 0',
                borderRadius: 5,
                background: mode === m ? 'rgba(255,255,255,0.10)' : 'transparent',
                color: mode === m ? BRAND.text : BRAND.textLow,
                fontSize: 10,
                fontWeight: 500,
                cursor: 'pointer',
                border: 'none',
                transition: 'all .15s',
                letterSpacing: '0.02em',
                fontFamily: MONO,
                textTransform: 'capitalize',
              }}
            >
              {m}
            </button>
          ))}
        </div>
        {mode === 'abridged' && (
          <p
            style={{
              fontFamily: MONO,
              fontSize: 8.5,
              color: BRAND.textLow,
              letterSpacing: '0.04em',
              lineHeight: 1.55,
              marginBottom: 10,
              padding: '7px 9px',
              background: BRAND.surface1,
              borderRadius: 5,
              border: `1px solid ${BRAND.hairline}`,
              margin: '0 0 10px',
            }}
          >
            Identity · Voice · Logo · Color
            <br />
            Typography · Buttons · Motion · Tokens
          </p>
        )}
        <button
          onClick={onPrint}
          disabled={exporting}
          style={{
            width: '100%',
            padding: '9px 12px',
            borderRadius: 7,
            background: exporting ? BRAND.textLow : BRAND.text,
            color: BRAND.bg,
            fontSize: 11,
            fontWeight: 600,
            cursor: exporting ? 'wait' : 'pointer',
            border: 'none',
            letterSpacing: '-0.01em',
            marginBottom: 6,
            opacity: exporting ? 0.6 : 1,
            transition: 'opacity .15s',
            fontFamily: 'var(--sans)',
          }}
        >
          {exporting ? 'Preparing…' : `↓ Export PDF${mode === 'abridged' ? ' (abridged)' : ''}`}
        </button>
        <button
          onClick={exportMarkdown}
          style={{
            width: '100%',
            padding: '8px 12px',
            borderRadius: 7,
            background: 'transparent',
            border: `1px solid ${BRAND.hairline}`,
            color: BRAND.textMed,
            fontSize: 11,
            fontWeight: 500,
            cursor: 'pointer',
            letterSpacing: '-0.01em',
            transition: 'border-color .15s, color .15s',
            fontFamily: 'var(--sans)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.22)';
            (e.currentTarget as HTMLButtonElement).style.color = BRAND.text;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = BRAND.hairline;
            (e.currentTarget as HTMLButtonElement).style.color = BRAND.textMed;
          }}
        >
          ↓ Markdown
        </button>
        <p
          style={{
            marginTop: 10,
            fontFamily: MONO,
            fontSize: 8,
            color: BRAND.textGhost,
            letterSpacing: '0.04em',
            lineHeight: 1.55,
          }}
        >
          Chrome · Save as PDF
          <br />
          Enable Background graphics
        </p>
      </div>

      {/* Nav items */}
      <nav style={{ overflowY: 'auto', flex: 1, padding: '12px 0' }}>
        {visibleNav.map((n) => (
          <a
            key={n.id}
            href={`#${n.id}`}
            style={{
              display: 'block',
              padding: '6px 22px',
              fontFamily: MONO,
              fontSize: 9,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: BRAND.textLow,
              textDecoration: 'none',
              transition: 'color .12s, background .12s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = BRAND.text;
              e.currentTarget.style.background = BRAND.surface1;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = BRAND.textLow;
              e.currentTarget.style.background = 'transparent';
            }}
          >
            {n.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
