import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const LightboxModal = ({ photo, photos, onClose, onNavigate }) => {
  if (!photo) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate(1);
      if (e.key === 'ArrowLeft') onNavigate(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigate]);

  return (
    <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        <button
          className="lightbox-nav-btn lightbox-prev"
          onClick={() => onNavigate(-1)}
          aria-label="Previous photo"
        >
          <ChevronLeft size={28} />
        </button>

        <div className="lightbox-image-wrap">
          <img src={photo.src} alt={photo.title} className="lightbox-img" />
          <div className="lightbox-caption">
            <h4 className="lightbox-title">{photo.title}</h4>
            <p className="lightbox-desc">{photo.caption}</p>
          </div>
        </div>

        <button
          className="lightbox-nav-btn lightbox-next"
          onClick={() => onNavigate(1)}
          aria-label="Next photo"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
};
