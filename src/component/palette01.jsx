import React, { useState } from 'react';
import './styles/palette01.scss';

const Palette = ({ colors }) => {
  const [hoveredColor, setHoveredColor] = useState(null);

  const handleMouseEnter = (color) => {
    setHoveredColor(color);
  };

  const handleMouseLeave = () => {
    setHoveredColor(null);
  };

  const handleClick = (color) => {
    navigator.clipboard.writeText(color);
    alert(`Copied: ${color}`);
  };

  return (
    <div className="palette-container">
      {colors.map((color, index) => (
        <div
          key={index}
          className="color-box"
          style={{ backgroundColor: color }}
          onMouseEnter={() => handleMouseEnter(color)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(color)}
        >
          {hoveredColor === color && <span className="color-code">{color}</span>}
        </div>
      ))}
    </div>
  );
};

export default Palette;
