import { Link } from "wouter";
import CoastalLinework from "./CoastalLinework";

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
    <section className="relative w-full h-[100svh] min-h-[700px] flex items-center justify-center overflow-hidden bg-sky-950 pt-20">
      {/* Subtle coastal linework keeps the open sky feeling intentional. */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <CoastalLinework className="absolute -bottom-14 -right-24 h-[26rem] w-[32rem] text-aqua-100/15 sm:-bottom-16 sm:-right-12 sm:h-[31rem] sm:w-[38rem]" />
        
        {/* If we have an image, it overlays the pattern but keeps the navy tint */}
        {imageSrc && (
          <div className="absolute inset-0 z-10">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-75"
              style={{ backgroundImage: `url(${imageSrc})` }}
              role="img"
              aria-label="Hero background"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-sky-950/15 via-sky-950/35 to-sky-950/80" />
            <div className="absolute inset-0 bg-sky-300/10 mix-blend-screen" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center fade-in-up">
        <p className="mb-6 font-display text-xs font-bold uppercase tracking-[0.3em] text-aqua-300">
          Boca Raton · Florida
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white mb-8 leading-[1.1] tracking-wider uppercase">
          {title}
        </h1>
        
        <div className="w-24 h-1 bg-sunrise-400 mb-8 mx-auto" />
        
        <p className="text-lg sm:text-xl text-sky-50/90 mb-12 max-w-2xl mx-auto font-sans font-light tracking-wide leading-relaxed">
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
          <Link
            href={primaryCTA.href}
            className="inline-flex items-center justify-center px-10 py-5 bg-sunrise-400 text-navy-950 font-display font-bold uppercase tracking-[0.2em] text-sm hover:bg-sunrise-300 transition-all duration-300 rounded-none shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.1)] hover:translate-y-[2px] hover:translate-x-[2px]"
          >
            {primaryCTA.label}
          </Link>
          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-aqua-400 text-aqua-400 font-display font-bold uppercase tracking-[0.2em] text-sm hover:bg-aqua-400 hover:text-navy-950 transition-all duration-300 rounded-none"
            >
              {secondaryCTA.label}
            </Link>
          )}
        </div>
      </div>

      {/* Geometric Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 animate-bounce sm:flex">
        <span className="text-[10px] font-display uppercase tracking-[0.3em] text-navy-300">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-navy-300 to-transparent" />
      </div>
    </section>
  );
}