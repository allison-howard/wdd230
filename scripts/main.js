let date = new Date();
let year = date.getFullYear();

document.querySelector(".copyright").innerHTML = `&copy; ${year}`;

let currentdate = document.lastModified;

document.querySelector('.updated').textContent = currentdate;