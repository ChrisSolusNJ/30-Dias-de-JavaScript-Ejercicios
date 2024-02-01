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
const countriesSixMore = countries.filter((country) => country.length >= 6);
console.log(countriesSixMore);