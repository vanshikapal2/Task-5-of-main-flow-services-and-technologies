import React from 'react';
import Button from './Button';
import './ButtonPanel.css';

const ButtonPanel = ({ onButtonClick }) => {
  const buttons = [
    'C', '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <div className="button-panel">
      {buttons.map(button => (
        <Button
          key={button}
          value={button}
          onClick={onButtonClick}
          className={
            button === 'C' ? 'button clear' :
            button === '0' ? 'button zero' :
            ['/', '*', '-', '+', '='].includes(button) ? 'button operation' :
            'button'
          }
        />
      ))}
    </div>
  );
};

export default ButtonPanel;