let display = document.getElementById('display');
let buttons = document.querySelectorAll('.button');
let clearDisplay = document.querySelector('.clear-display');
let calcDelete = document.querySelector('.cal-delete')
let calculateExpression = document.querySelector('.calculate')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        display.value += button.innerText;
    })
})

clearDisplay.addEventListener('click', () => {
    display.value = '';
})

calcDelete.addEventListener('click', () => {
    calcdeleteChar();
});

calculateExpression.addEventListener('click', () => {
    try {
        let expression = display.value;
        let calcResult = evaluateExpression(expression);
        display.value = calcResult;
    } catch (error) {
        display.value = error;
    }
})

function calcdeleteChar() {
    display.value = display.value.slice(0, -1)
}

function evaluateExpression(expression) {

    let operator = expression.match(/[\+\-\*\/]/)

    if (!operator) throw new Error("Invalid Expression")

    let [num1, num2] = expression.split(operator[0]).map(Number)

    switch (operator[0]) {
        case "+": {
            return num1 + num2;
        }
        case "-": {
            return num1 - num2;
        }
        case "*": {
            return num1 * num2;
        }
        case "/": {
            if (num2 === 0) throw new Error("cannot divided by 0")
            return num1 / num2;
        }
        default:
            throw new Error("Invalid Operator")
    }
}