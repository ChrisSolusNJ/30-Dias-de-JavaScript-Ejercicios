//Ordena los países por nombre
import {countries_data} from './countries_data.js'

const ordenarPaises = paises => paises.sort((a, b) => a.name.localeCompare(b.name))
console.log(ordenarPaises(countries_data));

//Encuentre las 10 lenguas más habladas:
const mostSpokenLanguages = (paises, num) => {
    const lenguas = {};
    paises.forEach(pais => {
        pais.languages.forEach(lengua => {
            lenguas[lengua] = lenguas[lengua] ? lenguas[lengua] + 1 : 1;
        })
    })
    return Object.entries(lenguas).sort((a, b) => b[1] - a[1]).slice(0, num).map(lengua => ({lengua: lengua[0], count: lengua[1]}))
}
console.log(mostSpokenLanguages(countries_data, 10))

//Crear una función que cree los diez países más poblados
const mostPopulatedCountries = (paises, num) => paises.sort((a, b) => 
            b.population - a.population).slice(0, num).map(pais => 
            ({country: pais.name, population: pais.population}))
console.log(mostPopulatedCountries(countries_data, 10))