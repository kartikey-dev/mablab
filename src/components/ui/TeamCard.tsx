import React from 'react';
import Image from 'next/image';

export interface TeamCardProps {
  id?: string;
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
      className={`bg-white border-2 border-gray-200 hover:border-stroke p-4 transition-all comic-shadow-hover cursor-pointer ${className}`}
      role="article"
      aria-label={`${name} - ${role}`}
    >
      {/* Grayscale Portrait Image */}
      <div className="relative aspect-square w-full mb-4 overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Member Name */}
      <h3 className="para-18 text-stroke uppercase">
        {name}
      </h3>

      {/* Member Role (Purple) */}
      <p className="para-14 text-primary mt-0.5">
        {role}
      </p>

      {/* Member Description (Gray) */}
      <p className="para-12 text-gray-500 mt-1 normal-case! font-normal">
        {description}
      </p>
    </div>
  );
}
