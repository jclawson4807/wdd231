const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");

        fullName.setAttribute("tabindex", "0");

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");

        p1.setAttribute("tabindex", "0");
        p2.setAttribute("tabindex", "0");

        const portrait = document.createElement("img");

        const prophetName = `${prophet.name} ${prophet.lastname}`;

        fullName.textContent = prophetName;

        p1.textContent = `Date of Birth: ${prophet.birthdate}`;
        p2.textContent = `Place of Birth: ${prophet.birthplace}`;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophetName}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "362");
        portrait.setAttribute("height", "447");
        portrait.setAttribute("tabindex", "0");

        card.appendChild(fullName);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

