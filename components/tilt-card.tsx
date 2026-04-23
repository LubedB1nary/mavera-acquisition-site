'use client';
import { CSSProperties, ReactNode, useRef } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  intensity?: number;
  glare?: boolean;
  onClick?: () => void;
  as?: 'div' | 'a';
  href?: string;
}

export function TiltCard({
  children,
  className = '',
  style,
  intensity = 6,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const glareRef = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - y) * intensity;
    const ry = (x - 0.5) * intensity;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
    if (glareRef.current) {
      glareRef.current.style.background =
        `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(200,168,255,0.18), transparent 45%)`;
      glareRef.current.style.opacity = '1';
    }
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = '';
    if (glareRef.current) glareRef.current.style.opacity = '0';
  };

  return (
    <div
      ref={ref}
      className={`mav-tilt ${className}`}
      style={{ position: 'relative', ...style }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          aria-hidden
          style={{
            position: 'absolute', inset: 0, borderRadius: 'inherit',
            opacity: 0, transition: 'opacity .25s ease',
            pointerEvents: 'none', mixBlendMode: 'screen',
          }}
        />
      )}
    </div>
  );
}
