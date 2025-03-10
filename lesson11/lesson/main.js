
// ------------------------------------

// fetch
//
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => {
//         for (const {name} of users) {
//             document.write(`<div>${name}</div>`)
//         }
//
//     });
//
// fetch('https://dummyjson.com/products?limit=3&skip=3')
//     .then(res => res.json())
//     .then (({products}) => {
//         for (const {id, brand, category, price, thumbnail} of products) {
//             document.write(`<div>${id}___${brand} ${category} ${price}</div>`)
//             document.write(`<img src="${thumbnail}" alt="#">`)
//         }
//
//     });
//
// // Додати до сервера інформацію
// fetch('https://dummyjson.com/products/add', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         title: 'BMW Pencil',
//         /* other product data */
//     })
// })
//     .then(res => res.json())
//     .then(console.log);
//
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

//--------------------------------------

// URL
//
//searchParams
//
// // пошук за параметрами
// let url = new URL('https://jsonplaceholder.typicode.com/users')
// // додаємо до url параметри (key, value)
// // і знаходимо одного user з id 4
// url.searchParams.set("id", '4')
//
// // отримаємо 4
// console.log(url.searchParams.get('id'));
//
//
// fetch(url)
//     .then((response) => response.json())
//     .then((json) => console.log(json));

//--------------------------------------

// regexp and post

// const msg = document.getElementById('msg');
// //
// // форма з регулярними виразами
// let form = document.forms[0];
// form.onsubmit = function (ev)  {
//    ev.preventDefault();
//    let userId = this.userId.value;
//     // if(!userId.match(/[0-9]/g)) {
//     //     const error = document.createElement('div');
//     //     error.classList.add('color')
//     //     error.innerHTML = '"need number"'
//     //     msg.appendChild(error)
//     // }
//    let title = this.title.value;
//    let body = this.body.value;
// if (!!userId.match(/[0-9]/g) && !!body.match(/(\w+\s){2,}/g)) {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: title,
//             body: body,
//             userId: +userId,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((response) => response.json())
//         .then((json) => console.log(json));
// }
// }
