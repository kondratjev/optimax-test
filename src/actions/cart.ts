import {
  CartItemType,
  CartActionTypes,
  FETCH_CART,
  FETCH_CART_SUCCESS,
  FETCH_CART_ERROR,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SUBTRACT_QUANTITY,
  ADD_QUANTITY,
  CHANGE_QUANTITY
} from "types/cart";

export const fetchCart = (): CartActionTypes => ({
  type: FETCH_CART
});

export const fetchCartSuccess = (cart: CartItemType[]): CartActionTypes => ({
  type: FETCH_CART_SUCCESS,
  payload: cart
});

export const fetchCartError = (error: string): CartActionTypes => ({
  type: FETCH_CART_ERROR,
  payload: error
});

export const addToCart = (item: CartItemType): CartActionTypes => ({
  type: ADD_TO_CART,
  payload: item
});

export const removeFromCart = (id: string): CartActionTypes => ({
  type: REMOVE_FROM_CART,
  payload: id
});

export const subtractQuantity = (id: string): CartActionTypes => ({
  type: SUBTRACT_QUANTITY,
  payload: id
});

export const addQuantity = (id: string): CartActionTypes => ({
  type: ADD_QUANTITY,
  payload: id
});

export const changeQuantity = (
  id: string,
  quantity: number
): CartActionTypes => ({
  type: CHANGE_QUANTITY,
  payload: { id, quantity }
});
