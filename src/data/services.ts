import { ServiceItem, WhyChooseItem, CoreValueItem, TestimonialItem } from '../types';

export const CORE_VALUES: CoreValueItem[] = [
  {
    id: 'holistic',
    title: 'Holistic Wellness',
    subtitle: 'Body, Mind & Spirit Harmony',
    description: 'A mindful approach dedicated to releasing modern stress and restoring natural vitality through peaceful, restorative spa therapies.',
    icon: 'Flower2'
  },
  {
    id: 'authentic',
    title: 'Authentic Care',
    subtitle: 'Warm & Attentive Hospitality',
    description: 'Every guest is welcomed with attentive courtesy, serene hospitality, and care tailored to personal relaxation needs.',
    icon: 'HeartHandshake'
  },
  {
    id: 'purity',
    title: 'Natural Comfort & Purity',
    subtitle: 'Clean, Hygienic Environment',
    description: 'Fresh linens, soothing aromatic oils, warm ambient lighting, and spotless hygiene ensure complete peace of mind.',
    icon: 'Sparkles'
  },
  {
    id: 'sanctuary',
    title: 'Your Peaceful Sanctuary',
    subtitle: 'Serene Escape in Mavdi Rajkot',
    description: 'Conveniently situated in Jasraj Nagar, Mavdi, providing an undisturbed oasis away from the bustle of daily life.',
    icon: 'Moon'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'body-massage',
    name: 'Body Massage',
    shortDescription: 'Full-body restorative care designed to gently ease muscle tension, improve circulation, and renew your physical vitality.',
    iconName: 'Sparkles',
    category: 'Massage Therapy',
    imageFallbackGradient: 'from-purple-900/40 via-purple-950 to-slate-900',
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
    fallbackType: 'massage',
    highlights: ['Muscle Ease', 'Full Body Rejuvenation', 'Calming Pressure']
  },
  {
    id: 'relaxation-massage',
    name: 'Relaxation Massage',
    shortDescription: 'Calming, rhythmic touch focused on complete tension release, quietening your thoughts and restoring inner equilibrium.',
    iconName: 'HeartHandshake',
    category: 'Massage Therapy',
    imageFallbackGradient: 'from-emerald-950 via-slate-900 to-purple-950',
    imageUrl: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80',
    fallbackType: 'massage',
    highlights: ['Deep Relaxation', 'Mind Quieting', 'Gentle Rhythm']
  },
  {
    id: 'wellness-experience',
    name: 'Wellness Experience',
    shortDescription: 'An immersive peaceful escape featuring soothing ambient care crafted to rejuvenate both body and mind in tranquility.',
    iconName: 'Flower2',
    category: 'Relaxation & Wellness',
    imageFallbackGradient: 'from-purple-950 via-slate-900 to-emerald-950',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    fallbackType: 'lounge',
    highlights: ['Ambient Serenity', 'Holistic Touch', 'Complete Comfort']
  },
  {
    id: 'spa-sessions',
    name: 'Spa Sessions',
    shortDescription: 'Dedicated tranquil sessions focused on comfort, unhurried relaxation, and undisturbed personal refreshment.',
    iconName: 'Moon',
    category: 'Spa Sessions',
    imageFallbackGradient: 'from-slate-900 via-purple-950 to-emerald-950',
    imageUrl: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80',
    fallbackType: 'decor',
    highlights: ['Unhurried Pace', 'Private Space', 'Restful Ambiance']
  },
  {
    id: 'stress-relief',
    name: 'Stress Relief & Relaxation',
    shortDescription: 'Soothing methods dedicated to easing daily stress, mental fatigue, and restoring a serene state of balance and comfort.',
    iconName: 'Wind',
    category: 'Stress Relief',
    imageFallbackGradient: 'from-emerald-950 via-purple-950 to-slate-900',
    imageUrl: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
    fallbackType: 'oils',
    highlights: ['Mental Calming', 'Aromatherapeutic Care', 'Vital Balance']
  },
  {
    id: 'personalized-wellness',
    name: 'Personalized Wellness Sessions',
    shortDescription: 'Tailored sessions created around your individual preference for pace, comfort, pressure, and peaceful rejuvenation.',
    iconName: 'UserCheck',
    category: 'Relaxation & Wellness',
    imageFallbackGradient: 'from-purple-950 via-slate-900 to-slate-950',
    imageUrl: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80',
    fallbackType: 'towels',
    highlights: ['Customized Attention', 'Flexible Comfort', 'Peace of Mind']
  }
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 'atmosphere',
    icon: 'Sparkles',
    title: 'Relaxing Atmosphere',
    description: 'A thoughtfully quiet, ambient environment where you can unwind in complete comfort away from daily rush.'
  },
  {
    id: 'location',
    icon: 'MapPin',
    title: 'Convenient Mavdi Location',
    description: 'Centrally situated at Jasraj Nagar, Mavdi in Rajkot, easily accessible with convenient landmark surroundings.'
  },
  {
    id: 'booking',
    icon: 'MessageCircle',
    title: 'Easy WhatsApp Booking',
    description: 'Connect directly with our desk on WhatsApp in seconds to check availability and schedule your visit.'
  },
  {
    id: 'assistance',
    icon: 'PhoneCall',
    title: 'Quick Call Assistance',
    description: 'Direct phone assistance for quick queries, timings, and seamless visit confirmation.'
  },
  {
    id: 'customer',
    icon: 'Star',
    title: 'Customer-Focused Experience',
    description: 'Attentive, courteous, and polite hospitality focused entirely on your peace of mind and satisfaction.'
  },
  {
    id: 'peaceful',
    icon: 'Feather',
    title: 'Peaceful Wellness Environment',
    description: 'Clean, comfortable, and hygienic wellness sanctuary designed for complete bodily and mental rest.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Pravin S.',
    location: 'Rajkot',
    service: 'Relaxation Massage',
    rating: 5,
    comment: 'Relax Spa in Mavdi was just what I needed after a busy week. The atmosphere is quiet, welcoming, and very peaceful.'
  },
  {
    id: 't-2',
    name: 'Hardik P.',
    location: 'Mavdi, Rajkot',
    service: 'Body Massage',
    rating: 5,
    comment: 'Booking via WhatsApp was instant and easy. The staff was polite, and the ambience was very clean and relaxing.'
  },
  {
    id: 't-3',
    name: 'Jayesh V.',
    location: 'Rajkot',
    service: 'Stress Relief & Relaxation',
    rating: 5,
    comment: 'Convenient location near Premvatika Restaurant. Great ambiance with soothing music and gentle lighting. Highly recommended!'
  }
];
