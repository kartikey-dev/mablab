export interface MarketingSellCard {
  icon: string;
  title: string;
  subtitle?: string;
}

export const marketingSellCards: MarketingSellCard[] = [
  {
    icon: 'eye',
    title: 'You Need More People To Know About You.',
    subtitle: 'Expand brand awareness and reach targeted prospects who do not know you exist yet.',
  },
  {
    icon: 'trending-up',
    title: 'You Need To Create More Demand For What We Sell.',
    subtitle: 'Generate genuine interest and intent from buyers ready to solve real problems.',
  },
  {
    icon: 'puzzle',
    title: 'You Need To Stand Out In Our Market.',
    subtitle: 'Articulate distinct positioning that prevents commoditisation against rivals.',
  },
  {
    icon: 'cart',
    title: 'You Need More People To Buy.',
    subtitle: 'Optimise conversion pathways and sales velocity to turn interest into revenue.',
  },
];

export interface MarketingWhatWeDoCard {
  icon: string;
  title: string;
  bullets: string[];
}

export const marketingWhatWeDoCards: MarketingWhatWeDoCard[] = [
  {
    icon: 'flag',
    title: 'Marketing Strategy',
    bullets: [
      'Marketing strategy',
      'Audience',
      'Positioning',
      'Competitive',
      'Analysis',
    ],
  },
  {
    icon: 'rocket',
    title: 'Go-to-Market',
    bullets: ['GTM strategy', 'Launch planning', 'Market entry'],
  },
  {
    icon: 'box',
    title: 'Product Marketing',
    bullets: [
      'Product positioning',
      'Messaging',
      'Sales enablement',
      'Product launches',
    ],
  },
  {
    icon: 'edit-list',
    title: 'Content Marketing',
    bullets: [
      'Content strategy',
      'Thought Leadership',
      'Content creation',
      'Distribution',
    ],
  },
  {
    icon: 'megaphone',
    title: 'Campaigns',
    bullets: [
      'Campaign strategy',
      'Creative campaigns',
      'Campaign management',
    ],
  },
  {
    icon: 'target',
    title: 'Demand Generation',
    bullets: [
      'Lead generation',
      'Paid media',
      'SEO',
      'Social',
      'Account-based Marketing',
    ],
  },
  {
    icon: 'nodes',
    title: 'Lifecycle Marketing',
    bullets: [
      'Email',
      'CRM',
      'Marketing automation',
      'Retention',
      'Customer engagement',
    ],
  },
  {
    icon: 'chart',
    title: 'Marketing Analytics',
    bullets: [
      'Measurement',
      'Attribution',
      'Conversion optimisation',
      'Performance analysis',
    ],
  },
];

export interface MarketingApproachStep {
  step: string;
  stepColor: string;
  title: string;
  bullets?: string[];
  text?: string;
}

export const marketingApproachSteps: MarketingApproachStep[] = [
  {
    step: '01 / UNDERSTAND',
    stepColor: 'text-cyan-500',
    title: 'The Full Picture',
    bullets: [
      'Business',
      'Market',
      'Audience',
      'Competition',
      'Existing position',
    ],
  },
  {
    step: '02 / DECIDE',
    stepColor: 'text-purple-600',
    title: 'The Strategy',
    bullets: [
      'What needs to happen',
      'Who we need to reach',
      'What we need to say',
    ],
  },
  {
    step: '03 / PLAN',
    stepColor: 'text-cyan-500',
    title: 'The Roadmap',
    bullets: [
      'Channels',
      'Content',
      'Campaigns',
      'Distribution',
      'Priorities',
    ],
  },
  {
    step: '04 / EXECUTE',
    stepColor: 'text-purple-600',
    title: 'The Action',
    text: 'Put the plan into market across the right activities.',
  },
  {
    step: '05 / LEARN',
    stepColor: 'text-red-500',
    title: 'The Loop',
    bullets: ['Measure', 'Learn', 'Improve', 'Repeat'],
  },
];

export interface MarketingGrowthCard {
  title: string;
  subtitle: string;
}

export const marketingGrowthCards: MarketingGrowthCard[] = [
  {
    title: 'Reach More People',
    subtitle: 'Get discovered by more of the right people.',
  },
  {
    title: 'Create Demand',
    subtitle: 'Make more people want what you sell.',
  },
  {
    title: 'Become The Preference',
    subtitle: 'Give people a reason to choose you.',
  },
  {
    title: 'Generate Sales',
    subtitle: 'Turn attention into revenue.',
  },
];
