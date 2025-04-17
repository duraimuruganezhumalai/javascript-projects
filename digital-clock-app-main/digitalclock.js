let digitalclockDisplay = document.querySelector('.clock')

function digitalClock() {
    let now = new Date();
    // console.log(now);

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let setamorpm = 'AM'

    if (hours > 12) {
        hours = hours - 12;
        setamorpm = 'PM'
    } else if (hours == 0) {
        hours = 12;
        setamorpm = 'PM'
    }

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    // console.log(`${hours} ${minutes} ${seconds} ${setamorpm}`);
    digitalclockDisplay.textContent = `${hours} : ${minutes} : ${seconds} ${setamorpm}`

}

digitalClock();
setInterval(digitalClock, 1000)