export interface DemandChannelItem {
  num: string;
  title: string;
  tag: string;
  tagColor: string;
  desc: string;
}

export const paidDemandItems: DemandChannelItem[] = [
  {
    num: '01/',
    title: 'Google Ads',
    tag: 'HIGH-INTENT',
    tagColor: 'text-purple-700',
    desc: 'Search campaigns designed to capture high-intent demand.',
  },
  {
    num: '02/',
    title: 'Social Ads',
    tag: 'CROSS-PLATFORM',
    tagColor: 'text-gray-500',
    desc: 'Reach the right audiences across platforms.',
  },
  {
    num: '03/',
    title: 'Campaign Strategy',
    tag: 'MESSAGING',
    tagColor: 'text-purple-700',
    desc: 'Planning, messaging and audience targeting.',
  },
  {
    num: '04/',
    title: 'Landing Pages',
    tag: 'CONVERSION',
    tagColor: 'text-red-500',
    desc: 'Pages built to convert attention into action.',
  },
  {
    num: '05/',
    title: 'Retargeting',
    tag: 'RETENTION',
    tagColor: 'text-gray-500',
    desc: 'Stay visible to people who have already shown interest.',
  },
  {
    num: '06/',
    title: 'Conversion Optimisation',
    tag: 'EFFICIENCY',
    tagColor: 'text-purple-700',
    desc: 'Improve performance without increasing spend.',
  },
];

export const organicDemandItems: DemandChannelItem[] = [
  {
    num: '01/',
    title: 'SEO Strategy',
    tag: 'FOUNDATIONAL',
    tagColor: 'text-cyan-600',
    desc: 'Build a long-term acquisition engine.',
  },
  {
    num: '02/',
    title: 'Keyword Research',
    tag: 'INTENT MAPPING',
    tagColor: 'text-gray-500',
    desc: 'Understand what your customers are searching for.',
  },
  {
    num: '03/',
    title: 'Technical SEO',
    tag: 'INFRASTRUCTURE',
    tagColor: 'text-cyan-600',
    desc: 'Improve crawlability, speed and site health.',
  },
  {
    num: '04/',
    title: 'On-Page SEO',
    tag: 'DISCOVERABILITY',
    tagColor: 'text-gray-500',
    desc: 'Optimise content and pages for discoverability.',
  },
  {
    num: '05/',
    title: 'Content SEO',
    tag: 'ORGANIC CAPTURE',
    tagColor: 'text-cyan-600',
    desc: 'Create content that captures demand organically.',
  },
  {
    num: '06/',
    title: 'Authority Building',
    tag: 'DOMAIN TRUST',
    tagColor: 'text-cyan-600',
    desc: 'Strengthen trust and search visibility over time.',
  },
];

export interface ClickClueStep {
  step: string;
  text: string;
}

export const clickClueSteps: ClickClueStep[] = [
  { step: '01', text: 'What people search.' },
  { step: '02', text: 'What they ignore.' },
  { step: '03', text: 'What they click.' },
  { step: '04', text: 'What they convert on.' },
  { step: '05', text: 'What they come back for.' },
];

export interface MetricCard {
  title: string;
  desc: string;
}

export const metricCards: MetricCard[] = [
  {
    title: 'CAC',
    desc: 'Customer Acquisition Cost',
  },
  {
    title: 'CPL',
    desc: 'Cost Per Lead',
  },
  {
    title: 'ROAS',
    desc: 'Return On Ad Spend',
  },
  {
    title: 'Conversion Rate',
    desc: '(Traffic to Conversion)',
  },
  {
    title: 'Organic Traffic',
    desc: 'Qualified traffic from search',
  },
  {
    title: 'Rankings',
    desc: 'Visibility for keywords that matter',
  },
];
