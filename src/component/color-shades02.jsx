import React, { useState } from 'react';
import '../styles/color-shades02.scss';

const ColorShades02 = ({ shades }) => {
  const [hoveredShade, setHoveredShade] = useState(null);

  const handleMouseEnter = (shade) => {
    setHoveredShade(shade);
  };

  const handleMouseLeave = () => {
    setHoveredShade(null);
  };

  const handleClick = (shade) => {
    navigator.clipboard.writeText(shade);
    alert(`Copied: ${shade}`);
  };

  return (
    <div className="shades-container">
      {shades.map((shade, index) => (
        <div
          key={index}
          className="shade-box"
          style={{ backgroundColor: shade }}
          onMouseEnter={() => handleMouseEnter(shade)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(shade)}
        >
          {hoveredShade === shade && <span className="shade-code">{shade}</span>}
        </div>
      ))}
    </div>
  );
};

export default ColorShades02;
