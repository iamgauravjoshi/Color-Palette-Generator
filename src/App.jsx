import React, { useState } from 'react';
import './App.scss';
import ColorDropdown02 from "./component/color-dropdown02";
import ColorShades02 from './component/color-shades02.jsx';

const App = () => {
  const colors = [
    {
      name: 'Red',
      shades: ['#FFCDD2', '#EF9A9A', '#E57373', '#EF5350', '#F44336'],
    },
    {
      name: 'Green',
      shades: ['#C8E6C9', '#A5D6A7', '#81C784', '#66BB6A', '#4CAF50'],
    },
    {
      name: 'Blue',
      shades: ['#BBDEFB', '#90CAF9', '#64B5F6', '#42A5F5', '#2196F3'],
    },
    {
      name: 'Yellow',
      shades: ['#FFF9C4', '#FFF59D', '#FFF176', '#FFEE58', '#FFEB3B'],
    },
    {
      name: 'Purple',
      shades: ['#E1BEE7', '#CE93D8', '#BA68C8', '#AB47BC', '#9C27B0'],
    },
    {
      name: 'Orange',
      shades: ['#FFE0B2', '#FFCC80', '#FFB74D', '#FFA726', '#FF9800'],
    },
    {
      name: 'Gray',
      shades: ['#F5F5F5', '#EEEEEE', '#E0E0E0', '#BDBDBD', '#9E9E9E'],
    },
  ];

  const [selectedColor, setSelectedColor] = useState(colors[0].name);

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const selectedShades = colors.find(color => color.name === selectedColor).shades;

  return (
    <div className='App' style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Color Shades Generator</h1>
      <ColorDropdown02 colors={colors} selectedColor={selectedColor} onChange={handleColorChange} />
      <ColorShades02 shades={selectedShades} />
    </div>
  );
};

export default App;
