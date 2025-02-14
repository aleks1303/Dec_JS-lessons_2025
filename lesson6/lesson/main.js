

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

// Функції масивів з callbacks








