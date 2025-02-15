let timerDisplay = document.querySelector(".timer-display");
let startBtn = document.getElementById("startTimer");
let pauseBtn = document.getElementById("pauseTimer");
let resetBtn = document.getElementById("resetTimer");
let restartBtn = document.getElementById("restartTimer");
let lapBtn = document.getElementById("lap");
let resetLapBtn = document.getElementById("resetLap");
let lapsContainer = document.querySelector(".laps");

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timer = null;
let running = false;

function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;
    timerDisplay.innerText = `${h} : ${m} : ${s} : ${ms}`;
}

startBtn.innerText = "Start";
startBtn.addEventListener("click", () => {
    if (!running) {
        timer = setInterval(runTimer, 10);
        running = true;
    }
});

pauseBtn.innerText = "Pause";
pauseBtn.addEventListener("click", () => {
    clearInterval(timer);
    running = false;
});

resetBtn.innerText = "Reset";
resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    updateDisplay();
    running = false;
});

restartBtn.innerText = "Restart";
restartBtn.addEventListener("click", () => {
    clearInterval(timer);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    updateDisplay();
    timer = setInterval(runTimer, 10);
    running = true;
});

lapBtn.innerText = "Lap";
lapBtn.addEventListener("click", () => {
    if (running) {
        let lapTime = document.createElement("li");
        lapTime.innerText = timerDisplay.innerText;
        lapsContainer.appendChild(lapTime);
    }
});

resetLapBtn.innerText = "Reset Laps";
resetLapBtn.addEventListener("click", () => {
    lapsContainer.innerHTML = "";
});

function runTimer() {
    milliseconds += 1;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds += 1;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes += 1;
    }
    if (minutes === 60) {
        minutes = 0;
        hours += 1;
    }
    updateDisplay();
}
