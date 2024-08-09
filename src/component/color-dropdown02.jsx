import React from 'react';

const ColorDropdown02 = ({ colors, selectedColor, onChange }) => {
  return (
    <select value={selectedColor} onChange={onChange} className="color-dropdown">
      {colors.map((color, index) => (
        <option key={index} value={color.name}>
          {color.name}
        </option>
      ))}
    </select>
  );
};

export default ColorDropdown02;

