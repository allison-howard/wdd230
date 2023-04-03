const date = new Date();
const year = date.getFullYear();
const modifiedDate = document.lastModified;

document.querySelector('.modified').textContent = `Last Modified: ${modifiedDate}`