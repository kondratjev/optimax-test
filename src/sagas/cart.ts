import { call, put, delay, takeLatest } from "redux-saga/effects";

import { fetchCartSuccess, fetchCartError } from "actions/cart";

import { fetchCart } from "services/api";

import { FETCH_CART, CartItemType } from "types/cart";

export function* fetchCartSaga() {
  try {
    const cart: CartItemType[] = yield call(fetchCart);
    yield delay(1000);
    yield put(fetchCartSuccess(cart));
  } catch (e) {
    const error = (e as Error).message;
    yield put(fetchCartError(error));
  }
}

export function* fetchCartWatcherSaga() {
  yield takeLatest(FETCH_CART, fetchCartSaga);
}
