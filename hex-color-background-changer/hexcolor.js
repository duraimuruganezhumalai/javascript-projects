const hexcodeBtn = document.querySelector('.hexcode-btn')
const hexcodeValue = document.querySelector('.hexcode-value')


document.addEventListener('DOMContentLoaded', () => {

    const generateHexCode = () => {
        const hexCodeVal = Math.random() * 16777216 //256*256*256 -> 16777216
        const hexCodeValRoundof = Math.floor(hexCodeVal)
        const convertToHexadecimal = hexCodeValRoundof.toString(16)
        const fillNumberzero = `#${convertToHexadecimal.padStart(6, '0')}`
        // console.log('Generate random number -', hexCodeVal);
        // console.log('Round down -', hexCodeValRoundof);
        // console.log('convert decimal to hexadecimal -', convertToHexadecimal);
        // console.log('fill Number zero if value is below 6 digit add before 0 using padStart -', fillNumberzero);
        return fillNumberzero;
    }

    hexcodeBtn.addEventListener('click', () => {
        // console.log('button clicked');
        const gethexcodeValue = generateHexCode();
        document.body.style.cssText = `background-color:${gethexcodeValue}`;
        hexcodeValue.textContent = gethexcodeValue;
        hexcodeValue.style.cssText = `color:${gethexcodeValue}`
    });
})