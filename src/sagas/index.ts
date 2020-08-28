import { fork } from "redux-saga/effects";

import { fetchCartWatcherSaga } from "./cart";

export default function* rootSaga() {
  yield fork(fetchCartWatcherSaga);
}
