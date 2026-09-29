import React from 'react';

interface SpaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  lightMode?: boolean;
}

export const SpaLogo: React.FC<SpaLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  lightMode = false
}) => {
  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16'
  }[size];

  // Primary local logo asset downloaded from https://freeimage.host/i/nYML99t (fallback to direct host)
  const logoSrc = "/logo.png";
  const fallbackSrc = "https://iili.io/nYML99t.png";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Individual Logo Image from user URL https://freeimage.host/i/nYML99t */}
      <div
        className={`relative ${iconDimensions} rounded-full overflow-hidden shrink-0 shadow-md transition-transform duration-300 hover:scale-105 flex items-center justify-center ${
          lightMode
            ? 'bg-white/95 border-2 border-white/40 ring-2 ring-purple-400/30'
            : 'bg-white border-2 border-purple-200/90 ring-2 ring-emerald-500/20 shadow-purple-900/10'
        }`}
      >
        <img
          src={logoSrc}
          onError={(e) => {
            // Fallback to direct hosted URL if local path fails
            if (e.currentTarget.src !== fallbackSrc) {
              e.currentTarget.src = fallbackSrc;
            }
          }}
          alt="Relax Spa Logo"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 font-heading tracking-wider font-bold leading-tight">
            <span
              className={`text-lg sm:text-xl font-extrabold tracking-[0.16em] ${
                lightMode ? 'text-white' : 'text-[#4c1d95]'
              }`}
            >
              RELAX
            </span>
            <span
              className={`text-lg sm:text-xl font-light tracking-[0.2em] ${
                lightMode ? 'text-[#34d399]' : 'text-[#059669]'
              }`}
            >
              SPA
            </span>
          </div>
          <span
            className={`text-[9.5px] uppercase tracking-[0.22em] font-semibold leading-none mt-0.5 ${
              lightMode ? 'text-purple-200' : 'text-[#64748b]'
            }`}
          >
            Wellness • Mavdi Rajkot
          </span>
        </div>
      )}
    </div>
  );
};
