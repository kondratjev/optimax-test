export const FETCH_CART = "FETCH_CART";
export const FETCH_CART_SUCCESS = "FETCH_CART_SUCCESS";
export const FETCH_CART_ERROR = "FETCH_CART_ERROR";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SUBTRACT_QUANTITY = "SUBTRACT_QUANTITY";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const CHANGE_QUANTITY = "CHANGE_QUANTITY";

export type CartItemType = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

export type CartState = {
  items: CartItemType[];
  isLoading: boolean;
  error: string;
};

interface FetchCartAction {
  type: typeof FETCH_CART;
}

interface FetchCartSuccessAction {
  type: typeof FETCH_CART_SUCCESS;
  payload: CartItemType[];
}

interface FetchCartErrorAction {
  type: typeof FETCH_CART_ERROR;
  payload: string;
}

interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: CartItemType;
}

interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: string;
}

interface SubtractQuantityAction {
  type: typeof SUBTRACT_QUANTITY;
  payload: string;
}

interface AddQuantityAction {
  type: typeof ADD_QUANTITY;
  payload: string;
}

interface ChangeQuantityAction {
  type: typeof CHANGE_QUANTITY;
  payload: {
    id: string;
    quantity: number;
  };
}

export type CartActionTypes =
  | FetchCartAction
  | FetchCartSuccessAction
  | FetchCartErrorAction
  | AddToCartAction
  | RemoveFromCartAction
  | SubtractQuantityAction
  | AddQuantityAction
  | ChangeQuantityAction;
