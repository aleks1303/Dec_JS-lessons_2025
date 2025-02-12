// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function resultArea (a, b) {
    return a * b
}
console.log(resultArea(10, 30));

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function radius (r) {
   return  3.14 * r * r
}
console.log(radius(10)); // 314

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinder (r, h) {
    return 2 * Math.PI * r  * h
}
console.log(cylinder(5, 15)); // 471.2

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
function arr (users) {
    for (const user of users) {
        console.log(user)
    }
}
arr(users)
// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function paragraph (p) {
    document.write(`<p> ${p}</p>`)
}
(paragraph('lorem ipsum'));


// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
function list (text) {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
list('Some list')


// #0Kxco1edSN
// - створити функцію яка створює ul з елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function list1 (text, num) {
    document.write(`<ul>`)
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
list1('some words else', 8)


// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
let array = [11, 'some', 'any', 34, 546, true]

function arrItems (items) {
    document.write(`<ul>`)
    for (const item of items) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
arrItems(array)

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let usersArray = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31,},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 31}
];
function arrObj (usersArray) {
    for (const item of usersArray) {
        document.write(`<div>
         <h4>Id: ${item.id}</h4>
         <h3>Name: ${item.name}</h3>
         <h3>age: ${item.age}</h3>
         <br>
</div>`)
    }
}
arrObj(usersArray)
//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

let arrNum = [6, 33, 4534, 3, 34, 21, 25, 3, -1 ]

function countMin (arrNum) {
    let minNum = arrNum[0];
    for (let i = 1; i < arrNum.length; i++) {
        let number = arrNum[i]
        if(number < minNum) {
          minNum = number
        }
    }
    console.log(minNum)
}
countMin(arrNum)


// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let num = [10, 10, 33, 44, 55, 66, 77]
function sum (num) {
    let sum = num[0];
    for (let i = 1; i < num.length; i++ ) {
        sum = sum + num[i]
    }
    console.log(sum) // 295
}
sum(num)

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах

function swap (arr, index1, index2) {
    let num = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = num
    return arr
    }

console.log(swap([11, 22, 33, 55, 44], 3, 1))

// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

let exchangeSum = [
    {currency:'USD',value:41},
    {currency:'EUR',value:44}
]
function exchange( sumUAH, currencyValues,exchangeCurrency) {
    let currencyItem;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            currencyItem = item;
        }
    }
    return sumUAH / currencyItem.value

}
console.log(exchange(10000, exchangeSum, 'USD'));
