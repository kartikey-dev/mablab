export interface Story {
  id: string;
  number: string;
  title: string;
  description: string;
  accentColor: string;
  slug: string;
}

export const stories: Story[] = [
  {
    id: 'trendjacking',
    number: '01',
    title: 'Trendjacking: When It Works, When It\'s Just Noise',
    description:
      'Exploring the fine line between cultural relevance and brand desperation in the age of viral cycles.',
    accentColor: '#5B21B6', // purple
    slug: 'trendjacking-when-it-works',
  },
  {
    id: 'good-copy',
    number: '02',
    title: "Good Copy Doesn't Need an Exclamation Point",
    description:
      'The science of persuasive writing and why clarity always beats hype in high-stakes marketing.',
    accentColor: '#0891B2', // teal
    slug: 'good-copy-exclamation-point',
  },
  {
    id: 'rebrands-that-flop',
    number: '03',
    title: 'What Nobody Tells You About Rebrands That Flop',
    description:
      'A post-mortem on famous branding failures and the laboratory lessons we can extract from them.',
    accentColor: '#E12A3C', // danger/orange-red
    slug: 'rebrands-that-flop',
  },
];
