import React from 'react';
import { Check, Phone, MessageCircle, MapPin, Sparkles, Navigation } from 'lucide-react';
import { BUSINESS_DATA, buildGeneralEnquiryUrl } from '../data/business';
import { ImageWithFallback } from './ImageWithFallback';

export const About: React.FC = () => {
  const aboutImageUrl = "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1000&q=80";

  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative border-t border-purple-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative background aura */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-purple-100 via-white to-emerald-100 opacity-90 blur-xl -z-10" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/10 aspect-[4/3] sm:aspect-[5/4] border border-purple-100 bg-white">
                <ImageWithFallback
                  src={aboutImageUrl}
                  alt="Tranquil wellness ambience at Relax Spa Mavdi Rajkot"
                  type="about"
                  title="Relaxation Sanctuary"
                  subtitle="A peaceful wellness escape designed for your peace of mind"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Subdued overlay info plaque */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-purple-100 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center border border-purple-200 text-[#7e22ce]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-heading font-bold text-[#1e1b4b]">Mavdi, Rajkot</p>
                      <p className="text-[11px] text-[#059669] font-semibold">Near Premvatika Restaurant</p>
                    </div>
                  </div>
                  <a
                    href={BUSINESS_DATA.callUrl}
                    className="text-xs font-bold text-[#6b21a8] hover:text-[#059669] transition-colors"
                  >
                    Call Us →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="max-w-xl">
              <span className="text-xs font-bold tracking-[0.25em] text-[#6b21a8] uppercase block mb-2.5">
                About Relax Spa
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#1e1b4b] tracking-tight mb-5">
                Your Time to Relax
              </h2>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed mb-6 font-normal">
                {BUSINESS_DATA.aboutText}
              </p>

              {/* Address card snippet */}
              <div className="p-3.5 rounded-xl bg-purple-50/50 border border-purple-100/80 mb-6 text-xs text-[#475569]">
                <p className="font-semibold text-[#1e1b4b] mb-1">Visit Relax Spa in Mavdi:</p>
                <p className="text-[#334155]">{BUSINESS_DATA.address.fullSingleLine}</p>
              </div>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {BUSINESS_DATA.aboutHighlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-200 hover:bg-emerald-50/40 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#059669]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#334155]">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href={BUSINESS_DATA.callUrl}
                  className="purple-button inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold shadow-md"
                >
                  <Phone className="w-4 h-4 fill-current text-white" />
                  <span>Call {BUSINESS_DATA.phoneDisplay}</span>
                </a>

                <a
                  href={buildGeneralEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-button inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-white" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={BUSINESS_DATA.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-sm font-bold text-[#059669] hover:bg-emerald-50 transition-colors"
                >
                  <Navigation className="w-4 h-4 text-[#059669]" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
