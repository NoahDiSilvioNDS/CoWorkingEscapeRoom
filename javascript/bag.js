const button = document.querySelector('.bag');
const background = document.querySelector('.background');

button.addEventListener("click", () => {
    background.classList.remove('backgroundClass'),
        background.classList.add('bagBackground')
});