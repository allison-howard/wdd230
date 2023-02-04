const date = new Date();
const dayOfWeek = date.getDay();
const banner = document.getElementById('banner');

if (dayOfWeek === 1 || dayOfWeek === 2) {
    banner.style.display = "block";
} else {
    banner.style.display = "none";
}