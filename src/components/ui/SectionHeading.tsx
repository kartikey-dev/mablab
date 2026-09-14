import React from 'react';

export interface SectionHeadingProps {
  text?: string;
  accentText?: string;
  accentColor?: 'primary' | 'secondary' | 'danger' | 'cyan' | 'white' | string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
  id?: string;
  children?: React.ReactNode;
}

const colorMap: Record<string, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  danger: 'text-danger',
  cyan: 'text-cyan-text',
  white: 'text-white',
};

export default function SectionHeading({
  text,
  accentText,
  accentColor = 'primary',
  className = '',
  as: Tag = 'h2',
  id,
  children,
}: SectionHeadingProps) {
  const accentClass = colorMap[accentColor] || accentColor;

  return (
    <Tag
      id={id}
      className={`heading-mablab ${className}`}
    >
      {children ? (
        children
      ) : (
        <>
          {text && <span className="text-stroke">{text}</span>}
          {text && accentText && ' '}
          {accentText && <span className={accentClass}>{accentText}</span>}
        </>
      )}
    </Tag>
  );
}
