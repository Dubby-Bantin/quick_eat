import { cartItems } from "./cart.js";

const cartItemsContainer = document.querySelector(".items");
let html = "";

function generateCartHtml() {
  cartItems.forEach((product) => {
    html += `
     <div class="item">
          <img src=${product.productImage} alt="food" />
          <span>${product.productName}</span>
          <span>$${product.productPrice}</span>
          <div class="counts">
            <button>-</button>
            <span>${product.quantity}</span>
            <button>+</button>
          </div>
          <i class="fa-solid fa-xmark"></i>
        </div>`;
  });
  cartItemsContainer.innerHTML = html || "no items in ur cart";
}

generateCartHtml();
