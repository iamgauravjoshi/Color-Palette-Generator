// src/components/Palette.js
import React, { useState, useRef } from 'react';
import '../styles/palette02.scss';

const Palette02 = ({ color }) => {
  const [hoveredColor, setHoveredColor] = useState(null);
  const colorRef = useRef(null);

  const handleMouseEnter = () => {
    setHoveredColor(color);
  };

  const handleMouseLeave = () => {
    setHoveredColor(null);
  };

  const handleClick = () => {
    const colorCode = colorRef.current.innerText;
    navigator.clipboard.writeText(colorCode);
    alert(`Copied: ${colorCode}`);
  };

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {hoveredColor && (
        <span className="color-code" ref={colorRef}>
          {color}
        </span>
      )}
    </div>
  );
};

export default Palette02;
