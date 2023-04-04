const mainnav = document.querySelector('.navigation');
const hambuton = document.querySelector('.ham');

hambuton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
})


const date = new Date();
const year = date.getFullYear();
const modifiedDate = document.lastModified;

document.querySelector('.modified').textContent = `Last Modified: ${modifiedDate}`