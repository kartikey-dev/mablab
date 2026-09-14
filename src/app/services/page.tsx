import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import IconComponent, { ServiceIconName } from '@/components/ui/IconComponent';
import Button from '@/components/ui/Button';
import ContactSection from '@/components/sections/ContactSection';
import { services } from '@/data/services';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Mablab — 12 Scientific Marketing Formulas',
  description:
    'Explore Mablab’s 12 specialized marketing and branding formulas: Branding, Web Development, SEO, Paid Ads, Social Media, Content, PR & Influencers, Video & Podcast, Market Research, Design, Events, and Consulting.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background-light text-stroke border-4 border-stroke">
      <Header />

      {/* Services Hero Header */}
      <section className="bg-background-light py-16 md:py-[90px] border-b-4 border-stroke text-center relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <span className="inline-block bg-primary text-yellow-300 para-12 px-3.5 py-1.5 border-2 border-stroke comic-shadow-sm mb-4">
            EXPERIMENTAL FORMULAS
          </span>
          <SectionHeading text="OUR" accentText="SERVICES" accentColor="primary" className="mb-4" />
          <p className="para-18 text-gray-600 max-w-2xl mx-auto font-normal">
            12 specialized scientific capabilities engineered to eliminate guesswork, outperform competitors, and scale business revenue.
          </p>
        </div>
      </section>

      {/* Full 12 Services Grid */}
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
                  <Button href="#contact" variant="ghost" size="sm" showArrow className="text-secondary! p-0!">
                    INITIATE FORMULA
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </main>
  );
}
