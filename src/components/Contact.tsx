import React, { useState } from 'react';
import { Phone, MessageCircle, Send, Calendar, Clock, User, PhoneCall, CheckCircle, Sparkles } from 'lucide-react';
import { BUSINESS_DATA, buildWhatsAppUrl } from '../data/business';
import { EnquiryFormData } from '../types';
import { SERVICES } from '../data/services';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    service: 'Body Massage',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Hi Relax Spa,
I would like to enquire about a spa session.

Name: ${formData.name || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Service: ${formData.service}
Preferred Date: ${formData.preferredDate || 'Flexible'}
Preferred Time: ${formData.preferredTime || 'Flexible'}
Message: ${formData.message || 'Looking for relaxation availability'}`;

    const url = buildWhatsAppUrl(formattedMessage);
    
    setSubmitted(true);
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-[0.25em] text-[#6b21a8] uppercase block mb-2.5">
            Book an Appointment
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#1e1b4b] tracking-tight mb-4">
            {BUSINESS_DATA.contactHeading}
          </h2>
          <p className="text-base text-[#64748b] leading-relaxed font-normal">
            {BUSINESS_DATA.contactSubtext}
          </p>
        </div>

        {/* Quick Contact Action Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-12">
          <a
            href={BUSINESS_DATA.callUrl}
            className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-purple-50/70 border border-purple-200 hover:border-purple-300 hover:bg-purple-100/60 transition-all shadow-sm group"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-200/70 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5 text-[#581c87] fill-current" />
            </div>
            <div className="text-left">
              <span className="text-[11px] uppercase tracking-wider text-[#6b21a8] font-semibold block">Direct Call Assistance</span>
              <span className="text-sm font-bold text-[#1e1b4b]">Call: {BUSINESS_DATA.phoneDisplay}</span>
            </div>
          </a>

          <a
            href={BUSINESS_DATA.whatsappBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 hover:border-emerald-300 hover:bg-emerald-100/60 transition-all shadow-sm group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-200/70 flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageCircle className="w-5 h-5 text-[#059669] fill-current" />
            </div>
            <div className="text-left">
              <span className="text-[11px] uppercase tracking-wider text-[#059669] font-semibold block">Instant Booking Desk</span>
              <span className="text-sm font-bold text-[#1e1b4b]">WhatsApp Now</span>
            </div>
          </a>
        </div>

        {/* Vedic-style Appointment Form Container */}
        <div className="rounded-3xl p-6 sm:p-10 bg-white border border-purple-200 shadow-2xl shadow-purple-900/5 relative overflow-hidden">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-[#6b21a8] mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
                <span>Relax Spa Reservation</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#1e1b4b] mb-1">
                Schedule Your Sanctuary Visit
              </h3>
              <p className="text-xs sm:text-sm text-[#64748b]">
                Fill out your preferred details below. Clicking "Confirm on WhatsApp" connects you directly with our front desk for quick scheduling.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-[#065f46] text-sm">
                <CheckCircle className="w-5 h-5 text-[#059669] shrink-0" />
                <span>Opening WhatsApp with your appointment request. If it didn't open automatically, please tap the button again.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[#1e1b4b] mb-1.5">
                    Your Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#94a3b8]">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. Rahul Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#1e293b] placeholder-[#94a3b8] focus:bg-white focus:border-[#7e22ce] focus:ring-2 focus:ring-[#7e22ce]/20 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-[#1e1b4b] mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#94a3b8]">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="e.g. 98988 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#1e293b] placeholder-[#94a3b8] focus:bg-white focus:border-[#7e22ce] focus:ring-2 focus:ring-[#7e22ce]/20 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="block text-xs font-semibold text-[#1e1b4b] mb-1.5">
                  Select Desired Service
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#1e293b] focus:bg-white focus:border-[#7e22ce] focus:ring-2 focus:ring-[#7e22ce]/20 outline-none transition-all"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} ({s.category})
                    </option>
                  ))}
                  <option value="General Consultation">Customized Wellness Session</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Preferred Date */}
                <div>
                  <label htmlFor="date" className="block text-xs font-semibold text-[#1e1b4b] mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#94a3b8]">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      type="date"
                      id="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#1e293b] placeholder-[#94a3b8] focus:bg-white focus:border-[#7e22ce] focus:ring-2 focus:ring-[#7e22ce]/20 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Preferred Time */}
                <div>
                  <label htmlFor="time" className="block text-xs font-semibold text-[#1e1b4b] mb-1.5">
                    Preferred Time of Day
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#94a3b8]">
                      <Clock className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="time"
                      placeholder="e.g. 11:00 AM / Afternoon / Evening"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#1e293b] placeholder-[#94a3b8] focus:bg-white focus:border-[#7e22ce] focus:ring-2 focus:ring-[#7e22ce]/20 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-[#1e1b4b] mb-1.5">
                  Special Notes / Preferences
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Any focus areas, preferences, or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#1e293b] placeholder-[#94a3b8] focus:bg-white focus:border-[#7e22ce] focus:ring-2 focus:ring-[#7e22ce]/20 outline-none transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full emerald-button py-3.5 px-6 rounded-xl text-sm sm:text-base font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/15 cursor-pointer"
              >
                <Send className="w-4 h-4 fill-current text-white" />
                <span>Confirm on WhatsApp</span>
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};
