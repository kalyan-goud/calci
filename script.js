let display = document.getElementById('display');
let currentInput = '';

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operator) {

    if (currentInput.length > 0 && !['+', '-', '*', '/'].includes(currentInput.slice(-1))) {
        currentInput += operator;
        display.value = currentInput;
    }
}

function calculate() {
    try {

        let result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}