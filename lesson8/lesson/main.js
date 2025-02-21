
//Оператор опціональної послідовності
//
// якщо user undefined, null - до цієї характеристики не буду звертатися
// захист від варіантів, коли об'єкт може не прийти
//
// let user = undefined;
// user?.name

//------------------------------------

// Новий синтаксис об'єктів та Деструктуризація
//
// let name = 'Max';
// let age = 5;
// let user = {
//     name,
//     age,
//     foo() {
//         return this;
//     }
// };
// console.log(user);
// console.log(user.foo());
//
//
// Деструктуризація
// let user = {
//     name: 'Johan',
//     age: 32,
//     foo(){
//         console.log('hello world')
//     }
// }
// let {name, age} = user
// console.log(user)
// // окрема зміна age
// console.log(age)
// // окрема зміна name
// console.log(name)
//
//
// // витягати з об'єкта тільки те що необхідно
// function  foo ({name}) {
//     console.log(name) // John
// }
// foo( {age: 32, name: 'John', status: true} )
//
//
// let name = 'Max';
// let age = 35;
// let user = {
//     name,
//     age,
//     foo() {
//         return this;
//     },
//     wife: {
//         name: 'Anna',
//         age: 30,
//     }
// };
// console.log(user);
// console.log(user.foo());
//
//  // якщо конфлікти між змінними, тоді переназиваємо їх
//  // якщо є під об'єкт теж переназиваємо їх
//  // wife - після переназви, об'єкт не існує, знову оголошуємо і з'являється
//  let {name: userName, age: userAge, wife: {name:wifeName}, wife} = user
// console.log(userName); // Max
//  console.log(userAge); // 35
// console.log(wifeName); // Anna
// console.log(wife); // {name: 'Anna', age: 30}
//
//
// // робота за масивами
// let numbers = [11, 22, 33, 44, 55]
// let [a, , c ] = numbers
// console.log(a) // 11
// //  ігнорування змінної b
// console.log(c) // 33
//
//
// // об'єднання деструктуризації масиву та об'єкту
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olga', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olga', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// let [{name, age, status}, user2] = users
// console.log(name, age, status); // [vasya, 31, false]
// console.log(user2); // {name: 'petya', age: 30, status: true}

//------------------------------------

// Spread оператор
//
// let user = {
//     name: 'Anna',
//     age:25
// }
//
// // мають одну ячейку в памяті
// let user2 = user;
// user2.age = 34
// console.log(user.age) // 34 - user змінений через user2
// console.log(user2 === user) // true
//
// let user3 = {
//     name: 'Anna',
//     age:25
// }
// console.log(user3 === user) // false
//
// let user4 = {
//     name: 'Anna',
//     age:25
// }
//
// // мають різні ячейки в памяті
// let userCopy = {...user4};
// console.log(user4 === userCopy) // false
// console.log(userCopy)
// userCopy.age = 23
// console.log(userCopy);
// // user4 не змінюється
// console.log(user4);
//
//
// // об'єднання масивів
// let num = [11, 22, 33, 44]
// let str = ['some', 'else', 'any']
// let numStr = [...num, ...str]; // об'єднання масивів
// console.log(numStr) //[11, 22, 33, 44, 'some', 'else', 'any']
//
//
// // додавання в об'єкт
//
// let user5 = {
//     name: 'Olga',
//     age: 25
// }
// let user6 = {...user5, city:'Kyiv'}
// console.log(user6) // {name: 'Olga', age: 25, city: 'Kyiv'}
//
//
// // функції
// function sum (a, b, c) {
//     return a + b + c
// }
// let numbers = [10, 10 ,10];
// console.log(sum(...numbers)); // 30

//-------------------------------------

//Поверхнева та глибока копії та JSON
//
//spread - це поверхнева копія, тому що, якщо в об'єкті є масив
// він залишається в однаковій комірці
//
// let user = {
//     name: 'max',
//     age: 25,
//     skills: ['html', 'js', 'java']
// }
// let userClone = {...user}
// console.log(userClone === user) // false
//
// //але якщо масив skills порівняти, буде однакова комірка, тобто один і той же об'єкт
// console.log(userClone.skills === user.skills) // true
//
//
// // глибока копія об'єкта - JSON.stringify()
// // не підтримує функції
// let user1 = {
//     name: 'Alex',
//     age: 25,
//     skills: ['html', 'js', 'java']
// }
// let user2 = JSON.parse(JSON.stringify(user1))
// user2.name = 'Max';
// user2.age = 34
// user2.skills = ['css', 'js', 'C++', 'php']
// console.log(user2)
// console.log(user1)
// console.log(user1 === user2) // false
// console.log(user1.skills === user2.skills) // false
//
//
// // сучасний підхід - structuredClone()
// // функції не передає
// // підтримує Map, Set, Date
// let user3 = {
//     name: 'Olga',
//     age: 30,
//     skills: ['html', 'c++', 'php', 'css']
// }
// let user4 = structuredClone(user3)
// user4.skills = ['java', 'js', 'c++', 'ts', 'react']
// console.log(user4)
//
// console.log(user4.skills === user3.skills) // false

//--------------------------------------

// Prototyping
//
// створюємо об'єкт на основі іншого об'єкту, і основа буде лежати в prototype
//
// let baseObj = {
//     id:1,
//     name: 'max',
//     age: 24
// }
//
// // copy побудований на основі baseObj
// let copy = Object.create(baseObj);
//
// console.log(copy) // в консоль виводить пустий об'єкт
// console.log(copy.id) // виводить 1
// console.log(copy.age)// 24
//
// // додаємо властивості
// copy.surname = 'Maxim';
//
//
// // id - власність baseObj
// console.log(baseObj.hasOwnProperty('id')); // true
//
// // id - не є власністю copy
// console.log(copy.hasOwnProperty('id')) // false
// console.log(copy.hasOwnProperty('surname')) // true
//
// // перевизначити об'єкт
//
// let obj = {};
// obj.__proto__ = baseObj;
// console.log(obj)
//
// console.log(obj.id) // 1

// -----------------------------------

// Descriptors
//
// як об'єкт виглядає стосовно своїх характеристик
// прапори характеристик
// зробити поле невидимим для ітерації
// зробити поле незмінним
//
// let user = {
//     name: 'Norman',
//     lastName: 'Fox'
// }
//
// Object.defineProperty(
//     user,
//     'id',
//     {
//         value: 100,
//         writable:false, // неможливо перевизначити id
//         enumerable: false, // не видиме при ітерації
//         configurable: false, // наступний виклик defineProperty і зміна атрибутів буде неможлива
//     }
// )
//
//
// user.id = 200; // не змінилось
// console.log(user);

// ---------------------------------



