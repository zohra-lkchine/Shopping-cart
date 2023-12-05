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
      <div class="like">
      <h3>${item.name}</h3>
      <button class="likebtn" id="#like-${item.id}" onclick="likeItem(${item.id})">
      <svg xmlns="http://www.w3.org/2000/svg" class="likeicon" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
</svg>


      </buton>
      </div>
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

// Like function 

const likeItem = (id) => {
    let currentLiked = products.find(item => item.id === id);
    
    let likeIcon = document.getElementById(`#like-${currentLiked.id}`);

    likeIcon.style.color == "" ? likeIcon.style.color = "red" : likeIcon.style.color = "" 

    




}





// function pour supprimer touts les produits du panier

const removeAll = () => {
    cartdiv.innerHTML = "";
    totalpDiv.innerHTML = "";

    setTimeout(() => {
        location.reload();
    }, 500);
}


