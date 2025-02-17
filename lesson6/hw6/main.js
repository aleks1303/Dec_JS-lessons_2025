'use strict'
// #dFeorS3m7u
// - Знайти та вивести довжину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
console.log(str1.length); // 11

let str2 = 'lorem ipsum';
console.log(str2.length) // 11

let str3 = 'javascript is cool';
console.log(str3.length) // 18


// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str4 = 'hello world';
console.log(str4.toUpperCase());

let str5 = 'lorem ipsum';
console.log(str5.toUpperCase());

let str6 = 'javascript is cool';
console.log(str6.toUpperCase());


// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str7 = 'HELLO WORLD';
console.log(str7.toLowerCase());

let str8 = 'LOREM IPSUM';
console.log(str8.toLowerCase());

let str9 = 'JAVASCRIPT IS COOL';
console.log(str9.toLowerCase());


// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str10 = '  dirty string   '
console.log(str10.trim());


//     #bfoJuse4ZzP
// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str11 = 'Ревуть воли як ясла повні';
function stringToArray(str) {
    return  str.split(' ')
}
console.log(stringToArray(str11));


// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arrNum = [10,8,-7,55,987,-1011,0,1050,0];
let mapStr = arrNum.map(value => {
    return value.toString();
});
console.log(mapStr)

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];
function sortNums(array, direction) {
  return  array.sort((a, b) =>  a - b )
}
console.log(sortNums(nums));

// ==========================
//
//
// #yo06d74c1C
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати, залишивши тільки курси з тривалістю більше ніж 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id, title, monthDuration}

let sortArr = coursesAndDurationArray.sort((a, b) => {
        if (a.monthDuration < b.monthDuration) {
            return 1
        } else if (a.monthDuration > b.monthDuration) {
            return -1
        } else if (a.monthDuration === b.monthDuration) {
            return 0
        }
    })
console.log(sortArr);


// -- відфільтрувати, залишивши тільки курси з тривалістю більше ніж 5 місяців

let userFilter = coursesAndDurationArray.filter(value =>
     value.monthDuration > 5
)
console.log(userFilter)


// -- за допомоги map перетворити кожен елемент на наступний тип {id, title, monthDuration}

let mapObj = coursesAndDurationArray.map((value, index) => {
    return {id: index +1 , ...value}
})
console.log(mapObj)



// =========================
//     #bolvdlhP



// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }



const cardSuit = ['spade', 'diamond','heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack','queen','king', 'ace'];


const cards = []
for (const suit of cardSuit) {
    for (const value of values) {
        let card = {cardSuit: suit, value: value};
        if (suit === 'spade' || suit === 'clubs') {
            card.color = 'black';
        } else {
            card.color = 'red';
        }cards.push(card)
    }
}
console.log(cards)


// - знайти піковий туз
const ace = cards.find(value => {
    if (value.cardSuit === 'spade' && value.value === 'ace') {
       return value
    }
});
console.log(ace)


// - всі шістки
const cardSix = cards.filter(value => value.value === '6');
console.log(cardSix)

// - всі червоні карти
const cardsRed = cards.filter(value => value.color === 'red');
console.log(cardsRed);


// - всі буби
const cardsDiamond = cards.filter(value => value.cardSuit === 'diamond');
console.log(cardsDiamond)

// - всі трефи від 9 та більше
const cardClubs = cards.filter(value => {
    if (value.cardSuit === 'clubs' && (value.value === '9' || value.value === '10' ||
        value.value === 'jack' || value.value === 'queen' || value.value === 'king' || value.value === 'ace')) {
       return value
    }
});

// console.log(cardClubs.filter(card => card.cardSuit === 'clubs' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value)));

console.log(cardClubs)
// =========================
//
//
// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

const reduceCards = cards.reduce((acc, suit) => {
    switch (suit.cardSuit){
        case 'clubs':
            acc.clubs.push(suit);
            break;
        case 'spade':
            acc.spades.push(suit);
            break;
        case 'diamond':
            acc.diamonds.push(suit);
            break;
        case 'heart':
            acc.hearts.push(suit);
            break;
    }
return acc
}, { clubs: [], spades: [], diamonds: [], hearts: [], })
console.log(reduceCards)




// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },{
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    }, {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let findSass = coursesArray.filter(value => {
  return value.modules.includes('sass')
})
console.log(findSass);


let findDocker = coursesArray.filter(value => {
    return value.modules.includes('docker')
})
console.log(findDocker);