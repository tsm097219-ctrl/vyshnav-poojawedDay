import React from 'react';
import { weddingConfig } from '../config/weddingConfig';

export const Footer = () => {
  const { couple } = weddingConfig;

  return (
    <footer className="site-footer" aria-label="Invitation Footer">
      {/* Traditional Kerala Kasavu Gold Border Strip: Rise from Bottom */}
      <div className="footer-gold-border reveal-from-bottom delay-1" aria-hidden="true">
        <img
          src="/assets/footer_border.png"
          alt="Traditional Kasavu Border Pattern"
          className="gold-border-strip-img"
        />
      </div>

      <div className="footer-content">
        <p className="footer-blessing-text reveal-from-bottom delay-2">{couple.signatureText}</p>

        {/* Calligraphy Signature of the Couple: Smooth Opacity Reveal */}
        <div className="footer-signature-wrap reveal-fade delay-3">
          <img
            src="/assets/signature_clean.png"
            alt={`${couple.namesFormatted} Signature`}
            className="signature-img"
          />
        </div>

        {/* Delicate Heart Motif: Scale-in with Gentle Heartbeat Pulse */}
        <div className="footer-heart-symbol reveal-scale-in delay-4" aria-hidden="true">
          <img
            src="/assets/footer_heart_clean.png"
            alt="Heart"
            className="footer-heart-img heartbeat-pulse"
            width="22"
            height="16"
          />
        </div>
      </div>
    </footer>
  );
};
