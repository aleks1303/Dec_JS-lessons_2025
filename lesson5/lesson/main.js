
// ------Функції частина 2 -------------------

// Функціональні вирази
//
// function expression
//greeting()
// let greeting = function () {
//     console.log('Hi') // така функція не відпрацює, якщо викликати раніше, тільки після, тому що оголошена зміна
// }
// greeting()
//
// //---------
//
// //  function declaration
// asd()
// function asd () {
//     console.log('bay') // така функція відпрацює, якщо викликати раніше чи пізніше
// }

//---------------------------------

// Стрілочні функції
//
// function calc (a, b) {
//     return a+b
// }
// console.log(calc(10, 20)); // 30
//
// // те саме
//
// let calc1 = (a, b) => a + b
// console.log(calc1(10, 20)); // 30
//
// // arguments в стрілочних функціях не використовується
// // let foo = (li) => {
// //     console.log(arguments)
// // }
// // foo('allo')
//
// // те саме з return
//
// let calc2 = (a,b) => {
//     return a + b
// }
// console.log(calc2(10, 20)); //30
//
// let asd = function (li) {
//    return li
// }
// console.log(asd('hello'));

//----------------------------------

// Функції в об'єктах та контекст this
//
// //якщо змінюється назва об'єкта this захищає від помилки
// //this в даному контексті являється об'єктом, тобто цей об'єкт.
//
// let user = {
//     name: 'Max',
//     age: 34,
//     greeting: function (msg) {
//         return (`${msg} my name is ${this.name}`)
//     },
//     myAge: (msg) => `${msg} my age is ${this.age}`
// }
// console.log(user.greeting('Hi!')); // Hi! my name is Max
// console.log(user.myAge('hello')) // hello my age is undefined
//
// // у стрілкових функціях this втрачає свій контекст
// // this посилається не на об'єкт, а на глобальний об'єкт window де поля age не існує
// // this в середині стрілкових функціях не працює, тільки звичайні

//----------------------------------

// // Замикання
//
// // Замикання - це можливість функції тримати посилання на якійсь внутрішній об'єкт.
// // Замикання – це функція, яка "запам’ятовує" змінні з області видимості, де вона була створена.
//
// // Функція asd() створює локальну змінну x, а потім повертає внутрішню функцію inner.
// // Коли ми викликаємо asd(), вона повертає функцію, яка має доступ до змінної x,
// // навіть після виходу asd() з виконання.
//
// function asd () {
//     let x = 11
//     function inner () {
//         return ++x
//     }
//     return inner
// }
// const c = asd() // присвоюємо зміну і при кожному виклику вона плюсує зміну x
// console.log(c()) // 12
// console.log(c()) // 13
// console.log(c()) // 14
// console.log(c()) // 15
//
//
//
// //  Приклади
//
// let user = {
//     name: 'Max',
//     age: 23
// }
// // хто завгодно може це змінити age = 455 і він буде 455 - це не правильно
//
// function buildingUser (name, age) {
//     let user = {name, age}
//     return {
//         getName () {
//          return  user.name
//         },
//         getAge () {
//            return user.age
//         },
//         setAge (age) {
//             if (age > 0 && age < 120) {
//                 user.age = age
//             }
//         }
//     }
// }
//
// let getUser = buildingUser('max', 34)
// console.log(getUser.getAge()) // 34
// console.log(getUser.getName()) // max
// getUser.setAge(119)
// console.log(getUser.getAge())
//
//
// // Приклад свій
//
// function cars (model, year) {
//     let car = {model, year};
//     return {
//         getModel () {
//             return car.model
//         },
//         getYear () {
//             return car.year
//         },
//         setYear (year) {
//             if (year < 2000) {
//                 car.year = year
//             }
//         }
//     }
// }
// let getCars = cars('bmw', 2001)
// console.log(getCars.getModel()); // bmw
// console.log(getCars.getYear()); // 2001
// getCars.setYear('1999')
// console.log(getCars.getYear());

//----------------------------------

// // Рекурсія
//
// // Рекурсія – це коли функція викликає сама себе, щоб вирішити певну задачу.
// // Рекурсія використовується для розв’язання задач, які можна розділити на менші підзадачі того ж типу.
//
// // Щоб уникнути нескінченного циклу, кожна рекурсивна функція має мати базовий випадок (умова)!!!
// // Це умова, коли функція не викликає себе знову.
//
// function foo (num) {
//     console.log('foo')
//     // foo() - буде безкінчений цикл
// }
// foo()
//
// // Приклад
// let arr = [11, 33, 44, true, 'some', 'some else', 11, 44]
// function iterator (arr, i) {
//     console.log(arr[i])
//     i++
//     if (i < arr.length) {
//         iterator(arr, i)
//     }
// }
// iterator(arr, 0)
//
// // достаємо масиви в масивах на різних рівнях за допомогою рекурсії
//
// let array4 = [[11, 22], 33, 44, 55, [66, 77, 88, [99, 100, [101, 102, 103]]]]
// let arrPush = [];
// function flatter (arr) {
//     for (const item of arr) {
//         if (Array.isArray(item)) {
//             flatter(item)
//         } else {
//             arrPush.push(item)
//         }
//     }
// }
// flatter(array4)
// console.log(arrPush);
//
// // ще спроба
//
// let arrArr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12, [14, 15, 16]]]]]
// let arrayPush = []
// function flat (arr) {
//     for (const item of arr) {
//         if (Array.isArray(item)) {
//             flat(item)
//         }else {
//             arrayPush.push(item)
//         }
//     }
// }
// flat(arrArr)
// console.log(arrayPush)

//----------------------------------

// // Генератори
//
// // Функція-генератор – це спеціальна функція в JavaScript,
// // яка може призупиняти своє виконання і повертати значення по черзі.
// //
// // Головна особливість генератора:
// // На відміну від звичайних функцій, генератор не виконується до кінця одразу,
// // а повертає значення поступово через yield.
//
// function* gen () {
//     yield 100;
//     yield 200;
//     yield 300;
// }
// let getGen = gen()
// console.log(getGen.next());
// console.log(getGen.next());
// console.log(getGen.next());
// console.log(getGen.next());
//
//
//
// // приклад з картами
// function* cardsHolder () {
//     const cards = [
//         {value:6, suite: 'diamond'},
//         {value:7, suite: 'spade'},
//         {value:8, suite: 'diamond'},
//         {value:9, suite: 'spade'}
//     ]
//     for (const card of cards) {
//         yield card
//     }
// }
// let card = cardsHolder()
// const card1 = (card.next()) // присвоюємо зміну і дістаємо value
// console.log(card1.value); // дістаємо сам об'єкт
// console.log(card.next())
// console.log(card.next())
// console.log(card.next())
// console.log(card.next())

// ---------------------------------

// Обробка помилок
//
// якщо стається помилка в коді, код далі не виконується
// console.log(a) // далі не виконується
//
//
// console.log('start');
//
// // щоб спіймати помилку використовуємо try, catch
// try{
//     console.log(b)
// } catch (e) {
//     console.error('Зміна не існує')
// } finally {
//     console.log('finally block') // виконується є помилка чи ні
// }
// //  код далі працює
// console.log('end');
//
// console.log(c)
//
//
// // приклад
// // як використовувати обробник помилок залежить від обставин
// function calc (a, b) {
//     try{
//
//     }catch{
//
//     }
//     if (b === 0) {
//         throw new Error('b is 0')
//     }
//     return a / b
// }
//
// console.log(calc(10, 0));



