/*
Crea un objeto literal llamado personAccount. Tiene las propiedades 
firstName, lastName, incomes, expenses y tiene los metodos totalIncome, 
totalExpense, accountInfo,addIncome, addExpense y accountBalance. 
Incomes es un conjunto de ingresos y su descripción y expenses 
es un conjunto de ingresos y su descripción.
*/
let personAccount = {
    firstName:'Christian',
    lastName: 'Navarro',
    incomes: [
        { descripcion: 'Sueldo', cantidad: 20000 },
        { descripcion: 'Bono', cantidad: 5000 }
    ],
    expenses:[ 
        { descripcion: 'comida', cantidad: 2000},
        { descripcion: 'renta', cantidad: 2500}
    ],
    totalInconme: function(){
        let total = 0;
        for(let income of this.incomes){
            total += income.cantidad;
        }
        return total;
    },
    totalExpense: function(){
        let total = 0;
        for(let expense of this.expenses){
            total += expense.cantidad;
        }
        return total;
    },
    accountInfo: function(){
        return `Nombre: ${this.firstName}\nApellido: ${this.lastName}\nTotal ingresos: $${this.totalInconme()}\nTotal egresos: $${this.totalExpense()}`;
    },
    addIncome: function(descripcion, cantidad){
        this.incomes.push({descripcion, cantidad});
        return `Se agrego ${descripcion} con ${cantidad} a incomes`;
    },
    addExpense: function(descripcion, cantidad){
        this.expenses.push({descripcion, cantidad})
        return `Se agrego ${descripcion} con ${cantidad} a expenses`;
    },
    accountBalance: function(){
        let total = 0;
        total = this.totalInconme() - this.totalExpense();
        return `Balance total de la cuenta de ${this.firstName} ${this.lastName}: $${total}`;
    }
};

console.log(personAccount.totalInconme());
console.log(personAccount.totalExpense());
console.log(personAccount.accountInfo());
console.log(personAccount.addIncome('Aguinaldo', 30000));
console.log(personAccount.incomes);
console.log(personAccount.addExpense('Internet', 1000));
console.log(personAccount.expenses);
console.log(personAccount.accountBalance());


/* 
Imagina que estás obteniendo la colección de usuarios siguiente de una base 
de datos MongoDB. 
a. Crear una función llamada signUp que permita al usuario añadirse a la 
colección. Si el usuario existe, informar al usuario que ya tiene una cuenta.
b. Crear una función llamada signIn que permita al usuario iniciar sesión 
en la aplicación
*/
const users = [
    {
      _id: "ab12ex",
      username: "Alex",
      email: "alex@alex.com",
      password: "123123",
      createdAt: "08/01/2020 9:00 AM",
      isLoggedIn: false,
    },
    {
      _id: "fg12cy",
      username: "Asab",
      email: "asab@asab.com",
      password: "123456",
      createdAt: "08/01/2020 9:30 AM",
      isLoggedIn: true,
    },
    {
      _id: "zwf8md",
      username: "Brook",
      email: "brook@brook.com",
      password: "123111",
      createdAt: "08/01/2020 9:45 AM",
      isLoggedIn: true,
    },
    {
      _id: "eefamr",
      username: "Martha",
      email: "martha@martha.com",
      password: "123222",
      createdAt: "08/01/2020 9:50 AM",
      isLoggedIn: false,
    },
    {
      _id: "ghderc",
      username: "Thomas",
      email: "thomas@thomas.com",
      password: "123333",
      createdAt: "08/01/2020 10:00 AM",
      isLoggedIn: false,
    },
  ];
 
/*
a. Crear una función llamada signUp que permita al usuario añadirse a la 
colección. Si el usuario existe, informar al usuario que ya tiene una cuenta.
*/

function signUp(username, email, password){
    for(let user in users){
        if(user.username === username){
            return `El usuario ya existe, ya tiene una cuenta`
        }
    }
        users.push({
            _id: Math.random.toString(36).substring(2,9),
            username,
            email,
            password,
            createdAt: new Date().toLocaleString(),
            isLoggedIn: false
        }
        );
    return 'Se agrego con exito el nuevo usuario';
}
console.log(signUp('Solus', 'chris@chris.com', '541dssdf'));
console.log(users); //Para verificar que si se agrego el nuevo usuario

/* 
b. Crear una función llamada signIn que permita al usuario iniciar sesión 
en la aplicación
*/

function signIn(username, password){
    for(let user of users){
        if(user.username === username && user.password === password){
            user.isLoggedIn =  true;
            return `Ingreso exitoso. Bienvenido ${user.username}`;
        }
    }
    return 'Error de credenciales';
}
console.log(signIn('Solus', '541dssdf'));

/*
El array de productos tiene tres elementos y cada uno de ellos tiene 
seis propiedades. 
a. Crear una función llamada rateProduct que califique el producto 
b. Crear una función llamada averageRating que calcule la valoración 
media de un producto
*/
  const products = [
    {
      _id: "eedfcf",
      name: "mobile phone",
      description: "Huawei Honor",
      price: 200,
      ratings: [
        { userId: "fg12cy", rate: 5 },
        { userId: "zwf8md", rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: "aegfal",
      name: "Laptop",
      description: "MacPro: System Darwin",
      price: 2500,
      ratings: [],
      likes: ["fg12cy"],
    },
    {
      _id: "hedfcg",
      name: "TV",
      description: "Smart TV:Procaster",
      price: 400,
      ratings: [{ userId: "fg12cy", rate: 5 }],
      likes: ["fg12cy"],
    },
  ];

//a. Crear una función llamada rateProduct que califique el producto 
function rateProduct(product, userID, rate){
    for(let prod of products){
        if(prod.name === product){
            prod.ratings.push({userID, rate})
            return 'Se agrego con exito';
        }
    }
return 'No se encontro el producto';
}

console.log(rateProduct('TV', 'nction', 7));
console.log(products);

//b. Crear una función llamada averageRating que calcule la valoración media de un producto
function averageRating(product){
    for(let prod of products){
        if(prod.name === product){
            let total = 0;
            for(let rate of prod.ratings){
                total += rate.rate;
            }
            return total/prod.ratings.length;
        }
    }
    return 'No se encontro el producto';
}
console.log(averageRating('TV'));

/* 
Crear una función llamada likeProduct. Esta función ayuda a dar un 
like al producto. Si no le gusta eliminar el like y si le gusta darle like
*/
function likeProduct(product, userID){
    for(let prod of products){
        if(prod.name === product){
            if(prod.likes.includes(userID)){
                prod.likes.splice(prod.likes.indexOf(userID), 1);
                return 'Se elimino el like';
            }
            prod.likes.push(userID);
            return 'Se agrego el like';
        }
    }
    return 'No se encontro el producto';
}
console.log(likeProduct('TV', 'fg12cy'));