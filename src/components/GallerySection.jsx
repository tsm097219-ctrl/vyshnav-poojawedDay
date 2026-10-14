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
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-eyebrow">OUR GALLERY</h2>
          <LotusDivider color="#946234" width={140} />
        </div>

        {/* Gallery Carousel Container */}
        <div className="gallery-carousel-wrapper">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="gallery-nav-arrow arrow-left"
            aria-label="Previous gallery image"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Cards Grid / Row */}
          <div className="gallery-cards-row">
            {gallery.map((photo, index) => (
              <div
                key={photo.id}
                className={`gallery-card-item ${index === currentIndex ? 'is-active-focus' : ''}`}
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
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="gallery-nav-arrow arrow-right"
            aria-label="Next gallery image"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Pagination Indicator Dots */}
        <div className="gallery-dots-row" role="tablist" aria-label="Gallery pagination">
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
