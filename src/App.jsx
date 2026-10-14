import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CountdownSection } from './components/CountdownSection';
import { OurStorySection } from './components/OurStorySection';
import { WeddingDetailsSection } from './components/WeddingDetailsSection';
import { GallerySection } from './components/GallerySection';
import { RsvpSection } from './components/RsvpSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="wedding-canvas-wrapper">
      {/* 1. Top Navigation */}
      <Navbar />

      <main>
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Sage-Green Countdown Section */}
        <CountdownSection />

        {/* 4. Our Story Section */}
        <OurStorySection />

        {/* 5. Wedding Details Section */}
        <WeddingDetailsSection />

        {/* 6. Horizontal Gallery */}
        <GallerySection />

        {/* 7. Centered RSVP Section */}
        <RsvpSection />
      </main>

      {/* 8. Decorative Footer */}
      <Footer />
    </div>
  );
}

export default App;
