const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.prophets);
  displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
  const cards = document.querySelector('div.cards');

  cards.innerHTML = ''; // clear previous content

  prophets.forEach((prophet) => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');

    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);

    card.appendChild(h2);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
};

function displayTable(prophets) {
  const table = document.querySelector('table');

  table.innerHTML = ''; // clear previous content

  prophets.forEach((prophet) => {
    let tr = document.createElement('tr');
    let td_name = document.createElement('td');
    let td_birthplace = document.createElement('td');
    let td_birthdate = document.createElement('td');

    td_name.textContent = `${prophet.name} ${prophet.lastname}`;
    td_birthplace.textContent = prophet.birthplace;
    td_birthdate.textContent = prophet.birthdate;

    tr.appendChild(td_name);
    tr.appendChild(td_birthplace);
    tr.appendChild(td_birthdate);

    table.appendChild(tr);
  });
}

const cardsBtn = document.getElementById('cards');
const listBtn = document.getElementById('list');

cardsBtn.addEventListener('click', () => {
  displayProphets(data.prophets);
});

listBtn.addEventListener('click', () => {
  displayTable(data.prophets);
});