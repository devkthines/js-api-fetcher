function fetchPokemon() {
    const pokemonName = document.getElementById('pokemonInput').value.toLowerCase();
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayPokemonInfo(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            document.getElementById('pokemonInfo').innerText = 'Pokemon not found!';
        });
}

function displayPokemonInfo(data) {
    const pokemonInfo = document.getElementById('pokemonInfo');
    pokemonInfo.innerHTML = `
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>Height: ${data.height}</p>
        <p>Weight: ${data.weight}</p>
    `;
}