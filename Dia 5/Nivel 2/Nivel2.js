//1. Cree un archivo de countries.js separado y almacene el array de países en este archivo, cree un archivo separado web_techs.js y almacene el array de webTechs en este archivo. Acceda a ambos archivos en el archivo main.js
//2. Primero elimine todos los signos de puntuación y cambie de string a array y cuente el número de palabras en el array
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let textToArray = text.split(" ");
console.log(textToArray); 
console.log(textToArray.length);

/* 
3. En el siguiente carrito de compras agregue, elimine, edite artículos
    const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
    Agregue 'Meat' al comienzo de su carrito de compras si aún no se ha agregado
    Agregue 'Sugar' al final de su carrito de compras si aún no se ha agregado
    Elimine 'Honey' si es alérgico a la miel (honey)
    Modificar Tea a 'Green Tea'
*/
const shoppingCart = ["Milk", "Coffe", "Tea", "Honey"];
shoppingCart.includes("Meat") ? console.log("Ya esta Meat en el arreglo") : shoppingCart.unshift("Meat") 
console.log(shoppingCart)

shoppingCart.includes("Sugar") ? console.log("Ya esta Sugar en el arreglo") : shoppingCart.push("Sugar") 
console.log(shoppingCart)

//Elimine 'Honey' si es alérgico a la miel (honey)
shoppingCart.includes("Honey") ? shoppingCart.splice(shoppingCart.indexOf("Honey"), 1) : console.log("No hay Honey en el arreglo")

//Modificar Tea a 'Green Tea'
shoppingCart.includes("Tea") ? shoppingCart.splice(shoppingCart.indexOf("Tea"), 1, "Green Tea") : console.log("No hay Tea en el arreglo")
