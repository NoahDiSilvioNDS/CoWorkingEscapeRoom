const button = document.querySelector(".start-button");
const content = document.querySelector(".content");
export const background = document.querySelector(".background");

export const Locker = document.querySelector(".locker img");
export const Bag = document.querySelector(".bag img");
export const Laptop = document.querySelector(".laptop img");

import { startTimer } from './timer.js';
button.addEventListener("click", () => {
    content.classList.add("fade-out", "disabled");
    background.classList.add("unblur");
    Locker.classList.remove("invisible");
    Bag.classList.remove("invisible");
    Laptop.classList.remove("invisible");
    setTimeout(startTimer, 1000);
});

//functions
//locker
const buttonLocker = document.querySelector('.locker');
const inputLocker = document.querySelector("#codeLocker");
const backLocker = document.querySelector(".backLocker img");
import { lockerIsUnlocked } from './locker.js';

buttonLocker.addEventListener("click", () => {

    background.classList.remove('backgroundClass');
    Locker.classList.add("invisible");
    Bag.classList.add("invisible");
    Laptop.classList.add("invisible");
    inputLocker.classList.remove("invisible");
    backLocker.classList.remove("invisible");

    if (lockerIsUnlocked()) {
        background.classList.add('lockerBackground');
        inputLocker.classList.add("invisible");
    } else {
        background.classList.add('lockedLockerBackground');
    }
});

backLocker.addEventListener("click", () => {
    Locker.classList.remove("invisible");
    Bag.classList.remove("invisible");
    Laptop.classList.remove("invisible");
    inputLocker.classList.add("invisible");
    backLocker.classList.add("invisible");
});

//bag
import { bagIsUnlocked } from './bag.js';

const buttonBag = document.querySelector('.bag');
const inputBag = document.querySelector("#codeBag");
const backBag = document.querySelector(".backBag img");
const buttonRules = document.querySelector(".rules img");

buttonBag.addEventListener("click", () => {

    background.classList.remove('backgroundClass');
    Locker.classList.add("invisible");
    Bag.classList.add("invisible");
    Laptop.classList.add("invisible");
    inputBag.classList.remove("invisible");
    backBag.classList.remove("invisible");
    if (bagIsUnlocked()) {
        background.classList.add('bagBackground');
        buttonRules.classList.remove("invisible");
        inputBag.classList.add("invisible");
    } else {
        background.classList.add('lockedBagBackground')
    }
});

backBag.addEventListener("click", ()=>{
    Locker.classList.remove("invisible");
    Bag.classList.remove("invisible");
    Laptop.classList.remove("invisible");
    inputBag.classList.add("invisible");
    backBag.classList.add("invisible");
});
//laptop
import { laptopIsUnlocked } from './laptop.js';

const buttonLaptop = document.querySelector('.laptop');
const inputLaptop = document.querySelector("#codeLaptop");
const backLaptop = document.querySelector(".backLaptop img");

buttonLaptop.addEventListener("click", () => {
    background.classList.remove('backgroundClass');

    Locker.classList.add("invisible");
    Bag.classList.add("invisible");
    Laptop.classList.add("invisible");
    inputLaptop.classList.remove("invisible");
    backLaptop.classList.remove("invisible");

    if (laptopIsUnlocked()) {
        background.classList.add('laptopBackground');
        inputLaptop.classList.add("invisible");
    } else {
        background.classList.add('lockedLaptopBackground')
    }
});

backLaptop.addEventListener("click", ()=>{
    Locker.classList.remove("invisible");
    Bag.classList.remove("invisible");
    Laptop.classList.remove("invisible");
    inputLaptop.classList.add("invisible");
    backLaptop.classList.add("invisible");
});