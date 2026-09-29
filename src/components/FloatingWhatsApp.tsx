import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { buildGeneralEnquiryUrl } from '../data/business';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="hidden sm:block fixed bottom-6 right-6 z-40 group">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="absolute bottom-16 right-0 mb-2 w-60 p-3.5 rounded-2xl bg-white border border-purple-200 shadow-2xl text-xs text-[#1e1b4b] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-start justify-between gap-1 mb-1">
            <span className="font-bold text-[#6b21a8] flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Relax Spa Help Desk
            </span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-[#94a3b8] hover:text-[#1e1b4b] p-0.5"
              aria-label="Dismiss chat tip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-[11px] text-[#64748b] leading-tight">
            Have questions about services, timings, or bookings? Message us directly on WhatsApp!
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={buildGeneralEnquiryUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Relax Spa"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#10b981] hover:bg-[#059669] text-white shadow-xl shadow-emerald-900/30 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        {/* Soft pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/30 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
};
