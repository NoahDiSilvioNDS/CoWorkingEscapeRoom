const button = document.querySelector('.rules');
const inputBag = document.querySelector("#codeBag");
const backBag = document.querySelector(".backBag img");
const buttonRules = document.querySelector(".rules img");
const backRules = document.querySelector(".backRules img");
import { background } from "./main.js";

button.addEventListener("click", () => {
    background.classList.remove('bagBackground'),
    background.classList.add('rulesBackground'),
    inputBag.classList.add("invisible"),
    backBag.classList.add("invisible"),
    buttonRules.classList.add("invisible"),
    backRules.classList.remove("invisible")
});