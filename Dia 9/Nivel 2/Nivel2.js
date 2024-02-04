//const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Encuentre el precio total de los productos encadenando dos o más iteradores 
//de matrices (por ejemplo, arr.map(callback).filter(callback).reduce(callback)).
const totalPrice = products.map((producto) => typeof producto.price === 'number' 
        && !isNaN(producto.price) ? producto.price : 0)
        .filter((price) => price > 0)
        .reduce((acc, varAct) => acc + varAct, 0);

console.log(totalPrice);
/*
Lo anterior se leeria de la siguiente manera
Declaramos una funcion tipo const llamada totalPrice, le aisgamos el arreglo de objetos
products, al cual le hacemos un map y pasamos el valor actual del arreglo con producto,
utilizamos una funcion flecha para comprobar el tipo de dato de producto.price de la sig manera:
Si producto.price es igual a valor numerico y distinto de nulo ? (if ternario) o sea si es verdad
entonces retornara producto.price (Por ejemplo 8 es numero y distinto de null? Es verdad, retornamos 8)
En caso de que no sea asi, se le asicta a producto.price el valor de 0
Filtramos ahora todos los price que sean mayores a 0 y al final 
reazliamos una suma con reduce donde pasamos un acumulador, valor actual y un valor incial.
.map.filter.reduce asi es el orden
*/

// Encuentre la suma del precio de los productos usando sólo reduce(callback)).
const sumaPrecios = products.reduce((acc, varAct) =>
   typeof varAct.price === 'number' && !isNaN(varAct.price) ? acc + varAct.price : acc
, 0);
console.log(`Precio total de los productos: ${sumaPrecios}`);


// Declara una función llamada categorizeCountries que retorna un array de países 
//que tienen algún patrón común (encuentras el array de países en este repositorio 
//como countries.js(ej 'land', 'ia', 'island','stan')).
import { countries } from './countries.js'

const categorizeCountries = (patron) =>{
    return countries.filter((country) => country.toLowerCase().includes(patron.toLowerCase()))
}
console.log(categorizeCountries('IA'))

// Cree una función que retorne un array de objetos, que es la letra y el número 
//de veces que la letra usa para empezar el nombre de un país.
const contadorLetraNumero = paises => {
  const contadorLetras = {}; //inciar un nuevo objeto para el conteo
  paises.forEach(pais =>{ //para cada pais de paises
    const primeraLetra = pais[0].toUpperCase(); //asignar a primeraLetra la letra de indice 0 (inciacion) convertida a mayusculas
    //Lo siguiente que ocurre es que se realiza una comprobacion con el operador ternario
    //Si contadorLetras[primeraLetra] es igual a contadorLetrtas[primeraLetra] entonces contadorLetras[priemraLetra] se aumenta en 1,
    //en caso contrario, contadorLetras[primeraLetra] se le asigna el valor de 1.
    //Mejor explicado Si A es igual a A se incrementa el cotnador en 1, en caso contrario
    //el contador se le asigna el valor de 1
    contadorLetras[primeraLetra] = contadorLetras[primeraLetra] ? contadorLetras[primeraLetra]++ : contadorLetras[primeraLetra] = 1;
  });
  //retorna un array de arrays con todas las entradas (clave, valor) dentro de contadorLetras
  //Mediante el map se realiza un mapeo para hacer un nuevo objeto con los valroes {letra, conteo}
  return Object.entries(contadorLetras).map(([letra, contador]) => ({letra: letra, conteo: contador}))
}
//Se le pasa a la funcion el arreglo de countries que se importo anteriormente
console.log(contadorLetraNumero(countries));

// Declara una función getFirstTenCountries y retorna un array de diez países. 
//Utiliza diferente programación funcional para trabajar en el array countries.js.
const getFirstTenCountries = paises => paises.slice(0,10);
console.log(getFirstTenCountries(countries))

// Declara una función getLastTenCountries que devuelve los últimos diez países 
//del array de países.
const getLastTenCountries = paises => paises.slice(-10);
console.log(getLastTenCountries(countries));

// Encuentre qué letra se utiliza muchas veces como inicial de un nombre de país 
//del array de países (ej. Finland, Fiji, France etc)
const letraMasComun = paises =>{
  const contador = {};
  paises.forEach(pais => {
    const primeraLetra = pais[0].toUpperCase();
    contador[primeraLetra] = contador[primeraLetra] ? contador[primeraLetra]++ : contador[primeraLetra] = 1;
  });

  let maxLetra = '';
  let maxConteo = 0;

  for (let letra in contador) {
    if (contador[letra] > maxConteo) {
      maxConteo = contador[letra];
      maxLetra = letra;
    }
  }

  return maxLetra;
}
console.log(`La letra mas comun es ${letraMasComun(countries)}`)