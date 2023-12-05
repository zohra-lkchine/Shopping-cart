let products = [
    {
        id: 1,
        name: "Burger",
        price: 200,
        image: "assets/burger.png",
        numbrInCart: 0
    },
    {
        id: 2,
        name: "Roast chiken",
        price: 200,
        image: "assets/chicken.jpg",
        numbrInCart: 0
    },
    {
        id: 3,
        name: "Pasta",
        price: 1200,
        image: "assets/pasta.jpg",
        numbrInCart: 0
    },
    {
        id: 4,
        name: "Pizza",
        price: 600,
        image: "assets/pizza.jpeg",
        numbrInCart: 0
    },
    {
        id: 5,
        name: "Salade",
        price: 250,
        image: "assets/salade.jpg",
        numbrInCart: 0
    },
    {
        id: 6,
        name: "Soap",
        price: 180,
        image: "assets/soupe.jpg",
        numbrInCart: 0
    },
];

let layoutdiv = document.querySelector(".layout");
let btnadd = document.querySelector(".additem");
let cartdiv = document.querySelector(".cart .addeditems");
let addeditems = document.querySelectorAll(".cart .addeditems .cart-items");
let totalpDiv = document.querySelector(".totalprice");
let deleteBtn = document.querySelector(".delete");
let numbrAdd = document.querySelector(".nbr");
let totalPrice = 0;





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
      <span class="nbr" id="#product-${item.id}">${item.numbrInCart}</span>
      <span class="moins">-</span>
      </div>
      </div>
      `
    })
    
    layoutdiv.innerHTML = productsList.join('');
}

// function call
Addproducts();


let newNmb = 0;


// function pour ajouter produit au panier
const getItem = (id) => {
    

let currentProduct = products.find(item => item.id === id);

let numbrElement = document.getElementById(`#product-${currentProduct.id}`);
    
console.log(numbrElement);

     cartdiv.innerHTML += `
    <div class="cart-items">
    <img src="${currentProduct.image}" width="100" height="100" />
    <h4>Name</span>
    <p>${currentProduct.name}
    <h4>Price</span>
    <p>${currentProduct.price} $
    </div> `;

    totalPrice += currentProduct.price;
    totalpDiv.innerHTML = `${totalPrice} $`;

    currentProduct.numbrInCart = newNmb + 1;
    numbrElement.innerHTML = `<span>${currentProduct.numbrInCart}</span>`
    
}

// function pour supprimer touts les produits du panier

const removeAll = () => {
    cartdiv.innerHTML = "";
    totalpDiv.innerHTML = "";
}


