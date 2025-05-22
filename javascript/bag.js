const guess = document.querySelector('#codeBag');
import { background } from "./main.js";
import { Check } from "./class.js";

let bag;
const inputBag = document.querySelector("#codeBag");
const buttonRules = document.querySelector(".rules img");

guess.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {

        let input = guess.value.toLowerCase();
        bag = new Check("flamingo", input);

        bag.guessCode();

        background.classList.remove('backgroundClass')
        if (bag.isUnlocked()) {
            background.classList.add('bagBackground');
            background.classList.remove('lockedBagBackground');
            inputBag.classList.add("invisible");
            buttonRules.classList.remove("invisible");
        } else {
            background.classList.add('lockedBagBackground');
        }
        guess.value = '';
    }
});

export function bagIsUnlocked() {
    return bag ? bag.isUnlocked() : false;
}