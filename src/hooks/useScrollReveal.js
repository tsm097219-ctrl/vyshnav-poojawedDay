import { useEffect } from 'react';

/**
 * Custom hook to activate directional scroll-triggered entrance animations via IntersectionObserver.
 * Triggers once per element for optimal performance, avoiding layout shifts and CPU overhead.
 * Automatically respects prefers-reduced-motion and ensures fallback visibility if JS is unavailable.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    // Add js-enabled class to document to activate animation initial hidden states
    document.documentElement.classList.add('js-reveal-active');

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Reveal all immediately if reduced motion is requested
      document.querySelectorAll(
        '.scroll-reveal, .reveal-from-left, .reveal-from-right, .reveal-from-bottom, .reveal-fade, .reveal-scale-in'
      ).forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Once revealed, unobserve for peak performance
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px 50px 0px', // Triggers ahead of viewport edge so entrance is seamless
      threshold: 0.05,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const revealElements = document.querySelectorAll(
      '.scroll-reveal, .reveal-from-left, .reveal-from-right, .reveal-from-bottom, .reveal-fade, .reveal-scale-in'
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
};
