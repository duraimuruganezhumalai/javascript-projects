let form = document.forms.bmicalculator;
let bmiError = document.querySelector('.bmi-error')
let bmiValue = document.querySelector('.bmi-value')
let bmiMessage = document.querySelector('.bmi-message')
let bmiweight = document.querySelector('.bmiweight')
let bmiheight = document.querySelector('.bmiheight')
let weightUserinput = document.querySelector('.weight-userinput')
let heightUserinput = document.querySelector('.height-userinput')


form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(form);
    // console.log([...formData.entries()]);

    let getbmiinputValue = Object.fromEntries(formData.entries())
    console.log(getbmiinputValue);
    // console.log(`getbmiinputValues ${JSON.stringify(getbmiinputValue)}`)

    let weight = parseInt(getbmiinputValue.bmiweightfield, 10);
    let height = parseInt(getbmiinputValue.bmiheightfield, 10);

    errorMsg = (!weight || isNaN(weight) || weight < 0) ? 'Please Enter your weight' : (!height || isNaN(height) || height < 0) ? 'Please Enter your height' : '';

    bmiError.textContent = errorMsg;

    // Formula 
    // weight / height(m)2

    let bmiCalculation = '';
    let category = '';

    if (!errorMsg) {
        // bmiweight.value = '';
        // bmiheight.value = '';
        bmiCalculation = (weight / ((height / 100) ** 2)).toFixed(2);
        category = (bmiCalculation < 18.5) ? `You are <span class="underweight">Underweight</span>`
            : (bmiCalculation < 25) ? 'You are <span class="normal">Normal</span>'
                : (bmiCalculation < 30) ? 'You are <span class="overweight">Overweight</span>' : 'You are <span class="obese">Obese</span>';

    } else if (errorMsg) {
        bmiValue.textContent = '';
        bmiMessage.textContent = '';

    }

    bmiValue.textContent = bmiCalculation;
    bmiMessage.innerHTML = category;
    // console.log(bmiCalculation);


})