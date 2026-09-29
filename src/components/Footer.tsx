import React from 'react';
import { Phone, MapPin, Sparkles, Navigation } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_DATA, buildGeneralEnquiryUrl } from '../data/business';
import { SpaLogo } from './SpaLogo';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Services', href: '#services' },
    { name: 'Spa Gallery', href: '#gallery' },
    { name: 'Guest Feedback', href: '#feedback' },
    { name: 'Location & Map', href: '#location' },
    { name: 'Get In Touch', href: '#inquiry' },
  ];

  const serviceLinks = [
    'Body Massage',
    'Relaxation Massage',
    'Wellness Experience',
    'Spa Sessions',
    'Stress Relief & Relaxation',
    'Personalized Wellness'
  ];

  return (
    <footer className="bg-[#1e1035] border-t border-purple-900/60 pt-16 pb-24 sm:pb-16 text-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Brand & Tagline Column with Individual Logo */}
          <div className="lg:col-span-4">
            <a
              href="#home"
              className="inline-block mb-3 hover:opacity-95 transition-opacity"
            >
              <SpaLogo size="lg" lightMode={true} />
            </a>

            <p className="text-xs font-semibold tracking-widest text-[#a7f3d0] uppercase mb-4 flex items-center gap-1.5 mt-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{BUSINESS_DATA.badge}</span>
            </p>

            <p className="text-sm text-purple-200/90 leading-relaxed max-w-sm mb-6 font-normal">
              A peaceful wellness retreat in Mavdi, Rajkot. Unwind your body and refresh your mind with a comfortable relaxation experience.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_DATA.callUrl}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-purple-300/30 text-xs font-bold text-white transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#34d399] fill-current" />
                <span>Call {BUSINESS_DATA.phoneDisplay}</span>
              </a>

              <a
                href={buildGeneralEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="emerald-button inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#a7f3d0] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white text-purple-200/80 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments / Services Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#a7f3d0] mb-4">
              Spa Offerings
            </h4>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((serviceName) => (
                <li key={serviceName}>
                  <a
                    href="#services"
                    className="hover:text-white text-purple-200/80 transition-colors"
                  >
                    {serviceName}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address & Contact Info Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#a7f3d0] mb-4">
              Sanctuary Location
            </h4>
            <div className="space-y-3 text-sm text-purple-200/80 font-normal">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#34d399] shrink-0 mt-1" />
                <p className="leading-relaxed text-white">
                  {BUSINESS_DATA.address.fullSingleLine}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#34d399] shrink-0" />
                <a
                  href={BUSINESS_DATA.callUrl}
                  className="hover:text-[#34d399] text-white font-medium transition-colors"
                >
                  {BUSINESS_DATA.phoneFormatted}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_DATA.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#a7f3d0] hover:text-white transition-colors font-bold"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-purple-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-300/70">
          <p>© 2026 Relax Spa. All Rights Reserved.</p>
          <p className="text-center sm:text-right">
            Jasraj Nagar, Mavdi, Rajkot, Gujarat 360004
          </p>
        </div>
      </div>
    </footer>
  );
};
