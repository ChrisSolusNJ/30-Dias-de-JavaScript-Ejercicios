import {countries} from './countries.js';
import { webTechs, mernStack } from './web_techs.js';

//1. Copia el array countries (Evita mutaciones)
const newCountries = [...countries];
console.log(newCountries);

//2. Los arrays son mutables. Crea una copia del array que no modifique el original. Ordena la copia del array y guárdala en una variable sortedCountries
const sortedCountries = newCountries.sort();
console.log(sortedCountries);

//Ordena el array webTechs y el array mernStack
console.log(webTechs.sort());
console.log(mernStack.sort());

//Extrae todos los países que contengan la palabra 'land' del array countries e imprimela como un array
const countriesLand = [];
for(let i = 0; i<countries.length;i++){
    if(countries[i].includes('land')){
        countriesLand.push(countries[i]);
    }
}
console.log(countriesLand);

//Encuentra el país que contiene la mayor cantidad de caracteres en el array countries
const countriesLenghtMax = [];
for(let i = 0; i < countries.length; i++){
    countriesLenghtMax.push(countries[i].length);
}
console.log(countries[countriesLenghtMax.indexOf(Math.max(...countriesLenghtMax))]);

//Extrae todos los países que contengan solo cuatro caracters del array countries e impremela como un array
const countriesFour = [];
for(let i = 0; i < countries.length; i++){
    if(countries[i].length == 4)
        countriesFour.push(countries[i])
}

console.log(countriesFour);

//Extrae todos los países que contengan dos o más palabras del array countries e imprimela como un array
const countriesTwo = [];
for(let i = 0; i < countries.length; i++){
    if(countries[i].includes(' '))
        countriesTwo.push(countries[i]);
}
console.log(countriesTwo);

//Invertir el array countries y poner en mayúscula cada país y almacenalo en un array
const countriesInverse = [];
for(let i = countries.length-1; i >= 0; i--){
    countriesInverse.push(countries[i].toUpperCase());
}
console.log(countriesInverse);