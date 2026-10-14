import React from 'react';
import { LotusDivider } from './LotusDivider';
import { weddingConfig } from '../config/weddingConfig';

export const OurStorySection = () => {
  const { story } = weddingConfig;

  return (
    <section id="story" className="story-section scroll-reveal" aria-label="Our Story">
      {/* Decorative leaf accent on the right */}
      <div className="story-decor-right scroll-reveal reveal-slide-left delay-2 parallax-decor" data-parallax-speed="0.03" aria-hidden="true">
        <img
          src="/assets/our_story_leaf.png"
          alt="Kerala Banana Leaves Accent"
          className="story-leaf-img"
        />
      </div>

      <div className="story-container">
        {/* Section Header */}
        <div className="section-header scroll-reveal delay-1">
          <h2 className="section-eyebrow">{story.sectionTitle}</h2>
          <LotusDivider color="#946234" width={140} />
        </div>

        {/* Story Content Grid */}
        <div className="story-grid">
          {/* Left Column: Kerala Backwater Watercolor Illustration */}
          <div className="story-illustration-col scroll-reveal reveal-scale delay-2">
            <div className="watercolor-frame">
              <img
                src="/assets/story_backwaters.jpg"
                alt="Kerala backwaters and traditional Nalukettu house watercolor"
                className="story-painting-img"
              />
            </div>
          </div>

          {/* Right Column: Narrative Text with Staggered Fade Up */}
          <div className="story-text-col">
            <h3 className="story-title scroll-reveal delay-2">{story.storyHeading}</h3>
            
            <div className="story-paragraphs">
              {story.paragraphs.map((para, idx) => (
                <p key={idx} className={`story-p scroll-reveal delay-${idx + 3}`}>
                  {para}
                </p>
              ))}
            </div>

            <div className="scroll-reveal delay-4">
              <LotusDivider color="#a07246" width={130} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
