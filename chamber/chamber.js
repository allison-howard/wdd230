//Hamburger Button JS

const mainnav = document.querySelector('.navigation');
const hambuton = document.querySelector('.ham');

hambuton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
})

let date = new Date();
let year = date.getFullYear();

let currentdate = document.lastModified;

document.querySelector('.updated').textContent = currentdate;