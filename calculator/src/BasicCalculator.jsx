import React, { useState } from 'react';
import './BasicCalculator.css';
<<<<<<< HEAD

function BasicCalculator() {
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
=======
// import ExpressionEval from 'expression-eval';
function BasicCalculator() {
  const [result, setResult] = useState('');
  const [number, setNumber] = useState('0');

  const handleClick = (e) => {
    const buttonName = e.target.name;
    if (buttonName === 'AC') {
      setResult('');
      setNumber('0');
    } else if (buttonName === 'Clear') {
      setResult(result.slice(0, -1));
      setNumber(number.slice(0, -1));
    } else if (buttonName === '+/-') {
      setNumber(number * -1);
    } else if (buttonName === '=') {
      try {
        const calculatedResult = parseAndEvaluate(result);
        setResult(calculatedResult.toString());
        setNumber(calculatedResult.toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (buttonName === '%') {
      setNumber(number / 100);
    } else {
      setResult(result.concat(buttonName));
      setNumber(number.concat(buttonName));
    }
  };

  const addDecimal = () => {
    if (!number.includes('.')) {
      setNumber(number + '.');
    }
  };

  // Function to parse and evaluate the expression
  const parseAndEvaluate = (expression) => {
    const operators = ['+', '-', '*', '/'];
    const tokens = expression.split(' ');

    const calculate = (a, b, operator) => {
      switch (operator) {
        case '+':
          return a + b;
        case '-':
          return a - b;
        case '*':
          return a * b;
        case '/':
          return a / b;
        default:
          throw new Error(`Invalid operator: ${operator}`);
      }
    };

    let accumulator = parseFloat(tokens.shift());
    for (const token of tokens) {
      if (operators.includes(token)) {
        const secondOperand = parseFloat(tokens.shift());
        accumulator = calculate(accumulator, secondOperand, token);
      } else {
        tokens.unshift(token);
        break;
      }
    }

    return accumulator;
>>>>>>> 971cde9 (commit on "new")
  };

  return (
    <div className="calculator">
<<<<<<< HEAD
      <h1>Basic Calculator </h1>
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
=======
      <input type="text" value={result} />
      <div className="keypad">
        <button className="highlight" onClick={handleClick} id="AC">
          AC
        </button>
        <button className="highlight" onClick={handleClick} id="Clear">
          Clear
        </button>
        <button className="highlight" onClick={handleClick} id="plus-minus">
          +/-
        </button>
        <button className="operations" onClick={handleClick} name="/">
          /
        </button>
        <button id="numbers" onClick={handleClick} name="7">
          7
        </button>
        <button id="numbers" onClick={handleClick} name="8">
          8
        </button>
        <button id="numbers" onClick={handleClick} name="9">
          9
        </button>
        <button className="operations" onClick={handleClick} name="*">
          *
        </button>
        <button id="numbers" onClick={handleClick} name="4">
          4
        </button>
        <button id="numbers" onClick={handleClick} name="5">
          5
        </button>
        <button id="numbers" onClick={handleClick} name="6">
          6
        </button>
        <button className="operations" onClick={handleClick} name="-">
          -
        </button>
        <button id="numbers" onClick={handleClick} name="1">
          1
        </button>
        <button id="numbers" onClick={handleClick} name="2">
          2
        </button>
        <button id="numbers" onClick={handleClick} name="3">
          3
        </button>
        <button className="operations" onClick={handleClick} name="+">
          +
        </button>
        <button className="operations" onClick={addDecimal} name=".">
          .
        </button>
        <button className="operations" onClick={handleClick} name="%">
          %
        </button>
        <button id="numbers" onClick={handleClick} name="0">
          0
        </button>
        <button className="highlight" onClick={handleClick} id="result">
>>>>>>> 971cde9 (commit on "new")
          =
        </button>
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default BasicCalculator;
=======
export default BasicCalculator;
>>>>>>> 971cde9 (commit on "new")
