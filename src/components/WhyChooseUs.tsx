import React from 'react';
import { Sparkles, MapPin, MessageCircle, PhoneCall, Star, Feather } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/services';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#7e22ce]" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#059669]" />;
      case 'MessageCircle':
        return <MessageCircle className="w-5 h-5 text-[#7e22ce]" />;
      case 'PhoneCall':
        return <PhoneCall className="w-5 h-5 text-[#059669]" />;
      case 'Star':
        return <Star className="w-5 h-5 text-[#7e22ce]" />;
      case 'Feather':
        return <Feather className="w-5 h-5 text-[#059669]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#7e22ce]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#059669] uppercase block mb-2.5">
            The Relax Spa Standard
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#1e1b4b] tracking-tight mb-4">
            Why Choose Relax Spa?
          </h2>
          <p className="text-base text-[#64748b] leading-relaxed font-normal">
            We are dedicated to providing a welcoming, peaceful environment where every detail supports your comfort and relaxation.
          </p>
        </div>

        {/* 6 Modern Icon Cards in White, Purple & Green */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {WHY_CHOOSE_ITEMS.map((item, idx) => {
            const isPurple = idx % 2 === 0;
            return (
              <div
                key={item.id}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-purple-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/5 shadow-md shadow-slate-100 flex items-start gap-4 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${
                    isPurple
                      ? 'bg-purple-50 border-purple-200'
                      : 'bg-emerald-50 border-emerald-200'
                  }`}
                >
                  {getIcon(item.icon)}
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-[#1e1b4b] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
