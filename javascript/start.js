const button = document.querySelector(".start-button");
const content = document.querySelector(".content");
const background = document.querySelector(".background");

button.addEventListener("click", () => {
    content.classList.add("fade-out", "disabled");
    background.classList.add("unblur");
}); 