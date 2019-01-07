// Almacenando en dataMainPokemon la data a utilizar en la HU01
const dataMainPokemon = pokemon.getDataMainOfPokemon(POKEMON.pokemon);

// Dando id a la const donde se pintaran los pokemones
const divPokemon = document.getElementById('list-pokemon');

// Guardando el id del select
const selectTypes = document.getElementById('paint-types');

// Pintando pokemones en HTML(Historia de usuario #01)
const paintPokemones = (arr) => {
  let listOfPokemones = '';
  // Recorrer el dataMain con forEach
  arr.forEach((pokemones) => {
  // Almacenando en una const lo que se implementará al HTML
    const card = `
      <div class="card-link col-xl-2 col-lg-2 col-xs-10">
        <article class="blog-card">
          <div class="center-items">
            <img class="pokemon-image" src="${ pokemones.img }" />
          </div>
          <div class="article-details">
            <h3 class="pokemon-name">${ pokemones.name }</h3>
            <p class="pokemon-type">Type: ${ pokemones.type }</p>
            <p class="pokemon-height">Height: ${ pokemones.height }</p>
            <p class="pokemon-weight">Weight: ${ pokemones.weight }</p>
            <p class="pokemon-weaknesses">Weaknesses: ${ pokemones.weaknesses }</p>
          </div>
        </article>
      </div>
    `;
    // Concatenando info
    listOfPokemones += card;
  });
  // Pintando en el html
  divPokemon.innerHTML = listOfPokemones;
};

paintPokemones(dataMainPokemon);

// Botón de búsqueda H02
const btnSearch = document.getElementById('btn-search');

// Agregando evento al botón de búsqueda H02
btnSearch.addEventListener('click', () => {
  document.getElementById('types').style.display = 'none';
  document.getElementById('btnReturn').style.display = 'block';
  const pokemonName = document.getElementById('pokemon-name').value;
  if (pokemonName === '') {
    document.getElementById('warning').innerHTML = 'Ingrese el nombre del pokémon que desea buscar';
  } else {
    const buscado = pokemon.searchByName(dataMainPokemon, pokemonName);
    document.getElementById('warning').innerHTML = '';
    paintPokemones(buscado);
  }
});

// Botón de búsqueda H03
const btnSearchAdv = document.getElementById('btn-search-adv');

// Pintando pokemones en el select H03
const paintTypesInSelect = (arr) => {
  let typesOfPokemon = '';
  const types = pokemon.uniqueTypes(arr);
  for (let i = 0; i < types.length; i++) {
    const select = `
    <option value="${types[i]}">${types[i]}</option>
    `;
    typesOfPokemon += select;
  }
  selectTypes.innerHTML = typesOfPokemon;
};

paintTypesInSelect(dataMainPokemon);

// Agregando evento al botón de búsqueda avanzada H03
btnSearchAdv.addEventListener('click', () => {
  document.getElementById('selectOrder').style.display = 'none';
  const types = document.getElementById('types');
  types.classList.remove('unseen');
  types.classList.remove('show');
});



const resultFound = document.getElementById('result-found');
const avgWeight = document.getElementById('avg-weight');
const avgHeight = document.getElementById('avg-height');

const btnSearchTypes = document.getElementById('btn-search-types');
const btnReturn1 = document.getElementById('btnReturn');

btnSearchTypes.addEventListener('click', () => {
  document.getElementById('btnReturn').style.display = 'block';
  const paintTypes = document.getElementById('paint-types').value;
  const filter = pokemon.filterForType(dataMainPokemon, paintTypes);
  paintPokemones(filter);
  resultFound.innerHTML = pokemon.calculateQuantityByType(dataMainPokemon, paintTypes) + ' result found';
  avgWeight.innerHTML = 'Average weight: ' + pokemon.getAverageWeight(dataMainPokemon, paintTypes);
  avgHeight.innerHTML = 'Average height: ' + pokemon.getAverageHeight(dataMainPokemon, paintTypes);
});

// Botón para actualizar la página
btnReturn1.addEventListener('click', () => {
  location.reload();
});

// Almacenando select en una const
const buttonOrderBy = document.getElementById('selectOrder');

buttonOrderBy.addEventListener('click', () => {
  const selectOrder = document.getElementById('selectOrder').value;
  const ordenando = pokemon.order(dataMainPokemon, selectOrder);
  paintPokemones(ordenando);
});
