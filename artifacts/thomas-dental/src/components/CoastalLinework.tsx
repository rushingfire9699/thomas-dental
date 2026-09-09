interface CoastalLineworkProps {
  className?: string;
}

export default function CoastalLinework({ className = '' }: CoastalLineworkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 420 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M292 338C287 278 287 207 305 107" strokeWidth="2.5" />
        <path d="M302 166C252 143 199 111 150 62" strokeWidth="2.25" />
        <path d="M298 198C244 195 188 216 137 264" strokeWidth="2.25" />
        <path d="M303 139C325 91 361 53 402 28" strokeWidth="2.25" />
        <path d="M300 215C344 199 385 172 414 137" strokeWidth="2.25" />
        <path d="M300 112C282 92 272 71 268 47" strokeWidth="2.25" />
        <path d="M284 300C235 284 190 285 145 303C111 316 74 320 32 309" strokeWidth="2" />
        <path d="M284 323C239 312 193 316 147 330C103 343 61 343 18 328" strokeWidth="2" />
      </g>
    </svg>
  );
}