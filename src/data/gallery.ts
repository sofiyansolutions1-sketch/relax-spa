import { GalleryItem } from '../types';

/**
 * RELAX SPA GALLERY DATA
 * 
 * Instructions for Business Owner:
 * To replace any placeholder with your actual spa photographs:
 * 1. Put your images in the `public/` folder (e.g. `public/gallery/interior.jpg`)
 * 2. Update the `imageUrl` property below with the relative path (e.g. `'/gallery/interior.jpg'`)
 * 3. The gallery will automatically display your real photos with smooth zoom and lightbox!
 */

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Peaceful Spa Interior',
    category: 'Interior',
    description: 'Calming ambient tones and welcoming atmosphere in Mavdi, Rajkot',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    fallbackType: 'lounge'
  },
  {
    id: 'gal-2',
    title: 'Relaxation Atmosphere',
    category: 'Ambience',
    description: 'Gentle, soft lighting designed for deep rest and mental quietude',
    imageUrl: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
    fallbackType: 'candle'
  },
  {
    id: 'gal-3',
    title: 'Wellness Environment',
    category: 'Wellness Area',
    description: 'Clean, comfortable spaces prepared for pure personal unwinding',
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
    fallbackType: 'massage'
  },
  {
    id: 'gal-4',
    title: 'Natural Spa Details',
    category: 'Details',
    description: 'Aromatic essential oils, herbal botanicals, and warm basalt elements',
    imageUrl: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
    fallbackType: 'oils'
  },
  {
    id: 'gal-5',
    title: 'Comfort & Towel Setup',
    category: 'Comfort',
    description: 'Crisp fresh towels and hygienic hospitality tailored for every guest',
    imageUrl: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80',
    fallbackType: 'towels'
  },
  {
    id: 'gal-6',
    title: 'Soothing Stone Elements',
    category: 'Elements',
    description: 'Organic basalt stones and serene meditative touches',
    imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
    fallbackType: 'stones'
  },
  {
    id: 'gal-7',
    title: 'Herbal Refreshment',
    category: 'Wellness',
    description: 'Calming wellness ambience to help you slow down and recharge',
    imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    fallbackType: 'tea'
  },
  {
    id: 'gal-8',
    title: 'Tranquil Ambiance',
    category: 'Sanctuary',
    description: 'An inviting haven right above Jyoti Gathiya at Jasraj Nagar Chowk',
    imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
    fallbackType: 'decor'
  }
];
