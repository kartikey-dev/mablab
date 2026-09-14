'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Fade in element from below
 */
export function fadeInUp(
  element: gsap.TweenTarget,
  options?: {
    duration?: number;
    delay?: number;
    y?: number;
    scrollTrigger?: boolean;
  }
) {
  const { duration = 0.8, delay = 0, y = 40, scrollTrigger = true } = options || {};

  const config: gsap.TweenVars = {
    opacity: 1,
    y: 0,
    duration,
    delay,
    ease: 'power3.out',
  };

  if (scrollTrigger) {
    config.scrollTrigger = {
      trigger: element as gsap.DOMTarget,
      start: 'top 85%',
      toggleActions: 'play none none none',
    };
  }

  gsap.set(element, { opacity: 0, y });
  return gsap.to(element, config);
}

/**
 * Stagger children elements into view
 */
export function staggerFadeIn(
  parent: gsap.DOMTarget,
  childSelector: string,
  options?: {
    duration?: number;
    stagger?: number;
    y?: number;
  }
) {
  const { duration = 0.6, stagger = 0.1, y = 30 } = options || {};

  const children = gsap.utils.toArray(`${parent} ${childSelector}`) as Element[];
  
  gsap.set(children, { opacity: 0, y });

  return gsap.to(children, {
    opacity: 1,
    y: 0,
    duration,
    stagger,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: parent,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
}

/**
 * Scale in element
 */
export function scaleIn(
  element: gsap.TweenTarget,
  options?: {
    duration?: number;
    delay?: number;
    scale?: number;
  }
) {
  const { duration = 0.7, delay = 0, scale = 0.9 } = options || {};

  gsap.set(element, { opacity: 0, scale });

  return gsap.to(element, {
    opacity: 1,
    scale: 1,
    duration,
    delay,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: element as gsap.DOMTarget,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });
}

/**
 * Horizontal slide in
 */
export function slideInFromLeft(
  element: gsap.TweenTarget,
  options?: { duration?: number; x?: number }
) {
  const { duration = 0.8, x = -60 } = options || {};

  gsap.set(element, { opacity: 0, x });

  return gsap.to(element, {
    opacity: 1,
    x: 0,
    duration,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element as gsap.DOMTarget,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });
}

export function slideInFromRight(
  element: gsap.TweenTarget,
  options?: { duration?: number; x?: number }
) {
  const { duration = 0.8, x = 60 } = options || {};

  gsap.set(element, { opacity: 0, x });

  return gsap.to(element, {
    opacity: 1,
    x: 0,
    duration,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element as gsap.DOMTarget,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });
}

/**
 * Text reveal animation — line by line
 */
export function textReveal(
  element: gsap.DOMTarget,
  options?: { duration?: number; stagger?: number }
) {
  const { duration = 0.6, stagger = 0.15 } = options || {};

  const lines = gsap.utils.toArray(`${element} .text-line`) as Element[];

  gsap.set(lines, { opacity: 0, y: 30, rotateX: -15 });

  return gsap.to(lines, {
    opacity: 1,
    y: 0,
    rotateX: 0,
    duration,
    stagger,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
}

/**
 * Cleanup all ScrollTrigger instances
 */
export function cleanupAnimations() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}
