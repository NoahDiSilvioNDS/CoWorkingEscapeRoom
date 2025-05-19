const button = document.querySelector('.bag');
const background = document.querySelector('.background');
const back = document.querySelector('.backBag');

button.addEventListener("click", () => {
    background.classList.remove('backgroundClass'),
        background.classList.add('bagBackground')
});
back.addEventListener("click", ()=>{
    background.classList.remove('bagBackground'),
    background.classList.add('backgroundClass')
});