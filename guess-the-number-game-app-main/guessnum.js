let form = document.forms.guessnumberForm;

let guessInput = document.getElementById('inputnumber')
let submitBtn = document.querySelector('.submitBtn')
let message = document.querySelector('.message')
let attemptLeft = document.getElementById('attemptLeft')
let resetBtn = document.getElementById('resetBtn')
let enteredNum = document.querySelector('.entered-num')

let randomNum = Math.floor(Math.random() * 50)
// console.log(randomNum);
let attempt = 10;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(form)
    let userguessInput = parseInt(formData.get('guessnumInput').trim(), 10)
    console.log(typeof userguessInput);

    // if (!userguessInput || userguessInput < 1 || userguessInput > 50) {
    //     errorMessage.textContent = 'Please enter number between 1 to 50';
    // }
    // else {
    //     errorMessage.textContent = ''
    //     checkguessNumber();
    // }



    !userguessInput || userguessInput < 1 || userguessInput > 50
        ? (message.textContent = 'Please enter number between 1 to 50', (message.style.color = 'red'))
        : (message.textContent = '', guessInput.value = '', checkguessNumber(), attempt--, enteredNum.textContent += `${userguessInput}, `)



    function checkguessNumber() {
        console.log("guess function");

        if (userguessInput === randomNum) {
            message.textContent = `You won the game! The number was : ${randomNum}`;
            message.style.color = 'green';
            endGame()
        } else if (attempt === 1) {
            message.textContent = `Game over! The number was : ${randomNum}`;
            message.style.color = 'red';
            endGame()
        } else {
            message.textContent = userguessInput > randomNum ? 'Too high' : 'Too low'
            message.style.color = 'red';
        }
    }

    attemptLeft.textContent = attempt;


})

resetBtn.addEventListener('click', resetForm)

function resetForm() {
    console.log('reset');
    randomNum = Math.floor(Math.random() * 50)
    guessInput.value = '';
    message.textContent = "";
    console.log("messeage - ", message.textContent);
    attempt = 10;
    attemptLeft.textContent = attempt;
    enteredNum.textContent = '';
    guessInput.disabled = false;
    submitBtn.disabled = false;
}

function endGame() {
    guessInput.disabled = true;
    submitBtn.disabled = true;
}
