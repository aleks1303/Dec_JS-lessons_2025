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
    if (a.id > b.id) {
        return 1
    } else if (a.id < b.id) {
        return -1
    } else if (a.id === b.id) {
        return 0
    }
})
console.log(userSort);

// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
//
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
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