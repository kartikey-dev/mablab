export interface GoalItem {
  title: string;
  points: string[];
}

export const eventsGoalCards: GoalItem[] = [
  {
    title: 'Reach The Right People',
    points: [
      'We need to get in front of decision-makers.',
      'We need access to a specific audience.',
      'We need more face time with prospects.',
    ],
  },
  {
    title: 'Strengthen Relationships',
    points: [
      'We want deeper engagement than digital channels allow.',
      'We need stronger relationships with customers and partners.',
      'We want more meaningful conversations.',
    ],
  },
  {
    title: 'Create Momentum',
    points: [
      'We have a launch coming up.',
      'We have a major announcement to make.',
      'We need people paying attention.',
    ],
  },
  {
    title: 'Build A Community',
    points: [
      'We want to bring people together.',
      'We want customers to engage with each other.',
      'We want to create ongoing participation around our brand.',
    ],
  },
];

export interface OpportunityItem {
  title: string;
  subhead: string;
  bulletColor: string;
  items: string[];
}

export const eventsOpportunityCards: OpportunityItem[] = [
  {
    title: 'Event Strategy',
    subhead: "Make sure you're investing in the right opportunities.",
    bulletColor: 'text-primary',
    items: [
      'Event Research & Selection',
      'Sponsorship Strategy',
      'Speaking Opportunities',
      'Event Marketing Strategy',
      'Event Planning & Coordination',
      'Event Promotion',
    ],
  },
  {
    title: 'Event Participation',
    subhead: 'Show up with a clear purpose and a plan.',
    bulletColor: 'text-[#0284C7]',
    items: [
      'Conferences & Trade Shows',
      'Exhibitions',
      'Sponsorships',
      'Booth Strategy & Design',
      'Event Messaging',
      'On-Ground Engagement',
    ],
  },
  {
    title: 'Event Creation',
    subhead: 'Bring people together around your brand.',
    bulletColor: 'text-stroke',
    items: [
      'Webinars & Virtual Events',
      'Product Launches',
      'Brand Launches',
      'Corporate Events',
      'Community Events',
      'Networking Events',
    ],
  },
  {
    title: 'Event Amplification',
    subhead: 'Extend the impact beyond the event itself.',
    bulletColor: 'text-red-500',
    items: [
      'Event Content Creation',
      'Social Media Coverage',
      'PR & Media Outreach',
      'Speaker Promotion',
      'Post-Event Campaigns',
      'Lead Nurturing',
    ],
  },
];

export interface ClarityStep {
  phase: string;
  desc: string;
  numColor: string;
  steps: { num: string; text: string }[];
}

export const eventsClaritySteps: ClarityStep[] = [
  {
    phase: 'Goal',
    desc: 'Know What Success Looks Like Before The Event Begins.',
    numColor: 'text-primary',
    steps: [
      { num: '01', text: 'Define clear objectives and success metrics.' },
      { num: '02', text: 'Align the event with business and marketing goals.' },
      { num: '03', text: 'Identify the outcomes you want to create.' },
    ],
  },
  {
    phase: 'Audience',
    desc: 'Reach The People Who Matter Most.',
    numColor: 'text-cyan-600',
    steps: [
      { num: '01', text: 'Identify the right audience, stakeholders and decision-makers.' },
      { num: '02', text: 'Understand what matters to them and why they should engage.' },
      { num: '03', text: 'Build messaging and experiences around their interests.' },
    ],
  },
  {
    phase: 'Experience',
    desc: 'Create Something Worth Remembering.',
    numColor: 'text-gray-800',
    steps: [
      { num: '01', text: 'Design experiences that reflect your brand and objectives.' },
      { num: '02', text: 'Create moments that attract attention and spark conversations.' },
      { num: '03', text: 'Ensure every touchpoint reinforces the intended message.' },
    ],
  },
  {
    phase: 'Engagement',
    desc: 'Turn Attendance Into Interaction.',
    numColor: 'text-red-500',
    steps: [
      { num: '01', text: 'Encourage meaningful conversations and participation.' },
      { num: '02', text: 'Create opportunities for networking, learning and discovery.' },
      { num: '03', text: 'Capture interest, feedback, leads and relationships.' },
    ],
  },
  {
    phase: 'Follow-Through',
    desc: 'Extend The Impact Beyond The Event.',
    numColor: 'text-primary',
    steps: [
      { num: '01', text: 'Nurture leads, relationships and opportunities.' },
      { num: '02', text: 'Repurpose event content across marketing channels.' },
      { num: '03', text: 'Measure outcomes and identify the next steps.' },
    ],
  },
];
