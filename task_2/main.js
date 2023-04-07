const cardColumns = document.querySelector('.card-columns');
const chCard = document.querySelector('ch-card')

function renderCharacters(characters) {
    characters.forEach(character => {
        const link = document.createElement('a');
        link.href = 'character.html';
        const card = document.createElement('div');
        card.classList = 'card';

        const image = document.createElement('img');
        image.classList = 'card-img-top';
        image.src = character.image
        const cardBody = document.createElement('div');
        cardBody.classList = 'card-body';

        const cardTitle = document.createElement('h4');
        cardTitle.innerText = `${character.name}`
        cardTitle.classList = 'card-title';

        cardBody.appendChild(cardTitle);

        card.appendChild(image);
        card.appendChild(cardBody);

        link.appendChild(card);
        cardColumns.appendChild(link);
    })
};


fetch('https://rickandmortyapi.com/api/character?page=20')
    .then(response => response.json())
    .then(characters => {
        renderCharacters(characters.results)
    });

fetch('https://rickandmortyapi.com/api/character/21')
    .then(response => response.json())
    .then(data => {
        const image = document.createElement('img');
        const cardBody = document.createElement('div');
        const name = document.createElement('h3');
        const status = document.createElement('p');
        const species = document.createElement('p');
        const gender = document.createElement('p');
        const type = document.createElement('p');

        image.classList = 'card-img-top';
        image.src = data.image;

        cardBody.classList = 'card-body';
        name.classList = 'card-title';
        name.innerHTML = data.name;
        status.classList = 'card-text';
        status.innerHTML = data.status;
        species.classList = 'card-text';
        species.innerHTML = data.species;
        gender.classList = 'card-text';
        gender.innerHTML = data.gender;
        type.classList = 'card-text';
        type.innerHTML = data.type;

        cardBody.appendChild(name);
        cardBody.appendChild(status);
        cardBody.appendChild(species);
        cardBody.appendChild(gender);
        cardBody.appendChild(type);

        chCard.appendChild('image');
        chCard.appendChild('cardBody');
    })





