const button = document.querySelector('.rules');
const background = document.querySelector('.background');
const back = document.querySelector('.backRules');

button.addEventListener("click", () => {
    background.classList.remove('backgroundClass'),
        background.classList.add('rulesBackground')
});
back.addEventListener("click", ()=>{
    background.classList.remove('rulesBackground'),
    background.classList.add('backgroundClass')
});