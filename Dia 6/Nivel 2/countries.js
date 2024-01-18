export const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]

  //Copia el array countries (Evita mutaciones)
  //Los arrays son mutables. Crea una copia del array que no modifique el original. Ordena la copia del array y guárdala en una variable sortedCountries
  //Ordena el array webTechs y el array mernStack
  //Extrae todos los países que contengan la palabra 'land' del array countries e imprimela como un array
  //Encuentra el país que contiene la mayor cantidad de caracteres en el array countries
  //Extrae todos los países que contienen la palabra 'land' del array countries e imprimela como un array
  //Extrae todos los países que contengan solo cuatro caracters del array countries e impremela como un array
 // Extrae todos los paíse que contengan dos o más palabras del array countries e imprimela como un array
 // Invertir el array countries y poner en mayúscula cada país y almacenalo en un array

//Copia el array countries (Evita mutaciones)
const countriesCopy = [...countries];
console.log(countriesCopy);

//Los arrays son mutables. Crea una copia del array que no modifique el original. Ordena la copia del array y guárdala en una variable sortedCountries
const sortedCountries = countriesCopy.sort();
console.log(sortedCountries);

//Ordena el array webTechs y el array mernStack
import {webTechs} from './web_techs.js';
console.log(webTechs);
console.log(webTechs.sort());
const mernStack = ["MongoDB", "Express", "React", "Node"];
console.log(mernStack);
console.log(mernStack.sort());

//Extrae todos los países que contengan la palabra 'land' del array countries e imprimela como un array
const countriesLand = [];
for(let i = 0; i < countries.length; i++){
    if(countries[i].includes('land')){
        countriesLand.push(countries[i]);
    }
}

console.log(countriesLand);

//Encuentra el país que contiene la mayor cantidad de caracteres en el array countries
const countriesLenght = [];
for(let i = 0; i < countries.length; i++){
    countriesLenght.push(countries[i].length);
}
console.log(countriesLenght);
console.log(Math.max(...countriesLenght));
console.log(countries[countriesLenght.indexOf(Math.max(...countriesLenght))]);

//Extrae todos los países que contienen la palabra 'land' del array countries e imprimela como un array
const countriesLand1 = [];
for(let i = 0; i < countries.length; i++){
    if(countries[i].includes('land')){
        countriesLand1.push(countries[i]);
    }
}
console.log(countriesLand1);

//Extrae todos los países que contengan solo cuatro caracters del array countries e impremela como un array
const countriesFour = [];
for(let i = 0; i < countries.length; i++){
    if(countries[i].length == 4){
        countriesFour.push(countries[i]);
    }
}
console.log(countriesFour);

//Extrae todos los paíse que contengan dos o más palabras del array countries e imprimela como un array
const countriesTwo = [];
for(let i = 0; i < countries.length; i++){
    if(countries[i].includes(' ')){
        countriesTwo.push(countries[i]);
    }
}
console.log(countriesTwo);

//Invertir el array countries y poner en mayúscula cada país y almacenalo en un array
const countriesReverse = [];
for(let i = countries.length-1; i >= 0; i--){
    countriesReverse.push(countries[i].toUpperCase());
}
console.log(countriesReverse);


