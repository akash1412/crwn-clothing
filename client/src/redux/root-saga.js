import { all, call } from "redux-saga/effects";

import { shopSagas } from "./shop/shop.sagas";

import { userSagas } from "./user/user.sagas";

import { cartSagas } from "./cart/cart.sagas";

function* rootSaga() {
  // all method runs multiple sagas at the same time.
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}

export default rootSaga;
