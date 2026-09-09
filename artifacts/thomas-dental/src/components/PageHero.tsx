interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
}

import CoastalLinework from './CoastalLinework';

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-sky-950 px-6 pb-20 pt-36 text-white sm:px-8 sm:pb-28 sm:pt-44 lg:px-12">
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-aqua-950/20 to-transparent" />
      <CoastalLinework className="absolute -bottom-16 -right-20 h-[22rem] w-[27rem] text-aqua-100/20 sm:-bottom-20 sm:-right-16 sm:h-[25rem] sm:w-[31rem]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="mb-5 font-display text-xs font-bold uppercase tracking-[0.28em] text-aqua-300">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl font-display text-4xl font-bold uppercase leading-[1.08] tracking-[0.08em] text-white sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <div className="mb-7 mt-8 h-1 w-20 bg-sunrise-400" />
        <p className="max-w-2xl font-sans text-lg font-light leading-relaxed text-navy-100 sm:text-xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}