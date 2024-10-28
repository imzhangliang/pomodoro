import CountDownClock from './CountDownClock.js';
import { showNotification } from './Notification.js';

let settings = {
    workMinutes: 25,
    breakMinutes: 5,
}

let countDownClock = new CountDownClock(settings.workMinutes);
countDownClock.setTimeoutCallback(showNotification);

const showBoardDom = document.querySelector("#showBoard");
countDownClock.setShowBoardDom((timeText) => {
    showBoardDom.textContent = timeText;
    document.title = timeText;
});

const workBtn = document.querySelector("#workBtn");
const breakBtn = document.querySelector("#breakBtn");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const testBtn = document.querySelector("#testBtn");
const workMinutesInput = document.querySelector("#workMinutes");
const breakMinutesInput = document.querySelector("#breakMinutes");

testBtn.addEventListener("click", function() {
    showNotification("absdfd");
});

workMinutesInput.value = settings.workMinutes;
breakMinutesInput.value = settings.breakMinutes;

workBtn.addEventListener("click", function() {
    countDownClock.reset(settings.workMinutes);
});

breakBtn.addEventListener("click", function() {
    countDownClock.reset(settings.breakMinutes);
});

startBtn.addEventListener("click", function() {
    countDownClock.start();
});

stopBtn.addEventListener("click", function() {
    countDownClock.stop();
});

workMinutesInput.addEventListener("input", function() {
    console.log(workMinutesInput.value);
    let value = parseInt(workMinutesInput.value);
    if (value) {
        settings.workMinutes = value;
    }
});

breakMinutesInput.addEventListener("input", function() {
    console.log(breakMinutesInput.value);
    let value = parseInt(breakMinutesInput.value);
    if (value) {
        settings.breakMinutes = value;
    }
});


