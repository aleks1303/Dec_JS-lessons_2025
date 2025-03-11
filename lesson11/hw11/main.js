//  #HmvAfRQM
//- взяти https://dummyjson.com/docs/carts та вивести інформацію про всі кошики. Відобразити всі поля кожного кошика.
let section = document.getElementById('section');

fetch('https://dummyjson.com/carts?limit=50')
    .then(res => res.json())
    .then(cartsObject => {
            let {carts} = cartsObject
            for (const cart of carts) {
                let div = document.createElement('div')
                div.classList.add('cart-list')
                let id = document.createElement('h2')
                id.innerText = `Cart id: ${cart.id}`
                let divProducts = document.createElement('div')
                divProducts.classList.add('product');
                divProducts.innerText = `Products:`
                let total = document.createElement('h3')
                total.innerText = `- Total ${cart.total}`

                let totalProducts = document.createElement('h3')
                totalProducts.innerText = `- Total Products - ${cart.totalProducts}`;

                let userId = document.createElement('h3')
                userId.innerText = `- UserId ${cart.userId}`

                let totalQuantity = document.createElement('h3')
                totalQuantity.innerText = `- total Quantity ${cart.totalQuantity}`

                let discount = document.createElement('h3')
                discount.innerText = `- Discounted Total ${cart.discountedTotal}`
                let hr = document.createElement('hr')
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


//   #whXxOBlYS0H
//   - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

const recipeSection = document.getElementById('recipes')

fetch('https://dummyjson.com/recipes?limit=50')
    .then(res => res.json())
    .then(recipesObject => {
            let {recipes} = recipesObject
            for (const recipe of recipes) {
                const recipeDiv = document.createElement('div');
                recipeDiv.classList.add('recipeDiv')
                const id = document.createElement('h3');
                id.innerText = `Recipe id: ${recipe.id}`
                const name = document.createElement('h2');
                name.innerText = `${recipe.name}`
                const cuisine = document.createElement('h3');
                cuisine.innerText = `${recipe.cuisine} cuisine`
                const image = document.createElement('img');
                image.classList.add('image')
                image.src = `${recipe.image}`
                const ul = document.createElement('ul')
                const nameIng = document.createElement('h3')
                nameIng.innerText = `Ingredients`
                ul.append(nameIng)
                for (const ingredients of recipe.ingredients) {
                      const li = document.createElement('li')
                    li.classList.add('ingredientsLi')
                    li.innerText = `${ingredients}`
                    ul.append(li)
                }
                const ulInstr = document.createElement('ul')
                const nameIns = document.createElement('h3')
                nameIns.innerText = `Instructors`
                ul.append(nameIns)
                for (const instruction of recipe.instructions) {
                    const li = document.createElement('li')
                    li.classList.add('instruction')
                    li.innerText = `${instruction}`
                    ul.append(li)
                }
                const p1 = document.createElement('p')
                p1.innerText = ` - prepTimeMinutes:  ${recipe.prepTimeMinutes}`
                p1.classList.add('size');
                const p2 = document.createElement('p')
                p2.innerText = ` - cookTimeMinutes:  ${recipe.cookTimeMinutes}`
                p2.classList.add('size');
                const p3 = document.createElement('p')
                p3.innerText = ` - servings:  ${recipe.servings}`
                p3.classList.add('size');
                const p4 = document.createElement('p')
                p4.innerText = ` - difficulty:  ${recipe.difficulty}`
                p4.classList.add('size');
                const p5 = document.createElement('p')
                p5.innerText = ` - caloriesPerServing:  ${recipe.caloriesPerServing}`
                p5.classList.add('size');

                const tag = document.createElement('ul')
                const nameTag = document.createElement('h3')
                nameTag.innerText = `Tags`
                tag.appendChild(nameTag)
                for (const tags of recipe.tags) {
                    const li = document.createElement('li')
                    li.classList.add('tags')
                    li.innerText = `${tags}`
                    tag.append(li)
                }
                const p6 = document.createElement('p')
                p6.innerText = ` - userId:  ${recipe.userId}`
                p6.classList.add('size');
                const p7 = document.createElement('p')
                p7.innerText = ` - rating:  ${recipe.rating}`
                p7.classList.add('size');
                const p8 = document.createElement('p')
                p8.innerText = ` - reviewCount:  ${recipe.reviewCount}`
                p8.classList.add('size');

                const mealType = document.createElement('ul')
                const nameMeal = document.createElement('h3')
                nameMeal.innerText = `mealType`
                mealType.appendChild(nameMeal)
                for (const meal of recipe.mealType) {
                    const li = document.createElement('li')
                    li.classList.add('tags')
                    li.innerText = `${meal}`
                    mealType.append(li)
                }
                const hr = document.createElement('hr')
                recipeDiv.append(id, name, cuisine, image, ul, ulInstr, p1, p2, p3, p4, p5, tag, p6, p7, p8, mealType,hr)
                recipeSection.appendChild(recipeDiv)
            }
        }
    );
