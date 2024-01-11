/* 
Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:

80-100, A
70-79, B
60-69, C
50-59, D
0-49, F
*/

console.log('Introduce la calificacion del estudiante:')
let calificacion = parseInt(prompt('Introduce la calificacion del estudiante'));

if(calificacion >= 80 && calificacion <= 100){
    alert('El estudiante tiene una "A"');
}else if(calificacion >= 70 && calificacion <= 79){
    alert('El estudiante tiene una "B"');
}else if(calificacion >= 60 && calificacion <= 69){
    alert('El estudiante tiene una "C"');
}else if(calificacion >= 50 && calificacion <= 59){
    alert('El estudiante tiene una "D"');
}else if(calificacion >= 0 && calificacion <= 49){
    alert('El estudiante tiene una "F"');
}else{
    alert('Introduce una calificacion correcta');
}

/*
2. Consulta si la temporada es Otoño, Invierno, Primavera o Verano. Si la entrada del usuario es :

    Septiembre, Octubre o Noviembre, la temporada es Otoño.
    Diciembre, Enero o Febrero, la temporada es Invierno.
    Marzo, Abril o Mayo, la temporada es Primavera
    Junio, Julio o Agosto, la temporada es Verano
*/

const mes = prompt('Introduce el mes acutal');

switch (mes) {
    case 'Diciembre':
    case 'Enero':
    case 'Febrero':
        alert('La temporada es Invierno');
        break;
    case 'Marzo':
    case 'Abril':
    case 'Mayo':
        alert('La temporada es Primavera')
        break;
    case 'Junio':
    case 'Julio':
    case 'Agosto':
        alert('La temporada Verano');
        break;
    case 'Septiembre':
    case 'Octubre':
    case 'Noviembre':
        alert('La temporada es Otoño');
        break
}

//3. Compruebe si un día es un día de fin de semana o un día laborable. Su script tomará el día como entrada.
const dia = prompt('Introduce el dia de la semana');
if(dia === 'Lunes' || dia === 'Martes' || dia === 'Miercoles' || dia === 'Jueves' || dia === 'Viernes') {
    alert('Es un dia laborable');
}else{
    alert('Es fin de semana');
}