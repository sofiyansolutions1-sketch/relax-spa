export const BUSINESS_DATA = {
  name: "Relax Spa",
  badge: "Relax • Rejuvenate • Refresh",
  headline: "Relax Your Body. Refresh Your Mind.",
  subheadline: "Experience a peaceful wellness escape at Relax Spa in Mavdi, Rajkot.",
  trustStatement: "Premium Wellness Experience • Comfortable Environment • Easy Booking",
  phoneRaw: "+919898899779",
  phoneFormatted: "+91 98988 99779",
  phoneDisplay: "98988 99779",
  callUrl: "tel:+919898899779",
  whatsappNumber: "919898899779",
  whatsappBaseUrl: "https://wa.me/919898899779",
  
  address: {
    line1: "Relax Wellness, Chowk,",
    line2: "near Premvatika Restaurant, above Jyoti Gathiya,",
    line3: "Jasraj Nagar, Mavdi,",
    line4: "Rajkot, Gujarat 360004",
    fullSingleLine: "Relax Wellness, Chowk, near Premvatika Restaurant, above Jyoti Gathiya, Jasraj Nagar, Mavdi, Rajkot, Gujarat 360004",
    landmark: "near Premvatika Restaurant, above Jyoti Gathiya",
    area: "Jasraj Nagar, Mavdi, Rajkot",
    pin: "360004"
  },

  // Direct Google Maps Place URL for Relax Spa
  mapsUrl: "https://www.google.com/maps/place/Relax+Spa/data=!4m2!3m1!1s0x0:0xf5355d23592d9332?sa=X&ved=1t:2428&ictx=111",

  aboutText: "Relax Spa is a peaceful wellness destination in Mavdi, Rajkot, designed for people who want to take a break from their busy routine and enjoy a comfortable, relaxing wellness experience.",

  aboutHighlights: [
    "Relaxing Environment",
    "Professional Service",
    "Comfortable Experience",
    "Easy Booking",
    "Convenient Rajkot Location"
  ],

  experienceHeadline: "Take a Break From the Everyday.",
  experienceSubtext: "Slow down, relax and give yourself some time to recharge.",

  contactHeading: "Ready to Relax?",
  contactSubtext: "Contact Relax Spa today to enquire about availability and services."
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `${BUSINESS_DATA.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export function buildServiceEnquiryUrl(serviceName: string): string {
  const message = `Hi Relax Spa, I would like to know more about your services and availability for ${serviceName}.`;
  return buildWhatsAppUrl(message);
}

export function buildGeneralEnquiryUrl(): string {
  const message = "Hi Relax Spa, I would like to know more about your services and availability.";
  return buildWhatsAppUrl(message);
}
