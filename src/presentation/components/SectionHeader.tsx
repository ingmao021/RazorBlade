import React from 'react';

interface SectionHeaderProps {
  category: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  category,
  title,
  description,
  centered = true,
}) => {
  return (
    <div className={`mb-16 max-w-3xl ${centered ? 'mx-auto text-center' : 'text-left'}`}>
      <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold block mb-3">
        {category}
      </span>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-100 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-gray-400 font-light leading-relaxed">
          {description}
        </p>
      )}
      <div className={`mt-6 h-[2px] w-12 bg-brand-gold ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};
