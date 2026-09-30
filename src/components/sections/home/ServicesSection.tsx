'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import { services } from '@/data/services';
import { useStaggerAnimation } from '@/hooks/useGsapAnimation';

export default function ServicesSection() {
  const containerRef = useStaggerAnimation<HTMLDivElement>('.service-card-item', {
    stagger: 0.08,
    duration: 0.6,
    y: 35,
  });

  return (
    <section id="services" className="bg-background-light py-16 md:py-[90px] relative overflow-hidden">
      {/* Top Right Corner Decorative SVG */}
      <div className="absolute top-0 -right-8 md:-right-10 pointer-events-none z-10 opacity-10">
        <svg width="90" height="96" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40V0H40V40H0ZM0 90V50H40V90H0ZM50 40V0H90V40H50ZM50 90V50H90V90H50ZM10 30H30V10H10V30ZM60 30H80V10H60V30ZM60 80H80V60H60V80ZM10 80H30V60H10V80Z" fill="#5B21B6" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-20">

        {/* Title: SERVICES */}
        <div className="mb-8">
          <SectionHeading accentText="SERVICES" accentColor="primary" />
        </div>

        {/* 3 columns x 4 rows Grid */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="service-card-item">
              <ServiceCard
                id={service.id}
                name={service.name}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
