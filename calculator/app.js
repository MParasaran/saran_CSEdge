let displayValue = '';

function inputValue(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function calculateResult() {
  try {
    displayValue = eval(displayValue).toString();
    document.getElementById('display').value = displayValue;
  } catch {
    displayValue = 'Error';
    document.getElementById('display').value = displayValue;
  }
}
