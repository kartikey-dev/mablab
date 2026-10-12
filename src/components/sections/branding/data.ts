export interface BrandStandCard {
  icon: string;
  title: string;
  subtitle: string;
}

export const brandStandCards: BrandStandCard[] = [
  {
    icon: 'rocket',
    title: 'Starting Something New?',
    subtitle: 'Build a brand people can recognise and trust.',
  },
  {
    icon: 'layout',
    title: 'Outgrown The Brand You Started With?',
    subtitle: 'Align your identity with the business you’ve become.',
  },
  {
    icon: 'fork',
    title: 'Looking Different Everywhere?',
    subtitle: 'Create a more consistent experience across every touchpoint.',
  },
  {
    icon: 'eye-slash',
    title: 'Struggling To Stand Apart?',
    subtitle: 'Give people a reason to notice, remember, and choose you.',
  },
];

export interface BrandServiceItem {
  icon: string;
  title: string;
  deliverables: string;
}

export const brandServicesList: BrandServiceItem[] = [
  {
    icon: 'drafting',
    title: 'Strategy',
    deliverables: 'Positioning • Brand Architecture • Customer Personas • Competitive Analysis',
  },
  {
    icon: 'chat',
    title: 'Messaging',
    deliverables: 'Value Propositions • Key Messages • Taglines • Boilerplates',
  },
  {
    icon: 'voice',
    title: 'Verbal Identity',
    deliverables: 'Voice & Tone • Brand Personality • Naming • Copywriting Guidelines',
  },
  {
    icon: 'palette',
    title: 'Visual Identity',
    deliverables: 'Logo Design • Color Systems • Typography • Art Direction',
  },
  {
    icon: 'shapes',
    title: 'Brand System',
    deliverables: 'Design Guidelines • Component Libraries • Asset Management • Rollout Strategy',
  },
];

export interface BrandProcessStep {
  num: string;
  icon: string;
  title: string;
  description: string;
}

export const brandProcessSteps: BrandProcessStep[] = [
  {
    num: '01',
    icon: 'search',
    title: 'Understand',
    description: 'Research, audits, and stakeholder interviews to uncover truths.',
  },
  {
    num: '02',
    icon: 'compass',
    title: 'Position',
    description: 'Defining the unique space your brand owns in the market.',
  },
  {
    num: '03',
    icon: 'pen',
    title: 'Express',
    description: 'Bringing the strategy to life through visual and verbal identity.',
  },
  {
    num: '04',
    icon: 'wrench',
    title: 'Build',
    description: 'Creating the systems and guidelines to scale consistently.',
  },
];

export interface BrandAchieveColumn {
  icon: string;
  title: string;
  description: string;
}

export const brandAchieveColumns: BrandAchieveColumn[] = [
  {
    icon: 'eye',
    title: 'Clarity',
    description: 'Eliminate confusion and articulate exactly what you do.',
  },
  {
    icon: 'star',
    title: 'Differentiation',
    description: 'Stand out visually and verbally in crowded markets.',
  },
  {
    icon: 'refresh',
    title: 'Consistency',
    description: 'Create a cohesive experience across every touchpoint.',
  },
  {
    icon: 'fingerprint',
    title: 'Recognition',
    description: 'Build distinct assets that stick in your audience’s mind.',
  },
];
