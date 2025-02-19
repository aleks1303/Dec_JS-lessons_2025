
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
//
// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greeting () {
//         return `Hello my name is ${this.name}`;
//     }
// }
// let user = new User('max', 34);
// console.log(user.name);
// console.log(user.age);
// console.log(user.greeting());
//
//
// // створити класи, за допомогою command N
// // в класі прописуємо поля які необхідні викликаємо command N
// // і в конструкторі вибираємо поля
//
// class User1{
//
//     constructor(name, age, status) {
//         this.name = name;
//         this.age = age;
//         this.status = status;
//     }
//   work (){
//     return `hello my name is process`
//  }
// }
// const user4 = new User1('Some', 24, true)
// console.log(user4)
// console.log(user4.work());
// // static - викликається без присвоєння класу змінної,
// // але this не працює в цьому контексті, тільки функція, яку викликаємо
//
// // У класах static використовується для методів та властивостей, які не залежать
// // від конкретного екземпляра об'єкта.
// class User2 {
//     static count = 0
//
//     constructor(name, age, status) {
//         this.name = name;
//         this.age = age;
//         this.status = status;
//         User2.count++;
//     }
//     static getCount () {
//        return  User2.count;
//     }
// }
// let user1 = new User2('alex')
// let user2 = new User2('alex')
// let user3 = new User2('alex')
//
// console.log(User2.getCount()); // підрахувало 3 виклики
//
// // static - використовується для глобальних методів та властивостей класу.
// // Не можна викликати через об'єкт, тільки через сам клас.
// // Корисно для утілитних функцій, констант, підрахунку екземплярів.
//
//
// // Наслідування
// // extends
//
// class Work extends User1{
//
//
//     constructor(name, age, status, password) {
//         super(name, age, status);
//         this.password = password;
//     }
//
//     // викликаємо інформацію з іншого класу або впроваджуємо свою
//     // super.work()
//     work() {
//        return `hello and my name is work`;
//     }
// }
// let work = new Work('Some', 35, true, 343334)
// console.log(work)
// console.log(work.work()); //  можна викликати тут
//
//
// // наслідування без конструктора
//
// function Foo ( name, age) {
//     this.name = name;
//     this.age = age;
// }
// function Bar (name, age, password) {
//    Foo.apply(this, arguments)
//     this.password = password
// }
//
// let bar = new Bar('some', 23, 34)
// console.log(bar)

//------------------------------

// Дата
// об'єкт який зберігає інформацію про якусь певну дату (минулого чи майбутнього)
// маніпулювати датами програмно
//
// let now = new Date()

// console.log(now) // поточна дата
//
// console.log(now.getFullYear()) // 2025
// console.log(now.getMonth()) // 1 - починається з 0
// console.log(now.getDay()) // день тижня
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())
// console.log(now.getMilliseconds())
// console.log(now.getTime()) // мілісекунди від 1 січня 1970 року (системи юінкс)
//
//
// // визначити дату
// let data1 = new Date(1740000000000)
// console.log(data1)
//
// let data2 = new Date("June 10 1990 04:25:34");
// console.log(data2)
//
// let data3 = new Date(2011, 0, 1, 20, 34, 45,55);
// console.log(data3)
//
// // встановити дату
// data3.setDate(31)
// console.log(data3)
//
// // можна перевіряти чи повнолітня людина, чи ні!
// let user = {
//     id:1,
//     name: 'max',
//     bday: new Date(1740000000000)
// }
// console.log(user)

//-------------------------------

// Set
//унікальний набір, значення не повторюються
// передаються тільки унікальні значення
//
// let set = new Set()
// set.add('asd')
// set.add('ddd')
// set.add(1)
// set.add(2)
// console.log(set)
//
// // чи існує об'єкт
// console.log(set.has(1)); // true
//
// console.log(set.delete('asd'));
// console.log(set) // вже не існує
//
// console.log(set.size) //3
//
// // ітерування
// set.forEach(value => console.log(value))
//
// //перетворити на масив
//
// let setArray = Array.from(set)
// console.log(setArray)
//
// // перетворення об'єкта з однаковими значеннями на масив з унікальними
//
// let num = new Set([11, 22, 33, 44, 11, 22, 33, 44, 55])
// console.log(num)
// let numberArray = Array.from(num)
// console.log(numberArray)

// ------------------------------

// Map
//
// mapping - асоціація
//
// let map = new Map();
// console.log(map) // map{}
// map.set(1, 'one')
// map.set(2, 'two')
// map.set(3, 'three')
// console.log(map) // {map {1: 'one', 2: 'two', 3: 'three'}
//
//
// // це приклад асоціацій з об'єктами
// let names = new Map()
// names.set('salt', {name: 'max', surname: 'saltov'})
// names.set('sugar', {name: 'alex', surname: 'sladkiy'})
//
// console.log(names.get('salt'))
//
//
// //шукати по посиланню на об'єкт
// let zam = {id: 'zam'};
//     map.set(zam, {name: 'pavel', surname: 'zamokov'});
// console.log(map.get(zam))
//
// // ключі в мар унікальні
//
// // видалити map.delete()
// // почистити - map.clear()
// // розмір - map.size()
//
// // будуємо масив з об'єктами
// // витягуємо ключи
// let from = Array.from(names.keys());
// console.log(from)
//
// //витягуємо значення
// console.log(Array.from(names.values()))

