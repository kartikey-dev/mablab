'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import StoryCard from '@/components/ui/StoryCard';
import { stories } from '@/data/stories';
import { useStaggerAnimation } from '@/hooks/useGsapAnimation';

export default function MabStoriesSection() {
  const accentBars = ['bg-primary', 'bg-secondary', 'bg-tag-orange'];
  const containerRef = useStaggerAnimation<HTMLDivElement>('.story-card-item', {
    stagger: 0.12,
    duration: 0.7,
    y: 40,
  });

  return (
    <section id="stories" className="bg-background-light py-16 md:py-[90px] relative">
      <div className="container mx-auto px-4 md:px-8">

        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-28 gap-6">
          <div>
            <SectionHeading text="MAB" accentText="STORIES" accentColor="primary" />
            <p className="para-18 text-gray-500 mt-2 font-normal!">
              Marketing and branding inspiration, research, tips and more...
            </p>
          </div>

          <div>
            <Button href="#" variant="secondary" size="md">
              VIEW ALL STORIES
            </Button>
          </div>
        </div>

        {/* 3 Story Cards */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-6">
          {stories.map((story, idx) => (
            <div key={story.id} className="story-card-item">
              <StoryCard
                id={story.id}
                number={story.number}
                title={story.title}
                description={story.description}
                accentBarClass={accentBars[idx % accentBars.length]}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
