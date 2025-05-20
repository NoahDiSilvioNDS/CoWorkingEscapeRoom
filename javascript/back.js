const background = document.querySelector('.background');

//back to class from the locker
const backLocker = document.querySelector('.backLocker');

backLocker.addEventListener("click", () => {
    background.classList.remove('lockerBackground'),
        background.classList.add('backgroundClass')
});

//back to class from the bag
const backBag = document.querySelector('.backBag');

backBag.addEventListener("click", ()=>{
    background.classList.remove('bagBackground'),
    background.classList.add('backgroundClass')
});
//back to class from the rules
const back = document.querySelector('.backRules');

back.addEventListener("click", ()=>{
    background.classList.remove('rulesBackground'),
    background.classList.add('backgroundClass')
});