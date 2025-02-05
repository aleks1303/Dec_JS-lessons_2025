// console.log('asd'+ " " + "asd")

// //Змінні:
//числа - number,
// string - стрічка,
// boolean - true or false
// {
//     var a = 5;
//     let b = 5;
//     console.log(b)
// }
// console.log(a)
// console.log(b)
//
// //let a не спрацьовує за межами ініціалізації
//
//
// const PI = 3.14;
// console.log(PI)
// PI = 234
//
// // const не перевизначається
//
// let a = "something"
// console.log(a);
// a = "never"
// console.log(a);
//
// // let - перевизначається

//-----------------------------------------------------

// //Базові типи даних
//
// let a = "hello world";
// // a = 5
// console.log(typeof a, a);
//
// let b = 134123
// console.log(typeof b, b);
//
// let c = true;
// console.log(typeof c, c);

//------------------------------------------------------

// // Тип string та базові операції з ним
//
//
// let a = '"some"'
// console.log(a)
// let b = "'some'"
// console.log(b)
// let c = `some`
// console.log(c)
//
// // Конкатинація - це процес з'єднання string значення в одну string (речення)
//
// let greeting = 'hello';
// let intro = 'my name is';
// let name = 'Vasya';
//
// let msg = greeting + " " + intro + " " + name;
// console.log(msg)
//
// let msg2 = `${greeting} ${intro} ${name}`;
// console.log(msg2)

// ------------------------------------------------------

// Числові значення
//
// let a = 1000002 // integer
// console.log(a)
// let b = 3.123343 // float double
// console.log(b)
//
// console.log(20 + 30);
// console.log(30 - 20);
// console.log(3 * 3);
// console.log(40 / 20);
//
// console.log(0.1 + 0.2) // to fix
//
// console.log(0.1 + 0.4)
//
// let big =  1234456735447373784657473772; //перетворює
// let big1 = 1234456735447373784657473772n; // number
// let big2 = BigInt(1234456735447373784657473772); // number, але інше;
//
// console.log(big)
// console.log(big1)
// console.log(big2)
//
// let n1 = 100;
// let n2 = 300;
// let n3 = n1 + n2
// console.log(n3)

// ------------------------------------------------------

// // boolean
//
// let a = true;
//
// // <, >, ==, ===, =>, <=, !=, !==  - це оператори використання boolean значень
//
// // приклади
// console.log(10 > 5);
// console.log(5 === 10);
// console.log(5 == "5"); // number перетворюється в string  - не строга еквівалентність
// console.log(5 === '5') // number не перетворюється в string - строга еквівалентність
// console.log(10 === 10);
// console.log(12 < 52);
// console.log("ABC" === "abc") // працює аскікод
// console.log("asd" < 'azd') // аскікод
// console.log('6' !== '6')

//-------------------------------------------------------

// Приведення конвертації типів даних
//
// let a = 123 + ''
// console.log(typeof a, a);
// console.log(typeof (100 + 100 + "")) // спочатку плюсує, потім перетворює
// console.log(" " + 200 + " " + 100 ) // спочатку перетворює, потім залишає string
//
// console.log(typeof (+'1004433'))
// console.log(+'1004433asd') // не є числом NaN
//
// console.log(parseInt('432332322')); // перетворює на число
// console.log(parseInt('432332322asdd')); // перетворює на число, не робить NaN
// console.log(parseInt('432332322.3322')); // перетворює на число, відсікає після точки
// console.log(parseFloat('432332322.3322')); // перетворює на число, показує після точки
//
// console.log(!!1000) // перетворює в boolean значення одна ! - не існує (false), !! - існує, перетворює на true
// console.log(!!0)
// console.log(!!"")
// console.log(!!"true")
//
// з boolean на число чи стрічку
// console.log(+true)
// console.log(+false)
// console.log(true + "")
// console.log(true + 100)
// console.log(false + 100) //false 0

//-------------------------------------------------------

// Визначення типів та інші типи і їх приведення
//
// let n = 100;
// let s = 'asd';
// let b = true;
//
// console.log(typeof n) // визначення типів
// console.log(typeof s)
// console.log(typeof b)
//
// let arr = [11,33,44, true];
// let obj = {
//     name: 'vasya',
//     age: 31
// };
// function asd () {}
//
// console.log(typeof (arr))
// console.log(typeof (obj))
// console.log(typeof (asd))
//
// let x = undefined;
// console.log(x)
// console.log(typeof undefined) // undefined
// console.log(typeof null) //object - bag js
// console.log(typeof (NaN)) // - це число
//
// console.log(!!0); //false, 0 не існує як, чогось вагомого
// console.log(!!null); //false, переводить в boolean, а потім визначає, чи null це щось визначене, чи вагоме, ні (false)
// console.log(!!undefined); //false - наявність чогось - undefined - нічого не являє, як null, 0, ''.
// console.log(!!''); //false
//
// console.log(!!'0') //true - 0 це як стрічка ( аскікод)
// console.log(!!" ") // true - пробіл має аскікод












