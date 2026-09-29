import React from 'react';
import { Flower2, HeartHandshake, Sparkles, Moon, ShieldCheck } from 'lucide-react';
import { CORE_VALUES } from '../data/services';

export const CoreValues: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flower2':
        return <Flower2 className="w-6 h-6 text-[#7e22ce]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#059669]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#7e22ce]" />;
      case 'Moon':
        return <Moon className="w-6 h-6 text-[#059669]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#7e22ce]" />;
    }
  };

  return (
    <section id="values" className="py-20 sm:py-28 bg-[#faf7fd] relative border-y border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#6b21a8] uppercase block mb-2.5">
            The Vedic Wellness Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#1e1b4b] tracking-tight mb-4">
            Our Core Values
          </h2>
          <p className="text-base text-[#64748b] leading-relaxed font-normal">
            Rooted in timeless traditions of holistic wellness, providing pure tranquility and dedicated personal care for every guest in Rajkot.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map((val, idx) => {
            const isPurple = idx % 2 === 0;
            return (
              <div
                key={val.id}
                className="group relative rounded-2xl p-7 bg-white border border-purple-100/90 hover:border-emerald-300 transition-all duration-300 shadow-md shadow-purple-900/5 hover:shadow-xl hover:shadow-purple-900/10 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 border ${
                      isPurple
                        ? 'bg-purple-50 border-purple-200 group-hover:scale-105'
                        : 'bg-emerald-50 border-emerald-200 group-hover:scale-105'
                    }`}
                  >
                    {getIcon(val.icon)}
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#059669] block mb-1">
                    {val.subtitle}
                  </span>

                  <h3 className="text-xl font-heading font-bold text-[#1e1b4b] mb-3 group-hover:text-[#6b21a8] transition-colors">
                    {val.title}
                  </h3>

                  <p className="text-sm text-[#64748b] leading-relaxed font-normal">
                    {val.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#7e22ce]">
                  <span>Pillar 0{idx + 1}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[#059669]">Relax Spa</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
