import assert from 'assert';
import {
  create,
  getProductCount,
  getTotalValue,
  addProduct,
  getProducts,
  removeProduct
} from '../lib';

describe('Shopping cart', () => {
  beforeEach(() => {
    create();
  });

  it('should create an empty shopping cart', () => {
    assert.equal(getProductCount(), 0);
  });

  it('should add single product to shopping cart', () => {
    addProduct({name: 'bag', price: 200});
    assert.equal(getProductCount(), 1);
    assert.equal(getTotalValue(), 200);
  });

  it('should add different product to the shopping cart', () => {
    addProduct({name: 'bag', price: 200});
    addProduct({name: 'hat', price: 60});

    assert.equal(getProductCount(), 2);
    assert.equal(getTotalValue(), 260);
  });

  it('should get all products', () => {
    const products = [
      {name: 'bag', price: 200},
      {name: 'hat', price: 60}
    ];
    addProduct(products[0]);
    addProduct(products[1]);

    assert.deepEqual(getProducts(), products);
  });

  it('should remove a product', () => {
    const products = [
      {name: 'bag', price: 200},
      {name: 'hat', price: 60}
    ];
    addProduct(products[0]);
    addProduct(products[1]);

    removeProduct('bag');

    assert.equal(getProductCount(), 1);

    removeProduct('shoes');

    assert.equal(getProductCount(), 1);
  });
});
