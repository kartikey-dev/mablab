export interface Service {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 'branding',
    name: 'Branding',
    icon: 'branding',
    description: 'Positioning, messaging, identity systems and brand guidelines.',
  },
  {
    id: 'web-development',
    name: 'Web Development',
    icon: 'web-development',
    description: 'Websites, e-commerce stores, CMS and custom integrations.',
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: 'marketing',
    description: 'Campaigns, execution, growth initiatives and marketing support.',
  },
  {
    id: 'social-media',
    name: 'Social Media',
    icon: 'social-media',
    description: 'Content planning, community management and platform growth.',
  },
  {
    id: 'content',
    name: 'Content',
    icon: 'content',
    description: 'Articles, reports, sales collateral and thought leadership.',
  },
  {
    id: 'video-podcast',
    name: 'Video & Podcast',
    icon: 'video-podcast',
    description: 'Video production, podcasts, editing and distribution.',
  },
  {
    id: 'market-research',
    name: 'Market Research',
    icon: 'market-research',
    description: 'Customer insights, competitor analysis and market intelligence.',
  },
  {
    id: 'pr-influencer',
    name: 'PR & Influencer',
    icon: 'pr-influencer',
    description: 'Media coverage, thought leadership and creator partnerships.',
  },
  {
    id: 'seo-paid-ads',
    name: 'SEO & Paid Ads',
    icon: 'seo-paid-ads',
    description: 'Search visibility, lead generation and conversion optimization.',
  },
  {
    id: 'design',
    name: 'Design',
    icon: 'design',
    description: 'Presentations, marketing assets, digital and print design.',
  },
  {
    id: 'events',
    name: 'Events',
    icon: 'events',
    description: 'Event strategy, planning, production and audience engagement.',
  },
  {
    id: 'marketing-consulting',
    name: 'Marketing Consulting',
    icon: 'marketing-consulting',
    description: 'Strategy, audits, workshops and marketing leadership support.',
  },
];
