
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

//--------------------------------

// Стрілочні функції

function calc (a, b) {
    return a+b
}
console.log(calc(10, 20)); // 30

// те саме

let calc1 = (a, b) => a + b
console.log(calc1(10, 20)); // 30

// arguments в стрілочних функціях не використовується
// let foo = (li) => {
//     console.log(arguments)
// }
// foo('allo')

// те саме з return

let calc2 = (a,b) => {
    return a + b
}
console.log(calc2(10, 20)); //30

let asd = function (li) {
   return li
}
console.log(asd('hello'));