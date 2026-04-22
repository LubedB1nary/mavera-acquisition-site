export const ArrowRight = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square"/>
  </svg>
);

export const ArrowUpRight = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M5 11L11 5M6 5h5v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square"/>
  </svg>
);

export const Check = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" fill="none"/>
  </svg>
);

export const Dot = ({ size = 4, color = 'currentColor' }: { size?: number; color?: string }) => (
  <span style={{ display: 'inline-block', width: size, height: size, borderRadius: 999, background: color }} />
);
