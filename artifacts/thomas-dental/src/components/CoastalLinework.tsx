interface CoastalLineworkProps {
  className?: string;
}

export default function CoastalLinework({ className = '' }: CoastalLineworkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {/* Layered palm canopy entering from the upper-right corner. */}
        <g strokeWidth="2.2">
          <path d="M414 177C438 119 482 56 550 15" />
          <path d="M418 177C478 133 540 112 598 113" />
          <path d="M414 176C402 112 398 57 406 5" />
          <path d="M411 180C360 137 303 103 243 87" />
          <path d="M417 182C469 160 526 164 590 192" />
        </g>

        {/* Palm leaflets. */}
        <g strokeWidth="1.45">
          <path d="M433 143L413 112M443 127L424 91M454 111L439 75M466 96L455 59M479 80L473 46M492 65L492 32M505 51L511 23M520 38L532 15" />
          <path d="M444 157L458 124M457 148L477 114M472 140L497 108M488 133L516 105M505 127L536 103M523 123L557 105M542 119L580 109" />
          <path d="M411 145L390 117M408 130L386 97M406 114L385 78M404 97L388 60M404 80L393 42M404 62L398 25" />
          <path d="M394 162L365 143M378 151L344 132M361 138L325 118M344 126L307 108M327 115L288 100M309 106L268 92" />
          <path d="M433 181L454 169M449 182L475 173M467 184L497 177M486 188L519 183M506 192L542 188M527 198L566 195" />
        </g>

        {/* Broad ocean waves across the lower horizon. */}
        <g strokeWidth="2">
          <path d="M0 287C88 251 151 267 218 295C291 325 352 319 421 284C485 252 541 251 600 276" />
          <path d="M0 326C83 293 150 307 220 333C293 360 361 350 429 316C490 286 548 287 600 306" />
          <path d="M28 354C92 332 145 337 199 354" />
        </g>
      </g>
    </svg>
  );
}