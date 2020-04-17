import { all, call, put, takeLatest } from "redux-saga/effects";

import userActionTypes from "../user/user.types";
import { clearCart } from "./cart.actions";

function* clearCartOnSignout() {
  yield put(clearCart());
}

function* onSignoutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignout);
}

export function* cartSagas() {
  yield all([call(onSignoutSuccess)]);
}
