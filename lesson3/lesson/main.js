
// -------loops - цикли----------------



// // Інкремент / декременти
//
// // інкремент - збільшення
// let x = 0
// x = x + 1
// console.log(x)
// x++
// console.log(x)
// x += 1
// console.log(x)
//
//
// //зменшення - декремент
// x = x - 1
// console.log(x)
// x -= 1
// console.log(x)
// x--;
// console.log(x)
//
//
// // Постфіксний інкремент.
// // інкремент відбувається після того, як оголосили зміну (пост - після)
// let a = 1
// a++
// console.log(a)
//
// //Префіксний інкремент
// let b = 2
// ++b
// console.log(b)
//
// //Приклад
// // спочатку присвоєння потім +
// let c = 3
// let d = c++
// console.log(d) //3
// console.log(c) //4
//
// // спочатку + потім присвоєння
// let e = 3
// let f = ++e
// console.log(f) // 4
// console.log(e) // 4

//---------------------------------

// Цикл for
// починати перебирати з 1 або 2 чи інше
// встановити шаг перебирання
// до якого перебирати потім зупинитись
// на якому зупинитись - break;
// який пропустити потім продовжити - continue;
//
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
//
// for (let i = 0; i < users.length; i++) {
//     // if (i === 4) {
//     //    break;
//     // }
//     const user = users[i];
//     document.write(`<h2>${user.name} ${user.age} - status "${user.status}"</h2>`)
//     console.log(user)
// }

// --------------------------------

// Цикл for of
//
//  перебирає весь масив без виключення
// часто використовується
//
//
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
// for (const user of users) {
//     console.log(user
//     )
//
// }

// ---------------------------------

// Цикл for in
// перебирає ключі і значення
//
// let user = {
//     name: 'Ivan',
//     age: 24,
//     status: true
// }
//
// for (const userKey in user) {
//     console.log(`${userKey}: ${user[userKey]}`)
//
// }
// цикл в циклі
// одним перебираємо масив
// іншим перебираємо об'єкт
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
//
// for (const user of users) {
//     for (const userKey in user) {
//         console.log(userKey, user[userKey])
//     }
//     console.log('')
// }

//----------------------------------

// Цикл while
//
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
//
// let i = 0
// while (i < users.length) {
//    const user = users[i];
//     console.log(user)
// i++
// }

// над будова
//
// do {
//     console.log('hello')
// } while (false)