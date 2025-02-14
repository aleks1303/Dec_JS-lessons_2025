

// Функція string
//
// string як масив
// let str = 'Hello world'
// console.log(str)
// console.log(str[0]) // H - перша буква
// //можна ітерувати
//
// for (const strElement of str) {
//     console.log(strElement)
// }
//
// //методи для string
//
// let a = 'Hello leo';
// console.log(a)
// // concat
// let b = a.concat('!!!');
// console.log(b) // b змінився +!!!, а 'a' залишилась не змінена
//
// console.log(a.toUpperCase()); // HELLO LEO
// console.log(a.toLowerCase()); // hello leo
// console.log(a.startsWith('H')); // true or false
// console.log(a.startsWith('H')); // true or false
// console.log(a.endsWith('leo')); // true or false
// console.log(a.substring(0, 7)); // обрізати по 'i' з - до (Hello l)
// console.log(a.indexOf('e')); // під яким індексом '1'
// console.log(a.indexOf('e', 3)); // під яким індексом, з позиції 3 '7'
// console.log(a.lastIndexOf('e')); // починається з кінця '7'
// console.log(a.charAt(8)); // повертає за індексом 'o'
// console.log(a.replace('e', 'a')); // міняє символи з першого значення на друге 'Hallo', тільки з початку
// console.log(a.replaceAll('e', 'a')); // міняє всі символи 'Hallo lao'
// console.log(a.split(' ')); // розподіляє по пробілу і робить масив ['Hello' 'leo']
// console.log(a.split('')); // розподіляє по буквам і робить масив ['H','e','l','l','o','l','e','o']
// console.log(a.split('l')); // вирізає по вказаному значенню і робить масив ['He','','o ','eo']

// -------------------------

// Базові функції масивів
//
// let arr1 = []
// console.log(Array.isArray(arr1)) // true
//
// arr1.push('new element1') // додає в кінець елемент в масив,
// arr1.push('new element2') // додає в кінець елемент в масив,
// arr1.push('new element3') // додає в кінець елемент в масив,
// arr1.push('new element4') // додає в кінець елемент в масив,
// arr1.push('new element5') // додає в кінець елемент в масив,
// console.log(arr1) // 5 elements
//
// arr1.pop() // видаляє з кінця елемент
// console.log(arr1) // 4 elements
//
// arr1.unshift('!') // додає в початок елемент
// console.log(arr1);
//
// arr1.shift() // видаляє з початку
// console.log(arr1);
//
// //замість ітерації
// // let str = ''
// // for (const strElement of arr1) {
// //     str+= strElement+'; '
// // }
// // console.log(str)
//
// let join = arr1.join('; ')
// console.log(join) // буде теж саме як і з iter, елементи розділені '; '
//
// // з'єднати масиви
// let num = [11, 32, 33];
// let joinArr = arr1.concat(num)
// console.log(joinArr) // новий масив arr1 - спереду, num - с заду
//
// console.log(num.reverse()); // зворотній напрямок масиву
//
// let slice = joinArr.slice(0, 4); // вирізаємо з і по i не включно
// console.log(slice) // в масиві 4 елементи
//
//
// // let splice = joinArr.splice(0, 2, 4, 5, 'some')
// // console.log(splice) // вирізаємо з joinArr 2 елементи і додаємо 4,5, some
// // console.log(joinArr)
// // let splice1 = joinArr.splice(0) // вирізаємо все
// // console.log(splice1)
// console.log(joinArr)
// console.log(joinArr.splice(joinArr.indexOf(11), 1)); // вирізало елемент 11
// console.log(joinArr) // масив без 11
//
//
// console.log(joinArr.includes('new element1')); // перевіряє наявність елементу в масиві

// -------------------------

// // Функції масивів з callbacks
// //
// // Метод forEach() використовується для перебору елементів масиву і
// // викликає передану функцію для кожного елемента.
// //Використовуй forEach(), коли треба просто перебрати масив без створення нового!
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
// // forEach виконає щось, що знаходиться в вашому масиві
//
// // users.forEach(function (value) {
// //     console.log(value)
// // });
//
// // по іншому записати forEach
// // users.forEach((value) => console.log(value))
//
// // filter
// // let filterOfUsers = users.filter(value =>
// //     value.age >= 30
// // );
// // console.log(filterOfUsers)
//
//
// // map
// // повертає новий об'єкт
// //Метод map() використовується для перетворення кожного елемента масиву і
// //створення нового масиву на основі результатів виклику функції.
// //Використовуй map(), якщо потрібно отримати новий масив.
//
//
// // let mapUser = users.map(function (value, index){
// //    return {id: index +1, ...value}
// // });
// // console.log(mapUser)
// //
// //
// //
// // // map за допомогою стрілкової функції
// // let mapUser1 = users.map((value, index) =>
// // {return {id: index+1, name: value.name, age: value.age, status: value.status}
// // });
// // console.log(mapUser1)
//
//
// // find - знайти одного, при першому входженні
// // let findUser = users.find((value, index) => value.name === 'max');
// // console.log(findUser)
//
// // some and every
//
// // чи хтось має статус true
// // let some = users.some(value => value.age)
// // console.log(some) // повертає boolean
// //
// // // чи кожен елемент має ім'я max
// // let every = users.every(value => value.name === 'max')
// // console.log(every) // повертає boolean
//
//
// // sort - під час ітерації зрівнює об'єкти між собою по парно
// //Важливо: sort() змінює оригінальний масив, а не створює новий!
//
// // ✔ sort() змінює оригінальний масив.
// // ✔ Без compareFunction сортує як рядки.
// // ✔ Для чисел використовуй sort((a, b) => a - b).
// // ✔ Для об'єктів сортуй за властивістю sort((a, b) => a.age - b.age).
// // ✔ Для правильного сортування слів – localeCompare().
//
// // Використовуйте sort() для впорядкування масивів та об'єктів!
//
// // сортування по числам
// // let sort = users.sort((a, b) => {
// //     return b.age - a.age
// // })
// //
// // console.log(sort)
// // console.log(users)
//
// //сортування по імені за аскікодом та по алфавітом;
//
// // let sortName = users.sort((a, b) => {
// //     return a.name.localeCompare(b.name)
// // });
// // console.log(sortName)
//
//
// // ✔ sort() використовує функцію порівняння (a, b), яка визначає порядок сортування.
// // ✔ return 1 міняє місцями, return -1 залишає порядок.
// // ✔ Можна спростити сортування за алфавітом за допомогою localeCompare().
// //
// // Цей метод використовується для сортування масивів об'єктів у JavaScript!
//
// // let sortName1 = users.sort((a, b) => {
// //     if (a.name > b.name)  {
// //         return 1
// //     }if (a.name < b.name)  {
// //         return -1
// //     }
// //     if (a.name === b.name)  {
// //         return 0
// //     }
// // });
// // console.log(sortName1)
//
// //ще приклади
//
// // let fruits = ['Апельсин', 'банан', 'вишня', 'груша', 'диня']
// // let fruitsSort = fruits.sort((a, b) => {
// //     if (a < b) {
// //         return 1
// //     }
// //     if (a > b) {
// //         return -1
// //     }if (a === b) {
// //         return 0
// //     }
// // });
// // console.log(fruitsSort)
//
//
// reduce
// Метод reduce() використовується для послідовної обробки елементів масиву та
// отримання єдиного значення.
//
// reduce() використовується для обчислення єдиного значення з масиву.
// Дуже потужний – можна використовувати для підрахунків, трансформацій, об’єднання та групування.
// На відміну від map() та forEach(), він повертає одне значення, а не новий масив.
//
// Якщо треба агрегувати дані, reduce() – найкращий вибір!
//
// let reduceUsers = users.reduce((previousValue, currentValue) => {
//     if (currentValue.status) {
//         previousValue.statT.push(currentValue)
//     }else {
//         previousValue.statF.push(currentValue)
//     }
//     return previousValue
// }, {statT: [], statF: []});
// console.log(reduceUsers)
// console.log(users)
//
//
//
// let reduceUsers1 = users.reduce((acc, user) => {
//     if(user.age >=30) {
//     acc[0].push(user);
//     }else {
//        acc[1].push(user);
//     }
// return acc
//
// },[arr1= [], arr2 = []]);
// console.log(arr1)
// console.log(reduceUsers1)
//console.log(arr2)

// ----------------------------

// Callback функції


