export class Check {
    #gotCode = false;
    constructor(answer, input) {
        this.answer = answer;
        this.input = input;
    }
    guessCode() {
        if (this.answer === this.input) {
            this.#gotCode = true
        } else {
            return
        }
    }
    isUnlocked() {
        return this.#gotCode;
    }
}