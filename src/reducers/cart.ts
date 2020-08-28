import {
  CartState,
  CartActionTypes,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  SUBTRACT_QUANTITY,
  CHANGE_QUANTITY,
  FETCH_CART,
  FETCH_CART_SUCCESS,
  FETCH_CART_ERROR
} from "types/cart";

export const initialState: CartState = {
  items: [],
  isLoading: false,
  error: ""
};

const cartReducer = (state = initialState, action: CartActionTypes) => {
  switch (action.type) {
    case FETCH_CART:
      return {
        ...state,
        items: [],
        isLoading: true,
        error: ""
      };

    case FETCH_CART_SUCCESS: {
      return { ...state, isLoading: false, items: action.payload };
    }

    case FETCH_CART_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }

    case ADD_TO_CART:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };

    case ADD_QUANTITY:
      return {
        ...state,
        items: state.items.map(item => {
          const newItem = { ...item, quantity: item.quantity + 1 };
          return item.id === action.payload ? newItem : item;
        })
      };

    case SUBTRACT_QUANTITY:
      return {
        ...state,
        items: state.items.map(item => {
          const newItem = {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 1
          };
          return item.id === action.payload ? newItem : item;
        })
      };

    case CHANGE_QUANTITY:
      return {
        ...state,
        items: state.items.map(item => {
          const { id, quantity } = action.payload;
          const newItem = {
            ...item,
            quantity: quantity > 1 ? quantity : 1
          };
          return item.id === id ? newItem : item;
        })
      };

    default:
      return state;
  }
};

export default cartReducer;
