import React from 'react';
import IconComponent, { ServiceIconName } from '@/components/ui/IconComponent';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';

export default function ServicesGridSection() {
  return (
    <section className="py-16 md:py-[90px] bg-white border-b-4 border-stroke">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-background-light border-2 border-stroke comic-shadow p-8 flex flex-col justify-between hover:translate-x-0.5 hover:translate-y-0.5 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-white border-2 border-stroke flex items-center justify-center text-danger shadow-sm">
                    <IconComponent name={service.icon as ServiceIconName} className="w-8 h-8 text-danger" />
                  </div>
                  <span className="para-12 text-gray-400">
                    FORMULA #{String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h2 className="heading-h3 text-stroke mb-3 group-hover:text-primary transition-colors">
                  {service.name}
                </h2>

                <p className="para-14 text-gray-600 font-normal leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div>
                <Button href={`/services/${service.id}`} variant="ghost" size="sm" showArrow className="text-secondary! p-0!">
                  INITIATE FORMULA
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
