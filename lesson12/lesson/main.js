// async await функції
//
// async function foo () {
//   let users =  await fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => response.json())
//          //console.log(users)
//
//     let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((response) => response.json())
//     //console.log(posts)
//
//     for (const user of users) {
//        user.posts = []
//         for (const post of posts) {
//            if (user.id === post.userId) {
//                user.posts.push(post)
//            }
//         }console.log(user)
//     }
// }
// foo ()

//---------------------------------

//  Асинхронність та цикл подій event loop
//
// console.log('start') // синхронна операція
//
// setTimeout( function foo () {
//     console.log('пройшло 2 секунди')
// },2000)
// console.log('end')
//
// // синхронні операції виконуються раніше, ніж асинхронні
// // навіть якщо перевизначаємо зміну x на 1000, x = 1
// // через чергу у виконані
//
// let x = 1
// setTimeout(function () {
//     x = 1000
//     console.log(x) // 1000, але виконання після 1
// });
// console.log(x) // 1

//----------------------------------

// event loop ще одне пояснення
//
// console.log('1')
// setTimeout(() => console.log('другий'), 2000);
// console.log('2')
// setTimeout(() => console.log('перший'), 1000);
// console.log('3')
//
// //виконання 1, 2, 3, перший, другий
//
//
// let i = 0;
// while (i < 5) {
//     setTimeout(() => {
//         console.log(i)
//     },1000);
//     i++
// }
//  виводе 5 по 5
//
//
// let a = 0
// while(a < 5 ) {
// run(a);
// a++
// }
//
// function run (a) {
//     setTimeout(
//         () => {
//             console.log(a) //0, 1, 2, 3, 4
//         }, 1000)
// }
//
// таймер
// let seconds = 5;
// while (seconds >= 0) {
//     run(seconds);
//     seconds--;
// }
//
// function run(s) {
//     setTimeout(() => {
//         console.log(`Залишилось часу: ${s} секунд`);
//     }, (5 - s) * 1000);
// }

//----------------------------------

// Проміси resolve
//
// для того, щоб не було callback hell використовують обгортку - promise
//
// new Promise(resolve => {
//     setTimeout(() => {
//         let x = 1;
//         console.log(x)
//         resolve(x)
//     }, 1000);
// })
//     .then((x) => {
//         return new Promise(resolve => { // передати далі Promise
//             setTimeout(() => {
//                 x++;
//                 console.log(x)
//                 resolve(x) // передать далі
//             }, 1000)
//         })
//     })
//     .then((x) => {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 x++;
//                 console.log(x)
//                 resolve(x) // передать далі
//             }, 1000)
//         })
//     })
//     .then((x) => {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 x++;
//                 console.log(x)
//                 resolve(x) // передать далі
//             }, 1000)
//         })
//     })

// ---------------------------------

// Проміси reject
//
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let x = 1
//         console.log(x)
//         resolve(x)
//     }, 1000)
// })
//     .then((value) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 value++
//                 console.log(value)
//                 resolve(value)
//             }, 1000)
//         })
//     })
//     .then((value) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 value++
//                 if (false)  {
//                     reject('some went wrong')
//                 } else {
//                     resolve(value)
//                     console.log(value)
//                 }
//             }, 1000)
//         })
//     })
//
//     // якщо помилка стається reject передає її на catch
//     // якщо помилка не стається resolve ігнорує reject і catch та передає на інший then
//
//     .catch(reason => {
//         console.log(reason)
//     }).then((value) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             value++
//             console.log(value)
//             resolve(value)
//         }, 1000)
//     })
// })

// ----------------------------------

// Статуси промісів
//
// теорія

// ----------------------------------

// Promise race all any
//
// витягуємо окремого user та його post
//
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then(users => {
//         for (const user of users) {
//            fetch('https://jsonplaceholder.typicode.com/posts?userId='+user.id)
//                .then((response) => response.json())
//                .then(postOfUser => {
//                    user.posts = postOfUser;
//                });
//             console.log(user)
//         }
//
//     });
//
// Подібний метод
//
// const users = fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//
//
// const posts = fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//
//
// Promise.all([users, posts]).then(result => {
//     let [users, posts] = result
//     const usersArray = result[0]
//     const postsArray = result[1]
//
//     for (const user of usersArray) {
//        user.posts = []
//         for (const post of postsArray) {
//             if (user.id === post.userId) {
//                 user.posts.push(post)
//             }
//         }
//     }
//     console.log(usersArray)
// })
//
//
// // перегони - який виконається швидше той і виведеться
// // випадок коли необхідно дістати інформацію з різних серверів
// // або допоміжних на випадок, коли один сервер ляже
// Promise.race([users, posts]).then(result => {
//     console.log(result)}) // або users, або posts
//
// // схожа дія (any)
// Promise.any([users, posts]).then(result =>{
//     console.log(result)
// })