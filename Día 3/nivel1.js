//1. Declare las siguientes variables; firstName, lastName, country, city, age, isMarried, year y asignar un valor, use el operador typeof para verificar diferentes tipos de datos
let firstName = "Christian";
let lastName = "Navarro";
let country = "Mexico";
let city = "Mexico City";
let age = 27;
let isMarried = false;

console.log(typeof(firstName) === "string");
console.log(typeof(lastName) === "string");
console.log(typeof(country) === "string");
console.log(typeof(city) === "string");
console.log(typeof(age) === "number");
console.log(typeof(isMarried) === "boolean");

//2. Verifique si typeof '10' es igual a 10
console.log(typeof('10') === 10);

//3 Verifique si parseInt('9.8') es igual a 10
console.log(typeof(parseInt('9.8')) === 10);

/*
Verifique cualquier valor booleano true o false.
Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.
Escriba tres declaraciones de JavaScript que proporcionen un valor falso.
*/
console.log(5<8);
console.log(10 === parseInt('10'));
console.log(3 !== '3');

console.log(2 > 8);
console.log(2 === '2')
console.log(3 !== parseInt('3'));

/* 
Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()

4 > 3 = true
4 >= 3 = true
4 < 3 = false
4 <= 3 = false
4 == 4 = true
4 === 4 = true
4 != 4 = false
4 !== 4 = false
4 != '4' = true
4 == '4' = true
4 === '4' = false
Encuentre la longitud de Python y jargon y haga una declaración de comparación falsa.
*/
const p = 'Python';
const j = 'jargon';
console.log( p.length !== j.length);

/* 
Calcule primero el resultado de las siguientes expresiones sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()

4 > 3 && 10 < 12 = true
4 > 3 && 10 > 12 = false
4 > 3 || 10 < 12 = true
4 > 3 || 10 > 12 = true
!(4 > 3) = false
!(4 < 3) = true
!(false) = true
!(4 > 3 && 10 < 12) = false
!(4 > 3 && 10 > 12) = true
!(4 === '4') = true
No hay 'on' tanto en dragon como en python
*/
console.log(!(p.includes('on') && j.includes('on')) ? `Si hay 'on' en ${p} y en ${j}` : `No hay 'on' en ${p} y en ${j}`  )

/* 
Utilice el objeto Date para realizar las siguientes actividades

¿Qué año es hoy?
¿Qué mes es hoy con un número?
¿Qué fecha es hoy?
¿Qué día es hoy con un número?
¿Cuál es la hora actual?
¿Cuántos minutos hay actualmente?
Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.
*/
const tiempo = new Date();
console.log(`¿Qué año es hoy?\nEs el año  ${tiempo.getFullYear()}` );
console.log(`¿Qué mes es hoy con un número?\nEs el mes numero. ${tiempo.getMonth()}` );
console.log(`¿Qué fecha es hoy?\nHoy es: ${tiempo}` );
console.log(`¿Qué día es hoy con un número?\nHoy es el dia numero: ${tiempo.getDay()}` );
console.log(`¿Cuál es la hora actual?\nLa hora actual es ${tiempo.getHours()}:${tiempo.getMinutes()}:${tiempo.getSeconds()}`)

//¿Cuántos minutos hay actualmente?
console.log(`¿Cuántos minutos hay actualmente?\nHan pasado ${tiempo.getMinutes()} minutos desde las 00:00`)
console.log(`Han pasado ${tiempo.getTime()} desde el 1 de enero de 1970`)

