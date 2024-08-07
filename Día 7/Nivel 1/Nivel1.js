//Declare una funcion fullName e imprima su nombre completo

// function fullName(){
//     let firsName = "Christian";
//     let lastname = "Navarro";
//     let space = " ";
//     let fullName = firsName + space + lastname;
//     console.log(fullName);
//     //Alternativa para no usar concatenacion
//     console.log(`${firsName} ${lastname}`);
// }
// fullName();

//Declare una función fullName y ahora toma firstName, 
//lastName como parámetro y retorna su nombre completo.
function fullName(firsName, lastName){
    return `${firsName} ${lastName}`
}

console.log(fullName("Christian", "Navarro Jimenez"));

// Declare una función addNumbers que toma dos 
// parámetros y retorna la suma de ambos.
function addNumbers(a, b){
    return a + b;
}
console.log(addNumbers(4,8));

// El área de un rectángulo se calcula de la siguiente 
// manera: area = length x width. Escribe una función 
// areaOfRectangle que calcule el área de un rectángulo.
function areaOfRectangle(l, w){
    let area = 0;
    return area = l * w;
}
console.log(`El area del rectangulo es ${areaOfRectangle(5,2)}`);

// El perímetro de un rectángulo se calcula de la siguiente manera: 
// perimeter= 2x(length + width). Escribe una función perimeterOfRectangle 
// que calcule el perímetro de un rectángulo.

function perimeterOfRectangle(length, width){
    let perimeter = 0;
    return perimeter = 2*(length * width);
}
console.log(`El perimetro del rectangulo es ${perimeterOfRectangle(4, 7)}`);

//El volumen de un prisma rectangular se calcula de la siguiente manera: 
// volume = length x width x height. Escribe una función volumeOfRectPrism 
// que calcule el volumen de un prisma.
function volumeOfRectPrism(lenght, width, height){
    let volume = 0;
    return volume = lenght * width * height;
}
console.log(`El volumen del prisma rectancular es: ${volumeOfRectPrism(7,5,8)}`)

//El área de un círculo se calcula de la siguiente manera: 
//area = π x r x r. Escribe una función areaOfCircle que calcule el área de un círculo.
function areaOfCircle(radio){
    let area = Math.PI * Math.pow(radio, 2);
    return area;
}
console.log(`El area del circulo es: ${areaOfCircle(3)}`);

// La circunferencia de un círculo se calcula de la siguiente manera:
// circumference = 2πr. Escribe una función circumOfCircle que calcule 
// la circunferencia de un círculo.

function circumOfCircle(radio){
    let circunferencia = 2 * Math.PI * radio;
    return circunferencia;
}
console.log(`La circunferencia del circulo es: ${circumOfCircle(4)}`);

//La densidad de una sustancia se calcula de la siguiente manera:
//density= mass/volume. Escribe una función density que calcule la 
//densidad de una sustancia.
function density(mass, volume){
    let densidad = mass / volume;
    return densidad;
}
console.log(`La densidad de la sustancia es: ${density(98.8, 9.5)}`);

//La velocidad se calcula dividiendo el total de la distancia recorrida 
//por un objeto en movimiento entre el tiempo total. Escribe una función 
//que calcule la velocidad de un objeto en movimiento, speed.

function velocidad(distancia, timeTotal){
    let v = distancia / timeTotal;
    return v;
}
console.log(`La velocidad del objeto en movimiento es ${velocidad(1000, 28)}`);

//El peso de una sustancia se calcula de la siguiente manera: 
//weight = mass x gravity. Escribe una función weight que calcule 
//el peso de una sustancia.
function weight(mass, gravity){
    let w = mass * gravity;
    return w;
}

console.log(`El peso de la sustancia es de: ${weight(90,9.81)}`);

// La temperatura en °C se puede convertir a °F usando esta fórmula: 
//°F = (°C x 9/5) + 32. Escribe una función convertCelsiusToFahrenheit 
//que convierta °C a °F.
function convertCelsiusToFahrenheit(celsius){
    let farenheit = (celsius * (9/5) +32);
    return farenheit;
}
console.log(`La conversion de grados celsius a farenheit es ${convertCelsiusToFahrenheit(35)}`);

/*
El índice de masa corporal (IMC) se calcula de la siguiente manera: 
imc = peso en Kg / (altura x altura) en m2. 
Escribe una función que calcule imc. El IMC se utiliza para definir 
de forma amplia diferentes grupos de peso en adultos de 20 años o más. 
Compruebe si una persona tiene un peso bajo, peso normal, con sobrepeso 
u obeso según la información que se proporciona a continuación.

Se aplican los mismos parámetros de grupos tanto a hombres como a mujeres.
Peso bajo: IMC inferior a 18,5
Peso normal: IMC de 18,5 a 24,9
Sobrepeso: IMC de 25 a 29,9
Obeso: IMC es 30 o más
*/

function indiceMasaCorporal(peso, altura){
    let imc = 0;
    imc = peso / (Math.pow(altura, 2));
    if(imc < 18.5){
        console.log(`Tiene un IMC de ${imc}, tiene un peso bajo`);
    }else if(imc >= 18.5 && imc <= 24.9){
        console.log(`Tiene un IMC de: ${imc}, tiene un peso normal`);
    }else if(imc >= 25 && imc <=29.9){
        console.log(`Tiene un IMC de ${imc}, tiene sobrepeso`);
    }else{
        console.log(`Tiene un IMC de ${imc}, es una persona con obesidad`);
    }
}
indiceMasaCorporal(100, 1.7)

//Escribe una función llamada checkSeason, toma un parámetro de mes y 
//retorna la estación: Otoño, Invierno, Primavera o Verano.
function checkSeason(mes){
    if(mes == 'Diciembre' || mes == 'Enero' || mes == 'Febrero'){
        console.log('Estamos en Invierno');
    }else if(mes == 'Marzo' || mes == 'Abril' || mes == 'Mayo'){
        console.log('Estamos en Primavera')
    }else if(mes == 'Junio' || mes == 'Julio' || mes == 'Agosto'){
        console.log('Estamos en Verano');
    }else if(mes == 'Septiembre' || mes == 'Octubre' || mes == 'Noviembre'){
        console.log('Estamos en Otoño');
    }else{
        console.log('Introduce un mes correcto')
    }
}
checkSeason('Septiembre')

//Math.max retorna su argumento más grande. Escriba una función findMax 
//que tome tres argumentos y devuelva su máximo sin usar el método Math.max.
function findMax(a, b, c){
    let max = 0;
    if(a > b && a > c){
        max = a;
    }else if(b > a && b > c){
        max = b;
    }else{
        max = c;
    }
    return max;
}  
console.log(`El numero mayor entre (10,20,30) es: ${findMax(10, 20, 30)}`);
