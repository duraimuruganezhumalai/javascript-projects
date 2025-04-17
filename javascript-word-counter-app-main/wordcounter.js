let form = document.forms.wordcounterForm;
let wordCounter = document.querySelector('.word-counter');
let errorMsg = document.querySelector('.error-msg');
let submitBtn = document.querySelector('.submit-Btn');
let charCountResult = document.querySelector('.char-count');
let wordCountResult = document.querySelector('.word-count');
let userenteredText = document.querySelector('.user-entered-text');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(form)
    let getinputVal = formData.get('wordcounter').trim()
    // console.log("getinputVal", getinputVal);

    const charCount = () => {
        charCountResult.textContent = getinputVal.replace(/\s+/g, "").length;
    }

    const wordCount = () => {
        let wordcountResult = getinputVal.split(/\s+/).length;
        wordCountResult.textContent = wordcountResult;
    }

    const userinputValue = () => {
        userenteredText.textContent = getinputVal;
    }

    !getinputVal
        ? (errorMsg.textContent = 'This field is cannot be empty')
        : (errorMsg.textContent = '', charCount(), wordCount(), userinputValue(), form.reset())
})