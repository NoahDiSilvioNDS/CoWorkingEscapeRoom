const button = document.querySelector('.rules');
const background = document.querySelector('.background');

button.addEventListener("click", () => {
    background.classList.remove('bagBackground'),
    background.classList.add('rulesBackground')
});