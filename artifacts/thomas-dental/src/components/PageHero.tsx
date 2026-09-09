interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-sky-950 px-6 pb-20 pt-36 text-white sm:px-8 sm:pb-28 sm:pt-44 lg:px-12">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-aqua-400/30" />
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-sunrise-400/30" />
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-aqua-950/20 to-transparent" />
      <svg className="absolute -bottom-10 -right-8 h-56 w-56 text-sky-100/20" viewBox="0 0 320 320" fill="none" aria-hidden="true">
        <path d="M178 319C174 249 174 172 190 63" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M185 166C128 135 72 108 16 54M179 202C117 200 61 226 12 279M188 123C214 70 258 31 310 12M179 211C235 193 282 158 316 119" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
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