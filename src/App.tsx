/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import { SideFloatingActions } from './components/SideFloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#1e293b] flex flex-col font-sans selection:bg-purple-100 selection:text-[#6b21a8]">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Sections in Exact Requested Sequence */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Just below Hero: Our Services */}
        <Services />

        {/* 3. Just below Services: Spa Gallery */}
        <Gallery />

        {/* 4. Just below Gallery: Review / Guest Feedback Section */}
        <Testimonials />

        {/* 5. Just below Reviews & Just ABOVE Get In Touch: Location Section with Google Map */}
        <Location />

        {/* 6. Get In TOUCH / Book an Experience Section */}
        <InquirySection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Side Floating Call & WhatsApp Buttons (Desktop/Tablet) */}
      <SideFloatingActions />
    </div>
  );
}
