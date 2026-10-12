import { FaqItem } from '@/data/faq';

export interface ContactInfoCard {
  icon: string;
  title: string;
  content: string;
  link?: string;
  category?: string;
  tag?: string;
}

export const contactInfoCards: ContactInfoCard[] = [
  {
    icon: 'chat',
    title: 'Direct Line',
    content: 'hello@mablab.in',
    link: 'mailto:hello@mablab.in',
    category: 'Email Us',
    tag: '24h',
  },
  {
    icon: 'compass',
    title: 'San Francisco Lab',
    content: '548 Market St, San Francisco, CA 94104',
    link: 'https://maps.google.com/?q=548+Market+St+San+Francisco+CA+94104',
    category: 'Headquarters',
    tag: 'HQ',
  },
  {
    icon: 'wrench',
    title: 'Fast Response',
    content: 'Review and feedback within 24 hours on business days.',
    category: 'Response Time',
    tag: 'Direct',
  },
  {
    icon: 'globe',
    title: 'Global Operations',
    content: 'Collaborating across Americas, Europe & APAC timezones.',
    category: 'Availability',
    tag: 'Worldwide',
  },
];

export interface ContactProcessStep {
  tag: string;
  title: string;
  content: string;
}

export const contactProcessSteps: ContactProcessStep[] = [
  {
    tag: '01',
    title: 'Audit & Review',
    content: 'We review your brand presence, competitors, and growth roadblocks within 24 hours.',
  },
  {
    tag: '02',
    title: 'Discovery Call',
    content: 'A focused, 30-minute strategic dialogue with a principal marketing scientist—no generic sales pitches.',
  },
  {
    tag: '03',
    title: 'Custom Formula',
    content: 'We present a tailored experimental roadmap with measurable KPIs and zero fluff.',
  },
];

export const contactFaqItems: FaqItem[] = [
  {
    id: 'contact-faq-1',
    question: 'How quickly will someone get back to me?',
    answer: 'Within 24 business hours. Every inquiry is personally reviewed by a principal strategist, not a sales SDR or automated bot.',
  },
  {
    id: 'contact-faq-2',
    question: 'Do you work with startups or established enterprises?',
    answer: 'Both. We work with ambitious seed-to-scale startups ready to break out, as well as enterprise market leaders seeking modern speed and creative edge.',
  },
  {
    id: 'contact-faq-3',
    question: 'What should we prepare before our first call?',
    answer: 'Simply have a clear understanding of your primary goals, your target audience, and current growth bottlenecks. We do the background market research before we speak.',
  },
  {
    id: 'contact-faq-4',
    question: 'Can we schedule an in-person meeting or strategy workshop?',
    answer: 'Absolutely. We host in-person collaborative sprints at our San Francisco lab and frequently travel for leadership team work sessions worldwide.',
  },
  {
    id: 'contact-faq-5',
    question: 'What makes Mablab different from traditional agencies?',
    answer: 'Zero shortcuts. We treat marketing as rigorous, falsifiable scientific experimentation instead of speculative creative guesswork.',
  },
];
