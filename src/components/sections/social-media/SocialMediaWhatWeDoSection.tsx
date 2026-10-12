import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import IconComponent from '@/components/ui/IconComponent';
import Button from '@/components/ui/Button';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';
import { socialWhatWeDoCards } from './data';

export default function SocialMediaWhatWeDoSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-[#D0DBED]/10 py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="What"
          accentText="We Do."
          accentColor="primary"
          className="mb-12 capitalize font-bold"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialWhatWeDoCards.map((card) => (
            <IconCard
              key={card.title}
              icon={card.icon ? <IconComponent name={card.icon} className="w-8 h-8 text-red-500" /> : undefined}
              title={card.title}
              className={card.span ? card.span : ''}
              content={
                <div>
                  {!card.span && (card.bullets.length > 0 && (
                    <ul className="space-y-2 mt-2">
                      {card.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="para-14 text-gray-600 font-normal flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-stroke rounded-full inline-block shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ))}
                  {card.showButton && (
                    <div className="mt-4">
                      <Button href="/contact" variant="secondary" size="md" className="capitalize font-bold">
                        Let&apos;s Talk!
                      </Button>
                    </div>
                  )}
                </div>
              }
            />
          ))}
        </div>
      </div>
    </GsapSection>
  );
}
