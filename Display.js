import React from 'react';
import './Display.css';

const Display = ({ value }) => {
  const calculateFontSize = (text) => {
    const length = text.length;
    if (length > 10) {
      return '1.5em';
    } else if (length > 5) {
      return '2em';
    }
    return '2.5em';
  };

  return (
    <div className="display" style={{ fontSize: calculateFontSize(value) }}>
      {value}
    </div>
  );
};

export default Display;