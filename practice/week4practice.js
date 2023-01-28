const button = document.querySelector('.btn');

function show() {
    button.classList.toggle('newstyle');
}

button.addEventListener('click', show);


//Hamburger Button JS

const mainnav = document.querySelector('.navigation');
const hambuton = document.querySelector('.ham');

hambuton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
})