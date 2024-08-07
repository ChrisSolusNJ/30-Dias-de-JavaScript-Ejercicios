/*
1. El siguiente es un array de 10 edades de estudiantes:
```js
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
```

- Ordene el array y encuentre la edad mínima y máxima
- Encuentre la edad media (un elemento intermedio o dos elementos intermedios divididos por dos)
- Encuentre la edad promedio (todos los elementos divididos por el número de elementos)
- Encuentre el rango de las edades (max menos min)
- Compare el valor de (mín - promedio) y (máx - promedio), use el método _abs()_
*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//Ordene el array y encuentre la edad mínima y máxima
console.log(ages.sort());

//Encuentre la edad mínima y máxima
let edadMinima = ages[0];
console.log(`La edad minima es: ${edadMinima}`);
let edadMaxima =  ages[ages.length-1]
console.log(`La edad maxima es: ${edadMaxima}`);

//- Encuentre la edad media (un elemento intermedio o dos elementos intermedios divididos por dos)

let middle = Math.floor(ages.length/2);
console.log(`La edad media es: ${ages[middle]}`);

let suma = 0;
for(let i = 0; i < ages.length; i++){
    suma += ages[i];
}

let promedio = suma / ages.length;
console.log(`El promedio es: ${promedio}`)

//Encuentre el rango de las edades (max menos min)
let rango = edadMaxima - edadMinima;
console.log(`El rango de las edades es ${rango}`)

//Compare el valor de (mín - promedio) y (máx - promedio), use el método _abs()_
let restaMin = Math.abs(edadMinima - promedio);
let restaMax = Math.abs(edadMaxima - promedio);
console.log(`La resta de la edad minima y el promedio es: ${restaMin}`);
console.log(`La resta de la edad maxima y el promedio es: ${restaMax}`);


