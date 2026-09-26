import SectionHeading from '@/components/ui/SectionHeading';
import React from 'react';

export interface BrandValueItem {
  label: string;
  quote: string;
  description: string;
}

export interface BrandValuesSectionProps {
  title?: React.ReactNode;
  items?: BrandValueItem[];
}

const defaultItems: BrandValueItem[] = [
  {
    label: 'BRAND VISION',
    quote: 'A world where businesses make better decisions because they understand their customers, markets, and opportunities more deeply.',
    description: 'We envision a future where marketing is less about chasing attention and more about creating understanding. Where businesses replace assumptions with insight, noise with clarity, and shortcuts with thoughtful strategy.',
  },
  {
    label: 'BRAND MISSION',
    quote: 'To help ambitious businesses build trust through deeper understanding.',
    description: 'We do this by combining research, strategy, creativity, and systems thinking to uncover what matters, simplify complexity, and create marketing that is clear, useful, and effective.',
  },
  {
    label: 'BRAND PROMISE',
    quote: "We won't give you more noise. We'll help you understand what matters.",
    description: 'Every engagement, recommendation, design, strategy, and system we create is built to reduce uncertainty, increase clarity, and help you make better decisions with confidence.',
  },
];

export default function BrandValuesSection({ items = defaultItems }: BrandValuesSectionProps) {
  return (
    <section className="bg-background-light py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">

        {/* Hero Heading */}
        <SectionHeading text="We Like" accentText="Figuring Things Out." accentColor="primary" className="mb-16 capitalize" />

        {/* Brand Items */}
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`grid md:grid-cols-[1fr_2fr] gap-8 ${i < items.length - 1 ? 'pb-8 mb-8 border-b border-stroke' : ''}`}
          >
            <div>
              <span className="font-heading text-2xl font-bold text-stroke tracking-widest">{item.label}</span>
            </div>
            <div className='max-w-3xl'>
              <p className="para-18 text-stroke font-medium mb-2">
                {item.quote}
              </p>
              <p className="para-18 text-stroke font-medium">
                {item.description}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
