import React from 'react';
import { MessageCircle, Sparkles, Calendar, Phone } from 'lucide-react';
import { BUSINESS_DATA, buildWhatsAppUrl } from '../data/business';
import { ImageWithFallback } from './ImageWithFallback';

export const Experience: React.FC = () => {
  const experienceImageUrl = "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1400&q=80";

  const bookingUrl = buildWhatsAppUrl(
    'Hi Relax Spa, I would like to book a visit for a relaxing spa session.'
  );

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#2e1065] text-white">
      {/* Background Image with Deep Royal Purple & Emerald Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={experienceImageUrl}
          alt="Tranquil relaxation lounge at Relax Spa Rajkot"
          type="experience"
          title="Tranquil Sanctuary"
          subtitle="Quiet spaces and comforting atmosphere"
          className="w-full h-full object-cover"
        />
        {/* Scrim Overlay in Deep Purple & Emerald */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2e1065]/95 via-[#3b0764]/90 to-[#064e3b]/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 rounded-full bg-white/10 border border-purple-300/30 text-xs font-semibold text-[#a7f3d0] backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Relaxing Experience</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight mb-5 leading-tight text-balance">
          {BUSINESS_DATA.experienceHeadline}
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed mb-9 font-normal text-balance">
          {BUSINESS_DATA.experienceSubtext}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto emerald-button inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-sm sm:text-base font-semibold shadow-xl shadow-emerald-950/40"
          >
            <Calendar className="w-4 h-4 fill-current text-white" />
            <span>Book Your Visit</span>
          </a>

          <a
            href={BUSINESS_DATA.callUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-medium text-white hover:text-emerald-200 border border-white/30 hover:bg-white/10 transition-colors"
          >
            <Phone className="w-4 h-4 text-emerald-300" />
            <span>Call {BUSINESS_DATA.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
