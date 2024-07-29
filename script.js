const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

let firstOperand = '';
let secondOperand = '';
let operator = '';
let shouldResetDisplay = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === '+' || value === '-' || value === '*' || value === '/') {
            if (firstOperand && secondOperand) {
                calculate();
            }
            operator = value;
            shouldResetDisplay = true;
            display.textContent += value;
        } else if (value === '=') {
            calculate();
        } else if (value === 'C') {
            resetCalculator();
        } else {
            if (shouldResetDisplay) {
                display.textContent = '';
                shouldResetDisplay = false;
            }
            display.textContent += value;
            if (!operator) {
                firstOperand += value;
            } else {
                secondOperand += value;
            }
        }
    });
});

function calculate() {
    let result;

    const first = parseFloat(firstOperand);
    const second = parseFloat(secondOperand);

    if (operator === '+') {
        result = first + second;
    } else if (operator === '-') {
        result = first - second;
    } else if (operator === '*') {
        result = first * second;
    } else if (operator === '/') {
        result = first / second;
    }

    display.textContent = result;
    firstOperand = result.toString();
    secondOperand = '';
    operator = '';
}

function resetCalculator() {
    display.textContent = '0';
    firstOperand = '';
    secondOperand = '';
    operator = '';
    shouldResetDisplay = false;
}