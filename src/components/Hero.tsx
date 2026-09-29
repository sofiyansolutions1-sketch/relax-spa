import React from 'react';
import { Phone, Sparkles, MapPin, ShieldCheck, Clock, Flower2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_DATA, buildGeneralEnquiryUrl } from '../data/business';

export const Hero: React.FC = () => {
  const heroImageSrc = "/hero-image.png";
  const fallbackHeroSrc = "https://iili.io/nYVsT0l.png";

  return (
    <section
      id="home"
      className="relative pt-24 pb-14 sm:pt-36 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#fcfaff] via-white to-[#f5fdf9]"
    >
      {/* Soft Ambient Background Elements (Purple & Green Glow) */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-purple-200/35 rounded-full blur-3xl pointer-events-none -z-10 animate-glow" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Featured Image Showcase: Order 1 on Mobile (appears on top), Order 2 on Desktop (on the right) */}
          <div className="order-1 lg:order-2 lg:col-span-6 relative w-full mx-auto">
            {/* Outer Decorative Gradient Border & Shadow */}
            <div className="relative rounded-3xl p-2 bg-gradient-to-tr from-purple-200 via-emerald-100 to-white shadow-2xl shadow-purple-900/15 transition-all duration-300 hover:shadow-purple-900/20">
              {/* Clean Image Container - No overlays, 100% visible image */}
              <div className="relative rounded-2xl overflow-hidden bg-white border border-purple-100/80 shadow-inner">
                <img
                  src={heroImageSrc}
                  onError={(e) => {
                    if (e.currentTarget.src !== fallbackHeroSrc) {
                      e.currentTarget.src = fallbackHeroSrc;
                    }
                  }}
                  alt="Relax Spa in Mavdi, Rajkot - Authentic Wellness Experience"
                  className="w-full h-auto object-cover object-center block"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Editorial Hero Information & Conversion CTAs: Order 2 on Mobile (below image), Order 1 on Desktop (on the left) */}
          <div className="order-2 lg:order-1 lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Subtitle Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 rounded-full bg-gradient-to-r from-purple-50 via-white to-emerald-50 border border-purple-200/80 text-xs sm:text-sm font-semibold text-[#6b21a8] shadow-sm">
              <Sparkles className="w-4 h-4 text-[#059669]" />
              <span>Harmonizing Body, Mind &amp; Soul • {BUSINESS_DATA.badge}</span>
            </div>

            {/* Quick Location Indicator */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#059669] mb-3">
              <MapPin className="w-3.5 h-3.5 text-[#059669]" />
              <span>Jasraj Nagar Chowk, Mavdi • Rajkot, Gujarat</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold text-[#1e1b4b] tracking-tight leading-[1.14] mb-4 text-balance">
              Relax Your Body.{' '}
              <span className="purple-gradient-text block sm:inline font-bold">
                Refresh Your Mind.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#475569] max-w-xl leading-relaxed mb-7 font-normal">
              {BUSINESS_DATA.subheadline}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3.5 mb-8">
              <a
                href={BUSINESS_DATA.callUrl}
                className="w-full sm:w-auto purple-button inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-sm sm:text-base font-bold shadow-lg shadow-purple-900/15"
              >
                <Phone className="w-4 h-4 fill-current text-white" />
                <span>Call Now</span>
              </a>

              <a
                href={buildGeneralEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto whatsapp-button inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-sm sm:text-base font-bold shadow-lg shadow-emerald-900/15"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Trust & Value Pillars */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-xl pt-6 border-t border-purple-100/90 text-left">
              <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-100 flex flex-col">
                <ShieldCheck className="w-5 h-5 text-[#6b21a8] mb-1.5" />
                <span className="text-xs font-bold text-[#1e1b4b]">Authentic Care</span>
                <span className="text-[11px] text-[#64748b] leading-tight">Comfortable environment</span>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 flex flex-col">
                <Flower2 className="w-5 h-5 text-[#059669] mb-1.5" />
                <span className="text-xs font-bold text-[#1e1b4b]">Pure Wellness</span>
                <span className="text-[11px] text-[#64748b] leading-tight">Natural tranquility</span>
              </div>
              <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-100 flex flex-col">
                <Clock className="w-5 h-5 text-[#7e22ce] mb-1.5" />
                <span className="text-xs font-bold text-[#1e1b4b]">Easy Booking</span>
                <span className="text-[11px] text-[#64748b] leading-tight">Instant WhatsApp confirmation</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
