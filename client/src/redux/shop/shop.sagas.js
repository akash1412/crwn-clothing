import { all, takeLatest, takeEvery, call, put } from "redux-saga/effects";

/*
 *takeEvery:What takeEvery does is,it listen to Every actions of a specific type that we passed to it.
 *
 *put: In Sagas we dispatch action with "put" effect.
 */

import shopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionSnapshotToMap
} from "../../firebase/firebase.utils";

import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.actions";

function* fetchCollectionAsync() {
  yield console.log("I am fired");

  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get();
    yield snapShot.docs.map(doc => console.log(doc.data()));
    //* now call is an effect which calls the
    //*convertCollecetionSnapshotToMap, we can call the function normally but in case,
    //* if the function takes longer time to execute, insted of that we can use "call" effect with help of which we can use yield on it
    const collectionMap = yield call(
      convertCollectionSnapshotToMap,
      snapShot.docs
    );
    yield put(fetchCollectionSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

function* onfetchCollectionStart() {
  //*here the second parameter will be another generator function which will run when the specific action comes in listened by the takeEvery method
  yield takeLatest(
    shopActionTypes.FETCHING_COLLECTION_START,
    fetchCollectionAsync
  );
}

export function* shopSagas() {
  yield all([call(onfetchCollectionStart)]);
}
