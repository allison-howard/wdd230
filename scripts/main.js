let date = new Date();
let year = date.getFullYear();

document.querySelector('h1').innerHTML = `&copy; ${year} | Allison Merrick | BYU-Idaho`;

let currentdate = document.lastModified;

document.querySelector('span').textContent = currentdate;