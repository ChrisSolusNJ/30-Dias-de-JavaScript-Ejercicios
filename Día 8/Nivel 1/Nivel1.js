//Crear un objeto vacío llamado dog
const dog = {};

//Imprime el objeto dog en la consola
console.log(dog)

//Añade las propiedades name, legs, color, age y bark para el 
//objeto dog. La propiedad bark es un método que devuelve woof woof
dog.name = "Snoopy";
dog.legs = 4;
dog.color = "Blanco";
dog.age = 7;
dog.bark = function(){
    return 'Woof Woof';
}
console.log(dog);

//Obtener name, legs, color, age y el valor de bark del objeto dog
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

//Establecer nuevas propiedades al objeto dog: breed, getDogInfo
dog.breed = "Pastor Aleman"
dog.getDogInfo = function(){
    return `Mi nombre es ${this.name}, tengo ${this.age}, soy de color 
    ${this.color}, tengo ${this.legs} patas, mi raza es ${this.breed} y 
    me gusta ladrar con un ${this.bark()}`;
}
console.log(dog.breed)
console.log(dog.getDogInfo())