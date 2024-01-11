//1. Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, muestre el mensaje: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18.
let edad = parseInt(prompt('Introduce tu edad'));
if(edad > 18){
    alert('Tiene la edad suficiente para conducir');
}else{
    alert(`Debes esperar ${18 - edad} años para tener 18 años y poder conducir`);
}

//2. Compara los valores de myAge y yourAge usando if... else. Según la comparación, registre el resultado en la consola indicando quién es mayor (tú o yo). Utilice prompt(“Ingrese su edad:”) para obtener la edad como entrada.
let myAge = 27;
let yourAge = parseInt(prompt('Introduce tu edad'));

if(myAge > yourAge){
    console.log('Yo soy mayor');
}else{
    console.log('Tu eres mayor');
}

/*
3. Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. Trate de implementarlo de maneras diferentes

Usando if else
operador ternario.
*/
let a = 100;
let b = 15;

if(a > b){
    console.log(`a: ${a} es mayor que b: ${b}`);
}else{
    console.log(`b: ${b} es mayor que a: ${a}`);
}

a > b ? console.log(`a: ${a} es mayor que b: ${b}`) : console.log(`b: ${b} es mayor que a: ${a}`);

//4. Los números pares son divisibles por 2 y el resto es cero. ¿Cómo verificar si un número es par o no usando JavaScript?

let x = parseInt(prompt('Introduce un numero'));

(x%2 === 0) ? console.log(`El numero ${x} es un numero par`) : console.log(`El numero  ${x} no es un numero par`);
