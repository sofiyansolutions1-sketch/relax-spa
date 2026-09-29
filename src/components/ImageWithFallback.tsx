import React, { useState } from 'react';
import { Flame, Sparkles, Flower2, Droplet, Moon, Coffee, HeartHandshake } from 'lucide-react';

interface ImageWithFallbackProps {
  src?: string;
  alt: string;
  className?: string;
  type?: 'hero' | 'about' | 'experience' | 'candle' | 'massage' | 'oils' | 'towels' | 'stones' | 'lounge' | 'tea' | 'decor';
  title?: string;
  subtitle?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  type = 'decor',
  title,
  subtitle
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const showImage = Boolean(src && !error);

  const getVisualElements = () => {
    switch (type) {
      case 'hero':
        return {
          icon: <Sparkles className="w-10 h-10 text-[#7e22ce]" />,
          gradient: 'from-[#faf5ff] via-[#ffffff] to-[#ecfdf5]',
          accentGlow: 'bg-[#a855f7]/15',
          border: 'border-[#ddd6fe]',
          badgeText: 'text-[#6b21a8]',
          motif: (
            <svg className="w-56 h-56 text-[#7e22ce]/10" viewBox="0 0 100 100" fill="none" stroke="currentColor">
              <circle cx="50" cy="50" r="45" strokeWidth="0.75" strokeDasharray="3 3" />
              <circle cx="50" cy="50" r="32" strokeWidth="0.75" />
              <path d="M50 15 C 40 35, 40 65, 50 85 C 60 65, 60 35, 50 15 Z" strokeWidth="1" />
              <path d="M15 50 C 35 40, 65 40, 85 50 C 65 60, 35 60, 15 50 Z" strokeWidth="1" />
            </svg>
          )
        };
      case 'about':
        return {
          icon: <Flower2 className="w-10 h-10 text-[#059669]" />,
          gradient: 'from-[#ecfdf5] via-[#ffffff] to-[#f5f3ff]',
          accentGlow: 'bg-[#10b981]/15',
          border: 'border-[#a7f3d0]',
          badgeText: 'text-[#047857]',
          motif: (
            <svg className="w-48 h-48 text-[#059669]/10" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 20 C55 35 65 45 80 50 C65 55 55 65 50 80 C45 65 35 55 20 50 C35 45 45 35 50 20 Z" opacity="0.5" />
            </svg>
          )
        };
      case 'experience':
        return {
          icon: <Moon className="w-10 h-10 text-[#7e22ce]" />,
          gradient: 'from-[#2e1065] via-[#3b0764] to-[#064e3b]',
          accentGlow: 'bg-[#a855f7]/25',
          border: 'border-[#a855f7]/40',
          badgeText: 'text-[#e9d5ff]',
          motif: (
            <svg className="w-56 h-56 text-[#a855f7]/15" viewBox="0 0 100 100" fill="none" stroke="currentColor">
              <circle cx="50" cy="50" r="42" strokeWidth="0.75" />
              <circle cx="50" cy="50" r="26" strokeWidth="0.75" strokeDasharray="4 4" />
            </svg>
          )
        };
      case 'candle':
        return {
          icon: <Flame className="w-8 h-8 text-[#059669]" />,
          gradient: 'from-[#f5f3ff] via-[#ffffff] to-[#ecfdf5]',
          accentGlow: 'bg-[#10b981]/15',
          border: 'border-[#a7f3d0]',
          badgeText: 'text-[#047857]',
          motif: null
        };
      case 'massage':
        return {
          icon: <HeartHandshake className="w-8 h-8 text-[#7e22ce]" />,
          gradient: 'from-[#f5f3ff] via-[#ffffff] to-[#ede9fe]',
          accentGlow: 'bg-[#9333ea]/15',
          border: 'border-[#ddd6fe]',
          badgeText: 'text-[#6b21a8]',
          motif: null
        };
      case 'oils':
        return {
          icon: <Droplet className="w-8 h-8 text-[#059669]" />,
          gradient: 'from-[#ecfdf5] via-[#ffffff] to-[#f5f3ff]',
          accentGlow: 'bg-[#059669]/15',
          border: 'border-[#a7f3d0]',
          badgeText: 'text-[#047857]',
          motif: null
        };
      case 'towels':
        return {
          icon: <Flower2 className="w-8 h-8 text-[#7e22ce]" />,
          gradient: 'from-[#ffffff] via-[#f8fafc] to-[#f5f3ff]',
          accentGlow: 'bg-[#7e22ce]/15',
          border: 'border-[#ddd6fe]',
          badgeText: 'text-[#6b21a8]',
          motif: null
        };
      case 'stones':
        return {
          icon: <Sparkles className="w-8 h-8 text-[#059669]" />,
          gradient: 'from-[#f5f3ff] via-[#ffffff] to-[#ecfdf5]',
          accentGlow: 'bg-[#10b981]/15',
          border: 'border-[#a7f3d0]',
          badgeText: 'text-[#047857]',
          motif: null
        };
      case 'tea':
        return {
          icon: <Coffee className="w-8 h-8 text-[#7e22ce]" />,
          gradient: 'from-[#ecfdf5] via-[#ffffff] to-[#f5f3ff]',
          accentGlow: 'bg-[#9333ea]/15',
          border: 'border-[#ddd6fe]',
          badgeText: 'text-[#6b21a8]',
          motif: null
        };
      default:
        return {
          icon: <Sparkles className="w-8 h-8 text-[#7e22ce]" />,
          gradient: 'from-[#ffffff] via-[#f5f3ff] to-[#ecfdf5]',
          accentGlow: 'bg-[#7e22ce]/15',
          border: 'border-[#ddd6fe]',
          badgeText: 'text-[#6b21a8]',
          motif: null
        };
    }
  };

  const visual = getVisualElements();
  const isDarkBanner = type === 'experience';

  return (
    <div className={`relative overflow-hidden bg-cover bg-center select-none ${className}`}>
      {showImage && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setError(true)}
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />
      )}

      {/* Styled Fallback Container (Displays when image is loading or unavailable) */}
      {(!showImage || !loaded) && (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br ${visual.gradient}`}
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            className={`absolute w-44 h-44 rounded-full blur-3xl pointer-events-none ${visual.accentGlow}`}
          />

          {/* Geometric Motif */}
          {visual.motif && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {visual.motif}
            </div>
          )}

          {/* Central Luxury Icon Frame */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div
              className={`w-14 h-14 rounded-2xl border ${visual.border} ${
                isDarkBanner ? 'bg-[#1e1035]' : 'bg-white/90 shadow-md shadow-purple-900/5'
              } backdrop-blur-md flex items-center justify-center mb-3 transition-transform duration-300 hover:scale-110`}
            >
              {visual.icon}
            </div>

            {title && (
              <h4
                className={`text-base font-heading font-semibold tracking-wide mb-1 ${
                  isDarkBanner ? 'text-white' : 'text-[#1e293b]'
                }`}
              >
                {title}
              </h4>
            )}

            {subtitle && (
              <p
                className={`text-xs max-w-xs line-clamp-2 ${
                  isDarkBanner ? 'text-purple-200' : 'text-[#64748b]'
                }`}
              >
                {subtitle}
              </p>
            )}

            {/* Subtle Brand Watermark */}
            <span
              className={`mt-2 text-[10px] tracking-widest uppercase font-semibold ${visual.badgeText}`}
            >
              Relax Spa • Rajkot
            </span>
          </div>

          {/* Elegant hairline corner accent lines */}
          <div
            className={`absolute top-3 left-3 w-4 h-4 border-t border-l ${visual.border} pointer-events-none`}
          />
          <div
            className={`absolute top-3 right-3 w-4 h-4 border-t border-r ${visual.border} pointer-events-none`}
          />
          <div
            className={`absolute bottom-3 left-3 w-4 h-4 border-b border-l ${visual.border} pointer-events-none`}
          />
          <div
            className={`absolute bottom-3 right-3 w-4 h-4 border-b border-r ${visual.border} pointer-events-none`}
          />
        </div>
      )}
    </div>
  );
};
