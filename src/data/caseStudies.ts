export interface CaseStudy {
  id: string;
  labNote?: string;
  category: string;
  title: string;
  description?: string;
  observation?: string;
  image: string;
  slug: string;
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'personal-brand-rebuild',
    category: 'PERSONAL BRAND',
    title: "From Invisible to In-Demand: A Consultant's Personal Brand Rebuild",
    description:
      'How we helped a management consultant go from zero online presence to becoming a sought-after thought leader in 6 months.',
    observation: 'Positioning was the bottleneck, not reach. Re-aligned core value prop.',
    image: '/images/case-studies/personal-brand.webp',
    slug: '#',
    featured: true,
  },
  {
    id: 'smb-awareness',
    labNote: 'LAB NOTE #02',
    category: 'AWARENESS',
    title: 'Building Awareness for an SMB With Zero Paid Budget',
    image: '/images/case-studies/smb-awareness.webp',
    slug: '#',
  },
  {
    id: 'd2c-launch',
    labNote: 'LAB NOTE #03',
    category: 'IDENTITY & LAUNCH',
    title: 'Naming, Identity, and Launch for a New D2C Product – HIMALA',
    image: '/images/case-studies/d2c-launch.webp',
    slug: '#',
  },
];
