export interface ContentNeedCard {
  icon: string;
  title: string;
  subtitle: string;
}

export const contentNeedCards: ContentNeedCard[] = [
  {
    icon: 'thunder',
    title: 'Awareness',
    subtitle: 'More people need to know we exist.',
  },
  {
    icon: 'protect',
    title: 'Differentiation',
    subtitle: "People don't see what makes us different.",
  },
  {
    icon: 'box',
    title: 'Trust',
    subtitle: 'People need to trust us before they buy from us.',
  },
  {
    icon: 'chat',
    title: 'Retention',
    subtitle: 'People forget about us too quickly.',
  },
  {
    icon: 'refresh',
    title: 'Demand',
    subtitle: 'More people need to want what we offer.',
  },
  {
    icon: 'star',
    title: 'Authority',
    subtitle: "People don't know we're experts yet.",
  },
];

export interface ContentIdeaCard {
  title: string;
  bullets: string[];
}

export const contentIdeaCards: ContentIdeaCard[] = [
  {
    title: 'Content Strategy',
    bullets: ['Audience', 'Messaging', 'Themes', 'Content Pillars'],
  },
  {
    title: 'Thought Leadership',
    bullets: ['Founder POV', 'Executive Positioning', 'Industry Perspectives'],
  },
  {
    title: 'Editorial Strategy',
    bullets: ['Content Systems', 'Planning', 'Editorial Calendars'],
  },
  {
    title: 'Blogs & Articles',
    bullets: ['Insights', 'Education', 'Opinion Pieces'],
  },
  {
    title: 'Website Content',
    bullets: ['Pages', 'Messaging', 'Conversion-Focused Copy'],
  },
  {
    title: 'Case Studies',
    bullets: ['Customer Stories', 'Proof', 'Sales Support'],
  },
  {
    title: 'Sales Enablement',
    bullets: ['Sales Decks', 'One-Pagers', 'Battlecards', 'Objection Handling'],
  },
  {
    title: 'Reports & Strategic Documents',
    bullets: ['Research Reports', 'Annual Reports', 'Industry Analysis', 'Internal Narratives'],
  },
  {
    title: 'Campaign Content',
    bullets: ['Product Launches', 'GTM Campaigns', 'Multi-Channel Narratives'],
  },
];

export interface ContentProcessCard {
  step: string;
  title: string;
  questions?: string[];
  quote?: string;
  footer: string;
  color: string;
}

export const contentProcessCards: ContentProcessCard[] = [
  {
    step: 'STEP 01',
    title: 'Discover',
    questions: [
      'What do we know?',
      'What does the audience care about?',
      'What conversations are worth joining?',
    ],
    footer: 'INPUT: AUDIT & RESEARCH',
    color: 'bg-purple-700',
  },
  {
    step: 'STEP 02',
    title: 'Develop',
    questions: [
      'Find the angle.',
      'Shape the argument.',
      'Build the narrative.',
    ],
    footer: 'SYNTHESIS: POSITIONING',
    color: 'bg-cyan-600',
  },
  {
    step: 'STEP 03',
    title: 'Write',
    quote: 'Turn ideas into stories, insights and opinions.',
    footer: 'EXECUTION: VERBAL CLARITY',
    color: 'bg-stroke',
  },
  {
    step: 'STEP 04',
    title: 'Package',
    quote: 'Adapt the idea for different formats, audiences and channels.',
    footer: 'ASSEMBLY: MULTI-CHANNEL',
    color: 'bg-purple-700',
  },
  {
    step: 'STEP 05',
    title: 'Distribute',
    quote: 'Help the right people discover it.',
    footer: 'REACH: INTENTIONAL TARGETING',
    color: 'bg-cyan-600',
  },
  {
    step: 'STEP 06',
    title: 'Learn',
    questions: [
      'Understand what resonates.',
      'Refine the thinking.',
      'Repeat.',
    ],
    footer: 'FEEDBACK FEEDS BACK TO DISCOVER',
    color: 'bg-stroke',
  },
];

export interface ContentThinkingRow {
  label: string;
  text: string;
  icon: string;
}

export const contentThinkingRows: ContentThinkingRow[] = [
  {
    label: 'OBJECTIVE',
    text: 'Increase relevance and engagement among SaaS founders.',
    icon: 'target',
  },
  {
    label: 'AUDIENCE',
    text: 'SaaS founders & GTM leaders (2-10 yrs experience)',
    icon: 'chat',
  },
  {
    label: 'ANGLE',
    text: 'Contrarian headline to create curiosity and pattern interrupt.',
    icon: 'pen',
  },
  {
    label: 'STRUCTURE',
    text: 'Problem → Shift → Solution (Easy to scan, easy to remember)',
    icon: 'box',
  },
  {
    label: 'PRINCIPLES USED',
    text: 'Curiosity Gap, Contrarian Thinking, Cognitive Ease, Story Structure',
    icon: 'drafting',
  },
  {
    label: 'WHY THIS WILL WORK',
    text: 'Challenges assumptions → drives attention, saves & shares.',
    icon: 'trending-up',
  },
  {
    label: "WHAT WE'LL LEARN",
    text: 'What angle resonates, which sections drive most engagement.',
    icon: 'refresh',
  },
];
