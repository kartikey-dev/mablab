import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';

export default function PeopleSection() {
  const roleTags = [
    { label: 'Researchers', color: 'text-primary' },
    { label: 'Strategists', color: 'text-stroke' },
    { label: 'Marketers', color: 'text-secondary' },
    { label: 'Designers', color: 'text-stroke' },
    { label: 'Writers', color: 'text-primary' },
    { label: 'Technologists', color: 'text-secondary' },
    { label: 'Operators', color: 'text-stroke' },
    { label: 'Problem-solvers', color: 'text-danger' },
  ];

  return (
    <section className="bg-background-light py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">

        <SectionHeading text="THE PEOPLE" accentText="BEHIND THE LAB" accentColor="primary" className="mb-6" />

        <p className="text-xl text-stroke font-normal leading-relaxed mb-6 sm:w-3/4">
          MAB Lab brings together people from different disciplines, backgrounds, and areas of expertise.
        </p>

        {/* Role Tags */}
        <div className="flex flex-wrap gap-3 mb-6">
          {roleTags.map((role) => (
            <span
              key={role.label}
              className={`px-4 py-1.5 border border-stroke comic-shadow-sm para-12 capitalize ${role.color} font-medium`}
            >
              {role.label}
            </span>
          ))}
        </div>

        <p className="para-18 text-stroke font-normal leading-relaxed mb-6 sm:w-3/4">
          Different challenges require different perspectives, and that&apos;s what makes the work interesting.
        </p>

        {/* Shared Curiosity Quote */}
        <div className="border-2 border-stroke comic-shadow-sm p-4 sm:w-3/4 mb-10">
          <p className="para-18 text-stroke font-normal leading-relaxed">
            What brings us together is a shared curiosity about business, marketing, creativity, technology, and how ideas move through the world.
          </p>
        </div>

        {/* Founder & Team Section Placeholder */}
        <div className="border-2 border-dashed border-stroke p-10 md:p-14 text-center bg-white">
          <div className='border-2 border-dashed border-[#D1D5DB] bg-[#F9FAFB] p-10 md:p-14'>
            <p className="para-18 text-stroke font-extrabold mb-2">[Founder &amp; Team Section]</p>
            <p className="para-12 text-gray-500 font-normal! normal-case tracking-wider">
              RESERVED SHOWCASE // FOUNDERS · FELLOWS · RESEARCHERS · SPECIALIST OPERATORS
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
