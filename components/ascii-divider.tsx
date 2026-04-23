'use client';

/**
 * AsciiDivider — a horizontal break between sections rendered in monospace.
 *
 * Three variants:
 *   - 'flow'   : flowing block-char gradient that subtly drifts (animated)
 *   - 'tick'   : tick-mark ruler-style line (static, useful for dense pages)
 *   - 'route'  : ┄┈─┄ pattern with branching tee glyphs (static)
 *
 * Always wraps in mav-container width; renders as a tall single line.
 */

type Props = {
  variant?: 'flow' | 'tick' | 'route';
  label?: string;
  marginY?: number;
};

const FLOW_PATTERN =
  '░░▒▒▓▓██▓▓▒▒░░    ░░▒▒▓▓██▓▓▒▒░░  ░░▒▒▓▓████▓▓▒▒░░    ░░▒▒▓▓▓▓▒▒░░  ';
const TICK_PATTERN = '┈┈┄┈┈┄┈┈┄┈┈┄┈┈';
const ROUTE_PATTERN = '─┄─┄─┬─┄─┄─┴─┄─┄─┬─┄─┄─';

export function AsciiDivider({ variant = 'flow', label, marginY = 56 }: Props) {
  const pattern =
    variant === 'flow' ? FLOW_PATTERN : variant === 'tick' ? TICK_PATTERN : ROUTE_PATTERN;
  const wide = pattern.repeat(40); // long enough to cover any viewport at any font size

  return (
    <div
      className="mav-container"
      aria-hidden
      style={{
        margin: `${marginY}px auto`,
        position: 'relative',
        height: 32,
      }}
    >
      <div
        className={`mav-ascii-divider mav-ascii-divider--${variant}`}
        style={{
          position: 'relative',
          overflow: 'hidden',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
        }}
      >
        <span
          className={variant === 'flow' ? 'mav-ascii-divider__scroll' : ''}
          style={{
            fontFamily: 'var(--mono)',
            fontSize: variant === 'flow' ? 14 : 13,
            letterSpacing: '0.02em',
            color: variant === 'flow' ? 'rgba(200,168,255,0.20)' : 'var(--faint)',
            whiteSpace: 'nowrap',
            textShadow: variant === 'flow' ? '0 0 8px rgba(200,168,255,0.18)' : 'none',
            display: 'inline-block',
            willChange: 'transform',
          }}
        >
          {wide}
        </span>

        {label && (
          <span
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              padding: '4px 14px',
              background: 'var(--ink0)',
              fontFamily: 'var(--mono)',
              fontSize: 10.5,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              border: '1px solid var(--line)',
              borderRadius: 999,
            }}
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
