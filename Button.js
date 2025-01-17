import React from 'react';
import './Button.css';

const Button = ({ value, onClick, className }) => {
  return (
    <button className={className} onClick={() => onClick(value)}>
      {value}
    </button>
  );
};

export default Button;