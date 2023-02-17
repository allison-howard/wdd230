const mainnav = document.querySelector('.navigation');
const hambuton = document.querySelector('.ham');

hambuton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
})

if (! localStorage.getItem('last visit')){
    localStorage.setItem('last visit', Date.now());
    document.getElementById('diff').textContent = "Welcome";
} else {
    currentDate = Date.now();
    //get the item from local storage,set it to todays date
    //do some math
    //change the span :)
};