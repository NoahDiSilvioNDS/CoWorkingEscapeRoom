const guess = document.querySelector('#codeLocker');
import { background } from "./main.js";
import { Check } from "./class.js";

let locker;
const inputLocker = document.querySelector("#codeLocker");

guess.addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {

        let input = parseInt(guess.value);
        locker = new Check(5173, input);

        locker.guessCode();

        background.classList.remove('backgroundClass')

        if (locker.isUnlocked()) {
            background.classList.add('lockerBackground');
            background.classList.remove('lockedLockerBackground');
            inputLocker.classList.add("invisible");
        } else {
            background.classList.add('lockedLockerBackground');
        }
        guess.value = '';
    }
});

export function lockerIsUnlocked() {
    return locker ? locker.isUnlocked() : false;
}