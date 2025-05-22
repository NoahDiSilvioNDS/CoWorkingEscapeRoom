const guess = document.querySelector('#codeBeamer');
import { background } from "./main.js";
import { Check } from "./class.js";

let beamer;
const inputLocker = document.querySelector("#codeBeamer");

guess.addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {

        let input = parseInt(guess.value);
        beamer = new Check(5173, input);

        beamer.guessCode();

        background.classList.remove('backgroundClass')

        if (beamer.isUnlocked()) {
            inputLocker.classList.add("invisible");
        } else {
            background.classList.add('lockedBeamerBackground');
        }
        guess.value = '';
    }
});

export function beamerIsUnlocked() {
    return beamer ? beamer.isUnlocked() : false;
}