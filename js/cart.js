export const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

export const saveToLocalStorage = () =>
  localStorage.setItem("cart", JSON.stringify(cartItems));
