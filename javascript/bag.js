const guess = document.querySelector('#codeBag');

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
        console.log(guess.value.toLowerCase());
    }
});

export function bagIsUnlocked(){
    return bag.isUnlocked();
}