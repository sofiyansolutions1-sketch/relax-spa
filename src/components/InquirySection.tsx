import React, { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle2, ChevronDown } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_DATA, buildWhatsAppUrl } from '../data/business';

export const InquirySection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: 'Mavdi, Rajkot - Jasraj Nagar Chowk',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Hi Relax Spa,
I would like to book an experience.

Name: ${formData.name || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Email: ${formData.email || 'Not provided'}
Location: ${formData.location || 'Mavdi, Rajkot'}

Looking forward to hearing from you.`;

    const url = buildWhatsAppUrl(formattedMessage);
    setSubmitted(true);
    window.open(url, '_blank');
  };

  return (
    <section id="inquiry" className="py-20 sm:py-28 bg-[#fdfcfa] relative border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Matching Reference Screenshot) */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-normal text-[#1e1b4b] tracking-tight mb-3">
            Get In <span className="text-[#b5832a] font-semibold">TOUCH</span>
          </h2>
          {/* Subtle underline line */}
          <div className="w-16 h-[2.5px] bg-[#b5832a] mx-auto mb-4 rounded-full" />
          <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
            We'd love to hear from you. Book a session or ask us anything.
          </p>
        </div>

        {/* 2-Column Grid: Left "Visit Our Sanctuary" & Right "Book an Experience" Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Visit Our Sanctuary */}
          <div className="lg:col-span-5 text-left pt-2">
            <h3 className="text-2xl font-heading font-bold text-[#1e1b4b] mb-4">
              Visit Our Sanctuary
            </h3>
            
            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mb-8">
              Our wellness centers are designed to offer you a peaceful retreat from the everyday. Reach out to us and let's begin your journey.
            </p>

            {/* Contact Items List */}
            <div className="space-y-6 mb-8">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#dcfce7] flex items-center justify-center shrink-0 mt-0.5 text-[#059669]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-sm text-[#334155] leading-relaxed">
                  <p className="font-semibold text-[#1e1b4b]">Relax Wellness</p>
                  <p>Chowk, near Premvatika Restaurant,</p>
                  <p>above Jyoti Gathiya, Jasraj Nagar, Mavdi,</p>
                  <p>Rajkot, Gujarat 360004, INDIA</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#dcfce7] flex items-center justify-center shrink-0 text-[#059669]">
                  <Phone className="w-5 h-5" />
                </div>
                <a
                  href={BUSINESS_DATA.callUrl}
                  className="text-sm font-semibold text-[#1e1b4b] hover:text-[#059669] transition-colors"
                >
                  {BUSINESS_DATA.phoneFormatted}
                </a>
              </div>

              {/* Landmark / Location reference */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#dcfce7] flex items-center justify-center shrink-0 text-[#059669]">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm text-[#334155]">
                  Jasraj Nagar Chowk, Mavdi, Rajkot
                </span>
              </div>

            </div>

            {/* WhatsApp Button (Matching Gold/Warm Accent from Reference) */}
            <a
              href={BUSINESS_DATA.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-bold shadow-md transition-all active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Right Column: Book an Experience Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-200/60 border border-slate-100">
              <h3 className="text-2xl font-heading font-bold text-[#1e1b4b] mb-6">
                Book an Experience
              </h3>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-emerald-800 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Thank you! Opening WhatsApp to complete your booking with our sanctuary desk.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="inquiry-name" className="block text-xs font-bold text-[#334155] mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="inquiry-name"
                    required
                    placeholder="Enter your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-slate-200 text-sm text-[#1e293b] placeholder-[#94a3b8] focus:bg-white focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none transition-all"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="inquiry-email" className="block text-xs font-bold text-[#334155] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="inquiry-email"
                    placeholder="Enter your Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-slate-200 text-sm text-[#1e293b] placeholder-[#94a3b8] focus:bg-white focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="inquiry-phone" className="block text-xs font-bold text-[#334155] mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="inquiry-phone"
                    required
                    placeholder="Enter Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-slate-200 text-sm text-[#1e293b] placeholder-[#94a3b8] focus:bg-white focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none transition-all"
                  />
                </div>

                {/* Location */}
                <div>
                  <label htmlFor="inquiry-location" className="block text-xs font-bold text-[#334155] mb-2">
                    Location <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="inquiry-location"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-slate-200 text-sm text-[#1e293b] focus:bg-white focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="Mavdi, Rajkot - Jasraj Nagar Chowk">
                        Mavdi, Rajkot - Jasraj Nagar Chowk
                      </option>
                      <option value="Near Premvatika Restaurant, Mavdi, Rajkot">
                        Near Premvatika Restaurant, Mavdi, Rajkot
                      </option>
                      <option value="Above Jyoti Gathiya, Mavdi, Rajkot">
                        Above Jyoti Gathiya, Mavdi, Rajkot
                      </option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-500">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Submit Now Button (Matching Vibrant Teal/Green Button from Reference) */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-xl bg-[#0d9488] hover:bg-[#0f766e] text-white text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                  >
                    SUBMIT NOW
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
