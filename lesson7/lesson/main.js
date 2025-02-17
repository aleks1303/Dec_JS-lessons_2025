
// Функції конструктори
//
// function User (name, age, status) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
// }
// const user1 = new User('Max', 33, false);
// console.log(user1)
//
//
// //як додати в об'єкт, ще об'єкт
//
// //композиція та агрегація
//
// function User1 (name, age, status, wife) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = wife;
// }
// const userWithWife = new User1('Alex', 34, true, {name: 'Anna', age:30, status:true})
// console.log(userWithWife)
//
// // ще варіант
// function User2 (name, age, status, wifeName, wifeAge, wifeStatus) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = {name: wifeName, age: wifeAge, status: wifeStatus}
// }
// const userWithWife1 = new User2('Oleg', 33, true, 'Anna', 27, true)
// console.log(userWithWife1)
//
//
// // з функцією
// function User3 (name, age, status, wife) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.greeting = function() {
//         console.log(`hello my name is ${this.name} and name my wife is ${wife.name}`);
//     }
//     this.wife = wife;
//
// }
//
// const userWithWife2 = new User3('Norman', 30, true, {name: 'Nora', age:30, status:true})
// console.log(userWithWife2)
//
// userWithWife2.greeting();

// -----------------------------

// Розширення конструкторів через prototype, підміна this через call apply bind
//
// // якщо треба зміни об'єкт
//
// function User (name, age) {
//     this.name = name;
//     this.age = age;
// }
// // функція без доступу
//
// // наприклад якщо додати функцію в один об'єкт він не буде повторюватися
// // буде тільки там де додали
// // створюючи інший об'єкт наново треба створювати функцію і викликати її
//
// // const user = new User('nina', 25)
// // user.greeting = function () {
// //     console.log('hello')
// // }
// // console.log(user)
// // user.greeting()
// //
// // // тут greeting  відсутній
// // const user1 = new User ('norman', 25)
// // console.log(user1)
//
// // є декілька варіантів доступитися до newUser і змінити щось
//
// // більш зручний - prototype
//
// // User.prototype.greeting = function () {
// //     console.log(`hello my name is ${this.name}`)
// // }
// // // функція greeting існує тут і в інших викликах
// // const user2 = new User('lora', 34)
// // console.log(user2)
//
//
// // apply - застосовуємо до інших об'єктів те, що є в інших об'єктах
//
// const user4 = new User('ivan', 33)
// user4.greeting = function (msg) {
//     return `${msg} ${this.name}`;
//
// }
// console.log(user4)
// console.log(user4.greeting('hello my name is'));
//
//
// // створюємо user5 і застосовуємо greeting від user4
// const user5 = new User('ivanka', 14)
// console.log(user4.greeting.apply(user5,['her name is'] ))
// console.log(user5)
//
//
// // схоже метод call
// const user6 = new User('viktoria', 16);
// console.log(user4.greeting.call(user6, 'hello and my name is'));
//
//
// // метод bind - як копія функції та робимо нову
//
// const user7 = new User('bogdana', 14);
//
// let greetingCopy = user4.greeting.bind(user7, 'hello girls! my name is') // можна тут передати arguments
// console.log(greetingCopy('hello girls! my name is')) // викликаємо функцію і передаємо аргументи

// -----------------------------

// Класи та наслідування





