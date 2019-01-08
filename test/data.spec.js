require('../src/data.js');

// Comprobar que pokemon es un objeto
describe('pokemon', () => {
  it('debería retornar un objeto', () => {
    expect(typeof pokemon).toBe('object');
  });
});

// Input para la HU #01: Ingresa todas las propiedades de la data.
const inputGet = [{'id': 1, 'num': '001', 'name': 'Bulbasaur', 'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'type': ['Grass', 'Poison'], 'height': '0.71 m', 'weight': '6.9 kg', 'candy': 'Bulbasaur Candy', 'candy_count': 25,
  'egg': '2 km', 'spawn_chance': 0.69, 'avg_spawns': 69, 'spawn_time': '20:00', 'multipliers': [1.58],
  'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic'],
  'next_evolution': [{'num': '002', 'name': 'Ivysaur'}, {'num': '003', 'name': 'Venusaur'}]
}];

// Output para la HU #01 : Devuelve solo las propiedades que se necesitan (name, img, type, height, weight, weaknesses)
const outputGet = [{'name': 'Bulbasaur', 'img': 'http://www.serebii.net/pokemongo/pokemon/001.png', 'type': ['Grass', 'Poison'], 'height': '0.71 m', 'weight': '6.9 kg', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']}];

// Input para las demás historias de usuario
const input = [
  {'name': 'Bulbasaur', 'img': 'http://www.serebii.net/pokemongo/pokemon/001.png', 'type': ['Grass', 'Poison'],
    'height': '0.71 m', 'weight': '6.9 kg', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']},
  {'name': 'Ivysaur', 'img': 'http://www.serebii.net/pokemongo/pokemon/002.png', 'type': ['Grass', 'Poison'],
    'height': '0.99 m', 'weight': '13.0 kg', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']},
  {'name': 'Venusaur', 'img': 'http://www.serebii.net/pokemongo/pokemon/003.png', 'type': ['Grass', 'Poison'],
    'height': '2.01 m', 'weight': '100.0 kg', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']},
  {'name': 'Charmander', 'img': 'http://www.serebii.net/pokemongo/pokemon/004.png', 'type': ['Fire'],
    'height': '0.61 m', 'weight': '8.5 kg', 'weaknesses': ['Water', 'Ground', 'Rock']},
  {'name': 'Squirtle', 'img': 'http://www.serebii.net/pokemongo/pokemon/007.png', 'type': ['Water'],
    'height': '0.51 m', 'weight': '9.0 kg', 'weaknesses': ['Electric', 'Grass']},
  {'name': 'Butterfree', 'img': 'http://www.serebii.net/pokemongo/pokemon/012.png', 'type': ['Bug', 'Flying'],
    'height': '0.71 m', 'weight': '6.9 kg', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']}, 
  {'name': 'Pikachu', 'img': 'http://www.serebii.net/pokemongo/pokemon/025.png', 'type': ['Electric'],
    'height': '0.41 m', 'weight': '6.0 kg', 'weaknesses': ['Ground']},
];

// Input para la HU #02 : Ingresar un nombre de Pokémon
const inputSearch = 'Bulbasaur';

// Output para la HU #02 : Devuelve solo el objeto del Pokémon que se busca
const outputSearch = [
  {'name': 'Bulbasaur', 'img': 'http://www.serebii.net/pokemongo/pokemon/001.png', 'type': ['Grass', 'Poison'],
    'height': '0.71 m', 'weight': '6.9 kg', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']}
];

// Output para la HU #03 : Crear un array con todos los tipos de Pokémon
const outputTypes = ['Grass', 'Poison', 'Grass', 'Poison', 'Grass', 'Poison', 'Fire', 'Water', 'Bug', 'Flying', 'Electric'];
// Output para la HU #03 : Obtener los tipos únicos
const outputUniqueTypes = ['Grass', 'Poison', 'Fire', 'Water', 'Bug', 'Flying', 'Electric'];

const outputFilter = [
  {'name': 'Bulbasaur', 'img': 'http://www.serebii.net/pokemongo/pokemon/001.png', 'type': ['Grass', 'Poison'],
    'height': '0.71 m', 'weight': '6.9 kg', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']},
  {'name': 'Ivysaur', 'img': 'http://www.serebii.net/pokemongo/pokemon/002.png', 'type': ['Grass', 'Poison'],
    'height': '0.99 m', 'weight': '13.0 kg', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']},
  {'name': 'Venusaur', 'img': 'http://www.serebii.net/pokemongo/pokemon/003.png', 'type': ['Grass', 'Poison'],
    'height': '2.01 m', 'weight': '100.0 kg', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']}
];

const outputOrderAZ = [
  {'name': 'Bulbasaur', 'img': 'http://www.serebii.net/pokemongo/pokemon/001.png', 'type': ['Grass', 'Poison'],
    'height': '0.71 m', 'weight': '6.9 kg', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']},
  {'name': 'Butterfree', 'img': 'http://www.serebii.net/pokemongo/pokemon/012.png', 'type': ['Bug', 'Flying'],
    'height': '0.71 m', 'weight': '6.9 kg', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']}, 
  {'name': 'Charmander', 'img': 'http://www.serebii.net/pokemongo/pokemon/004.png', 'type': ['Fire'],
    'height': '0.61 m', 'weight': '8.5 kg', 'weaknesses': ['Water', 'Ground', 'Rock']},
  {'name': 'Ivysaur', 'img': 'http://www.serebii.net/pokemongo/pokemon/002.png', 'type': ['Grass', 'Poison'],
    'height': '0.99 m', 'weight': '13.0 kg', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']},
  {'name': 'Pikachu', 'img': 'http://www.serebii.net/pokemongo/pokemon/025.png', 'type': ['Electric'],
    'height': '0.41 m', 'weight': '6.0 kg', 'weaknesses': ['Ground']},
  {'name': 'Squirtle', 'img': 'http://www.serebii.net/pokemongo/pokemon/007.png', 'type': ['Water'],
    'height': '0.51 m', 'weight': '9.0 kg', 'weaknesses': ['Electric', 'Grass']},
  {'name': 'Venusaur', 'img': 'http://www.serebii.net/pokemongo/pokemon/003.png', 'type': ['Grass', 'Poison'],
    'height': '2.01 m', 'weight': '100.0 kg', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']},
];

const outputOrderZA = [
  {'name': 'Venusaur', 'img': 'http://www.serebii.net/pokemongo/pokemon/003.png', 'type': ['Grass', 'Poison'],
    'height': '2.01 m', 'weight': '100.0 kg', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']},
  {'name': 'Squirtle', 'img': 'http://www.serebii.net/pokemongo/pokemon/007.png', 'type': ['Water'],
    'height': '0.51 m', 'weight': '9.0 kg', 'weaknesses': ['Electric', 'Grass']},
  {'name': 'Pikachu', 'img': 'http://www.serebii.net/pokemongo/pokemon/025.png', 'type': ['Electric'],
    'height': '0.41 m', 'weight': '6.0 kg', 'weaknesses': ['Ground']},
  {'name': 'Ivysaur', 'img': 'http://www.serebii.net/pokemongo/pokemon/002.png', 'type': ['Grass', 'Poison'],
    'height': '0.99 m', 'weight': '13.0 kg', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']},
  {'name': 'Charmander', 'img': 'http://www.serebii.net/pokemongo/pokemon/004.png', 'type': ['Fire'],
    'height': '0.61 m', 'weight': '8.5 kg', 'weaknesses': ['Water', 'Ground', 'Rock']},
  {'name': 'Butterfree', 'img': 'http://www.serebii.net/pokemongo/pokemon/012.png', 'type': ['Bug', 'Flying'],
    'height': '0.71 m', 'weight': '6.9 kg', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']},
  {'name': 'Bulbasaur', 'img': 'http://www.serebii.net/pokemongo/pokemon/001.png', 'type': ['Grass', 'Poison'],
    'height': '0.71 m', 'weight': '6.9 kg', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']},
];

// Output para la HU #04 : Obtener cantidad de pokemones según su tipo
const outputCalculate = 1;
// Test para la 1era historia de usuario: Mostrar solo ciertas propiedades de la data
describe('pokemon.getDataMainOfPokemon', () => {
  it('debería retornar una función', () => {
    expect(typeof pokemon.getDataMainOfPokemon).toBe('function');
  });

  it('debería retornar un nuevo array, con los datos principales de los pokemones', () => {
    expect(pokemon.getDataMainOfPokemon(inputGet)).toEqual(outputGet);
  });
});

// Test para la 2da historia de usuario: Búsqueda por nombre
describe('searchByName', () => {
  it('debería retornar una función', () => {
    expect(typeof pokemon.searchByName).toBe('function');
  });
  it('debería retornar el array del pokemon requerido', () => {
    expect(pokemon.searchByName(input, inputSearch)).toEqual(outputSearch);
  });
});

// Test para la 3ra historia de usuario: Filtrar por tipo
// Test para la función que obtiene todos los tipos(incluye repeticiones)
describe('pokemon.getTypes', () => {
  it('debería retornar una función', () => {
    expect(typeof pokemon.getTypes).toBe('function');
  });

  it('debería retornar un array de todos los tipos de Pokemon', () => {
    expect(pokemon.getTypes(input)).toEqual(outputTypes);
  });  
});
// Test para la función que obtiene los tipos únicos
describe('pokemon.uniqueTypes', () => {
  it('debería retornar una función', () => {
    expect(typeof pokemon.uniqueTypes).toBe('function');
  });

  it('debería retornar los tipos únicos', () => {
    expect(pokemon.uniqueTypes(input)).toEqual(outputUniqueTypes);
  });
});
// Test para la función que filtra por tipo
describe('pokemon.filterForType', () => {
  it('debería retornar una función', () => {
    expect(typeof pokemon.filterForType).toBe('function');
  });
  it('debería retornar los pokémon que tienen como tipo "Grass"', () => {
    expect(pokemon.filterForType(input, 'Grass')).toEqual(outputFilter);
  });
});

// Test para la función para sacar el promedio de peso y talla de un tipo de Pokémon
describe('pokemon.getAverage', () => {
  it('debería retornar una función', () => {
    expect(typeof pokemon.getAverage).toBe('function');
  });
  it('debería retornar el promedio del peso de los Pokémon tipo "Poison"', () => {
    expect(pokemon.getAverage(input, 'Poison', 'weight')).toEqual(39.97);
  });
  it('debería retornar el promedio de la altura de los Pokémon tipo "Poison"', () => {
    expect(pokemon.getAverage(input, 'Poison', 'height')).toEqual(1.24);
  });
});

// Test para la 4ta historia de usuario: Cálculo de veces que se repiten los tipos de Pokémon
describe('calculateQuantityByType', () => {
  it('debería retornar una función', () => {
    expect(typeof pokemon.calculateQuantityByType).toBe('function');
  });
  it('debería retornar la cantidad que se repite un tipo', () => {
    expect(pokemon.calculateQuantityByType(input, 'Fire')).toEqual(outputCalculate);
  });
});

// Test para la 5ta historia de usuario: Ordenar de la A-Z y Z-A los nombres de los pokemones
describe('order', () => {
  it('debería retornar una función', () => {
    expect(typeof pokemon.order).toBe('function');
  });
  it('debería retornar un array con la propiedad name ordenado de la A-Z', () => {
    expect(pokemon.order(input, 'nameAsc')).toEqual(outputOrderAZ);
  });

  it('debería retornar un array con la propiedad name ordenado de la Z-A', () => {
    expect(pokemon.order(input, 'nameDesc')).toEqual(outputOrderZA);
  });
});