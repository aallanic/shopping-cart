export class ShoppingCart {
  constructor() {
    this.products = [];
  }

  getProductCount() {
    return this.products.length;
  }

  addProduct(product) {
    this.products.push(product);
  }

  getTotalValue() {
    let totalPrice = 0;
    for (let i = 0; i < this.products.length; i++) {
      totalPrice += this.products[i].price;
    }
    return totalPrice;
  }

  getProducts() {
    return this.products;
  }

  removeProduct(name) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === name) {
        this.products.splice(i, 1);
      }
    }
  }
}
