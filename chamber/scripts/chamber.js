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


const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/97086?unitGroup=metric&key=8ZLVEA9GKDT9RHBLC5GB6KA9C&contentType=json";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    let t = data.currentConditions.temp;
    document.querySelector('#t').textContent = Math.round(t * 5/9 +32 ); //Convert C to F. (Use toFixed(1) for one decimal point [18.7 F])
    let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.currentConditions.icon}.svg`;
    document.querySelector('#ws').textContent = data.currentConditions.windspeed;
    document.querySelector('#condition').textContent =  data.currentConditions.conditions;
    document.querySelector('#weather_icon').src = image;
    document.querySelector('#weather_icon').alt= data.currentConditions.conditions + ' icon';

    const temp = parseInt(document.querySelector('#t').textContent);
    const windspeed = parseInt(document.querySelector('#ws').textContent);

    const chill = Math.round((35.74 + (0.6215 * temp)) - (35.75 * Math.pow(windspeed,0.16)) + (0.4275 * temp * Math.pow(windspeed,0.16)));

    if (temp <= 50 && windspeed >= 3) {
        document.getElementById('wc').textContent = chill + '°F';
    } else {
        document.getElementById('wc').textContent = "N/A";
    }
    
  };
getWeather();



