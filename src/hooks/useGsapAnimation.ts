'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseGsapAnimationOptions {
  animation: 'fadeInUp' | 'fadeIn' | 'scaleIn' | 'slideLeft' | 'slideRight';
  duration?: number;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  triggerStart?: string;
  disabled?: boolean;
}

export function useGsapAnimation<T extends HTMLElement>(
  options: UseGsapAnimationOptions
) {
  const ref = useRef<T>(null);
  const {
    animation,
    duration = 0.8,
    delay = 0,
    y = 40,
    x = 60,
    scale = 0.9,
    triggerStart = 'top 85%',
    disabled = false,
  } = options;

  useEffect(() => {
    if (disabled || !ref.current) return;

    const el = ref.current;
    let tween: gsap.core.Tween;

    const initialProps: gsap.TweenVars = {};
    const animateProps: gsap.TweenVars = {
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: triggerStart,
        toggleActions: 'play none none none',
      },
    };

    switch (animation) {
      case 'fadeInUp':
        initialProps.opacity = 0;
        initialProps.y = y;
        animateProps.opacity = 1;
        animateProps.y = 0;
        break;
      case 'fadeIn':
        initialProps.opacity = 0;
        animateProps.opacity = 1;
        break;
      case 'scaleIn':
        initialProps.opacity = 0;
        initialProps.scale = scale;
        animateProps.opacity = 1;
        animateProps.scale = 1;
        animateProps.ease = 'back.out(1.7)';
        break;
      case 'slideLeft':
        initialProps.opacity = 0;
        initialProps.x = -x;
        animateProps.opacity = 1;
        animateProps.x = 0;
        break;
      case 'slideRight':
        initialProps.opacity = 0;
        initialProps.x = x;
        animateProps.opacity = 1;
        animateProps.x = 0;
        break;
    }

    gsap.set(el, initialProps);
    tween = gsap.to(el, animateProps);

    return () => {
      tween?.kill();
    };
  }, [animation, duration, delay, y, x, scale, triggerStart, disabled]);

  return ref;
}

/**
 * Hook for staggering children animations
 */
export function useStaggerAnimation<T extends HTMLElement>(
  childSelector: string,
  options?: {
    duration?: number;
    stagger?: number;
    y?: number;
    triggerStart?: string;
  }
) {
  const ref = useRef<T>(null);
  const {
    duration = 0.6,
    stagger = 0.1,
    y = 30,
    triggerStart = 'top 80%',
  } = options || {};

  useEffect(() => {
    if (!ref.current) return;

    const parent = ref.current;
    const children = parent.querySelectorAll(childSelector);

    if (children.length === 0) return;

    gsap.set(children, { opacity: 0, y });

    const tween = gsap.to(children, {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: parent,
        start: triggerStart,
        toggleActions: 'play none none none',
      },
    });

    return () => {
      tween?.kill();
    };
  }, [childSelector, duration, stagger, y, triggerStart]);

  return ref;
}
