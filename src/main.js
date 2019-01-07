var html, body, scrollToTopButton;
window.onload = function() {
  html = document.documentElement;
  body = document.body;
  scrollToTopButton = document.getElementById("scrollToTopButton");
};

function scrollToTop(totalTime, easingPower) {
  //console.log("here");
  var timeInterval = 1; //in ms
  var scrollTop = Math.round(body.scrollTop || html.scrollTop);
  //var by=- scrollTop;
  var timeLeft = totalTime;
  var scrollByPixel = setInterval(function() {
    var percentSpent = (totalTime - timeLeft) / totalTime;
    if (timeLeft >= 0) {
      var newScrollTop = scrollTop * (1 - easeInOut(percentSpent, easingPower));
      body.scrollTop = newScrollTop;
      html.scrollTop = newScrollTop;
      //console.log(easeInOut(percentSpent,easingPower));
      timeLeft--;
    } else {
      clearInterval(scrollByPixel);
      //Add hash to the url after scrolling
      //window.location.hash = hash;
    }
  }, timeInterval);
}

function easeInOut(t, power) {
  if (t < 0.5) {
    return 0.5 * Math.pow(2 * t, power);
  } else {
    return 0.5 * (2 - Math.pow(2 * (1 - t), power));
  }
}

window.onscroll = controlScrollToTopButton;

function controlScrollToTopButton() {
  var windowInnerHeight = 2 * window.innerHeight;
  if (
    body.scrollTop > windowInnerHeight ||
    html.scrollTop > windowInnerHeight
  ) {
    scrollToTopButton.classList.add("show");
  } else {
    scrollToTopButton.classList.remove("show");
  }
}
















// Almacenando en dataMainPokemon la data a utilizar en la HU01
const dataMainPokemon = pokemon.getDataMainOfPokemon(POKEMON.pokemon);

// Dando id a la const donde se pintaran los pokemones
const divPokemon = document.getElementById('list-pokemon');

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

// Guardando el id del select
const selectTypes = document.getElementById('paint-types');

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

// Agregando evento al botón de búsqueda avanzada H03
btnSearchAdv.addEventListener('click', () => {
  document.getElementById('selectOrder').style.display = 'none';
  const types = document.getElementById('types');
  types.classList.remove('unseen');
  types.classList.remove('show');
});

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

// Botón para actualizar
const btnReturn1 = document.getElementById('btnReturn');

btnReturn1.addEventListener('click', () => {
  location.reload();
});

// constantes para los promedios y botón
const resultFound = document.getElementById('result-found');
const avgWeight = document.getElementById('avg-weight');
const avgHeight = document.getElementById('avg-height');
const btnSearchTypes = document.getElementById('btn-search-types');

btnSearchTypes.addEventListener('click', () => {
  document.getElementById('btnReturn').style.display = 'block';
  const paintTypes = document.getElementById('paint-types').value;
  const filter = pokemon.filterForType(dataMainPokemon, paintTypes);
  paintPokemones(filter);
  resultFound.innerHTML = pokemon.calculateQuantityByType(dataMainPokemon, paintTypes) + ' result found';
  avgWeight.innerHTML = 'Average weight: ' + pokemon.getAverageWeight(dataMainPokemon, paintTypes);
  avgHeight.innerHTML = 'Average height: ' + pokemon.getAverageHeight(dataMainPokemon, paintTypes);
});

// Botón ordenar 
const btnOrderBy = document.getElementById('selectOrder');

btnOrderBy.addEventListener('click', () => {
  const selectOrder = document.getElementById('selectOrder').value;
  const ordered = pokemon.order(dataMainPokemon, selectOrder);
  paintPokemones(ordered);
});
