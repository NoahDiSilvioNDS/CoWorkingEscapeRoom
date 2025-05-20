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
const buttonLocker = document.querySelector('.locker');

import { isUnlocked } from './locker.js';

buttonLocker.addEventListener("click", () => {
    if (isUnlocked()) {
        background.classList.remove('backgroundClass'),
        background.classList.add('lockerBackground')
    }else{
        
    }
});