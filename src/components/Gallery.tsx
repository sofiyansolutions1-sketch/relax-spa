import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/gallery';
import { GalleryItem } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { Maximize2, X, Sparkles, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/business';

export const Gallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const filterTabs = ['All', 'Interior', 'Ambience', 'Wellness Area', 'Details'];

  const filteredItems = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category.toLowerCase().includes(filter.toLowerCase()) || filter.toLowerCase().includes(item.category.toLowerCase()));

  return (
    <section id="gallery" className="pt-4 sm:pt-6 pb-16 sm:pb-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold tracking-[0.25em] text-[#6b21a8] uppercase block mb-2.5">
            The Spa Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#1e1b4b] tracking-tight mb-4">
            Sanctuary Ambiance &amp; Details
          </h2>
          <p className="text-base text-[#64748b] leading-relaxed font-normal">
            Explore the tranquil rooms, serene lighting, and attentive wellness amenities prepared for your comfort at Relax Spa in Mavdi, Rajkot.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === tab
                  ? 'bg-[#059669] text-white shadow-sm'
                  : 'bg-slate-100 text-[#475569] hover:bg-purple-100/60'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Instagram-Style Luxury Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-2xl overflow-hidden aspect-square bg-slate-100 border border-purple-100 hover:border-emerald-300 transition-all duration-300 cursor-pointer shadow-md shadow-slate-100 hover:shadow-xl hover:shadow-purple-900/10"
            >
              <ImageWithFallback
                src={item.imageUrl}
                alt={item.title}
                type={item.fallbackType}
                title={item.title}
                subtitle={item.category}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Instagram-style Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1035]/90 via-[#1e1035]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 z-20">
                <span className="text-[10px] uppercase tracking-wider text-emerald-300 font-bold">
                  {item.category}
                </span>
                <h4 className="text-sm font-heading font-bold text-white leading-snug">
                  {item.title}
                </h4>
                <div className="mt-2 flex items-center justify-between text-xs text-purple-200">
                  <span className="truncate pr-2">{item.description}</span>
                  <Maximize2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Notice */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#64748b] flex items-center justify-center gap-1.5 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
            <span>Relaxing Wellness Sanctuary • Relax Spa, Mavdi, Rajkot</span>
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-[#1e1035]/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-3xl border border-purple-200 overflow-hidden shadow-2xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-30 p-2 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-slate-100">
              <ImageWithFallback
                src={activeItem.imageUrl}
                alt={activeItem.title}
                type={activeItem.fallbackType}
                title={activeItem.title}
                subtitle={activeItem.description}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
              <div>
                <span className="text-xs font-bold tracking-wider text-[#6b21a8] uppercase">
                  {activeItem.category}
                </span>
                <h3 className="text-xl font-heading font-bold text-[#1e1b4b]">
                  {activeItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748b] mt-0.5">
                  {activeItem.description}
                </p>
              </div>

              <a
                href={buildWhatsAppUrl(
                  `Hi Relax Spa, I saw the ${activeItem.title} in your gallery and would like to enquire about availability.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
