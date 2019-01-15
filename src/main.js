// c

// fetch(url) 
//   .then( response => response.json()) 
//   .then(function(res) {
//     return (res);
//   });


// const data = fetch(url);

// function loadJSON() {

const url = 'https://mirellalucero.github.io/lim-2018-11-bc-core-am-data-lovers/src/data/pokemon/pokemon.json'; 
fetch(url)
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    const dataPokemon = data.pokemon;
    contentFunction(dataPokemon);
  })
  .catch(function(error) {
    return ('Hubo un problema con la petición Fetch:' + error.message);
  });

function contentFunction(dataMainPokemon) {
// Dando id a la const donde se pintaran los pokemones
  const divPokemon = document.getElementById('list-pokemon');

  const paintPokemones = (arr) => {
    let listOfPokemones = '';
    // Recorrer el dataMain con forEach
    arr.forEach((pokemon) => {
      // Almacenando en una const lo que se implementará al HTML
      const card = `
      <div class="card-link col-xl-2 col-lg-2 col-xs-10">
        <article class="blog-card">
          <div class="center-items">
            <img class="pokemon-image" src="${ pokemon.img }" />
          </div>
          <div class="article-details">
            <h3 class="pokemon-name">${ pokemon.name }</h3>
            <p class="pokemon-type">Type: ${ pokemon.type }</p>
            <p class="pokemon-height">Height: ${ pokemon.height }</p>
            <p class="pokemon-weight">Weight: ${ pokemon.weight }</p>
            <p class="pokemon-weaknesses">Weaknesses: ${ pokemon.weaknesses }</p>
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

  // Pintando pokemones en HTML(Historia de usuario #01)
  paintPokemones(dataMainPokemon);

  // Guardando el id del select
  const selectTypes = document.getElementById('paint-types');

  // Botón de búsqueda H02
  const btnSearch = document.getElementById('btn-search');

  // Agregando evento al botón de búsqueda H02: Buscar por nombre
  btnSearch.addEventListener('click', () => {
    document.getElementById('types').style.display = 'none';
    document.getElementById('btn-return').style.display = 'block';
    const pokemonName = document.getElementById('pokemon-name').value;
    if (pokemonName === '') {
      document.getElementById('warning').innerHTML = 'Enter the name of the Pokémon you want to search';
    } else {
      const searched = pokemon.searchByName(dataMainPokemon, pokemonName);
      document.getElementById('warning').innerHTML = '';
      paintPokemones(searched);
    }
  });

  // Botón de búsqueda H03
  const btnSearchAdv = document.getElementById('btn-search-adv');

  // Agregando evento al botón de búsqueda avanzada H03: Para que se muestre el select de tipos
  btnSearchAdv.addEventListener('click', () => {
    document.getElementById('select-order').style.display = 'none';
    const types = document.getElementById('types');
    types.classList.remove('unseen');
    types.classList.remove('show');
  });

  btnSearchAdv.addEventListener('dblclick', () => {
    document.getElementById('types').style.display = 'none';
    document.getElementById('select-order').style.display = 'inline-block';
    location.reload();
  });

  // Pintando los tipos en el select H03
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

  // Botón para actualizar
  const btnReturn = document.getElementById('btn-return');

  btnReturn.addEventListener('click', () => {
    location.reload();
  });

  // Constantes para los promedios y botón
  const resultFound = document.getElementById('result-found');
  const avgWeight = document.getElementById('avg-weight');
  const avgHeight = document.getElementById('avg-height');
  const paintTypes = document.getElementById('paint-types');

  // Botón para que se muestre cuantos se encontraron, promedio de peso y talla H4
  paintTypes.addEventListener('change', () => {
    document.getElementById('btn-return').style.display = 'block';
    const paintTypes = document.getElementById('paint-types').value;
    const filter = pokemon.filterForType(dataMainPokemon, paintTypes);
    paintPokemones(filter);
    resultFound.innerHTML = pokemon.calculateQuantityByType(dataMainPokemon, paintTypes) + ' result found';
    avgWeight.innerHTML = 'Average weight: ' + pokemon.getAverage(dataMainPokemon, paintTypes, 'weight') + ' kg';
    avgHeight.innerHTML = 'Average height: ' + pokemon.getAverage(dataMainPokemon, paintTypes, 'height') + ' m';
  });

  // Select para ordenar H05
  const selectOrder = document.getElementById('select-order');

  selectOrder.addEventListener('change', () => {
    const valueSelect = document.getElementById('select-order').value;
    const ordered = pokemon.order(dataMainPokemon, valueSelect);
    paintPokemones(ordered);
  });
}
