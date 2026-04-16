import { Link } from "react-router-dom";

const Logo = ({ className = "" }: { className?: string }) => (
  <Link to="/" className={`flex items-center gap-2.5 group ${className}`} aria-label="Devity Technologies home">
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <defs>
        <linearGradient id="dt-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(168 56% 54%)" />
          <stop offset="1" stopColor="hsl(187 100% 19%)" />
        </linearGradient>
      </defs>
      <path
        d="M2 20 L8 20 L11 10 L15 30 L19 14 L22 26 L26 18 L38 18"
        stroke="url(#dt-grad)"
        strokeWidth="2.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />
    </svg>
    <div className="flex flex-col leading-none">
      <span className="font-display font-semibold tracking-tight text-lg text-foreground">
        Devity
      </span>
      <span className="font-mono text-[8.5px] tracking-[0.3em] text-muted-foreground uppercase mt-0.5">
        Technologies
      </span>
    </div>
  </Link>
);

export default Logo;
