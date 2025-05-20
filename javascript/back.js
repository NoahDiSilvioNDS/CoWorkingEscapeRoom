const background = document.querySelector('.background');

//back to class from the locker
const backLocker = document.querySelector('.backLocker');

backLocker.addEventListener("click", () => {
    background.classList.remove('lockerBackground'),
        background.classList.remove('lockedLockerBackground'),
        background.classList.add('backgroundClass')
});

//back to class from the bag
const backBag = document.querySelector('.backBag');

backBag.addEventListener("click", () => {
    background.classList.remove('bagBackground'),
        background.classList.remove('lockedBagBackground'),
        background.classList.add('backgroundClass')
});
//back to class from the rules
const backRules = document.querySelector('.backRules');

backRules.addEventListener("click", () => {
    background.classList.remove('rulesBackground'),
        background.classList.add('backgroundClass')
});
//back to class from the laptop
const backLaptop = document.querySelector('.backLaptop');

backLaptop.addEventListener("click", () => {
    background.classList.remove('laptopBackground'),
        background.classList.remove('lockedLaptopBackground'),
        background.classList.add('backgroundClass')
});