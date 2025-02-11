// -----Функції------------


// // Базова інформація про функції
//
// function writer(productTitle, price, description) {
//     document.write(
//         `
//         <div>
//         <h3>${productTitle} - ${price} UAH</h3>
//         <p>${description}</p>
// </div>
//         `
//     );
// }
// writer('Juice', 123, 'very testy');
// writer('Tomato', 45, 'very big');
// writer('Tea', 59,'very smoke');
// writer('Candy', 32, 'very sweet');
//
//
// function printerArray (array) {
//     for (const item of array) {
//         console.log(item)
//     }
// }
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// let products = [
//     {
//         title: 'milk',
//         price: 59,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 87,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 120,
//         image: 'https://images.prom.ua/6058703638_w600_h600_6058703638.jpg'
//     },
// ];
//
//
// printerArray(users) // виводиться весь масив users
// printerArray(products) // виводиться весь масив products
//

// --------------------------------------

//  Functions another POV
//
// якщо треба створити багато користувачів,
// щоб не робити все руками, використовуємо function
//
// let user1 = {
//     id:1,
//     name: 'Norman',
//     age: 34,
//     status: true
// }
// let user2 = {
//     id:2,
//     name: 'Ninf',
//     age: 33,
//     status: true
// }
// let user3 = {
//     id:3,
//     name: 'Nora',
//     age: 30,
//     status: false
// }
//
// function використовує шаблон і створює користувачів
// function userFactory(id, name, age, status) {
//     let user = {
//         id: id,
//         name: name,
//         age: age,
//         status: status
//     }
//     return user
// }
// // передаєте сюди дані користувача і викликаєте функцію та присвоюєте її змінній
//
// let u1 = userFactory(1, 'Norman', 33, true)
// let u2 = userFactory(2, 'Nina', 30, true)
// console.log(u1)
// console.log(u2)

//--------------------------------------

// Функції з return
//
//щоб функція повернула результат свого відпрацювання використовується слово return
// якщо надалі результат відпрацювання функції не потрібний return не використовується
//
// function calc (a, b) {
//     let result = a + b
//     return result
// }
// let r1 = calc(34, 23)
// let r2 = calc(3, 4)
//
// console.log(r1)
// console.log(r2)
//
// // Приклади
//
// function percentSum (cash, per) {
//     return cash / 100 * per
// }
// function tax (sum) {
//     let pdv = percentSum(sum, 20);
//     let warTax = percentSum(sum, 5);
//     let result = sum - pdv - warTax
//     return {pdv, warTax, result}
//     // return result - percentSum(sum, 20) - percentSum(sum, 5); // скорочений код без змінних
// }
// let number = tax(10000);
// console.log(number)
// let pdv = number.pdv
// console.log(pdv)
// console.log(number.result)
//
//
// // Приклад ще:
//
// function userFilter (users) {
//     let filteredUser = []
//     for (const user of users) {
//         if (user.age > 30) {
//            filteredUser.push(user)
//         }
//     }return filteredUser
// }
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// let filteredUser = userFilter(users);
// console.log(filteredUser)

// -------------------------------------

// Змінна arguments у функціях
//
// перегрузка методів або функцій
//
// function calc (a, b, c) {
//    return  a + b + c
// }
//
// console.log(calc(10, 20)); // Nan
//
//як таке вирішувати,
// коли хочемо мати функції з однаковими назвами, але з різною кількістю аргументів
// це робиться за допомогою спеціальної змінної arguments
// не треба передавати кількість аргументів в функцію, а одразу передавати значення при викликанні функції
// зараз використовується новий підхід в аргументи передається (...args) і працює так само
//
// function foobar () {
//     if (arguments.length === 2) {
//     return  arguments[0] + arguments[1]
//     } else if (arguments.length === 4) {
//         return arguments[3] + arguments[1]
//     }
//     return (arguments)
// }
//
// let arguments = foobar(3, 4, 5, 'some')
// console.log(arguments)

//--------------------------------------

// rest argument
// a= 1, b = 3, c = 4, x = 5,6,7
// function bar (a, b, c, ...x) {
//     console.log(x)
//     console.log(Array.isArray(x)) // true - це є масив
// }
// bar (1, 3, 4, 5, 6, 7)

//---------------------------------------