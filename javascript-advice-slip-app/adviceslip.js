const appendAdviceSlip = document.querySelector(".advice-slip-text");
const adviceSlipBtn = document.querySelector(".advice-slip-btn");
const loader = document.querySelector("#overlay");


const getAdviceSlipData = async () => {

    try {
        loader.style.display = "block"
        appendAdviceSlip.textContent = " ";

        // const res = await fetch('https://api.adviceslip.com/advice')
        const res = await fetch(`https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`);
        const data = await res.json();

        loader.style.display = "none"
        console.log(data);
        appendAdviceSlip.textContent = `${data.slip.advice}`

    } catch (error) {
        loader.style.display = "none"
        appendAdviceSlip.textContent = `Advice slip is not found ${error}`
    }
}

//button click event
adviceSlipBtn.addEventListener('click', getAdviceSlipData)

//initial loading function
getAdviceSlipData();
