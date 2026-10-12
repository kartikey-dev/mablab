export interface SocialNeedCard {
  icon: string;
  title: string;
  subtitle: string;
}

export const socialNeedCards: SocialNeedCard[] = [
  {
    icon: 'eye',
    title: 'Get Noticed',
    subtitle: 'Reach more of the right people.',
  },
  {
    icon: 'chat',
    title: 'Build Trust',
    subtitle: 'Credibility through consistent content.',
  },
  {
    icon: 'pen',
    title: 'Stand Apart',
    subtitle: 'Develop a voice people recognize and remember.',
  },
  {
    icon: 'refresh',
    title: 'Stay Relevant',
    subtitle: 'Keep showing up long after the first impression.',
  },
];

export interface SocialWhatWeDoCard {
  icon: string;
  title: string;
  bullets: string[];
  span?: string;
  showButton?: boolean;
}

export const socialWhatWeDoCards: SocialWhatWeDoCard[] = [
  {
    icon: 'chart',
    title: 'Social Strategy',
    bullets: ['Audit & Benchmarking', 'Channel Architecture', 'KPI Frameworks'],
    showButton: false,
  },
  {
    icon: 'nodes',
    title: 'Platform Strategy',
    bullets: ['Algorithm Optimization', 'Feature Adoption', 'Platform-Specific Playbooks'],
    showButton: false,
  },
  {
    icon: 'box',
    title: 'Content Strategy',
    bullets: ['Content Pillars', 'Narrative Arcs', 'Distribution Planning'],
    showButton: false,
  },
  {
    icon: 'pen',
    title: 'Copy & Creative',
    bullets: [
      'Visual Identity Systems',
      'High-Impact Short-Form Video',
      'Conversion-Led Copywriting',
    ],
    showButton: false,
  },
  {
    icon: 'star',
    title: 'Founder / Executive Social',
    bullets: ['Personal Branding', 'Thought Leadership', 'Ghostwriting'],
    showButton: false,
  },
  {
    icon: 'chat',
    title: 'Community Management',
    bullets: ['Active Engagement', 'Crisis Management', 'Sentiment Analysis'],
    showButton: false,
  },
  {
    icon: 'megaphone',
    title: 'Social Campaigns',
    bullets: ['Product Launches', 'Influencer Integration', 'Paid Social Amplification'],
    showButton: false,
  },
  {
    icon: '',
    title: 'Need Custom Approach?',
    bullets: ['Tailored multi-channel strategy', 'Dedicated content and creative pods'],
    span: 'lg:col-span-2 text-center items-center justify-center',
    showButton: true,
  },
];

export interface SocialPresenceStep {
  step: string;
  title: string;
  description: string;
}

export const socialPresenceSteps: SocialPresenceStep[] = [
  {
    step: '01',
    title: 'Listen',
    description: 'Audience · Conversations · Culture · Competition',
  },
  {
    step: '02',
    title: 'Find The Angle',
    description: 'What can we say that is relevant, distinctive and worth noticing?',
  },
  {
    step: '03',
    title: 'Create',
    description: 'Ideas · Copy · Design · Video',
  },
  {
    step: '04',
    title: 'Publish',
    description: 'The right platform · Format · Timing · Distribution',
  },
  {
    step: '05',
    title: 'Learn',
    description: 'Engagement · Behaviour · Performance · Feedback',
  },
];

export interface SocialWorkWithUsStep {
  category: string;
  step: string;
  icon: string;
}

export const socialWorkWithUsSteps: SocialWorkWithUsStep[] = [
  {
    category: 'Input',
    step: '01 First Call',
    icon: 'chat',
  },
  {
    category: 'Define',
    step: '02 Strategy',
    icon: 'compass',
  },
  {
    category: 'Create',
    step: '03 First Content',
    icon: 'pen',
  },
  {
    category: 'Publish',
    step: '04 Go Live',
    icon: 'rocket',
  },
  {
    category: 'Optimise',
    step: '05 Learn & Improve',
    icon: 'trending-up',
  },
];
