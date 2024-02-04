import React, { useState } from 'react';
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
    if (!number.includes('.')) {
      setNumber(number + '.');
      setInput(input + '.');
    }
  };

  return (
    <div className="ScientificCalculator">
      <input type="text" value={input} />
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
        <button onClick={handleClick} name="pow">
          ^
        </button>
        <button className="highlight" onClick={handleClick} id="result">
          =
        </button>
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default ScientificCalculator;
=======
export default ScientificCalculator;