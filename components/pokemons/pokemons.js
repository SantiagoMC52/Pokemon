const main = document.querySelector('.pokemons');
const pagedList = { offset: 0, limit: 20 };

const createHeader = () => {
  const header = createDomElements('header', '', '', main, 'header-pokemons');
  createDomElements('h1', 'Pokemons - List', '', header);
  createDomElements('a', 'DASHBOARD', 'http://127.0.0.1:5500/Pokemon/components/dashboard/dashboard.html', header);
};
createHeader();

const listDiv = createDomElements('div', '', '', main, 'pokemons-container');
const ul = createDomElements('ul', '', '', listDiv);

const createList = () => {
  const pagination = `https://pokeapi.co/api/v2/pokemon?limit=${pagedList.limit}&offset=${pagedList.offset}`;

  ul.innerHTML = '';

  getPokemonData(pagination).then((pokemons) => {
    pokemons.results.forEach((pokemon) => {
      const pokem = createDomElements('li', '', '', ul);
      createDomElements('a', `${pokemon.name}`, `./../details/?name=${pokemon.name}`, pokem);
    });
  });
};

const createButtons = () => {
  const foot = createDomElements('footer', '', '', main, 'footer');
  const btnBack = createDomElements('button', 'back', '', foot, 'back-btn');
  const btnNext = createDomElements('button', 'next', '', foot, 'next-btn');

  btnBack.onclick = () => {
    if (pagedList.offset >= 20) {
      pagedList.offset -= 20;
      createList(pagedList.offset, pagedList.limit);
    }
  };

  btnNext.onclick = () => {
    pagedList.offset += 20;
    createList(pagedList.offset, pagedList.limit);
  };
};

const createPokemonsDashboard = () => {
  createList(pagedList.offset, pagedList.limit);
  createButtons();
};
createPokemonsDashboard();
