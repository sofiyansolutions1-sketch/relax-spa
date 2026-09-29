import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar, MapPin, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_DATA, buildGeneralEnquiryUrl } from '../data/business';
import { SpaLogo } from './SpaLogo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Services', href: '#services' },
    { name: 'Spa Gallery', href: '#gallery' },
    { name: 'Guest Feedback', href: '#feedback' },
    { name: 'Location', href: '#location' },
    { name: 'Get In Touch', href: '#inquiry' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification Strip */}
      <div className={`hidden md:block transition-all duration-300 ${
        isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'bg-gradient-to-r from-[#2e1065] via-[#4c1d95] to-[#064e3b] text-white py-1.5 px-4 text-xs'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-purple-200">
              <Sparkles className="w-3.5 h-3.5 text-[#34d399]" />
              <span>A Peaceful Wellness Sanctuary in Mavdi, Rajkot</span>
            </span>
            <span className="flex items-center gap-1.5 text-purple-200">
              <MapPin className="w-3.5 h-3.5 text-[#34d399]" />
              <span>Jasraj Nagar Chowk, near Premvatika Restaurant</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={BUSINESS_DATA.callUrl}
              className="flex items-center gap-1.5 text-white hover:text-[#34d399] transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-[#34d399] fill-current" />
              <span>{BUSINESS_DATA.phoneFormatted}</span>
            </a>
            <span className="text-purple-300/40">|</span>
            <a
              href={buildGeneralEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#a7f3d0] hover:text-white transition-colors font-semibold"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-purple-100 py-3 shadow-md shadow-purple-900/5'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#home"
              className="group flex items-center transition-transform hover:scale-[1.01]"
              aria-label="Relax Spa Rajkot Home"
            >
              <SpaLogo size="md" />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#475569]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#6b21a8] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#059669] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={BUSINESS_DATA.callUrl}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#581c87] bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-xl transition-all shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-[#7e22ce] fill-current" />
                <span>Call Desk</span>
              </a>

              <a
                href="#inquiry"
                className="purple-button inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl shadow-md"
              >
                <Calendar className="w-3.5 h-3.5 text-white" />
                <span>Book Session</span>
              </a>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="#inquiry"
                className="purple-button sm:hidden px-3 py-1.5 text-xs font-semibold rounded-lg"
              >
                Book
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-[#6b21a8] hover:text-[#4c1d95] hover:bg-purple-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#7e22ce]"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-purple-100 px-5 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-3 duration-200 shadow-2xl">
            <nav className="flex flex-col space-y-1.5 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-[#334155] hover:text-[#6b21a8] hover:bg-purple-50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={BUSINESS_DATA.callUrl}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-purple-200 text-[#581c87] font-bold text-sm bg-purple-50 hover:bg-purple-100"
              >
                <Phone className="w-4 h-4 text-[#7e22ce] fill-current" />
                <span>Call: {BUSINESS_DATA.phoneDisplay}</span>
              </a>

              <a
                href={buildGeneralEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-bold text-sm shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
