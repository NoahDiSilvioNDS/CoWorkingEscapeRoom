const guess = document.querySelector('#codeLaptop');
const background = document.querySelector(".background");
import { Check } from "./class.js";

let laptop;

guess.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {

        let input = guess.value;
        laptop = new Check("ILoveBart", input);

        laptop.guessCode();

        background.classList.remove('backgroundClass');

        if (laptop.isUnlocked()) {
            background.classList.add('laptopBackground');
            background.classList.remove('lockedLaptopBackground');
        } else {
            background.classList.add('lockedLaptopBackground');
        }
        guess.value = '';
    }
});

export function laptopIsUnlocked() {
    return laptop ? laptop.isUnlocked() : false;
}