import React from 'react';
import { LotusDivider } from './LotusDivider';
import { KolamPattern } from './KolamPattern';
import { weddingConfig } from '../config/weddingConfig';
import { ArrowDown } from 'lucide-react';

export const HeroSection = () => {
  const { couple, event, venue } = weddingConfig;

  const scrollToStory = () => {
    const target = document.querySelector('#big-day');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero-section" aria-label="Wedding Invitation Hero">
      {/* Decorative Illustrations Framing Content (Desktop) */}
      <div className="hero-decor-container" aria-hidden="true">
        {/* Left: Banana leaves, hanging jasmine garlands, and brass Nilavilakku */}
        <div className="decor-left">
          <img
            src="/assets/hero_left_feathered.png"
            alt="Traditional Kerala Nilavilakku and Banana Leaves"
            className="decor-img decor-img-left"
          />
        </div>

        {/* Right Top: Hanging brass lamps (Thookkuvilakku) */}
        <div className="decor-right-top">
          <img
            src="/assets/hero_lamps_feathered.png"
            alt="Traditional Hanging Brass Lamps"
            className="decor-img decor-img-lamps"
          />
        </div>

        {/* Right Middle: Subtle Kolam geometric art */}
        <div className="decor-right-kolam">
          <KolamPattern size={85} color="#b38753" opacity={0.65} />
        </div>

        {/* Right Bottom: Kasavu Bride and Groom wedding ceremony illustration (Desktop) */}
        <div className="decor-right-couple desktop-only">
          <img
            src="/assets/hero_couple_feathered.png"
            alt="Kerala Wedding Ceremony Bride and Groom"
            className="decor-img decor-img-couple"
          />
        </div>
      </div>

      {/* Main Invitation Typography & Details */}
      <div className="hero-content">
        {/* Auspicious Emblem & Heading */}
        <div className="auspicious-block">
          <img
            src="/assets/sreerastu_transparent.png"
            alt="Auspicious Deity Motif"
            className="sreerastu-emblem"
            width="34"
            height="36"
          />
          <h2 className="auspicious-title">
            <span>Sreerastu</span>
            <span>Subhamastu</span>
          </h2>
        </div>

        {/* Invitation Greeting */}
        <div className="invitation-intro">
          <p className="intro-line">TOGETHER WITH THEIR FAMILIES</p>
          <p className="intro-line">WE WARMLY INVITE YOU TO THE WEDDING OF</p>
        </div>

        {/* Couple Names */}
        <div className="couple-names-wrap">
          <h1 className="couple-name groom-name">{couple.groom}</h1>
          <span className="ampersand">&amp;</span>
          <h1 className="couple-name bride-name">{couple.bride}</h1>
        </div>

        {/* Lotus Divider */}
        <LotusDivider color="#946234" width={170} />

        {/* Date & Time */}
        <div className="hero-event-schedule">
          <p className="hero-date">{event.dayOfWeek}, {event.dateFormatted}</p>
          <p className="hero-time">{event.timeFormatted}</p>
        </div>

        {/* Venue Location */}
        <div className="hero-venue-info">
          <p className="hero-venue-name">{venue.name}</p>
          <p className="hero-venue-sub">{venue.location}</p>
        </div>

        {/* Mobile-dedicated Couple Ceremony Illustration (unobstructed on small screens) */}
        <div className="hero-couple-mobile mobile-only" aria-hidden="true">
          <img
            src="/assets/hero_couple_feathered.png"
            alt="Kerala Wedding Ceremony Bride and Groom"
            className="mobile-couple-img"
          />
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToStory}
          className="scroll-indicator-btn"
          aria-label="Scroll down to countdown"
        >
          <span className="scroll-circle">
            <ArrowDown size={18} className="scroll-arrow" />
          </span>
        </button>
      </div>
    </section>
  );
};
