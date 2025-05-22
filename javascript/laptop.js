const guess = document.querySelector('#codeLaptop');
import { background } from "./main.js";
import { Check } from "./class.js";

let laptop;
const inputLaptop = document.querySelector("#codeLaptop");

guess.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {

        let input = guess.value;
        laptop = new Check("ILoveBart", input);

        laptop.guessCode();

        background.classList.remove('backgroundClass');

        if (laptop.isUnlocked()) {
            background.classList.add('laptopBackground');
            background.classList.remove('lockedLaptopBackground');
            inputLaptop.classList.add("invisible");
        } else {
            background.classList.add('lockedLaptopBackground');
        }
        guess.value = '';
    }
});

export function laptopIsUnlocked() {
    return laptop ? laptop.isUnlocked() : false;
}