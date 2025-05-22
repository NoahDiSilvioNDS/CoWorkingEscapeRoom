import { background, Locker, Bag, Laptop, Door, Beamer } from "./main.js";

//back to class from the locker
import { inputLocker } from "./main.js";
const backLocker = document.querySelector('.backLocker img');

backLocker.addEventListener("click", () => {
    background.classList.remove('lockerBackground');
    background.classList.remove('lockedLockerBackground');
    background.classList.add('backgroundClass');
    backLocker.classList.add("invisible");
    inputLocker.classList.add("invisible");
    Locker.classList.remove("invisible");
    Bag.classList.remove("invisible");
    Laptop.classList.remove("invisible");
    Door.classList.remove("invisible");
    Beamer.classList.remove("invisible");
});

//back to class from the bag
import { inputBag } from "./main.js";
const backBag = document.querySelector('.backBag img');
const rules = document.querySelector(".rules img");

backBag.addEventListener("click", () => {
    background.classList.remove('bagBackground');
    background.classList.remove('lockedBagBackground');
    background.classList.add('backgroundClass');
    backBag.classList.add("invisible");
    rules.classList.add("invisible");
    inputBag.classList.add("invisible");
    Locker.classList.remove("invisible");
    Bag.classList.remove("invisible");
    Laptop.classList.remove("invisible");
    Door.classList.remove("invisible");
    Beamer.classList.remove("invisible");
});
//back to bag from the rules
const backRules = document.querySelector('.backRules img');
backRules.addEventListener("click", () => {
    background.classList.remove('rulesBackground');
    background.classList.add('bagBackground');
    backRules.classList.add("invisible");
    rules.classList.remove("invisible");
    backBag.classList.remove("invisible");
});
//back to class from the laptop
import { inputLaptop } from "./main.js";
const backLaptop = document.querySelector('.backLaptop img');

backLaptop.addEventListener("click", () => {
    background.classList.remove('laptopBackground');
    background.classList.remove('lockedLaptopBackground');
    background.classList.add('backgroundClass');
    backLaptop.classList.add("invisible");
    inputLaptop.classList.add("invisible");
    Locker.classList.remove("invisible");
    Bag.classList.remove("invisible");
    Laptop.classList.remove("invisible");
    Door.classList.remove("invisible");
    Beamer.classList.remove("invisible");
});
//back to class from door
import { inputDoor } from "./main.js";
const backDoor = document.querySelector(".backDoor img");

backDoor.addEventListener("click", () => {
    background.classList.remove("lockedDoorBackground");
    background.classList.add("backgroundClass");
    backDoor.classList.add("invisible");
    inputDoor.classList.add("invisible");
    Locker.classList.remove("invisible");
    Bag.classList.remove("invisible");
    Laptop.classList.remove("invisible");
    Door.classList.remove("invisible");
    Beamer.classList.remove("invisible");
});
//back to class from beamer
import { inputBeamer } from "./main.js";
import { beamerIsUnlocked } from "./beamer.js";
const backBeamer = document.querySelector(".backBeamer img");
const beamer = document.querySelector(".beamer");
backBeamer.addEventListener("click", ()=>{
    background.classList.remove("lockedBeamerBackground");
    backBeamer.classList.add("invisible");
    inputBeamer.classList.add("invisible");
    Locker.classList.remove("invisible");
    Bag.classList.remove("invisible");
    Laptop.classList.remove("invisible");
    Door.classList.remove("invisible");
    Beamer.classList.remove("invisible");
    if(beamerIsUnlocked()){
        background.classList.add("backgroundClassRebus");
        beamer.classList.add("invisible");
    }else{
        background.classList.add("backgroundClass");
    }
})