import React from 'react';

/**
 * Traditional Kerala Sikku/Neli Kolam vector component
 * Symmetrical looping geometric knotwork with center dots
 */
export const KolamPattern = ({ size = 95, color = '#786944', opacity = 0.8, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`kolam-vector ${className}`}
      style={{ opacity, maxWidth: '100%' }}
    >
      {/* Center 5x5 / diamond grid of auspicious dots (pulli) */}
      <circle cx="50" cy="18" r="1.8" fill={color} />
      
      <circle cx="36" cy="32" r="1.8" fill={color} />
      <circle cx="50" cy="32" r="1.8" fill={color} />
      <circle cx="64" cy="32" r="1.8" fill={color} />

      <circle cx="22" cy="50" r="1.8" fill={color} />
      <circle cx="36" cy="50" r="1.8" fill={color} />
      <circle cx="50" cy="50" r="2.2" fill={color} />
      <circle cx="64" cy="50" r="1.8" fill={color} />
      <circle cx="78" cy="50" r="1.8" fill={color} />

      <circle cx="36" cy="68" r="1.8" fill={color} />
      <circle cx="50" cy="68" r="1.8" fill={color} />
      <circle cx="64" cy="68" r="1.8" fill={color} />

      <circle cx="50" cy="82" r="1.8" fill={color} />

      {/* Symmetrical continuous interlocking Kolam curves */}
      {/* Top loop */}
      <path
        d="M50 8 C42 8 36 20 50 25 C64 20 58 8 50 8Z"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Bottom loop */}
      <path
        d="M50 92 C42 92 36 80 50 75 C64 80 58 92 50 92Z"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Left loop */}
      <path
        d="M8 50 C8 42 20 36 25 50 C20 64 8 58 8 50Z"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Right loop */}
      <path
        d="M92 50 C92 42 80 36 75 50 C80 64 92 58 92 50Z"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Diagonal intertwined loops */}
      {/* Top-Left to Bottom-Right intertwined knot */}
      <path
        d="M36 18 C20 34 20 66 36 82 C52 66 52 34 36 18Z"
        stroke={color}
        strokeWidth="1.1"
      />
      {/* Top-Right to Bottom-Left intertwined knot */}
      <path
        d="M64 18 C80 34 80 66 64 82 C48 66 48 34 64 18Z"
        stroke={color}
        strokeWidth="1.1"
      />

      {/* Central diamond perimeter connector */}
      <path
        d="M50 25 L75 50 L50 75 L25 50 Z"
        stroke={color}
        strokeWidth="1.1"
      />
    </svg>
  );
};
