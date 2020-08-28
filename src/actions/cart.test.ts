import { fetchCartSuccess, addToCart } from "./cart";

import { FETCH_CART_SUCCESS, ADD_TO_CART } from "types/cart";

const firstItem = { id: "1", name: "Test", quantity: 1, price: 10 };
const secondItem = { id: "2", name: "Test #2", quantity: 2, price: 10 };

describe("actions", () => {
  it("fetch cart success", () => {
    const payload = [secondItem, firstItem];
    const expectedAction = {
      type: FETCH_CART_SUCCESS,
      payload
    };
    expect(fetchCartSuccess(payload)).toEqual(expectedAction);
  });

  it("add to cart", () => {
    const expectedAction = {
      type: ADD_TO_CART,
      payload: firstItem
    };
    expect(addToCart(firstItem)).toEqual(expectedAction);
  });
});
