const guess = document.querySelector('#codeBag');
const background = document.querySelector(".background");

class Bag {
    #codeBag = "flamingo";
    #gotCode = false;
    constructor() {
        this.#codeBag = this.#codeBag;
    }
    guessCode(x) {
        if (this.#codeBag === x) {
            this.#gotCode = true
        } else {
            return
        }
    }
    isUnlocked() {
        return this.#gotCode;
    }
}

const bag = new Bag();
guess.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        bag.guessCode(guess.value.toLowerCase());

        background.classList.remove('backgroundClass')
        if (bag.isUnlocked()) {
            background.classList.add('bagBackground'),
            background.classList.remove('lockedBagBackground')
        }else {
            background.classList.add('lockedBagBackground')
        }
    }
});

export function bagIsUnlocked(){
    return bag.isUnlocked();
}