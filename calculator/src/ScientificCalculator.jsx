import React, { useState } from 'react';
import * as math from 'mathjs';
import './ScientificCalculator.css';

function ScientificCalculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);
  const [isPositive, setIsPositive] = useState(true);

  const handleNumberClick = (number) => {
    if (displayValue === '0') {
      setDisplayValue(number);
    } else {
      setDisplayValue(displayValue + number);
    }
  };

  const handleOperatorClick = (operator) => {
    setOperator(operator);
    setPreviousValue(displayValue);
    setDisplayValue('0');
  };

  const handleEqualClick = () => {
    const currentValue = parseFloat(displayValue);
    const previous = parseFloat(previousValue);

    if (operator === '+') {
      setDisplayValue((previous + currentValue).toString());
    } else if (operator === '-') {
      setDisplayValue((previous - currentValue).toString());
    } else if (operator === '*') {
      setDisplayValue((previous * currentValue).toString());
    } else if (operator === '/') {
      setDisplayValue((previous / currentValue).toString());
    }
  };

  const handleACClick = () => {
    setDisplayValue('0');
    setOperator(null);
    setPreviousValue(null);
    setIsPositive(true);
  };

  const handleClearClick = () => {
    setDisplayValue(displayValue.slice(0, -1) || '0');
  };

  const addDecimal = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const makePercentage = () => {
    setDisplayValue((parseFloat(displayValue) / 100).toString());
  };

  const toggleSign = () => {
    setIsPositive((prev) => !prev);
    setDisplayValue((parseFloat(displayValue) * -1).toString());
  };

  const handleFunctionClick = (func) => {
    try {
      const result = math[func](parseFloat(displayValue));
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  // Add a button for the square function
  const handleSquareClick = () => {
    try {
      const result = math.square(parseFloat(displayValue));
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  return (
    <div className="calculator">
      <h1>Scientific Calculator </h1>
      <input type="text" value={displayValue} readOnly />
      <div className="keypad">
        <button className="highlight" onClick={handleACClick} id="AC">
          AC
        </button>
        <button className="highlight" onClick={handleClearClick} id="Clear">
          Clear
        </button>
        <button className="highlight" onClick={toggleSign} id="plus-minus">
          {isPositive ? 'Pos' : 'Neg'}
        </button>
        <button className="operations" onClick={() => handleOperatorClick('/')}>
          /
        </button>
        <button id="numbers" onClick={() => handleNumberClick('7')}>
          7
        </button>
        <button id="numbers" onClick={() => handleNumberClick('8')}>
          8
        </button>
        <button id="numbers" onClick={() => handleNumberClick('9')}>
          9
        </button>
        <button className="operations" onClick={() => handleOperatorClick('*')}>
          *
        </button>
        <button id="numbers" onClick={() => handleNumberClick('4')}>
          4
        </button>
        <button id="numbers" onClick={() => handleNumberClick('5')}>
          5
        </button>
        <button id="numbers" onClick={() => handleNumberClick('6')}>
          6
        </button>
        <button className="operations" onClick={() => handleOperatorClick('-')}>
          -
        </button>
        <button id="numbers" onClick={() => handleNumberClick('1')}>
          1
        </button>
        <button id="numbers" onClick={() => handleNumberClick('2')}>
          2
        </button>
        <button id="numbers" onClick={() => handleNumberClick('3')}>
          3
        </button>
        <button className="operations" onClick={() => handleOperatorClick('+')}>
          +
        </button>
        <button className="operations" onClick={addDecimal}>
          .
        </button>
        <button id="numbers" onClick={() => handleNumberClick('0')}>
          0
        </button>
        <button className="operations" onClick={makePercentage}>
          %
        </button>
        <button className="operations" onClick={handleEqualClick} id="result">
          =
        </button>
        
        <button
          className="operations"
          onClick={() => handleFunctionClick('exp')}
        >
          exp
        </button>
        <button
          className="operations"
          onClick={() => handleFunctionClick('log')}
        >
          log
        </button>
        <button
          className="operations"
          onClick={() => handleFunctionClick('sin')}
        >
          sin
        </button>
        <button
          className="operations"
          onClick={() => handleFunctionClick('cos')}
        >
          cos
        </button>
        <button
          className="operations"
          onClick={() => handleFunctionClick('tan')}
        >
          tan
        </button>
        <button
          className="operations"
          onClick={() => handleFunctionClick('pi')}
        >
          π
        </button>
        <button
          className="operations"
          onClick={() => handleFunctionClick('abs')}
        >
          abs
        </button>
        <button
          className="operations"
          onClick={() => handleFunctionClick('ceil')}
        >
          ceil
        </button>
        <button
          className="operations"
          onClick={() => handleFunctionClick('floor')}
        >
          floor
        </button>
        <button
          className="operations"
          onClick={() => handleFunctionClick('round')}
        >
          round
        </button>
        {/* Add a button for the square function */}
        <button className="operations" onClick={handleSquareClick}>
          x²
        </button>
        <button className="operations" onClick={() => handleFunctionClick('sqrt')}>
          √
        </button>
      </div>
    </div>
  );
}

export default ScientificCalculator;
