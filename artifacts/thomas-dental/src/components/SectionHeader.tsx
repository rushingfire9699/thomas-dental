import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  alignment = 'center',
  light = false,
}: SectionHeaderProps) {
  const isCenter = alignment === 'center';
  
  return (
    <div className={`mb-16 md:mb-24 ${isCenter ? 'text-center flex flex-col items-center' : 'text-left'}`}>
      <h2 
        className={`text-3xl md:text-5xl font-display font-bold uppercase tracking-wider mb-8 
          ${light ? 'text-white' : 'text-navy-950'}
        `}
      >
        {title}
      </h2>
      
      {/* Geometric accent line */}
      <div 
        className={`w-16 h-1 mb-8 
          ${light ? 'bg-aqua-400' : 'bg-sunrise-400'} 
          ${!isCenter && 'mr-auto'}
        `} 
      />
      
      {subtitle && (
        <p 
          className={`text-lg md:text-xl font-sans font-light leading-relaxed max-w-2xl 
            ${light ? 'text-navy-100' : 'text-navy-700'}
          `}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}