const cardColumns = document.querySelector('.card-columns');

function renderCharacters(characters) {
    characters.forEach(character => {
        const link = document.createElement('a');
        link.href = character.url;
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


fetch('https://rickandmortyapi.com/api/character?page=2')
    .then(response => response.json())
    .then(characters => {
        renderCharacters(characters.results)
    });



