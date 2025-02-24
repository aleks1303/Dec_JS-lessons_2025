// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкта.
// Додати перевірки на undefined, null, NaN.
//     Подумати та реалізувати логіку, в якій кінцевий об'єкт буде мати функції, які в нього були до цього моменту.

function clone(obj) {
    if (obj) {
        let functions = []
        for (let key in obj) {
            if (typeof obj[key] === 'function') {
                const cloneFunc = obj[key].bind({});
                functions.push({cloneFunc, key});
                console.log(cloneFunc)
            }
        }
        console.log(functions)
        let parse = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            parse[func.key] = func.cloneFunc
        }
        return parse

    }
    throw new Error('something went wrong');
}

const clone1 = clone({
    id: 1, name: 'max', age: 25, foo() {
    }, bar(msg) {
        return msg
    }
});

console.log(clone1.bar('hello bar'))


// #iz6emEsP2BA
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// за допомоги map перетворити кожен елемент на наступний тип {id, title, monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції


const newArray = coursesAndDurationArray.map((value, index) => ({...value, id: index + 1}));
console.log(newArray)