const guess = document.querySelector('#codeLaptop');
const background = document.querySelector(".background");

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
        background.classList.remove('backgroundClass')
        if (laptop.isUnlocked()) {
            background.classList.add('laptopBackground'),
            background.classList.remove('lockedLaptopBackground')
        }else {
            background.classList.add('lockedLaptopBackground')
        }
    }
});

export function laptopIsUnlocked(){
    return laptop.isUnlocked();
}