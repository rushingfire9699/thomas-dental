import { directionsUrl, mapEmbedUrl, practiceInfo } from '@/lib/practice-info';

export default function PracticeMap() {
  return (
    <div className="relative overflow-hidden border-2 border-white bg-navy-100 shadow-2xl">
      <iframe
        title={`Map showing ${practiceInfo.fullAddress}`}
        src={mapEmbedUrl}
        className="h-[420px] w-full grayscale-[15%]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 left-4 right-4 bg-navy-950 px-6 py-4 text-center font-display text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-colors hover:bg-sunrise-400 hover:text-navy-950 sm:left-auto sm:right-4"
      >
        Get Directions
      </a>
    </div>
  );
}