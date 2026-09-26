// ============================================
// WHY US PAGE — DATA DEFINITIONS
// All content for the Why Us page sections
// ============================================

// --- Section 1: Brand Values ---
export interface BrandValueItem {
  label: string;
  quote: string;
  description: string;
  /** 'quote' = left-border quote style, 'box' = full bordered box */
  variant: 'quote' | 'box';
}

export const brandValues: BrandValueItem[] = [
  {
    label: 'BRAND VISION',
    quote:
      '\u201CA world where businesses make better decisions because they understand their customers, markets, and opportunities more deeply.\u201D',
    description:
      'We envision a future where marketing is less about chasing attention and more about creating understanding. Where businesses replace assumptions with insight, noise with clarity, and shortcuts with thoughtful strategy.',
    variant: 'quote',
  },
  {
    label: 'BRAND MISSION',
    quote:
      '\u201CTo help ambitious businesses build trust through deeper understanding.\u201D',
    description:
      'We do this by combining research, strategy, creativity, and systems thinking to uncover what matters, simplify complexity, and create marketing that is clear, useful, and effective.',
    variant: 'quote',
  },
  {
    label: 'BRAND PROMISE',
    quote:
      '\u201CWe won\u2019t give you more noise. We\u2019ll help you understand what matters.\u201D',
    description:
      'Every engagement, recommendation, design, strategy, and system we create is built to reduce uncertainty, increase clarity, and help you make better decisions with confidence.',
    variant: 'box',
  },
];

// --- Section 2: Pillars ---
export interface PillarItem {
  title: string;
  color: string;
  description: string;
}

export const pillars: PillarItem[] = [
  {
    title: 'Businesses.',
    color: 'text-stroke',
    description:
      'COMMERCIAL ENTITIES SEEKING RESILIENT VITALITY AND SUSTAINABLE MODELS.',
  },
  {
    title: 'Brands.',
    color: 'text-primary',
    description:
      'THE ENDURING REPOSITORY OF REPUTATION, DISTINCTION, AND CLEAR MEANING.',
  },
  {
    title: 'Marketing.',
    color: 'text-secondary',
    description:
      'THE HONEST TRANSLATION OF REAL CAPABILITY TO AUDIENCE DEMAND.',
  },
  {
    title: 'People.',
    color: 'text-primary',
    description:
      'REAL INDIVIDUALS WITH AUTHENTIC NEEDS, TRUST, AND HUMAN BEHAVIOUR.',
  },
];

// --- Section 3: Narrative Blocks ---
export interface NarrativeBlock {
  label?: string;
  content: NarrativeContent[];
}

export interface NarrativeContent {
  type: 'paragraph' | 'quote' | 'accent';
  text: string;
  /** Optional color class override for accent type */
  color?: string;
}

export const narrativeBlocks: NarrativeBlock[] = [
  {
    content: [
      {
        type: 'paragraph',
        text: 'Marketing has never been more accessible. There are more tools, more platforms, more content, more experts, and more advice than ever before. And that\u2019s why it feels even more confusing. Every day, there\u2019s a new trend to follow, a new framework to learn, a new AI tool to try, and a new expert telling you what you\u2019re doing wrong.',
      },
      {
        type: 'quote',
        text: 'For business owners, it can feel like everyone has an answer. The hard part is figuring out which ones are worth listening to.',
      },
      {
        type: 'accent',
        text: 'That\u2019s why MAB Lab exists. To ease that confusion. To soften the overwhelm.',
        color: 'text-primary',
      },
    ],
  },
  {
    label: 'DYNAMIC MATRIX :',
    content: [
      {
        type: 'paragraph',
        text: 'We\u2019re a tight bunch of people who are passionate about solving marketing and branding challenges. Technology. AI. Platforms. Trends. Tools.',
      },
      {
        type: 'paragraph',
        text: 'But we\u2019re equally interested in the things that don\u2019t change. People. Trust. Behaviour. The fundamentals that keep working long after the trends have moved on.',
      },
      {
        type: 'quote',
        text: 'That\u2019s the lens we bring to every project. Understand the business, the audience, and the problem. Then decide what to do. No shortcuts. Just thoughtful work, built on understanding.',
        color: 'text-primary',
      },
      {
        type: 'paragraph',
        text: 'It\u2019s not the fastest way to do marketing. But in our experience, it\u2019s usually the better way. And it\u2019s certainly the way we enjoy doing it.',
      },
    ],
  },
];

// --- Section 4: People ---
export interface RoleTag {
  label: string;
  color: string;
}

export const roleTags: RoleTag[] = [
  { label: 'Researchers', color: 'text-stroke' },
  { label: 'Strategists', color: 'text-stroke' },
  { label: 'Marketers', color: 'text-primary' },
  { label: 'Designers', color: 'text-stroke' },
  { label: 'Writers', color: 'text-stroke' },
  { label: 'Technologists', color: 'text-secondary' },
  { label: 'Operators', color: 'text-stroke' },
  { label: 'Problem-solvers', color: 'text-primary' },
];

// --- Section 5: Beliefs ---
export interface BeliefSynthesis {
  label: string;
  text: string;
}

export const beliefs: string[] = [
  'We believe understanding comes before execution.',
  'We believe good work starts with good questions.',
  'We believe brands grow when they\u2019re clear about who they are and why they matter.',
  'We believe marketing should be grounded in evidence, not assumptions.',
  'We believe creativity is most powerful when it solves a real problem.',
  'We believe businesses deserve partners who tell the truth, even when it\u2019s uncomfortable.',
];

export const beliefSynthesis: BeliefSynthesis = {
  label: 'CORE SYNTHESIS',
  text: 'And we believe the best results come from thinking first and moving with purpose.',
};

// --- Section 6: Dual Cards ---
export interface DualCard {
  title: string;
  description: string;
}

export const dualCards: DualCard[] = [
  {
    title: 'OUR MISSION',
    description:
      'To help businesses make better marketing decisions through research, strategy, creativity, and thoughtful execution.',
  },
  {
    title: 'OUR VISION',
    description:
      'A world where marketing feels smarter, more useful, and more human.',
  },
];
