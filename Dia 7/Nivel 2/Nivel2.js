//La ecuación lineal se calcula de la siguiente manera: ax + by + c = 0.
//Escribe una función que calcule el valor de una ecuación lineal, solveLinEquation.

function solveLinEquation(a, b, c){
    let x = 0;
    return x = (c - b) / a;
}
console.log(`El valor de la ecuacion lineal es: ${solveLinEquation(2, 3, 4)}`);


//La ecuación cuadrática se calcula de la siguiente manera: ax2 + bx + c = 0.
//Escribe una función que calcule el valor o los valores de una ecuación cuadrática, solveQuadEquation.

function solveQuadEquation(a, b, c){
    let x1 = 0;
    let x2 = 0;
    x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    console.log(`El valor de la ecuacion cuadratica es: ${x1} ${x2}`);
}
solveQuadEquation(1,7,12);

//Declare una función llamada printArray. 
//Toma un array como parámetro e imprime cada valor del array.
function printArray(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

printArray([1,2,3,4,5]);

//Declare una función llamada showDateTime que muestre la hora en 
//este formato: 01/08/2020 04:08 usando el objeto Date.
function showDateTime(){
    const fecha = new Date();
    const anio = fecha.getFullYear();
    const mes = fecha.getMonth() + 1;
    const day = fecha.getDate();
    const hour = fecha.getHours();
    const min = fecha.getMinutes();
    const sec = fecha.getSeconds();

    console.log(`${day}/${mes}/${anio} ${hour}:${min}:${sec}`);
}
showDateTime();

//Declare una función llamada swapValues. Esta función intercambia el valor de x a y.
function swapValues(x,y){
    let a = x; //Bandera auxiliar para almacenar valor de x
    x = y;
    y = a;
    console.log(`x = ${x}, y = ${y}`);
}
swapValues(4,8);

//Declare una función llamada reverseArray. Toma un array como parámetro y 
//retorna el array invertido (no use el método reverse()).
function reverseArray(array){
    let arrayReverse = [];
    for(let i = array.length-1; i >= 0; i--){
        arrayReverse.push(array[i]);
    }
    console.log(arrayReverse);
}
reverseArray(["A", "B", "C"])

//Declare una función llamada capitalizeArray. 
//Toma un array como parámetro y retorna el array - capitalizedarray
function capitalizeArray(array){
    const capitalizedarray  = [];
    for(let i = 0; i<array.length; i++){
        capitalizedarray.push(array[i].toUpperCase());
    }
    console.log(capitalizedarray);
}

capitalizeArray(['christian', 'lupita', 'karly', 'josue'])

//Declare una función llamada addItem. Toma un elemento de paŕametro 
//y retorna un array después de agregar el un elemento.
function addItem(item){
    const array = [];
    array.push(item);
    console.log(array);
}
addItem('Christian');
//Declare una función llamada removeItem. Toma como parámetro un index 
//y retorna un array después de eleminar el elemento con ese index.
function removeItem(index){
    const array = ['Christian', 'Lupita', 'Karly', 'Josue'];
    array.splice(index, 1);
    console.log(array);
}
removeItem(2);

//Declare una función llamada sumOfNumbers. Toma un número 
//como parámetro y suma todos los números en ese rango.
function sumOfNumbers(a){
    let suma = 0;
    for(let i = 0; i <= a; i++){
        suma += i;
    }
    console.log(suma)
}
sumOfNumbers(5)

//Declare una función llamada sumOfOdds. Toma un parámetro 
//numérico y suma todos los números impares en ese rango.
function sumOfOdds(a){
    let sumaImpar = 0;
    for(let i = 0; i <= a; i++){
        if(i % 2 !== 0){
            sumaImpar += i;
          }
    }
    console.log(sumaImpar);
}
sumOfOdds(13);

//Declare una función llamada sumOfEven. Toma un parámetro 
//numérico y suma todos los números pares en ese rango.
function sumOfEven(a){
    let sumaImpar = 0;
    for(let i = 0; i <= a; i++){
        if(i % 2 == 0){
            sumaImpar += i;
          }
    }
    console.log(sumaImpar);
}
sumOfEven(14);

//Declare una función llamada evensAndOdds . Toma un entero 
//positivo como parámetro y cuenta el número de pares e impares.
function evensAndOdds(a){
    let countPar = 0;
    let countImpar = 0;
    for(let i = 0; i <= a; i++){
        if(i % 2 == 0) 
            countPar++;
        else countImpar++;
    }
    console.log(`Numeros pares ${countPar} Numeros impares ${countImpar}`);
}
evensAndOdds(10);

//Escriba una función que tome cualquier número de argumentos 
//y retorne la suma de los argumentos
function sumaArguments(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}
console.log(sumaArguments(1,2,3,4,5,6,7,8,9,10))

//Escriba una función randomUserIp que genere una ip de usuario aleatoria.
function randomUserIp(){
    let ip = '';
    for(let i = 0; i < 4; i++){
        ip += Math.floor(Math.random() * 256) + '.';
    }
    return ip.slice(0, ip.length-1);
}
console.log(randomUserIp());

//Escriba una función randomMacAddress que genere una dirección mac aleatoria.
function randomMacAddress(){
    let mac = '';
    for(let i = 0; i < 6; i++){
        mac += Math.floor(Math.random() * 256).toString(16) + ':';
    }
    return mac.slice(0, mac.length-1);
}
console.log(randomMacAddress());

//Declare una función llamada randomHexaNumberGenerator. Cuando se 
//llama a esta función, genera un número hexadecimal aleatorio. 
//La función retorna el número hexadecimal.
function randomHexaNumberGenerator(){
    let hexa = '#';
    const hexaNumber = '0123456789abcdef';
    for(let i = 0; i < 6; i++){
        hexa += hexaNumber[Math.floor(Math.random() * 16)];
    }
    return hexa;
}
console.log(randomHexaNumberGenerator());

//Declare una función llamada userIdGenerator. Cuando se llama a esta función,
//genera un id de siete caracteres. La función devuelve el id.
function userIdGenerator(){
    let hexa = '';
    const hexaNumber = '0123456789ABCDEF';
    for(let i = 0; i < 6; i++){
        hexa += hexaNumber[Math.floor(Math.random() * 16)];
    }
    return hexa;
}
console.log(userIdGenerator());
