const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
  ];
  
  const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
  ];
  
const mernStack = ["MongoDB", "Express", "React", "Node"];

//1. Itera de 0 a 10 usando el bucle for, haga lo mismo usando los bucles while y do while
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

let j = 0;
do {
    console.log(j);
    j++;
} while (j <= 10);

//2. Itera de 10 a 0 usando el bucle for, haga lo mismo usando los bucles while y do while
for(let x = 10; x >= 0; x--){
  console.log(x);
}

let x = 10;
while(x >= 0){
  console.log(x);
  x--;
}

let z = 10;
do{
  console.log(z);
  z--;
}while(z >= 0);

//Itera de 0 a n usando el bucle for

// const n = parseInt(prompt('Introduce el valor de n, que sera el numero de iteraciones'));

// for(let y = 0; y<=n; y++){
//   console.log(y);
// }

//Escribe un bucle que haga el siguiente patrón usando console.log()
//#
//##
//###
//####
//#####
//######
//#######

let patron = '';
for(let i = 0; i < 7; i++){
  patron += '#';
  console.log(patron);
}

/*
Usa un bucle para imprimir el siguiente patrón:
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/

for(let i = 0; i<=10; i++){
  console.log(`${i} x ${i} = ${i*i}`)
}

/*
Usando un bucle imprime el siguiente patrón:
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
*/
console.log('i    i^2   i^3');
for(let i = 0; i <= 10; i++){
  console.log(`${i}    ${i*i}   ${Math.pow(i,3)}`);
}

//Usa el bucle for para iterar de 0 a 100 e imprima solo números pares
for(let i = 0; i <= 100; i++){
  if(i % 2 ===0){
    console.log(i)
  }
}

//Usa el bucle for para iterar de 0 a 100 e imprima solo números impares
for(let i = 0; i <= 100; i++){
  if(i % 2 !== 0){
    console.log(i)
  }
}

//Usa el bucle for para iterar de 0 a 100 e imprima solo los números primos
for(let i = 2; i <= 100; i++){
  if(i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0){
    console.log(i)
  }
}

//Usa el bucle for para iterar de 0 a 100 e imprima la suma de todos los números.
let suma = 0;
for(let i = 0; i <= 100; i++){
  suma += i;
  console.log(suma);
}

//Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares.
let sumaPares = 0;
let sumaImpares = 0;
for(let i = 0; i <= 100; i++){
  if(i % 2 === 0){
    sumaPares += i;
  }else{
    sumaImpares += i;
  }
}
console.log(`La suma de todos los numeros pares de 0 a 100 es ${sumaPares}. Y la suma de todos los numeros imapres de 0 a 100 es ${sumaImpares}`);

//Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares. Imprimir suma de pares y suma de impares como un array
console.log(`[${sumaPares}, ${sumaImpares}]`);

//Desarrolla un pequeño script que genera una matriz de 5 números aleatorios
const num_ale = [];
for(let i = 0; i<5; i++){
  num_ale.push(Math.floor(Math.random()*100));
}
console.log(num_ale);


//Desarrolla un pequeño script que genera una matriz de 5 números aleatorios. Los números debe ser únicos
const num_ale2 = [];
for(let i = 0; i<5; i++){
  let num = Math.floor(Math.random()*100);
  if(!num_ale2.includes(num)){
    num_ale2.push(num);
  }
}
console.log(num_ale2);

//Desarrolla un pequeño script que genera un id aleatorio de seis caracteres:
//5j2khz

const letras = 'abcdefghijklmnopqrstuvwxyz123456789';
let id = '';
for(let i = 0; i < 6; i++){
  id += letras[Math.floor(Math.random()*letras.length)];
}
console.log(id);