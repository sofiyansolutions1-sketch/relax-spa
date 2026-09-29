import React from 'react';
import { Star, Quote, MessageCircle, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/services';
import { buildGeneralEnquiryUrl } from '../data/business';

export const Testimonials: React.FC = () => {
  return (
    <section id="feedback" className="py-20 sm:py-28 bg-[#faf7fd] relative border-t border-purple-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#059669] uppercase block mb-2.5">
            Guest Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#1e1b4b] tracking-tight mb-4">
            What Our Guests Say
          </h2>
          <p className="text-base text-[#64748b] leading-relaxed font-normal">
            Reflections and feedback from guests who found peaceful relaxation, comfort, and restorative care at Relax Spa in Mavdi, Rajkot.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-6xl mx-auto mb-12">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-2xl bg-white border border-purple-100 shadow-lg shadow-purple-900/5 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-purple-200" />
                </div>

                <p className="text-sm text-[#475569] leading-relaxed mb-6 italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#1e1b4b]">{item.name}</h4>
                  <p className="text-xs text-[#059669] font-medium">{item.location}</p>
                </div>
                <span className="text-[11px] font-semibold text-[#7e22ce] bg-purple-50 px-2.5 py-1 rounded-md">
                  {item.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Feedback Share CTA */}
        <div className="text-center">
          <a
            href={buildGeneralEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#6b21a8] hover:text-[#059669] bg-white border border-purple-200 hover:border-emerald-300 px-5 py-2.5 rounded-full shadow-sm transition-all"
          >
            <Sparkles className="w-4 h-4 text-[#059669]" />
            <span>Experience It Yourself • Book on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
