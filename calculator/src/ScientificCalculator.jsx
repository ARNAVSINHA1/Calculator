import React, { useState } from 'react';
<<<<<<< HEAD
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
=======
import './ScientificCalculator.css';
import { expressionEval } from 'expression-eval';

function ScientificCalculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [number, setNumber] = useState('0');
  const [isPositive, setIsPositive] = useState(true);

  const handleClick = (e) => {
    const buttonName = e.target.name;
    if (buttonName === 'AC') {
      setInput('');
      setResult('');
      setNumber('0');
      setIsPositive(true);
    } else if (buttonName === 'Clear') {
      setInput('');
      setResult(result.slice(0, -1));
      setNumber(number.slice(0, -1));
    } else if (buttonName === '+/-') {
      setIsPositive(prev => !prev);
    } else if (buttonName === '=') {
      try {
        const calculatedResult = expressionEval(result);
        setInput(calculatedResult.toString());
        setResult(calculatedResult.toString());
        setNumber(calculatedResult.toString());
        setIsPositive(calculatedResult >= 0);
      } catch (error) {
        setResult('Error');
      }
    } else if (buttonName === '%') {
      setNumber(number / 100);
    } else if (buttonName === 'sqrt') {
      setInput(Math.sqrt(Number(input)));
    } else if (buttonName === 'cbrt') {
      setInput(Math.cbrt(Number(input)));
    } else if (buttonName === 'pow') {
      setInput(Math.pow(2, Number(input)));
    } else if (buttonName === 'random') {
      setInput(Math.floor(Math.random() * 100));
    } else {
      setInput(input.concat(buttonName));
      setResult(result.concat(buttonName));
      setNumber(number.concat(buttonName));
      return; // add return statement here
    }
  };

  const addDecimal = () => {
    if (!number.includes('.')) {
      setNumber(number + '.');
      setInput(input + '.');
>>>>>>> 971cde9 (commit on "new")
    }
  };

  return (
<<<<<<< HEAD
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
=======
    <div className="ScientificCalculator">
      <input type="text" value={input} />
      <div className="keypad">
        <button className="highlight" onClick={handleClick} id="backspace">
          AC
        </button>
        <button className="highlight" onClick={handleClick} id="clear">
          Clear
        </button>
        <button className="highlight" onClick={handleClick} id="p/n">
          {isPositive ? '+' : '-'}
        </button>
        <button className="operations" name="/" onClick={handleClick}>
          /
        </button>
        <button id="numbers" name="7" onClick={handleClick}>
          7
        </button>
        <button id="numbers" name="8" onClick={handleClick}>
          8
        </button>
        <button id="numbers" name="9" onClick={handleClick}>
          9
        </button>
        <button className="operations" name="*" onClick={handleClick}>
          *
        </button>
        
        <button id="numbers" name="4" onClick={handleClick}>
          4
        </button>
        <button id="numbers" name="5" onClick={handleClick}>
          5
        </button>
        <button id="numbers" name="6" onClick={handleClick}>
          6
        </button>
        <button className="operations" name="-" onClick={handleClick}>
          -
        </button>
        <button id="numbers" name="1" onClick={handleClick}>
          1
        </button>
        <button id="numbers" name="2" onClick={handleClick}>
          2
        </button>
        <button id="numbers" name="3" onClick={handleClick}>
          3
        </button>
        <button className="operations" name="+" onClick={handleClick}>
          +
        </button>
        <button className="operations" name="." onClick={addDecimal}>
          .
        </button>
        <button className="operations" name="%" onClick={handleClick}>
          %
        </button>
        <button id="numbers" name="0" onClick={handleClick}>
          0
        </button>
        <button className="operations" name="sqrt" onClick={handleClick}>
          √
        </button>
        <button className="operations" name="sin" onClick={() => handleClick('Math.sin')}>
          sin
        </button>
        <button className="operations" name="cos" onClick={() => handleClick('Math.cos')}>
          cos
        </button>
        <button className="operations" name="tan" onClick={() => handleClick('Math.tan')}>
          tan
        </button>
        <button className="operations" name="cbrt" onClick={handleClick}>
          ∛
        </button>
        <button className="operations" name="log" onClick={() => handleClick('Math.log10')}>
          log
        </button>
        <button className="operations" name="ln" onClick={() => handleClick('Math.log')}>
          ln
        </button>
        <button className="operations" name="e" onClick={() => handleClick('Math.E')}>
          e
        </button>
        <button className="operations" name="pi" onClick={() => handleClick('Math.PI')}>
          π
        </button>
        <button onClick={handleClick} name="random">
          Random Integer
        </button>
        <button onClick={handleClick} name="pow">
          ^
        </button>
        <button className="highlight" onClick={handleClick} id="result">
          =
>>>>>>> 971cde9 (commit on "new")
        </button>
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default ScientificCalculator;
=======
export default ScientificCalculator;
>>>>>>> 971cde9 (commit on "new")
