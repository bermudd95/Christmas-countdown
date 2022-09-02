const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const christmasDay = "25 Dec 2022";

function countdown() {
const christmasDate = new Date(christmasDay);
const currentDate = new Date();

const totalSeconds = (christmasDate - currentDate) / 1000;

const days = Math.floor(totalSeconds / 3600 /24);
const hours = Math.floor(totalSeconds / 3600) % 24 
const mins = Math.floor(totalSeconds / 60) % 60
const seconds = Math.floor(totalSeconds) % 60



daysEl.innerHTML = days;
hoursEl.innerHTML = hours;
minsEl.innerHTML = mins;
secondsEl.innerHTML = seconds;
}


countdown();

setInterval(countdown, 1000)