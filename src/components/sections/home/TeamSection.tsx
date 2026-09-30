'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import TeamCard from '@/components/ui/TeamCard';
import { teamMembers } from '@/data/team';
import { useStaggerAnimation } from '@/hooks/useGsapAnimation';

export default function TeamSection() {
  const containerRef = useStaggerAnimation<HTMLDivElement>('.team-card-item', {
    stagger: 0.1,
    duration: 0.6,
    y: 40,
  });

  return (
    <section id="team" className="bg-background-light py-16 md:py-[90px] relative">
      <div className="container mx-auto px-4 md:px-8">

        {/* Title: LAB RUNNERS */}
        <div className="mb-8">
          <SectionHeading
            text="LAB"
            accentText="RUNNERS"
            accentColor="primary"
          />
        </div>

        {/* 4 columns x 2 rows Grid */}
        <div ref={containerRef} className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card-item">
              <TeamCard
                id={member.id}
                name={member.name}
                role={member.role}
                description={member.description}
                image={member.image}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
