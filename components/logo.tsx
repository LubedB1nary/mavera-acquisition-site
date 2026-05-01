import Image from 'next/image';

interface MavLogoProps {
  size?: number;
  /** When true, renders only the knot mark without the wordmark. */
  markOnly?: boolean;
  /** Override the wordmark color. */
  color?: string;
  /** Override the mark opacity (for muted contexts). */
  markOpacity?: number;
}

/**
 * Mavera lockup: pentagonal knot mark + "Mavera" wordmark with gold serif period.
 *
 * The knot mark is a webp asset (white-on-transparent rendering achieved via
 * CSS invert filter on dark surfaces). On light surfaces, pass `color="#000"`
 * and the consuming surface should not invert.
 */
export const MavLogo = ({
  size = 20,
  markOnly = false,
  color = 'var(--text)',
  markOpacity = 0.92,
}: MavLogoProps) => {
  const markSize = Math.round(size * 1.45);

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: markOnly ? 0 : Math.round(size * 0.45),
      fontFamily: 'var(--sans)',
      fontSize: size,
      fontWeight: 500,
      letterSpacing: '-0.035em',
      color,
      lineHeight: 1,
    }}>
      <Image
        src="/mavera-logo.webp"
        alt="Mavera"
        width={markSize}
        height={markSize}
        priority
        style={{
          filter: 'invert(1)',
          opacity: markOpacity,
          flexShrink: 0,
          display: 'block',
        }}
      />
      {!markOnly && (
        <span style={{ display: 'inline-flex', alignItems: 'baseline' }}>
          <span>Mavera</span>
          <span
            style={{
              color: 'var(--gold)',
              fontFamily: 'var(--serif)',
              fontStyle: 'italic',
              fontWeight: 400,
              marginLeft: 1,
            }}
          >
            .
          </span>
        </span>
      )}
    </span>
  );
};
