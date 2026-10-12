export interface WebsiteNeedCard {
  title: string;
  subtitle: string;
}

export const websiteNeeds: WebsiteNeedCard[] = [
  {
    title: 'A New Website',
    subtitle: 'Build a strong foundation from day one.',
  },
  {
    title: 'Tell Our Story Better',
    subtitle: 'Communicate clearly and build trust faster.',
  },
  {
    title: 'Make It Easier To Use',
    subtitle: 'Create a better experience for every visitor.',
  },
  {
    title: 'Get More Enquiries',
    subtitle: 'Turn attention into action.',
  },
];

export interface WebWhatWeDoCard {
  icon: string;
  title: string;
  bullets: string[];
}

export const webWhatWeDo: WebWhatWeDoCard[] = [
  {
    icon: 'compass',
    title: 'Strategy & Site Architecture',
    bullets: ['User journeys', 'Site structure', 'Content hierarchy', 'Conversion pathways'],
  },
  {
    icon: 'palette',
    title: 'Brand-Led Web Design',
    bullets: ['Brand consistency', 'Intuitive interfaces', 'Responsive design', 'Memorable experiences'],
  },
  {
    icon: 'edit-list',
    title: 'Content & Messaging',
    bullets: ['Clear communication', 'Strategic storytelling', 'Stronger positioning', 'Action-focused copy'],
  },
  {
    icon: 'layout',
    title: 'Landing Pages & Campaigns',
    bullets: ['Product launches', 'Lead generation', 'Campaign support', 'Conversion-focused experiences'],
  },
  {
    icon: 'search',
    title: 'Search & Discoverability',
    bullets: ['Search visibility', 'SEO foundations', 'AI search readiness', 'Organic growth'],
  },
  {
    icon: 'nodes',
    title: 'Intelligent Experiences',
    bullets: ['AI assistants', 'Smart automation', 'Personalised interactions', 'Enhanced user experiences'],
  },
  {
    icon: 'trending-up',
    title: 'Performance & Optimisation',
    bullets: ['Faster load times', 'Mobile-first experiences', 'Better usability', 'Continuous optimisation'],
  },
  {
    icon: 'refresh',
    title: 'Support & Evolution',
    bullets: ['Ongoing improvements', 'Technical support', 'Performance monitoring', 'Future enhancements'],
  },
];

export interface WebBuiltCard {
  icon: string;
  title: string;
  subtitle: string;
}

export const builtToPerform: WebBuiltCard[] = [
  {
    icon: 'thunder',
    title: 'Fast',
    subtitle: 'Built for speed and usability.',
  },
  {
    icon: 'layouts',
    title: 'Mobile First',
    subtitle: 'Designed for the way people browse today.',
  },
  {
    icon: 'search',
    title: 'Search Ready',
    subtitle: 'Structured for visibility and discoverability.',
  },
  {
    icon: 'trending-up',
    title: 'Future Ready',
    subtitle: 'Built to evolve as your business grows.',
  },
];

export interface WebDeliverStep {
  icon: string;
  title: string;
  subtitle: string;
}

export const howWeDeliver: WebDeliverStep[] = [
  {
    icon: 'search',
    title: 'Discover',
    subtitle: 'Understand your business, audience and goals.',
  },
  {
    icon: 'fork',
    title: 'Structure',
    subtitle: 'Map content, journeys and user experience.',
  },
  {
    icon: 'shapes',
    title: 'Design & Build',
    subtitle: 'Bring strategy, content, design and development together.',
  },
  {
    icon: 'rocket',
    title: 'Launch',
    subtitle: 'Test, refine and prepare for the world.',
  },
  {
    icon: 'trending-up',
    title: 'Improve',
    subtitle: 'Monitor performance and identify opportunities for growth.',
  },
];

export interface WhyMabLabItem {
  num: string;
  numColor: string;
  title: string;
  body: string;
}

export const whyMabLab: WhyMabLabItem[] = [
  {
    num: '01',
    numColor: 'bg-secondary',
    title: 'Strategy First',
    body: 'Every decision is tied to a business objective.',
  },
  {
    num: '02',
    numColor: 'bg-primary',
    title: 'Brand Led',
    body: 'Your website should feel like an extension of your brand.',
  },
  {
    num: '03',
    numColor: 'bg-danger',
    title: 'Built For Performance',
    body: 'Designed to perform, not just impress.',
  },
  {
    num: '04',
    numColor: 'bg-stroke',
    title: 'Beyond Launch',
    body: 'We stay involved long after the website goes live.',
  },
];
