const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
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

//Explique la diferencia entre forEach, map, filter, and reduce.
/*
    forEach: sirve solo para iterar sobre los elementos de un array. 
    Se utiliza una funcion para poder realizar las operaciones que necesitemos
    y a la misma se le pasa como argumento el elemento del array a utilizar en
    ese momento.
    map: sirve para iterar sobre los elementos un array y modificarlos.
    Se utiliza una funcion que recibe como argumento el elemento sobre el cual
    se trabajara en el array y posteriormente la operacion o accion a realizar
    sobre este elemento.
    filter: sirve para filtrar los elementos que cumplen una condicion, por ejemplo
    que terminen, incluyan, sean igual a un valor o mayor o menor a un valor
    reduce: sirve para iterar sobre los elementos de un arreglo.
    En este se pasa una funcion con dos parametros, el acumulador y el elemento actual,
    seguido las acciones a realizar y terminado con el valor inicial del acumulador
*/

//Utiliza forEach para mostrar con console.log cada país del array de países.
countries.forEach((element) => {
    console.log(element);
});
//De forma explicita lo anterior
//countries.forEach((element) => console.log(element));

//Utiliza forEach para mostrar con console.log cada nombre del array de nombres.
names.forEach((element) =>{
    console.log(element);
});
//De forma explicita lo anterior
//names.forEach((element) => console.log(element));

//Utiliza forEach para mostrar con console.log cada número del array de números.
numbers.forEach((element) => {
    console.log(element)
});
//De forma explicita lo anterior
//numbers.forEach((element) => console.log(element));

//Utiliza map para crear un nuevo array cambiando cada país a mayúsculas en el array de países.
//Funcion flecha explicita
const countriesUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesUpperCase);

//Funcion flecha implita 
// const countriesUpperCase = countries.map((country) =>{
//     return country.toUpperCase();
// });
// console.log(countriesUpperCase);


//Utilice map para crear un array de longitudes de países a partir del array de países.
//Funcion flecha explicita
const countriesLenght = countries.map((country) => country.length);
console.log(countriesLenght);

//Funcion flecha implicita
// const countriesLenght = countries.map((country) => {
//     return country.length
// });
// console.log(countriesLenght)

//Usa map para crear un nuevo array cambiando cada número al cuadrado en el array de números.
//Funcion flecha explicita
const numeroCuadrado = numbers.map((number) => number * number);
console.log(numeroCuadrado);

//Funcion fleca implicita
// const numeroCuadrado = numbers.map((number) => {
//     return number * number
// });
// console.log(numeroCuadrado);

//Utilice map para cambiar cada nombre a mayúsculas en el array de nombres.
//Funcion flecha exxplicita
const nombresMayusculas = names.map((name) => name.toUpperCase());
console.log(nombresMayusculas)

//Funcion flecha implicita
// const nombresMayusculas = names.map({
//     (name) => name.toUpperCase()
// });
// console.log(nombresMayusculas)

//Utilice map para asignar el array de productos a sus correspondientes precios.
//Funcion flecha explicita
const precios = products.map((producto) => producto.price);
console.log(precios);

//Funcion flecha implicita
// const precios = products.map((producto) => {
//     producto.price
// });
// console.log(precios);

//Utilice filter para filtrar los países que contienen land.
//Funcion flecha explicita
const countriesLand = countries.filter((country) => country.includes('land'));
console.log(countriesLand);

//Funcion flecha implicita
// const countriesLand = countries.filter((country) => {
//     country.includes('land')
// });
// console.log(countriesLand);

//Utilice filter para filtrar los países que tienen seis caracteres.
//Funcion flecha explicita
const countriesSix = countries.filter((country) => country.length ===6);
console.log(countriesSix);

//Funcion flecha implicita
// const countriesSix = countries.filter((country) => {
//     country.length ===6
// });
// console.log(countriesSix);

//Utilice filter para filtrar los países que contengan seis letras o más en el array de países.
//Funcion flecha explicita
const countriesSixMore = countries.filter((country) => country.length >= 6);
console.log(countriesSixMore);

//Funcion flecha implicita
// const countriesSixMore = countries.filter({
//     (country) => country.length >= 6}
// );
// console.log(countriesSixMore);

//Utilice filter para filtrar los países que empiezan por "E";
//Funcion flecha explicita
const countriesE = countries.filter((country) => country.startsWith('E'));
console.log(countriesE);

//Funcion flecha implicita
// const countriesE = countries.filter({
//     (country) => country.startsWith('E')
// });
// console.log(countriesE);

//Utilice filter para filtrar sólo los precios con valores
//Funcion flecha explicita
const filteredProducts = products.filter((product) =>  typeof product.price === 'number' && !isNaN(product.price));
console.log(filteredProducts);

//Funcion flecha implicita
// const filteredProducts = products.filter((product) => {
//     return typeof product.price === 'number' && !isNaN(product.price);
// });
//   console.log(filteredProducts);

//Declara una función llamada getStringLists que toma un array 
//como parámetro y devuelve un array sólo con elementos string.
//Funcion flecha implicita
//Esta es una forma muy sucia de hacer este ejercicio
function getStringLists (arr) {
    return arr.filter((item) => typeof item === 'string');
}
console.log(getStringLists([1,2, 'aa', 'bb']))
//Como funcion explicita
const getStringListsTwo = (item) => item.filter((item) => typeof item === 'string');
console.log(getStringListsTwo([1,5,6,'hola', 'chris']));

//Usa reduce para sumar todos los números del array de números.
const sum = numbers.reduce((acc, varAct) => acc + varAct, 0);
console.log(sum);

// Utiliza reduce para concatenar todos los países y producir esta 
// frase: Estonia, Finland, Sweden, Denmark, Norway, y IceLand son 
// países del norte de Europa
const frase = countries.reduce((acc, varAct, index) => {
  if (index === 0) {
    return varAct;
  }else if (index === countries.length - 1) {
    return `${acc} y ${varAct}`;
  } else {
    return `${acc}, ${varAct}`;
  }
}, "");

console.log(`${frase} son paises del norte de Europa`)

// Explique la diferencia entre some y every
/*
Los dos comprueban si los elementos dentro de un array cumplen algunas condiciones
sin embargo some devolvera true si al menos un elemento cumple esta condicion y
every devolvera true si todos los elementos cumplen esta condicion
*/

// Utilice some para comprobar si la longitud de algunos nombres es 
//superior a siete en el array de nombres.
const namesLength = names.some((name) => name.length > 7);
console.log(namesLength);

// Utilice every para comprobar si todos los países contienen la palabra land.
const everyCountriesLand = countries.every((country) => country.includes('land'));
console.log(everyCountriesLand);

// Explique la diferencia entre find y findIndex.
/*
Los dos sirven para retornar un elemento que cumple una condicion, sin embargo
find retorna el primer elemento que cumple la condicion y
findIndex retorna la posicion del primer elemento que cumple la condicion
*/

// Utilice find para encontrar el primer país que contenga sólo seis 
//letras en el array de países.
const findCountrySix = countries.find((country) => country.length === 6);
console.log(findCountrySix);

// Utilice findIndex para encontrar la posición del primer país que 
//contenga sólo seis letras en el array de países.
const findCountrySixIndex = countries.findIndex((country) => country.length === 6);
console.log(findCountrySixIndex);

// Utilice findIndex para encontrar la posición de Norway si 
//no existe en el array obtendrá -1.
const findNorway = countries.findIndex((country) => country === 'Norway');
console.log(findNorway);

// Utilice findIndex para encontrar la posición de Russia si no 
//existe en el array obtendrá -1.
const findRussia = countries.findIndex((country) => country === 'Russia');
console.log(findRussia);