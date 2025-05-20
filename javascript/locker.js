const guess = document.querySelector('#codeLocker');
const background = document.querySelector(".background");

class Locker {
    #codeLocker = 5173;
    #gotCode = false;
    constructor() {
        this.#codeLocker = this.#codeLocker;
    }
    guessCode(x) {
        if (this.#codeLocker === x) {
            this.#gotCode = true
        } else {
            guess.value = '';
            return
        }
    }
    isUnlocked() {
        return this.#gotCode;
    }
}

const locker = new Locker();
guess.addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {
        const input = parseInt(guess.value);
        locker.guessCode(input);

        background.classList.remove('backgroundClass')
        if (locker.isUnlocked()) {
            background.classList.add('lockerBackground')
        }else {
            background.classList.add('lockedLockerBackground')
        }
    }
});

export function lockerIsUnlocked() {
    return locker.isUnlocked();
}