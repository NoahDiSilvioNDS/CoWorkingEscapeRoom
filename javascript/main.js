const button = document.querySelector(".start-button");
const content = document.querySelector(".content");
const background = document.querySelector(".background");

import { startTimer } from './timer.js';
button.addEventListener("click", () => {
    content.classList.add("fade-out", "disabled");
    background.classList.add("unblur");

    setTimeout(startTimer, 1000);
});

//functions
//locker
const buttonLocker = document.querySelector('.locker');

import { lockerIsUnlocked } from './locker.js';

buttonLocker.addEventListener("click", () => {
    background.classList.remove('backgroundClass')
    if (lockerIsUnlocked()) {
        background.classList.add('lockerBackground')
    } else {
        background.classList.add('lockedLockerBackground')
    }
});

//bag
import { bagIsUnlocked } from './bag.js';

const buttonBag = document.querySelector('.bag');

buttonBag.addEventListener("click", () => {
    background.classList.remove('backgroundClass')
    if (bagIsUnlocked()) {
        background.classList.add('bagBackground')
    } else {
        background.classList.add('lockedBagBackground')
    }
});
//laptop
import { laptopIsUnlocked } from './laptop.js';

const buttonLaptop = document.querySelector('.laptop');

buttonLaptop.addEventListener("click", () => {
    background.classList.remove('backgroundClass')
    if (laptopIsUnlocked()) {
        background.classList.add('laptopBackground')
    } else {
        background.classList.add('lockedLaptopBackground')
    }
});