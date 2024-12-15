import { cartItems } from "./cart.js";
import { products } from "./products.js";

export const addToCart = (id) => {
  const foundProduct = products.find((product) => product.id === id);
  const addedProduct = { ...foundProduct, quantity: 1 };
  cartItems.push(addedProduct);
  console.log(cartItems);
};
