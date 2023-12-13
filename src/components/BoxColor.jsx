import React from 'react';

function BoxColor({ r, g, b }) {
  const rgbHex = (value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };
  const rgbValue = `rgb(${r}, ${g}, ${b})`;
  const hexValue = `#${rgbHex(r)}${rgbHex(g)}${rgbHex(b)}`;

  const boxStyle = {
    backgroundColor: rgbValue,
    width: '800px',
    height: '100px',
    border: '1px solid #000',
    margin: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  };
  return (
    <div style={boxStyle}>
      {rgbValue}
      {hexValue}
    </div>
  );
}

export default BoxColor;
