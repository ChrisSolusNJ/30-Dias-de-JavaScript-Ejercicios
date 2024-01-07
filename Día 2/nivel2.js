/*
    Mostrar en consola la siguiente cadena
    The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
*/
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

/* 
    Mostrar en consola la siguiente cita:
    "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
*/
console.log("Love is not patronizing and charity isn't about pity,\
             it is about love. Charity and love are the same\
              -- with charity you give love, so don't just give \
              money but reach out your hand instead.");

//Comprobar si '10' es igual a 10, de lo contrario hacerlos iguales
console.log(typeof(10) == typeof('10'));
console.log(typeof(10) == typeof(parseInt('10')))

//Compruebe si parseFloat('9.8') es igual a 10, si no, hágalo exactamente igual a 10.
console.log(typeof('9.8') == typeof(10));
console.log(typeof(Math.ceil(toString('9.8'))) == typeof(10));


//Verifique si 'on' se encuentra tanto en Python como en la jerga
console.log('Python'.includes('on'));
console.log('jargon'.includes('on'));

//Espero que este curso no esté lleno de jerga. Compruebe si jargon está en la oración. 
console.log('Espero que este curso no esté lleno de jerga.'.includes('jargon'));

//Generar un numero entre 0 y 100
const num = Math.floor(Math.random() * 101);
console.log(num);

//Generar un numero entre 50 y 100
const num2 = Math.floor(Math.random() * 51) + 50;
console.log(num2);

//Generar un numero entre 0 y 255
const num3 = Math.floor(Math.random() * 255);
console.log(num3);

//Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio.
const frase = 'JavaScript';
const num4 = Math.floor(Math.random() * frase.length);
console.log(frase[num4]);

//Imprimir el patron
console.log('1 1 1 1 1\n\
2 1 2 4 8\n\
3 1 3 9 27\n\
4 1 4 16 64\n\
5 1 5 25 125');

//Usa substr para separar la frase 'porque porque porque' de la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
const frase2 = 'No puedes terminar una oración con porque porque porque es una conjunción';
console.log(frase2.substring(35, 55));