var tens = 00;
var seconds = 00;
var minutes = 00;
const buttonStart = document.querySelector('.btn-start');
const buttonStop = document.querySelector('.btn-stop');
const buttonReset = document.querySelector('.btn-reset');
const appendTens = document.querySelector('.tens');
const appendSeconds = document.querySelector('.seconds');
const appendMinutes = document.querySelector('.minutes');
let Interval;


buttonStart.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
});

buttonStop.addEventListener('click', () => {
    clearInterval(Interval);
});
buttonReset.addEventListener('click', () => {
    clearInterval(Interval);
    tens = 00;
    seconds = 00;
    minutes = 00;
    appendTens.innerHTML = "0" + tens;
    appendSeconds.innerHTML = "0" + seconds;
    appendMinutes.innerHTML = "0" + minutes;
});

function startTimer() {
    tens++;
    if (tens <= 9) {
        appendTens.innerHTML = '0' + tens;
    }
    if (tens > 9) {
        appendTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++
        tens = 00;
        appendTens.innerHTML = '0' + 0;
        appendSeconds.innerHTML = '0' + seconds;
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
        minutes++;
        seconds = 0;
        appendSeconds.innerHTML = '0' + seconds;
        appendMinutes.innerHTML = `0` + minutes;
    }
    if (minutes > 9) {
        appendMinutes.innerHTML = minutes;
    }
    if (minutes > 59) {
        minutes = 60;
        seconds = 00;
        tens = 00;
        appendTens.innerHTML = "00";
        appendSeconds.innerHTML = "00";
        appendMinutes.innerHTML = "60";
    }
}