const guess = document.querySelector('#codeDoor');
import { background } from "./main.js";
import { Check } from "./class.js";
import { saveScore, renderScores } from "./scoreboard.js";
import { timeLeftAtEnd } from "./timer.js";

let door;
const inputDoor = document.querySelector("#codeDoor");
const backDoor = document.querySelector(".backDoor img");
guess.addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {

        let input = parseInt(guess.value);
        door = new Check(1379, input);

        door.guessCode();

        background.classList.remove('backgroundClass')

        if (door.isUnlocked()) {
            background.classList.add('doorBackground');
            background.classList.remove('lockedDoorBackground');
            inputDoor.classList.add("invisible");
            backDoor.classList.add("invisible");

            const name = document.querySelector('#playerName')?.value || 'Onbekend';
            const score = timeLeftAtEnd;
            if (score > 0) {
                saveScore(name, score);
                renderScores();
            }
        } else {
            background.classList.add('lockedDoorBackground');
        }
        guess.value = '';
    }
});

export function doorIsUnlocked() {
    return door ? door.isUnlocked() : false;
}