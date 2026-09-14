import React from 'react';
import Image from 'next/image';

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  className?: string;
}

export default function TeamCard({
  name,
  role,
  description,
  image,
  className = '',
}: TeamCardProps) {
  return (
    <div
      className={`group bg-white rounded-none overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-gray-100 ${className}`}
      role="article"
      aria-label={`${name} - ${role}`}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={`${name}, ${role} at Mablab`}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="p-4">
        <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-dark">
          {name}
        </h3>
        <p className="text-primary font-heading font-bold text-xs mt-1">{role}</p>
        <p className="para-14 text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
}
