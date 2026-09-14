'use client';

import React from 'react';
import Image from 'next/image';
import { teamMembers } from '@/data/team';

export default function TeamSection() {
  return (
    <section id="team" className="bg-background-light py-16 md:py-[90px] relative">
      <div className="container mx-auto px-4 md:px-8">

        {/* Title: LAB RUNNERS */}
        <h2 className="heading-mablab text-stroke mb-8">
          LAB <span className="text-primary">RUNNERS</span>
        </h2>

        {/* 4 columns x 2 rows Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white border-2 border-gray-200 hover:border-stroke p-4 transition-all comic-shadow-hover cursor-pointer"
            >
              {/* Grayscale Portrait Image */}
              <div className="relative aspect-square w-full mb-4 overflow-hidden bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Member Name */}
              <h3 className="para-18 text-stroke uppercase">
                {member.name}
              </h3>

              {/* Member Role (Purple) */}
              <p className="para-14 text-primary mt-0.5">
                {member.role}
              </p>

              {/* Member Description (Gray) */}
              <p className="para-12 text-gray-500 mt-1 normal-case! font-normal">
                {member.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
