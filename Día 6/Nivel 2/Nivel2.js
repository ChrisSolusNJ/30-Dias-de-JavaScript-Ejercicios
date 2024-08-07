//Escribe un script que genere un número hexadecimal aleatorio.
//Ejemplo resultado: #a34f25
//Nota: Investiga el método toString().
//Nota: Puedes usar este código para generar un color aleatorio:
//let color = Math.random().toString(16).substr(-6);
//console.log(color);
//Nota: El método toString() tiene un parámetro que indica la base a utilizar para las conversiones numéricas. El valor por defecto es 10. En este ejercicio se necesita una conversión a base hexadecimal, por lo que hay que indicar el valor 16.
//Nota: El método substr() extrae una parte de una cadena, empezando en la posición indicada por el parámetro start y con una longitud indicada por el parámetro length. Si el parámetro length no se indica, se extraen los caracteres desde start hasta el final de la cadena.
//Nota: El método substr() puede recibir un valor negativo para el parámetro start. En ese caso, la extracción se realiza desde el final de la cadena. Por ejemplo, el valor -6 indica que se extraen los 6 últimos caracteres de la cadena.

let color = Math.random().toString(16).substring(8);
console.log(color);

/*
    Escribe un script que genere un número de color rgb aleatorio:
    rgb(240,180,80)
*/  
const red = Math.floor(Math.random()*256);
const green = Math.floor(Math.random()*256);
const blue = Math.floor(Math.random()*256);

console.log(`Color rgb(${red}, ${green}, ${blue})`)

//Usando el array countries anterior, crea un array como el siguiente.
//["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
import {countries} from './countries.js';

const countriesMayus = [];
for(let i = 0; i < countries.length; i++){
    countriesMayus.push(countries[i].toUpperCase());
}
console.log(countriesMayus);

//Usando el array countries anterior, crea un array para saber la longitud de cada país.
const countriesLenght = [];
for(let i = 0; i < countries.length; i++){
    countriesLenght.push(countries[i].length);
}
console.log(countriesLenght);

/*
Utiliza el array countries para crear la siguiente array de arrays
  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
*/
//Usando el array countries anterior, crea un array para saber la longitud de cada país.
const countriesTwo = [];
for(let i = 0; i < countries.length; i++){
    //Insertar en el array countriesTwo el valor de 'i' contenido en coutnries, seguido de cortar un fragmento y la longitud.
    countriesTwo.push(countries[i], countries[i].slice(0,3).toUpperCase(), countries[i].length);
}
console.log(countriesTwo);

//En el array countries anterior, verifica si hay un país que contenga la palabra 'land'. Si hay países que contienen 'land', imprimelo como array. Si no hay ningún país que contenga la palabra'land', imprima 'Todos estos países no tienen la palabra land'.
const countriesLand = [];
for(let i = 0; i < countries.length; i++){
    if(countries[i].includes('land')){
        countriesLand.push(countries[i]);
    }
}
console.log(countriesLand);
if(countriesLand.length == 0){
    console.log('Todos estos países no tienen la palabra land');
}

//En el array countries anterior, verifica si hay un país que termina con una subcadena (substring) 'ia'. Si hay países que terminan con 'ia', imprimelo como un array. Si no hay ningún país que contenga la palabra 'ia', imprime 'Estos países no terminan con ia'.
const countriesIa = [];
for(let i = 0; i < countries.length; i++){
    if(countries[i].includes('ia')){
        countriesIa.push(countries[i]);
    }
}
console.log(countriesIa);
if(countriesIa.length == 0){
    console.log('Todos estos países no tienen la palabra land');
}

//Usando el array countries anterior, encuentre el país que contiene la mayor cantidad de caracteres. 
//Por ejemplo Ethiopia
const countriesLenghtMax = [];
for(let i = 0; i < countries.length; i++){
    countriesLenghtMax.push(countries[i].length);
}
console.log(countriesLenghtMax);
console.log(Math.max(...countriesLenghtMax));
console.log(countries[countriesLenghtMax.indexOf(Math.max(...countriesLenghtMax))]);

//Usando el array countries anterior, encuentre el país que contiene sólo 5 caracteres.
const countriesFive = [];
for(let i = 0; i<countries.length; i++){
    if(countries[i].length == 5){
        countriesFive.push(countries[i]);
    }
}

console.log(countriesFive);

//Importar el array webtechs desde el archivo web_techs
import {webTechs} from './web_techs.js';

//Encuentra la palabra más larga en el array webTechs
const webTechsLenght = [];
for(let i = 0; i < webTechs.length; i++){
    webTechsLenght.push(webTechs[i].length);
}
console.log(webTechsLenght);
console.log(Math.max(...webTechsLenght));
console.log(webTechs[webTechsLenght.indexOf(Math.max(...webTechsLenght))]);

/*Utiliza el array de webTechs para crear la el siguiente array de arrays:
[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
*/

const new_webTechs = [];
for(let i = 0; i<webTechs.length;i++){
    new_webTechs.push(webTechs[i], webTechs[i].length);
}

console.log(new_webTechs);

//Una aplicación creada con MongoDB, Express, React y Node se denomina MERN stack app. Crea el acrónimo MERN usando el array mernStack

const mernStack = ["MongoDB", "Express", "React", "Node"];

const mernStackNew = [];
for(let i = 0; i<mernStack.length;i++){
    mernStackNew.push(mernStack[i][0]);
}
console.log(mernStackNew.join(''));

//Iterar a través del array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] usando el bucle for o el bucle for of e imprime los elementos.
for(const element of webTechs){
    console.log(element);
}

//Este es un array de frutas, ['banana', 'orange', 'mango', 'lemon'] invierte el orden usando un bucle sin usar el método reverse().

const fruits = ['banana', 'orange', 'mango', 'lemon'];

const fruitsIverse = [];
for(let i = fruits.length-1; i>=0; i--){
    fruitsIverse.push(fruits[i]);
}
console.log(fruitsIverse);