const display = document.getElementById('display');
let buttons = document.querySelectorAll('.button');
let calculate = document.getElementById('calculate');
let clear = document.getElementById('clear');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        display.value += button.textContent;
    });
});

calculate.addEventListener('click', () => display.value = eval(display.value));
clear.addEventListener('click', () => display.value = '');

// Keyboard support
document.addEventListener("keydown", (event) => {
    console.log("event", event);

    const key = event.key;

    if (key === "Backspace" || key === "Delete") {
        display.value = display.value.slice(0, -1);
    }

    if (key === "Escape" || key === "c" || key === "C") {
        display.value = "";
    }
});