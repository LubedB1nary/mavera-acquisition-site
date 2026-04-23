'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

/**
 * AsciiFrame — wraps content with terminal-style corner brackets that
 * "draw in" on scroll-into-view. Four corner glyphs + four bar segments
 * are absolutely positioned around the content; the content flows normally.
 *
 * Usage:
 *   <AsciiFrame label="01 / signal" header="◉ live">
 *     ...your content...
 *   </AsciiFrame>
 */

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Top-left header text */
  header?: string;
  /** Bottom-right label text */
  label?: string;
  /** Disable on-scroll trigger and just render full frame */
  static?: boolean;
};

const TL = '┌';
const TR = '┐';
const BL = '└';
const BR = '┘';

export function AsciiFrame({
  children,
  className = '',
  style,
  header,
  label,
  static: isStatic = false,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [drawn, setDrawn] = useState(isStatic);

  useEffect(() => {
    if (isStatic) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ents => {
        for (const e of ents) {
          if (e.isIntersecting) {
            setDrawn(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.18 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [isStatic]);

  return (
    <div
      ref={ref}
      className={`mav-ascii-frame ${drawn ? 'is-drawn' : ''} ${className}`}
      style={{
        position: 'relative',
        padding: '22px 24px 22px',
        ...style,
      }}
    >
      <span className="mav-af-glyph mav-af-glyph--tl" aria-hidden>{TL}</span>
      <span className="mav-af-glyph mav-af-glyph--tr" aria-hidden>{TR}</span>
      <span className="mav-af-glyph mav-af-glyph--bl" aria-hidden>{BL}</span>
      <span className="mav-af-glyph mav-af-glyph--br" aria-hidden>{BR}</span>

      <span className="mav-af-bar mav-af-bar--t" aria-hidden />
      <span className="mav-af-bar mav-af-bar--b" aria-hidden />
      <span className="mav-af-bar mav-af-bar--l" aria-hidden />
      <span className="mav-af-bar mav-af-bar--r" aria-hidden />

      {(header || label) && (
        <div className="mav-af-meta" aria-hidden>
          {header && <span className="mav-af-header">{header}</span>}
          {label && <span className="mav-af-label">{label}</span>}
        </div>
      )}

      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}
