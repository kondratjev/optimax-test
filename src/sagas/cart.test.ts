import { expectSaga } from "redux-saga-test-plan";

import { fetchCartSuccess } from "actions/cart";

import { fetchCartSaga } from "./cart";

import { fetchCart } from "services/api";

import cart from "__mock__/cart.json";

it("test fetchCartSaga", () => {
  return expectSaga(fetchCartSaga)
    .put(fetchCartSuccess(cart))
    .delay(1000)
    .call(fetchCart)
    .run(false);
});
