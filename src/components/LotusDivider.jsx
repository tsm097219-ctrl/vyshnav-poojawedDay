import React from 'react';

/**
 * Reusable traditional Kerala Lotus Floral Divider
 * Matches the reference design divider under section headers
 */
export const LotusDivider = ({ className = '', color = '#8b5a2b', width = 160 }) => {
  return (
    <div className={`lotus-divider-container ${className}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0.5rem auto' }}>
      <svg
        width={width}
        height="18"
        viewBox="0 0 160 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible', maxWidth: '100%' }}
      >
        {/* Left hairline accent */}
        <line x1="5" y1="9" x2="65" y2="9" stroke={color} strokeWidth="1" strokeOpacity="0.75" />
        <circle cx="6" cy="9" r="1.5" fill={color} fillOpacity="0.75" />
        
        {/* Central Stylized Lotus Motif */}
        {/* Center petal */}
        <path
          d="M80 2C77 6 77 11 80 15C83 11 83 6 80 2Z"
          fill="none"
          stroke={color}
          strokeWidth="1.2"
        />
        {/* Left inner petal */}
        <path
          d="M79 5C74 7 73 12 78 15"
          fill="none"
          stroke={color}
          strokeWidth="1.1"
        />
        {/* Right inner petal */}
        <path
          d="M81 5C86 7 87 12 82 15"
          fill="none"
          stroke={color}
          strokeWidth="1.1"
        />
        {/* Left outer petal */}
        <path
          d="M77 8C70 10 70 14 76 15"
          fill="none"
          stroke={color}
          strokeWidth="1"
        />
        {/* Right outer petal */}
        <path
          d="M83 8C90 10 90 14 84 15"
          fill="none"
          stroke={color}
          strokeWidth="1"
        />
        {/* Lotus base calyx */}
        <path
          d="M74 15C77 16.5 83 16.5 86 15"
          fill="none"
          stroke={color}
          strokeWidth="1.2"
        />

        {/* Right hairline accent */}
        <line x1="95" y1="9" x2="155" y2="9" stroke={color} strokeWidth="1" strokeOpacity="0.75" />
        <circle cx="154" cy="9" r="1.5" fill={color} fillOpacity="0.75" />
      </svg>
    </div>
  );
};
