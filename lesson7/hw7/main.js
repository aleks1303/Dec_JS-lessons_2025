// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
'use strict'

function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const userArray = [
    new User(4, 'alex', 'sun', 'alex@.ua', '+34234333443'),
    new User(5, 'nina', 'sun', 'nina@.ua', '+34234333443'),
    new User(1, 'nora', 'sun', 'nora@.ua', '+34234333443'),
    new User(2, 'vira', 'sun', 'vira@.ua', '+34234333443'),
    new User(3, 'nika', 'sun', 'nika@.ua', '+34234333443'),
    new User(8, 'sony', 'sun', 'sony@.ua', '+34234333443'),
    new User(7, 'mila', 'sun', 'mila@.ua', '+34234333443'),
    new User(6, 'lora', 'sun', 'lora@.ua', '+34234333443'),
    new User(10, 'max', 'sun', 'max@.ua', '+34234333443'),
    new User(9, 'oleg', 'sun', 'oleg@.ua', '+34234333443')

]

console.log(userArray)
//
// #2ikXsE2WiKZ
// - Взяти масив з User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

const filterUser = userArray.filter(value => {
    if(value.id %2 === 0) {
        return value
    }
})
console.log(filterUser);


// #pOeHKct
// - Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const userSort = filterUser.sort((a, b) => {
    // if (a.id > b.id) {
    //     return 1
    // } else if (a.id < b.id) {
    //     return -1
    // } else if (a.id === b.id) {
    //     return 0
    // }
   return  a.id - b.id
})
console.log(userSort);

// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const users = [
    new Client(1, 'Max', 'Maxim', 'max@.ua', '+38098000000', ['pizza', 'hotdog', 'sushi']),
    new Client(2, 'Nora', 'Nora', 'max@.ua', '+38098000001', ['pizza', 'hotdog', 'sushi']),
    new Client(3, 'Lora', 'Lora', 'max@.ua', '+38098000002', ['pizza', 'hotdog', 'sushi']),
    new Client(4, 'Masha', 'Masha', 'max@.ua', '+38098000003', ['pizza', 'hotdog', 'sushi']),
    new Client(5, 'Olga', 'Olga', 'max@.ua', '+38098000004', ['pizza', 'hotdog']),
    new Client(6, 'Oleg', 'Oleg', 'max@.ua', '+38098000005', ['pizza', 'hotdog', 'sushi', 'hat', 'suit']),
    new Client(7, 'Marina', 'Marina', 'max@.ua', '+38098000006', ['pizza', 'hotdog', 'sushi', 'hat', 'suit', 'boots']),
    new Client(8, 'Mila', 'Mila', 'max@.ua', '+38098000007', ['pizza', 'hotdog', 'sushi', 'boots']),
    new Client(9, 'Ivan', 'Ivan', 'max@.ua', '+38098000008', ['pizza', 'hotdog', 'sushi', 'hat', 'pen', 'cola', 'candy']),
    new Client(10, 'Ivana', 'Ivana', 'max@.ua', '+38098000010', ['pizza', 'hotdog', 'sushi','salt', 'sugar', 'cucumber', 'pineapple', 'apple', 'tomato', 'water'])
]
console.log(users)



// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

const sortClients = users.sort((a, b) => {
 if (a.order.length > b.order.length) {
     return 1
 } else if (a.order.length < b.order.length) {
     return -1
 } else if (a.order.length === b.order.length) {
     return 0
 }

})
console.log(sortClients)

//
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, producer, year, maxSpeed, engine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }

}



//
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// #zg6Fifnqig
// -створити клас/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
//
//
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

let time = new Date()
console.log(time.getTime())


