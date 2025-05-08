const texttoSpeechForm = document.forms.texttoSpeech;
const errorMsg = document.querySelector('.error-msg');

const synthObj = window.speechSynthesis;

texttoSpeechForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const getformData = new FormData(texttoSpeechForm)
    console.log(getformData);

    const getformInput = getformData.get('speechInput').trim();
    console.log(getformInput);

    getformInput === ''
        ? errorMsg.textContent = "Please enter your text here"
        : (errorMsg.textContent = '', synthObj.speak(new SpeechSynthesisUtterance(getformInput)))

    texttoSpeechForm.reset();
    //reset form data after submit

})