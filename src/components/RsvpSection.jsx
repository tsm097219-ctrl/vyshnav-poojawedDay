import React, { useState } from 'react';
import { LotusDivider } from './LotusDivider';
import { KolamPattern } from './KolamPattern';
import { weddingConfig } from '../config/weddingConfig';
import { RsvpModal } from './RsvpModal';
import { ArrowRight } from 'lucide-react';

export const RsvpSection = () => {
  const { rsvp } = weddingConfig;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="rsvp" className="rsvp-section" aria-label="Wedding RSVP">
      {/* Decorative Left: Brass Uruli with flowers sliding in from Left */}
      <div className="rsvp-decor-left reveal-from-left delay-1 parallax-decor" data-parallax-speed="0.02" aria-hidden="true">
        <img
          src="/assets/rsvp_uruli_feathered.png"
          alt="Traditional Kerala Brass Uruli with Flowers"
          className="rsvp-uruli-img"
        />
      </div>

      {/* Decorative Right: Kolam pattern and banana leaves sliding in from Right */}
      <div className="rsvp-decor-right reveal-from-right delay-1 parallax-decor" data-parallax-speed="0.02" aria-hidden="true">
        <div className="rsvp-kolam-wrap">
          <KolamPattern size={90} color="#b38753" opacity={0.65} />
        </div>
        <img
          src="/assets/rsvp_decor_feathered.png"
          alt="Banana Leaf and Jasmine Garland"
          className="rsvp-leaf-img"
        />
      </div>

      <div className="rsvp-container">
        {/* Section Header: Rise from Bottom */}
        <div className="section-header reveal-from-bottom">
          <h2 className="section-eyebrow">{rsvp.heading}</h2>
          <LotusDivider color="#946234" width={140} />
        </div>

        {/* Subtitle Invitation Line: Fade-in */}
        <p className="rsvp-subtext reveal-fade delay-2">{rsvp.subheading}</p>

        {/* Olive Green Pill Button: Scale-in and Rise from Bottom */}
        <div className="rsvp-btn-wrapper reveal-from-bottom reveal-scale-in delay-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className="rsvp-olive-btn"
            aria-label="Open RSVP response form"
          >
            <span>{rsvp.buttonText}</span>
            <ArrowRight size={16} className="btn-arrow" />
          </button>
        </div>
      </div>

      {/* RSVP Modal */}
      <RsvpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
