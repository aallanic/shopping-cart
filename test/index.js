import assert from 'assert';
import {ShoppingCart} from '../lib/shopping-cart';

describe('Shopping cart', () => {
  let shoppingCart;

  beforeEach(() => {
    shoppingCart = new ShoppingCart();
  });

  it('should create an empty shopping cart', () => {
    assert.equal(shoppingCart.getProductCount(), 0);
  });

  it('should add single product to shopping cart', () => {
    shoppingCart.addProduct({name: 'bag', price: 200});
    assert.equal(shoppingCart.getProductCount(), 1);
    assert.equal(shoppingCart.getTotalValue(), 200);
  });

  it('should add different product to the shopping cart', () => {
    shoppingCart.addProduct({name: 'bag', price: 200});
    shoppingCart.addProduct({name: 'hat', price: 60});

    assert.equal(shoppingCart.getProductCount(), 2);
    assert.equal(shoppingCart.getTotalValue(), 260);
  });

  it('should get all products', () => {
    const products = [
      {name: 'bag', price: 200},
      {name: 'hat', price: 60}
    ];
    shoppingCart.addProduct(products[0]);
    shoppingCart.addProduct(products[1]);

    assert.deepEqual(shoppingCart.getProducts(), products);
  });

  it('should remove a product', () => {
    const products = [
      {name: 'bag', price: 200},
      {name: 'hat', price: 60}
    ];
    shoppingCart.addProduct(products[0]);
    shoppingCart.addProduct(products[1]);

    shoppingCart.removeProduct('bag');

    assert.equal(shoppingCart.getProductCount(), 1);

    shoppingCart.removeProduct('shoes');

    assert.equal(shoppingCart.getProductCount(), 1);
  });
});
