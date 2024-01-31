//Encuentra a la persona que tiene muchas habilidades en el objeto de los usuarios.
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

let max = 0;
let nombre = "";

for(const user in users){
  if(users[user].skills.length > max){
    max = users[user].skills.length;
    nombre = user;
  }
  
}
console.log(nombre)

//Contar los usuarios conectados, contar los usuarios que tienen 
//más de 50 puntos del objeto users.
let online = 0;
let userPoints = 0;

for(const user in users){
  if(users[user].isLoggedIn === true){
    online++;
  }
  if(users[user].points >= 50){
    userPoints++;
  }
}

console.log(`Hay ${online} usuarios conectados`);
console.log(`${userPoints} tienen mas 50 puntos o mas`)

//Encontrar personas que sean desarrolladores MERN stack del objeto de los usuarios
let mern = [];
for(let user in users){
  if(users[user].skills.includes('MongoDB') && users[user].skills.includes('Express')
  && users[user].skills.includes('React') && users[user].skills.includes('Node')){
    mern.push(user);
  }
}
console.log(mern);

//Establezca su nombre en el objeto usuarios sin modificar el objeto usuarios original
users.Christian = {email:'chris@chris.com', skills:['HTML', 'CSS', 'JavaScript', 'Java'
                  , 'Sass', 'Node'], age: 27, isLoggedIn: true, points: 50};

console.log(users)

//Obtener todas las claves o propiedades del objeto usuarios
const userKeys = Object.keys(users);
console.log(userKeys);

//Obtener todos los valores del objeto usuarios
const userValues = Object.values(users);
console.log(userValues);