import React from 'react';
import { weddingConfig } from '../config/weddingConfig';

export const Footer = () => {
  const { couple } = weddingConfig;

  return (
    <footer className="site-footer" aria-label="Invitation Footer">
      {/* Traditional Kerala Kasavu Gold Border Strip */}
      <div className="footer-gold-border" aria-hidden="true">
        <img
          src="/assets/footer_border.png"
          alt="Traditional Kasavu Border Pattern"
          className="gold-border-strip-img"
        />
      </div>

      <div className="footer-content">
        <p className="footer-blessing-text">{couple.signatureText}</p>

        {/* Calligraphy Signature of the Couple */}
        <div className="footer-signature-wrap">
          <img
            src="/assets/signature_clean.png"
            alt={`${couple.namesFormatted} Signature`}
            className="signature-img"
          />
        </div>

        {/* Delicate Heart Motif */}
        <div className="footer-heart-symbol" aria-hidden="true">
          <img
            src="/assets/footer_heart_clean.png"
            alt="Heart"
            className="footer-heart-img"
            width="22"
            height="16"
          />
        </div>
      </div>
    </footer>
  );
};
