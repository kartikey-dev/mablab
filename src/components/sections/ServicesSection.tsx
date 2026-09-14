'use client';

import React from 'react';
import IconComponent, { ServiceIconName } from '../ui/IconComponent';
import { services } from '@/data/services';

export default function ServicesSection() {
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
        <h2 className="heading-mablab text-primary mb-8">
          SERVICES
        </h2>

        {/* 3 columns x 4 rows Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border-2 border-stroke comic-shadow p-6 hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex flex-col justify-between h-36 cursor-pointer group"
            >
              <div className="text-red-500 mb-2">
                <IconComponent name={service.icon as ServiceIconName} className="w-8 h-8 text-red-500" />
              </div>

              {/* Rolling Text Mask */}
              <div className="relative overflow-hidden h-14">
                <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-14">
                  {/* Heading (Default) */}
                  <h3 className="font-heading text-2xl font-bold text-stroke uppercase h-14 flex items-center">
                    {service.name}
                  </h3>
                  {/* One-Liner Description (Rolling in on hover) */}
                  <p className="para-16 text-gray-700 font-medium normal-case leading-snug h-14 flex items-center">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
