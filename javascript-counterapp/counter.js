let counterValue = document.getElementById('counterValue');
let decrementBtn = document.querySelector('.decrement')
let resetBtn = document.querySelector('.reset')
let incrementBtn = document.querySelector('.increment')


//initial value
let count = 0;

function updateCounter() {
    counterValue.textContent = count
    console.log("count", count);
}

decrementBtn.addEventListener('click', () => {
    count--;
    updateCounter();
})

resetBtn.addEventListener('click', () => {
    count = 0;;
    updateCounter();
})

incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
})

// updateCounter();