import React, { useState } from 'react';
import { Sparkles, HeartHandshake, Flower2, Moon, Wind, UserCheck, ArrowRight, Check, Phone } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SERVICES } from '../data/services';
import { BUSINESS_DATA, buildServiceEnquiryUrl } from '../data/business';
import { ImageWithFallback } from './ImageWithFallback';

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = [
    'All',
    'Massage Therapy',
    'Relaxation & Wellness',
    'Spa Sessions',
    'Stress Relief'
  ];

  const filteredServices = activeTab === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeTab);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#7e22ce]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#059669]" />;
      case 'Flower2':
        return <Flower2 className="w-5 h-5 text-[#7e22ce]" />;
      case 'Moon':
        return <Moon className="w-5 h-5 text-[#059669]" />;
      case 'Wind':
        return <Wind className="w-5 h-5 text-[#7e22ce]" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-[#059669]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#7e22ce]" />;
    }
  };

  return (
    <section id="services" className="pt-16 sm:pt-20 pb-6 sm:pb-8 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-[0.25em] text-[#059669] uppercase block mb-2">
            Holistic Spa Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#1e1b4b] tracking-tight mb-3">
            Our Spa Services
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] leading-relaxed font-normal">
            Thoughtfully crafted relaxation and wellness therapies in Mavdi, Rajkot, designed to renew your vitality and restore peace of mind.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === cat
                  ? 'bg-[#6b21a8] text-white shadow-md shadow-purple-900/15'
                  : 'bg-purple-50/70 text-[#475569] hover:bg-purple-100 hover:text-[#6b21a8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredServices.map((service, index) => {
            const enquiryUrl = buildServiceEnquiryUrl(service.name);

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-white border border-purple-100 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg shadow-purple-900/5 hover:shadow-2xl hover:shadow-purple-900/10 hover:-translate-y-1.5"
              >
                {/* Image Preview Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <ImageWithFallback
                    src={service.imageUrl}
                    alt={service.name}
                    type={service.fallbackType}
                    title={service.name}
                    subtitle={service.category}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#6b21a8] shadow-sm">
                    {service.category}
                  </span>

                  {/* Icon Badge */}
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center shadow-md">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-[#1e1b4b] group-hover:text-[#6b21a8] transition-colors mb-2">
                      {service.name}
                    </h3>

                    <p className="text-sm text-[#64748b] leading-relaxed mb-4 font-normal">
                      {service.shortDescription}
                    </p>

                    {/* Service Highlights */}
                    {service.highlights && (
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {service.highlights.map((h) => (
                          <span
                            key={h}
                            className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-md bg-purple-50 text-[#581c87]"
                          >
                            <Check className="w-3 h-3 text-[#059669]" />
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* WhatsApp CTA Action */}
                  <div className="pt-3 border-t border-slate-100 mt-auto">
                    <a
                      href={enquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white whatsapp-button shadow-md"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Assistance Card - Gap tight & compact */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-purple-50 via-white to-emerald-50 border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-5 max-w-4xl mx-auto text-center sm:text-left shadow-sm">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#059669] block mb-0.5">
              Personalized Consultation
            </span>
            <h4 className="text-base sm:text-lg font-heading font-bold text-[#1e1b4b]">
              Looking for a tailored wellness or relaxation session?
            </h4>
            <p className="text-xs sm:text-sm text-[#64748b] mt-0.5">
              Contact our desk directly to discuss timings, personal preferences, and availability.
            </p>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={BUSINESS_DATA.callUrl}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#581c87] bg-white border border-purple-200 hover:bg-purple-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#7e22ce]" />
              <span>Call Us</span>
            </a>
            <a
              href={buildServiceEnquiryUrl('General Consultation')}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold shadow-md"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-white text-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
