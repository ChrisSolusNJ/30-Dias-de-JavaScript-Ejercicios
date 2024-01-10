/* 
1. Cree un formato de hora legible por humanos usando el objeto Date. La hora y el minuto deben ser siempre dos dígitos (7 horas deben ser 07 y 5 minutos deben ser 05)
YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/
const fecha = new Date();
const anio = fecha.getFullYear();
const mes = fecha.getMonth() + 1;
const dia = fecha.getDate();
const hora = fecha.getHours();
const minutos = fecha.getMinutes();
const segundos = fecha.getSeconds();
const formato1 = `${anio}-${mes}-${dia} ${hora}:${minutos}:${segundos}`;
alert(formato1);

