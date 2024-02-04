let display = document.getElementById('display');
let expression = '';

function appendNumber(number) {
  expression += number;
  display.value = expression;
}

function appendOperator(operator) {
  expression += operator;
  display.value = expression;
}

function clearDisplay() {
  expression = '';
  display.value = '';
}

function deleteLast() {
  expression = expression.slice(0, -1);
  display.value = expression;
}

function calculate() {
  try {
    let result = eval(expression);
    display.value = result;
    expression = result.toString();
  } catch (error) {
    display.value = 'Error';
    expression = '';
  }
}
