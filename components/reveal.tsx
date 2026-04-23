'use client';
import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  variant?: 'rise' | 'slide' | 'scale';
  stagger?: boolean;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  threshold?: number;
  once?: boolean;
}

export function Reveal({
  children,
  as = 'div',
  variant = 'rise',
  stagger = false,
  delay = 0,
  className = '',
  style,
  threshold = 0.15,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);

  const variantClass =
    variant === 'slide' ? 'mav-reveal mav-reveal--slide' :
    variant === 'scale' ? 'mav-reveal mav-reveal--scale' :
    'mav-reveal';

  const Comp = as as 'div';
  return (
    <Comp
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${variantClass} ${stagger ? 'mav-stagger' : ''} ${inView ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
    >
      {children}
    </Comp>
  );
}

interface CountUpProps {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  format?: (n: number) => string;
  start?: boolean;
}

export function CountUp({ to, duration = 1600, prefix = '', suffix = '', format, start = true }: CountUpProps) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || !start) return;
    let raf = 0;
    const t0 = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(to * eased);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, start, to, duration]);

  const display = format ? format(val) : Math.round(val).toLocaleString();
  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}
