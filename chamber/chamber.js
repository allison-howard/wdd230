//Hamburger Button JS

const mainnav = document.querySelector('.navigation');
const hambuton = document.querySelector('.ham');

hambuton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
})

let currentdate = document.lastModified;

document.querySelector('.updated2').textContent = currentdate;


var d = new Date();
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayOfWeek = daysOfWeek[d.getDay()];
var day = d.getDate();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = months[d.getMonth()];
var year = d.getFullYear();

const date = dayOfWeek + ", " + day + " " + month + " " + year;

document.querySelector('.updated').innerHTML = date;

const realDayofWeek = d.getDay();
const banner = document.getElementById('banner');

if (realDayofWeek === 1 || realDayofWeek === 2) {
    banner.style.display = "block";
} else {
    banner.style.display = "none";
}

const temp = parseInt(document.querySelector('.t').textContent);
const windspeed = parseInt(document.querySelector('.ws').textContent);

const chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));

if (temp <= 50 && windspeed >= 3) {
    document.getElementById('wc').textContent = chill + '°F';
} else {
    document.getElementById('wc').textContent = "N/A";
}