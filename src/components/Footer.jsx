import React from 'react';
import { weddingConfig } from '../config/weddingConfig';

export const Footer = () => {
  const { couple } = weddingConfig;

  return (
    <footer className="site-footer scroll-reveal" aria-label="Invitation Footer">
      {/* Traditional Kerala Kasavu Gold Border Strip */}
      <div className="footer-gold-border scroll-reveal delay-1" aria-hidden="true">
        <img
          src="/assets/footer_border.png"
          alt="Traditional Kasavu Border Pattern"
          className="gold-border-strip-img"
        />
      </div>

      <div className="footer-content">
        <p className="footer-blessing-text scroll-reveal delay-2">{couple.signatureText}</p>

        {/* Calligraphy Signature of the Couple with Smooth Stroke Reveal */}
        <div className="footer-signature-wrap scroll-reveal delay-3">
          <img
            src="/assets/signature_clean.png"
            alt={`${couple.namesFormatted} Signature`}
            className="signature-img"
          />
        </div>

        {/* Delicate Heart Motif with Gentle Pulse */}
        <div className="footer-heart-symbol scroll-reveal delay-4" aria-hidden="true">
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
