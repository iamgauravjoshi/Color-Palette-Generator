import React from 'react';

const ColorDropdown01 = ({ palettes, selectedPalette, onChange }) => {
  return (
    <select value={selectedPalette} onChange={onChange}>
      {palettes.map((palette, index) => (
        <option key={index} value={index}>
          {palette.name}
        </option>
      ))}
    </select>
  );
};

export default ColorDropdown01;
