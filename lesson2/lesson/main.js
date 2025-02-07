//---------------------------------

//Масиви
//
// let arr;
// arr = [123, 234, 345, -343, 0, true, 'something'];
// console.log(arr);
// console.log(arr[1]);
// console.log(arr[0]);
// console.log(arr[4]);
// console.log(arr.length);
//
// //зміна значення в масиві
// arr[4] = 'new value';
// console.log(arr);
// arr[7] = 'okten';
// console.log(arr);
// arr.unshift('hello');
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.splice(0, 4); // видаляє з якого index і скільки items
// console.log(arr)
// arr.push('last');// додає в кінець масиву елемент
// arr[arr.length] = 'add some'; // додає в кінець масиву
// console.log(arr)

//---------------------------------

// Багатовимірні масиви
//
// let arr1 = [
//     [11, 22, 33], //0
//     [true, false, 0], //1
//     [{name: "alex", age: 40}, {name: "mary", age:33}], //2
//     [345, 2332, 'something', 'else'], //3
// ]
//
// console.log(arr1[2][1].age); // витягуємо з масиву елемент 33
// console.log(arr1[1][0]); // true
// console.log(arr1[3][3]); // else

// --------------------------------

// Об'єкти
//
// let user1 = {
//     id: 1,
//     name: 'vasya',
//     age: 31,
// }
// console.log(user1)
// console.log(user1.id); // витягуємо значення id - 1;
// console.log(user1['age']); // витягуємо значення age - 31;
//
//
// // id (права частина) - характеристики, ключи (кey), property, field (поле) ;
// // 1 - (ліва частина) - значення, value;
//
// // внутрішні об'єкти
//
// let user2 = {
//     id: 1,
//     name: 'vasya',
//     age: 31,
//     skills: ['html', 'js', 'pyton', 'css', 'java'],
//     wife: {
//         id:1,
//         name: 'Olga',
//         age: 28,
//         skills: ['html', 'js', 'pyton', 'css', 'java']
//     }
// }
// console.log(user2.skills[0]); // дістаємо один з skills - html
// console.log(user2.wife.skills[0]); // дістаємо один з skills wife - html
// console.log(user2.wife.name); // дістаємо ім'я - Olga

//---------------------------------

// Модифікація об'єктів
//
// let user = {
//     id: 1,
//     name: 'Norman'
// }
// user.age = 41; // додаємо характеристики та значення в об'єкт user
// user.skills = ['html', 'js', 'java'];
// user['status'] = false; // можна і таким чином додавати
//
// delete user.skills; // видаляє характеристику
// console.log(user);

//----------------------------------

// Різниця між примітивами та референціальними (посилальними(об'єкти)) типами
//
// Об'єкти (посилальними) змінюються за посиланням, а примітиви – за значенням.
//
// примітивні типи даних:
// - number,
// - string (але можуть бути посилальними),
// - boolean
//
// приклад примітивного типу
// let a = 100;
// let b = a;
// b = b + 10
// console.log(b); // 110
// console.log(a); // 100, let a не змінюється
// b = b + a
// console.log(b); // 210
// a = a + b
// console.log(a) // 310, a змінюється
//
//
// // приклад об'єктного (посилального) типу
// // об'єкти змінюються за посилання
// // ячейка одна: user та user1 - це обгортка посилання на один і той же об'єкт ( ячейку)
// let user = {name: 'alex'};
//
// let user1 = user;
// console.log(user1); // зараз однаково
// user1.age = 31; // додаємо поле
// console.log(user1); // змінюється об'єкт
// console.log(user); // user змінюється і додається поле age: 31

// ---------------------------------

// Логічні розгалуження if
//
// let color = 'red'
// if ('red') {
//     console.log('stop')
// }else {
//
// }
//
// let age = +prompt('enter your age')
// if (age >= 18) {
//     console.log('adult')
// } else {
//     console.log('cartoon')
// }
//
// let color = prompt('enter color!')
// if (color === 'green') {
//     if (confirm('is road clean?')) {
//         console.log('go')
//     }else {
//         console.log('just wait')
//     }
// }else if (color === 'yellow' ) {
//     console.log('wait')
// } else if (color === "red") {
//     console.log('stop')
// } else {
//     console.log('your enter wrong color')
// }
//
// let color = prompt('enter color!')
// let isRoadClean = confirm('is road clean?');
// if (color === 'green' && isRoadClean) {
//     console.log('go')
// } else if (color === 'yellow' ) {
//     console.log('wait')
// } else if (color === "red") {
//     console.log('stop')
// } else {
//     console.log('your enter wrong color')
// }

// ---------------------------------

// Логічні розгалуження switch
//
// let color = prompt('enter color');
// switch (color) {
//     case 'green':
//         console.log('go');
//         break;
//     case 'yellow':
//         console.log('wait')
//         break;
//     case 'red' :
//         console.log('stop')
//         break;
//     default:
//         console.log('wrong color')
// }
//
// let color1 = prompt('enter color');
// switch (color1) {
//     case 'green':
//     case 'yellow':
//         console.log('go');
//         break;
//     case 'red' :
//         console.log('stop')
//         break;
//     default:
//         console.log('wrong color')
// }

// ---------------------------------

// Ternary

let obj = {
    id: 1,
    name:'vasya',
    age: 18
};

// let access;
// if (obj.age > 18) {
//     access = true
// } else {
//     access = false
// }
// console.log(access)

let access = obj.age >= 18 ? 'Yes' : 'No';

console.log(access)




// Світлофор
// let red = document.getElementById('red');
// let yellow = document.getElementById('yellow');
// let green = document.getElementById('green');
// let body = document.body
//
// let clickRed = red.onclick = function () { body.style.background = 'red'}
// let clickYellow = yellow.onclick = function () {body.style.background = 'yellow'}
// let clickGreen = green.onclick = function () { body.style.background = 'green'}
// if (clickRed) {
// }else if (clickYellow) {
//
// }else if (clickGreen) {
//
// }else {
//     body.style.background = 'black'
// }












