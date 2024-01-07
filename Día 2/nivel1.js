//Declaración de variable desafio
let desafio = "30 días de JavaScript";

//Imprimir cadena en consola
console.log(desafio);

//Imprimir longitud de la cadena
console.log(desafio.length);

//Cambiar caracteres a mayusculas
console.log(desafio.toUpperCase());

//Cambiar caracteres a minusculas
console.log(desafio.toLowerCase());

//Cortar la primer palabra
console.log(desafio.substring(3,7));

//Cortar una frase
console.log(desafio.substring(3,8));

//Cortar la frase "días de JavaScript"
console.log(desafio.substring(3,21));

//Verificar si contiene la palabra "Script"
console.log(desafio.includes("Script"));

//Dividir en un array
console.log(desafio.split(" "));

//Dividir la cadena 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' por la ,
let cadena = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(cadena.split(","));

//Cambiar 30 dias de JavaScript a 30 dias de Python
console.log(desafio.replace("JavaScript", "Python"));

//Ver cual es el caracter no 15 en la cadena desafio
console.log(desafio.charAt(15));

//Codigo ASCII de la letra J
console.log(desafio.charCodeAt("J"));

//Determinar la primera posicion de la letra 'a'
console.log(desafio.indexOf('a'));

//Determinar la ultima posicion de la letra 'a'
console.log(desafio.lastIndexOf('a'));

//Determinar la primera aparicion de la palabra porque en la siguiente oracion
let cadena1 = 'No puedes terminar una oración con porque porque porque es una conjunción';
console.log(cadena1.indexOf('porque'));

//Determinar la ultima aparicion de la palabra porque en la frase anterior
console.log(cadena1.lastIndexOf('porque'));

//Determinar la posicion de la primera aparicion de la palabra proque con search en la frase anterior
console.log(cadena1.search('porque'));

//Eliminar los espacios al principio y al final de la siguiente cadena
let cadena2 = "          Soy un desarrollador web novato          ";
console.log(cadena2);
console.log(cadena2.trim());

//Verificar si la cadena '30 días de JavaScript' inicia con '30'
console.log(desafio.startsWith('30'));

//Verificar si la cadena '30 días de JavaScript' termina con 'JavaScript'
console.log(desafio.endsWith('JavaScript'));

//Encontrar todas las letras 'a' en '30 días de JavaScript'
console.log(desafio.match('a'));

//Fusionar las cadenas '30 dias de' y 'JavaScript' en una sola cadena
let c1 = '30 días de ';
let c2 = "JavaScript";
console.log(c1.concat(c2));

//Repetir '30 días de JavaScript' 2 veces
console.log(desafio.repeat(2));