const temp = parseInt(document.querySelector('.t').textContent);
const windspeed = parseInt(document.querySelector('.ws').textContent);

const chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));

if (temp <= 50 && windspeed >= 3) {
    document.getElementById('wc').textContent = chill + '°F';
}
