//  #HmvAfRQM
//- взяти https://dummyjson.com/docs/carts та вивести інформацію про всі кошики. Відобразити всі поля кожного кошика.
let section = document.getElementById('section');

fetch('https://dummyjson.com/carts?limit=50')
    .then(res => res.json())
    .then(cartsObject => {
            let {carts} = cartsObject
            for (const cart of carts) {
                console.log(cart)
                let div = document.createElement('div')
                div.classList.add('cart-list')
                let id = document.createElement('h2')
                id.innerText = `Cart id: ${cart.id}`
                let divProducts = document.createElement('div')
                divProducts.classList.add('target');
                let total = document.createElement('h2')
                total.innerText = `- Total ${cart.total}`

                let totalProducts = document.createElement('h2')
                totalProducts.innerText = `- Total Products - ${cart.totalProducts}`;

                let userId = document.createElement('h2')
                userId.innerText = `- UserId ${cart.userId}`

                let totalQuantity = document.createElement('h2')
                totalQuantity.innerText = `- total Quantity ${cart.totalQuantity}`

                let discount = document.createElement('h2')
                discount.innerText = `- Discounted Total ${cart.discountedTotal}`
                let hr = document.createElement('hr')
                divProducts.innerText = `Products:`
                for (const product of cart.products) {
                        let list = document.createElement('div')
                    let p1 = document.createElement('h5')
                    p1.innerText = `id: ${product.id}`
                    let title = document.createElement('h3')
                    title.innerText = `${product.title}`
                    let img = document.createElement('img')
                    img.src = `${product.thumbnail}`
                    let price = document.createElement('p')
                    price.innerText = `Price: ${product.price}`
                    let quantity = document.createElement('p')
                    quantity.innerText = `Quantity: ${product.quantity}`
                    let total = document.createElement('p')
                    total.innerText = `Total: ${product.total}`
                    let discountedTotal = document.createElement('p')
                    discountedTotal.innerText = `Discounted Total: ${product.discountedTotal}`
                    let discountPercentage = document.createElement('p')
                    discountPercentage.innerText = `Discount Percentage: ${product.discountPercentage}`
                   let br = document.createElement('br')

                        list.append(p1, title, img, price, quantity,total, discountedTotal, discountPercentage, br)
                        divProducts.append(list)
                }
                div.append(id, userId, totalProducts, total, totalQuantity, discount, divProducts, hr)
                section.appendChild(div)
            }
        }
    );
document.body.appendChild(section)


//   #whXxOBlYS0H
//   - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.