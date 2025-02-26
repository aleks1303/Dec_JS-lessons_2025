
// JS preview | Події
//
// ev в аргументах - це свідок подій
// можна зчитувати всю інформацію про подію
//
// const target = document.getElementById('target');
// target.onclick = function (ev) {
//     console.log('click')
//     console.log(ev)
// };
//
// // події можуть бути перевизначені
// // тому, що target - це об'єкт
//
// // перевизначаємо
// target.onclick = function () {
//     console.log('new click')
// }
// console.log(target)
//
// // для того, щоб не перевизначати функцію, а додавати
// // використовують addEventsListener
//
// target.addEventListener('click', function () {
//     console.log('else new click')
// })
//
// міняємо колір в об'єкті
// target.onmousemove = function (ev) {
//     let r = ev.clientX;
//     let g = ev.clientX;
//     let b = ev.clientY;
//     this.style.background = `rgb(${r}, ${g}, ${b})`;
//
//     // console.log('move')
//     // console.log(ev.clientX, ev.clientY)
//
// }
// // заводимо мишу в об'єкт
// target.addEventListener('mouseover', function () {
//     console.log('over')
// });
//
// // виводимо мишу
// target.addEventListener('mouseleave', function () {
//     console.log('leave')
// })
//
// зчитуємо інформацію і виводимо в console або записуємо в блок target
// let i1 = document.getElementById('i1');
// i1. oninput = function () {
//     // console.log(this.value)
//     target.innerText = this.value
// }
// //
// // відправляємо інформацію з форми
// // забороняємо перезавантажити сторінку - preventDefault
// let f1 = document.forms.f1;
// f1.onsubmit = function (ev) {
//    ev.preventDefault()
//     // console.log(i1.value)
//     // збираємо інформацію і відправляємо у базу даних
//     let user = {name: f1.username.value}
//     console.log(user)
// }
//
// // перевіряти стан документа, чи завантажилась сторінка
//
// window.onload = function () {
//     console.log('load')
// }
//
// // таким чином виводимо інформацію на сторінку при завантаженні сторінки
// document.onreadystatechange = function () {
//     // console.log(document.readyState)
//     if (document.readyState === 'interactive') {
//         document.body.innerText = 'loading .....'
//     }
//     if (document.readyState === 'complete') {
//         document.body.innerText = 'Wait else.....'
//     }
//
// }

// --------------------------------

// JS preview | Локальне сховище
//
// працює як кошик!
//
// впроваджуємо інформацію в сховище
// localStorage.setItem('name', 'Alex')
//
// дістаємо зі сховища
// let name = localStorage.getItem('name');
// console.log(name) // Alex
//
//
// // почистити сховище
// // localStorage.clear();
//
// localStorage.setItem("user", JSON.stringify({id:1, name: "max", age:21}))
// let user1 = JSON.parse(localStorage.getItem("user"))
// console.log(user1)
//
//
// // змінюємо об'єкт
// user1.status = true
// localStorage.setItem("user", JSON.stringify(user1))
//
// // localStorage.clear();
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
// localStorage.setItem("users", JSON.stringify(users))
// let usersCopy = JSON.parse(localStorage.getItem('users'))
// console.log(usersCopy)
// usersCopy.push({})
// localStorage.setItem("users", JSON.stringify(usersCopy))
//
// console.log(usersCopy === users)

// ----------------------------------

// JS preview | Локальне сховище приклад.
// Приклад кошика на сайті.
//
// let products = [
//     {
//         title: 'milk',
//         price: 59,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 87,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 120,
//         image: 'https://images.prom.ua/6058703638_w600_h600_6058703638.jpg'
//     },
// ];
//
// const productsDiv = document.getElementsByClassName('products')[0];
//
// for (const product of products) {
//     let productBlock = document.createElement('div');
//
//    let h2 = document.createElement('h2');
//     h2.innerText = `Product: ${product.title} - Price: ${product.price} UAH`
//
//     let img = document.createElement('img')
//     img.src = product.image
//     img.classList.add('wight')
//
//     let button = document.createElement('button');
//     button.innerText = 'add to product'
//
//     button.onclick = function () {
//         let cart = JSON.parse(localStorage.getItem('cart')) || [] ;
//         cart.push(product)
//         localStorage.setItem('cart', JSON.stringify(cart))
//     }
//     productBlock.append(h2, img, button)
//     productsDiv.appendChild(productBlock)
// }


//-----------------------------------