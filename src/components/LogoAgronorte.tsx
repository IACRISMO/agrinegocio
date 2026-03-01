"use client";

interface LogoAgronorteProps {
  className?: string;
  size?: number;
}

/**
 * Logo AGRONORTE INGENIEROS: espiga (agricultura, granos, rendimiento).
 * Verde agrícola, limpio y reconocible.
 */
export function LogoAgronorte({ className = "", size = 40 }: LogoAgronorteProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      {/* Tallo */}
      <path d="M24 44V10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Espiga: granos */}
      <circle cx="24" cy="12" r="4" fill="currentColor" />
      <circle cx="18" cy="20" r="3.5" fill="currentColor" />
      <circle cx="30" cy="20" r="3.5" fill="currentColor" />
      <circle cx="24" cy="28" r="3.5" fill="currentColor" />
      <circle cx="18" cy="36" r="3" fill="currentColor" />
      <circle cx="30" cy="36" r="3" fill="currentColor" />
    </svg>
  );
}
