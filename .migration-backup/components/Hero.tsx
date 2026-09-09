interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  imageSrc?: string;
}

export default function Hero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  imageSrc,
}: HeroProps) {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden pt-20 bg-navy-950">
      {/* Background Image */}
      {imageSrc ? (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${imageSrc})` }}
          role="img"
          aria-label="Hero background"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900" />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-up">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-off-white mb-6 leading-tight tracking-tight">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-navy-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={primaryCTA.href}
            className="inline-flex items-center justify-center px-8 py-4 bg-off-white text-navy-950 font-semibold rounded-lg hover:bg-navy-100 transition-all duration-200 tracking-wide"
          >
            {primaryCTA.label}
          </a>
          {secondaryCTA && (
            <a
              href={secondaryCTA.href}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-off-white text-off-white font-semibold rounded-lg hover:bg-off-white hover:text-navy-950 transition-all duration-200 tracking-wide"
            >
              {secondaryCTA.label}
            </a>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-off-white opacity-60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
