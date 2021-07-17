const allPokemons = getPokemonData();
const main = document.querySelector('.dashboard');

const createHeader = () => {
  const header = createDomElements('header', '', '', main, 'header-dash');
  createDomElements('h1', 'Pokemons - Dashboard', '', header);
  createDomElements('a', 'ALL POKEMON', 'http://127.0.0.1:5500/Pokemon/components/pokemons/pokemons.html', header);
};

const createList = () => {
  const pagination = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=6';

  const listDiv = createDomElements('div', '', '', main, 'dash-container');
  const ul = createDomElements('ol', '', '', listDiv);

  getPokemonData(pagination).then((pokemons) => {
    pokemons.results.forEach((pokemon) => {
      const pokem = createDomElements('li', '', '', ul);
      createDomElements('a', `${pokemon.name}`, `./../details/?name=${pokemon.name}`, pokem);
    });
  });
};

const createPokemonsDashboard = () => {
  createHeader();
  createList();
};
createPokemonsDashboard();
