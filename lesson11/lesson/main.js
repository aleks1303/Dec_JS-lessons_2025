
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

