// store.js
import { reactive } from "vue";

export const store = reactive({
  //Variabili
  cart: JSON.parse(localStorage.getItem("cart")) || [],

  initialOwner: JSON.parse(localStorage.getItem("initialOwner")) || null,
  restaurantId: JSON.parse(localStorage.getItem("restaurantId")) || null,
  currentOwner: null,

  confirmModal: false,

  //Funzioni
  addToCart(product, restaurant) {
    // this.currentOwner = product.restaurant;
    console.log(restaurant.name);
    //controllo se nel carrello ci sono elementi uguali
    const existingProduct = this.cart.find((i) => i.id === product.id);
    // inizializzo il current owner
    this.currentOwner = restaurant.name;
    // verifico che l'initial owner sia diverso da null
    if (this.initialOwner === null || this.cart.length === 0) {
      this.initialOwner = restaurant.name;
      this.restaurantId = restaurant.id;
      product.quantity = 1;
      this.cart.push(product);
      // verifico che l'initial owner sia diverso dal current owner
    } else if (this.initialOwner !== restaurant.name) {
      //chiedo conferma all'utente se vuole svuotare il carrello e aquistare da un nuovo ristoratore
      this.confirmModal = true;
    } else {
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        product.quantity = 1;
        this.cart.push(product);
      }
    }
    localStorage.setItem("initialOwner", JSON.stringify(this.initialOwner));
    localStorage.setItem("restaurantId", JSON.stringify(this.restaurantId));
    localStorage.setItem("cart", JSON.stringify(this.cart));
  },

  updateQuantity(productId, newQuantity) {
    const product = this.cart.find((i) => i.id === productId);
    if (product && newQuantity > 0) {
      product.quantity = newQuantity;
    } else if (product && newQuantity === 0) {
      this.removeFromCart(productId);
    }
    localStorage.setItem("cart", JSON.stringify(this.cart));
  },

  removeFromCart(productId) {
    const indexToRemove = this.cart.findIndex((item) => item.id === productId);
    if (indexToRemove !== -1) {
      this.cart.splice(indexToRemove, 1);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    } else {
      console.error(`Product with id ${productId} not found in the cart.`);
    }
  },
  clearCart() {
    this.cart = [];
    this.initialOwner = null;
    this.restaurantId = null;
    localStorage.setItem("cart", JSON.stringify(this.cart));
  },

  //Getter
  getCart() {
    return this.cart;
  },
});
