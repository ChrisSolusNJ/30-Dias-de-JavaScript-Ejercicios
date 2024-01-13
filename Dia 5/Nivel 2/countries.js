const paises = ['Mexico', 'Alemania', 'Brasil', 'Canada', 'Estados Unidos', 'Francia', 'Italia', 'Japon', 'Rusia', 'España'];
console.log(paises);

//4. En el array de países, verifique si 'Ethiopia' existe en el array si existe, imprima 'ETHIOPIA'. Si no existe agregar a la lista de países.

paises.includes("Ethiopia") ? console.log('ETHIOPIA') : paises.push("Ethiopia");