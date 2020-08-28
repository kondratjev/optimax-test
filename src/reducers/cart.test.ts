import { AnyAction } from "redux";

import cartReducer, { initialState } from "./cart";

import {
  CartActionTypes,
  FETCH_CART,
  FETCH_CART_SUCCESS,
  FETCH_CART_ERROR,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  SUBTRACT_QUANTITY,
  CHANGE_QUANTITY
} from "types/cart";

const firstItem = { id: "1", name: "Test", quantity: 1, price: 1.99 };
const secondItem = { id: "2", name: "Test #2", quantity: 2, price: 4.99 };

describe("cart reducer tests", () => {
  it("should return the initial state", () => {
    expect(cartReducer(undefined, {} as AnyAction)).toEqual(initialState);
  });

  it("should handle FETCH_CART", () => {
    const state = {
      items: [firstItem],
      isLoading: false,
      error: ""
    };
    const action: CartActionTypes = {
      type: FETCH_CART
    };
    const resultState = {
      items: [],
      isLoading: true,
      error: ""
    };
    expect(cartReducer(state, action)).toEqual(resultState);
  });

  it("should handle FETCH_CART_SUCCESS", () => {
    const state = {
      items: [],
      isLoading: true,
      error: ""
    };
    const action: CartActionTypes = {
      type: FETCH_CART_SUCCESS,
      payload: [firstItem]
    };
    const resultState = {
      items: [firstItem],
      isLoading: false,
      error: ""
    };
    expect(cartReducer(state, action)).toEqual(resultState);
  });

  it("should handle FETCH_CART_ERROR", () => {
    const state = {
      items: [],
      isLoading: true,
      error: ""
    };
    const action: CartActionTypes = {
      type: FETCH_CART_ERROR,
      payload: "Error"
    };
    const resultState = {
      items: [],
      isLoading: false,
      error: "Error"
    };
    expect(cartReducer(state, action)).toEqual(resultState);
  });

  it("should handle ADD_TO_CART", () => {
    const state = {
      items: [firstItem],
      isLoading: false,
      error: ""
    };
    const action: CartActionTypes = {
      type: ADD_TO_CART,
      payload: secondItem
    };
    const resultState = {
      items: [secondItem, firstItem],
      isLoading: false,
      error: ""
    };
    expect(cartReducer(state, action)).toEqual(resultState);
  });

  it("should handle REMOVE_FORM_CART", () => {
    const state = {
      items: [secondItem, firstItem],
      isLoading: false,
      error: ""
    };
    const action: CartActionTypes = {
      type: REMOVE_FROM_CART,
      payload: "1"
    };
    const resultState = { items: [secondItem], isLoading: false, error: "" };
    expect(cartReducer(state, action)).toEqual(resultState);
  });

  it("should handle ADD_QUANTITY", () => {
    const state = { items: [firstItem], isLoading: false, error: "" };
    const action: CartActionTypes = {
      type: ADD_QUANTITY,
      payload: "1"
    };
    const resultState = {
      items: [{ ...firstItem, quantity: 2 }],
      isLoading: false,
      error: ""
    };
    expect(cartReducer(state, action)).toEqual(resultState);
  });

  it("should handle SUBTRACT_QUANTITY", () => {
    const state = {
      items: [{ ...firstItem, quantity: 2 }],
      isLoading: false,
      error: ""
    };
    const action: CartActionTypes = {
      type: SUBTRACT_QUANTITY,
      payload: "1"
    };
    const resultState = {
      items: [firstItem],
      isLoading: false,
      error: ""
    };
    expect(cartReducer(state, action)).toEqual(resultState);
  });

  it("should handle CHANGE_QUANTITY", () => {
    const state = { items: [firstItem], isLoading: false, error: "" };
    const action: CartActionTypes = {
      type: CHANGE_QUANTITY,
      payload: { id: "1", quantity: 52 }
    };
    const resultState = {
      items: [{ ...firstItem, quantity: 52 }],
      isLoading: false,
      error: ""
    };
    expect(cartReducer(state, action)).toEqual(resultState);
  });
});
