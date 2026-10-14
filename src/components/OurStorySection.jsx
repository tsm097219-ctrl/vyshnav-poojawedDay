import React from 'react';
import { LotusDivider } from './LotusDivider';
import { weddingConfig } from '../config/weddingConfig';

export const OurStorySection = () => {
  const { story } = weddingConfig;

  return (
    <section id="story" className="story-section" aria-label="Our Story">
      {/* Decorative leaf accent on the right */}
      <div className="story-decor-right" aria-hidden="true">
        <img
          src="/assets/our_story_leaf.png"
          alt="Kerala Banana Leaves Accent"
          className="story-leaf-img"
        />
      </div>

      <div className="story-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-eyebrow">{story.sectionTitle}</h2>
          <LotusDivider color="#946234" width={140} />
        </div>

        {/* Story Content Grid */}
        <div className="story-grid">
          {/* Left Column: Kerala Backwater Watercolor Illustration */}
          <div className="story-illustration-col">
            <div className="watercolor-frame">
              <img
                src="/assets/story_backwaters.jpg"
                alt="Kerala backwaters and traditional Nalukettu house watercolor"
                className="story-painting-img"
              />
            </div>
          </div>

          {/* Right Column: Narrative Text */}
          <div className="story-text-col">
            <h3 className="story-title">{story.storyHeading}</h3>
            
            <div className="story-paragraphs">
              {story.paragraphs.map((para, idx) => (
                <p key={idx} className="story-p">
                  {para}
                </p>
              ))}
            </div>

            <LotusDivider color="#a07246" width={130} />
          </div>
        </div>
      </div>
    </section>
  );
};
