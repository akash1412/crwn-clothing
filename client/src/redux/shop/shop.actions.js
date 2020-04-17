import shopActionsTypes from "./shop.types";

import {
  firestore,
  convertCollectionSnapshotToMap
} from "../../firebase/firebase.utils";

export const fetchCollectionStart = () => ({
  type: shopActionsTypes.FETCHING_COLLECTION_START
});

export const fetchCollectionSuccess = collections => ({
  type: shopActionsTypes.FETCHING_COLLECTION_SUCCESS,
  payload: collections
});

export const fetchCollectionFailure = errorMessage => ({
  type: shopActionsTypes.FETCHING_COLLECTION_FAILURE,
  payload: errorMessage
});

export const fetchCollectionStartAsync = () => {
  return async dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart());
    // collectionRef
    //   .get()
    //   .then(snapShot => {
    //     console.log("snapshot is fired", snapShot.docs);
    //     const collectionMap = convertCollectionSnapshotToMap(snapShot.docs);
    //     dispatch(fetchCollectionSuccess(collectionMap));
    //   })
    // .catch(error => dispatch(fetchCollectionFailure(error.message)));
    try {
      const snapShot = await collectionRef.get();
      // snapshot.docs.map(doc => console.log(doc.data()));
      const collectionMap = convertCollectionSnapshotToMap(snapShot.docs);
      dispatch(fetchCollectionSuccess(collectionMap));
    } catch (error) {
      dispatch(fetchCollectionFailure(error.message));
    }
  };
};
