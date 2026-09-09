interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 sm:mb-16 lg:mb-20`}>
      {label && (
        <p className="text-xs font-semibold uppercase tracking-widest text-navy-600 mb-3 sm:mb-4">
          {label}
        </p>
      )}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-navy-950 mb-4 sm:mb-6 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg sm:text-xl text-navy-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
