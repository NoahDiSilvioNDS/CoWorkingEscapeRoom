const button = document.querySelector(".start-button");
const content = document.querySelector(".content");
export const background = document.querySelector(".background");

export const Locker = document.querySelector(".locker img");
export const Bag = document.querySelector(".bag img");
export const Laptop = document.querySelector(".laptop img");
export const Door = document.querySelector(".door img");
export const Beamer = document.querySelector(".beamer img");

import { startTimer } from './timer.js';
button.addEventListener("click", () => {
    content.classList.add("fade-out", "disabled");
    background.classList.add("unblur");
    Locker.classList.remove("invisible");
    Bag.classList.remove("invisible");
    Laptop.classList.remove("invisible");
    Door.classList.remove("invisible");
    Beamer.classList.remove("invisible");
    setTimeout(startTimer, 1000);
});

//functions
//locker
const buttonLocker = document.querySelector('.locker');
export const inputLocker = document.querySelector("#codeLocker");
const backLocker = document.querySelector(".backLocker img");
import { lockerIsUnlocked } from './locker.js';

buttonLocker.addEventListener("click", () => {
    //achtergrond veranderen
    background.classList.remove('backgroundClass');
    //andere buttons onzichtbaar maken
    Locker.classList.add("invisible");
    Bag.classList.add("invisible");
    Laptop.classList.add("invisible");
    Door.classList.add("invisible");
    Beamer.classList.add("invisible");
    //input zichtbaar maken
    inputLocker.classList.remove("invisible");
    //back button zichtbaar maken
    backLocker.classList.remove("invisible");
    //kijken of de code al eens correct is ingevoerd of niet
    if (lockerIsUnlocked()) {
        background.classList.add('lockerBackground');
        inputLocker.classList.add("invisible");
    } else {
        background.classList.add('lockedLockerBackground');
    }
});

//bag
import { bagIsUnlocked } from './bag.js';

const buttonBag = document.querySelector('.bag');
export const inputBag = document.querySelector("#codeBag");
const backBag = document.querySelector(".backBag img");
const buttonRules = document.querySelector(".rules img");

buttonBag.addEventListener("click", () => {

    background.classList.remove('backgroundClass');
    Locker.classList.add("invisible");
    Bag.classList.add("invisible");
    Door.classList.add("invisible");
    Laptop.classList.add("invisible");
    Beamer.classList.add("invisible");
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
//laptop
import { laptopIsUnlocked } from './laptop.js';

const buttonLaptop = document.querySelector('.laptop');
export const inputLaptop = document.querySelector("#codeLaptop");
const backLaptop = document.querySelector(".backLaptop img");

buttonLaptop.addEventListener("click", () => {
    background.classList.remove('backgroundClass');

    Locker.classList.add("invisible");
    Bag.classList.add("invisible");
    Laptop.classList.add("invisible");
    Door.classList.add("invisible");
    Beamer.classList.add("invisible");
    inputLaptop.classList.remove("invisible");
    backLaptop.classList.remove("invisible");

    if (laptopIsUnlocked()) {
        background.classList.add('laptopBackground');
        inputLaptop.classList.add("invisible");
    } else {
        background.classList.add('lockedLaptopBackground')
    }
});
//door
import { doorIsUnlocked } from './door.js';

const buttonDoor = document.querySelector('.door');
export const inputDoor = document.querySelector("#codeDoor");
const backDoor = document.querySelector(".backDoor img");

buttonDoor.addEventListener("click", () => {
    background.classList.remove('backgroundClass');

    Locker.classList.add("invisible");
    Bag.classList.add("invisible");
    Laptop.classList.add("invisible");
    Door.classList.add("invisible");
    Beamer.classList.add("invisible");

    inputDoor.classList.remove("invisible");
    backDoor.classList.remove("invisible");

    if (doorIsUnlocked()) {
        background.classList.add('doorBackground');
        inputDoor.classList.add("invisible");
        backDoor.classList.add("invisible");
    } else {
        background.classList.add('lockedDoorBackground')
    }
});

//beamer
import { beamerIsUnlocked } from './beamer.js';

const buttonBeamer = document.querySelector('.beamer');
export const inputBeamer = document.querySelector("#codeBeamer");
const backBeamer = document.querySelector(".backBeamer img");

buttonBeamer.addEventListener("click", () => {
    if (beamerIsUnlocked()) {
        buttonBeamer.classList.add("invisible");
    } else {
        background.classList.remove('backgroundClass');
        background.classList.add("lockedBeamerBackground");
        Locker.classList.add("invisible");
        Bag.classList.add("invisible");
        Laptop.classList.add("invisible");
        Door.classList.add("invisible");
        Beamer.classList.add("invisible");
        inputBeamer.classList.remove("invisible");
        backBeamer.classList.remove("invisible");
    }
});
