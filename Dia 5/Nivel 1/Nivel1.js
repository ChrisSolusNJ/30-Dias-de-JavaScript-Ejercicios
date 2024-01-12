//1. Declare un array vacio
const primerArray = []; //Metodo convencional para declarar un array
const segundoArray = new Array(); //Metodo para crear un array desde un constructor
console.log(primerArray); 
console.log(segundoArray);

//2. Declara un array com mas de 5 elementos.
const elementos = ['Helio', 'Zinc', 'Hierro', 'Potasio', 'Nitrogeno', 'Sodio', 'Neon'];

//3. Encuentra la longitud de tu array.
console.log(`La longitud del array elementos es ${elementos.length}`);

//4. Obtenga el primer elemento, el elemento del medio y el último elemento de un array.
console.log(`El primer elemento del array elementos es ${elementos[0]}`);
console.log(`El elemento del medio del array elementos es ${elementos[Math.floor(elementos.length/2)]}`);
console.log(`El ultimo elemento del array elementos es ${elementos[elementos.length-1]}`);

//5. Declara un array llamado mixedDataTypes, coloque diferentes tipos de datos en el array y encuentre la longitud del array. El tamaño del array debe ser mayor que 5.
const mixedDataTypes = [5, 'Christian', true, null, 'hola', 78.9];
console.log(mixedDataTypes);
console.log(`El tamaño del array mixedDataTypes es de ${mixedDataTypes.length}`);

//6. Declare un variable array de nombre itCompanies y asignarles valores iniciales Facebook, Google, 
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//7. Imprima el array usando console.log().
console.log(itCompanies);

//8. Imprima el número de empresas en el array.
console.log(`El numero de empresas en el array itCompanies es ${itCompanies.length}`);

//9. Imprime la primer empresa , la intermedia y la última empresa
console.log(`La primer empresa es: ${itCompanies[0]}`);
console.log(`La empresa de en medio es: ${itCompanies[Math.floor(itCompanies.length/2)]}`);
console.log(`La ultima empresa es: ${itCompanies[itCompanies.length-1]}`);

//10. Imprime cada empresa.
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

//11. Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos.
console.log(`${itCompanies[0].toUpperCase()}`);
console.log(`${itCompanies[1].toUpperCase()}`);
console.log(`${itCompanies[2].toUpperCase()}`);
console.log(`${itCompanies[3].toUpperCase()}`);
console.log(`${itCompanies[4].toUpperCase()}`);
console.log(`${itCompanies[5].toUpperCase()}`);
console.log(`${itCompanies[6].toUpperCase()}`);

//12. Imprime el array como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.
const oracion = itCompanies.slice(0, -1).join(', ') + ' y ' + itCompanies.slice(-1)[0];
console.log(`${oracion} son grandes empresas de TI`);

//13. Compruebe si existe una determinada empresa en el array itCompanies. Si existe, retorna la empresa; de lo contrario, retorna la empresa no existe
const empresaIncluida = prompt('Introduce el nombre de una empresa para ver si esta incluida');

itCompanies.includes(empresaIncluida) ? console.log(`${empresaIncluida} si esta en el array`) : console.log(`La empresa ${empresaIncluida} no existe en el array`);

// 14. Filtre las empresas que tienen más de una 'o' sin el método filter(). No usar filter
const empresasConMasDeUnaO = [];
for (let i = 0; i < itCompanies.length; i++) {
    let contador = 0;
    for (let j = 0; j < itCompanies[i].length; j++) {
        if (itCompanies[i][j] === 'o') {
            contador++;
        }
    }
    if (contador > 1) {
        empresasConMasDeUnaO.push(itCompanies[i]);
    }
}
console.log(empresasConMasDeUnaO);

// 15. Ordene el array usando el método sort()
console.log(itCompanies.sort());

// 16. Invierte la array usando el método reverse()
console.log(itCompanies.reverse());

//17. Cortar las primeras 3 empresas del array
console.log(itCompanies.reverse().slice(0,3));

//18. Cortar las últimas 3 empresas del array
console.log(itCompanies.slice(4,7));

//19. Cortar la empresa o empresas intermedias de TI del array
console.log(itCompanies.slice(1,4));

//20. Eliminar la primera empresa de TI del array
console.log(itCompanies.shift());

//21. Eliminar la empresa o empresas intermedias de TI del array
console.log(itCompanies.splice(1,2));

//22. Elimine la última empresa de TI del array
console.log(itCompanies.pop());

//23. Eliminar todas las empresas de TI
console.log(itCompanies.splice(0,3));

