export interface DecisionCardItem {
  num: string;
  tabBg: string;
  title: string;
  points: string[];
}

export const marketResearchDecisionCards: DecisionCardItem[] = [
  {
    num: '01',
    tabBg: 'bg-primary',
    title: 'Understanding Customers',
    points: [
      "We don't know why customers choose competitors.",
      "Customers aren't buying for the reasons we expected.",
      "We don't know what customers actually care about.",
    ],
  },
  {
    num: '02',
    tabBg: 'bg-[#00B4D8]',
    title: 'Understanding Markets',
    points: [
      'We are entering a new market.',
      'We are targeting a new audience.',
      "We don't know if there is enough demand.",
    ],
  },
  {
    num: '03',
    tabBg: 'bg-[#E11D48]',
    title: 'Understanding Competition',
    points: [
      "Competitors keep winning and we don't know why.",
      "We don't know how we're being compared.",
      "We don't know what makes us different anymore.",
    ],
  },
  {
    num: '04',
    tabBg: 'bg-stroke',
    title: 'Understanding Opportunities',
    points: [
      'We have an idea and need to validate it.',
      'We are about to make a major decision.',
      'We need evidence before investing further.',
    ],
  },
];

export interface AnswerCategoryItem {
  title: string;
  items: string[];
}

export const marketResearchAnswerCards: AnswerCategoryItem[] = [
  {
    title: 'Customer Research',
    items: [
      'Customer Interviews',
      'Voice of Customer Research',
      'Customer Behaviour Analysis',
      'Customer Journey Research',
    ],
  },
  {
    title: 'Market Research',
    items: [
      'Market Analysis',
      'Market Sizing',
      'Industry Research',
      'Trend Analysis',
    ],
  },
  {
    title: 'Competitor Research',
    items: [
      'Competitor Analysis',
      'Positioning Analysis',
      'Competitive Benchmarking',
      'Gap Analysis',
    ],
  },
  {
    title: 'Audience Research',
    items: [
      'Audience Segmentation',
      'Persona Development',
      'Audience Profiling',
      'Target Market Analysis',
    ],
  },
  {
    title: 'Brand Research',
    items: [
      'Brand Perception Research',
      'Brand Awareness Research',
      'Brand Association Analysis',
      'Positioning Validation',
    ],
  },
  {
    title: 'Opportunity Research',
    items: [
      'Concept Testing',
      'Demand Validation',
      'Opportunity Mapping',
      'Market Entry Research',
    ],
  },
];
