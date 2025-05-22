const guess = document.querySelector('#codeBeamer');
import { background, Locker, Bag, Door, Laptop } from "./main.js";
import { Check } from "./class.js";

let beamer;
const inputBeamer = document.querySelector("#codeBeamer");
const backBeamer = document.querySelector(".backBeamer img");
guess.addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {

        let input = parseInt(guess.value);
        beamer = new Check(404, input);

        beamer.guessCode();

        background.classList.remove('backgroundClass')

        if (beamer.isUnlocked()) {
            background.classList.add("backgroundClassRebus");
            background.classList.remove("lockedBeamerBackground");
            backBeamer.classList.add("invisible");
            inputBeamer.classList.add("invisible");
            Locker.classList.remove("invisible");
            Bag.classList.remove("invisible");
            Laptop.classList.remove("invisible");
            Door.classList.remove("invisible");
            Beamer.classList.remove("invisible");
            console.log("WOOP WOOP");
        } else {
            background.classList.add('lockedBeamerBackground');
        }
        guess.value = '';
    }
});

export function beamerIsUnlocked() {
    return beamer ? beamer.isUnlocked() : false;
}