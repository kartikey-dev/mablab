'use client';

import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import TeamCard from '../ui/TeamCard';
import { teamMembers } from '@/data/team';

export default function TeamSection() {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <TeamCard
              key={member.id}
              id={member.id}
              name={member.name}
              role={member.role}
              description={member.description}
              image={member.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
