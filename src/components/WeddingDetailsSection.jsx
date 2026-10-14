import React from 'react';
import { LotusDivider } from './LotusDivider';
import { weddingConfig } from '../config/weddingConfig';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

export const WeddingDetailsSection = () => {
  const { event, venue } = weddingConfig;

  return (
    <section id="details" className="details-section" aria-label="Wedding Details and Venue">
      {/* Decorative Kerala Temple Gopuram Illustration on Right */}
      <div className="details-decor-right" aria-hidden="true">
        <img
          src="/assets/details_temple_feathered.png"
          alt="Traditional Kerala Temple Architecture"
          className="details-temple-img"
        />
      </div>

      <div className="details-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-eyebrow">WEDDING DETAILS</h2>
          <LotusDivider color="#946234" width={140} />
        </div>

        {/* 3-Column Schedule & Venue Cards */}
        <div className="details-grid">
          {/* Column 1: Date & Time */}
          <div className="detail-column">
            <div className="detail-icon-wrap" aria-hidden="true">
              <Calendar size={28} className="detail-icon" strokeWidth={1.4} />
            </div>
            <h3 className="detail-label">DATE &amp; TIME</h3>
            <p className="detail-primary-val">{event.dateFormatted}</p>
            <p className="detail-secondary-val">{event.timeFormatted}</p>
          </div>

          <div className="detail-col-separator" aria-hidden="true"></div>

          {/* Column 2: Venue */}
          <div className="detail-column">
            <div className="detail-icon-wrap" aria-hidden="true">
              {/* Traditional Kerala Temple / Mandapam Line Art Icon */}
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="detail-icon">
                <path d="M12 2L15 5.5H9L12 2Z" />
                <path d="M3.5 10L12 5.5L20.5 10H3.5Z" />
                <path d="M6 10V21H18V10" />
                <path d="M10 21V15H14V21" />
                <path d="M2 21H22" />
              </svg>
            </div>
            <h3 className="detail-label">VENUE</h3>
            <p className="detail-primary-val">{venue.nameDisplay}</p>
            <p className="detail-secondary-val">{venue.location}</p>
          </div>

          <div className="detail-col-separator" aria-hidden="true"></div>

          {/* Column 3: Location / Map Action */}
          <div className="detail-column detail-action-col">
            <div className="detail-icon-wrap" aria-hidden="true">
              <MapPin size={28} className="detail-icon" strokeWidth={1.4} />
            </div>
            
            <a
              href={venue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="maps-pill-btn"
              aria-label="View Guruvayoor Ambalam on Google Maps"
            >
              <span>View on Maps</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
