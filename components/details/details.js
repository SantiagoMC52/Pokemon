const main = document.querySelector('.details');
const pokeName = new URLSearchParams(window.location.search).get('name');

const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

const pokemonData = getPokemonData(pokemonURL);

const createHeader = () => {
  const header = createDomElements('header', '', '', main, 'details-header');
  createDomElements('h1', 'Pokemon - Details', '', header);
  createDomElements('a', 'DASHBOARD', 'http://127.0.0.1:5500/pokemon/components/dashboard/dashboard.html', header);
  createDomElements('a', 'ALL POKEMONS', 'http://127.0.0.1:5500/pokemon/components/pokemons/pokemons.html', header);
};

const obtainDetails = () => {
  pokemonData.then((pokemon) => {
    const allDetails = createDomElements('div', '', '', main, 'details-container');
    createDomElements('p', `name: ${pokemon.name}`, '', allDetails);

    const pokemonImg = createDomElements('img', '', '', allDetails);
    pokemonImg.src = pokemon.sprites.front_default;

    createDomElements('p', `ability: ${pokemon.abilities[0].ability.name}`, '', allDetails);
    createDomElements('p', `height: ${pokemon.height}`, '', allDetails);
    createDomElements('p', `Move: ${pokemon.moves[0].move.name}`, '', allDetails);
  });
};

const createPokemonsDashboard = () => {
  createHeader();
  obtainDetails();
};
createPokemonsDashboard();
