import { cartItems, saveToLocalStorage } from "./cart.js";
import { products } from "./products.js";
import { addToCart } from "./utils.js";
saveToLocalStorage();
const openMenuEl = document.getElementById("bars");
const closemenuEl = document.getElementById("cancel");
const navbarEl = document.querySelector("nav");
const productsContainer = document.querySelector(".products");
const cartCount = document.querySelector(".items-count");
let html = "";

openMenuEl.addEventListener("click", () => {
  navbarEl.style.display = "flex";
  openMenuEl.style.display = "none";
  closemenuEl.style.display = "block";
});

closemenuEl.addEventListener("click", () => {
  navbarEl.style.display = "none";
  openMenuEl.style.display = "block";
  closemenuEl.style.display = "none";
});

function generateHtml() {
  products.forEach((product) => {
    html += `
    <div class="product">
    <img src="${product.productImage}" alt="food-4" />
    <span>${product.productName}</span>
    <span>${product.productPrice}</span>
    <button data-product-id="${product.id}" class="order-btn">Order Now</button>
    </div>`;
  });
  productsContainer.innerHTML = html;
}

generateHtml();
const buttons = document.querySelectorAll(".product button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    const matchingItem = cartItems.find(
      (cartItem) => cartItem.id === productId
    );
    if (matchingItem) {
      matchingItem.quantity += 1;
      // matchingItem.quantity++;
      // matchingItem.quantity = matchingItem.quantity + 1;
    } else {
      addToCart(productId);
    }
    saveToLocalStorage();
    cartCount.innerHTML = cartItems.length;
  });
});

if (!cartItems.length) {
  cartCount.innerHTML = 0;
} else {
  cartCount.innerHTML = cartItems.length;
}
// const arr = [1, 2, 3];
// const newArray = [...arr, 4, 5, 6];
// console.log(newArray);

// const human = {
//   name: "vkhfsbvdf",
// };

// const anotherHuman = human;
// console.log(anotherHuman.name);

// localStorage.setItem("user", JSON.stringify([1, 2]));
// console.log(typeof JSON.parse(localStorage.getItem("user")));
// const arr = [1, 2, 3];
// console.log(typeof arr);
