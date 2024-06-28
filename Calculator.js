import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        // eslint-disable-next-line no-eval
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <Display value={input} />
      <ButtonPanel onButtonClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;