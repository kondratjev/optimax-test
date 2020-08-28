import {
  fetchCart,
  fetchCartSuccess,
  fetchCartError,
  addToCart,
  removeFromCart,
  subtractQuantity,
  addQuantity,
  changeQuantity
} from "./cart";

import {
  FETCH_CART,
  FETCH_CART_SUCCESS,
  FETCH_CART_ERROR,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SUBTRACT_QUANTITY,
  ADD_QUANTITY,
  CHANGE_QUANTITY
} from "types/cart";

const firstItem = { id: "1", name: "Test", quantity: 1, price: 10 };
const secondItem = { id: "2", name: "Test #2", quantity: 2, price: 10 };

describe("actions", () => {
  it("fetch cart", () => {
    const expectedAction = {
      type: FETCH_CART
    };
    expect(fetchCart()).toEqual(expectedAction);
  });

  it("fetch cart success", () => {
    const payload = [secondItem, firstItem];
    const expectedAction = {
      type: FETCH_CART_SUCCESS,
      payload
    };
    expect(fetchCartSuccess(payload)).toEqual(expectedAction);
  });

  it("fetch cart error", () => {
    const payload = "Error";
    const expectedAction = {
      type: FETCH_CART_ERROR,
      payload
    };
    expect(fetchCartError(payload)).toEqual(expectedAction);
  });

  it("add to cart", () => {
    const expectedAction = {
      type: ADD_TO_CART,
      payload: firstItem
    };
    expect(addToCart(firstItem)).toEqual(expectedAction);
  });

  it("remove from cart", () => {
    const payload = "1";
    const expectedAction = {
      type: REMOVE_FROM_CART,
      payload
    };
    expect(removeFromCart(payload)).toEqual(expectedAction);
  });

  it("subtract quantity", () => {
    const payload = "1";
    const expectedAction = {
      type: SUBTRACT_QUANTITY,
      payload
    };
    expect(subtractQuantity(payload)).toEqual(expectedAction);
  });

  it("add quantity", () => {
    const payload = "1";
    const expectedAction = {
      type: ADD_QUANTITY,
      payload
    };
    expect(addQuantity(payload)).toEqual(expectedAction);
  });

  it("change quantity", () => {
    const payload = { id: "1", quantity: 52 };
    const expectedAction = {
      type: CHANGE_QUANTITY,
      payload
    };
    expect(changeQuantity("1", 52)).toEqual(expectedAction);
  });
});
