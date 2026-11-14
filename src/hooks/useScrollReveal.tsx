import { useEffect, useRef, useState } from 'react';

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.1
) {
  const ref = useRef<T>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isRevealed };
}

export function ScrollReveal({
  children,
  className = '',
  as: Component = 'div',
  threshold = 0.1,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  threshold?: number;
  delay?: number;
}) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>(threshold);

  return (
    <Component
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`scroll-reveal ${isRevealed ? 'revealed' : ''} ${className}`}
    >
      {children}
    </Component>
  );
}
