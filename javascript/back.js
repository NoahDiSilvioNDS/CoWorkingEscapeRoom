import { background } from "./main.js";

//back to class from the locker
const backLocker = document.querySelector('.backLocker img');

backLocker.addEventListener("click", () => {
    background.classList.remove('lockerBackground'),
        background.classList.remove('lockedLockerBackground'),
        background.classList.add('backgroundClass'),
        backLocker.classList.add("invisible");
});

//back to class from the bag
const backBag = document.querySelector('.backBag img');
const rules = document.querySelector(".rules img");
backBag.addEventListener("click", () => {
    background.classList.remove('bagBackground'),
    background.classList.remove('lockedBagBackground'),
    background.classList.add('backgroundClass'),
    backBag.classList.add("invisible");
    rules.classList.add("invisible");
});
//back to class from the rules
const backRules = document.querySelector('.backRules img');
backRules.addEventListener("click", () => {
    background.classList.remove('rulesBackground'),
    background.classList.add('bagBackground'),
    backRules.classList.add("invisible");
    rules.classList.remove("invisible");
    backBag.classList.remove("invisible");
});
//back to class from the laptop
const backLaptop = document.querySelector('.backLaptop img');

backLaptop.addEventListener("click", () => {
    background.classList.remove('laptopBackground'),
        background.classList.remove('lockedLaptopBackground'),
        background.classList.add('backgroundClass'),
        backLaptop.classList.add("invisible");
});