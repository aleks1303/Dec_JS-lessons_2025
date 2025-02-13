// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілкових функцій
//
// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами, а і б

let area = (a, b) => a * b
console.log(area(10, 20));

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let radius = (r) => 3.14 * r * r
console.log(radius(10)); // 314

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r

let cylinder = (r, h) => 2 * Math.PI * r * h
console.log(cylinder(5, 15)); // 471.2

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
let users = [
    {name: 'Max', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olga', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olga', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
let arr = (users) => {
    for (const user of users) {
        console.log(user)
    }
}
arr(users)

// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let text = (text) => {
    return document.write(`<p>${text}</p>`)
}
(text('Hello friend!'));

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let list = (text) => {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
list('Hello world!!!')

// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let listOfLi = (text, num) => {
    document.write(`<ul>`)
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
listOfLi('Some text!!!', 3)

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа, стрінги, булеві), та будує для них список

let numbers = [32, 45, 54, 'also', 'string', true, false]
let arrNum = (numbers) => {
    document.write(`<ul>`)
    for (const number of numbers) {
        document.write(`<li>${number}</li>`)
    }
    document.write(`</ul>`)
}
arrNum(numbers)

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ. Для кожного об'єкту окремий блок.

let usersArray = [
    {id: 1, name: 'max', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olga', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31,},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olga', age: 31},
    {id: 11, name: 'max', age: 31}
];

let arrObj = (users) => {
    for (const item of users) {
        document.write(`<div>
  <h4>Id: ${item.id}</h4>
  <h3>Name: ${item.name}</h3>
  <h3>Age: ${item.age}</h3>
  <br>
</div>`)
    }
}
arrObj(usersArray)

//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

let array = [3, 33, 333, 44, 1, -56, 56, 23]
    let minNum = (array) => {
    let min = array[0]
        for (let i = 1; i < array.length; i++) {
            let num = array[i]
            if (min > num) {
                min = num
            }
        }
        console.log(min)
}
minNum(array)
// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let arr1 = [20, 30, 20, 30]
let sum = (arr1) => {
    let counter = 0;
    for (const item of arr1) {
        counter = counter + item;
    } return counter
}
console.log(sum(arr1)); // 100


// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
let arr2 = [11,22,33,44,55];
let swap = (arr, i1, i2, i3) => {
  let newNum = arr[i1]
    arr[i1] = arr[i3]
    arr[i3] = newNum
  return arr
}
console.log(swap(arr2, 0, 1, 4));

// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:41},{currency:'EUR',value:45}],'USD') // => 250


let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
   let change ;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            change = item
        }
    } return sumUAH / change.value
}
console.log(exchange(10000, [{currency: 'USD', value: 41}, {currency: 'EUR', value: 45}], 'USD'));

