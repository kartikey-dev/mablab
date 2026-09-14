import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface CaseStudyCardProps {
  category: string;
  title: string;
  observation?: string;
  image: string;
  slug?: string;
  labNote?: string;
  featured?: boolean;
  className?: string;
}

export default function CaseStudyCard({
  category,
  title,
  observation,
  image,
  slug = '#',
  labNote,
  featured = false,
  className = '',
}: CaseStudyCardProps) {
  if (featured) {
    return (
      <div className={`lg:col-span-2 h-full relative bg-white border-2 border-stroke comic-shadow grid md:grid-cols-2 ${className}`}>
        {/* Observation Sticky Tape Note at Top Right */}
        {observation && (
          <div className="absolute -top-9 -right-6 z-20 bg-[#FEF3C7] border border-stroke p-4 max-w-[200px] comic-shadow transform -rotate-3">
            <span className="para-16 text-stroke block mb-0.5">
              OBSERVATION:
            </span>
            <p className="para-12 text-stroke/70 leading-tight normal-case!">
              {observation}
            </p>
          </div>
        )}

        {/* Left Image Half */}
        <div className="relative min-h-[300px] md:min-h-[420px] w-full bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover grayscale"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Right Purple Content Half */}
        <div className="bg-primary p-8 md:p-10 text-white flex flex-col justify-center">
          <div>
            <span className="para-12 text-purple-200 block mb-4">
              {category}
            </span>
            <h3 className="heading-h3 leading-snug normal-case! mb-6">
              {title}
            </h3>
          </div>

          <div>
            <Link
              href={slug}
              className="inline-flex items-center gap-3 para-12 text-white hover:text-yellow-300 transition-colors"
            >
              <span>VIEW CASE STUDY</span>
              <span className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-sm">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="white" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white border-2 border-stroke comic-shadow p-4 relative ${className}`}>
      {labNote && (
        <div className="absolute top-3 left-3 z-10 bg-tag-orange comic-shadow text-white para-12 px-2.5 py-1 border border-stroke">
          {labNote}
        </div>
      )}
      <div className="relative aspect-video w-full mb-3 bg-gray-100 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover grayscale"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <span className="para-12 text-tag-orange block mb-1">
        {category}
      </span>
      <h4 className="para-16 text-stroke leading-snug">
        {title}
      </h4>
    </div>
  );
}
