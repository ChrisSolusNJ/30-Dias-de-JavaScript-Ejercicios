//Cuente el numero de la palabra 'amor' en la siguiente oracion
const oracion = 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor';
//Expresion regular, busca la palabra amor, g indica busqueda global e i es insensible a mayusculas y minusculas
const regex = /amor/gi;
const found = oracion.match(regex);
console.log(found.length);

//Limpia el siguiente texto y encuentra la palabra más frecuente (pista, usa replace y expresiones regulares). const sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

const sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
//Expresion regular, busca los caracteres especiales y los reemplaza por un espacio en blanco
const regex2 = /[%$@&#!?;]/gi;
const found2 = sentence.replace(regex2, '');
console.log(found2);
//Separa cada palabra en un array
const array = found2.split(' ');
console.log(array);
//Crea un objeto vacio
const obj = {};
//Recorre el array y cuenta las palabras
array.forEach(element => {
    if (obj[element] === undefined) {
        obj[element] = 1;
    } else {
        obj[element] += 1;
    }
});
console.log(obj);
//Busca la palabra mas repetida
let max = 0;
let palabra = '';
for (const key in obj) {
    if (obj[key] > max) {
        max = obj[key];
        palabra = key;
    }
}
console.log(palabra);

/*
Calcula el ingreso anual total de la persona extrayendo los números del siguiente texto. 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.'
*/
const texto = 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.';
//Expresion regular, busca los numeros
const regex3 = /\d+/g;
const found3 = texto.match(regex3);
console.log(found3);
//Suma los numeros
let suma = 0;
found3.forEach(element => {
    suma += parseInt(element);
});
console.log(suma);



