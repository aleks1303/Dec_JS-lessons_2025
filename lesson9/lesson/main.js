
// DOM Об'єктна модель документа та пошук елементів
//
// можна подивитись все, що знаходиться в документі
// console.log(document);
// console.log(document.head);
// console.log(document.head.innerHTML);
// console.log(document.head.children);
//console.log(document.body.innerHTML);
//
//
// // Пошук елементів за id та class
//
// //пошук по ID
// let ul1 = document.getElementById('list-1');
// console.log(ul1)
//
//
// // пошук по class
// let NameClass = document.getElementsByClassName('menu');
// console.log(NameClass)
// // пошук окремих елементів через class, відбувається через ітерацію
// // тому, що отримуємо псевдомасив HTML Collection
//
//
// // пошук по TAG
// let nameTag = document.getElementsByTagName('ul');
// console.log(nameTag);
// // теж треба ітерувати та діставати окремий елемент
//
//
// // знайти li в першому списку
// // спочатку дістаємо перший список, а потім зі списку дістаємо кожний елемент
// let list1 = document.getElementById('list-1');
// console.log(list1);
// console.log(list1.getElementsByTagName('li'));
//
//
// // Пошук елементів через querySelector
//
// // дістає один тег (перший)
// console.log(document.querySelector('ul'));
//
// // дістає всі теги за ім'ям
// // видає список вузлів
// console.log(document.querySelectorAll('ul'));
//
//
// //можна використовувати css синтаксис
// console.log(document.querySelectorAll('.menu:nth-child(2)>li'));
// // or
// console.log(document.querySelectorAll('#list-2 > li'));
// // теж саме тільки через id
//
// // далі можна ітерувати та діставати кожен оклемий елемент

// --------------------------------------------

// Forms API
//
// // отримуємо всі форми
// console.log(document.forms);
//
// // знаходимо по name
// console.log(document.forms['f1']);
//
// // доступ до input
// console.log(document.forms['f1'].userName);
// // or
// console.log(document.forms['f2']['userEmail']);

// -------------------------------------------

// Маніпуляція DOM елементами
//
// let target = document.getElementById('target');
// console.log(target);
//
// // доступ до тексту і заміна його
// // target.innerHTML = 'Hello';
// // console.log(target);
//
// // доступ до css характеристик
// // робить інлайн стилі
// target.style.backgroundColor = 'silver';
//
// // додати class
// target.classList.add('active');
// console.log(target);
//
// // витягнути class за певним індексом
// console.log(target.classList.item(0)); // active
//
// // чи існує class, повертає boolean
// console.log(target.classList.contains('active')); // true
//
// // якщо class існує - видалю, якщо ні - додам
// console.log(target.classList.toggle('foo')); // true
//
// console.log(target.classList.toggle('foo')); // true
//
//
// // отримати інформацію про атрибути
// console.log(target.getAttribute('bar')); // ???
// console.log(target.getAttribute('id')); // target
// console.log(target.getAttribute('class')); // active
//
// // встановити або замінити атрибути
// target.setAttribute('bar', 'desc');
//
//
// // отримати element, який знаходиться до того елемента з яким працюємо - тобто target
// console.log(target.previousElementSibling);
//
// //отримати наступний елемент після нашого
// console.log(target.nextElementSibling);
//
// // дістати всі внутрішні елементи
// console.log(target.children);
//
// // отримати всі вузли (Node)
// console.log(target.childNodes);
//
// // додати текст
// // let one = document.getElementById('one');
// // one.innerText = '<b>hello</b>' // - це безпечно
// // one.innerHTML = '<b>hello</b>' // - це небезпечно для xss-атак
//
//
// console.log(target.outerText); // показує текст в середині тегу
// console.log(target.outerHTML); // показує розмітку об`єкт
//
//
// // якщо 3 div з однаковим class
// let collectionDiv = document.getElementsByClassName('point')
// console.log(collectionDiv)
//
// // ітеруємо та додаємо в кожен текст
// for (const div of collectionDiv) {
//     div.innerText = 'Hello! I am div'
// }

// ------------------------------------------

// Створення елементів
//
// let h2 = document.createElement('h2')
// h2.innerText = 'some text'
// document.body.append(h2)
//
// приклад використання
// let usersDiv = document.getElementById('users');
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// // знаємо тільки модель даних
// for (const user of users) {
//     let div = document.createElement('div');
//     div.classList.add('user');
//     div.innerText = user.name
//     usersDiv.append(div)
// }
//
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// for (const user of users) {
//     let userDiv = document.createElement('div')
//     let h2 = document.createElement('h2');
//     h2.innerText = user.name
//
//     let h4 = document.createElement('h4');
//     h4.innerText = (user.age + ' ' + user.status)
//
//     userDiv.append(h2, h4)
//
//     document.body.appendChild(userDiv)
// }

// ------------------------------------------




