import React, { useState } from 'react';
import { LotusDivider } from './LotusDivider';
import { weddingConfig } from '../config/weddingConfig';
import { LightboxModal } from './LightboxModal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection = () => {
  const { gallery } = weddingConfig;
  const [activePhoto, setActivePhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const handleNavigateLightbox = (direction) => {
    if (!activePhoto) return;
    const currentIdx = gallery.findIndex((p) => p.id === activePhoto.id);
    let newIdx = currentIdx + direction;
    if (newIdx < 0) newIdx = gallery.length - 1;
    if (newIdx >= gallery.length) newIdx = 0;
    setActivePhoto(gallery[newIdx]);
  };

  return (
    <section id="gallery" className="gallery-section" aria-label="Our Gallery">
      <div className="gallery-container">
        {/* Section Header: Rise from Bottom */}
        <div className="section-header reveal-from-bottom">
          <h2 className="section-eyebrow">OUR GALLERY</h2>
          <LotusDivider color="#946234" width={140} />
        </div>

        {/* Gallery Carousel Container */}
        <div className="gallery-carousel-wrapper">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="gallery-nav-arrow arrow-left reveal-fade delay-2"
            aria-label="Previous gallery image"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Cards Grid with Directional Complementary Entrances and Scale-in */}
          <div className="gallery-cards-row">
            {gallery.map((photo, index) => {
              // Cards 0 and 1 slide from Left with scale-in; Cards 2 and 3 slide from Right with scale-in
              const directionClass = index < 2 ? 'reveal-from-left' : 'reveal-from-right';
              return (
                <div
                  key={photo.id}
                  className={`gallery-card-item ${directionClass} reveal-scale-in delay-${index + 1} ${
                    index === currentIndex ? 'is-active-focus' : ''
                  }`}
                  onClick={() => setActivePhoto(photo)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActivePhoto(photo);
                    }
                  }}
                  aria-label={`View ${photo.title}`}
                >
                  <div className="deckled-border-wrap">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="gallery-thumbnail-img"
                      loading="lazy"
                    />
                    <div className="gallery-card-overlay">
                      <span className="gallery-zoom-prompt">Enlarge</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="gallery-nav-arrow arrow-right reveal-fade delay-2"
            aria-label="Next gallery image"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Pagination Indicator Dots */}
        <div className="gallery-dots-row reveal-from-bottom delay-4" role="tablist" aria-label="Gallery pagination">
          {gallery.map((photo, idx) => (
            <button
              key={photo.id}
              onClick={() => setCurrentIndex(idx)}
              className={`gallery-dot ${idx === currentIndex ? 'active' : ''}`}
              role="tab"
              aria-selected={idx === currentIndex}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <LightboxModal
          photo={activePhoto}
          photos={gallery}
          onClose={() => setActivePhoto(null)}
          onNavigate={handleNavigateLightbox}
        />
      )}
    </section>
  );
};
