const timerLabel = document.querySelector(".timer-label");
const timerProgress = document.querySelector(".timer-progress");

const totalTime = 20 * 60; // 20 minuten in seconden
let timePassed = 0;
let timerInterval;

import { background, Locker, Bag, Laptop } from "./main.js";

export const startTimer = () => {
    timerInterval = setInterval(() => {
        timePassed++;
        const timeLeft = totalTime - timePassed;

        const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const seconds = (timeLeft % 60).toString().padStart(2, '0');
        timerLabel.textContent = `${minutes}:${seconds}`;

        const progress = 440 - (440 * timePassed) / totalTime;
        timerProgress.style.strokeDashoffset = progress;

        if (timePassed >= totalTime) {
            clearInterval(timerInterval);
            background.classList.add("DAVYREN");
            Locker.classList.add("invisible");
            Bag.classList.add("invisible");
            Laptop.classList.add("invisible");
        }
    }, 1000);
};