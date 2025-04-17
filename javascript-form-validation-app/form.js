
document.addEventListener("DOMContentLoaded", () => {
    let form = document.forms.userdetailsForm;

    const patterns = {
        name: /^[a-zA-Z0-9\s]{2,}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/
    };

    const errormsg = {
        name: 'Please enter your name min 2 char',
        email: 'Please enter valid email',
        password: 'Password must be at least 6 characters with 1 uppercase, 1 lowercase, 1 number, and 1 special character'
    }

    function validateformField(name, value) {
        // console.log("validateform field");

        let inputnameField = document.querySelector(`[name="${name}"]`)
        //prevent error if null or uindefined
        if (!inputnameField) return false;

        let errorElement = inputnameField.closest('.form-group')?.querySelector('.error-msg')
        let isformValid = patterns[name].test(value.trim())

        inputnameField.classList.toggle('error-border', !isformValid);
        inputnameField.classList.toggle('success-border', isformValid);
        errorElement.textContent = isformValid ? '' : value ? errormsg[name] : 'This field is required'

        return isformValid;
    }


    form.addEventListener('input', (e) => {
        // console.log("input event - ", e.target.name);
        if (e.target.name) {
            validateformField(e.target.name, e.target.value)
        }
    })

    // form.addEventListener('blur', (e) => {
    //     console.log("blur event", e);
    // }, true)

    function clearBorder() {
        let allInput = form.querySelectorAll('input')
        allInput.forEach(inputfield => {
            inputfield.classList.remove('error-border', 'success-border')
        })
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isformValid = true;

        let formData = new FormData(form)
        for (let [name, value] of formData.entries()) {
            isformValid = validateformField(name, value) && isformValid
        }

        isformValid
            ? (alert("form submitted successfully"), clearBorder(), form.reset(), console.log(Object.fromEntries(formData.entries())))
            : (console.log("form submitted failed"))

    })

})
