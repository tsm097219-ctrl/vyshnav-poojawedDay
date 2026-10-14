import { useEffect } from 'react';

/**
 * Custom hook to activate scroll-triggered animations via IntersectionObserver.
 * Triggers once per element for optimal performance, avoiding layout shifts and CPU overhead.
 * Automatically respects prefers-reduced-motion.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Reveal all immediately if reduced motion is requested
      document.querySelectorAll('.scroll-reveal, [data-reveal]').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Once revealed, stop observing this element for peak performance
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px', // Triggers slightly before element reaches bottom of viewport
      threshold: 0.12,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const revealElements = document.querySelectorAll(
      '.scroll-reveal, [data-reveal], .reveal-stagger'
    );

    revealElements.forEach((el) => observer.observe(el));

    // Handle subtle scroll-linked parallax for floral decorative accents
    let ticking = false;
    const handleScrollParallax = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          // Apply gentle, restrained parallax offset to marked elements
          const parallaxEls = document.querySelectorAll('.parallax-decor');
          parallaxEls.forEach((el) => {
            const speed = parseFloat(el.getAttribute('data-parallax-speed') || '0.04');
            el.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScrollParallax, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollParallax);
    };
  }, []);
};
