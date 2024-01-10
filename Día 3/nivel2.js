//1. Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 x b x h).

const base = prompt('Introduce la base del triángulo');
const altura = prompt('Introduce la altura del triángulo');
const area = (base*altura) / 2;
alert(`La altura del triangulo con base ${base} y altura ${altura} es: ${area}`)

//2. Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)

const a = prompt('Introduce el lado a del triangulo');
const b = prompt('Introduce el lado b del triángulo');
const c = prompt('Introduce el lado c del triangulo');
const perimetro = parseInt(a) + parseInt(b) + parseInt(c);
alert(`El perimetro del triangulo con el lado a = ${a}, b = ${b}, c = ${c}, es igual a perimetro = ${perimetro}`);

//3. Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho))

const lar = prompt('Introduce el largo del rectangulo');
const anch = prompt('Introduce el ancho del rectangulo');
const areaRectangulo = parseInt(lar) * parseInt(anch);
const perimetroRectangulo = 2 * (parseInt(lar) * parseInt(anch));

alert(`El area del rectagulo es ${areaRectangulo}, y su perimetro es ${perimetroRectangulo}`);

//4. Obtenga el radio usando prompt y calcule el área de un círculo (área = pi x r x r) y la circunferencia de un círculo (c = 2 x pi x r) donde pi = 3.14.
const radio = parseInt(prompt('Introduce el radio del circulo'));
const areaCirculo = Math.PI * Math.pow(radio, 2);
const circunferencia = 2 * Math.PI * radio;
alert(`El area del circulo de radio = ${radio} es: ${areaCirculo}`);
alert(`La circunferencia del circulo de radio = ${radio} es: ${circunferencia}`);

//5. Calcule la pendiente, la intersección X y la intersección Y de y = 2x -2
const pendiente = 2;
const interseccionY = -2;
const interseccionX = interseccionY / pendiente;
alert(`La pendiente de la recta es ${pendiente}, la interseccion Y es ${interseccionY} y la interseccion X es ${interseccionX}`);

//6. La pendiente es m = (y2-y1)/(x2-x1). Encuentra la pendiente entre el punto (2, 2) y el punto (6,10)
const x1 = 2;
const y1 = 2;
const x2 = 6;
const y2 = 10;
const pendiente2 = (y2-y1)/(x2-x1);
alert(`La pendiente entre los puntos (${x1},${y1}) y (${x2},${y2}) es: ${pendiente2}`);

//7. Compare la pendiente de las dos preguntas anteriores.
alert(`La pendiente de la recta y = 2x -2 es ${pendiente}, y la pendiente entre los puntos (${x1},${y1}) y (${x2},${y2}) es: ${pendiente2}`);

//8. Calcula el valor de y (y = x2 + 6x + 9). Trate de usar diferentes valores de x y averigüe en qué valor de x y e
const x = 2;
const y = Math.pow(x,2) + 6 * x + 9;
alert(`El valor de y es: ${y}`);

//9. Escriba un script con prompt que solicite al usuario que ingrese las horas y la tarifa por hora. ¿Calcular el salario de la persona?
const horasTrabajadas = parseInt(prompt('Introduce las horas totales trabajadas'));
const tarifaHora = parseInt(prompt('Introduce la tarifa de cada hora'));
const salarioTotal = horasTrabajadas * tarifaHora;
alert(`Su salario total es de ${salarioTotal}`);

//10. Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, diga que su nombre es corto.
const nombre = prompt('Introduce tu nombre');
nombre.length > 7 ? alert('Tu nombre es largo') : alert('Tu nombre es corto');

//11. Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.
const nombre1 = prompt('Introduce tu nombre');
const apellido1 = prompt('Introduce tu apellido');

nombre1.length > apellido1.length ? alert(`Tu nombre, ${nombre1}, es mas largo que tu apellido, ${apellido1}`) : alert(`Tu apellido,${apellido1}, es mas largo que tu nombre, ${nombre1}`); 

//12. Declare dos variables myAge y yourAge y asignarles los valores iniciales y myAge y yourAge.
let myAge = 250;
let yourAge = 25;

myAge > yourAge ? alert(`Soy ${myAge - yourAge} años mayor que tu`) : alert(`Soy mas joven que tu`);

//13. Usando prompt, obtenga el año en que nació el usuario y, si el usuario tiene 18 años o más, permita que el usuario conduzca, si no dígale que espere una cierta cantidad de años.
const anioNacimiento = parseInt(prompt('Introduce el año en que naciste'));
const anioActual = new Date().getFullYear();
const edad = anioActual - anioNacimiento;
edad >= 18 ? alert(`Puedes conducir`) : alert(`Debes esperar ${18 - edad} años para conducir`);

//14. Escriba un script que solicite por prompt al usuario que ingrese el número de años. Calcular el número de segundos que puede vivir una persona. Supongamos que alguien vive solo cien años
const anios = parseInt(prompt('Introduce el numero de años'));
const segundos = anios * 365 * 24 * 60 * 60;
alert(`Una persona puede vivir ${segundos} segundos`);

/*
15. Cree un formato de hora legible por humanos usando el objeto Date.
YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm
*/
const fecha = new Date();
const anio = fecha.getFullYear();
const mes = fecha.getMonth() + 1;
const dia = fecha.getDate();
const hora = fecha.getHours();
const minutos = fecha.getMinutes();
const segundos2 = fecha.getSeconds();
alert(`${anio}-${mes}-${dia} ${hora}:${minutos}`);
alert(`${dia}-${mes}-${anio} ${hora}:${minutos}`);
alert(`${dia}/${mes}/${anio} ${hora}:${minutos}`);
