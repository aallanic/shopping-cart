let products;

export function create() {
  products = [];
}

export function getProductCount() {
  return products.length;
}

export function addProduct(product) {
  products.push(product);
}

export function getTotalValue() {
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    totalPrice += products[i].price;
  }
  return totalPrice;
}

export function getProducts() {
  return products;
}

export function removeProduct(name) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === name) {
      products.splice(i, 1);
    }
  }
}
