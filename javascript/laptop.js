const guess = document.querySelector('#codeLaptop');

class Laptop {
    #codePC = 'ILoveBart';
    #gotCode = false;
    constructor() {
        this.#codePC = this.#codePC;
    }
    guessCode(x) {
        if (this.#codePC === x) {
            this.#gotCode = true
        } else {
            return
        }
    }
    isUnlocked() {
        return this.#gotCode;
    }
}

const laptop = new Laptop();
guess.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        laptop.guessCode(guess.value);
    }
});

export function laptopIsUnlocked(){
    return laptop.isUnlocked();
}