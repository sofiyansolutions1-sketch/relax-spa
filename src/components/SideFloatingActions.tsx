import React from 'react';
import { Phone } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_DATA, buildGeneralEnquiryUrl } from '../data/business';

export const SideFloatingActions: React.FC = () => {
  return (
    <aside
      aria-label="Quick contact buttons"
      className="fixed right-3.5 sm:right-6 bottom-5 sm:bottom-7 z-50 flex flex-col gap-3.5 items-end select-none pointer-events-auto"
    >
      {/* 1. Animated Floating Call Button */}
      <div className="relative group flex items-center gap-2">
        {/* Tooltip on hover (Desktop) */}
        <span className="hidden sm:block opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none px-3 py-1.5 rounded-xl bg-[#1e1035] text-white text-xs font-semibold shadow-xl whitespace-nowrap -translate-x-2 group-hover:translate-x-0 border border-purple-800/40">
          Call Now: {BUSINESS_DATA.phoneDisplay}
        </span>

        <a
          href={BUSINESS_DATA.callUrl}
          aria-label={`Call Relax Spa at ${BUSINESS_DATA.phoneDisplay}`}
          className="animate-call-ripple relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#581c87] via-[#7e22ce] to-[#9333ea] text-white shadow-xl shadow-purple-950/40 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-400/40"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-purple-400/30 animate-ping pointer-events-none" />
          
          {/* Animated Wiggling Phone Icon */}
          <div className="animate-phone-wiggle flex items-center justify-center">
            <Phone className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-white" />
          </div>
        </a>
      </div>

      {/* 2. Animated Floating WhatsApp Button with Real Official WhatsApp Logo */}
      <div className="relative group flex items-center gap-2">
        {/* Tooltip on hover (Desktop) */}
        <span className="hidden sm:block opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none px-3 py-1.5 rounded-xl bg-[#064e3b] text-white text-xs font-semibold shadow-xl whitespace-nowrap -translate-x-2 group-hover:translate-x-0 border border-emerald-800/40">
          Chat on WhatsApp
        </span>

        <a
          href={buildGeneralEnquiryUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with Relax Spa"
          className="animate-whatsapp-ripple relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl shadow-emerald-950/40 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

          {/* Animated Bouncing WhatsApp Logo */}
          <div className="animate-whatsapp-bounce flex items-center justify-center">
            <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white" />
          </div>
        </a>
      </div>
    </aside>
  );
};
