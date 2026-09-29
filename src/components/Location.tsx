import React from 'react';
import { MapPin, Navigation, Phone, Compass, Building2, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_DATA, buildGeneralEnquiryUrl } from '../data/business';

export const Location: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-24 bg-[#faf8fc] relative border-t border-purple-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-[0.25em] text-[#059669] uppercase block mb-2">
            Visit Relax Spa in Rajkot
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#1e1b4b] tracking-tight mb-3">
            Our Business Location
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] leading-relaxed font-normal">
            Conveniently located at Jasraj Nagar Chowk in Mavdi, Rajkot, with prominent landmarks and easy road accessibility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Location Info & Address Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-white border border-purple-200/80 shadow-xl shadow-purple-900/5">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-[#059669] mb-5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Mavdi, Rajkot Sanctuary</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#1e1b4b] mb-4">
                Relax Spa
              </h3>

              {/* Exact Address formatted gracefully */}
              <div className="space-y-1.5 text-sm sm:text-base text-[#334155] leading-relaxed mb-6 font-normal pl-4 border-l-4 border-[#7e22ce]">
                <p className="font-bold text-[#1e1b4b]">{BUSINESS_DATA.address.line1}</p>
                <p className="text-[#6b21a8] font-medium">{BUSINESS_DATA.address.line2}</p>
                <p>{BUSINESS_DATA.address.line3}</p>
                <p className="text-[#64748b]">{BUSINESS_DATA.address.line4}</p>
              </div>

              {/* Landmark Guidance Badges */}
              <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-2.5 mb-6">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569]">
                  <Building2 className="w-4 h-4 text-[#7e22ce] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#1e1b4b]">Landmark:</strong> Above Jyoti Gathiya, near Premvatika Restaurant at Jasraj Nagar Chowk.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569]">
                  <Compass className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#1e1b4b]">Area:</strong> Jasraj Nagar, Mavdi, Rajkot - 360004.
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Contact CTAs */}
            <div className="space-y-3 pt-3 border-t border-slate-100">
              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href={BUSINESS_DATA.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="purple-button flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold shadow-md"
                >
                  <Navigation className="w-4 h-4 fill-current text-white" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={BUSINESS_DATA.callUrl}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-[#581c87] bg-purple-50 hover:bg-purple-100 border border-purple-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#7e22ce]" />
                  <span>{BUSINESS_DATA.phoneDisplay}</span>
                </a>
              </div>

              <a
                href={buildGeneralEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Representation */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-purple-200/80 bg-white shadow-xl shadow-purple-900/5 min-h-[380px] flex flex-col">
            <div className="relative flex-1 w-full min-h-[350px]">
              <iframe
                title="Relax Spa Mavdi Rajkot Location Map"
                src="https://maps.google.com/maps?q=Relax%20Wellness%20Chowk%2C%20near%20Premvatika%20Restaurant%2C%20above%20Jyoti%20Gathiya%2C%20Jasraj%20Nagar%2C%20Mavdi%2C%20Rajkot&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter contrast-105"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Overlay Location Pin Card */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-purple-200 shadow-xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="w-5 h-5 text-white fill-current" />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-bold text-[#1e1b4b]">Relax Spa</h4>
                    <p className="text-[11px] text-[#64748b]">Jasraj Nagar, Mavdi, Rajkot</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar on Map card */}
            <div className="p-4 bg-white border-t border-purple-100 flex items-center justify-between text-xs text-[#64748b]">
              <span className="font-medium">Relax Spa • Mavdi, Rajkot</span>
              <a
                href={BUSINESS_DATA.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#6b21a8] hover:text-[#059669] font-bold transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
