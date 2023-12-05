let products = [
    {
        id: 1,
        name: "Burger",
        price: 200,
        image: "assets/burger.png"
    },
    {
        id: 2,
        name: "Roast chiken",
        price: 200,
        image: "assets/chicken.jpg"
    },
    {
        id: 3,
        name: "Pasta",
        price: 1200,
        image: "assets/pasta.jpg"
    },
    {
        id: 4,
        name: "Pizza",
        price: 600,
        image: "assets/pizza.jpeg"
    },
    {
        id: 5,
        name: "Salade",
        price: 250,
        image: "assets/salade.jpg"
    },
    {
        id: 6,
        name: "Soap",
        price: 180,
        image: "assets/soupe.jpg"
    },
];

let layoutdiv = document.querySelector(".layout");
let btnadd = document.querySelector(".additem");
let cartdiv = document.querySelector(".cart .addeditems");
const Addproducts = () => {
    let productsList = products.map(item => {
      return `
        <div class="item">
            <img src="${item.image}" alt="${item.name}" class="image">
            <h3>${item.name}</h3>
            <span>${item.price} $</span>
            <button type="button" onclick="getItem(${item.id})" class="additem">Add to Cart</button>
            <div class="addtocart">
                <span class="plus">+</span>
                <span class="number">0</span>
                <span class="moins">-</span>
            </div>
        </div>
        `
    })
    
    layoutdiv.innerHTML = productsList.join('');
}


const getItem = (id) => {
let currentProduct = products.find(item => item.id === id);
    
console.log(currentProduct)
    return cartdiv.innerHTML += `
    <div class="cart-items">
    <img src="${currentProduct.image}" width="100" height="100" />
    <h4>Name</span>
    <p>${currentProduct.name}
    <h4>Price</span>
    <p>${currentProduct.price} $
    </div> `;
}


Addproducts();