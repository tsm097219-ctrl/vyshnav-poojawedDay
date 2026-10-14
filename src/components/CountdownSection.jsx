import React, { useState, useEffect } from 'react';
import { LotusDivider } from './LotusDivider';
import { KolamPattern } from './KolamPattern';
import { weddingConfig } from '../config/weddingConfig';

export const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  useEffect(() => {
    const targetTime = new Date(weddingConfig.event.targetDateISO).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isCompleted: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isCompleted: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="big-day" className="countdown-section" aria-label="Wedding Countdown">
      <div className="countdown-container">
        {/* Section Heading */}
        <div className="countdown-header">
          <h2 className="countdown-title">THE BIG DAY</h2>
          <LotusDivider color="#6e6648" width={140} />
        </div>

        {/* Counter Content with Vector Kolams */}
        <div className="countdown-body">
          {/* Left Kolam Pattern */}
          <div className="kolam-flank kolam-left" aria-hidden="true">
            <KolamPattern size={85} color="#63593a" opacity={0.7} />
          </div>

          {/* Countdown Numbers Grid */}
          <div className="countdown-grid" role="timer" aria-live="polite">
            <div className="time-block">
              <span className="time-number">{timeLeft.days}</span>
              <span className="time-unit">DAYS</span>
            </div>

            <div className="time-divider" aria-hidden="true">|</div>

            <div className="time-block">
              <span className="time-number">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="time-unit">HOURS</span>
            </div>

            <div className="time-divider" aria-hidden="true">|</div>

            <div className="time-block">
              <span className="time-number">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="time-unit">MINUTES</span>
            </div>

            <div className="time-divider" aria-hidden="true">|</div>

            <div className="time-block">
              <span className="time-number">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="time-unit">SECONDS</span>
            </div>
          </div>

          {/* Right Kolam Pattern */}
          <div className="kolam-flank kolam-right" aria-hidden="true">
            <KolamPattern size={85} color="#63593a" opacity={0.7} />
          </div>
        </div>
      </div>
    </section>
  );
};
