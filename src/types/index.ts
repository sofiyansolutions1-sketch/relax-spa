export interface ServiceItem {
  id: string;
  name: string;
  shortDescription: string;
  iconName: string;
  category: 'Massage Therapy' | 'Relaxation & Wellness' | 'Spa Sessions' | 'Stress Relief';
  imageFallbackGradient: string;
  imageUrl?: string;
  fallbackType?: 'candle' | 'massage' | 'oils' | 'towels' | 'stones' | 'lounge' | 'tea' | 'decor';
  highlights?: string[];
}

export interface CoreValueItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface WhyChooseItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  fallbackType: 'candle' | 'massage' | 'oils' | 'towels' | 'stones' | 'lounge' | 'tea' | 'decor';
}

export interface EnquiryFormData {
  name: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  service: string;
  message: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  comment: string;
  service: string;
  rating: number;
}
