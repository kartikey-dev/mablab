export interface PrBrandNeedCard {
  accent: string;
  label: string;
  bullets: string[];
}

export const prBrandNeedCards: PrBrandNeedCard[] = [
  {
    accent: 'primary',
    label: 'Awareness',
    bullets: [
      'We have a launch coming up.',
      'We are entering a new market.',
      'We have a major announcement to make.',
    ],
  },
  {
    accent: 'secondary',
    label: 'Positioning',
    bullets: [
      'Nobody knows what makes us different.',
      'We keep getting compared to the wrong competitors.',
      'We want to be known for something.',
    ],
  },
  {
    accent: 'danger',
    label: 'Authority',
    bullets: [
      'We released original research.',
      "We can't keep talking about ourselves.",
      "We have expertise that isn't reaching the market.",
    ],
  },
  {
    accent: 'stroke',
    label: 'Visibility',
    bullets: [
      'Our founder should be out there more.',
      'We need to be in the right publications.',
      'Our competitors seem to be everywhere.',
    ],
  },
];

export const accentColorMap: Record<string, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  danger: 'bg-danger',
  stroke: 'bg-stroke',
};

export interface PrServiceCard {
  title: string;
  bullets: string[];
  highlight: boolean;
}

export const prServicesList: PrServiceCard[] = [
  {
    title: 'PR Strategy',
    bullets: ['Narratives', 'Messaging', 'Story', 'Development'],
    highlight: false,
  },
  {
    title: 'Media Relations',
    bullets: ['Journalists', 'Publications', 'Industry Media'],
    highlight: false,
  },
  {
    title: 'Thought Leadership',
    bullets: ['Point Of View', 'Development', 'Expert Commentary', 'Bylines'],
    highlight: false,
  },
  {
    title: 'Founder & Executive PR',
    bullets: ['Executive Visibility', 'Speaking', 'Opportunities', 'Positioning'],
    highlight: false,
  },
  {
    title: 'Influencer Strategy',
    bullets: ['Creator Selection', 'Campaign', 'Planning', 'Partnerships'],
    highlight: false,
  },
  {
    title: 'Creator Partnerships',
    bullets: ['Influencers', 'Experts', 'Industry', 'Voices'],
    highlight: true,
  },
  {
    title: 'Campaigns',
    bullets: ['Launches', 'Announcements', 'Initiatives'],
    highlight: true,
  },
  {
    title: 'Outreach & Relationship Building',
    bullets: ['Media', 'Creators', 'Communities'],
    highlight: true,
  },
];

export const prPortfolioTags: string[] = [
  'PR Campaigns',
  'Media Coverage',
  'Founder Visibility',
  'Thought Leadership',
  'Influencer Collaborations',
  'Launch Campaigns',
  'Creator Partnerships',
  'Industry Features',
];

export interface MediaLogo {
  name: string;
  style: string;
}

export const prMediaLogos: MediaLogo[] = [
  { name: 'Forbes', style: 'font-serif font-bold text-stroke text-lg' },
  { name: 'THE ECONOMIC TIMES', style: 'font-sans font-bold text-stroke text-sm tracking-tight' },
  { name: 'YOURSTORY', style: 'font-sans font-extrabold text-danger text-sm tracking-widest' },
  { name: 'BusinessLine', style: 'font-serif font-bold text-stroke text-base' },
  { name: 'Inc.', style: 'font-serif font-black italic text-stroke text-2xl' },
  { name: 'mint', style: 'font-sans font-bold text-[#E84B17] text-xl italic' },
  { name: 'ET BRAND EQUITY', style: 'font-sans font-extrabold text-stroke text-xs tracking-widest' },
  { name: 'ENTREPRENEUR INDIA', style: 'font-sans font-bold text-stroke text-xs tracking-tight' },
];

export interface PrCaseStudy {
  numColor: string;
  title: string;
  body: string;
}

export const prCaseStudies: PrCaseStudy[] = [
  {
    numColor: 'bg-secondary',
    title: 'Founder Visibility Initiative',
    body: 'Built thought leadership for a fintech founder, leading to 25+ media features and speaking opportunities.',
  },
  {
    numColor: 'bg-danger',
    title: 'Product Launch Campaign',
    body: '360° PR campaign for a B2B SaaS platform resulting in strong industry coverage and market buzz.',
  },
  {
    numColor: 'bg-primary',
    title: 'Research & Thought Leadership',
    body: 'Positioned a research report with top-tier media placements and industry conversations.',
  },
  {
    numColor: 'bg-stroke',
    title: 'Influencer Collaboration',
    body: 'Ran creator-led campaigns that drove awareness, trust and engagement at scale.',
  },
];
