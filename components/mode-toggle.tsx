'use client';

import { useMode } from './mode-context';

/**
 * Two-state pill switch. Sits in the nav, monospace, terminal vibe.
 * Reads/writes the global Mode context (which persists to localStorage).
 */
export function ModeToggle() {
  const { mode, setMode, ready } = useMode();

  return (
    <div
      role="group"
      aria-label="display mode"
      className="mav-mode-toggle"
      style={{
        display: 'inline-flex',
        alignItems: 'stretch',
        border: '1px solid var(--line)',
        borderRadius: 6,
        background: 'rgba(255,255,255,0.02)',
        fontFamily: 'var(--mono)',
        fontSize: 10.5,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        overflow: 'hidden',
        opacity: ready ? 1 : 0.6,
      }}
    >
      <button
        type="button"
        onClick={() => setMode('classic')}
        aria-pressed={mode === 'classic'}
        style={{
          background: mode === 'classic' ? 'rgba(200,168,255,0.10)' : 'transparent',
          color: mode === 'classic' ? 'var(--gold)' : 'var(--muted)',
          border: 'none',
          padding: '6px 10px',
          cursor: 'pointer',
          letterSpacing: 'inherit',
          textTransform: 'inherit',
          fontFamily: 'inherit',
          fontSize: 'inherit',
          transition: 'color .15s, background .15s',
        }}
      >
        ◐ classic
      </button>
      <button
        type="button"
        onClick={() => setMode('ascii')}
        aria-pressed={mode === 'ascii'}
        style={{
          background: mode === 'ascii' ? 'rgba(200,168,255,0.10)' : 'transparent',
          color: mode === 'ascii' ? 'var(--gold)' : 'var(--muted)',
          border: 'none',
          borderLeft: '1px solid var(--line)',
          padding: '6px 10px',
          cursor: 'pointer',
          letterSpacing: 'inherit',
          textTransform: 'inherit',
          fontFamily: 'inherit',
          fontSize: 'inherit',
          transition: 'color .15s, background .15s',
        }}
      >
        ◉ ascii
      </button>
    </div>
  );
}
