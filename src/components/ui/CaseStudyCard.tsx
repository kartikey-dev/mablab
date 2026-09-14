import React from 'react';
import Image from 'next/image';

interface CaseStudyCardProps {
  category: string;
  title: string;
  description?: string;
  observation?: string;
  image: string;
  slug: string;
  labNote?: string;
  featured?: boolean;
  className?: string;
}

export default function CaseStudyCard({
  category,
  title,
  description,
  observation,
  image,
  slug,
  labNote,
  featured = false,
  className = '',
}: CaseStudyCardProps) {
  if (featured) {
    return (
      <div className={`relative group ${className}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 comic-border-thick overflow-hidden">
          {/* Image */}
          <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden bg-gray-200">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover grayscale"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div className="bg-primary p-8 flex flex-col justify-center text-white">
            <span className="para-14 uppercase tracking-[3px] text-white/70 mb-4">
              {category}
            </span>
            <h3 className="font-heading font-bold text-2xl md:text-3xl leading-tight mb-6">
              {title}
            </h3>
            <a
              href={slug}
              className="inline-flex items-center gap-2 para-14 uppercase tracking-wider font-bold text-white hover:text-cyan-text transition-colors"
            >
              VIEW CASE STUDY
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="border border-white rounded-none p-0.5"
                aria-hidden="true"
              >
                <path
                  d="M7 10H13M13 10L10 7M13 10L10 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Observation sticky note */}
        {observation && (
          <div className="absolute top-4 right-4 md:top-6 md:left-[45%] bg-white/95 backdrop-blur-sm p-3 max-w-[200px] shadow-lg border border-gray-200 rounded-none z-10">
            <p className="font-heading font-bold text-xs uppercase tracking-wider text-dark mb-1">
              OBSERVATION:
            </p>
            <p className="text-xs text-gray-600 leading-relaxed">{observation}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`group overflow-hidden ${className}`}>
      {/* Lab Note Badge */}
      {labNote && (
        <div className="relative">
          <div className="relative aspect-video overflow-hidden bg-gray-200">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute top-3 right-3 bg-danger text-white px-3 py-1 text-xs font-heading font-bold uppercase">
              {labNote}
            </div>
          </div>
        </div>
      )}

      <div className="p-4">
        <span className="para-14 uppercase tracking-[2px] text-gray-500 text-xs">
          {category}
        </span>
        <h3 className="font-heading font-bold text-base mt-2 leading-snug text-dark group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
    </div>
  );
}
