'use client';

import React from 'react';
import { useGsapAnimation } from '@/hooks/useGsapAnimation';

interface GsapSectionProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'fadeIn' | 'scaleIn' | 'slideLeft' | 'slideRight';
  delay?: number;
  duration?: number;
  className?: string;
  id?: string;
}

export default function GsapSection({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.8,
  className = '',
  id,
}: GsapSectionProps) {
  const ref = useGsapAnimation<HTMLDivElement>({
    animation,
    delay,
    duration,
  });

  return (
    <div ref={ref} id={id} className={className}>
      {children}
    </div>
  );
}
