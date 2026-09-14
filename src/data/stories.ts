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
    title: 'TRENDJACKING: WHEN IT WORKS, WHEN IT\'S JUST NOISE',
    description:
      'Exploring the fine line between cultural relevance and brand desperation in the age of viral cycles.',
    accentColor: '#5B21B6', // purple
    slug: 'trendjacking-when-it-works',
  },
  {
    id: 'good-copy',
    number: '02',
    title: "GOOD COPY DOESN'T NEED AN EXCLAMATION POINT",
    description:
      'The science of persuasive writing and why clarity always beats hype in high-stakes marketing.',
    accentColor: '#0891B2', // teal
    slug: 'good-copy-exclamation-point',
  },
  {
    id: 'rebrands-that-flop',
    number: '03',
    title: 'WHAT NOBODY TELLS YOU ABOUT REBRANDS THAT FLOP',
    description:
      'A post-mortem on famous branding failures and the laboratory lessons we can extract from them.',
    accentColor: '#E12A3C', // danger/orange-red
    slug: 'rebrands-that-flop',
  },
];
