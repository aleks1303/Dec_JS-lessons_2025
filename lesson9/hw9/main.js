// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

const div = document.createElement('div')
div.classList.add('wrap', 'collapse', 'alpha', 'beta')
div.innerText = 'hello div'

const divClone = div.cloneNode(true)

document.body.append(div, divClone)

//     #OPLI89c9G
// - Є масив:
//     ['Main', 'Products', 'About us', 'Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let array =  ['Main','Products','About us','Contacts']
let ul = document.createElement('ul')
for (const item of array) {
  let li =  document.createElement('li')
    li.innerText = item
    ul.append(li)
}
document.body.appendChild(ul)


// #jeBqHV525U5
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

const courses = document.createElement('div')

for (const item of coursesAndDurationArray) {
    const course = document.createElement('div')
    let title = document.createElement('h2')
    title.innerText = item.title

    let monthDuration = document.createElement('h3')
    monthDuration.innerText = `monthDuration: ${item.monthDuration}`

    let hr = document.createElement('hr')
    course.append(title, monthDuration, hr)
    courses.appendChild(course)
}
document.body.appendChild(courses)

// =========================
//     #Kx1xgoKy8
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
const courses1 = document.createElement('div')

for (const item of coursesAndDurationArray) {
    const course = document.createElement('div')
    course.style.background = '#b0babf'
    course.classList.add('item')
    let title = document.createElement('h1')
    title.classList.add('heading')
    title.innerText = item.title

    let monthDuration = document.createElement('p')
    monthDuration.classList.add('description')
    monthDuration.innerText = `monthDuration: ${item.monthDuration}`

    let br = document.createElement('br')
    course.append(title, monthDuration, br)
    courses.appendChild(course)
}
document.body.appendChild(courses)
// ==========================