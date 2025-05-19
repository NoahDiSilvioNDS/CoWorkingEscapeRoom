const button = document.querySelector(".start-button");
const content = document.querySelector(".content");
const background = document.querySelector(".background");

button.addEventListener("click", () => {
    content.classList.add("fade-out");
    background.classList.add("unblur");
});