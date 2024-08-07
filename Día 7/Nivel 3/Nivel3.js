/* 
Modifique la función userIdGenerator. Declare una función de 
nombre userIdGeneratedByUser. No toma ningún parámetro 
pero toma dos entradas usando prompt(). 
Una de las entradas es la cantidad de caracteres 
y la segunda entrada es la cantidad de ID 
que se supone que se generarán.
*/
// function userIdGeneratedByUser(){
//     const caracteres = parseInt(prompt('Introduce el numero de caracteres'));
//     const cantidad = parseInt(prompt('Introduce el numero de ids que se generaran'));
//     let id = '';
//     const letras = 'abcdefghijklmnopqrstuvwxyz0123456789';
//     for(let i = 0; i < cantidad; i++){
//         for(let j = 0; j < caracteres; j++){
//             id += letras[Math.floor(Math.random() * 36)];
//         }
//         console.log(id);
//         id = '';
//     }
// }
// userIdGeneratedByUser();

//Escriba una función llamada rgbColorGenerator que genera colores rgb
function rgbColorGenerator(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    console.log(`RGB(${red}, ${green}, ${blue})`);
}
rgbColorGenerator()

//Escriba una función arrayOfHexaColors que retorna cualquier 
//cantidad de colores hexadecimales en un array.
function arrayOfHexaColors(n){
    const colorHexa = [];
    for(let i = 0; i < n; i++){
        colorHexa.push('#'+Math.random().toString(16).substring(8))
    }
    console.log(colorHexa);
}
arrayOfHexaColors(5);

//Escriba una función arrayOfRgbColors que retorna cualquier 
//cantidad de colores RGB en un array.
function arrayOfRgbColors(n){
    const colorRGB = [];
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    for(let i = 0; i < n; i++){
        colorRGB.push(`RGB(${red}, ${green}, ${blue})`);
    }
    console.log(colorRGB);
}
arrayOfRgbColors(8);

//Escriba una función convertHexaToRgb que convierta el 
//color hexa a rgb y retorna un color rgb.
function convertHexaToRgb(hexa){
    let red = parseInt(hexa.slice(1,3), 16);
    let green = parseInt(hexa.slice(3,5), 16);
    let blue = parseInt(hexa.slice(5,7), 16);
    console.log(`RGB(${red}, ${green}, ${blue})`);
}
convertHexaToRgb('#ffffff');

//Escriba una función convertRgbToHexa que convierta rgb 
//a color hexa y retorna un color hexa.
function convertRgbToHexa(rgb){
    let red = rgb.slice(4, rgb.indexOf(','));
    let green = rgb.slice(rgb.indexOf(',')+2, rgb.lastIndexOf(','));
    let blue = rgb.slice(rgb.lastIndexOf(',')+2, rgb.length-1);
    console.log(`#${parseInt(red).toString(16)}${parseInt(green).toString(16)}${parseInt(blue).toString(16)}`);
}
convertRgbToHexa('RGB(255, 255, 255)');

/*Escriba una función generateColors que pueda 
generar cualquier número de colores hexa o rgb.
console.log(generateColors("hexa", 3)); // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors("hexa", 1)); // '#b334ef'
console.log(generateColors("rgb", 3)); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors("rgb", 1)); // 'rgb(33,79, 176)'
*/
function generateColors(type, n){
    const colors = [];
    if(type === 'hexa'){
        for(let i = 0; i < n; i++){
            colors.push('#'+Math.random().toString(16).substring(8));
        }
    }else if(type === 'rgb'){
        let red = Math.floor(Math.random()*256);
        let green = Math.floor(Math.random()*256);
        let blue = Math.floor(Math.random()*256);
        for(let i = 0; i < n; i++){
            colors.push(`RGB(${red}, ${green}, ${blue})`);
        }
    }
    console.log(colors);
}
generateColors('hexa', 5);
generateColors('rgb', 5);

//Llame a su función shuffleArray, toma un array como 
//parámetro y devuelve un array mezclada
function shuffleArray(array){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray.push(array.splice(Math.floor(Math.random() * array.length), 1));
    }
    console.log(newArray);
}
shuffleArray([1,2,3,4,5,6,7,8,9,10]);

//Llame a su función factorial, toma un número entero 
//como parámetro y devuelve un factorial del número.
function factorial(n){
    let fact = 1;
    for(let i = 1; i <= n; i++){
        fact = fact*i;
    }
    console.log(fact);
}
factorial(5);

//Llame a su función isEmpty, toma un parámetro 
//y verifica si está vacío o no.
function isEmpty(a){
    if(a.length === 0){
        console.log('Esta vacio');
    }else{
        console.log('No esta vacio');
    }
}
isEmpty([]);

//Llame a su función sum, toma cualquier cantidad 
//de argumentos y devuelve la suma.
function sumaArguments(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}
console.log(sumaArguments(1,2,3,4,5,6,7,8,9,10))

//Escriba una función llamada sumOfArrayItems, toma un array 
//como parámetro y retorna la suma de todos los elementos. 
//Compruebe si todos los elementos de la matriz son tipos de números. 
//Si no, dé una respuesta razonable. Comprobar si es numero si no no realizar la suma 
function sumOfArrayItems(arr){
    let suma = 0;
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'number'){
            suma += arr[i];
            
        }else{
            console.log('Hay un elemento que no es un numero')
        }
    }
      
}
sumOfArrayItems([1,2,3,4,'jola'])

//Escribe una función llamada average, toma un array como 
//parámetro y retorna el promedio de los elementos. Compruebe si 
//todos los elementos de la matriz son tipos de números. Si no, 
//dé una respuesta adecuada.
function average(arr){
    let suma = 0;
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'number'){
            suma += arr[i];
        }else{
            console.log('Hay un elemento que no es un numero')
        }
    }
    console.log(`Promedio de los elementos del arreglo ${suma/arr.length}`);
}
average([1,2,3,4,5,6,7,8,9,10]);

//Escriba una función llamada modifyArray que tome un array 
//como parámetro y modifique el quinto elemento del array 
//y retorna el array. Si la longitud del array es inferior a cinco, 
//retorna 'elemento no encontrado'.
function modifyArray(arr){
    if(arr.length < 5){
        console.log('Elemento no encontrado');
    }else{
        arr[4] = arr[4].toUpperCase();
        console.log(arr);
    }
}
modifyArray(['hola', 'que', 'tal', 'estas', 'tu', '?']);

//Escribe una función llamada isPrime, que verifica si un 
//número es un número primo.
function isPrime(n){
    let primo = true;
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            primo = false;
        }
    }
    if(primo){
        console.log(`${n} es primo`);
    }else{
        console.log(`${n} no es primo`);
    }
}
isPrime(4);

//Escriba una función que verifique si todos los elementos son únicos en un array.
function isUnique(arr){
    let unico = true;
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                unico = false;
            }
        }
    }
    if(unico){
        console.log('Todos los elementos son unicos');
    }else{
        console.log('Hay elementos repetidos');
    }
}
isUnique([1,2,3,4,5,6,7,8,9,10]);

//Escriba una función que verifique si todos los elementos de un array son del mismo tipo de datos.
function isSameDataType(arr){
    let mismoTipo = true;
    for(let i = 0; i < arr.length - 1; i++){
        if(typeof arr[i] !== typeof arr[i+1]){
            mismoTipo = false;
            break; // Puedes salir del bucle tan pronto como encuentres elementos de distinto tipo
        }
    }
    if(mismoTipo){
        console.log('Todos los elementos son del mismo tipo');
    } else {
        console.log('Hay elementos de distinto tipo');
    }
}
isSameDataType([1,2,3,4,5,6,7,8,9,10,]);

//El nombre de las variables de JavaScript no admite caracteres o 
//símbolos especiales, excepto $ o _. Escriba una función 
//isValidVariable que verifique si una variable es válida o inválida.
function isValidVariable(variable){
    if(variable[0] === '$' || variable[0] === '_'){
        console.log('Variable valida');
    }else{
        console.log('Variable invalida');
    }
}
const $ff = 'hg';
isValidVariable($ff);

//Escriba una función que devuelva un array de siete números 
//aleatorios en un rango de 0-9. Todos los números deben ser únicos.
function sevenRandomNumbers(){
    const arr = [];
    while(arr.length < 7){
        let num = Math.floor(Math.random()*10);
        if(!arr.includes(num)){
            arr.push(num);
        }
    }
    console.log(arr);
}
sevenRandomNumbers();