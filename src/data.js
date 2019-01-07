// Obtener data principal de Pokemon (Historia de usuario #01)
const getDataMainOfPokemon = (arr) => {
  let newArr = [];
  arr.forEach((element) => {
    newArr.push({name: element.name, img: element.img, type: element.type, height: element.height, weight: element.weight, weaknesses: element.weaknesses});
  });
  return newArr;
};

// Obtener pokemón por nombre (Historia de usuario #02) 
const searchByName = (arr, name) => {
  const getPokemon = arr.filter(obj => obj.name.toUpperCase() === name.toUpperCase());
  return getPokemon;
};
  
// Obtener un arreglo con todos los tipos de Pokémon incluye repetidos H03
const getTypes = (data) => {
  let arrTypes = [];
  data.forEach(obj => {
    arrTypes = arrTypes.concat(obj.type);
  });
  return arrTypes;
};

// Obteniendo tipos únicos H03 para el select
const uniqueTypes = (data) => {
  const acumType = getTypes(data).reduce((acum, elem) => {
    if (elem !== '' && acum.indexOf(elem) === -1) {
      acum.push(elem);
    }
    return acum;
  }, []);
  return acumType;
};

// Realizando filtrado por Tipo
const filterForType = (arr, nameType) => {
  let arrFiltType = [];
  arr.filter((elem) => {
    if (elem.type.includes(nameType)) {
      arrFiltType.push(elem);
    } 
  });
  return arrFiltType;
};

//Obteniendo promedio de peso
const getAverageWeight = (arr, nameType) => {
  let newArr = [];
  const arrFilt = filterForType(arr, nameType);
  arrFilt.forEach((elem) => {
    newArr.push(parseFloat(elem.weight));
  });
  const sizeArr = newArr.length;
  const total = newArr.reduce((cont, tip) => {
    return cont + tip;
  });
  const avgW = total / sizeArr;
  return Math.round(avgW * 100) / 100;
};

//Obteniendo promedio de altura
const getAverageHeight = (arr, nameType) => {
  let newArr = [];
  const arrFilt = filterForType(arr, nameType);
  arrFilt.forEach((elem) => {
    newArr.push(parseFloat(elem.height));
  });
  const sizeArr = newArr.length;
  const total = newArr.reduce((cont, tip) => {
    return cont + tip;
  });
  const avgH = total / sizeArr;
  return Math.round(avgH * 100) / 100;
};

//Calculando cantidad de tipo
const calculateQuantityByType = (arr, type) => {
  const filtrado = filterForType(arr, type);
  const newArr = filtrado.length;
  return newArr;
};

// Ordenando los pokemones de A-Z y Z-A
const order = (arr, typeOfOrder) => {
  if (typeOfOrder === 'nameAsc') {
    const ordenado = arr.sort((propiedad1, propiedad2) => {
      if (propiedad1.name > propiedad2.name) {
        return +1;
      } else {
        return -1;
      }
    });
    return ordenado;
  } else if (typeOfOrder === 'nameDesc') {
    const ordenado = arr.sort((propiedad1, propiedad2) => {
      if (propiedad1.name > propiedad2.name) {
        return -1;
      } else {
        return +1;
      }
    });
    return ordenado;
  }
};


window.pokemon = {
  getDataMainOfPokemon,
  searchByName,
  getTypes,
  uniqueTypes,
  filterForType,
  getAverageWeight,
  getAverageHeight,
  calculateQuantityByType,
  order,
};
