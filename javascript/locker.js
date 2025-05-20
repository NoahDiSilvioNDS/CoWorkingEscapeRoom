const guess = document.querySelector('#codeLocker');

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
    }
});

export function lockerIsUnlocked() {
    return locker.isUnlocked();
}