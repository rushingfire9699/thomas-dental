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
        {/* Side-view palm emerging from the right edge. */}
        <path d="M389 340C386 283 386 218 394 145" strokeWidth="2.5" />
        <path d="M394 151C341 130 282 93 224 34" strokeWidth="2.25" />
        <path d="M394 159C335 153 273 162 208 194" strokeWidth="2.25" />
        <path d="M395 144C403 91 418 45 441 10" strokeWidth="2.25" />
        <path d="M396 169C423 151 443 131 459 105" strokeWidth="2.25" />
        <path d="M394 177C347 201 304 238 267 292" strokeWidth="2.25" />
        <path d="M391 132C375 106 368 80 368 53" strokeWidth="2.25" />
        <path d="M280 310C328 293 376 293 422 309C448 318 472 320 497 315" strokeWidth="2" />
        <path d="M242 332C299 314 354 316 409 333C437 342 465 343 492 337" strokeWidth="2" />
      </g>
    </svg>
  );
}