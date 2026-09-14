import React from 'react';

interface SectionHeadingProps {
  text: string;
  accentText: string;
  accentColor?: 'primary' | 'danger';
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
  id?: string;
}

const colorMap = {
  primary: 'text-primary',
  danger: 'text-danger',
};

export default function SectionHeading({
  text,
  accentText,
  accentColor = 'primary',
  className = '',
  as: Tag = 'h2',
  id,
}: SectionHeadingProps) {
  return (
    <Tag
      id={id}
      className={`heading-mablab ${className}`}
    >
      <span className="text-dark">{text}</span>{' '}
      <span className={colorMap[accentColor]}>{accentText}</span>
    </Tag>
  );
}
