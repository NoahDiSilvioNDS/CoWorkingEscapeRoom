const button = document.querySelector('.locker');
const background = document.querySelector('.background');
const back = document.querySelector('.backLocker');

button.addEventListener("click", () => {
    background.classList.remove('backgroundClass'),
        background.classList.add('lockerBackground')
});
back.addEventListener("click", ()=>{
    background.classList.remove('lockerBackground'),
    background.classList.add('backgroundClass')
});